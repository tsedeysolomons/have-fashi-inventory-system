import { RotateCcw, AlertCircle, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Returns & Refunds
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We want you to be completely satisfied. Learn about our hassle-free
            return process.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Return Policy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              30-Day Returns
            </h3>
            <p className="text-muted-foreground text-sm">
              30 days from purchase date for returns
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Free Returns</h3>
            <p className="text-muted-foreground text-sm">
              We cover return shipping for defective items
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Full Refunds</h3>
            <p className="text-muted-foreground text-sm">
              100% refund on eligible items within 30 days
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Return Process */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Return Process
            </h2>

            <div className="space-y-6 mb-12">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Initiate Return
                  </h3>
                  <p className="text-muted-foreground">
                    Contact our customer service team or log into your account
                    and request a return. You'll receive a return authorization
                    number.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Prepare Your Item
                  </h3>
                  <p className="text-muted-foreground">
                    Ensure items are in original condition with all tags
                    attached. Pack securely and include your return
                    authorization number.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ship Your Return
                  </h3>
                  <p className="text-muted-foreground">
                    Use the provided shipping label (for qualifying items) or
                    arrange shipment to our returns center. Keep your tracking
                    number.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Receive Refund
                  </h3>
                  <p className="text-muted-foreground">
                    Once received and inspected, your refund will be processed
                    within 5-7 business days to your original payment method.
                  </p>
                </div>
              </div>
            </div>

            {/* Return Conditions */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Return Conditions
            </h2>

            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h3 className="font-semibold text-foreground mb-4">
                Eligible for Return:
              </h3>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    Items in original, unused condition with all tags attached
                  </span>
                </li>

                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Returned within 30 days of original purchase date</span>
                </li>

                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Original receipt or order number provided</span>
                </li>

                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Defective or damaged items (with photos)</span>
                </li>
              </ul>

              <h3 className="font-semibold text-foreground mb-4">
                Not Eligible for Return:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Items worn, washed, or altered</span>
                </li>

                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom or personalized items</span>
                </li>

                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Items purchased during final sale events</span>
                </li>

                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Missing original tags or packaging</span>
                </li>
              </ul>
            </div>

            {/* Refund Info */}
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Refund Information
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">
                  Processing Time:
                </span>{" "}
                Refunds are processed within 5-7 business days of receiving your
                return.
              </p>

              <p>
                <span className="font-semibold text-foreground">
                  Shipping Costs:
                </span>{" "}
                Original shipping costs are non-refundable unless the return is
                due to our error or a defective item.
              </p>

              <p>
                <span className="font-semibold text-foreground">
                  Payment Method:
                </span>{" "}
                Refunds are issued to the original payment method used for
                purchase.
              </p>

              <p>
                <span className="font-semibold text-foreground">Exchange:</span>{" "}
                If you'd prefer an exchange, we'll process it at no additional
                charge if the new item is the same price.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Need Help?
            </h2>

            <div className="space-y-4">
              {/* Contact Box */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Contact Support
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Our team is here to help with any questions about returns or
                  refunds.
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  <span className="font-semibold text-foreground">Email:</span>{" "}
                  support@havefashion.com
                </p>
                <p className="text-muted-foreground text-sm">
                  <span className="font-semibold text-foreground">Phone:</span>{" "}
                  +1 (555) 123-4567
                </p>
              </div>

              {/* Address */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Return Address
                </h3>
                <p className="text-muted-foreground text-sm">
                  Have Fashion Returns
                  <br />
                  456 Fashion Boulevard
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>

              {/* FAQ */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Common Questions
                </h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>How long do refunds take?</span>
                  </li>

                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Can I exchange items?</span>
                  </li>

                  <li className="flex gap-2">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>What about damaged items?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
