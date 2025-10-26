import Header from "@/components/header"
import Hero from "@/components/hero"
import SuitCategories from "@/components/suit-categories"
import SuitCollection from "@/components/suit-collection"
import SuitInfo from "@/components/suit-info"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SuitCategories />
      <SuitCollection />
      <SuitInfo />
      <Footer />
    </main>
  )
}
