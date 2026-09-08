import React, { useState } from 'react'
import { Sparkles, Copy, Check, Send, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { cn } from '@/lib/utils'

export interface AIReplyCardProps {
  customerName?: string
  originalReview?: string
  initialReply?: string
  className?: string
}

export const AIReplyCard: React.FC<AIReplyCardProps> = ({
  customerName = 'Rahul Mehta',
  originalReview = 'Good food, but the waiting time was a bit long.',
  initialReply,
  className,
}) => {
  const [tone, setTone] = useState<'empathetic' | 'professional' | 'brief'>('empathetic')
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)

  const toneReplies = {
    empathetic:
      initialReply ||
      'Hi Rahul, thank you for visiting and for the honest feedback! Glad you enjoyed the food. We truly apologize for the wait and are actively optimizing kitchen prep during peak hours to serve you much faster on your next visit.',
    professional:
      'Dear Rahul, thank you for your feedback regarding your recent dining experience. We appreciate your positive comments about the cuisine and have noted your observations on wait times for immediate kitchen scheduling improvements.',
    brief:
      'Thanks Rahul! Delighted you loved the food. We are working on speeding up our service times during peak hours and look forward to welcoming you back soon.',
  }

  const currentReply = toneReplies[tone]

  const handleCopy = () => {
    navigator.clipboard?.writeText(currentReply)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className={cn(
        'bg-white border border-neutral-200/90 rounded-card p-5 shadow-card-subtle flex flex-col gap-4',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-brand-slate/15 flex items-center justify-center text-brand-slate">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">AI Contextual Reply</h4>
            <p className="text-xs text-neutral-500">Replying to {customerName}</p>
          </div>
        </div>
        <Badge variant="slate" size="sm">Smart Assistant</Badge>
      </div>

      {/* Customer quote */}
      <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200/60 text-xs text-neutral-600 italic">
        "{originalReview}"
      </div>

      {/* Tone Switcher */}
      <div className="flex items-center gap-1.5 text-xs">
        <span className="text-neutral-400 font-medium mr-1">Tone:</span>
        {(['empathetic', 'professional', 'brief'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={cn(
              'px-2.5 py-1 rounded-full text-xs font-medium capitalize transition-all',
              tone === t
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Generated text area */}
      <div className="relative bg-neutral-warm-card border border-[#e8e4dc] rounded-lg p-3.5 text-sm text-neutral-800 leading-relaxed min-h-[85px]">
        {currentReply}
      </div>

      {/* Footer controls */}
      <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
        <button
          onClick={handleCopy}
          className="text-xs text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs h-8 px-2.5 text-neutral-600"
            onClick={() => setTone((prev) => (prev === 'empathetic' ? 'professional' : prev === 'professional' ? 'brief' : 'empathetic'))}
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Regenerate
          </Button>
          <Button
            variant="dark-pill"
            size="sm"
            onClick={() => setSent(true)}
            disabled={sent}
            className="text-xs h-8 px-3.5"
          >
            {sent ? (
              <>
                <Check className="w-3 h-3 mr-1 text-emerald-400" /> Sent
              </>
            ) : (
              <>
                <Send className="w-3 h-3 mr-1" /> Send Reply
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
