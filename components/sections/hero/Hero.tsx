import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function Hero() {
  return (
    <Section className="text-center bg-gradient-to-b from-gray-50 to-white">

      <h1 className="heading-xl mb-6">
        Modern Landing Page Template
      </h1>

      <p className="text-muted mb-8 max-w-xl mx-auto">
        Clean, scalable, and production-ready template built with Next.js and Tailwind.
      </p>

      <Button>
        Get Started
      </Button>

    </Section>
  )
}