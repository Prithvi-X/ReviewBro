import React, { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavbarProps {
  theme?: 'dark' | 'light'
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  theme = 'dark',
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ]

  const isDark = theme === 'dark'

  return (
    <header
      className={cn(
        'w-full py-5 px-4 sm:px-6 lg:px-8 transition-colors z-40',
        isDark ? 'bg-transparent text-white' : 'bg-white/80 backdrop-blur border-b border-neutral-200 text-neutral-900',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="focus:outline-none">
          <Logo theme={isDark ? 'dark' : 'light'} size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                'transition-colors duration-150',
                isDark
                  ? 'text-white/80 hover:text-white'
                  : 'text-neutral-600 hover:text-neutral-950'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant={isDark ? 'outline' : 'dark-pill'}
            size="sm"
            className="text-xs px-4 py-1.5 h-9 rounded-full"
          >
            Coming Soon
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg',
            isDark ? 'text-white hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
          )}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={cn(
            'md:hidden mt-3 p-4 rounded-xl border animate-slide-up space-y-3',
            isDark
              ? 'bg-[#0b1715] border-white/10 text-white'
              : 'bg-white border-neutral-200 text-neutral-900 shadow-lg'
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium hover:text-brand-slate transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <Button
              variant={isDark ? 'primary-pill' : 'dark-pill'}
              size="sm"
              className="w-full justify-center"
            >
              Coming Soon
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
