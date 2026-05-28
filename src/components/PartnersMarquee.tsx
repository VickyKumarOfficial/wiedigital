import { useEffect, useRef } from 'react'
import { customerLogos } from '../data/home'

export default function PartnersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)
  const stripRef = useRef<HTMLDivElement>(null)
  const offsetRef = useRef(0)
  const speedRef = useRef(42)
  const targetSpeedRef = useRef(42)
  const stripWidthRef = useRef(0)

  useEffect(() => {
    let animationFrameId = 0
    let previousTime = performance.now()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const measure = () => {
      stripWidthRef.current = stripRef.current?.scrollWidth ?? 0
    }

    const animate = (time: number) => {
      const delta = Math.min(time - previousTime, 48)
      previousTime = time
      const track = trackRef.current
      const stripWidth = stripWidthRef.current

      if (track && stripWidth > 0 && !reduceMotion) {
        speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.075
        offsetRef.current += speedRef.current * (delta / 1000)

        if (offsetRef.current >= stripWidth) {
          offsetRef.current -= stripWidth
        }

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`
      }

      animationFrameId = window.requestAnimationFrame(animate)
    }

    measure()
    window.addEventListener('resize', measure)
    animationFrameId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', measure)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const setTargetSpeed = (speed: number) => {
    targetSpeedRef.current = speed
  }

  return (
    <section className="relative mx-auto w-[80%] min-w-0 py-16 text-center md:py-10">
      <p className="text-sm font-medium tracking-wide text-zinc-400">
        Collaborated with forward-thinking teams
      </p>

      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div ref={trackRef} className="flex w-max items-center will-change-transform">
          {[0, 1].map((groupIndex) => (
            <div
              className="flex shrink-0 items-center gap-14 px-7 md:gap-20 md:px-10"
              key={groupIndex}
              ref={groupIndex === 0 ? stripRef : undefined}
            >
              {customerLogos.map((logo) => (
                <div
                  className="group/logo flex h-14 min-w-36 items-center justify-center rounded-2xl border border-white/[0.04] bg-white/[0.015] px-6 transition duration-300 hover:border-white/[0.1] hover:bg-white/[0.045]"
                  key={`${groupIndex}-${logo.name}`}
                  onMouseEnter={() => setTargetSpeed(0)}
                  onMouseLeave={() => setTargetSpeed(42)}
                  onFocus={() => setTargetSpeed(0)}
                  onBlur={() => setTargetSpeed(42)}
                  tabIndex={0}
                >
                  <img
                    className={`${logo.height} w-auto max-w-32 object-contain opacity-45 invert grayscale transition duration-300 group-hover/logo:opacity-75`}
                    src={logo.src}
                    alt={`${logo.name} logo`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
