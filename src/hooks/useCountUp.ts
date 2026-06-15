import { useEffect, useState } from 'react'

export function useCountUp(
  target: number,
  duration: number = 1200,
  enabled: boolean = true
): number {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!enabled) return

    // Skip animation for users who prefer reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setValue(target)
      return
    }

    const start = performance.now()
    let raf: number

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(parseFloat((eased * target).toFixed(1)))
      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setValue(target)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, enabled])

  return value
}
