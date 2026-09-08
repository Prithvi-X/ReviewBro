import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface MetricCardProps {
  label: string
  value: string
  unit?: string
  change?: string
  changePositive?: boolean
  className?: string
}

export const MetricCard: React.FC<MetricCardProps> = ({
  label,
  value,
  unit,
  change,
  changePositive = true,
  className,
}) => {
  return (
    <div
      className={cn(
        'bg-white border border-neutral-200/90 rounded-card p-3 sm:p-4 shadow-card-subtle flex flex-col justify-between transition-all hover:shadow-card-hover min-w-0',
        className
      )}
    >
      <span className="text-[11px] font-medium text-neutral-500 tracking-tight truncate">
        {label}
      </span>

      <div className="mt-1.5 flex items-baseline justify-between gap-1 flex-wrap">
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl sm:text-2xl font-display font-extrabold text-neutral-900 tracking-tight">
            {value}
          </span>
          {unit && (
            <span className="text-amber-400 font-bold text-lg leading-none">
              {unit}
            </span>
          )}
        </div>

        {change && (
          <span
            className={cn(
              'inline-flex items-center text-[11px] font-bold px-1.5 py-0.5 rounded-md shrink-0',
              changePositive
                ? 'text-emerald-700 bg-emerald-50 border border-emerald-200/60'
                : 'text-rose-700 bg-rose-50 border border-rose-200/60'
            )}
          >
            {changePositive ? (
              <ArrowUpRight className="w-3 h-3 mr-0.5 text-emerald-600" />
            ) : (
              <ArrowDownRight className="w-3 h-3 mr-0.5 text-rose-600" />
            )}
            {change}
          </span>
        )}
      </div>
    </div>
  )
}
