import React from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import {
  PRIMARY_FOUNDER,
  CO_FOUNDERS,
  PRIMARY_FOUNDER_VENTURES,
  PRIMARY_FOUNDER_SOCIALS,
  FOUNDER_SECTION_BG,
} from '@/lib/constants'

export interface FoundingTeamProps {
  className?: string
}

export const FoundingTeam: React.FC<FoundingTeamProps> = ({ className }) => {
  return (
    <section
      id="team"
      className={`mt-20 sm:mt-28 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-white/10 shadow-2xl relative overflow-hidden scroll-mt-24 ${className || ''}`}
      style={{ backgroundColor: FOUNDER_SECTION_BG }}
    >
      {/* Ambient subtle lighting & satin gradient (One tonal step lighter, softer & breathable) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.04)_0%,transparent_75%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_40%,rgba(0,0,0,0.12)_100%)] pointer-events-none" />

      {/* Section Header (Soft white & neutral text on breathable green canvas) */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 relative z-10">
        <Eyebrow theme="dark" className="mb-3">
          THE PEOPLE BEHIND REVIEWBRO
        </Eyebrow>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Built by people who care about better businesses.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl mx-auto">
          Four people. Different strengths. One shared goal.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 relative z-10">
        {/* LEVEL 1: PRIMARY FOUNDER (Deepest card in section, slightly deeper than section bg) */}
        <div
          className="group rounded-2xl border border-white/10 p-6 sm:p-8 lg:p-10 sm:flex sm:flex-row sm:items-center gap-7 lg:gap-10 shadow-surface-elevated hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-white"
          style={{ backgroundColor: PRIMARY_FOUNDER.bgColor }}
        >
          {/* Ambient subtle lighting & satin depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.03)_0%,transparent_80%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

          {/* Portrait Area / Compact Polished Frame (occupies ~25-30% card width on desktop/tablet, compact on mobile) */}
          <div
            className={`w-44 sm:w-52 md:w-56 lg:w-[300px] aspect-[4/5] mx-auto sm:mx-0 shrink-0 rounded-xl overflow-hidden relative bg-black/30 border border-white/10 flex flex-col items-center justify-center ${
              PRIMARY_FOUNDER.imageSrc ? 'p-0' : 'p-6'
            } select-none z-10 shadow-inner`}
          >
            {PRIMARY_FOUNDER.imageSrc ? (
              <img
                src={PRIMARY_FOUNDER.imageSrc}
                alt={`${PRIMARY_FOUNDER.name} - ${PRIMARY_FOUNDER.title}`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            ) : (
              <>
                {/* Ambient subtle decorative background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                    {PRIMARY_FOUNDER.initials}
                  </span>
                </div>

                {/* Micro Tag */}
                <span className="mt-3 text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-300 bg-white/10 backdrop-blur-xs px-3 py-0.5 rounded-full border border-white/15 relative z-10">
                  Founder & CEO
                </span>
              </>
            )}
          </div>

          {/* Content Area (Breathing room, name and role as primary visual anchor) */}
          <div className="flex-1 flex flex-col justify-center mt-6 sm:mt-0 relative z-10 sm:pl-1 lg:pl-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-slate-light bg-white/10 border border-white/10 px-2.5 py-1 rounded-md">
                {PRIMARY_FOUNDER.title}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white tracking-tight">
              {PRIMARY_FOUNDER.name}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-brand-slate-light mt-1.5 pb-3.5 border-b border-white/10">
              {PRIMARY_FOUNDER.focus}
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mt-3.5 max-w-xl">
              {PRIMARY_FOUNDER.description}
            </p>

            {/* Also Building Section */}
            <div className="mt-4 pt-3.5 border-t border-white/10">
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-slate-light mb-2">
                ALSO BUILDING
              </p>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm">
                {PRIMARY_FOUNDER_VENTURES.map((venture, idx) => (
                  <React.Fragment key={venture.name}>
                    {idx > 0 && <span className="text-white/20 select-none">·</span>}
                    {venture.href ? (
                      <a
                        href={venture.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-200 hover:text-white underline-offset-4 hover:underline transition-colors duration-200 font-medium"
                      >
                        {venture.name}
                      </a>
                    ) : (
                      <span className="text-neutral-300 font-medium">
                        {venture.name}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Social Links with subtle localized halo */}
            <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/10">
              {PRIMARY_FOUNDER_SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${PRIMARY_FOUNDER.name} on ${social.name}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-brand-slate-light/40 hover:bg-white/[0.08] hover:shadow-[0_0_12px_rgba(137,157,176,0.22)] transition-all duration-300 group/social"
                >
                  {social.name === 'LinkedIn' ? (
                    <svg
                      className="w-4 h-4 shrink-0 fill-current text-neutral-300 group-hover/social:text-white transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.62 1.62 0 0 0 0-3.24 1.62 1.62 0 0 0 0 3.24M7.86 18.5v-8.37H5.07v8.37h2.79z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3.5 h-3.5 shrink-0 fill-current text-neutral-300 group-hover/social:text-white transition-colors"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  <span className="text-xs font-medium text-neutral-300 group-hover/social:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* LEVEL 2: THREE CO-FOUNDER CARDS (Slightly lighter than Prithvi card, equal to each other) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CO_FOUNDERS.map((member) => (
            <div
              key={member.id}
              className="group rounded-2xl border border-white/10 p-5 sm:p-6 flex flex-col justify-between shadow-surface-elevated hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-white"
              style={{ backgroundColor: member.bgColor }}
            >
              {/* Ambient subtle lighting & satin depth */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,255,255,0.03)_0%,transparent_80%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none" />

              <div className="relative z-10">
                {/* Portrait Area / Polished Placeholder Frame (occupies roughly 45-50% card height) */}
                <div
                  className={`w-full max-w-[200px] sm:max-w-[210px] md:max-w-[170px] lg:max-w-[200px] aspect-[4/5] mx-auto rounded-xl overflow-hidden mb-5 relative bg-black/30 border border-white/10 flex flex-col items-center justify-center ${
                    member.imageSrc ? 'p-0' : 'p-4'
                  } select-none shadow-inner`}
                >
                  {member.imageSrc ? (
                    <img
                      src={member.imageSrc}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      {/* Ambient subtle decorative background texture */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />

                      {/* Monogram Badge */}
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                        <span className="font-display font-extrabold text-base text-white tracking-tight">
                          {member.initials}
                        </span>
                      </div>

                      {/* Micro Tag */}
                      <span className="mt-2.5 text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-300 bg-white/10 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/15 relative z-10">
                        Co-Founder
                      </span>
                    </>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                  {member.name}
                </h3>

                {/* Title (Consistent height for perfect divider alignment) */}
                <div className="min-h-[2.25rem] flex items-center mt-1">
                  <p className="text-xs font-bold text-brand-slate-light uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>

                {/* Focus (Consistent height for perfect divider alignment) */}
                <div className="min-h-[2.25rem] flex items-center border-b border-white/10 pb-2">
                  <p className="text-xs font-medium text-neutral-300">
                    {member.focus}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-3 pt-1 relative z-10">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Closing Line */}
      <div className="mt-12 text-center text-xs text-neutral-400 font-medium relative z-10">
        <span>Different strengths. One direction. </span>
        <span className="font-bold text-neutral-200">ReviewBro.</span>
      </div>
    </section>
  )
}
