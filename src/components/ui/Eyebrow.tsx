import React from 'react'
import { cn } from '@/lib/utils'

export interface EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: 'dark' | 'light' | 'muted'
}

export const Eyebrow: React.FC<EyebrowProps> = ({
  children,
  theme = 'dark',
  className,
  ...props
}) => {
  const themeClasses = {
    dark: 'text-[#8da399]', // subtle green-tinted muted tone used in Hero
    light: 'text-neutral-500', // neutral grey used in light sections
    muted: 'text-neutral-400',
  }[theme]

  return (
    <div
      className={cn(
        'text-eyebrow font-bold tracking-[0.14em] uppercase select-none',
        themeClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
