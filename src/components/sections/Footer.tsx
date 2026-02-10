'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-lg font-bold gradient-text">fit.gg</div>
          <div className="flex gap-8 text-sm text-text-muted">
            <a href="#how-it-works" className="hover:text-text-primary transition-colors">How It Works</a>
            <a href="#classes" className="hover:text-text-primary transition-colors">Classes</a>
            <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
          </div>
          <p className="text-text-muted text-sm">© 2026 fit.gg</p>
        </div>
      </div>
    </footer>
  )
}
