'use client';

import Link from 'next/link';
import { useTheme } from '@/presentation/providers/ThemeProvider';

export function Navigation() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm bg-[var(--bg)]/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
        >
          azamat.dev
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6">
            {[
              { name: 'About', href: '/#about' },
              { name: 'Projects', href: '/#projects' },
              { name: 'Blog', href: '/blog' },
              { name: 'Contact', href: '/#contact' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium hover:text-[var(--accent)] transition-colors link-pop group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center hover:bg-[var(--accent)]/40 transition-all hover:scale-110 hover:rotate-12"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
