import React from 'react'
import { useLenisScroll } from '@/hooks/useLenisScroll'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { Navbar } from '@/components/layout/Navbar'
import { Hero } from '@/components/landing/Hero'
import { PlatformSection } from '@/components/landing/PlatformSection'
import { WhyReviewBro } from '@/components/landing/WhyReviewBro'
import { Footer } from '@/components/landing/Footer'

export const LandingPage: React.FC = () => {
  // Initialize buttery-smooth Lenis kinetic momentum scroll
  useLenisScroll()

  return (
    <div className="min-h-screen bg-[#071615] text-white flex flex-col selection:bg-brand-slate selection:text-white">
      {/* Hairline Ambient Scroll Progress Flow */}
      <ScrollProgress />

      {/* Fixed Adaptive Transforming Capsule Navbar */}
      <Navbar theme="adaptive" />

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
