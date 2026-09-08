import React from 'react'
import { cn } from '@/lib/utils'

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'col' | 'row'
  gap?: 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12
  align?: 'start' | 'center' | 'end' | 'stretch'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  wrap?: boolean
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'col',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  className,
  ...props
}) => {
  const dirClasses = direction === 'col' ? 'flex-col' : 'flex-row'

  const gapClasses = {
    1: 'gap-1',
    2: 'gap-2',
    3: 'gap-3',
    4: 'gap-4',
    5: 'gap-5',
    6: 'gap-6',
    8: 'gap-8',
    10: 'gap-10',
    12: 'gap-12',
  }[gap]

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  }[align]

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
  }[justify]

  return (
    <div
      className={cn('flex', dirClasses, gapClasses, alignClasses, justifyClasses, wrap && 'flex-wrap', className)}
      {...props}
    >
      {children}
    </div>
  )
}
