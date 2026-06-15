import { lazy, Suspense } from 'react'

const LottieInner = lazy(() => import('./LottieInner'))

interface LottiePlayerProps {
  src?: string
  className?: string
  loop?: boolean
  autoplay?: boolean
  style?: React.CSSProperties
}

export function LottiePlayer({
  src,
  className,
  loop = true,
  autoplay = true,
  style,
}: LottiePlayerProps) {
  if (!src) return null

  return (
    <div className={'lottie-player ' + (className ?? '')} style={style} aria-hidden="true">
      <Suspense fallback={null}>
        <LottieInner src={src} loop={loop} autoplay={autoplay} />
      </Suspense>
    </div>
  )
}
