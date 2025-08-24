import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductCatalog } from "@/components/product-catalog"
import { MarketplaceSection } from "@/components/marketplace-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <MarketplaceSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
