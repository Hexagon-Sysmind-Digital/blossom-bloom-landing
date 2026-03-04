"use client"

import { useState } from "react"
import Section from "@/components/ui/Section"
import Image from "next/image"

const galleryItems = [
    {
        src: "/images/gallery-1.png",
        alt: "Wedding Floral Arch",
        title: "Bespoke Weddings",
        category: "Events"
    },
    {
        src: "/images/gallery-2.png",
        alt: "Dinner Table Centerpiece",
        title: "Elegant Dining",
        category: "Styling"
    },
    {
        src: "/images/gallery-3.png",
        alt: "Luxury Gift Box",
        title: "Signature Gifts",
        category: "Boutique"
    },
    {
        src: "/images/gallery-4.png",
        alt: "Wildflower Bouquet",
        title: "Daily Blooms",
        category: "Collection"
    }
]

const categories = ["All", "Events", "Styling", "Boutique", "Collection"]

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter(item => item.category === activeCategory)

    return (
        <Section id="collection" className="bg-[#faf6f2]">
            <div className="text-center mb-16">
                <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Visual Journey</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
                    The Blossom <span className="italic">Portfolio</span>
                </h2>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`text-[10px] font-bold uppercase tracking-[0.3em] pb-2 border-b-2 transition-all duration-300 ${activeCategory === cat
                                ? "border-[#b5565a] text-[#b5565a]"
                                : "border-transparent text-[#2d2a26]/40 hover:text-[#2d2a26]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[400px]">
                {filteredItems.map((item, index) => (
                    <div
                        key={item.title}
                        className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-lg cursor-pointer animate-fade-in"
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2d2a26]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-[#d4956a] text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                            <h3 className="text-white text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-[#8c7e72] italic mb-8">Follow our daily creative process on Instagram</p>
                <a href="#" className="inline-block border-b border-[#b5565a] pb-1 text-[#b5565a] font-bold tracking-widest uppercase text-xs hover:text-[#9a3f43] transition-colors">
                    @blossomandbloom.studio
                </a>
            </div>
        </Section>
    )
}
