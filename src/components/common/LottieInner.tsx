import { useState, useEffect } from 'react'
import Lottie from 'lottie-react'

export default function LottieInner({
  src,
  loop,
  autoplay,
}: {
  src: string
  loop: boolean
  autoplay: boolean
}) {
  const [animData, setAnimData] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false
    fetch(src)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) setAnimData(data)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [src])

  if (!animData) return null
  return <Lottie animationData={animData} loop={loop} autoplay={autoplay} />
}
