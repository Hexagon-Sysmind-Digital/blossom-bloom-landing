import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FloatingWA from "@/components/ui/FloatingWA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blossom & Bloom — Handcrafted Floral Arrangements",
  description: "Fresh, locally sourced flowers crafted into beautiful arrangements for every occasion. Same-day delivery available.",
  keywords: "florist, flowers, bouquet, floral arrangements, wedding flowers, same-day delivery, fresh flowers",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
        <FloatingWA />

      </body>
    </html>
  )
}