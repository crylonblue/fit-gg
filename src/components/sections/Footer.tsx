'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/fitgg',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    )
  },
  {
    name: 'Discord',
    href: 'https://discord.gg/fitgg',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    )
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@fitgg',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/fitgg',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.243 14.814 3.66 13.617 3.66 12.267c0-1.35.583-2.547 1.461-3.424.878-.876 2.029-1.366 3.328-1.366 1.297 0 2.448.49 3.328 1.366.877.877 1.461 2.074 1.461 3.424 0 1.35-.584 2.547-1.461 3.424-.88.807-2.031 1.297-3.328 1.297zm7.83-9.404c-.315 0-.572-.256-.572-.572 0-.315.257-.572.572-.572.316 0 .572.257.572.572 0 .316-.256.572-.572.572z" />
      </svg>
    )
  }
]

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'How it Works', href: '#how-it-works' },
      { name: 'Features', href: '#features' },
      { name: 'Classes', href: '#class-selection' },
      { name: 'Roadmap', href: '#' }
    ]
  },
  {
    title: 'Community',
    links: [
      { name: 'Discord', href: 'https://discord.gg/fitgg' },
      { name: 'Twitter', href: 'https://twitter.com/fitgg' },
      { name: 'Reddit', href: 'https://reddit.com/r/fitgg' },
      { name: 'Blog', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Bug Reports', href: '#' },
      { name: 'Feature Requests', href: '#' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'DMCA', href: '#' }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="relative bg-surface/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-3xl font-bold gradient-text mb-3">
                fit.gg
              </h3>
              <p className="text-text-secondary text-lg font-medium">
                Your body. Your game.
              </p>
            </div>
            
            <p className="text-text-muted mb-8 leading-relaxed">
              The RPG that makes fitness fun. Transform your workouts into epic adventures, 
              level up your avatar, and join a community of heroes on their fitness journey.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface border border-border rounded-lg text-text-secondary hover:text-primary hover:border-primary transition-colors group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-white text-lg">
                {section.title}
              </h4>
              
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-text-muted text-sm">
              © 2026 fit.gg. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-text-muted">
              <span>Made for heroes who never quit 💪</span>
              <span className="hidden md:block">•</span>
              <span>Built with ❤️ for the gaming community</span>
            </div>
          </div>
        </motion.div>

        {/* Easter egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button 
            className="text-xs text-text-muted/30 hover:text-primary/50 transition-colors font-mono"
            onClick={() => {
              console.log(`
                🎮 fit.gg Developer Console 🎮
                
                Hero Stats:
                ├── Curiosity: MAX LEVEL
                ├── Code Review Skills: Legendary
                └── Secret Finding: +100 XP
                
                Achievement Unlocked: "Code Explorer" 
                You found the hidden console message!
                
                Want to join our dev team? 
                Email: heroes@fit.gg
              `)
            }}
          >
            Konami Code: ↑↑↓↓←→←→BA
          </button>
        </motion.div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </footer>
  )
}