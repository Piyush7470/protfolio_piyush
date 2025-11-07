import db from "./db"
import type { Project } from "@/types/project"

// Get all projects
export async function getProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return db.projects
}

// Get a single project by ID
export async function getProject(id: string): Promise<Project | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 300))
  const project = db.projects.find((p) => p.id === id)
  return project || null
}
