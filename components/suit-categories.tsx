export default function SuitCategories() {
  const categories = [
    {
      name: "Wedding Suits",
      image: "/elegant-wedding-suit-for-groom.jpg",
      description: "Perfect for your special day",
    },
    {
      name: "Business Suits",
      image: "/professional-business-suit.jpg",
      description: "Timeless elegance for the office",
    },
    {
      name: "Tuxedos",
      image: "/formal-black-tuxedo.jpg",
      description: "Black-tie sophistication",
    },
    {
      name: "Casual Blazers",
      image: "/casual-blazer-jacket.jpg",
      description: "Versatile style for any occasion",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-foreground">Our Collections</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Explore our carefully curated collections, each designed to meet the unique needs of the discerning gentleman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-card border border-border">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
