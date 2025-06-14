import Link from 'next/link'
import { posts } from '@/app/data/posts'

export default function BlogPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#4ade80' }}>
        Blog
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ border: '1px solid #333', borderRadius: '8px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              <Link 
                href={`/blog/${post.slug}`}
                style={{ color: '#4ade80', textDecoration: 'none' }}
              >
                {post.title}
              </Link>
            </h2>
            
            <div style={{ color: '#888', fontSize: '0.875rem', marginBottom: '1rem' }}>
              <span>{post.category}</span>
            </div>
            
            <p style={{ color: '#ddd', marginBottom: '1rem', lineHeight: '1.6' }}>
              {post.content.substring(0, 200)}...
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}
