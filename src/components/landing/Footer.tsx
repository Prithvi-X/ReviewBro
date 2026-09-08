import React from 'react'
import { BRAND } from '@/lib/constants'
import { Linkedin, Twitter, Youtube } from 'lucide-react'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`w-full bg-[#f3f6f8] border-t border-neutral-200/80 py-10 px-4 sm:px-6 lg:px-8 text-neutral-900 ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
        {/* Brand Tagline */}
        <div className="text-center md:text-left font-semibold tracking-wider uppercase text-[11px] text-neutral-600">
          REAL FEEDBACK. REAL BUSINESS. A BRIGHTER TOMORROW.
        </div>

        {/* Domain & Copyright */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-neutral-800 text-sm">{BRAND.domain}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} ReviewBro. All rights reserved.</span>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4 text-neutral-600">
          <a
            href={BRAND.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 transition-colors"
            aria-label="ReviewBro on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={BRAND.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 transition-colors"
            aria-label="ReviewBro on X"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={BRAND.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 transition-colors"
            aria-label="ReviewBro on YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
