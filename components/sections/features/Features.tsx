import Section from "@/components/ui/Section"

export default function Features() {
  return (
    <Section id="features">

      <h2 className="heading-lg mb-12 text-center">
        Features
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="card">
          <h3 className="font-semibold mb-2">
            Fast
          </h3>

          <p className="text-muted text-sm">
            Optimized for performance.
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">
            Scalable
          </h3>

          <p className="text-muted text-sm">
            Easy to extend and maintain.
          </p>
        </div>

        <div className="card">
          <h3 className="font-semibold mb-2">
            Reusable
          </h3>

          <p className="text-muted text-sm">
            Designed for agencies and developers.
          </p>
        </div>

      </div>

    </Section>
  )
}