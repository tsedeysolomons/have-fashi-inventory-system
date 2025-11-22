from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from django.db import transaction
from .models import Category, Product, Cart, CartItem, Order, OrderItem
from .serializers import (
    CategorySerializer, ProductSerializer, CartSerializer,
    CartItemSerializer, OrderSerializer, CreateOrderSerializer
)


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for viewing categories"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """ViewSet for viewing products"""
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', None)
        style = self.request.query_params.get('style', None)
        search = self.request.query_params.get('search', None)

        if category:
            queryset = queryset.filter(category__slug=category)
        if style:
            queryset = queryset.filter(style__iexact=style)
        if search:
            queryset = queryset.filter(
                name__icontains=search
            ) | queryset.filter(
                description__icontains=search
            )
        return queryset


class CartViewSet(viewsets.ModelViewSet):
    """ViewSet for managing shopping carts"""
    serializer_class = CartSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Cart.objects.filter(user=user)
        else:
            session_key = self.request.session.session_key
            if not session_key:
                self.request.session.create()
                session_key = self.request.session.session_key
            return Cart.objects.filter(session_key=session_key)

    def get_or_create_cart(self):
        """Get or create a cart for the current user/session"""
        user = self.request.user if self.request.user.is_authenticated else None
        session_key = self.request.session.session_key

        if not session_key:
            self.request.session.create()
            session_key = self.request.session.session_key

        cart, created = Cart.objects.get_or_create(
            user=user if user else None,
            session_key=session_key if not user else None
        )
        return cart

    def list(self, request, *args, **kwargs):
        cart = self.get_or_create_cart()
        serializer = self.get_serializer(cart)
        return Response(serializer.data)

    @action(detail=False, methods=['post'])
    def add_item(self, request):
        """Add an item to the cart"""
        cart = self.get_or_create_cart()
        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 1))
        size = request.data.get('size')
        color = request.data.get('color')

        if not all([product_id, size, color]):
            return Response(
                {'error': 'product_id, size, and color are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        product = get_object_or_404(Product, id=product_id)
        cart_item, created = CartItem.objects.get_or_create(
            cart=cart,
            product=product,
            size=size,
            color=color,
            defaults={'quantity': quantity}
        )

        if not created:
            cart_item.quantity += quantity
            cart_item.save()

        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['put'])
    def update_item(self, request):
        """Update cart item quantity"""
        cart = self.get_or_create_cart()
        item_id = request.data.get('item_id')
        quantity = int(request.data.get('quantity', 1))

        if quantity <= 0:
            CartItem.objects.filter(id=item_id, cart=cart).delete()
            return Response({'message': 'Item removed from cart'})

        cart_item = get_object_or_404(CartItem, id=item_id, cart=cart)
        cart_item.quantity = quantity
        cart_item.save()

        serializer = CartItemSerializer(cart_item)
        return Response(serializer.data)

    @action(detail=False, methods=['delete'])
    def remove_item(self, request):
        """Remove an item from the cart"""
        cart = self.get_or_create_cart()
        item_id = request.data.get('item_id')

        CartItem.objects.filter(id=item_id, cart=cart).delete()
        return Response({'message': 'Item removed from cart'})

    @action(detail=False, methods=['delete'])
    def clear(self, request):
        """Clear all items from the cart"""
        cart = self.get_or_create_cart()
        cart.items.all().delete()
        return Response({'message': 'Cart cleared'})


class OrderViewSet(viewsets.ModelViewSet):
    """ViewSet for managing orders"""
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
            return Order.objects.filter(user=user)
        else:
            # For anonymous users, filter by email
            email = self.request.query_params.get('email', None)
            if email:
                return Order.objects.filter(email=email)
            return Order.objects.none()

    @action(detail=False, methods=['post'])
    def create_order(self, request):
        """Create an order from cart items"""
        serializer = CreateOrderSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        cart_id = serializer.validated_data['cart_id']
        cart = get_object_or_404(Cart, id=cart_id)

        if not cart.items.exists():
            return Response(
                {'error': 'Cart is empty'},
                status=status.HTTP_400_BAD_REQUEST
            )

        with transaction.atomic():
            # Calculate totals
            subtotal = sum(item.subtotal for item in cart.items.all())
            tax = subtotal * 0.1  # 10% tax
            shipping = 50.00  # Fixed shipping
            total = subtotal + tax + shipping

            # Create order
            order = Order.objects.create(
                user=request.user if request.user.is_authenticated else None,
                first_name=serializer.validated_data['first_name'],
                last_name=serializer.validated_data['last_name'],
                email=serializer.validated_data['email'],
                phone=serializer.validated_data['phone'],
                address=serializer.validated_data['address'],
                city=serializer.validated_data['city'],
                state=serializer.validated_data['state'],
                zip_code=serializer.validated_data['zip_code'],
                subtotal=subtotal,
                tax=tax,
                shipping=shipping,
                total=total,
            )

            # Create order items
            for cart_item in cart.items.all():
                OrderItem.objects.create(
                    order=order,
                    product=cart_item.product,
                    quantity=cart_item.quantity,
                    size=cart_item.size,
                    color=cart_item.color,
                    price=cart_item.product.price,
                )

            # Clear cart
            cart.items.all().delete()

        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_201_CREATED)

