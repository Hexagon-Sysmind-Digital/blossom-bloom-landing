import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import Image from "next/image"

export default function Workshop() {
    return (
        <Section className="bg-[#faf6f2] overflow-hidden">
            <div className="relative rounded-[4rem] bg-[#2d2a26] text-white p-12 md:p-24 overflow-hidden shadow-2xl reveal">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-[60%] h-full bg-[#b5565a]/20 skew-x-12 translate-x-1/2" />

                <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="reveal" style={{ animationDelay: '200ms' }}>
                        <span className="text-[#d4956a] font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Artisan Workshops</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Learn the <span className="italic text-[#d4956a]">Language</span> of Blooms
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
                            Join us for intimate, candlelight evenings at our studio where we share our secrets of botanical composition, seasonal sourcing, and long-lasting care.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-start gap-5">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#d4956a] text-sm">01</div>
                                <div>
                                    <h4 className="font-bold mb-1 tracking-wider uppercase text-xs">Floral Theory</h4>
                                    <p className="text-sm text-white/40">Understanding color harmony and structural balance.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#d4956a] text-sm">02</div>
                                <div>
                                    <h4 className="font-bold mb-1 tracking-wider uppercase text-xs">Master Class</h4>
                                    <p className="text-sm text-white/40">Hand-tying techniques used by world-class florists.</p>
                                </div>
                            </div>
                        </div>

                        <Button variant="outline" className="!border-[#d4956a] !text-[#d4956a] hover:!bg-[#d4956a] hover:!text-white transition-all duration-500">
                            View Workshop Schedule
                        </Button>
                    </div>

                    <div className="relative reveal" style={{ animationDelay: '400ms' }}>
                        <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 group">
                            <Image
                                src="/images/workshop.png"
                                alt="Floral Workshop"
                                fill
                                className="object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110"
                            />
                        </div>
                        {/* Overlay Text */}
                        <div className="absolute -bottom-10 -right-5 bg-[#b5565a] text-white p-10 rounded-[2rem] shadow-2xl max-w-xs animate-float-gentle">
                            <p className="text-2xl font-bold mb-2 uppercase tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Upcoming</p>
                            <p className="text-lg italic opacity-80 border-b border-white/20 pb-4 mb-4">Spring Peony Composition</p>
                            <div className="text-sm font-bold tracking-widest uppercase">April 12 • 6PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}
