import React from 'react'
import { Container } from '@/components/layout/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { CapabilityFlow } from './CapabilityFlow'

export interface PlatformSectionProps {
  className?: string
}

export const PlatformSection: React.FC<PlatformSectionProps> = ({ className }) => {
  return (
    <section
      id="product"
      className={`bg-[#f9f6f1] text-neutral-900 py-20 lg:py-28 border-t border-b border-neutral-200/80 relative ${className || ''}`}
    >
      <Container size="xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Eyebrow theme="light" className="mb-2">
              THE PLATFORM
            </Eyebrow>
            <h2 className="text-heading-1 font-extrabold text-neutral-900 tracking-tight">
              Everything your reputation needs.
              <br />
              <span className="text-[#64788e]">In one place.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 max-w-xl">
              ReviewBro brings the essential tools for managing and improving your business reputation together in one simple platform.
            </p>
          </div>

          {/* Tilted script annotation matching mockup */}
          <div className="relative inline-flex items-center gap-1.5 self-start md:self-auto text-neutral-700 bg-white/90 border border-neutral-200/90 px-4 py-2 rounded-2xl shadow-xs -rotate-2 transform hover:rotate-0 transition-transform">
            <span className="text-sm font-semibold tracking-tight italic font-sans text-neutral-800">
              Turn feedback into growth.
            </span>
            <span className="text-brand-slate text-base font-bold">↗</span>
          </div>
        </div>

        {/* 5-Step Connected Flow Cards */}
        <CapabilityFlow />
      </Container>
    </section>
  )
}
