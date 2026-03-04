import Section from "@/components/ui/Section"

const reviews = [
  {
    text: "The architectural quality of their arrangements is unlike anything else in the city. Each bouquet feels like a masterpiece of sculptural design.",
    author: "Julian Thorne",
    role: "Interior Designer",
    initial: "J"
  },
  {
    text: "They handled our entire wedding floral concept with such grace and precision. The scent of the peonies alone was a memory we will cherish forever.",
    author: "Isabella Martinez",
    role: "Global Creative Lead",
    initial: "I"
  },
  {
    text: "A true hidden gem. Their attention to the nuance of seasonal change makes every weekly delivery a refreshing surprise for the senses.",
    author: "Marcus Chen",
    role: "Lifestyle Curator",
    initial: "M"
  }
]

export default function Testimonials() {
  return (
    <Section id="reviews" className="bg-[#faf6f2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-end mb-20">
          <div className="lg:w-1/2">
            <span className="text-[#b5565a] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">Reflections</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our <span className="italic">Patrons</span> Say
            </h2>
          </div>
          <p className="lg:w-1/2 text-[#8c7e72] text-lg leading-relaxed">
            We are honored to be part of your most significant stories. Here is what some of our long-standing clients have to say about the Blossom experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-[#e8ddd4] flex flex-col justify-between hover:shadow-xl transition-shadow duration-500"
            >
              <div>
                <div className="text-[#c9a96e] text-4xl mb-8">&ldquo;</div>
                <p className="text-[#2d2a26] text-lg leading-relaxed italic mb-10">
                  {review.text}
                </p>
              </div>

              <div className="flex items-center gap-5 pt-8 border-t border-[#f5e6e0]">
                <div className="w-12 h-12 rounded-full bg-[#f5e6e0] flex items-center justify-center text-[#b5565a] font-bold text-sm">
                  {review.initial}
                </div>
                <div>
                  <h4 className="font-bold text-[#2d2a26] text-sm uppercase tracking-widest">{review.author}</h4>
                  <p className="text-[#8c7e72] text-xs uppercase tracking-[0.1em] mt-1">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale contrast-125">
          {["VOGUE", "ELLE DECOR", "BRIDES", "HARPER'S BAZAAR"].map((mag) => (
            <span key={mag} className="text-xl font-bold tracking-[0.4em] pointer-events-none">{mag}</span>
          ))}
        </div>
      </div>
    </Section>
  )
}