export default function Button({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button className="
      bg-blue-600
      text-white
      px-6
      py-3
      rounded-lg
      font-medium
      hover:bg-blue-700
      transition
      shadow-sm
      hover:shadow-md
    ">
      {children}
    </button>
  )
}