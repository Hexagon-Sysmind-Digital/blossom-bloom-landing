import Container from "./Container"

export default function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}