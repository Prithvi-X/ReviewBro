import React from 'react'
import { Hero } from '@/components/landing/Hero'
import { PlatformSection } from '@/components/landing/PlatformSection'
import { WhyReviewBro } from '@/components/landing/WhyReviewBro'
import { Footer } from '@/components/landing/Footer'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071615] text-white flex flex-col selection:bg-brand-slate selection:text-white">
      {/* Semantic Main Content Container */}
      <main id="main-content" className="flex-1 flex flex-col">
        {/* SECTION 1: HERO (Dark Deep Green) */}
        <Hero />

        {/* SECTION 2: THE PLATFORM (Soft Warm Neutral) */}
        <PlatformSection />

        {/* SECTION 3: WHY REVIEWBRO + VISION + FINAL CTA (Cool Slate Neutral) */}
        <WhyReviewBro />
      </main>

      {/* FOOTER (Minimal) */}
      <Footer />
    </div>
  )
}
