import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, insights, and thoughts on technology, AI development, and digital creativity.',
}

// TODO: Replace with real blog posts from content source
const blogPosts = [
  {
    id: "financial-data-apis-comprehensive-guide",
    title: "Financial Data APIs for AI-Augmented Valuation: A Comprehensive Guide",
    excerpt: "A detailed comparison of 7 financial data APIs for building AI-powered investment platforms, including free tiers, pricing, and integration recommendations.",
    date: "2025-06-14",
    category: "FinTech",
    tags: ["FinTech", "API", "AI", "Data Analysis", "Investment", "Python"],
    readTime: "15 min read"
  },
  {
    id: "building-my-digital-home",
    title: "Building My Digital Home: The Journey of Creating This Site",
    excerpt: "The story behind building this pixel-themed portfolio site using Next.js, AI tools, and modern web development practices.",
    date: "2025-06-14",
    category: "Development",
    tags: ["Web Development", "Next.js", "AI Tools", "Portfolio"],
    readTime: "8 min read"
  },
  {
    id: "hello-world",
    title: "Hello World: Building with Pixel Wisdom",
    excerpt: "Welcome to my blog! Here's what you can expect to find as I document my journey through tech, AI, and creative development.",
    date: "2025-06-14",
    category: "General",
    tags: ["Welcome", "Blog", "Tech"],
    readTime: "3 min read"
  },
  {
    id: "ai-driven-development",
    title: "The Future of AI-Driven Development",
    excerpt: "Exploring how tools like Cursor and Windsurf are transforming the way we write code, and what it means for developers.",
    date: "2025-06-10",
    category: "AI",
    tags: ["AI", "Development", "Tools"],
    readTime: "5 min read"
  },
  {
    id: "pixel-art-in-web-design",
    title: "Bringing Pixel Art Aesthetics to Modern Web Design",
    excerpt: "How to incorporate retro pixel art elements into contemporary web applications without sacrificing usability.",
    date: "2025-06-08",
    category: "Design",
    tags: ["Design", "Pixel Art", "CSS"],
    readTime: "7 min read"
  }
]

const categories = ["All", "AI", "Design", "Development", "FinTech", "General"]

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-pixel mb-8 text-center">Blog</h1>
      
      <div className="mb-8 text-center">
        <p className="font-mono text-lg mb-6">
          Articles, insights, and thoughts on technology, AI development, and digital creativity.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 py-1 bg-gray-800 text-green-400 font-mono text-sm rounded hover:bg-gray-700 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {blogPosts.length > 0 ? (
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                <div className="flex-1">
                  <h2 className="text-xl font-pixel mb-2 hover:text-green-300 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="font-mono text-sm mb-3 text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex flex-wrap gap-2 mb-2 md:mb-0">
                  <span className="inline-block px-2 py-1 bg-green-600 text-black text-xs font-mono rounded">
                    {post.category}
                  </span>
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2 py-1 bg-gray-600 text-white text-xs font-mono rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="mt-4">
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-block px-4 py-2 bg-green-600 text-black font-pixel text-sm rounded hover:bg-green-500 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h3 className="text-xl font-pixel mb-4">Coming Soon</h3>
          <p className="font-mono mb-4">
            I&apos;m preparing some great content for you. Check back soon for articles on:
          </p>
          <ul className="font-mono text-sm space-y-2">
            <li>• AI-powered development workflows</li>
            <li>• Modern web development techniques</li>
            <li>• Creative coding and pixel art</li>
            <li>• Tech industry insights</li>
          </ul>
        </div>
      )}

      {/* TODO: Add pagination when there are more posts */}
      {/* TODO: Add search functionality */}
      {/* TODO: Add RSS feed link */}
    </div>
  )
}
