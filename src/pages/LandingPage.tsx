import React from 'react'
import { Hero } from '@/components/landing/Hero'
import { PlatformSection } from '@/components/landing/PlatformSection'
import { WhyReviewBro } from '@/components/landing/WhyReviewBro'
import { Footer } from '@/components/landing/Footer'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071615] text-white flex flex-col selection:bg-brand-slate selection:text-white">
      {/* SECTION 1: HERO (Dark Deep Green) */}
      <Hero />

      {/* SECTION 2: THE PLATFORM (Soft Neutral) */}
      <PlatformSection />

      {/* SECTION 3: WHY REVIEWBRO + VISION + FINAL CTA (Soft Slate Cool Neutral) */}
      <WhyReviewBro />

      {/* FOOTER (Minimal) */}
      <Footer />

      {/* Development Link to Internal Design System */}
      <div className="bg-[#050f0e] border-t border-white/5 py-2 px-4 text-center text-[11px] text-neutral-500">
        <span>Internal Developer Tools: </span>
        <a
          href="/dev/design-system"
          className="text-brand-slate-light hover:underline ml-1 font-mono"
        >
          /dev/design-system
        </a>
      </div>
    </div>
  )
}
