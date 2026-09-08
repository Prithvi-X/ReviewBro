import React from 'react'
import { cn } from '@/lib/utils'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 2 | 3 | 4 | 5 | 6 | 8 | 10
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 3,
  gap = 6,
  className,
  ...props
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5',
    6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
    12: 'grid-cols-12',
  }[cols]

  const gapClasses = {
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
  }[gap]

  return (
    <div className={cn('grid', colsClasses, gapClasses, className)} {...props}>
      {children}
    </div>
  )
}
