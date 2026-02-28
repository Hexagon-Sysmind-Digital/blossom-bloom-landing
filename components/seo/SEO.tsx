import { siteConfig } from "../config/site"

export default function SEO({
  title,
  description,
}: {
  title?: string
  description?: string
}) {
  const metaTitle =
    title || siteConfig.name

  const metaDescription =
    description || siteConfig.description

  return (
    <>
      <title>{metaTitle}</title>

      <meta
        name="description"
        content={metaDescription}
      />

      <meta
        property="og:title"
        content={metaTitle}
      />

      <meta
        property="og:description"
        content={metaDescription}
      />
    </>
  )
}