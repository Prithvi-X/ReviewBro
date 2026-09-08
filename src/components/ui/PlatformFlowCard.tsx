import React from 'react'
import { MessageSquare, Users, Sparkles, BarChart3, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PlatformFlowCardProps {
  step: number
  title: string
  description: string
  icon: 'message-square' | 'users' | 'sparkles' | 'bar-chart-3' | 'arrow-up-right'
  badgeColor?: 'emerald' | 'blue' | 'amber' | 'indigo' | 'teal'
  className?: string
}

export const PlatformFlowCard: React.FC<PlatformFlowCardProps> = ({
  step,
  title,
  description,
  icon,
  className,
}) => {
  const iconConfig = {
    'message-square': {
      component: MessageSquare,
      bg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    users: {
      component: Users,
      bg: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    sparkles: {
      component: Sparkles,
      bg: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    'bar-chart-3': {
      component: BarChart3,
      bg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
    'arrow-up-right': {
      component: ArrowUpRight,
      bg: 'bg-teal-50 text-teal-700 border-teal-100',
    },
  }[icon]

  const IconComponent = iconConfig.component

  return (
    <div
      className={cn(
        'group relative bg-gradient-to-b from-white to-[#fbfaf8] border border-neutral-200/80 rounded-2xl p-6 shadow-sm flex flex-col items-start gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-brand-slate/30 cursor-default',
        className
      )}
    >
      <div className="w-full flex items-center justify-between">
        {/* Icon Container with scale micro-interaction */}
        <div
          className={cn(
            'w-12 h-12 rounded-2xl border flex items-center justify-center shadow-2xs transition-transform duration-300 group-hover:scale-105',
            iconConfig.bg
          )}
        >
          <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-xs font-mono font-bold text-neutral-300 group-hover:text-brand-slate transition-colors">
          0{step}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <h4 className="text-base font-bold text-neutral-900 font-display">
          {title}
        </h4>
        <p className="text-xs text-neutral-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
