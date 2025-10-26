export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold text-primary mb-4">Have Fashion</h3>
            <p className="text-muted-foreground text-sm">
              Premium menswear for the discerning gentleman. Crafted with excellence, worn with confidence.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Suits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blazers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2025 Have Fashion. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">
              Facebook
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
