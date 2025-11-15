"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Terms & Conditions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Last updated: November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
            <p className="text-muted-foreground mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Have Fashion's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Disclaimer</h2>
            <p className="text-muted-foreground">
              The materials on Have Fashion's website are provided on an 'as is' basis. Have Fashion makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Limitations</h2>
            <p className="text-muted-foreground">
              In no event shall Have Fashion or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Have Fashion's website, even if Have Fashion or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Accuracy of Materials</h2>
            <p className="text-muted-foreground">
              The materials appearing on Have Fashion's website could include technical, typographical, or photographic errors. Have Fashion does not warrant that any of the materials on its website are accurate, complete, or current. Have Fashion may make changes to the materials contained on its website at any time without notice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Links</h2>
            <p className="text-muted-foreground">
              Have Fashion has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Have Fashion of the site. Use of any such linked website is at the user's own risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Modifications</h2>
            <p className="text-muted-foreground">
              Have Fashion may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Have Fashion operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Product Information</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide accurate product descriptions and pricing. However, Have Fashion does not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. If a product offered by Have Fashion is not as described, your sole remedy is to return it in unused condition.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mt-4 text-muted-foreground">
              <p className="mb-2">Email: legal@havefashion.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Fashion Ave, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
