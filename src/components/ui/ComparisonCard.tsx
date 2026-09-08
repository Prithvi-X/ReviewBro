import React from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ComparisonCardProps {
  type: 'traditional' | 'reviewBro'
  title: string
  items: string[]
  className?: string
}

export const ComparisonCard: React.FC<ComparisonCardProps> = ({
  type,
  title,
  items,
  className,
}) => {
  const isReviewBro = type === 'reviewBro'

  return (
    <div
      className={cn(
        'group rounded-2xl p-6 transition-all duration-300',
        isReviewBro
          ? 'bg-white border-2 border-brand-slate/30 shadow-md hover:shadow-lg hover:border-brand-slate/50 hover:-translate-y-0.5'
          : 'bg-neutral-50/80 border border-neutral-200/80 shadow-xs hover:bg-neutral-100/70',
        className
      )}
    >
      {/* Title */}
      <div className="flex items-center justify-between mb-5">
        <h4
          className={cn(
            'text-base font-bold font-display tracking-tight',
            isReviewBro ? 'text-neutral-900' : 'text-neutral-600'
          )}
        >
          {title}
        </h4>
        {isReviewBro && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-slate bg-brand-slate/10 px-2 py-0.5 rounded-full">
            Modern SaaS
          </span>
        )}
      </div>

      {/* Items list */}
      <ul className="space-y-3.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-xs sm:text-sm">
            {isReviewBro ? (
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-emerald-200/70 transition-colors">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-neutral-200/80 text-neutral-400 flex items-center justify-center shrink-0">
                <X className="w-3.5 h-3.5 stroke-[2]" />
              </div>
            )}
            <span
              className={cn(
                'transition-colors',
                isReviewBro ? 'text-neutral-800 font-medium' : 'text-neutral-500'
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
