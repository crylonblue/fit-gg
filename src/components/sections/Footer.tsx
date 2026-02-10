'use client'

const links = {
  Product: ['How It Works', 'Classes', 'Features', 'Roadmap'],
  Community: ['Discord', 'Twitter', 'Reddit'],
  Legal: ['Privacy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold gradient-text mb-3">fit.gg</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              The RPG that makes fitness fun. Your body is the controller.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-text-primary mb-4 text-sm">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-text-muted text-sm hover:text-text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">© 2026 fit.gg. All rights reserved.</p>
          <p className="text-text-muted text-sm">Made for heroes who never quit 💪</p>
        </div>
      </div>
    </footer>
  )
}
