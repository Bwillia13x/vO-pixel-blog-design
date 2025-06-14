import { notFound } from 'next/navigation'

const blogPosts = {
  "financial-data-apis-for-ai-valuation": {
    title: "Financial Data APIs for AI-Augmented Valuation: A Comprehensive Research Guide",
    content: `This is a comprehensive guide to financial data APIs for AI-augmented valuation platforms.

## Introduction

Building an AI-augmented valuation platform requires access to comprehensive financial data. This guide compares 7 popular financial data APIs.

## Key Requirements

- Comprehensive fundamentals with 10+ years of history
- Market data and historical prices  
- Developer-friendly with good documentation
- Reasonable pricing for prototypes

## API Comparison

### 1. Financial Modeling Prep (FMP)
- Free tier: 250 calls/day
- Pricing: $22-149/month
- Pros: 150+ endpoints, structured data
- Cons: 5-year limit on free tier

### 2. Alpha Vantage  
- Free tier: ~25 calls/day
- Pricing: $50+/month
- Pros: Official data vendor
- Cons: Limited fundamentals

### 3. Yahoo Finance (yfinance)
- Free tier: Unlimited (unofficial)
- Pricing: Free
- Pros: Decades of price data
- Cons: Unofficial, licensing concerns

## Recommendation

For MVP development, use a combination of:
1. **Financial Modeling Prep** for fundamentals
2. **Yahoo Finance** for historical prices
3. **Finnhub** for extended history

This approach balances cost and coverage for prototype development.`,
    date: "2025-06-14",
    category: "FinTech",
    tags: ["FinTech", "API", "AI"],
    readTime: "15 min read"
  }
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]
  
  if (!post) {
    notFound()
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <article>
        <header style={{ marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #333' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.2' }}>
            {post.title}
          </h1>
          <div style={{ fontSize: '0.875rem', color: '#666', display: 'flex', gap: '1rem' }}>
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </header>
        
        <div style={{ lineHeight: '1.6' }}>
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>{paragraph.substring(3)}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>{paragraph.substring(4)}</h3>
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} style={{ marginLeft: '1rem' }}>{paragraph.substring(2)}</li>
            }
            if (paragraph.trim() === '') {
              return <br key={index} />
            }
            return <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
          })}
        </div>
      </article>
    </div>
  )
}
    title: "Test Post",
    content: "This is a simple test post to verify routing works.",
    date: "2025-06-14",
    category: "Test",
    tags: ["Test"],
    readTime: "1 min read"
  },
  "financial-data-apis-comprehensive-guide": {
    title: "Financial Data APIs for AI-Augmented Valuation: A Comprehensive Guide",
    content: `Building an AI-augmented valuation platform requires access to comprehensive financial data. After extensive research into financial data providers, I've compiled this detailed comparison to help developers choose the right APIs for their projects.

## Project Context and Requirements

When building "Intrinsic Edge," a 12-week MVP for a value-investing platform using a modern stack (Next.js frontend, FastAPI backend, DuckDB+Parquet for local time-series, PGVector for embeddings), the chosen financial data APIs must provide:

- **Comprehensive Fundamentals**: Deep company financials with 10+ years of history
- **Market Data**: Historical stock price time series and real-time quotes
- **Developer-Friendly**: Clear documentation and generous free tiers for prototyping
- **Permissive Licensing**: Suitable for prototype applications without hefty subscriptions

## API Comparison Overview

I evaluated 7 popular financial data APIs based on coverage, pricing, and developer experience:

### 1. Alpha Vantage
**Best for: Reliable basic data with official exchange licensing**
- Free Tier: ~25 API calls/day, no credit card required
- Pricing: Premium starts at $50/month
- Pros: Official NASDAQ data vendor, comprehensive documentation
- Cons: Limited fundamentals depth, strict rate limiting

### 2. Financial Modeling Prep (FMP)
**Best for: Comprehensive endpoints and structured data**
- Free Tier: 250 calls/day with most endpoints accessible
- Pricing: $22-149/month for premium features
- Pros: Excellent API structure, broad data coverage
- Cons: Free tier historical depth limited, licensing restrictions

### 3. Yahoo Finance (yfinance)
**Best for: Quick prototyping and historical price data**
- Free Tier: 100% free, no account needed
- Pros: Extensive price history, easy Python integration
- Cons: Unofficial API, licensing concerns for commercial use

### 4. Polygon.io
**Best for: Real-time data and modern API design**
- Free Tier: 5 calls/minute, all endpoints accessible
- Pricing: $29/month for higher limits
- Pros: Real-time capabilities, developer-friendly documentation
- Cons: Limited fundamental data depth, U.S. market focus

### 5. Finnhub
**Best for: Global coverage and earnings transcripts**
- Free Tier: 60 calls/minute, fundamental data included
- Pricing: $49-99/month for premium
- Pros: Global coverage, earnings transcripts, feature-rich
- Cons: Data accuracy variations, complex endpoint structure

## Recommended Strategy

For a 12-week MVP, I recommend a **hybrid approach**:

### Primary Stack
- **Financial Modeling Prep** for fundamentals and company data
- **Yahoo Finance (yfinance)** for bulk historical price downloads
- **Finnhub** for extended history and specialized data

### Implementation Example

\`\`\`python
import yfinance as yf
import requests

# Yahoo Finance for price history
def get_price_history(symbol, period="10y"):
    ticker = yf.Ticker(symbol)
    return ticker.history(period=period)

# FMP for fundamentals
def get_fundamentals(symbol, api_key):
    url = f"https://financialmodelingprep.com/api/v3/income-statement/{symbol}"
    response = requests.get(url, params={"apikey": api_key})
    return response.json()
\`\`\`

This combination provides cost-effective prototyping with comprehensive data coverage and a clear upgrade path for production scaling.

## Key Takeaways

1. **No free API offers unlimited 10+ year fundamentals** - plan accordingly
2. **Stock price data is more accessible** than detailed fundamentals
3. **Licensing matters** for public applications - check terms carefully
4. **Start lean, scale smart** - begin with free tiers and upgrade as needed

The financial data landscape offers many options. Choose based on your specific needs, budget constraints, and technical requirements. Most importantly, start building and iterate based on real usage patterns.

---

*This analysis is based on 2025 pricing and features. Always verify current API terms and capabilities before implementation.*`,
    date: "2025-06-14",
    category: "FinTech",
    tags: ["FinTech", "API", "AI", "Data Analysis", "Investment", "Python"],
    readTime: "15 min read"
  },
  "building-my-digital-home": {
    title: "Building My Digital Home: The Journey of Creating This Site",
    content: `Welcome to my digital space! I'm excited to share the story behind building this site and the journey that brought me here.

## Why Another Developer Portfolio?

In a world full of developer portfolios, why create another one? For me, this site represents more than just a place to showcase my work—it's a reflection of my approach to development and my passion for creating thoughtful, purposeful digital experiences.

## The Tech Stack

I built this site using some of my favorite modern tools:

- **Next.js 15** - For the rock-solid foundation and excellent developer experience
- **TypeScript** - Because type safety is non-negotiable
- **Tailwind CSS** - For rapid, maintainable styling
- **Vercel** - For seamless deployment and excellent performance

## AI-Assisted Development

One of the most interesting aspects of building this site was leveraging AI tools throughout the development process. I used:

- **Cursor** for intelligent code completion and refactoring
- **GitHub Copilot** for rapid prototyping and boilerplate generation
- **AI-powered design tools** for inspiration and rapid iteration

This isn't about replacing human creativity—it's about augmenting it. The AI tools helped me focus on the creative and strategic decisions while handling the repetitive tasks.

## The Design Philosophy

The pixel aesthetic isn't just a design choice—it's a nod to the roots of digital creativity. There's something beautiful about the constraint and precision required in pixel art that resonates with clean, purposeful code.

## What's Next?

This site is just the beginning. I'm planning to:

- Share more about my development process and learnings
- Document interesting technical challenges and solutions
- Explore the intersection of AI and creativity in web development
- Build a community around thoughtful, AI-augmented development

## Let's Connect

I'd love to hear from you! Whether you're curious about the technical details, want to discuss AI in development, or just want to chat about web development in general, feel free to reach out.

Thanks for visiting, and welcome to my digital home!

---

*This site is open source and continuously evolving. Suggestions are always welcome.*`,
    date: "2025-06-14",
    category: "Development",
    tags: ["Web Development", "Next.js", "AI Tools", "Portfolio"],
    readTime: "8 min read"
  },
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
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
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

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

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
