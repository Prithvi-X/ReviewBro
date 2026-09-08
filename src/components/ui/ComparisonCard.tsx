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
        'rounded-2xl p-6 transition-all',
        isReviewBro
          ? 'bg-white border-2 border-brand-slate/30 shadow-md'
          : 'bg-neutral-50/90 border border-neutral-200/80 shadow-xs',
        className
      )}
    >
      {/* Title */}
      <h4
        className={cn(
          'text-base font-bold mb-4 font-display',
          isReviewBro ? 'text-neutral-900' : 'text-neutral-600'
        )}
      >
        {title}
      </h4>

      {/* Items list */}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3 text-xs sm:text-sm">
            {isReviewBro ? (
              <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center shrink-0">
                <X className="w-3.5 h-3.5 stroke-[2]" />
              </div>
            )}
            <span
              className={cn(
                isReviewBro ? 'text-neutral-800 font-medium' : 'text-neutral-500 line-through/none'
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
