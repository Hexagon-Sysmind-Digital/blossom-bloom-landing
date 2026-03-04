import Container from "../ui/Container"

export default function Footer() {
  return (
    <footer className="bg-[#2d2a26] text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#b5565a] opacity-5 filter blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#d4956a] opacity-5 filter blur-[150px]" />

      <Container>
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl">🌷</span>
              <span
                className="font-bold text-2xl tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Blossom <span className="text-[#b5565a]">&</span> Bloom
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              Curating botanical artistry for life&apos;s most cherished moments. Handcrafted in our studio, delivered with love to your doorstep.
            </p>
            <div className="flex gap-4">
              {["IG", "FB", "WA", "PN"].map((soc) => (
                <a key={soc} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-bold tracking-widest hover:border-[#b5565a] hover:text-[#b5565a] transition-all">
                  {soc}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4956a] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Artisan Story</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">Floral Gallery</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Order Online</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4956a] mb-8">Studio</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <span className="opacity-40">Add:</span>
                <span>88 Artisan Row, Flower District<br />New York, NY 10014</span>
              </li>
              <li className="flex gap-3">
                <span className="opacity-40">Msg:</span>
                <span>hello@blossomandbloom.com</span>
              </li>
              <li className="flex gap-3">
                <span className="opacity-40">Tel:</span>
                <span>+1 (212) 555-0198</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d4956a] mb-8">Newsletter</h4>
            <p className="text-xs text-white/50 mb-6 leading-relaxed">Join our inner circle for weekly floral care tips and exclusive seasonal previews.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm focus:outline-none focus:border-[#b5565a] transition-colors"
                title="Enter your email to subscribe to our newsletter"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-[#2d2a26] rounded-full px-4 text-[10px] font-bold uppercase tracking-widest hover:bg-[#b5565a] hover:text-white transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            © 2026 BLOSSOM & BLOOM STUDIO. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
            <a href="#" className="hover:text-[#b5565a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#b5565a] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#b5565a] transition-colors">Shipping</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}