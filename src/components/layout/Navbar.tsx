import React, { useState, useEffect } from 'react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavbarProps {
  theme?: 'dark' | 'light' | 'adaptive'
  className?: string
}

export const Navbar: React.FC<NavbarProps> = ({
  theme = 'adaptive',
  className,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOverLightSection, setIsOverLightSection] = useState(false)

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

  // Track scroll position for capsule morphing and section-aware adaptive theme
  useEffect(() => {
    const checkScrollState = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)

      // Detect if floating navbar intersects light section (#product)
      const productSection = document.getElementById('product')
      if (productSection) {
        const rect = productSection.getBoundingClientRect()
        // Header floats ~14px from top with ~54px height, so ~68px trigger
        setIsOverLightSection(rect.top <= 68)
      }
    }

    checkScrollState()
    window.addEventListener('scroll', checkScrollState, { passive: true })
    return () => window.removeEventListener('scroll', checkScrollState)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Product', href: '#product' },
    { label: 'Contact', href: '#contact' },
  ]

  // Determine active theme
  const effectiveTheme: 'dark' | 'light' =
    theme === 'adaptive'
      ? isOverLightSection
        ? 'light'
        : 'dark'
      : theme

  const isDark = effectiveTheme === 'dark'

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const lenis = (window as any).__lenis
    const target = document.querySelector(href)
    if (target) {
      if (lenis) {
        lenis.scrollTo(target, { offset: -24, duration: 1.2 })
      } else {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300 ease-out',
          className
        )}
      >
        <div
          className={cn(
            'pointer-events-auto transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between',
            isScrolled
              ? 'mt-3 sm:mt-4 mx-auto w-[92%] sm:w-[88%] lg:w-[80%] max-w-4xl py-2.5 px-5 sm:px-6 rounded-full'
              : 'mt-0 mx-auto w-full max-w-7xl py-5 px-4 sm:px-6 lg:px-8 rounded-none',
            // Visual capsule styles & adaptive theme
            !isScrolled
              ? 'bg-transparent border border-transparent shadow-none text-white'
              : isDark
                ? 'bg-[#071615]/90 backdrop-blur-xl border border-white/12 shadow-2xl shadow-black/50 text-white'
                : 'bg-white/92 backdrop-blur-xl border border-neutral-200/90 shadow-xl shadow-neutral-900/10 text-neutral-900'
          )}
        >
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
                variant={isDark ? (isScrolled ? 'primary-pill' : 'outline') : 'dark-pill'}
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
              'md:hidden pointer-events-auto mt-2 p-4 rounded-2xl border animate-slide-up space-y-3',
              isScrolled
                ? 'w-[92%] sm:w-[88%] mx-auto'
                : 'w-[calc(100%-2rem)] max-w-7xl mx-auto',
              isDark
                ? 'bg-[#071615]/95 backdrop-blur-2xl border-white/12 text-white shadow-2xl'
                : 'bg-white/95 backdrop-blur-2xl border-neutral-200 text-neutral-900 shadow-xl'
            )}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={cn(
                  'block py-2 text-sm font-medium transition-colors rounded px-2',
                  isDark
                    ? 'hover:text-brand-slate-light hover:bg-white/5'
                    : 'hover:text-neutral-950 hover:bg-neutral-100'
                )}
              >
                {link.label}
              </a>
            ))}
            <div className={cn('pt-2 border-t', isDark ? 'border-white/10' : 'border-neutral-200')}>
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

      {/* Backdrop for mobile drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
