import type { Metadata } from 'next'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with me for collaborations, questions, or just to say hello!',
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-pixel mb-8 text-center">Get In Touch</h1>
      
      <div className="mb-8 text-center">
        <p className="font-mono text-lg">
          Whether you have a project idea, want to collaborate, or just want to chat about tech - I'd love to hear from you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-pixel mb-6">Let's Connect</h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-mono text-sm text-gray-400">Email</p>
                <p className="font-mono">hello@pixelwisdom.dev</p>
              </div>
            </div>
            
            {/* TODO: Replace with real social links */}
            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-mono text-sm text-gray-400">GitHub</p>
                <a href="#" className="font-mono hover:text-green-300 transition-colors">
                  @pixelwisdom
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-mono text-sm text-gray-400">LinkedIn</p>
                <a href="#" className="font-mono hover:text-green-300 transition-colors">
                  /in/pixelwisdom
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Twitter className="w-5 h-5 text-green-400" />
              <div>
                <p className="font-mono text-sm text-gray-400">Twitter</p>
                <a href="#" className="font-mono hover:text-green-300 transition-colors">
                  @pixelwisdom
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <h3 className="font-pixel text-sm mb-3">What I'm Looking For</h3>
            <ul className="font-mono text-sm space-y-2 text-gray-300">
              <li>• Collaboration opportunities</li>
              <li>• Interesting project discussions</li>
              <li>• AI development partnerships</li>
              <li>• Tech meetups and events</li>
              <li>• Creative coding challenges</li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-pixel mb-6">Send a Message</h2>
          
          {/* TODO: Implement actual form handling */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-mono text-sm mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-700 text-green-400 font-mono rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block font-mono text-sm mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-700 text-green-400 font-mono rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                placeholder="your.email@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block font-mono text-sm mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 py-2 bg-gray-700 text-green-400 font-mono rounded border border-gray-600 focus:border-green-400 focus:outline-none"
                placeholder="What's this about?"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block font-mono text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full px-3 py-2 bg-gray-700 text-green-400 font-mono rounded border border-gray-600 focus:border-green-400 focus:outline-none resize-y"
                placeholder="Tell me about your project, idea, or just say hello!"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-4 py-2 bg-green-600 text-black font-pixel rounded hover:bg-green-500 transition-colors"
            >
              Send Message →
            </button>
          </form>
          
          <p className="font-mono text-xs text-gray-400 mt-4">
            * Form submission will be implemented in a future update
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-pixel mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-pixel text-sm mb-2">How quickly do you respond?</h3>
            <p className="font-mono text-sm text-gray-300">
              I typically respond within 24-48 hours. For urgent matters, please mention it in your subject line.
            </p>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-2">What types of projects are you interested in?</h3>
            <p className="font-mono text-sm text-gray-300">
              I'm particularly interested in AI-driven applications, modern web development, and creative coding projects. Open to both collaborative and consulting opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="font-pixel text-sm mb-2">Do you offer consulting services?</h3>
            <p className="font-mono text-sm text-gray-300">
              Yes! I provide consulting for Next.js development, AI integration, and modern web architecture. Let's discuss your needs.
            </p>
          </div>
        </div>
      </div>

      {/* TODO: Add actual contact form backend integration */}
      {/* TODO: Add contact form validation */}
      {/* TODO: Add success/error states for form submission */}
    </div>
  )
}
