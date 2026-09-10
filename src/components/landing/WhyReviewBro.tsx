import React from 'react'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ComparisonCard } from '@/components/ui/ComparisonCard'
import { PhoneMockup } from '@/components/product/PhoneMockup'
import { Vision } from './Vision'
import { FoundingTeam } from './FoundingTeam'
import { ComingSoon } from './ComingSoon'
import { COMPARISON_POINTS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export interface WhyReviewBroProps {
  className?: string
}

export const WhyReviewBro: React.FC<WhyReviewBroProps> = ({ className }) => {
  return (
    <section className={`bg-[#f3f6f8] text-neutral-900 py-20 lg:py-28 ${className || ''}`}>
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow theme="light" className="mb-2">
              WHY REVIEWBRO
            </Eyebrow>
            <h2 className="text-heading-1 font-extrabold text-neutral-900 tracking-tight">
              More powerful underneath.
              <br />
              <span className="text-[#64788e]">Simpler on the surface.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl">
              Most tools help businesses manage reviews. ReviewBro is being built to help them manage, understand, and improve their reputation.
            </p>
          </div>

          {/* Tilted annotation matching mockup */}
          <div className="relative inline-flex items-center gap-1.5 self-start md:self-auto text-neutral-700 bg-white/90 border border-neutral-200/90 px-4 py-2 rounded-2xl shadow-xs -rotate-2 transform hover:rotate-0 transition-transform">
            <span className="text-sm font-semibold tracking-tight italic font-sans text-neutral-800">
              A stronger tomorrow for local businesses.
            </span>
          </div>
        </div>

        {/* Comparison Matrix & Mobile Phone Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Traditional vs ReviewBro Comparison with directional arrow */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative items-center">
              <ComparisonCard
                type="traditional"
                title="Traditional tools"
                items={COMPARISON_POINTS.traditional}
                className="bg-white"
              />

              {/* Connecting arrow badge between traditional and ReviewBro on sm+ */}
              <div
                className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-neutral-200 shadow-sm items-center justify-center text-neutral-400 pointer-events-none"
                aria-hidden="true"
              >
                <ArrowRight className="w-4 h-4 text-[#64788e]" />
              </div>

              <ComparisonCard
                type="reviewBro"
                title="ReviewBro"
                items={COMPARISON_POINTS.reviewBro}
                className="bg-white border-brand-slate/30 shadow-sm"
              />
            </div>
          </div>

          {/* Right: Layered Mobile Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>
        </div>

        {/* Vision Progression */}
        <Vision />

        {/* The People Behind ReviewBro - Founding Team */}
        <FoundingTeam />

        {/* Final CTA integrated within Section 3 */}
        <ComingSoon />
      </Container>
    </section>
  )
}
