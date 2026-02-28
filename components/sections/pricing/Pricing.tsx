import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function Pricing() {
  return (
    <Section id="pricing" className="bg-gray-50 text-center">

      <h2 className="heading-lg mb-10">
        Pricing
      </h2>

      <div className="max-w-sm mx-auto card">

        <div className="text-4xl font-bold mb-4">
          $49
        </div>

        <p className="text-muted mb-6">
          One-time payment
        </p>

        <Button>
          Buy Template
        </Button>

      </div>

    </Section>
  )
}