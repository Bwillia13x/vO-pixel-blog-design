/**
 * Site Configuration
 * Centralized configuration for the Pixel Blog
 */

export interface SiteConfig {
  name: string
  title: string
  description: string
  url: string
  ogImage: string
  creator: string
  keywords: string[]
  social: {
    github?: string
    linkedin?: string
    twitter?: string
    email: string
  }
  navigation: {
    main: Array<{
      title: string
      href: string
      icon?: string
    }>
  }
}

export const siteConfig: SiteConfig = {
  name: "Pixel Wisdom",
  title: "Pixel Wisdom - Tech Blog & Portfolio",
  description: "Personal blog and portfolio showcasing tech projects, AI development, and digital insights with a retro pixel aesthetic.",
  url: "https://pixelwisdom.dev", // Update with actual domain
  ogImage: "/og-image.png",
  creator: "Pixel Wisdom",
  keywords: ["tech", "AI", "development", "portfolio", "blog", "pixel art", "Next.js", "TypeScript"],
  social: {
    // Configure these when ready to go live
    // github: "https://github.com/username",
    // linkedin: "https://linkedin.com/in/username",
    // twitter: "https://twitter.com/username",
    email: "hello@pixelwisdom.dev"
  },
  navigation: {
    main: [
      {
        title: "Home",
        href: "/",
        icon: "Home"
      },
      {
        title: "About",
        href: "/about",
        icon: "User"
      },
      {
        title: "Projects",
        href: "/projects",
        icon: "Briefcase"
      },
      {
        title: "Blog",
        href: "/blog",
        icon: "BookOpen"
      },
      {
        title: "Contact",
        href: "/contact",
        icon: "Mail"
      }
    ]
  }
}

export default siteConfig
