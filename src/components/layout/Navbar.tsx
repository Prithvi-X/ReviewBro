import React, { useState, useEffect } from 'react'
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

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ]

  const isDark = theme === 'dark'

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'w-full py-5 px-4 sm:px-6 lg:px-8 transition-colors z-40 relative',
        isDark ? 'bg-transparent text-white' : 'bg-white/80 backdrop-blur border-b border-neutral-200 text-neutral-900',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, '#home')}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate-light rounded-lg transition-transform hover:opacity-95"
          aria-label="ReviewBro Home"
        >
          <Logo theme={isDark ? 'dark' : 'light'} size="md" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                'relative py-1 transition-colors duration-150 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate-light',
                isDark
                  ? 'text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-brand-slate after:transition-all'
                  : 'text-neutral-600 hover:text-neutral-950 after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-neutral-900 after:transition-all'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#coming-soon"
            onClick={(e) => handleScrollTo(e, '#coming-soon')}
            className="inline-block"
          >
            <Button
              variant={isDark ? 'outline' : 'dark-pill'}
              size="sm"
              className="text-xs px-4 py-1.5 h-9 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Coming Soon
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate-light',
            isDark ? 'text-white hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
          )}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
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
              ? 'bg-[#0b1715] border-white/10 text-white shadow-2xl'
              : 'bg-white border-neutral-200 text-neutral-900 shadow-xl'
          )}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="block py-2 text-sm font-medium hover:text-brand-slate transition-colors rounded px-2 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#coming-soon"
              onClick={(e) => handleScrollTo(e, '#coming-soon')}
              className="block w-full"
            >
              <Button
                variant={isDark ? 'primary-pill' : 'dark-pill'}
                size="sm"
                className="w-full justify-center text-xs"
              >
                Coming Soon
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
