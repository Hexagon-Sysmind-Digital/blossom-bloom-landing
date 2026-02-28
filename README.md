# AgencyTemplate — Next.js + Tailwind Landing Page Boilerplate

Production-ready landing page boilerplate built with:

* Next.js (App Router)
* Tailwind CSS v4
* TypeScript
* Agency-grade architecture
* SEO ready
* Fully reusable and scalable

Designed for:

* Agencies
* Freelancers
* SaaS startups
* Landing page projects

---

# Table of Contents

* Installation
* Development
* Production Build
* Project Architecture
* Folder Explanation
* How to Add New Section
* How to Change Content
* How to Configure SEO
* How to Configure Branding
* How to Reuse Template for Clients
* Deployment

---

# Installation

Clone repository:

```bash
git clone https://github.com/yourname/agency-template.git
```

Enter directory:

```bash
cd agency-template
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Production Build

Build project:

```bash
npm run build
```

Start production server:

```bash
npm start
```

---

# Project Architecture

```
app/
components/
  config/
  data/
  layout/
  lib/
  sections/
  seo/
  styles/
  types/
  ui/
public/
```

Architecture follows:

* scalable
* reusable
* agency-grade structure
* separation of concerns

---

# Folder Explanation

---

# app/

Contains Next.js routing and root layout.

```
app/
  layout.tsx
  page.tsx
  globals.css
```

## layout.tsx

Global layout wrapper.

Used for:

* Navbar
* Footer
* Global styles

Example:

```tsx
<Navbar />
{children}
<Footer />
```

---

## page.tsx

Main landing page composition.

Example:

```tsx
<Hero />
<Features />
<Pricing />
<CTA />
```

This is where sections are assembled.

---

## globals.css

Global Tailwind styles and design tokens.

---

# components/

Core application components.

---

# components/layout/

Global layout components.

```
layout/
  Navbar.tsx
  Footer.tsx
```

Purpose:

Reusable across all pages.

---

# components/sections/

Contains landing page sections.

```
sections/
  hero/
  features/
  pricing/
  cta/
```

Each section is modular and reusable.

Example:

```
sections/hero/Hero.tsx
```

---

# components/ui/

Reusable UI primitives.

```
ui/
  Button.tsx
  Container.tsx
  Section.tsx
```

These are building blocks used across the entire project.

Example usage:

```tsx
<Button>Click</Button>
```

---

# components/config/

Contains global site configuration.

```
config/site.ts
```

Used for:

* site name
* description
* URLs
* branding

Example:

```ts
export const siteConfig = {
  name: "AgencyTemplate",
  description: "Modern landing page template",
}
```

Change this file when creating project for new client.

---

# components/data/

Contains static content.

```
data/
  features.ts
  testimonials.ts
```

This separates content from UI.

Example:

```ts
export const features = [
  {
    title: "Fast",
    description: "Optimized performance",
  },
]
```

---

# components/types/

Contains TypeScript types.

```
types/
  index.ts
```

Example:

```ts
export type Feature = {
  title: string
  description: string
}
```

Provides type safety across project.

---

# components/lib/

Contains utilities and helpers.

```
lib/
  utils.ts
  constants.ts
```

Example utility:

```ts
export function cn(...classes: string[]) {
  return classes.join(" ")
}
```

---

# components/styles/

Contains design tokens and styling configuration.

Example:

```
styles/theme.ts
```

Used for centralized styling system.

---

# components/seo/

Contains SEO components.

```
seo/
  SEO.tsx
```

Used for:

* meta title
* meta description
* OpenGraph tags

Example usage:

```tsx
<SEO
  title="Landing Page"
  description="Best landing page"
/>
```

---

# public/

Contains static assets.

```
public/
  images/
  icons/
```

Used for:

* images
* logos
* icons

---

# How to Add New Section

Step 1:

Create new folder:

```
components/sections/new-section/
```

Step 2:

Create component:

```
NewSection.tsx
```

Step 3:

Import in page.tsx:

```tsx
import NewSection from "@/components/sections/new-section/NewSection"
```

Step 4:

Add to layout:

```tsx
<NewSection />
```

---

# How to Change Content

Edit:

```
components/data/
```

Example:

```
features.ts
```

No need to modify UI components.

---

# How to Configure Branding

Edit:

```
components/config/site.ts
```

Change:

* site name
* description
* links
* branding

---

# SEO Configuration Guide

SEO is configured via:

```
components/seo/SEO.tsx
components/config/site.ts
```

Example usage in page:

```tsx
<SEO
  title="My Product"
  description="Best SaaS product"
/>
```

This controls:

* Google SEO
* social sharing preview
* OpenGraph metadata

---

# How to Reuse Template for Client

Workflow:

Clone template:

```bash
git clone template
```

Edit branding:

```
components/config/site.ts
```

Edit content:

```
components/data/
```

Replace images:

```
public/images/
```

Done.

---

# Deployment

Recommended: Vercel

Steps:

Push to GitHub.

Go to:

https://vercel.com

Import project.

Deploy.

---

# Recommended Workflow for Agencies

For each new client:

1. Clone template
2. Update config/site.ts
3. Update data folder
4. Replace images
5. Deploy

Total setup time: 5–15 minutes

---

# Features

* production ready
* SEO ready
* scalable
* reusable
* clean architecture
* agency grade structure
* Next.js App Router
* Tailwind v4

---

# License

MIT License

You are free to use this template for commercial projects.
