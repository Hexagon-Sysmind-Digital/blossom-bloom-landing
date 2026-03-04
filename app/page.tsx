import Hero from "@/components/sections/hero/Hero"
import Features from "@/components/sections/features/Features"
import About from "@/components/sections/about/About"
import Process from "@/components/sections/process/Process"
import Gallery from "@/components/sections/gallery/Gallery"
import Workshop from "@/components/sections/workshop/Workshop"
import Pricing from "@/components/sections/pricing/Pricing"
import Testimonials from "@/components/sections/testimonials/Testimonials"
import FAQ from "@/components/sections/faq/FAQ"
import CTA from "@/components/sections/cta/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Process />
      <Gallery />
      <Workshop />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}