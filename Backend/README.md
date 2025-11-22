# Have Fashion - Django Backend API

Django REST API backend for the Have Fashion e-commerce platform.

## Setup Instructions

### Step 1: Navigate to Backend Directory
```bash
cd backend
```

### Step 2: Create Virtual Environment (if not already created)
```bash
python -m venv venv
```

### Step 3: Activate Virtual Environment

**Windows (PowerShell):**
```powershell
.\venv\Scripts\Activate.ps1
```

**Windows (Command Prompt):**
```cmd
venv\Scripts\activate.bat
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

### Step 4: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 5: Create Environment File
Copy `.env.example` to `.env` and update the values:
```bash
copy .env.example .env
```

### Step 6: Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 7: Create Superuser (Optional - for admin access)
```bash
python manage.py createsuperuser
```

### Step 8: Run Development Server
```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

## API Endpoints

### Products
- `GET /api/products/` - List all products
- `GET /api/products/{slug}/` - Get product details
- `GET /api/products/?category={slug}` - Filter by category
- `GET /api/products/?style={style}` - Filter by style
- `GET /api/products/?search={query}` - Search products

### Categories
- `GET /api/categories/` - List all categories
- `GET /api/categories/{slug}/` - Get category details

### Cart
- `GET /api/cart/` - Get current cart
- `POST /api/cart/add_item/` - Add item to cart
  ```json
  {
    "product_id": 1,
    "quantity": 1,
    "size": "L",
    "color": "Black"
  }
  ```
- `PUT /api/cart/update_item/` - Update item quantity
  ```json
  {
    "item_id": 1,
    "quantity": 2
  }
  ```
- `DELETE /api/cart/remove_item/` - Remove item from cart
  ```json
  {
    "item_id": 1
  }
  ```
- `DELETE /api/cart/clear/` - Clear entire cart

### Orders
- `GET /api/orders/` - List user orders
- `POST /api/orders/create_order/` - Create new order
  ```json
  {
    "cart_id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "address": "123 Main St",
    "city": "New York",
    "state": "NY",
    "zip_code": "10001"
  }
  ```
- `GET /api/orders/{id}/` - Get order details

## Admin Panel

Access the Django admin panel at `http://localhost:8000/admin/`

## Database

The project uses SQLite by default. To use PostgreSQL or MySQL, update the `DATABASES` setting in `config/settings.py`.

## CORS Configuration

The backend is configured to allow requests from:
- `http://localhost:3000`
- `http://localhost:3001`

To add more origins, update `CORS_ALLOWED_ORIGINS` in `config/settings.py`.

