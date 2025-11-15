"use client"

import { Mail, Phone, MapPin, Clock, Send, ArrowLeft } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you! We'll get back to you soon.")
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a question? We're here to help. Reach out to our customer service team.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-card border border-border rounded-lg p-8">
            <Mail className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-2">support@havefashion.com</p>
            <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <Phone className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground mb-2">+1 (555) 123-4567</p>
            <p className="text-muted-foreground text-sm">Mon - Fri, 9AM - 6PM EST</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <MapPin className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground mb-2">123 Fashion Ave, New York, NY 10001</p>
            <p className="text-muted-foreground text-sm">Visit our flagship store</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="product">Product Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-card border border-border rounded px-4 py-3 text-foreground focus:outline-none focus:border-primary"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* FAQ & Business Hours */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Business Hours</h2>
            <div className="bg-card border border-border rounded-lg p-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Global Customer Support</h3>
                    <p className="text-muted-foreground text-sm mb-1">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-muted-foreground text-sm mb-1">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What are your shipping policies?", a: "We ship worldwide with free shipping on orders over $100." },
                { q: "Do you offer returns?", a: "Yes, 30-day returns on most items. See Returns Policy for details." },
                { q: "How long does delivery take?", a: "Standard delivery takes 5-7 business days. Express options available." },
                { q: "Do you have a physical store?", a: "Yes! Visit our flagship store at 123 Fashion Ave, New York." },
              ].map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
