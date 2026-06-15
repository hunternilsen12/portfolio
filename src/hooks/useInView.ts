import { useEffect, useRef, useState } from 'react'

export function useInView<T extends Element = Element>(
  options?: IntersectionObserverInit
): [React.RefCallback<T>, boolean] {
  const [inView, setInView] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const ref: React.RefCallback<T> = (node) => {
    if (observerRef.current) {
      observerRef.current.disconnect()
      observerRef.current = null
    }
    if (node) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            setInView(true)
            observerRef.current?.disconnect()
          }
        },
        { threshold: 0.1, ...options }
      )
      observerRef.current.observe(node)
    }
  }

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return [ref, inView]
}
