import React from 'react'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'slate' | 'neutral' | 'trend-up' | 'trend-down'
  size?: 'sm' | 'md'
  icon?: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 font-medium rounded-full',
    md: 'text-xs px-2.5 py-1 font-medium rounded-full',
  }[size]

  const variantClasses = {
    success: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200/60',
    danger: 'bg-rose-50 text-rose-700 border border-rose-200/60',
    slate: 'bg-slate-100 text-slate-700 border border-slate-200',
    neutral: 'bg-neutral-100 text-neutral-700 border border-neutral-200',
    'trend-up': 'bg-emerald-50 text-emerald-700 font-semibold inline-flex items-center gap-0.5',
    'trend-down': 'bg-rose-50 text-rose-700 font-semibold inline-flex items-center gap-0.5',
  }[variant]

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center select-none leading-none',
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {variant === 'trend-up' && <ArrowUpRight className="w-3 h-3 text-emerald-600" />}
      {variant === 'trend-down' && <ArrowDownRight className="w-3 h-3 text-rose-600" />}
      {icon && <span className="mr-1">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
