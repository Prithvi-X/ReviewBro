import React from 'react'
import { BRAND } from '@/lib/constants'
import { Linkedin, Twitter, Youtube, Mail } from 'lucide-react'

export interface FooterProps {
  className?: string
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const mailtoUrl = `mailto:${BRAND.contact.email}?subject=${encodeURIComponent(
    BRAND.contact.inquirySubject
  )}&body=${encodeURIComponent(BRAND.contact.inquiryBody)}`

  return (
    <footer
      id="contact"
      className={`w-full bg-[#f3f6f8] border-t border-neutral-200/80 py-10 px-4 sm:px-6 lg:px-8 text-neutral-900 scroll-mt-12 ${className || ''}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
        {/* Brand Tagline & Inquiries */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center md:text-left">
          <span className="font-semibold tracking-wider uppercase text-[11px] text-neutral-600">
            REAL FEEDBACK. REAL BUSINESS. A BRIGHTER TOMORROW.
          </span>
          <span className="hidden sm:inline text-neutral-300">•</span>
          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 font-medium transition-colors"
            aria-label="Contact ReviewBro via email"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{BRAND.contact.email}</span>
          </a>
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
            className="p-1.5 rounded-md hover:text-neutral-950 hover:bg-neutral-200/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label="ReviewBro on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={BRAND.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md hover:text-neutral-950 hover:bg-neutral-200/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label="ReviewBro on X (formerly Twitter)"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={BRAND.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="p-1.5 rounded-md hover:text-neutral-950 hover:bg-neutral-200/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
            aria-label="ReviewBro on YouTube"
          >
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
