import { Suspense } from "react"
import ProjectCard from "@/components/ProjectCard"
import { getProjects } from "@/lib/projects"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
        A collection of my recent work, side projects, and experiments. Each project represents different challenges and
        learning opportunities.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg">All</button>
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors">
            Web Apps
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors">
            Mobile
          </button>
          <button className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-emerald-600 dark:hover:border-emerald-400 transition-colors">
            UI/UX
          </button>
        </div>
      </div>

      <Suspense fallback={<div>Loading projects...</div>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Suspense>
    </div>
  )
}
