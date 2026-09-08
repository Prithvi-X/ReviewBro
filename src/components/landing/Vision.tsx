import React from 'react'
import { ArrowRight } from 'lucide-react'

export interface VisionProps {
  className?: string
}

export const Vision: React.FC<VisionProps> = ({ className }) => {
  const steps = [
    {
      num: 'STEP 01',
      title: 'Reputation',
      desc: 'Collect, monitor & reply in one place',
      dark: false,
    },
    {
      num: 'STEP 02',
      title: 'Customer Insights',
      desc: 'Topics, emotions & recurring intent',
      dark: false,
    },
    {
      num: 'STEP 03',
      title: 'Business Insights',
      desc: 'Competitive benchmarks & trends',
      dark: false,
    },
    {
      num: 'STEP 04',
      title: 'AI Business Companion',
      desc: 'Actionable recommendations for growth',
      dark: true,
    },
  ]

  return (
    <div className={`mt-16 sm:mt-20 p-8 sm:p-10 rounded-dashboard bg-white border border-neutral-200/80 shadow-sm ${className || ''}`}>
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-[#64788e] block mb-1">
          FORWARD VISION
        </span>
        <h3 className="text-xl sm:text-2xl font-bold font-display text-neutral-900">
          Reviews are only the beginning.
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Transforming customer feedback into an autonomous business companion over time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {steps.map((step, idx) => (
          <div key={step.num} className="relative flex flex-col">
            <div
              className={`p-5 rounded-xl border relative h-full flex flex-col justify-between ${
                step.dark
                  ? 'bg-[#0b1715] text-white border-[#1f3730] shadow-sm'
                  : 'bg-neutral-50/80 text-neutral-900 border-neutral-200/70'
              }`}
            >
              <div>
                <span
                  className={`text-[11px] font-mono font-bold block mb-1 ${
                    step.dark ? 'text-brand-slate-light' : 'text-neutral-400'
                  }`}
                >
                  {step.num}
                </span>
                <h4 className={`text-sm font-bold ${step.dark ? 'text-white' : 'text-neutral-900'}`}>
                  {step.title}
                </h4>
              </div>
              <p
                className={`text-xs mt-2 leading-relaxed ${
                  step.dark ? 'text-neutral-400' : 'text-neutral-500'
                }`}
              >
                {step.desc}
              </p>
            </div>

            {/* Connecting chevron indicator on large screens */}
            {idx < steps.length - 1 && (
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
    </div>
  )
}
