"use client"

import { useState } from "react"
import { Menu, X, Search, User, ChevronDown } from "lucide-react"
import Link from "next/link"
import AuthModal from "./auth-modal"
import CartIcon from "./cart-icon"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const navItems = [
    {
      label: "NEW IN",
      href: "#",
      description: "Discover our latest collection of premium menswear",
      submenu: {
        columns: [
          {
            title: "LATEST ARRIVALS",
            items: [
              { name: "New Suits", description: "Fresh tailored suits just arrived" },
              { name: "New Shirts", description: "Latest premium dress shirts" },
              { name: "New Accessories", description: "Trending accessories and essentials" },
              { name: "New Footwear", description: "Latest luxury shoe collection" },
              { name: "New Outerwear", description: "Seasonal blazers and coats" },
            ],
          },
          {
            title: "TRENDING NOW",
            items: [
              { name: "Best Sellers", description: "Most popular items this season" },
              { name: "Limited Edition", description: "Exclusive pieces available now" },
              { name: "Flash Deals", description: "Special offers on selected items" },
              { name: "Coming Soon", description: "Preview upcoming collections" },
            ],
          },
          {
            title: "COLLECTIONS",
            items: [
              { name: "Spring Collection", description: "Light and fresh seasonal wear" },
              { name: "Premium Line", description: "Our most luxurious offerings" },
              { name: "Essentials", description: "Timeless wardrobe staples" },
            ],
          },
        ],
        featured: {
          title: "SPRING COLLECTION",
          cta: "EXPLORE NOW",
          image: "url('https://images.unsplash.com/photo-1591047990852-258f408cde20?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "WEDDING",
      href: "#",
      description: "Complete wedding and formal wear collection",
      submenu: {
        columns: [
          {
            title: "WEDDING OUTFIT",
            items: [
              { name: "Wedding Suits", description: "Tailored suits for the perfect wedding day" },
              { name: "Wedding Shirts", description: "Premium dress shirts for formal occasions" },
              { name: "Wedding Ties & Pocketsquares", description: "Elegant accessories to complete your look" },
              { name: "Wedding Shoes", description: "Polished footwear for formal events" },
              { name: "Wedding Accessories", description: "Cufflinks, braces, and more" },
              { name: "Wedding Day Guest", description: "Sophisticated guest attire" },
              { name: "Evening Guest", description: "Evening wear for celebrations" },
            ],
          },
          {
            title: "HIRE",
            items: [
              { name: "Kilt Hire", description: "Traditional Scottish formal wear" },
              { name: "Tuxedo Hire", description: "Classic black-tie tuxedos" },
              { name: "Morning Suits & Tailcoat Hire", description: "Daytime formal wear" },
              { name: "Custom Kilts & Highlandwear", description: "Personalized Highland dress" },
            ],
          },
          {
            title: "COLOUR SCHEME",
            items: [
              { name: "Something Blue", description: "Classic blue formal wear" },
              { name: "Fresh Greens", description: "Modern green tones" },
              { name: "Natural Neutrals", description: "Timeless neutral shades" },
              { name: "Romantic Pinks & Purples", description: "Elegant pastel options" },
              { name: "Noir Blanc", description: "Sophisticated black and white" },
            ],
          },
          {
            title: "STYLE",
            items: [
              { name: "Black Tie", description: "Formal evening wear" },
              { name: "Tweed", description: "Classic country style" },
              { name: "Destination Weddings", description: "Travel-friendly formal wear" },
            ],
          },
        ],
        featured: {
          title: "AUTUMN GROOMS",
          cta: "SHOP NOW",
          image: "url('https://images.unsplash.com/photo-1591047990852-258f408cde20?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "SUITS",
      href: "#",
      description: "Premium tailored suits for every occasion",
      submenu: {
        columns: [
          {
            title: "SUIT TYPES",
            items: [
              { name: "Two-Piece Suits", description: "Classic jacket and trousers combinations" },
              { name: "Three-Piece Suits", description: "Complete look with matching waistcoat" },
              { name: "Double-Breasted Suits", description: "Bold and sophisticated styling" },
              { name: "Single-Breasted Suits", description: "Timeless and versatile designs" },
            ],
          },
          {
            title: "SUIT STYLES",
            items: [
              { name: "Business Suits", description: "Professional corporate wear" },
              { name: "Casual Suits", description: "Relaxed yet refined tailoring" },
              { name: "Slim Fit", description: "Contemporary fitted silhouette" },
              { name: "Regular Fit", description: "Classic comfortable cut" },
            ],
          },
          {
            title: "MATERIALS",
            items: [
              { name: "Wool Suits", description: "Premium wool blends for durability" },
              { name: "Linen Suits", description: "Breathable summer options" },
              { name: "Cotton Blends", description: "Comfortable everyday wear" },
              { name: "Luxury Fabrics", description: "Finest Italian and British materials" },
            ],
          },
        ],
        featured: {
          title: "PREMIUM SUITS",
          cta: "VIEW COLLECTION",
          image: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "SHIRTS & TIES",
      href: "#",
      description: "Fine dress shirts and designer ties",
      submenu: {
        columns: [
          {
            title: "DRESS SHIRTS",
            items: [
              { name: "White Dress Shirts", description: "Essential formal white shirts" },
              { name: "Colored Shirts", description: "Sophisticated color options" },
              { name: "Patterned Shirts", description: "Stripes, checks, and prints" },
              { name: "Casual Shirts", description: "Smart casual shirt collection" },
            ],
          },
          {
            title: "TIES & ACCESSORIES",
            items: [
              { name: "Silk Ties", description: "Premium silk neckwear" },
              { name: "Bow Ties", description: "Formal and casual bow tie styles" },
              { name: "Pocket Squares", description: "Elegant finishing touches" },
              { name: "Cufflinks", description: "Luxury cuff accessories" },
            ],
          },
          {
            title: "COLLAR STYLES",
            items: [
              { name: "Spread Collar", description: "Wide and modern collar design" },
              { name: "Point Collar", description: "Classic and versatile style" },
              { name: "Button-Down Collar", description: "Casual yet refined look" },
              { name: "Wing Collar", description: "Formal evening wear collar" },
            ],
          },
        ],
        featured: {
          title: "SHIRT & TIE SETS",
          cta: "SHOP SETS",
          image: "url('https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "BLAZERS & COATS",
      href: "#",
      description: "Structured blazers and outerwear",
      submenu: {
        columns: [
          {
            title: "BLAZERS",
            items: [
              { name: "Sport Blazers", description: "Versatile casual blazers" },
              { name: "Formal Blazers", description: "Structured formal wear" },
              { name: "Casual Blazers", description: "Smart casual styling" },
              { name: "Patterned Blazers", description: "Tweed and textured options" },
            ],
          },
          {
            title: "OUTERWEAR",
            items: [
              { name: "Overcoats", description: "Classic long coats for winter" },
              { name: "Topcoats", description: "Elegant mid-length outerwear" },
              { name: "Trench Coats", description: "Timeless trench coat styles" },
              { name: "Casual Jackets", description: "Relaxed jacket collection" },
            ],
          },
          {
            title: "MATERIALS",
            items: [
              { name: "Wool Blazers", description: "Premium wool construction" },
              { name: "Cotton Blazers", description: "Breathable cotton options" },
              { name: "Linen Blazers", description: "Summer-weight blazers" },
              { name: "Blended Fabrics", description: "Durable fabric combinations" },
            ],
          },
        ],
        featured: {
          title: "WINTER COLLECTION",
          cta: "EXPLORE",
          image: "url('https://images.unsplash.com/photo-1539533057440-7bf6b1c91c5f?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "SHOES",
      href: "#",
      description: "Luxury footwear for formal and casual wear",
      submenu: {
        columns: [
          {
            title: "FORMAL SHOES",
            items: [
              { name: "Oxford Shoes", description: "Classic formal dress shoes" },
              { name: "Derby Shoes", description: "Elegant lace-up options" },
              { name: "Loafers", description: "Sophisticated slip-on styles" },
              { name: "Brogues", description: "Detailed formal footwear" },
            ],
          },
          {
            title: "CASUAL SHOES",
            items: [
              { name: "Sneakers", description: "Premium casual sneakers" },
              { name: "Boat Shoes", description: "Relaxed summer footwear" },
              { name: "Chukka Boots", description: "Versatile ankle boots" },
              { name: "Slip-Ons", description: "Easy casual shoes" },
            ],
          },
          {
            title: "MATERIALS & COLORS",
            items: [
              { name: "Leather Shoes", description: "Premium leather construction" },
              { name: "Suede Shoes", description: "Soft suede options" },
              { name: "Black Shoes", description: "Classic black formal wear" },
              { name: "Brown Shoes", description: "Versatile brown tones" },
            ],
          },
        ],
        featured: {
          title: "LUXURY FOOTWEAR",
          cta: "DISCOVER",
          image: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "TROUSERS",
      href: "#",
      description: "Perfectly tailored trousers",
      submenu: {
        columns: [
          {
            title: "TROUSER STYLES",
            items: [
              { name: "Formal Trousers", description: "Tailored formal wear" },
              { name: "Chinos", description: "Smart casual trousers" },
              { name: "Dress Trousers", description: "Professional business wear" },
              { name: "Casual Trousers", description: "Relaxed everyday wear" },
            ],
          },
          {
            title: "FIT OPTIONS",
            items: [
              { name: "Slim Fit", description: "Contemporary fitted cut" },
              { name: "Regular Fit", description: "Classic comfortable fit" },
              { name: "Relaxed Fit", description: "Loose and comfortable" },
              { name: "Tapered Fit", description: "Fitted at ankles" },
            ],
          },
          {
            title: "COLORS & PATTERNS",
            items: [
              { name: "Black Trousers", description: "Classic black formal wear" },
              { name: "Navy Trousers", description: "Versatile navy options" },
              { name: "Grey Trousers", description: "Neutral grey tones" },
              { name: "Patterned Trousers", description: "Checks and stripes" },
            ],
          },
        ],
        featured: {
          title: "TAILORED TROUSERS",
          cta: "SHOP NOW",
          image: "url('https://images.unsplash.com/photo-1542272604-787c62d465d1?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "CASUALWEAR",
      href: "#",
      description: "Relaxed yet refined casual collection",
      submenu: {
        columns: [
          {
            title: "CASUAL TOPS",
            items: [
              { name: "Casual Shirts", description: "Relaxed button-up shirts" },
              { name: "Polo Shirts", description: "Classic polo shirt collection" },
              { name: "T-Shirts", description: "Premium quality t-shirts" },
              { name: "Sweaters", description: "Cozy knit sweaters" },
            ],
          },
          {
            title: "CASUAL BOTTOMS",
            items: [
              { name: "Jeans", description: "Premium denim collection" },
              { name: "Chinos", description: "Casual chino trousers" },
              { name: "Shorts", description: "Summer casual shorts" },
              { name: "Joggers", description: "Comfortable jogger pants" },
            ],
          },
          {
            title: "CASUAL OUTERWEAR",
            items: [
              { name: "Casual Jackets", description: "Relaxed jacket styles" },
              { name: "Hoodies", description: "Comfortable hooded wear" },
              { name: "Cardigans", description: "Layering pieces" },
              { name: "Windbreakers", description: "Lightweight outerwear" },
            ],
          },
        ],
        featured: {
          title: "WEEKEND WEAR",
          cta: "BROWSE",
          image: "url('https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "ACCESSORIES",
      href: "#",
      description: "Complete your look with premium accessories",
      submenu: {
        columns: [
          {
            title: "JEWELRY & CUFFLINKS",
            items: [
              { name: "Cufflinks", description: "Luxury cuff accessories" },
              { name: "Rings", description: "Premium ring collection" },
              { name: "Bracelets", description: "Elegant wrist wear" },
              { name: "Necklaces", description: "Sophisticated neck jewelry" },
            ],
          },
          {
            title: "BELTS & SCARVES",
            items: [
              { name: "Leather Belts", description: "Premium leather belts" },
              { name: "Dress Belts", description: "Formal belt collection" },
              { name: "Scarves", description: "Silk and wool scarves" },
              { name: "Pocket Squares", description: "Elegant finishing touches" },
            ],
          },
          {
            title: "BAGS & HATS",
            items: [
              { name: "Briefcases", description: "Professional leather briefcases" },
              { name: "Messenger Bags", description: "Stylish messenger bags" },
              { name: "Hats", description: "Formal and casual hats" },
              { name: "Gloves", description: "Premium leather gloves" },
            ],
          },
        ],
        featured: {
          title: "ACCESSORY SETS",
          cta: "COMPLETE LOOK",
          image: "url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "IN-STORE SERVICES",
      href: "#",
      description: "Personal styling and tailoring services",
      submenu: {
        columns: [
          {
            title: "TAILORING SERVICES",
            items: [
              { name: "Suit Alterations", description: "Professional suit tailoring" },
              { name: "Hemming", description: "Trouser and shirt hemming" },
              { name: "Sleeve Adjustments", description: "Perfect sleeve length" },
              { name: "Custom Tailoring", description: "Bespoke custom tailoring" },
            ],
          },
          {
            title: "STYLING SERVICES",
            items: [
              { name: "Personal Styling", description: "One-on-one styling consultation" },
              { name: "Wardrobe Planning", description: "Complete wardrobe strategy" },
              { name: "Color Consultation", description: "Find your perfect colors" },
              { name: "Occasion Styling", description: "Styling for special events" },
            ],
          },
          {
            title: "SPECIAL SERVICES",
            items: [
              { name: "Wedding Planning", description: "Complete wedding coordination" },
              { name: "Corporate Packages", description: "Team uniform solutions" },
              { name: "Gift Wrapping", description: "Premium gift wrapping service" },
              { name: "Personal Shopping", description: "Curated shopping experience" },
            ],
          },
        ],
        featured: {
          title: "EXPERT SERVICES",
          cta: "BOOK NOW",
          image: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop')",
        },
      },
    },
    {
      label: "STYLE INSPIRATION",
      href: "#",
      description: "Discover styling tips and trends",
      submenu: {
        columns: [
          {
            title: "STYLE GUIDES",
            items: [
              { name: "How to Wear a Suit", description: "Complete suit styling guide" },
              { name: "Formal Dress Code", description: "Understanding dress codes" },
              { name: "Color Combinations", description: "Perfect color pairings" },
              { name: "Accessory Styling", description: "Accessory coordination tips" },
            ],
          },
          {
            title: "TREND REPORTS",
            items: [
              { name: "Spring Trends", description: "Latest spring fashion trends" },
              { name: "Summer Trends", description: "Hot summer style picks" },
              { name: "Fall Trends", description: "Autumn fashion inspiration" },
              { name: "Winter Trends", description: "Winter style essentials" },
            ],
          },
          {
            title: "LOOKBOOKS",
            items: [
              { name: "Business Casual", description: "Professional casual looks" },
              { name: "Black Tie Events", description: "Formal event styling" },
              { name: "Weekend Wear", description: "Casual weekend outfits" },
              { name: "Travel Style", description: "Packing and travel tips" },
            ],
          },
        ],
        featured: {
          title: "LATEST TRENDS",
          cta: "READ MORE",
          image: "url('https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=300&fit=crop')",
        },
      },
    },
  ]

  const handleNavItemClick = (label: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setActiveDropdown(activeDropdown === label ? null : label)
    }
  }

  const handleMouseEnter = (label: string, hasSubmenu: boolean) => {
    if (hasSubmenu) {
      setActiveDropdown(label)
    }
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      {/* Promo Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
        10% OFF YOUR FIRST ORDER
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-primary hover:text-primary/80 transition">
            Have Fashion
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="w-full bg-card border border-border rounded-lg px-4 py-2 flex items-center gap-2">
              <Search className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent outline-none w-full text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="hidden md:block text-foreground hover:text-primary transition"
              title="Sign In / Sign Up"
            >
              <User className="w-6 h-6" />
            </button>
            <div className="hidden md:block">
              <CartIcon />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label, !!item.submenu)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavItemClick(item.label, !!item.submenu)}
                  className="text-foreground hover:text-primary transition text-sm font-medium py-2 md:py-0 flex items-center gap-1 w-full md:w-auto group"
                >
                  <span className="group-hover:text-primary">{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Tooltip for items without submenu */}
                {!item.submenu && (
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-primary text-primary-foreground text-xs px-2 py-1 rounded whitespace-nowrap">
                    {item.description}
                  </div>
                )}

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full pt-2 z-50">
                    <div className="bg-background border border-border rounded-lg shadow-xl p-8 min-w-max">
                      <div className="flex gap-12">
                        {/* Menu Columns */}
                        <div className="flex gap-12">
                          {item.submenu.columns.map((column) => (
                            <div key={column.title}>
                              <h3 className="text-primary font-serif font-bold text-sm mb-4 uppercase tracking-wide">
                                {column.title}
                              </h3>
                              <ul className="space-y-3">
                                {column.items.map((subitem) => (
                                  <li key={typeof subitem === "string" ? subitem : subitem.name}>
                                    <a
                                      href="#"
                                      className="text-foreground text-sm hover:text-primary transition group/item"
                                      title={typeof subitem === "string" ? "" : subitem.description}
                                    >
                                      <span className="group-hover/item:text-primary">
                                        {typeof subitem === "string" ? subitem : subitem.name}
                                      </span>
                                      {typeof subitem !== "string" && (
                                        <p className="text-xs text-muted-foreground mt-1">{subitem.description}</p>
                                      )}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Featured Section */}
                        {item.submenu.featured && (
                          <div
                            className="w-80 h-64 rounded-lg overflow-hidden relative flex items-center justify-center"
                            style={{
                              backgroundImage: item.submenu.featured.image,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center">
                              <h2 className="text-white text-3xl font-serif font-bold text-center mb-4">
                                {item.submenu.featured.title}
                              </h2>
                              <button className="bg-primary text-primary-foreground px-6 py-2 rounded hover:opacity-90 transition font-semibold text-sm">
                                {item.submenu.featured.cta}
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  )
}
