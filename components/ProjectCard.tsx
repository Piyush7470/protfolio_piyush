import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="h-48 relative">
        <Image
          src={project.image || "/placeholder.svg?height=300&width=500"}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 rounded-full text-sm">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline inline-flex items-center"
        >
          View Project <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}
