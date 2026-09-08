import React, { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { MetricCard } from './MetricCard'
import { ReviewItem } from './ReviewItem'
import { AIReplyCard } from './AIReplyCard'
import { SAMPLE_METRICS, SAMPLE_REVIEWS } from '@/lib/constants'
import {
  LayoutDashboard,
  MessageSquare,
  Users,
  Sparkles,
  BarChart3,
  TrendingUp,
  Settings,
  Search,
  ChevronDown,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export interface DashboardShellProps {
  className?: string
  interactive?: boolean
}

export const DashboardShell: React.FC<DashboardShellProps> = ({
  className,
  interactive = true,
}) => {
  const [activeTab, setActiveTab] = useState('Overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAIReplyModal, setShowAIReplyModal] = useState(false)

  const menuItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Reviews', icon: MessageSquare, badge: '12' },
    { name: 'Get Reviews', icon: Users },
    { name: 'AI Replies', icon: Sparkles },
    { name: 'Insights', icon: BarChart3 },
    { name: 'Competitors', icon: TrendingUp },
    { name: 'Settings', icon: Settings },
  ]

  return (
    <div
      className={cn(
        'w-full bg-[#0a1412] rounded-dashboard overflow-hidden shadow-2xl border border-white/10 text-neutral-900 transition-all font-sans',
        className
      )}
    >
      <div className="flex flex-col lg:flex-row min-h-[580px]">
        {/* --- DARK PRODUCT SIDEBAR --- */}
        <div className="w-full lg:w-48 xl:w-56 bg-[#0c1613] border-b lg:border-b-0 lg:border-r border-white/10 p-5 flex flex-col justify-between shrink-0">
          <div>
            {/* Logo in Sidebar */}
            <div className="pb-6">
              <Logo theme="dark" size="sm" />
            </div>

            {/* Nav Menu */}
            <nav className="space-y-1" aria-label="Dashboard Navigation">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name
                return (
                  <button
                    key={item.name}
                    onClick={() => interactive && setActiveTab(item.name)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-slate-light',
                      isActive
                        ? 'bg-[#1b2b25] text-white font-semibold'
                        : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={cn('w-4 h-4', isActive ? 'text-brand-slate-light' : 'text-neutral-400')} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge && (
                      <span className="bg-brand-slate/20 text-brand-slate-light text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Sidebar Quote Card */}
          <div className="hidden lg:block mt-8 p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 text-xs">
            <p className="italic text-[11px] leading-snug">
              "Good businesses listen better."
            </p>
          </div>
        </div>

        {/* --- MAIN DASHBOARD CANVAS --- */}
        <div className="flex-1 bg-[#fcfdfd] flex flex-col min-w-0">
          {/* Top Bar */}
          <div className="border-b border-neutral-200/80 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 bg-white">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[180px] max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews, customers or keywords..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-brand-slate focus:bg-white transition-all"
              />
            </div>

            {/* Date Filter */}
            <div className="flex items-center gap-2 text-xs font-medium text-neutral-700 bg-neutral-50 border border-neutral-200 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-neutral-100 transition-colors">
              <span>Last 30 days</span>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
            </div>
          </div>

          {/* Canvas Body */}
          <div className="p-4 sm:p-6 space-y-6 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900 font-display">
                  Reputation Overview
                </h3>
                <p className="text-xs text-neutral-500">
                  Real-time aggregated health across all channels
                </p>
              </div>
            </div>

            {/* Metric Cards Row: 2 columns on mobile/tablet, 4 columns on xl */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-3.5">
              {SAMPLE_METRICS.map((metric) => (
                <MetricCard
                  key={metric.id}
                  label={metric.label}
                  value={metric.value}
                  unit={metric.unit}
                  change={metric.change}
                  changePositive={metric.changePositive}
                />
              ))}
            </div>

            {/* Recent Reviews Section */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-neutral-800">Recent Reviews</h4>
                <button className="text-xs font-semibold text-brand-slate hover:text-brand-slate-dark flex items-center gap-1 transition-colors">
                  <span>View all</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

              {/* Reviews List */}
              <div className="space-y-2.5">
                {SAMPLE_REVIEWS.map((rev) => (
                  <ReviewItem
                    key={rev.id}
                    author={rev.author}
                    platform={rev.platform}
                    rating={rev.rating}
                    timeAgo={rev.timeAgo}
                    text={rev.text}
                    status={rev.status}
                    onReplyClick={() => setShowAIReplyModal(true)}
                  />
                ))}
              </div>
            </div>

            {/* Live AI Reply Card expansion if clicked */}
            {showAIReplyModal && (
              <div className="pt-2 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-neutral-800">
                    Live AI Assistant
                  </span>
                  <button
                    onClick={() => setShowAIReplyModal(false)}
                    className="text-xs text-neutral-400 hover:text-neutral-600"
                  >
                    Close preview
                  </button>
                </div>
                <AIReplyCard
                  customerName="Rahul Mehta"
                  originalReview="Good food, but the waiting time was a bit long."
                  initialReply="Hi Rahul, thank you for visiting and for the honest feedback! Glad you enjoyed the flavors. We are streamlining kitchen prep during peak hours to serve you much faster next time."
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
