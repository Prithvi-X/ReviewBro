import React from 'react'
import { Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export interface RecommendationCardProps {
  title: string
  description: string
  impact: string
  category?: 'growth' | 'efficiency' | 'retention'
  actionLabel?: string
  onAction?: () => void
  onDismiss?: () => void
  className?: string
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  description,
  impact,
  category = 'growth',
  actionLabel = 'Apply Recommendation',
  onAction,
  onDismiss,
  className,
}) => {
  const categoryBadge = {
    growth: { label: 'Growth Opportunity', variant: 'success' as const },
    efficiency: { label: 'Automation Insight', variant: 'slate' as const },
    retention: { label: 'Customer Care', variant: 'warning' as const },
  }[category]

  return (
    <div
      className={cn(
        'bg-white border border-neutral-200/90 rounded-card p-5 shadow-card-subtle flex flex-col justify-between gap-4 transition-all hover:shadow-card-hover',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center shrink-0">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-neutral-900 leading-snug">
              {title}
            </h4>
            <span className="text-[11px] text-neutral-500 font-medium">
              ReviewBro Smart Recommendation
            </span>
          </div>
        </div>

        <Badge variant={categoryBadge.variant} size="sm">
          {categoryBadge.label}
        </Badge>
      </div>

      {/* Body */}
      <p className="text-xs text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* Impact Metric & Actions */}
      <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold bg-emerald-50/80 px-2.5 py-1 rounded-full w-fit">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>{impact}</span>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          {onDismiss && (
            <button
              onClick={onDismiss}
              className="text-xs text-neutral-400 hover:text-neutral-700 px-2 py-1 transition-colors"
            >
              Dismiss
            </button>
          )}
          <Button
            variant="dark-pill"
            size="sm"
            onClick={onAction}
            className="text-xs h-8 px-3.5 flex items-center gap-1"
          >
            <span>{actionLabel}</span>
            <ArrowRight className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </div>
  )
}
