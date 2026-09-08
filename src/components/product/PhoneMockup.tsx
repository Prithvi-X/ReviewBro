import React from 'react'
import { Logo } from '@/components/ui/Logo'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PhoneMockupProps {
  className?: string
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'relative mx-auto w-[290px] sm:w-[320px] rounded-[44px] bg-[#0c1312] p-3 shadow-2xl border-4 border-[#1f2d29]',
        className
      )}
    >
      {/* Dynamic Island / Speaker */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

      {/* Screen Frame */}
      <div className="relative w-full rounded-[34px] bg-[#f8faf9] overflow-hidden pt-7 pb-6 px-4 text-neutral-900 border border-black/5">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/60">
          <Logo size="sm" />
          <div className="w-6 h-6 rounded-full bg-brand-slate/15 flex items-center justify-center text-[11px] font-bold text-brand-slate">
            RB
          </div>
        </div>

        {/* Greeting */}
        <div className="mb-4">
          <h4 className="text-base font-bold text-neutral-900 leading-tight">
            Good morning!
          </h4>
          <p className="text-xs text-neutral-500 mt-0.5">
            Your reputation is looking great.
          </p>
        </div>

        {/* Rating Card with Mini Sparkline */}
        <div className="bg-white rounded-xl p-3.5 border border-neutral-200/80 shadow-xs mb-4">
          <span className="text-[11px] text-neutral-500 font-medium">Average Rating</span>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-display text-neutral-900">4.7</span>
              <span className="text-amber-400 font-bold text-lg">★</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +12%
            </span>
          </div>
          {/* Sparkline wave */}
          <div className="mt-2 h-7 w-full flex items-end">
            <svg viewBox="0 0 100 24" className="w-full h-full stroke-emerald-500 fill-none" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 2 20 Q 25 15, 45 18 T 80 5 T 98 4" />
            </svg>
          </div>
        </div>

        {/* Recent Activity List */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-neutral-800">Recent Activity</span>
            <span className="text-[10px] text-brand-slate font-medium">View all</span>
          </div>

          <div className="space-y-2">
            {/* Item 1 */}
            <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-neutral-100 shadow-2xs">
              <div className="w-6 h-6 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[10px]">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-900 truncate">New 5-star review</p>
                <p className="text-[10px] text-neutral-400">2 hours ago</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-neutral-100 shadow-2xs">
              <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-[10px] font-bold">
                AI
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-900 truncate">AI reply sent</p>
                <p className="text-[10px] text-neutral-400">3 hours ago</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-2.5 p-2 bg-white rounded-lg border border-neutral-100 shadow-2xs">
              <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-[10px] font-bold">
                ★
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-neutral-900 truncate">Review request sent</p>
                <p className="text-[10px] text-neutral-400">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
