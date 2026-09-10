import React from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { PRIMARY_FOUNDER, CO_FOUNDERS } from '@/lib/constants'

export interface FoundingTeamProps {
  className?: string
}

export const FoundingTeam: React.FC<FoundingTeamProps> = ({ className }) => {
  return (
    <div id="team" className={`mt-24 sm:mt-32 pt-4 scroll-mt-24 ${className || ''}`}>
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <Eyebrow theme="light" className="mb-3">
          THE PEOPLE BEHIND REVIEWBRO
        </Eyebrow>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
          Built by people who care about better businesses.
        </h2>
        <p className="mt-3.5 text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mx-auto">
          Four people. Different strengths. One shared goal.
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        {/* LEVEL 1: PRIMARY FOUNDER (Wide Horizontal Card with Signature Theme Dark Green Border) */}
        <div className="group bg-white rounded-2xl border border-brand-deep-green/65 hover:border-brand-deep-green p-6 sm:p-8 lg:p-10 sm:flex sm:flex-row sm:items-center gap-7 lg:gap-10 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300">
          {/* Portrait Area / Polished Placeholder (Consistent 4:5 Portrait Ratio) */}
          <div
            className={`w-full sm:w-60 md:w-68 lg:w-76 aspect-[4/5] shrink-0 rounded-xl overflow-hidden relative bg-gradient-to-b from-[#f3f6f8] via-[#ebf0f3] to-[#e2e8ec] border border-neutral-200/70 flex flex-col items-center justify-center ${
              PRIMARY_FOUNDER.imageSrc ? 'p-0' : 'p-6'
            } select-none`}
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(100,120,142,0.14)_0%,transparent_70%)] pointer-events-none" />

                {/* Monogram Badge */}
                <div className="w-20 h-20 rounded-full bg-white shadow-xs border border-neutral-200/90 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                  <span className="font-display font-extrabold text-2xl text-neutral-800 tracking-tight">
                    {PRIMARY_FOUNDER.initials}
                  </span>
                </div>

                {/* Micro Tag */}
                <span className="mt-3.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600 bg-white/80 backdrop-blur-xs px-3 py-0.5 rounded-full border border-neutral-200/70 relative z-10">
                  Founder & CEO
                </span>
              </>
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 flex flex-col justify-center mt-6 sm:mt-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-slate bg-brand-slate/10 px-2.5 py-1 rounded-md">
                {PRIMARY_FOUNDER.title}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-neutral-900 tracking-tight group-hover:text-neutral-950 transition-colors">
              {PRIMARY_FOUNDER.name}
            </h3>

            <p className="text-sm sm:text-base font-semibold text-brand-slate mt-2 pb-4 border-b border-neutral-100">
              {PRIMARY_FOUNDER.focus}
            </p>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-4 max-w-xl">
              {PRIMARY_FOUNDER.description}
            </p>
          </div>
        </div>

        {/* LEVEL 2: THREE CO-FOUNDER CARDS (1 Row on Desktop / Balanced Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {CO_FOUNDERS.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl border border-neutral-200/80 p-5 sm:p-6 flex flex-col justify-between hover:shadow-md hover:-translate-y-1 hover:border-brand-slate/40 transition-all duration-300"
            >
              <div>
                {/* Portrait Area / Polished Placeholder */}
                <div className="aspect-[4/5] w-full rounded-xl overflow-hidden mb-5 relative bg-gradient-to-b from-[#f3f6f8] via-[#ebf0f3] to-[#e2e8ec] border border-neutral-200/70 flex flex-col items-center justify-center p-4 select-none">
                  {member.imageSrc ? (
                    <img
                      src={member.imageSrc}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      {/* Ambient subtle decorative background texture */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(100,120,142,0.12)_0%,transparent_70%)] pointer-events-none" />

                      {/* Monogram Badge */}
                      <div className="w-16 h-16 rounded-full bg-white shadow-xs border border-neutral-200/90 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                        <span className="font-display font-extrabold text-lg text-neutral-800 tracking-tight">
                          {member.initials}
                        </span>
                      </div>

                      {/* Micro Tag */}
                      <span className="mt-3 text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-600 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-neutral-200/70 relative z-10">
                        Co-Founder
                      </span>
                    </>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold font-display text-neutral-900 tracking-tight group-hover:text-neutral-950 transition-colors">
                  {member.name}
                </h3>

                {/* Title (Consistent height for perfect divider alignment) */}
                <div className="min-h-[2.25rem] flex items-center mt-1">
                  <p className="text-xs font-semibold text-brand-slate uppercase tracking-wider">
                    {member.title}
                  </p>
                </div>

                {/* Focus (Consistent height for perfect divider alignment) */}
                <div className="min-h-[2.25rem] flex items-center border-b border-neutral-100 pb-2">
                  <p className="text-xs font-medium text-neutral-500">
                    {member.focus}
                  </p>
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs text-neutral-600 leading-relaxed mt-3 pt-1">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Closing Line */}
      <div className="mt-12 text-center text-xs text-neutral-600 font-medium">
        <span>Different strengths. One direction. </span>
        <span className="font-bold text-neutral-700">ReviewBro.</span>
      </div>
    </div>
  )
}
