"use client"

import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Last updated: November 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Have Fashion ("we," "us," "our," or "Company") respects the privacy of our users ("user" or "you"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="text-muted-foreground">
              Please read this privacy policy carefully. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect information in the following ways:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li><span className="font-semibold text-foreground">Personal Information:</span> Name, email address, phone number, postal address, payment information</li>
              <li><span className="font-semibold text-foreground">Browsing Information:</span> IP address, browser type, pages visited, time spent</li>
              <li><span className="font-semibold text-foreground">Device Information:</span> Device type, operating system, unique identifiers</li>
              <li><span className="font-semibold text-foreground">Purchase Information:</span> Orders, transactions, payment methods</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use collected information for:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Processing and fulfilling your orders</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Sending promotional emails and newsletters (with your consent)</li>
              <li>Analyzing website usage and improving our services</li>
              <li>Preventing fraudulent transactions</li>
              <li>Complying with legal obligations</li>
              <li>Personalizing your shopping experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share information with:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Service providers (payment processors, shipping carriers)</li>
              <li>Legal authorities if required by law</li>
              <li>Business partners for analytics and marketing</li>
              <li>Successors in case of merger or acquisition</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information. All transactions are encrypted using SSL technology. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
            <p className="text-muted-foreground mb-4">
              Our website uses cookies to enhance your experience. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences. We also use analytics tools to understand user behavior.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-card border border-border rounded-lg p-6 mt-4 text-muted-foreground">
              <p className="mb-2">Email: privacy@havefashion.com</p>
              <p className="mb-2">Phone: +1 (555) 123-4567</p>
              <p className="mb-2">telegram</p>
              <p className="mb-2">facebook</p>
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
