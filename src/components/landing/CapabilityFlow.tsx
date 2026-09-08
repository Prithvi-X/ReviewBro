import React from 'react'
import { PlatformFlowCard } from '@/components/ui/PlatformFlowCard'
import { PLATFORM_STEPS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export interface CapabilityFlowProps {
  className?: string
}

export const CapabilityFlow: React.FC<CapabilityFlowProps> = ({ className }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative ${className || ''}`}>
      {PLATFORM_STEPS.map((step, idx) => (
        <div key={step.id} className="relative flex flex-col">
          <PlatformFlowCard
            step={idx + 1}
            title={step.title}
            description={step.description}
            icon={step.icon as any}
            className="h-full bg-white hover:border-brand-slate/30 transition-all duration-200"
          />
          {/* Subtle horizontal arrow indicator connecting steps on desktop */}
          {idx < PLATFORM_STEPS.length - 1 && (
            <div
              className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 items-center justify-center text-neutral-400 bg-white rounded-full border border-neutral-200 shadow-2xs pointer-events-none"
              aria-hidden="true"
            >
              <ArrowRight className="w-3 h-3 text-neutral-400" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
