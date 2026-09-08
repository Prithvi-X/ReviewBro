import React, { useState } from 'react'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Heading } from '@/components/ui/Heading'
import { Card } from '@/components/ui/Card'
import { RatingStars } from '@/components/ui/RatingStars'
import { Divider } from '@/components/ui/Divider'
import { PlatformFlowCard } from '@/components/ui/PlatformFlowCard'
import { ComparisonCard } from '@/components/ui/ComparisonCard'
import { DashboardShell } from '@/components/product/DashboardShell'
import { AIReplyCard } from '@/components/product/AIReplyCard'
import { SentimentBar } from '@/components/product/SentimentBar'
import { TopicTag } from '@/components/product/TopicTag'
import { PhoneMockup } from '@/components/product/PhoneMockup'
import { Container } from '@/components/layout/Container'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { PLATFORM_STEPS, COMPARISON_POINTS } from '@/lib/constants'
import { Copy, Check } from 'lucide-react'

export const DesignSystemShowcase: React.FC = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'all' | 'tokens' | 'typography' | 'ui' | 'product' | 'surfaces'>('all')

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard?.writeText(text)
    setCopiedToken(tokenName)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  // Color tokens data
  const colorTokens = [
    {
      name: 'Deep Green',
      hex: '#071615',
      variable: '--color-brand-deep-green',
      role: 'Hero & Primary Dark Surface',
      textDark: false,
    },
    {
      name: 'Deep Green Glow',
      hex: '#0F241E',
      variable: '--color-brand-deep-green-glow',
      role: 'Radial Center & Sheen',
      textDark: false,
    },
    {
      name: 'Core Brand Green',
      hex: '#0B1715',
      variable: '--color-brand-green',
      role: 'Dark Cards & Sidebar',
      textDark: false,
    },
    {
      name: 'Slate Blue',
      hex: '#64788E',
      variable: '--color-brand-slate',
      role: 'Wordmark "Bro" & Brand Accents',
      textDark: false,
    },
    {
      name: 'Slate Blue Light',
      hex: '#899DB0',
      variable: '--color-brand-slate-light',
      role: 'Highlights & Secondary Tint',
      textDark: true,
    },
    {
      name: 'Soft Neutral',
      hex: '#F9F6F1',
      variable: '--color-neutral-warm',
      role: 'Approved Section Background',
      textDark: true,
    },
    {
      name: 'Neutral Warm Card',
      hex: '#FDFCFB',
      variable: '--color-neutral-warm-card',
      role: 'Warm Card Fill',
      textDark: true,
    },
    {
      name: 'Clean White',
      hex: '#FFFFFF',
      variable: '--color-white',
      role: 'Primary Card & Light Base',
      textDark: true,
    },
    {
      name: 'Neutral 900',
      hex: '#0F1715',
      variable: '--color-neutral-900',
      role: 'Headings & Deep Contrast',
      textDark: false,
    },
    {
      name: 'Neutral 700',
      hex: '#384340',
      variable: '--color-neutral-700',
      role: 'Primary Body Text',
      textDark: false,
    },
    {
      name: 'Neutral 500',
      hex: '#6E7A76',
      variable: '--color-neutral-500',
      role: 'Muted Captions & Subtitles',
      textDark: false,
    },
    {
      name: 'Success (Emerald)',
      hex: '#16A34A',
      variable: '--color-success',
      role: 'Metric Positive & Replied',
      textDark: false,
    },
  ]

  const spacingScale = [
    { name: '--space-1', px: '4px', rem: '0.25rem' },
    { name: '--space-2', px: '8px', rem: '0.5rem' },
    { name: '--space-3', px: '12px', rem: '0.75rem' },
    { name: '--space-4', px: '16px', rem: '1rem' },
    { name: '--space-6', px: '24px', rem: '1.5rem' },
    { name: '--space-8', px: '32px', rem: '2rem' },
    { name: '--space-12', px: '48px', rem: '3rem' },
    { name: '--space-16', px: '64px', rem: '4rem' },
    { name: '--space-24', px: '96px', rem: '6rem' },
  ]

  return (
    <div className="min-h-screen bg-[#071615] text-white">
      {/* Top Banner */}
      <div className="bg-[#0b1b17] border-b border-white/10 py-2.5 px-4 text-center text-xs font-medium text-[#8da399]">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
        ReviewBro Foundation & Design System Showcase — Phase 1 Internal Specification
      </div>

      {/* Showcase Header */}
      <header className="border-b border-white/10 bg-[#071615]/95 backdrop-blur sticky top-0 z-30">
        <Container size="xl" className="py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Logo theme="dark" size="md" />
              <div className="h-6 w-px bg-white/15 hidden sm:block" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8da399] hidden sm:block">
                Design System v1.0
              </span>
            </div>

            {/* Showcase Section Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {(
                [
                  { id: 'all', label: 'Overview' },
                  { id: 'tokens', label: 'Colors & Tokens' },
                  { id: 'typography', label: 'Typography' },
                  { id: 'ui', label: 'UI Primitives' },
                  { id: 'product', label: 'Product UI' },
                  { id: 'surfaces', label: 'Surfaces' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-white text-[#071615] font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </header>

      {/* HERO / INTRO OVERVIEW */}
      <section className="bg-hero-deep-green border-b border-white/10 py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle radial sheen backdrop */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(15,36,30,0.8)_0%,transparent_70%)]" />
        
        <Container size="lg" className="relative z-10 text-center">
          <Eyebrow theme="dark" className="mb-4">
            PHASE 1 SPECIFICATION
          </Eyebrow>
          
          <h1 className="text-display-hero font-bold tracking-tight text-white max-w-4xl mx-auto leading-none">
            Your Reviews. Your Reputation.{' '}
            <span className="text-[#64788e]">One Bro.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-[#c1ccc7] max-w-2xl mx-auto leading-relaxed">
            A comprehensive design system and component architecture established directly from the
            approved brand identity board and mockup references.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary-pill" size="md" withArrow>
              Coming Soon
            </Button>
            <Button variant="outline" size="md">
              View Design Tokens
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">4.8 ★</div>
              <div className="text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                HIGHER RATINGS
              </div>
            </div>
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">3x</div>
              <div className="text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                MORE REVIEWS
              </div>
            </div>
            <div className="w-px h-10 bg-white/15 hidden sm:block" />
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">Less Time</div>
              <div className="text-[11px] font-bold tracking-widest text-[#8da399] uppercase mt-0.5">
                MORE GROWTH
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 1: LOGO SYSTEM & ASSETS */}
      <section className="py-16 bg-[#091513] border-b border-white/10">
        <Container size="lg">
          <div className="mb-10">
            <Eyebrow theme="dark">SECTION 01</Eyebrow>
            <h2 className="text-2xl font-bold text-white font-display mt-1">
              Logo & Identity Assets
            </h2>
            <p className="text-xs text-neutral-400 mt-1 max-w-xl">
              Strictly adheres to the approved two overlapping organic leaves (Customer voice + Business progress) in satin white and slate blue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Full Wordmark on Dark */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-[11px] font-bold tracking-wider text-[#8da399] uppercase">
                Dark Background Lockup
              </span>
              <div className="py-6">
                <Logo variant="full" theme="dark" size="lg" />
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                variant="full" theme="dark"
              </span>
            </div>

            {/* 2. Full Wordmark on Light */}
            <div className="p-6 rounded-2xl bg-[#f9f6f1] border border-neutral-200 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                Light Background Lockup
              </span>
              <div className="py-6">
                <Logo variant="full" theme="light" size="lg" />
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                variant="full" theme="light"
              </span>
            </div>

            {/* 3. Mark Only */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-[11px] font-bold tracking-wider text-[#8da399] uppercase">
                Compact Brand Mark
              </span>
              <div className="py-4">
                <Logo variant="mark" size="xl" />
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                variant="mark" size="xl"
              </span>
            </div>

            {/* 4. App Icon Squircle */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-[11px] font-bold tracking-wider text-[#8da399] uppercase">
                App Icon Squircle
              </span>
              <div className="py-2">
                <Logo variant="app-icon" size="lg" />
              </div>
              <span className="text-xs text-neutral-500 font-mono">
                variant="app-icon"
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2: COLOR SYSTEM & TOKENS */}
      {(activeTab === 'all' || activeTab === 'tokens') && (
        <section className="py-16 bg-[#071615] border-b border-white/10">
          <Container size="lg">
            <div className="mb-10">
              <Eyebrow theme="dark">SECTION 02</Eyebrow>
              <h2 className="text-2xl font-bold text-white font-display mt-1">
                Centralized Color Tokens
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Extracted directly from the brand identity board swatches. Click any swatch to copy its HEX value.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {colorTokens.map((token) => (
                <div
                  key={token.name}
                  onClick={() => copyToClipboard(token.hex, token.name)}
                  className="group p-3.5 rounded-xl bg-[#0c1815] border border-white/10 hover:border-brand-slate transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div
                    className="w-full h-18 rounded-lg mb-3 shadow-inner flex items-center justify-center transition-transform group-hover:scale-[1.02]"
                    style={{ backgroundColor: token.hex }}
                  >
                    {copiedToken === token.name ? (
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 ${
                          token.textDark ? 'bg-black text-white' : 'bg-white text-black'
                        }`}
                      >
                        <Check className="w-3 h-3 text-emerald-500" /> Copied!
                      </span>
                    ) : (
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Copy
                          className={`w-4 h-4 ${
                            token.textDark ? 'text-black/60' : 'text-white/80'
                          }`}
                        />
                      </span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{token.name}</span>
                      <span className="text-xs font-mono font-semibold text-neutral-400">
                        {token.hex}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#8da399] font-mono mt-0.5">
                      {token.variable}
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1">{token.role}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Spacing Scale Preview */}
            <div className="mt-12 p-6 rounded-2xl bg-[#0c1815] border border-white/10">
              <h3 className="text-sm font-bold text-white font-display mb-4">
                Systematic Spacing Scale
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                {spacingScale.map((space) => (
                  <div key={space.name} className="flex items-center justify-between p-2 rounded bg-black/30">
                    <span className="text-[#8da399]">{space.name}</span>
                    <span className="text-white font-semibold">{space.px} ({space.rem})</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 3: TYPOGRAPHY SYSTEM */}
      {(activeTab === 'all' || activeTab === 'typography') && (
        <section className="py-16 bg-[#f9f6f1] text-neutral-900 border-b border-neutral-300">
          <Container size="lg">
            <div className="mb-10">
              <Eyebrow theme="light">SECTION 03</Eyebrow>
              <h2 className="text-2xl font-bold text-neutral-900 font-display mt-1">
                Typography System
              </h2>
              <p className="text-xs text-neutral-600 mt-1 max-w-xl">
                Clean, modern sans-serif typography featuring Plus Jakarta Sans and Inter. Assertive, human, highly legible at both headline and small metric scales.
              </p>
            </div>

            <div className="space-y-8 bg-white p-6 sm:p-10 rounded-2xl border border-neutral-200/80 shadow-card-subtle">
              {/* Display */}
              <div className="border-b border-neutral-100 pb-6">
                <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                  Display Hero • 68px / 4.25rem • Weight 800 • -0.035em tracking
                </span>
                <Heading level="display" theme="light" accentText="One Bro.">
                  Your Reviews. Your Reputation.
                </Heading>
              </div>

              {/* H1 */}
              <div className="border-b border-neutral-100 pb-6">
                <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                  Heading 1 • 52px / 3.25rem • Weight 700 • -0.03em tracking
                </span>
                <Heading level="h1" theme="light" accentText="In one place.">
                  Everything your reputation needs.
                </Heading>
              </div>

              {/* H2 */}
              <div className="border-b border-neutral-100 pb-6">
                <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                  Heading 2 • 36px / 2.25rem • Weight 700 • -0.025em tracking
                </span>
                <Heading level="h2" theme="light" accentText="Simpler on the surface.">
                  More powerful underneath.
                </Heading>
              </div>

              {/* H3 */}
              <div className="border-b border-neutral-100 pb-6">
                <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                  Heading 3 • 22px / 1.4rem • Weight 600 • -0.015em tracking
                </span>
                <Heading level="h3" theme="light">
                  Reputation Overview & AI Reply Session
                </Heading>
              </div>

              {/* Body & Caption */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                    Body Regular • 16px / 1rem • Weight 400 • 1.6 line-height
                  </span>
                  <p className="text-body text-neutral-700">
                    Manage reviews, collect more feedback, reply with AI, understand what customers are saying, and grow your business — all in one simple platform.
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-neutral-400 block mb-2">
                    Caption & Eyebrow • 12-14px • Tracked uppercase
                  </span>
                  <div className="space-y-2">
                    <Eyebrow theme="light">REPUTATION MANAGEMENT, REIMAGINED</Eyebrow>
                    <p className="text-caption text-neutral-500">
                      ReviewBro is currently in active development. All brand geometry strictly preserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 4: CORE REUSABLE UI PRIMITIVES & CARDS */}
      {(activeTab === 'all' || activeTab === 'ui') && (
        <section className="py-16 bg-[#071615] border-b border-white/10">
          <Container size="lg">
            <div className="mb-10">
              <Eyebrow theme="dark">SECTION 04</Eyebrow>
              <h2 className="text-2xl font-bold text-white font-display mt-1">
                Core UI Primitives & Card System
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Buttons, pills, badges, rating stars, dividers, and surface card variants.
              </p>
            </div>

            {/* Buttons Showcase */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 mb-8 space-y-6">
              <h3 className="text-sm font-bold text-white font-display">
                Button Styles & Variants
              </h3>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary-pill" size="md" withArrow>
                  Coming Soon
                </Button>
                <Button variant="dark-pill" size="md" withArrow>
                  Dark Pill CTA
                </Button>
                <Button variant="outline" size="md">
                  Outline Pill
                </Button>
                <Button variant="slate" size="md">
                  Slate Action
                </Button>
                <Button variant="secondary" size="md">
                  Secondary Neutral
                </Button>
                <Button variant="primary-pill" size="sm">
                  Small Button
                </Button>
                <Button variant="primary-pill" size="lg" withArrow>
                  Large Button
                </Button>
                <Button variant="primary-pill" size="md" disabled>
                  Disabled
                </Button>
              </div>
            </div>

            {/* Badges & Tags */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 mb-8 space-y-6">
              <h3 className="text-sm font-bold text-white font-display">
                Badges, Trend Indicators & Topic Tags
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success">Replied</Badge>
                <Badge variant="warning">Pending</Badge>
                <Badge variant="danger">Escalated</Badge>
                <Badge variant="slate">AI Reply</Badge>
                <Badge variant="neutral">Verified Customer</Badge>
                <Badge variant="trend-up">+12% vs last month</Badge>
                <Badge variant="trend-down">-4% response time</Badge>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-400 mr-2">Topic Tags:</span>
                <TopicTag label="Ambience" count={42} sentiment="positive" />
                <TopicTag label="Food Quality" count={89} sentiment="positive" />
                <TopicTag label="Wait Time" count={14} sentiment="negative" />
                <TopicTag label="Valet Parking" count={8} sentiment="neutral" />
              </div>
            </div>

            {/* Star Ratings & Dividers */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 mb-8 space-y-6">
              <h3 className="text-sm font-bold text-white font-display">
                Rating Stars & Dividers
              </h3>

              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <RatingStars rating={5} size="lg" />
                  <span className="text-sm text-neutral-300 font-semibold">5.0 Star Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4.7} size="lg" showScore />
                  <span className="text-sm text-neutral-300 font-semibold">(Mockup Standard)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4} size="md" />
                  <span className="text-xs text-neutral-400 font-medium">4.0 Average</span>
                </div>
              </div>

              <div className="pt-4">
                <span className="text-xs text-neutral-400 block mb-2">Horizontal Divider (dark):</span>
                <Divider theme="dark" />
              </div>
            </div>

            {/* Card System Variants */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 space-y-6">
              <h3 className="text-sm font-bold text-white font-display">
                Card Surface Variants
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="default">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase">Default Card</span>
                  <p className="text-sm font-semibold text-neutral-900 mt-2">Clean White Surface</p>
                  <p className="text-xs text-neutral-600 mt-1">Light border and subtle shadow.</p>
                </Card>

                <Card variant="warm">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase">Warm Card</span>
                  <p className="text-sm font-semibold text-neutral-900 mt-2">Warm Tint Surface</p>
                  <p className="text-xs text-neutral-600 mt-1">Soft #fdfcfb fill with neutral border.</p>
                </Card>

                <Card variant="flow">
                  <span className="text-[11px] font-bold text-neutral-500 uppercase">Flow Card</span>
                  <p className="text-sm font-semibold text-neutral-900 mt-2">Vertical Flow Step</p>
                  <p className="text-xs text-neutral-600 mt-1">Top gradient sheen for feature cards.</p>
                </Card>

                <Card variant="dark">
                  <span className="text-[11px] font-bold text-[#8da399] uppercase">Dark Card</span>
                  <p className="text-sm font-semibold text-white mt-2">Deep Green Elevated</p>
                  <p className="text-xs text-neutral-400 mt-1">Subtle metallic rim border on dark.</p>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 5: PRODUCT UI FOUNDATION */}
      {(activeTab === 'all' || activeTab === 'product') && (
        <section className="py-16 bg-[#091513] border-b border-white/10">
          <Container size="xl">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <Eyebrow theme="dark">SECTION 05</Eyebrow>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mt-1">
                Product UI Component Foundation
              </h2>
              <p className="text-xs text-neutral-400 mt-2">
                Reproducing the exact dashboard structure, metrics, sidebar navigation, review cards, AI contextual responder, and smartphone experience from the approved references.
              </p>
            </div>

            {/* LIVE DASHBOARD SHELL MOCKUP */}
            <div className="mb-16">
              <DashboardShell interactive={true} />
            </div>

            {/* 5-STEP PLATFORM FLOW CARDS */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <Eyebrow theme="dark">THE PLATFORM</Eyebrow>
                <h3 className="text-xl font-bold text-white font-display mt-1">
                  Everything your reputation needs.{' '}
                  <span className="text-[#64788e]">In one place.</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {PLATFORM_STEPS.map((step, idx) => (
                  <PlatformFlowCard
                    key={step.id}
                    step={idx + 1}
                    title={step.title}
                    description={step.description}
                    icon={step.icon as any}
                  />
                ))}
              </div>
            </div>

            {/* COMPARISON & MOBILE PHONE ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#071615] p-6 sm:p-10 rounded-dashboard border border-white/10">
              {/* Left: Value Comparison Cards */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <Eyebrow theme="dark">WHY REVIEWBRO</Eyebrow>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                    More powerful underneath.{' '}
                    <span className="text-[#64788e]">Simpler on the surface.</span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1.5">
                    Clear differentiation between traditional fragmented workflows and ReviewBro's unified intelligence.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ComparisonCard
                    type="traditional"
                    title="Traditional tools"
                    items={COMPARISON_POINTS.traditional}
                  />
                  <ComparisonCard
                    type="reviewBro"
                    title="ReviewBro"
                    items={COMPARISON_POINTS.reviewBro}
                  />
                </div>
              </div>

              {/* Right: Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <PhoneMockup />
              </div>
            </div>

            {/* SENTIMENT BAR & AI CARD DEMO */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-card p-6 border border-neutral-200 shadow-card-subtle flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-2">
                    Customer Sentiment Engine
                  </h4>
                  <p className="text-xs text-neutral-500 mb-6">
                    Multi-platform natural language processing aggregates customer feelings into real-time metrics.
                  </p>
                  <SentimentBar positive={68} neutral={24} negative={8} />
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span>Based on 1,248 verified reviews</span>
                  <span className="font-semibold text-emerald-700">+14% vs last quarter</span>
                </div>
              </div>

              <AIReplyCard />
            </div>
          </Container>
        </section>
      )}

      {/* SECTION 6: SURFACES & REUSABLE NAVBAR DEMO */}
      {(activeTab === 'all' || activeTab === 'surfaces') && (
        <section className="py-16 bg-[#071615]">
          <Container size="lg">
            <div className="mb-10">
              <Eyebrow theme="dark">SECTION 06</Eyebrow>
              <h2 className="text-2xl font-bold text-white font-display mt-1">
                Background & Surface System
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-xl">
                Comparing the three approved surfaces: Deep Green Hero, Warm Soft Neutral, and Pure White.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* 1. Deep Green */}
              <div className="rounded-2xl bg-hero-deep-green p-6 border border-white/10 shadow-surface-elevated text-white flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                    Surface 1: Hero Deep Green
                  </span>
                  <h4 className="text-base font-bold font-display mt-2">
                    .bg-hero-deep-green
                  </h4>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    Rich pine forest dark green (#071615) with subtle radial sheen (#0f241e). Premium, calm, and trustworthy.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8da399]">
                  <span>Hero & Dark Highlights</span>
                  <span className="font-mono">#071615</span>
                </div>
              </div>

              {/* 2. Soft Warm Neutral */}
              <div className="rounded-2xl bg-section-neutral p-6 border border-neutral-300 shadow-card-subtle text-neutral-900 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                    Surface 2: Soft Warm Neutral
                  </span>
                  <h4 className="text-base font-bold font-display mt-2 text-neutral-900">
                    .bg-section-neutral
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    Gentle, warm off-white (#f9f6f1) providing welcoming breathing room and balance for platform features.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                  <span>Platform & Features</span>
                  <span className="font-mono">#F9F6F1</span>
                </div>
              </div>

              {/* 3. Pure White */}
              <div className="rounded-2xl bg-white p-6 border border-neutral-200 shadow-card-subtle text-neutral-900 flex flex-col justify-between min-h-[220px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                    Surface 3: Crisp White
                  </span>
                  <h4 className="text-base font-bold font-display mt-2 text-neutral-900">
                    .bg-section-white
                  </h4>
                  <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                    High contrast clean white (#ffffff) for card containers, inputs, and crisp data density.
                  </p>
                </div>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
                  <span>Cards & Inputs</span>
                  <span className="font-mono">#FFFFFF</span>
                </div>
              </div>
            </div>

            {/* Reusable Navbar preview */}
            <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-4">
                Reusable Navbar Component (Dark Surface Mode)
              </span>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#071615]">
                <Navbar theme="dark" />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
