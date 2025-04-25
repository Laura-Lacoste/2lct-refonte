'use client'

import { useEffect } from 'react'

export default function ParticlesBackground() {
  useEffect(() => {
    // Charge particles.js uniquement côté client
    import('particles.js').then(() => {
      if (typeof window !== 'undefined' && window.particlesJS) {
        window.particlesJS.load('particles-js', '/particlesjs-config.json', function () {
          console.log('✨ Particles.js config loaded')
        })
      }
    })
  }, [])

  return <div id="particles-js" className="absolute inset-0 w-full h-full z-0 pointer-events-non" />
}
