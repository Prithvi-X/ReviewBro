import React from 'react'
import { Button } from '@/components/ui/Button'
import { BRAND } from '@/lib/constants'

export interface ComingSoonProps {
  className?: string
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ className }) => {
  return (
    <div className={`mt-16 sm:mt-20 pt-12 text-center max-w-xl mx-auto flex flex-col items-center ${className || ''}`}>
      {/* Primary Dark Pill Button */}
      <Button
        variant="dark-pill"
        size="lg"
        withArrow
        className="px-8 py-3.5 shadow-md hover:shadow-lg transition-all text-base"
      >
        Coming Soon
      </Button>

      {/* Supporting Copy */}
      <p className="mt-4 text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-md">
        We're building ReviewBro to make reputation management simpler, smarter, and more useful for modern businesses.
      </p>

      {/* Optional tiny text & domain badge */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11px] font-mono font-medium text-brand-slate bg-brand-slate/10 px-2.5 py-0.5 rounded-full">
          {BRAND.domain}
        </span>
        <span className="text-[11px] text-neutral-400">
          Be among the first to experience ReviewBro.
        </span>
      </div>
    </div>
  )
}
