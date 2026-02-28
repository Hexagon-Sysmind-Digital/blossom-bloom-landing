import Container from "../ui/Container"

export default function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur sticky top-0 z-50">

      <Container>

        <div className="flex justify-between items-center py-4">

          <div className="font-bold text-lg">
            AgencyTemplate
          </div>

          <div className="flex gap-8 text-sm text-gray-600">

            <a href="#features" className="hover:text-black transition">
              Features
            </a>

            <a href="#about" className="hover:text-black transition">
              About
            </a>

            <a href="#pricing" className="hover:text-black transition">
              Pricing
            </a>

          </div>

        </div>

      </Container>

    </nav>
  )
}