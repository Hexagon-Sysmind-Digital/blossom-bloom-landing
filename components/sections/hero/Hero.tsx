"use client"

import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import Image from "next/image"

export default function Hero() {
  const handleConsultation = () => {
    window.open("https://wa.me/1234567890?text=Hi Blossom & Bloom, I'd like to book a consultation for an event!", "_blank")
  }

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#faf6f2]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#f5e6e0] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#ede5f0] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 bg-[#b5565a]/10 text-[#b5565a] tracking-widest uppercase">
              <span>🌿</span>
              <span>ESTABLISHED 2018</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Elevate Your Moments with <span className="italic text-[#b5565a]">Nature&apos;s</span> Finest
            </h1>

            <p className="text-lg md:text-xl text-[#8c7e72] mb-12 max-w-xl leading-relaxed">
              Bespoke floral arrangements handcrafted in our artisan studio. From intimate gestures to grand celebrations, we bring your emotions to life through the language of flowers.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button
                variant="primary"
                className="px-10 py-4 text-base"
                onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Collection
              </Button>
              <Button
                variant="secondary"
                className="px-10 py-4 text-base"
                onClick={handleConsultation}
              >
                Custom Inquiry
              </Button>
            </div>

            <div className="mt-16 flex items-center gap-10">
              <div>
                <div className="text-2xl font-bold text-[#2d2a26]" style={{ fontFamily: "'Playfair Display', serif" }}>15k+</div>
                <div className="text-xs uppercase tracking-widest text-[#8c7e72]">Happy Clients</div>
              </div>
              <div className="w-[1px] h-10 bg-[#e8ddd4]" />
              <div>
                <div className="text-2xl font-bold text-[#2d2a26]" style={{ fontFamily: "'Playfair Display', serif" }}>24h</div>
                <div className="text-xs uppercase tracking-widest text-[#8c7e72]">Freshness Promise</div>
              </div>
            </div>
          </div>

          <div className="relative reveal" style={{ animationDelay: '300ms' }}>
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero.png"
                alt="Luxury Bouquet"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
            {/* Decorative Floating Card */}
            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 max-w-[240px] hidden md:block animate-float-gentle">
              <div className="flex gap-1 mb-3 text-[#c9a96e]">
                {"★".repeat(5)}
              </div>
              <p className="text-sm font-medium italic text-[#2d2a26] leading-relaxed">
                &quot;The most breathtaking arrangement I have ever received. Simply pure artistry.&quot;
              </p>
              <div className="mt-4 text-xs font-bold uppercase tracking-widest text-[#b5565a]">
                — SOPHIA R.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
