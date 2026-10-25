import { useState, useEffect } from 'react'

function hasWebGL() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export function use3DSupport() {
  const [enabled, setEnabled] = useState(true)
  const [particleCount, setParticleCount] = useState(400)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSupported = !reducedMotion && hasWebGL()
    const lowEnd = window.innerWidth < 768 || (navigator.hardwareConcurrency ?? 8) <= 4

    setEnabled(isSupported)
    setParticleCount(lowEnd ? 400 : 1500)
  }, [])

  return { enabled, particleCount }
}