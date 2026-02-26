'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/app', label: 'Home', icon: '🏠' },
  { href: '/app/progress', label: 'Progress', icon: '📊' },
  { href: '/app/profile', label: 'Profile', icon: '👤' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto pb-20">
        {children}
      </main>

      {/* Fixed bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#111] border-t border-[#222] z-50">
        <div className="max-w-lg mx-auto flex justify-around items-center h-16">
          {navItems.map((item) => {
            const isActive =
              item.href === '/app'
                ? pathname === '/app'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-4 py-2 transition-colors ${
                  isActive ? 'text-[#22c55e]' : 'text-[#666] hover:text-[#999]'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
