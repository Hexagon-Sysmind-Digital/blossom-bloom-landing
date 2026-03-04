import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-40 bg-[#2d2a26] relative overflow-hidden">
      {/* Decorative Light Leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#b5565a] opacity-[0.03] filter blur-[180px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block border border-white/20 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.3em] uppercase text-[#d4956a] mb-10">
          Begin Your Floral Journey
        </div>

        <h2 className="text-5xl md:text-7xl font-bold text-white mb-10 leading-[1.1]" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to Make Life <span className="italic text-[#d4956a]">Beautiful</span>?
        </h2>

        <p className="text-lg md:text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed">
          Whether you&apos;re planning a grand gala or simply want to brighten a Tuesday afternoon, our artisans are ready to bring your vision to life.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Button variant="primary" className="!bg-white !text-[#2d2a26] hover:!bg-[#f5e6e0] px-12 py-5 text-sm">
            Book a Consultation
          </Button>
          <a
            href="https://wa.me/1234567890"
            className="text-white text-sm font-bold uppercase tracking-[0.2em] border-b-2 border-[#b5565a] pb-1 hover:text-[#d4956a] transition-colors"
          >
            WhatsApp Artisan
          </a>
        </div>

        <div className="mt-20 flex justify-center gap-12 text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">
          <div className="flex flex-col items-center gap-2">
            <span>📞</span>
            <span>Inquiry Line</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>📍</span>
            <span>Studio Visit</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span>✉️</span>
            <span>Email Expert</span>
          </div>
        </div>
      </div>
    </section>
  )
}