import { useState, useEffect, useRef } from 'react'

export default function useCountUp(target, duration = 1800, trigger = true) {
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!trigger) return
    const start     = performance.now()
    const startVal  = 0

    const tick = (now) => {
      const elapsed  = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const ease     = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(startVal + ease * (target - startVal)))

      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [target, duration, trigger])

  return value
}
