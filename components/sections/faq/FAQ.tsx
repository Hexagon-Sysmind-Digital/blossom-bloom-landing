import Section from "@/components/ui/Section"

const faqs = [
    {
        question: "How long will my arrangements stay fresh?",
        answer: "With proper care—keeping them away from direct sunlight and changing the water every 48 hours—our signature arrangements typically flourish for 7 to 10 days."
    },
    {
        question: "Do you offer same-day delivery?",
        answer: "Yes, for orders placed before 1:00 PM local time, our priority fleet ensures your blooms arrive by sunset the very same day."
    },
    {
        question: "Can I request a custom boutique concept?",
        answer: "Absolutely. Our 'Artisan Inquiry' service allows you to work directly with a master florist to create a bespoke visual language for your specific occasion."
    },
    {
        question: "Where do your flowers come from?",
        answer: "We source 90% of our stems from independent local growers within a 100-mile radius, supporting the community and ensuring maximum bio-vibrancy."
    }
]

export default function FAQ() {
    return (
        <Section id="faq" className="bg-white">
            <div className="grid lg:grid-cols-12 gap-20">
                <div className="lg:col-span-5">
                    <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Knowledge</span>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Bloom <span className="italic">Questions</span>
                    </h2>
                    <p className="text-[#8c7e72] leading-relaxed mb-10 text-lg">
                        Everything you need to know about caring for your botanical investments and navigating our artisan services.
                    </p>
                    <div className="bg-[#faf6f2] p-8 rounded-[2rem] border border-[#e8ddd4] md:inline-block">
                        <p className="text-sm font-bold text-[#2d2a26] mb-2 uppercase tracking-widest">Still curious?</p>
                        <p className="text-sm text-[#8c7e72]">Contact our concierge at hello@blossomandbloom.com</p>
                    </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                    {faqs.map((faq, index) => (
                        <details key={index} className="group border border-[#e8ddd4] rounded-3xl overflow-hidden hover:border-[#b5565a] transition-colors">
                            <summary className="flex justify-between items-center p-8 cursor-pointer list-none focus:outline-none">
                                <h3 className="text-lg font-bold text-[#2d2a26] leading-tight pr-6">{faq.question}</h3>
                                <span className="text-2xl text-[#b5565a] transition-transform duration-500 group-open:rotate-45">+</span>
                            </summary>
                            <div className="px-8 pb-8 text-[#8c7e72] leading-relaxed text-sm max-w-2xl">
                                {faq.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    )
}
