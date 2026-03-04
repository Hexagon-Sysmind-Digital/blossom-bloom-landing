export type Feature = {
  title: string
  description: string
  icon?: string
}

export type Testimonial = {
  name: string
  role: string
  content: string
}

export type Pricing = {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}