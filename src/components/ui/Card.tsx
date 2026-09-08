import React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'warm' | 'flow' | 'dark' | 'interactive'
  hoverEffect?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hoverEffect = false,
  className,
  ...props
}) => {
  const variantClasses = {
    default: 'bg-white border border-neutral-200/80 shadow-card-subtle text-neutral-900',
    warm: 'bg-neutral-warm-card border border-[#e6e2dd] shadow-card-subtle text-neutral-900',
    flow: 'bg-gradient-to-b from-white to-[#f9f7f4] border border-neutral-200/70 shadow-sm text-neutral-900',
    dark: 'bg-[#0c1815] border border-white/10 shadow-surface-elevated text-white',
    interactive: 'bg-white border border-neutral-200/80 shadow-card-subtle hover:shadow-card-hover hover:border-neutral-300 transition-all duration-200 text-neutral-900 cursor-pointer',
  }[variant]

  const hoverClass = hoverEffect
    ? 'hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-200'
    : ''

  return (
    <div
      className={cn(
        'rounded-card p-5 relative overflow-hidden',
        variantClasses,
        hoverClass,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
