import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog Test',
  description: 'Test blog page',
}

export default function BlogTestPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Blog Test Page</h1>
      <p>This is a test to see if the blog page loads correctly.</p>
      <div className="mt-4">
        <h2 className="text-xl mb-2">Test Article</h2>
        <p>If you can see this, the blog page is working.</p>
      </div>
    </div>
  )
}
