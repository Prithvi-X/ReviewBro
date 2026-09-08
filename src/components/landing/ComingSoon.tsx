import React from 'react'
import { Button } from '@/components/ui/Button'
import { BRAND } from '@/lib/constants'

export interface ComingSoonProps {
  className?: string
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ className }) => {
  const mailtoUrl = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(
    BRAND.contact.earlyAccessSubject
  )}&body=${encodeURIComponent(BRAND.contact.earlyAccessBody)}`

  return (
    <div
      id="coming-soon"
      className={`mt-16 sm:mt-20 pt-12 text-center max-w-xl mx-auto flex flex-col items-center scroll-mt-24 ${className || ''}`}
    >
      {/* Primary Dark Pill Button with early-access intent */}
      <a
        href={mailtoUrl}
        className="inline-block group focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 rounded-full"
        aria-label="Request Early Access to ReviewBro via email"
      >
        <Button
          variant="dark-pill"
          size="lg"
          withArrow
          className="px-8 py-3.5 shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all text-base"
        >
          Coming Soon
        </Button>
      </a>

      {/* Supporting Copy */}
      <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md">
        We're building ReviewBro to make reputation management simpler, smarter, and more useful for modern businesses.
      </p>

      {/* Domain badge & invitation text */}
      <div className="mt-3.5 flex items-center gap-2">
        <span className="text-[11px] font-mono font-medium text-brand-slate bg-brand-slate/10 px-2.5 py-0.5 rounded-full">
          {BRAND.domain}
        </span>
        <span className="text-[11px] text-neutral-500 font-medium">
          Be among the first to experience ReviewBro.
        </span>
      </div>
    </div>
  )
}
