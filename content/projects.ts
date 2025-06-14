// Projects data structure for the portfolio
export interface Project {
  id: string
  title: string
  description: string
  image?: string
  tags: string[]
  year: number
  status: 'completed' | 'in-progress' | 'planned'
  github?: string
  demo?: string
  featured?: boolean
}

export interface CurrentProject extends Project {
  progress?: number
  startDate: string
  expectedCompletion?: string
  highlights?: string[]
}

// Sample completed projects - replace with real projects
export const projects: Project[] = [
  {
    id: "pixel-blog-template",
    title: "Pixel Blog Template",
    description: "A modern, responsive blog template with pixel aesthetic. Built with Next.js 15, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Blog Template"],
    year: 2025,
    status: "completed",
    featured: true
    // TODO: Add real GitHub and demo links when available
    // github: "https://github.com/username/pixel-blog-template",
    // demo: "https://pixel-blog-template.vercel.app"
  }
  // TODO: Add more completed projects
]

// Current/ongoing projects
export const currentProjects: CurrentProject[] = [
  {
    id: "ai-development-workflow",
    title: "AI-Powered Development Workflow",
    description: "Exploring and documenting best practices for AI-assisted development using tools like Cursor and Windsurf.",
    tags: ["AI", "Developer Tools", "Workflow", "Documentation"],
    year: 2025,
    status: "in-progress",
    progress: 40,
    startDate: "2025-06",
    expectedCompletion: "2025-08",
    highlights: [
      "Comprehensive tool comparison",
      "Best practices documentation",
      "Real-world case studies",
      "Community resource compilation"
    ]
  }
  // TODO: Add more current projects
]

// Future/planned projects
export const plannedProjects: Project[] = [
  {
    id: "pixel-ui-library",
    title: "Pixel UI Component Library",
    description: "A collection of React components with pixel art aesthetics for modern web applications.",
    tags: ["React", "UI Library", "Design System", "Pixel Art"],
    year: 2025,
    status: "planned"
  }
  // TODO: Add more planned projects
]

// Helper functions
export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(project => project.status === status)
}

export function getProjectById(id: string): Project | CurrentProject | undefined {
  return [...projects, ...currentProjects, ...plannedProjects].find(project => project.id === id)
}
