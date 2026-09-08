import React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface RatingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  rating?: number
  maxStars?: number
  size?: 'sm' | 'md' | 'lg'
  showScore?: boolean
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating = 5,
  maxStars = 5,
  size = 'md',
  showScore = false,
  className,
  ...props
}) => {
  const sizeMap = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4',
  }[size]

  return (
    <div className={cn('inline-flex items-center gap-1', className)} {...props}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }).map((_, i) => {
          const filled = i < Math.floor(rating)
          return (
            <Star
              key={i}
              className={cn(
                sizeMap,
                filled ? 'text-amber-400 fill-amber-400' : 'text-neutral-300 fill-neutral-100'
              )}
            />
          )
        })}
      </div>
      {showScore && (
        <span className="text-xs font-semibold text-neutral-800 ml-1">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}
