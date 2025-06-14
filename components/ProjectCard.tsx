import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/content/projects'

interface ProjectCardProps {
  project: Project
  className?: string
}

export default function ProjectCard({ project, className = '' }: ProjectCardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors ${className}`}>
      {/* Project Image */}
      {project.image && (
        <div className="mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded"
          />
        </div>
      )}

      {/* Project Header */}
      <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-pixel">{project.title}</h3>
          <span className={`inline-block px-2 py-1 text-xs font-mono rounded ${
            project.status === 'completed' ? 'bg-green-600 text-black' :
            project.status === 'in-progress' ? 'bg-yellow-600 text-black' :
            'bg-blue-600 text-black'
          }`}>
            {project.status}
          </span>
        </div>
        <p className="font-mono text-sm text-gray-300 mb-3">{project.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="inline-block px-2 py-1 bg-gray-600 text-white text-xs font-mono rounded">
            {tag}
          </span>
        ))}
      </div>

      {/* Project Footer */}
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-gray-400">{project.year}</span>
        
        <div className="flex gap-2">
          {project.github && (
            <Link 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-gray-700 text-green-400 font-mono text-xs rounded hover:bg-gray-600 transition-colors"
            >
              GitHub
            </Link>
          )}
          {project.demo && (
            <Link 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-green-600 text-black font-mono text-xs rounded hover:bg-green-500 transition-colors"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
