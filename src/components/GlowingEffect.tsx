import { memo, useCallback, useEffect, useRef, type CSSProperties } from 'react'

type GlowingEffectProps = {
  borderWidth?: number
  disabled?: boolean
  inactiveZone?: number
  opacity?: number
  proximity?: number
  spread?: number
  variant?: 'default' | 'white'
}

const glowGradients = {
  default: `radial-gradient(
    var(--glow-size) circle at var(--x) var(--y),
    rgba(221, 123, 187, 0.95) 0%,
    rgba(215, 159, 30, 0.7) 18%,
    rgba(90, 146, 44, 0.56) 34%,
    rgba(76, 120, 148, 0.34) 52%,
    transparent 72%
  )`,
  white: `radial-gradient(
    var(--glow-size) circle at var(--x) var(--y),
    rgba(255,255,255,0.95) 0%,
    rgba(255,255,255,0.45) 34%,
    rgba(255,255,255,0.16) 52%,
    transparent 72%
  )`,
}

const GlowingEffect = memo(
  ({
    borderWidth = 1,
    disabled = false,
    inactiveZone = 0,
    opacity = 1,
    proximity = 120,
    spread = 28,
    variant = 'default',
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lastPosition = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>(0)

    const handleMove = useCallback(
      (event?: PointerEvent | MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current || disabled) return

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current
          if (!element) return

          const { left, top, width, height } = element.getBoundingClientRect()
          const mouseX = event?.x ?? lastPosition.current.x
          const mouseY = event?.y ?? lastPosition.current.y
          const localX = Math.min(width, Math.max(0, mouseX - left))
          const localY = Math.min(height, Math.max(0, mouseY - top))

          if (event) {
            lastPosition.current = { x: mouseX, y: mouseY }
          }

          const center = [left + width * 0.5, top + height * 0.5]
          const distanceFromCenter = Math.hypot(mouseX - center[0], mouseY - center[1])
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty('--active', '0')
            return
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity

          element.style.setProperty('--active', isActive ? String(opacity) : '0')

          if (!isActive) return

          element.style.setProperty('--x', `${localX}px`)
          element.style.setProperty('--y', `${localY}px`)
        })
      },
      [disabled, inactiveZone, opacity, proximity],
    )

    useEffect(() => {
      if (disabled) return undefined

      const handlePointerMove = (event: PointerEvent) => handleMove(event)
      const handleScroll = () => handleMove()

      document.body.addEventListener('pointermove', handlePointerMove, { passive: true })
      window.addEventListener('scroll', handleScroll, { passive: true })

      return () => {
        document.body.removeEventListener('pointermove', handlePointerMove)
        window.removeEventListener('scroll', handleScroll)

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [disabled, handleMove])

    const style = {
      '--active': '0',
      '--glow-border-width': `${borderWidth}px`,
      '--glow-size': `${Math.max(90, spread * 5)}px`,
      '--x': '50%',
      '--y': '50%',
      background: glowGradients[variant],
      filter: variant === 'white' ? 'drop-shadow(0 0 5px rgba(255,255,255,0.2))' : 'drop-shadow(0 0 6px rgba(167,139,250,0.22))',
      padding: 'var(--glow-border-width)',
      WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
    } as CSSProperties

    return (
      <div
        ref={containerRef}
        className="pointer-events-none absolute -inset-px z-20 rounded-[inherit] opacity-[var(--active)] transition-opacity duration-300"
        style={style}
      />
    )
  },
)

GlowingEffect.displayName = 'GlowingEffect'

export default GlowingEffect
