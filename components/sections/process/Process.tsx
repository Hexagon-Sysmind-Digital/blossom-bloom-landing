import Section from "@/components/ui/Section"

const steps = [
    {
        number: "01",
        title: "Market Selection",
        description: "At dawn, we hand-select the rarest and most vibrant stems from sustainable local growers, ensuring peerless longevity.",
        icon: "🌅"
    },
    {
        number: "02",
        title: "Artisan Design",
        description: "Our master florists study the unique architecture of each stem to create asymmetrical, organic masterpieces that tell a story.",
        icon: "✂️"
    },
    {
        number: "03",
        title: "Eco-Conscious Wrap",
        description: "We use biodegradable silk ribbons and recycled botanical papers, honoring the earth that gave us these beautiful blooms.",
        icon: "🌿"
    },
    {
        number: "04",
        title: "Timed Delivery",
        description: "Our priority fleet delivers with surgical precision, maintaining optimal temperature control from studio to your sanctuary.",
        icon: "🕙"
    }
]

export default function Process() {
    return (
        <Section className="bg-[#2d2a26] text-white relative overflow-hidden py-32">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#b5565a] opacity-10 filter blur-[120px] rounded-full" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 reveal">
                    <div className="max-w-2xl">
                        <span className="text-[#d4956a] font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Beneath the Bloom</span>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            The <span className="italic text-[#d4956a]">Artisan</span> Journey
                        </h2>
                    </div>
                    <p className="text-white/50 max-w-sm text-sm uppercase tracking-widest leading-loose">
                        Precision, Passion, and the Pursuit of Botanical Perfection.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`group relative reveal`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="text-[120px] font-bold text-white/5 absolute -top-16 -left-4 pointer-events-none select-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {step.number}
                            </div>
                            <div className="relative pt-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-8 group-hover:bg-[#b5565a] group-hover:border-transparent transition-all duration-500">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
