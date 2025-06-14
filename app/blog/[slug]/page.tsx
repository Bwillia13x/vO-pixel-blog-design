import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { posts } from '@/app/data/posts'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.content.substring(0, 160) + '...',
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160) + '...',
      type: 'article',
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
      <article>
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#4ade80' }}>
            {post.title}
          </h1>
          <div style={{ color: '#888', marginBottom: '1rem' }}>
            <span style={{ margin: '0 0.5rem' }}>{post.category}</span>
          </div>
        </header>
        
        <div style={{ lineHeight: '1.7', color: '#ddd' }}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #333' }}>
          <Link 
            href="/blog" 
            style={{ color: '#4ade80', textDecoration: 'underline' }}
          >
            ← Back to Blog
          </Link>
        </footer>
      </article>
    </div>
  )
}
