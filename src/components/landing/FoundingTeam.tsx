import React from 'react'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { FOUNDING_TEAM } from '@/lib/constants'

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
          Four people. Different strengths. One shared goal: make reputation management simpler, smarter, and more useful.
        </p>
      </div>

      {/* 4 Founding Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {FOUNDING_TEAM.map((member) => (
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

                    {/* Refined Monogram Badge */}
                    <div className="w-16 h-16 rounded-full bg-white shadow-xs border border-neutral-200/90 flex items-center justify-center relative z-10 transition-transform duration-300 group-hover:scale-105">
                      <span className="font-display font-extrabold text-lg text-neutral-800 tracking-tight">
                        {member.initials}
                      </span>
                    </div>

                    {/* Clean Portrait Placeholder Slot Indicator */}
                    <span className="mt-3 text-[10px] font-mono font-medium uppercase tracking-wider text-neutral-600 bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-neutral-200/70 relative z-10">
                      Founding Team
                    </span>
                  </>
                )}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold font-display text-neutral-900 tracking-tight group-hover:text-neutral-950 transition-colors">
                {member.name}
              </h3>

              {/* Title */}
              <p className="text-xs font-semibold text-brand-slate uppercase tracking-wider mt-1">
                {member.title}
              </p>

              {/* Focus */}
              <p className="text-xs font-medium text-neutral-500 mt-2.5 pb-2.5 border-b border-neutral-100">
                {member.focus}
              </p>
            </div>

            {/* Short Description */}
            <p className="text-xs text-neutral-600 leading-relaxed mt-3 pt-1">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* Subtle Closing Line */}
      <div className="mt-12 text-center text-xs text-neutral-600 font-medium">
        <span>Different strengths. One direction. </span>
        <span className="font-bold text-neutral-700">ReviewBro.</span>
      </div>
    </div>
  )
}
