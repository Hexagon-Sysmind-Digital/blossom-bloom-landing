"use client"

import { useState, useEffect } from "react"
import Container from "../ui/Container"
import Button from "../ui/Button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Collection", href: "#collection" },
    { name: "Reviews", href: "#reviews" },
  ]

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4 outline-none" : "py-6"}`}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`backdrop-blur-2xl transition-all duration-500 rounded-[2.5rem] px-10 py-4 flex justify-between items-center ${scrolled ? "bg-white/90 shadow-md border-white/20" : "bg-white/70 border-white/40 shadow-sm"}`}>
          <a href="#" className="flex items-center gap-3 group">
            <span className="text-2xl transition-transform duration-500 group-hover:rotate-12">🌷</span>
            <span
              className="font-bold text-xl tracking-tighter text-[#2d2a26]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Blossom <span className="text-[#b5565a]">&</span> Bloom
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2d2a26]/70 hover:text-[#b5565a] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#b5565a] hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
            <Button variant="primary" className="!px-6 !py-2.5 !text-[10px] !tracking-[0.2em] hidden md:block">
              Order Now
            </Button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-[#2d2a26] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#2d2a26] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-[#2d2a26] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#faf6f2] z-[-1] transition-transform duration-700 ease-in-out md:hidden flex flex-col items-center justify-center p-12 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-3xl font-bold tracking-tight text-[#2d2a26] hover:text-[#b5565a] transition-all duration-500`}
              style={{
                fontFamily: "'Playfair Display', serif",
                transitionDelay: `${index * 100}ms`,
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)"
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center gap-6">
            <Button
              variant="primary"
              className="!px-12 !py-4"
              onClick={() => setIsOpen(false)}
            >
              Order Now
            </Button>
            <div className="flex gap-12 mt-12 opacity-40">
              {["IG", "FB", "WA"].map(soc => (
                <span key={soc} className="text-xs font-bold tracking-widest">{soc}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}