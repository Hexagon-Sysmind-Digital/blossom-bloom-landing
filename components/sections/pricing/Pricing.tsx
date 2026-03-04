"use client"

import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

const collections = [
  {
    name: "Petite Bundle",
    price: "$45",
    description: "A charming arrangement of seasonal blooms, perfect for everyday joy.",
    features: ["Seasonal selection", "Artisan wrapping", "Handwritten card"],
    popular: false,
    tag: "Essential"
  },
  {
    name: "Luxury Choice",
    price: "$95",
    description: "Our signature dense bouquet featuring premium roses and seasonal foliage.",
    features: ["Premium blooms", "Vase included", "Same-day delivery", "Personalized note"],
    popular: true,
    tag: "Artisan Favorite"
  },
  {
    name: "Grand Statement",
    price: "$180",
    description: "An opulent, oversized arrangement designed to be the center of attention.",
    features: ["Rare botanicals", "Custom vessel", "White-glove delivery", "Floral care kit"],
    popular: false,
    tag: "Prestige"
  }
]

export default function Pricing() {
  const handleOrder = (productName: string) => {
    const message = `Hi Blossom & Bloom! 🌷 I would like to order the ${productName} arrangement. Could you help me with the next steps?`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Section id="pricing" className="bg-white">
      <div className="text-center mb-20">
        <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Curated Selections</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Ready to <span className="italic">Order</span>
        </h2>
        <p className="text-[#8c7e72] max-w-xl mx-auto leading-relaxed">
          Select from our handcrafted signature arrangements, each designed to convey your deepest sentiments with elegance.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`relative p-10 rounded-[2.5rem] transition-all duration-700 hover:shadow-2xl border ${item.popular
              ? "bg-[#2d2a26] text-white border-transparent scale-105 z-10"
              : "bg-white text-[#2d2a26] border-[#e8ddd4] hover:border-[#b5565a]"
              }`}
          >
            {item.popular && (
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#b5565a] text-white px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg">
                Most Desired
              </div>
            )}

            <div className={`text-xs font-bold uppercase tracking-widest mb-6 ${item.popular ? "text-[#d4956a]" : "text-[#b5565a]"}`}>
              {item.tag}
            </div>

            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>

            <div className="flex items-baseline gap-1 mb-6">
              <span className={`text-4xl font-bold ${item.popular ? "text-white" : "text-[#2d2a26]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>{item.price}</span>
              <span className={`text-sm opacity-60 ${item.popular ? "text-white" : "text-[#8c7e72]"}`}>/ arrangement</span>
            </div>

            <p className={`text-sm leading-relaxed mb-10 ${item.popular ? "text-white/80" : "text-[#8c7e72]"}`}>
              {item.description}
            </p>

            <ul className="space-y-4 mb-12">
              {item.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <span className={item.popular ? "text-[#d4956a]" : "text-[#b5565a]"}>✦</span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={item.popular ? "outline" : "primary"}
              className={`w-full py-4 text-xs font-bold tracking-widest transition-all duration-300 ${item.popular ? "bg-white text-[#2d2a26] hover:bg-[#b5565a] hover:text-white" : ""}`}
              onClick={() => handleOrder(item.name)}
            >
              Order This Creation
            </Button>
          </div>
        ))}
      </div>
    </Section>
  )
}