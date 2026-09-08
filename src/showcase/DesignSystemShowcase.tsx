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
import { MetricCard } from '@/components/product/MetricCard'
import { ReviewItem } from '@/components/product/ReviewItem'
import { AIReplyCard } from '@/components/product/AIReplyCard'
import { SentimentBar } from '@/components/product/SentimentBar'
import { TopicTag } from '@/components/product/TopicTag'
import { RecommendationCard } from '@/components/product/RecommendationCard'
import { PhoneMockup } from '@/components/product/PhoneMockup'
import { Container } from '@/components/layout/Container'
import {
  PLATFORM_STEPS,
  COMPARISON_POINTS,
  SAMPLE_METRICS,
  SAMPLE_REVIEWS,
  SAMPLE_RECOMMENDATIONS,
} from '@/lib/constants'
import {
  Copy,
  Check,
  Layers,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

export const DesignSystemShowcase: React.FC = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<
    'all' | '01' | '02' | '03' | '04' | '05' | '06'
  >('all')

  const copyToClipboard = (text: string, tokenName: string) => {
    navigator.clipboard?.writeText(text)
    setCopiedToken(tokenName)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  // 12 Centralized Color Tokens matching approved identity board
  const colorTokens = [
    {
      name: 'Deep Green',
      hex: '#071615',
      variable: '--color-brand-deep-green',
      role: 'Hero Dark Base & Primary Brand Canvas',
      textDark: false,
    },
    {
      name: 'Deep Green Glow',
      hex: '#0F241E',
      variable: '--color-brand-deep-green-glow',
      role: 'Radial Center & Metallic Sheen',
      textDark: false,
    },
    {
      name: 'Core Brand Green',
      hex: '#0B1715',
      variable: '--color-brand-green',
      role: 'Dark Cards & Sidebar Background',
      textDark: false,
    },
    {
      name: 'Slate Blue',
      hex: '#64788E',
      variable: '--color-brand-slate',
      role: 'Wordmark "Bro", Brand Accents & Actions',
      textDark: false,
    },
    {
      name: 'Slate Blue Light',
      hex: '#899DB0',
      variable: '--color-brand-slate-light',
      role: 'Highlights, Active Pills & Secondary Tint',
      textDark: true,
    },
    {
      name: 'Soft Neutral',
      hex: '#F9F6F1',
      variable: '--color-neutral-warm',
      role: 'Approved Light Section Background',
      textDark: true,
    },
    {
      name: 'Neutral Warm Card',
      hex: '#FDFCFB',
      variable: '--color-neutral-warm-card',
      role: 'Warm Card Surface Fill',
      textDark: true,
    },
    {
      name: 'Clean White',
      hex: '#FFFFFF',
      variable: '--color-white',
      role: 'Primary Card & Input Canvas',
      textDark: true,
    },
    {
      name: 'Neutral 900',
      hex: '#0F1715',
      variable: '--color-neutral-900',
      role: 'Headings & High-Contrast Text',
      textDark: false,
    },
    {
      name: 'Neutral 700',
      hex: '#384340',
      variable: '--color-neutral-700',
      role: 'Primary Body Typography',
      textDark: false,
    },
    {
      name: 'Neutral 500',
      hex: '#6E7A76',
      variable: '--color-neutral-500',
      role: 'Muted Captions, Metadata & Subtitles',
      textDark: false,
    },
    {
      name: 'Success (Emerald)',
      hex: '#16A34A',
      variable: '--color-success',
      role: 'Positive Metric Trends & Replied Badges',
      textDark: false,
    },
  ]

  // Spacing Scale
  const spacingScale = [
    { name: '--space-1', px: '4px', rem: '0.25rem', width: 'w-1' },
    { name: '--space-2', px: '8px', rem: '0.5rem', width: 'w-2' },
    { name: '--space-3', px: '12px', rem: '0.75rem', width: 'w-3' },
    { name: '--space-4', px: '16px', rem: '1rem', width: 'w-4' },
    { name: '--space-5', px: '20px', rem: '1.25rem', width: 'w-5' },
    { name: '--space-6', px: '24px', rem: '1.5rem', width: 'w-6' },
    { name: '--space-8', px: '32px', rem: '2rem', width: 'w-8' },
    { name: '--space-10', px: '40px', rem: '2.5rem', width: 'w-10' },
    { name: '--space-12', px: '48px', rem: '3rem', width: 'w-12' },
    { name: '--space-16', px: '64px', rem: '4rem', width: 'w-16' },
    { name: '--space-20', px: '80px', rem: '5rem', width: 'w-20' },
    { name: '--space-24', px: '96px', rem: '6rem', width: 'w-24' },
    { name: '--space-30', px: '120px', rem: '7.5rem', width: 'w-30' },
  ]

  // Radius Tokens
  const radiusTokens = [
    { name: 'Control', token: '--radius-control', value: '8px', desc: 'Inputs, small buttons, tags' },
    { name: 'Card', token: '--radius-card', value: '14px', desc: 'Standard & metric cards' },
    { name: 'Card Large', token: '--radius-card-lg', value: '20px', desc: 'Flow cards & elevated surfaces' },
    { name: 'Dashboard', token: '--radius-dashboard', value: '28px', desc: 'App container shells' },
    { name: 'Pill', token: '--radius-pill', value: '9999px', desc: 'Buttons & status badges' },
  ]

  // Shadow Tokens
  const shadowTokens = [
    { name: 'Card Subtle', token: '--shadow-card-subtle', desc: 'Default light card elevation' },
    { name: 'Card Hover', token: '--shadow-card-hover', desc: 'Elevated interactive card hover' },
    { name: 'Surface Elevated', token: '--shadow-surface-elevated', desc: 'Modals, floating tooltips' },
    { name: 'Product Mockup', token: '--shadow-product-mockup', desc: 'Realistic dark-bezel dashboard drop shadow' },
    { name: 'Dark Glow', token: '--shadow-dark-glow', desc: 'Subtle hero radial ambient depth' },
  ]

  return (
    <div className="min-h-screen bg-[#071615] text-white">
      {/* --- TOP SPECIFICATION BAR --- */}
      <div className="bg-[#0b1b17] border-b border-white/10 py-2 px-4 flex flex-wrap items-center justify-between text-xs font-medium text-[#8da399]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">ReviewBro Internal Design System</span>
          <span className="text-white/40">|</span>
          <span>Phase 1 Specification & Living Styleguide</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2 py-0.5 rounded text-[11px] font-mono">
            ILLUSTRATIVE MOCK DATA ONLY
          </span>
          <span className="text-neutral-400 font-mono text-[11px]">v1.0-refined</span>
        </div>
      </div>

      {/* --- SHOWCASE TOOLBAR HEADER --- */}
      <header className="border-b border-white/10 bg-[#071615]/95 backdrop-blur sticky top-0 z-40">
        <Container size="xl" className="py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo theme="dark" size="sm" />
              <div className="h-5 w-px bg-white/15 hidden sm:block" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#8da399] hidden sm:block font-mono">
                FOUNDATION & COMPONENT LIBRARY
              </span>
            </div>

            {/* Section Jump Tabs */}
            <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              {[
                { id: 'all', label: 'All Sections' },
                { id: '01', label: '01 Brand' },
                { id: '02', label: '02 Layout' },
                { id: '03', label: '03 Core UI' },
                { id: '04', label: '04 Product UI' },
                { id: '05', label: '05 Composites' },
                { id: '06', label: '06 Surfaces' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-white text-[#071615] font-bold shadow-xs'
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

      {/* --- SHOWCASE SPECIFICATION INTRO HEADER --- */}
      <section className="border-b border-white/10 bg-[#081715] py-10">
        <Container size="lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-bold tracking-widest text-[#8da399] uppercase font-mono">
                  PHASE 1 DELIVERABLE
                </span>
                <span className="text-white/30">•</span>
                <span className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Verified Against Brand Assets
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                ReviewBro Design System & Product UI Language
              </h1>
              <p className="text-xs sm:text-sm text-[#c1ccc7] mt-1.5 max-w-2xl leading-relaxed">
                Centralized tokens, reusable component primitives, and the core product UI language
                reproduced directly from the approved ReviewBro Brand Identity Board, Mockup, and App Icon.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-neutral-400 max-w-xs shrink-0">
              <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-slate-light" />
                Core Brand Principle
              </div>
              <p className="italic text-[11px] text-neutral-300">
                "More powerful underneath. Simpler on the surface."
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          01. BRAND FOUNDATIONS
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '01') && (
        <section id="section-brand" className="py-14 bg-[#071615] border-b border-white/10">
          <Container size="lg">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">01</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">BRAND FOUNDATIONS</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Logo Variants, Color Tokens & Typography
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                The approved ReviewBro mark represents the connection between customer feedback (satin white leaf) and business progress (slate blue leaf).
              </p>
            </div>

            {/* 1.1 LOGO SYSTEM */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-white font-display mb-3">
                1.1 Logo & Identity Asset Variants
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Full Wordmark on Dark */}
                <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#8da399] uppercase">
                    Dark Background Lockup
                  </span>
                  <div className="py-5">
                    <Logo variant="full" theme="dark" size="lg" />
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    variant="full" theme="dark"
                  </span>
                </div>

                {/* Full Wordmark on Light */}
                <div className="p-5 rounded-2xl bg-[#f9f6f1] border border-neutral-200 flex flex-col items-center justify-center text-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">
                    Light Background Lockup
                  </span>
                  <div className="py-5">
                    <Logo variant="full" theme="light" size="lg" />
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">
                    variant="full" theme="light"
                  </span>
                </div>

                {/* Compact Mark */}
                <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#8da399] uppercase">
                    Compact Brand Mark
                  </span>
                  <div className="py-3">
                    <Logo variant="mark" size="xl" />
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    variant="mark" size="xl"
                  </span>
                </div>

                {/* App Icon Squircle */}
                <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 flex flex-col items-center justify-center text-center gap-3">
                  <span className="text-[10px] font-bold tracking-wider text-[#8da399] uppercase">
                    App Icon Squircle
                  </span>
                  <div className="py-2">
                    <Logo variant="app-icon" size="lg" />
                  </div>
                  <span className="text-[11px] text-neutral-400 font-mono">
                    variant="app-icon" (iOS / Android)
                  </span>
                </div>
              </div>
            </div>

            {/* 1.2 CENTRALIZED COLOR TOKENS */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white font-display">
                  1.2 Centralized Color Tokens
                </h3>
                <span className="text-[11px] text-neutral-400">
                  Click any swatch to copy HEX code
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                {colorTokens.map((token) => (
                  <div
                    key={token.name}
                    onClick={() => copyToClipboard(token.hex, token.name)}
                    className="group p-3 rounded-xl bg-[#0c1815] border border-white/10 hover:border-brand-slate transition-all cursor-pointer flex flex-col justify-between"
                  >
                    <div
                      className="w-full h-14 rounded-lg mb-2.5 shadow-inner flex items-center justify-center transition-transform group-hover:scale-[1.02]"
                      style={{ backgroundColor: token.hex }}
                    >
                      {copiedToken === token.name ? (
                        <span
                          className={`text-[11px] font-bold px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1 ${
                            token.textDark ? 'bg-black text-white' : 'bg-white text-black'
                          }`}
                        >
                          <Check className="w-3 h-3 text-emerald-500" /> Copied!
                        </span>
                      ) : (
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Copy
                            className={`w-3.5 h-3.5 ${
                              token.textDark ? 'text-black/60' : 'text-white/80'
                            }`}
                          />
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{token.name}</span>
                        <span className="text-[11px] font-mono font-semibold text-neutral-400">
                          {token.hex}
                        </span>
                      </div>
                      <div className="text-[10px] text-[#8da399] font-mono mt-0.5">
                        {token.variable}
                      </div>
                      <div className="text-[10px] text-neutral-400 mt-1">{token.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 1.3 TYPOGRAPHY SYSTEM */}
            <div>
              <h3 className="text-sm font-bold text-white font-display mb-3">
                1.3 Typography Scale (Plus Jakarta Sans & Inter)
              </h3>
              <div className="bg-[#f9f6f1] text-neutral-900 rounded-2xl p-6 sm:p-8 border border-neutral-200">
                <div className="space-y-6">
                  {/* Display Hero */}
                  <div className="border-b border-neutral-200 pb-5">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                      Display Hero • 68px / 4.25rem • Weight 800 • Tracking -0.035em
                    </span>
                    <div className="text-display-hero font-extrabold text-neutral-900">
                      Your Reviews. Your Reputation.{' '}
                      <span className="text-[#64788e]">One Bro.</span>
                    </div>
                  </div>

                  {/* Heading 1 */}
                  <div className="border-b border-neutral-200 pb-5">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                      Heading 1 • 52px / 3.25rem • Weight 700 • Tracking -0.03em
                    </span>
                    <Heading level="h1" theme="light" accentText="In one place.">
                      Everything your reputation needs.
                    </Heading>
                  </div>

                  {/* Heading 2 */}
                  <div className="border-b border-neutral-200 pb-5">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                      Heading 2 • 36px / 2.25rem • Weight 700 • Tracking -0.025em
                    </span>
                    <Heading level="h2" theme="light" accentText="Simpler on the surface.">
                      More powerful underneath.
                    </Heading>
                  </div>

                  {/* Heading 3 */}
                  <div className="border-b border-neutral-200 pb-5">
                    <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                      Heading 3 • 22px / 1.4rem • Weight 600 • Tracking -0.015em
                    </span>
                    <Heading level="h3" theme="light">
                      Reputation Overview & AI Response Engine
                    </Heading>
                  </div>

                  {/* Body & Caption */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                        Body Regular • 16px / 1rem • Weight 400 • 1.6 line-height
                      </span>
                      <p className="text-body text-neutral-700">
                        Manage reviews, collect more feedback, reply with AI, understand what customers are saying, and grow your business — all in one simple platform.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 block mb-1">
                        Eyebrow & Metric • Tracked Uppercase
                      </span>
                      <Eyebrow theme="light" className="mb-2">
                        REPUTATION MANAGEMENT, REIMAGINED
                      </Eyebrow>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold font-display text-neutral-900">4.7</span>
                        <span className="text-amber-500 font-bold text-xl">★</span>
                        <span className="text-xs text-neutral-500 font-medium">Metric Score</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================================
          02. LAYOUT FOUNDATIONS
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '02') && (
        <section id="section-layout" className="py-14 bg-[#081715] border-b border-white/10">
          <Container size="lg">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">02</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">LAYOUT FOUNDATIONS</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Spacing Scale, Radii & Shadows
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                Systematic rules ensuring rhythm, generous breathing room, and restrained depth.
              </p>
            </div>

            {/* 2.1 SPACING SCALE */}
            <div className="mb-10">
              <h3 className="text-sm font-bold text-white font-display mb-3">
                2.1 Systematic Spacing Scale (4px to 120px)
              </h3>
              <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono">
                  {spacingScale.map((space) => (
                    <div
                      key={space.name}
                      className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/5"
                    >
                      <span className="text-[#8da399] font-bold">{space.name}</span>
                      <span className="text-white font-semibold">
                        {space.px} ({space.rem})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2.2 RADIUS & SHADOWS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Border Radius */}
              <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10">
                <h3 className="text-sm font-bold text-white font-display mb-3">
                  2.2 Border Radius Tokens
                </h3>
                <div className="space-y-3 text-xs">
                  {radiusTokens.map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/5"
                    >
                      <div>
                        <span className="font-bold text-white mr-2">{r.name}</span>
                        <span className="text-neutral-400 text-[11px]">{r.desc}</span>
                      </div>
                      <span className="font-mono text-brand-slate-light font-semibold">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shadow System */}
              <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10">
                <h3 className="text-sm font-bold text-white font-display mb-3">
                  2.3 Shadow & Depth Tokens
                </h3>
                <div className="space-y-3 text-xs">
                  {shadowTokens.map((s) => (
                    <div
                      key={s.name}
                      className="flex items-center justify-between p-2.5 rounded bg-black/40 border border-white/5"
                    >
                      <div>
                        <span className="font-bold text-white mr-2">{s.name}</span>
                        <span className="text-neutral-400 text-[11px]">{s.desc}</span>
                      </div>
                      <span className="font-mono text-[#8da399] text-[11px]">
                        {s.token}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================================
          03. CORE UI PRIMITIVES
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '03') && (
        <section id="section-core-ui" className="py-14 bg-[#071615] border-b border-white/10">
          <Container size="lg">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">03</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">CORE UI COMPONENTS</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Buttons, Badges, Ratings, Dividers & Cards
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                Atomic components crafted for high readability, responsive states, and accessibility.
              </p>
            </div>

            {/* 3.1 BUTTONS & STATES */}
            <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 mb-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">
                3.1 Button Variants & States
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary-pill" size="md" withArrow>
                  Primary Pill
                </Button>
                <Button variant="dark-pill" size="md" withArrow>
                  Dark Pill
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
                  Small (sm)
                </Button>
                <Button variant="primary-pill" size="lg" withArrow>
                  Large (lg)
                </Button>
                <Button variant="primary-pill" size="md" disabled>
                  Disabled State
                </Button>
              </div>
            </div>

            {/* 3.2 BADGES & TREND PILLS */}
            <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 mb-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">
                3.2 Badges & Trend Indicators
              </h3>

              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="success">Replied</Badge>
                <Badge variant="warning">Pending Action</Badge>
                <Badge variant="danger">Escalated</Badge>
                <Badge variant="slate">AI Reply</Badge>
                <Badge variant="neutral">Verified Customer</Badge>
                <Badge variant="trend-up">+12% vs last month</Badge>
                <Badge variant="trend-down">-4% response time</Badge>
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-xs text-neutral-400 mr-2">Topic Tags:</span>
                <TopicTag label="Ambience" count={42} sentiment="positive" />
                <TopicTag label="Food Quality" count={89} sentiment="positive" />
                <TopicTag label="Wait Time" count={14} sentiment="negative" />
                <TopicTag label="Valet Parking" count={8} sentiment="neutral" />
              </div>
            </div>

            {/* 3.3 RATINGS & DIVIDERS */}
            <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 mb-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">
                3.3 Ratings & Divider Separators
              </h3>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <RatingStars rating={5} size="lg" />
                  <span className="text-xs text-neutral-300 font-semibold">5.0 Star</span>
                </div>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4.7} size="lg" showScore />
                  <span className="text-xs text-neutral-300 font-semibold">(Mockup Standard)</span>
                </div>
                <div className="flex items-center gap-2">
                  <RatingStars rating={4} size="md" />
                  <span className="text-xs text-neutral-400">4.0 Average</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-neutral-400 block mb-1">Divider (Dark Mode):</span>
                <Divider theme="dark" />
              </div>
            </div>

            {/* 3.4 CARD SURFACE SYSTEM */}
            <div className="p-5 rounded-2xl bg-[#0c1815] border border-white/10 space-y-4">
              <h3 className="text-sm font-bold text-white font-display">
                3.4 Card Surface Categories (Standard, Warm, Flow, Dark)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card variant="default">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">
                    Standard Card
                  </span>
                  <p className="text-sm font-bold text-neutral-900 mt-1.5">Clean White Surface</p>
                  <p className="text-xs text-neutral-600 mt-1">Light border and subtle 2-layer shadow.</p>
                </Card>

                <Card variant="warm">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">
                    Warm Card
                  </span>
                  <p className="text-sm font-bold text-neutral-900 mt-1.5">Warm Neutral Fill</p>
                  <p className="text-xs text-neutral-600 mt-1">Soft #FDFCFB fill with warm border.</p>
                </Card>

                <Card variant="flow">
                  <span className="text-[10px] font-bold text-neutral-500 uppercase">
                    Flow Step Card
                  </span>
                  <p className="text-sm font-bold text-neutral-900 mt-1.5">Platform Step Sheen</p>
                  <p className="text-xs text-neutral-600 mt-1">Subtle gradient sheen for feature cards.</p>
                </Card>

                <Card variant="dark">
                  <span className="text-[10px] font-bold text-[#8da399] uppercase">
                    Dark Elevated Card
                  </span>
                  <p className="text-sm font-bold text-white mt-1.5">Deep Green Elevated</p>
                  <p className="text-xs text-neutral-400 mt-1">Subtle metallic rim border on dark.</p>
                </Card>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================================
          04. PRODUCT UI LANGUAGE
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '04') && (
        <section id="section-product-ui" className="py-14 bg-[#081715] border-b border-white/10">
          <Container size="xl">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">04</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">PRODUCT UI LANGUAGE</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Product Application Components & State Models
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                The visual language for the ReviewBro SaaS application, including dashboard shell, metric cards, reviews, contextual AI responder, sentiment distribution, and recommendations.
              </p>
            </div>

            {/* 4.1 FULL INTERACTIVE DASHBOARD SHELL */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-slate-light" />
                  4.1 Interactive Product Dashboard Shell
                </h3>
                <span className="text-[11px] text-neutral-400">
                  Interactive tabs & AI reply expansion
                </span>
              </div>
              <DashboardShell interactive={true} />
            </div>

            {/* 4.2 INDIVIDUAL PRODUCT COMPONENTS (METRICS, REVIEWS, RECOMMENDATIONS, AI REPLY) */}
            <div className="mb-12 space-y-6">
              <h3 className="text-sm font-bold text-white font-display">
                4.2 Individual Product UI Components
              </h3>

              {/* Metric Cards Row */}
              <div>
                <span className="text-xs text-neutral-400 block mb-2 font-mono">
                  &lt;MetricCard /&gt; — Overview Metrics
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SAMPLE_METRICS.map((m) => (
                    <MetricCard
                      key={m.id}
                      label={m.label}
                      value={m.value}
                      unit={m.unit}
                      change={m.change}
                      changePositive={m.changePositive}
                    />
                  ))}
                </div>
              </div>

              {/* Review Items */}
              <div>
                <span className="text-xs text-neutral-400 block mb-2 font-mono">
                  &lt;ReviewItem /&gt; — Multi-Platform Customer Feedback
                </span>
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
                    />
                  ))}
                </div>
              </div>

              {/* AI Reply & Recommendations Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {/* AI Reply Card */}
                <div>
                  <span className="text-xs text-neutral-400 block mb-2 font-mono">
                    &lt;AIReplyCard /&gt; — Contextual Review Responder
                  </span>
                  <AIReplyCard />
                </div>

                {/* Recommendations */}
                <div className="space-y-4">
                  <span className="text-xs text-neutral-400 block mb-2 font-mono">
                    &lt;RecommendationCard /&gt; — Actionable Growth & Care Insights
                  </span>
                  {SAMPLE_RECOMMENDATIONS.map((rec) => (
                    <RecommendationCard
                      key={rec.id}
                      title={rec.title}
                      description={rec.description}
                      impact={rec.impact}
                      category={rec.category}
                      actionLabel={rec.actionLabel}
                    />
                  ))}
                </div>
              </div>

              {/* Sentiment Engine */}
              <div className="p-5 rounded-2xl bg-white text-neutral-900 border border-neutral-200">
                <span className="text-xs text-neutral-400 block mb-2 font-mono">
                  &lt;SentimentBar /&gt; — Multi-Platform Natural Language Analysis
                </span>
                <SentimentBar positive={68} neutral={24} negative={8} />
              </div>
            </div>

            {/* 4.3 PHONE MOCKUP */}
            <div>
              <h3 className="text-sm font-bold text-white font-display mb-3">
                4.3 Mobile Product Interface (&lt;PhoneMockup /&gt;)
              </h3>
              <div className="p-6 rounded-2xl bg-[#0c1815] border border-white/10 flex justify-center">
                <PhoneMockup />
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* =====================================================================
          05. COMPOSITE COMPONENT EXAMPLES
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '05') && (
        <section id="section-composites" className="py-14 bg-[#071615] border-b border-white/10">
          <Container size="xl">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">05</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">COMPOSITE COMPONENT EXAMPLES</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Capability Flow & Comparison Components
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                These sections demonstrate reusable composite components ready for Phase 2 implementation.
              </p>
            </div>

            {/* 5.1 PRODUCT CAPABILITY FLOW EXAMPLE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1815] border border-white/10 mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">
                  Composite Example: 5-Step Platform Capability Flow
                </span>
                <span className="text-[11px] text-neutral-400">
                  Reusable &lt;PlatformFlowCard /&gt; sequence
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
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

            {/* 5.2 COMPARISON COMPONENT EXAMPLE */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0c1815] border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">
                  Composite Example: Traditional Tools vs. ReviewBro Matrix
                </span>
                <span className="text-[11px] text-neutral-400">
                  Reusable &lt;ComparisonCard /&gt; set
                </span>
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
          </Container>
        </section>
      )}

      {/* =====================================================================
          06. SURFACE & THEME TESTS
          ===================================================================== */}
      {(activeTab === 'all' || activeTab === '06') && (
        <section id="section-surfaces" className="py-14 bg-[#081715] border-b border-white/10">
          <Container size="lg">
            <div className="mb-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#8da399] uppercase">06</span>
                <span className="text-white/30">/</span>
                <Eyebrow theme="dark">SURFACE & THEME TESTS</Eyebrow>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
                Background & Surface System
              </h2>
              <p className="text-xs text-neutral-400 mt-1 max-w-2xl">
                Side-by-side surface tests demonstrating the token relationship between dark hero, warm neutral, crisp white, and dark elevated surfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Surface 1: Hero Deep Green */}
              <div className="rounded-2xl bg-hero-deep-green p-5 border border-white/10 shadow-surface-elevated text-white flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#8da399]">
                    Surface 1
                  </span>
                  <h4 className="text-sm font-bold font-display mt-1">
                    .bg-hero-deep-green
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1.5 leading-relaxed">
                    Rich pine forest dark green (#071615) with radial metallic sheen.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8da399] font-mono">
                  <span>Hero Base</span>
                  <span>#071615</span>
                </div>
              </div>

              {/* Surface 2: Soft Warm Neutral */}
              <div className="rounded-2xl bg-section-neutral p-5 border border-neutral-300 shadow-card-subtle text-neutral-900 flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                    Surface 2
                  </span>
                  <h4 className="text-sm font-bold font-display mt-1 text-neutral-900">
                    .bg-section-neutral
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    Welcoming off-white (#F9F6F1) for platform breathing room.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Platform BG</span>
                  <span>#F9F6F1</span>
                </div>
              </div>

              {/* Surface 3: Clean White */}
              <div className="rounded-2xl bg-white p-5 border border-neutral-200 shadow-card-subtle text-neutral-900 flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
                    Surface 3
                  </span>
                  <h4 className="text-sm font-bold font-display mt-1 text-neutral-900">
                    .bg-section-white
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                    High-contrast clean white (#FFFFFF) for cards and inputs.
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Cards & Inputs</span>
                  <span>#FFFFFF</span>
                </div>
              </div>

              {/* Surface 4: Dark Elevated */}
              <div className="rounded-2xl bg-[#0c1815] p-5 border border-white/10 shadow-surface-elevated text-white flex flex-col justify-between min-h-[200px]">
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-slate-light">
                    Surface 4
                  </span>
                  <h4 className="text-sm font-bold font-display mt-1">
                    .bg-section-dark
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                    Dark container (#0B1715) with subtle metallic rim highlight.
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8da399] font-mono">
                  <span>Sidebar & Mockups</span>
                  <span>#0B1715</span>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* --- INTERNAL DESIGN SYSTEM FOOTER --- */}
      <footer className="py-8 bg-[#050f0e] border-t border-white/10 text-xs text-neutral-400">
        <Container size="lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Logo theme="dark" size="sm" markOnly />
              <span className="font-semibold text-white">ReviewBro Design System & Product UI</span>
              <span className="text-white/20">•</span>
              <span className="text-[#8da399]">Phase 1 Foundation Refinement</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Ready for Phase 2 Landing Page Implementation</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
