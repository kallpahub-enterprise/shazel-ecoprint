import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductCatalog } from "@/components/product-catalog"
import { SocialProof } from "@/components/social-proof"
import { EcoDifference } from "@/components/eco-difference"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProductCatalog />
      <SocialProof />
      <EcoDifference />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
