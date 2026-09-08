import React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'hero-green' | 'neutral' | 'white' | 'dark'
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none'
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'white',
  spacing = 'lg',
  className,
  ...props
}) => {
  const variantClasses = {
    'hero-green': 'bg-hero-deep-green text-white relative overflow-hidden',
    'neutral': 'bg-section-neutral text-neutral-900 border-t border-b border-neutral-200/50',
    'white': 'bg-section-white text-neutral-900',
    'dark': 'bg-[#0b1715] text-white',
  }[variant]

  const spacingClasses = {
    none: 'py-0',
    sm: 'py-8 sm:py-12',
    md: 'py-12 sm:py-16',
    lg: 'py-16 sm:py-24',
    xl: 'py-20 sm:py-32',
  }[spacing]

  return (
    <section className={cn('relative w-full', variantClasses, spacingClasses, className)} {...props}>
      {children}
    </section>
  )
}
