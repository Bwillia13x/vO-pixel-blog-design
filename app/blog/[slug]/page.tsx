import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// TODO: Replace with real content loading from MDX files
const blogPosts = {
  "hello-world": {
    title: "Hello World: Building with Pixel Wisdom",
    content: `Welcome to my digital space! This is where I'll be sharing my journey through the ever-evolving world of technology, AI development, and creative coding.

## What You'll Find Here

This blog serves as my playground for exploring ideas, documenting discoveries, and sharing insights about:

- **AI-Driven Development**: How tools like Cursor and Windsurf are changing the game
- **Modern Web Technologies**: Deep dives into Next.js, React, and the latest frameworks
- **Creative Coding**: Bringing art and aesthetics into functional web applications
- **Developer Experience**: Tools, workflows, and methodologies that make coding more enjoyable

## The Pixel Aesthetic

You might notice the retro pixel theme throughout this site. It's not just nostalgia - it represents the intersection of old-school gaming culture and modern web development. Every pixel serves a purpose, just like every line of code.

## What's Coming

I'm currently working on several exciting projects that I'll be documenting here:

1. Building this very blog template as an open-source project
2. Exploring AI integration in development workflows
3. Creating pixel art assets for web applications
4. Experimenting with modern CSS techniques for retro aesthetics

## Let's Connect

This is just the beginning. Whether you're here for the technical content, creative inspiration, or just curious about the pixel aesthetic, I'm glad you're here.

Feel free to reach out through the contact page or follow along as I build in public!

---

*Happy coding! 🎮*`,
    date: "2025-06-14",
    category: "General",
    tags: ["Welcome", "Blog", "Tech"],
    readTime: "3 min read"
  },
  "ai-driven-development": {
    title: "The Future of AI-Driven Development",
    content: `# The Future of AI-Driven Development

*Coming soon - this post is currently being written...*

## Topics to Cover

- AI-powered code completion and generation
- Tools like Cursor, Windsurf, and GitHub Copilot
- Impact on developer productivity
- Best practices for AI-assisted coding
- The future of software development

Stay tuned!`,
    date: "2025-06-10",
    category: "AI",
    tags: ["AI", "Development", "Tools"],
    readTime: "5 min read"
  },
  "pixel-art-in-web-design": {
    title: "Bringing Pixel Art Aesthetics to Modern Web Design",
    content: `# Bringing Pixel Art Aesthetics to Modern Web Design

*This post is in development...*

## Coming Soon

- CSS techniques for pixel-perfect designs
- Creating scalable pixel art assets
- Balancing retro aesthetics with modern UX
- Performance considerations

Check back soon for the full article!`,
    date: "2025-06-08",
    category: "Design",
    tags: ["Design", "Pixel Art", "CSS"],
    readTime: "7 min read"
  }
}

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160) + '...',
  }
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back to Blog */}
      <div className="mb-6">
        <Link 
          href="/blog"
          className="inline-flex items-center font-pixel text-sm text-green-400 hover:text-green-300 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-pixel mb-4">{post.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="inline-block px-3 py-1 bg-green-600 text-black font-mono text-sm rounded">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block px-2 py-1 bg-gray-600 text-white text-xs font-mono rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Article Content */}
      <article className="prose prose-invert prose-green max-w-none">
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="font-mono whitespace-pre-line text-gray-300 leading-relaxed">
            {post.content}
          </div>
        </div>
      </article>

      {/* Article Footer */}
      <footer className="mt-8 pt-8 border-t border-gray-700">
        <div className="flex justify-between items-center">
          <Link 
            href="/blog"
            className="px-4 py-2 bg-gray-800 text-green-400 font-pixel rounded hover:bg-gray-700 transition-colors"
          >
            ← More Posts
          </Link>
          
          {/* TODO: Add social sharing buttons */}
          <div className="text-sm font-mono text-gray-400">
            Share this post
          </div>
        </div>
      </footer>

      {/* TODO: Add related posts section */}
      {/* TODO: Add comments section */}
    </div>
  )
}

// Generate static paths for existing posts
export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
