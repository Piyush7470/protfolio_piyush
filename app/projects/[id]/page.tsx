import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { getProject } from "@/lib/projects"

export default async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to all projects
      </Link>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">{project.summary}</p>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-10">
          <Image
            src={project.image || "/placeholder.svg?height=600&width=1200"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-12">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 dark:bg-slate-700 text-white rounded-lg flex items-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            >
              <Github size={18} /> View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg flex items-center gap-2 hover:bg-emerald-700 transition-colors"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>{project.description}</p>

          <h2>Challenges and Solutions</h2>
          <p>
            During the development of this project, I encountered several challenges that pushed me to find creative
            solutions. One significant challenge was {project.challenges[0]}.
          </p>
          <p>
            To solve this, I {project.solutions[0]}. This approach not only resolved the immediate issue but also
            improved the overall architecture of the application.
          </p>

          <h2>Technologies Used</h2>
          <ul>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          {project.testimonial && (
            <>
              <h2>Client Feedback</h2>
              <blockquote>
                "{project.testimonial.quote}"
                <footer>
                  — {project.testimonial.author}, {project.testimonial.role}
                </footer>
              </blockquote>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
