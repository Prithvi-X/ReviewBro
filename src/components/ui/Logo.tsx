import React from 'react'
import { cn } from '@/lib/utils'

export interface LogoProps {
  variant?: 'full' | 'mark' | 'app-icon'
  theme?: 'dark' | 'light' | 'auto'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  markOnly?: boolean
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'auto',
  size = 'md',
  className,
  markOnly = false,
}) => {
  const isMarkOnly = markOnly || variant === 'mark'
  const isAppIcon = variant === 'app-icon'

  // Size mapping
  const sizeMap = {
    sm: { icon: 'w-6 h-6', text: 'text-lg', gap: 'gap-2' },
    md: { icon: 'w-8 h-8', text: 'text-xl', gap: 'gap-2.5' },
    lg: { icon: 'w-10 h-10', text: 'text-2xl', gap: 'gap-3' },
    xl: { icon: 'w-14 h-14', text: 'text-3xl', gap: 'gap-3.5' },
  }[size]

  // If app icon squircle requested
  if (isAppIcon) {
    const iconSizeClass = {
      sm: 'w-8 h-8 rounded-lg',
      md: 'w-12 h-12 rounded-xl',
      lg: 'w-16 h-16 rounded-2xl',
      xl: 'w-24 h-24 rounded-3xl',
    }[size]

    return (
      <div
        className={cn(
          'relative flex items-center justify-center bg-[#071615] border border-white/10 shadow-dark-glow overflow-hidden select-none',
          iconSizeClass,
          className
        )}
      >
        <img
          src="/brand/logo-mark.png"
          alt="ReviewBro App Icon"
          className="w-3/4 h-3/4 object-contain"
        />
      </div>
    )
  }

  // Pure SVG reproduction of the exact 2-leaf overlapping geometry as a fallback/vector option,
  // alongside the high-res official asset.
  return (
    <div
      className={cn(
        'inline-flex items-center font-display font-bold tracking-tight select-none',
        sizeMap.gap,
        className
      )}
    >
      {/* Brand Mark */}
      <div className={cn('relative shrink-0 flex items-center justify-center', sizeMap.icon)}>
        <img
          src="/brand/logo-mark.png"
          alt="ReviewBro Logo Mark"
          className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
        />
      </div>

      {/* Wordmark */}
      {!isMarkOnly && (
        <span
          className={cn(
            'inline-flex items-baseline font-extrabold tracking-tight',
            sizeMap.text
          )}
        >
          <span
            className={cn(
              theme === 'dark'
                ? 'text-white'
                : theme === 'light'
                ? 'text-[#0f1715]'
                : 'text-neutral-900 dark:text-white'
            )}
          >
            Review
          </span>
          <span className="text-[#64788e] ml-0.5">Bro</span>
        </span>
      )}
    </div>
  )
}
