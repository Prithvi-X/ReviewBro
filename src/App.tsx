import { useState, useEffect } from 'react'
import { LandingPage } from '@/pages/LandingPage'
import { DesignSystemShowcase } from '@/showcase/DesignSystemShowcase'

export function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname + window.location.hash
  )

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname + window.location.hash)
    }
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('hashchange', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('hashchange', handlePopState)
    }
  }, [])

  // Development-only route for internal design-system inspection
  const isDevDesignSystem =
    currentPath.includes('/dev/design-system') ||
    currentPath.includes('#/dev/design-system')

  if (isDevDesignSystem) {
    return <DesignSystemShowcase />
  }

  // The root route "/" is exclusively the real ReviewBro landing page
  return <LandingPage />
}

export default App
