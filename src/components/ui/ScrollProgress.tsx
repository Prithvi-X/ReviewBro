import React, { useState, useEffect } from 'react'

/**
 * Ambient hairline scroll progress indicator at top of viewport.
 * Provides subtle visual flow and feedback during smooth scrolling.
 */
export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        setProgress(Math.min(1, Math.max(0, scrollY / docHeight)))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (progress <= 0.005) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none origin-left transition-transform duration-75 ease-out"
      style={{
        transform: `scaleX(${progress})`,
        background: 'linear-gradient(90deg, #64788E 0%, #34D399 50%, #64788E 100%)',
        boxShadow: '0 0 8px rgba(52, 211, 153, 0.4)',
      }}
      aria-hidden="true"
    />
  )
}
