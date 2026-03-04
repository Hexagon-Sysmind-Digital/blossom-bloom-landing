import Section from "@/components/ui/Section"
import Image from "next/image"

export default function About() {
  return (
    <Section id="about" className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1 relative reveal">
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-xl group">
            <Image
              src="/images/about.png"
              alt="Artisan Florist at Work"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#ede5f0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#f5e6e0] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700" />
        </div>

        <div className="order-1 lg:order-2 reveal" style={{ animationDelay: '200ms' }}>
          <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Our Philosophy</span>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Crafting <span className="italic">Emotion</span> Through Every Petal
          </h2>

          <div className="space-y-6 text-[#8c7e72] leading-relaxed text-lg">
            <p>
              Founded on the belief that flowers are more than just decoration—they are a language of the heart—Blossom & Bloom has been curating boutique floral experiences since 2018.
            </p>
            <p>
              Lead artisan Elena Vance started with a small garden studio and a singular mission: to bring true botanical artistry back to the local community. Every stem we source is hand-selected for its beauty, longevity, and character.
            </p>
            <p>
              We embrace the imperfect beauty of nature, creating arrangements that feel alive, organic, and deeply personal. It is this dedication to the artisan process that sets us apart.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="bg-[#faf6f2] p-8 rounded-3xl border border-[#e8ddd4] hover:border-[#b5565a] transition-colors duration-500">
              <div className="text-3xl font-bold text-[#b5565a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
              <p className="text-sm font-medium text-[#2d2a26] uppercase tracking-wider">Sustainable Sourcing</p>
            </div>
            <div className="bg-[#faf6f2] p-8 rounded-3xl border border-[#e8ddd4] hover:border-[#b5565a] transition-colors duration-500">
              <div className="text-3xl font-bold text-[#b5565a] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Fresh</div>
              <p className="text-sm font-medium text-[#2d2a26] uppercase tracking-wider">Daily Market Selection</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}