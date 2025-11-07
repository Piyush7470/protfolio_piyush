export interface Project {
  id: string
  title: string
  summary: string
  description: string
  image?: string
  tags: string[]
  technologies: string[]
  features: string[]
  challenges: string[]
  solutions: string[]
  githubUrl?: string
  liveUrl?: string
  testimonial: {
    quote: string
    author: string
    role: string
  } | null
}
