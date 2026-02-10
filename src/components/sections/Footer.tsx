'use client'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-lg font-bold gradient-text">fit.gg</div>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="#how-it-works" className="hover:text-text-secondary transition-colors">How It Works</a>
          <a href="#classes" className="hover:text-text-secondary transition-colors">Classes</a>
          <a href="#features" className="hover:text-text-secondary transition-colors">Features</a>
        </div>
        <div className="text-sm text-text-muted">
          © {new Date().getFullYear()} fit.gg
        </div>
      </div>
    </footer>
  )
}
