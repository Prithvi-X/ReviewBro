import React from 'react'
import { cn } from '@/lib/utils'

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  theme?: 'dark' | 'light'
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  theme = 'light',
  className,
  ...props
}) => {
  const isHorizontal = orientation === 'horizontal'

  const borderClass =
    theme === 'dark' ? 'border-white/10' : 'border-neutral-200'

  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={cn(
        isHorizontal ? `w-full border-t ${borderClass} my-4` : `h-full border-l ${borderClass} mx-4`,
        className
      )}
      {...props}
    />
  )
}
