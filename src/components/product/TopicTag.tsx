import React from 'react'
import { cn } from '@/lib/utils'

export interface TopicTagProps {
  label: string
  count?: number
  sentiment?: 'positive' | 'neutral' | 'negative'
  className?: string
}

export const TopicTag: React.FC<TopicTagProps> = ({
  label,
  count,
  sentiment = 'positive',
  className,
}) => {
  const sentimentStyles = {
    positive: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    neutral: 'bg-slate-50 text-slate-700 border-slate-200/80',
    negative: 'bg-rose-50 text-rose-800 border-rose-200/80',
  }[sentiment]

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border select-none',
        sentimentStyles,
        className
      )}
    >
      <span>{label}</span>
      {count !== undefined && (
        <span className="text-[10px] opacity-70 font-semibold">({count})</span>
      )}
    </span>
  )
}
