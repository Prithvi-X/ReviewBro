import React from 'react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Container } from '@/components/layout/Container'
import { DashboardShell } from '@/components/product/DashboardShell'

export interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {
  const handleScrollToComingSoon = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#coming-soon')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className={`relative bg-hero-deep-green overflow-hidden pb-16 lg:pb-28 ${className || ''}`}
    >
      {/* Subtle radial ambient sheen */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_-15%,rgba(15,36,30,0.9)_0%,transparent_75%)]" />

      <Container size="xl" className="relative z-10 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Eyebrow theme="dark" className="mb-4">
              REPUTATION MANAGEMENT, REIMAGINED
            </Eyebrow>

            <h1 className="text-display-hero font-extrabold text-white tracking-tight leading-[1.08]">
              Your Reviews.
              <br />
              Your Reputation.
              <br />
              <span className="text-[#64788e]">One Bro.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#c1ccc7] max-w-lg leading-relaxed font-normal">
              Manage reviews, collect more feedback, reply with AI, understand what customers are saying, and grow your business from one simple platform.
            </p>

            {/* Primary CTA & Status */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="#coming-soon"
                onClick={handleScrollToComingSoon}
                className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-full"
              >
                <Button
                  variant="primary-pill"
                  size="lg"
                  withArrow
                  className="px-7 py-3.5 text-base font-semibold shadow-lg hover:shadow-brand-slate/20 hover:shadow-xl active:scale-[0.98] transition-all"
                >
                  Coming Soon
                </Button>
              </a>
              <span className="text-xs text-[#8da399] font-medium sm:ml-2">
                Currently in development.
              </span>
            </div>

            {/* 3-Part Metric Proof Strip */}
            <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 w-full flex items-center justify-between gap-4 sm:gap-6">
              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white transition-transform duration-200 group-hover:scale-105">
                  4.8 ★
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                  HIGHER RATINGS
                </div>
              </div>

              <div className="w-px h-9 bg-white/15" aria-hidden="true" />

              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white transition-transform duration-200 group-hover:scale-105">
                  3x
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                  MORE REVIEWS
                </div>
              </div>

              <div className="w-px h-9 bg-white/15" aria-hidden="true" />

              <div className="group cursor-default">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-white transition-transform duration-200 group-hover:scale-105">
                  Less Time
                </div>
                <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                  MORE GROWTH
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Dashboard Visual in Tablet Bezel Frame */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-2xl lg:max-w-none transform lg:translate-x-2 transition-all duration-500 hover:translate-y-[-2px]">
              <div className="relative rounded-2xl p-2 sm:p-2.5 bg-[#0b1715]/90 border border-[#1f3730] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] ring-1 ring-white/10 transition-shadow duration-300 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95)]">
                {/* Subtle top glare reflection */}
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
                <DashboardShell interactive={true} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
