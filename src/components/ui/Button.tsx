import React from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary-pill' | 'dark-pill' | 'outline' | 'secondary' | 'ghost' | 'slate'
  size?: 'sm' | 'md' | 'lg'
  withArrow?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary-pill',
      size = 'md',
      withArrow = false,
      icon,
      iconPosition = 'left',
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // Size variants
    const sizeClasses = {
      sm: 'text-xs px-3.5 py-1.5 h-8 gap-1.5 rounded-full',
      md: 'text-sm px-5 py-2.5 h-11 gap-2 rounded-full',
      lg: 'text-base px-6 py-3.5 h-13 gap-2.5 rounded-full',
    }[size]

    // Visual styles
    const variantClasses = {
      'primary-pill':
        'bg-white text-[#071615] font-semibold shadow-sm hover:bg-neutral-100 hover:shadow active:scale-[0.98] border border-transparent transition-all duration-200',
      'dark-pill':
        'bg-[#071615] text-white font-semibold shadow-md hover:bg-[#0f241e] border border-white/15 active:scale-[0.98] transition-all duration-200',
      'outline':
        'bg-transparent text-white/90 border border-white/25 hover:bg-white/10 hover:text-white font-medium transition-all duration-200',
      'secondary':
        'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-200 font-medium transition-all duration-200',
      'slate':
        'bg-brand-slate text-white hover:bg-brand-slate-dark font-medium shadow-sm transition-all duration-200',
      'ghost':
        'bg-transparent text-neutral-700 hover:bg-neutral-100 font-medium transition-all duration-200',
    }[variant]

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          'inline-flex items-center justify-center select-none cursor-pointer',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-slate focus-visible:ring-offset-2',
          'disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed',
          sizeClasses,
          variantClasses,
          className
        )}
        {...props}
      >
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        {withArrow && (
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
