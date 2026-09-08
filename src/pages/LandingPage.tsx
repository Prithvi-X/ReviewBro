import React from 'react'
import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Container } from '@/components/layout/Container'
import { DashboardShell } from '@/components/product/DashboardShell'
import { PlatformFlowCard } from '@/components/ui/PlatformFlowCard'
import { ComparisonCard } from '@/components/ui/ComparisonCard'
import { PhoneMockup } from '@/components/product/PhoneMockup'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PLATFORM_STEPS, COMPARISON_POINTS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#071615] text-white flex flex-col selection:bg-brand-slate selection:text-white">
      {/* =====================================================================
          SECTION 1: HERO (DARK DEEP GREEN BACKGROUND)
          ===================================================================== */}
      <section className="relative bg-hero-deep-green overflow-hidden pb-16 lg:pb-28">
        {/* Subtle radial ambient sheen */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_-15%,rgba(15,36,30,0.9)_0%,transparent_75%)]" />

        {/* Header Navigation */}
        <Navbar theme="dark" />

        <Container size="xl" className="relative z-10 pt-10 sm:pt-14 lg:pt-16">
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
                <span className="text-white">One </span>
                <span className="text-[#64788e]">Bro.</span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-[#c1ccc7] max-w-lg leading-relaxed font-normal">
                Manage reviews, collect more feedback, reply with AI, understand
                what customers are saying, and grow your business — all in one simple
                platform.
              </p>

              {/* Primary CTA & Status */}
              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button variant="primary-pill" size="lg" withArrow className="px-7 py-3 text-base shadow-lg">
                  Coming Soon
                </Button>
                <span className="text-xs text-[#8da399] font-medium sm:ml-2">
                  ReviewBro is currently in development.
                </span>
              </div>

              {/* 3-Part Metric Proof Strip */}
              <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 w-full flex items-center justify-between gap-4 sm:gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    4.8 ★
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                    HIGHER RATINGS
                  </div>
                </div>

                <div className="w-px h-9 bg-white/15" />

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    3x
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                    MORE REVIEWS
                  </div>
                </div>

                <div className="w-px h-9 bg-white/15" />

                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    Less Time
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                    MORE GROWTH
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Product Dashboard Visual */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end">
              <div className="w-full max-w-2xl lg:max-w-none transform lg:translate-x-4 transition-all duration-300">
                <DashboardShell interactive={true} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SECTION 2: THE PLATFORM (SOFT WARM NEUTRAL)
          ===================================================================== */}
      <section id="product" className="bg-[#f9f6f1] text-neutral-900 py-20 lg:py-28 border-t border-b border-neutral-200/80 relative">
        <Container size="xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow theme="light" className="mb-2">
                THE PLATFORM
              </Eyebrow>
              <h2 className="text-heading-1 font-bold text-neutral-900 tracking-tight">
                Everything your reputation needs.
                <br />
                <span className="text-[#64788e]">In one place.</span>
              </h2>
            </div>

            {/* Handwritten style annotation */}
            <div className="relative inline-flex items-center gap-2 self-start md:self-auto text-neutral-600 bg-white/80 border border-neutral-200/80 px-4 py-2 rounded-2xl shadow-xs">
              <span className="text-sm font-semibold tracking-tight italic">
                Turn feedback into growth.
              </span>
              <span className="text-brand-slate text-lg">↗</span>
            </div>
          </div>

          {/* 5-Step Connected Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {PLATFORM_STEPS.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col">
                <PlatformFlowCard
                  step={idx + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon as any}
                  className="h-full"
                />
                {/* Connecting subtle arrow for desktop */}
                {idx < PLATFORM_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center text-neutral-400 bg-white rounded-full border border-neutral-200 shadow-2xs">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =====================================================================
          SECTION 3: WHY REVIEWBRO + PROGRESSION
          ===================================================================== */}
      <section className="bg-[#f3f6f8] text-neutral-900 py-20 lg:py-28">
        <Container size="xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <Eyebrow theme="light" className="mb-2">
                WHY REVIEWBRO
              </Eyebrow>
              <h2 className="text-heading-1 font-bold text-neutral-900 tracking-tight">
                More powerful underneath.
                <br />
                <span className="text-[#64788e]">Simpler on the surface.</span>
              </h2>
            </div>

            {/* Sub-annotation */}
            <div className="inline-flex items-center gap-2 self-start md:self-auto text-neutral-600 bg-white/80 border border-neutral-200/80 px-4 py-2 rounded-2xl shadow-xs">
              <span className="text-sm font-semibold tracking-tight italic">
                A stronger tomorrow for local businesses.
              </span>
            </div>
          </div>

          {/* Comparison Matrix & Mobile Phone Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Traditional vs ReviewBro Comparison */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
                <ComparisonCard
                  type="traditional"
                  title="Traditional tools"
                  items={COMPARISON_POINTS.traditional}
                />
                <ComparisonCard
                  type="reviewBro"
                  title="ReviewBro"
                  items={COMPARISON_POINTS.reviewBro}
                />
              </div>
            </div>

            {/* Right: Mobile Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <PhoneMockup />
            </div>
          </div>

          {/* Progression: Reviews are only the beginning */}
          <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-dashboard bg-white border border-neutral-200/80 shadow-sm">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#64788e] block mb-1">
                FORWARD VISION
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900">
                Reviews are only the beginning.
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Transforming raw customer feedback into an autonomous business companion.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">STEP 01</span>
                <h4 className="text-sm font-bold text-neutral-900">Reputation</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Collect, monitor & reply</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">STEP 02</span>
                <h4 className="text-sm font-bold text-neutral-900">Customer Insights</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Topics, emotions & intent</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/70">
                <span className="text-xs font-mono font-bold text-neutral-400 block mb-1">STEP 03</span>
                <h4 className="text-sm font-bold text-neutral-900">Business Insights</h4>
                <p className="text-[11px] text-neutral-500 mt-0.5">Competitors & operations</p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 text-white border border-neutral-800 shadow-sm">
                <span className="text-xs font-mono font-bold text-brand-slate-light block mb-1">STEP 04</span>
                <h4 className="text-sm font-bold text-white">AI Business Companion</h4>
                <p className="text-[11px] text-neutral-400 mt-0.5">Autonomous growth advice</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          FOOTER & COMING SOON CTA
          ===================================================================== */}
      <Footer />

      {/* Development Link to Design System */}
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
