import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initializes Lenis smooth kinetic momentum scroll across the landing page.
 * Provides normalized momentum glide on wheel/trackpad and respects prefers-reduced-motion.
 */
export function useLenisScroll() {
  useEffect(() => {
    // Respect reduced motion accessibility
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

    // Expose for smooth anchor target gliding
    ;(window as any).__lenis = lenis

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as any).__lenis
    }
  }, [])
}
