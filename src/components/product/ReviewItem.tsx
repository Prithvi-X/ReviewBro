import React from 'react'
import { RatingStars } from '@/components/ui/RatingStars'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface ReviewItemProps {
  author: string
  platform: 'google' | 'zomato' | 'swiggy' | 'whatsapp'
  rating: number
  timeAgo: string
  text: string
  status: 'Replied' | 'AI Reply' | 'Pending'
  onReplyClick?: () => void
  className?: string
}

export const ReviewItem: React.FC<ReviewItemProps> = ({
  author,
  platform,
  rating,
  timeAgo,
  text,
  status,
  onReplyClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'p-4 bg-white hover:bg-neutral-50/70 rounded-card border border-neutral-200/80 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3',
        className
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        {/* Platform Brand Icon */}
        <div className="shrink-0 mt-0.5">
          {platform === 'google' && (
            <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center shadow-xs">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
            </div>
          )}

          {platform === 'zomato' && (
            <div className="w-8 h-8 rounded-full bg-[#E23744] text-white font-black italic flex items-center justify-center text-[10px] tracking-tighter shadow-xs">
              zomato
            </div>
          )}

          {platform === 'swiggy' && (
            <div className="w-8 h-8 rounded-full bg-[#FC8019] text-white font-bold flex items-center justify-center text-xs shadow-xs">
              S
            </div>
          )}

          {platform === 'whatsapp' && (
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white font-bold flex items-center justify-center text-xs shadow-xs">
              WA
            </div>
          )}
        </div>

        {/* Review details */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-neutral-900">{author}</span>
            <RatingStars rating={rating} size="sm" />
            <span className="text-xs text-neutral-400">• {timeAgo}</span>
          </div>
          <p className="text-sm text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
            {text}
          </p>
        </div>
      </div>

      {/* Action / Status */}
      <div className="shrink-0 flex items-center sm:self-center ml-11 sm:ml-0">
        {status === 'Replied' ? (
          <Badge
            variant="success"
            size="sm"
            icon={<CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />}
          >
            Replied
          </Badge>
        ) : (
          <Button
            variant="slate"
            size="sm"
            onClick={onReplyClick}
            className="text-xs px-3 py-1 h-7 rounded-full flex items-center gap-1 shadow-none"
          >
            <Sparkles className="w-3 h-3" />
            AI Reply
          </Button>
        )}
      </div>
    </div>
  )
}
