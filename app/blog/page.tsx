import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles, insights, and thoughts on technology, AI development, and digital creativity.',
}

// Simplified blog posts for testing
const blogPosts = [
  {
    id: "financial-data-apis-for-ai-valuation",
    title: "Financial Data APIs for AI-Augmented Valuation: A Comprehensive Research Guide",
    excerpt: "A detailed comparison and research analysis of 7 financial data APIs for building AI-powered investment platforms.",
    date: "2025-06-14",
    category: "FinTech",
    tags: ["FinTech", "API", "AI"],
    readTime: "15 min read"
  },
  {
    id: "building-my-digital-home",
    title: "Building My Digital Home",
    excerpt: "The story behind building this pixel-themed portfolio site using modern web technologies.",
    date: "2025-06-14",
    category: "Development",
    tags: ["Web Development", "Next.js"],
    readTime: "8 min read"
  }
]

export default function BlogPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Blog</h1>
      <p style={{ marginBottom: '2rem' }}>Articles and insights on technology and development.</p>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          <a href="/blog/financial-data-apis-for-ai-valuation" style={{ color: '#4ade80' }}>
            Financial Data APIs for AI-Augmented Valuation
          </a>
        </h2>
        <p style={{ color: '#888', marginBottom: '0.5rem' }}>
          A comprehensive research guide comparing 7 financial data APIs for building AI-powered investment platforms.
        </p>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          <span>FinTech</span> • <span>June 14, 2025</span> • <span>15 min read</span>
        </div>
      </div>
      
      <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
          <a href="/blog/building-my-digital-home" style={{ color: '#4ade80' }}>
            Building My Digital Home
          </a>
        </h2>
        <p style={{ color: '#888', marginBottom: '0.5rem' }}>
          The story behind building this pixel-themed portfolio site using modern web technologies.
        </p>
        <div style={{ fontSize: '0.875rem', color: '#666' }}>
          <span>Development</span> • <span>June 14, 2025</span> • <span>8 min read</span>
        </div>
      </div>
    </div>
  )
}
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
