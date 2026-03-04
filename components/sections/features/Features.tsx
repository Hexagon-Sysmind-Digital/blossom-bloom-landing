import Section from "@/components/ui/Section"

const services = [
  {
    icon: "✨",
    title: "Daily Curation",
    description: "Every morning, our artisans hand-pick the rarest and freshest blooms from local markets, ensuring unparalleled vibrance.",
  },
  {
    icon: "🕊️",
    title: "Events & Weddings",
    description: "Transforming spaces into botanical wonderlands. We specialize in high-concept floral design for your most significant life events.",
  },
  {
    icon: "🌙",
    title: "Midnight Delivery",
    description: "Surprise them when they least expect it. Our premium delivery fleet operates around the clock for special anniversary milestones.",
  },
  {
    icon: "🏺",
    title: "Vessel Selection",
    description: "We source handcrafted ceramic and crystal vessels from independent artists globally to perfectly complement your blooms.",
  },
]

export default function Features() {
  return (
    <Section id="services" className="bg-white">
      <div className="grid lg:grid-cols-3 gap-16 items-start">
        <div className="lg:col-span-1 border-l-2 border-[#b5565a] pl-10 py-4 reveal">
          <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            The <span className="italic">Art</span> of Flower Design
          </h2>
          <p className="text-[#8c7e72] leading-relaxed mb-10">
            More than just a florist, we are a studio dedicated to the study and practice of botanical sculpture and emotional storytelling.
          </p>
          <div className="bg-[#faf6f2] p-10 rounded-[2rem] border border-[#e8ddd4] animate-float-gentle">
            <p className="text-sm italic text-[#2d2a26] leading-relaxed mb-6">
              &quot;In every arrangement, we seek to capture the fleeting poetry of a single moment in time.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#b5565a]" />
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#2d2a26]">Elena Vance</p>
                <p className="text-[10px] uppercase tracking-widest text-[#8c7e72]">Master Florist</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group reveal"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#faf6f2] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#b5565a] group-hover:text-white transition-all duration-500 transform group-hover:-rotate-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
              <p className="text-sm text-[#8c7e72] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}