import React from 'react'
import { cn } from '@/lib/utils'

export interface SentimentBarProps {
  positive?: number
  neutral?: number
  negative?: number
  className?: string
}

export const SentimentBar: React.FC<SentimentBarProps> = ({
  positive = 68,
  neutral = 24,
  negative = 8,
  className,
}) => {
  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      <div className="flex items-center justify-between text-xs">
        <span className="font-semibold text-neutral-800">Overall Sentiment</span>
        <span className="text-emerald-700 font-bold">{positive}% Positive</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden flex">
        <div
          style={{ width: `${positive}%` }}
          className="bg-emerald-500 h-full transition-all duration-500"
          title={`Positive: ${positive}%`}
        />
        <div
          style={{ width: `${neutral}%` }}
          className="bg-slate-300 h-full transition-all duration-500"
          title={`Neutral: ${neutral}%`}
        />
        <div
          style={{ width: `${negative}%` }}
          className="bg-rose-400 h-full transition-all duration-500"
          title={`Negative: ${negative}%`}
        />
      </div>

      {/* Breakdown Legend */}
      <div className="flex items-center gap-4 text-[11px] text-neutral-500">
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500" /> Positive ({positive}%)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-slate-300" /> Neutral ({neutral}%)
        </span>
        <span className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-rose-400" /> Negative ({negative}%)
        </span>
      </div>
    </div>
  )
}
