export default function SuitInfo() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16 text-foreground">
          The Art of the Perfect Suit
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">What Makes a Great Suit?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A well-fitted suit is the foundation of any gentleman's wardrobe. It speaks volumes about your attention
                to detail, professionalism, and personal style. Whether you're heading to the boardroom or a black-tie
                event, the right suit can transform your entire presence.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Fit & Tailoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                The most important aspect of any suit is the fit. Our suits are available in multiple sizes and can be
                tailored to your exact measurements. We offer complimentary tailoring services to ensure your suit fits
                perfectly, from the shoulders to the hem.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">Fabric Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source only the finest fabrics from premium mills around the world. Our suits are crafted from 100%
                wool, wool blends, and luxury materials that ensure durability, comfort, and a refined appearance that
                lasts for years.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96 rounded-lg overflow-hidden border-2 border-primary">
              <img src="/man-wearing-luxury-suit.jpg" alt="Perfect suit fit" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Suit Care Tips */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h3 className="text-2xl font-serif font-bold text-primary mb-6">Suit Care & Maintenance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Cleaning</h4>
              <p className="text-muted-foreground text-sm">
                Dry clean your suit every 3-4 wears. Spot clean minor stains immediately. Avoid excessive washing to
                preserve fabric quality and color.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Storage</h4>
              <p className="text-muted-foreground text-sm">
                Store on wooden hangers in a cool, dry place. Use cedar blocks to prevent moths. Cover with a breathable
                garment bag to protect from dust.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Pressing</h4>
              <p className="text-muted-foreground text-sm">
                Use a low heat iron or professional pressing service. Press trousers regularly to maintain sharp
                creases. Never iron directly on wool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
