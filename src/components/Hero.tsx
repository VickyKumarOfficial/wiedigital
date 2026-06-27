import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import logoDark from '../assets/logo_Dark.png'
import { heroImages, navItems } from '../data/home'
import ContainerScrollAnimation from './ContainerScrollAnimation'

const rotatingTitleWords = ['websites', 'apps', 'SEO', 'social media']

interface Dot {
  x: number
  y: number
  targetOpacity: number
  currentOpacity: number
  opacitySpeed: number
  baseRadius: number
  currentRadius: number
}

const DOT_SPACING = 25
const BASE_OPACITY_MIN = 0.16
const BASE_OPACITY_MAX = 0.28
const BASE_RADIUS = 0.85
const INTERACTION_RADIUS = 150
const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS
const OPACITY_BOOST = 0.56
const RADIUS_BOOST = 2.01
const GRID_CELL_SIZE = Math.max(50, Math.floor(INTERACTION_RADIUS / 1.5))
const BASE_DOT_RGB = { r: 126, g: 129, b: 145 }
const HOVER_DOT_RGB = { r: 246, g: 247, b: 255 }

function DottedHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const gridRef = useRef<Record<string, number[]>>({})
  const canvasSizeRef = useRef({ width: 0, height: 0 })
  const mousePositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null })
  const animationFrameId = useRef<number | null>(null)

  const createDots = useCallback(() => {
    const { width, height } = canvasSizeRef.current
    if (width === 0 || height === 0) return

    const newDots: Dot[] = []
    const newGrid: Record<string, number[]> = {}
    const cols = Math.ceil(width / DOT_SPACING)
    const rows = Math.ceil(height / DOT_SPACING)

    for (let i = 0; i < cols; i += 1) {
      for (let j = 0; j < rows; j += 1) {
        const x = i * DOT_SPACING + DOT_SPACING / 2
        const y = j * DOT_SPACING + DOT_SPACING / 2
        const cellX = Math.floor(x / GRID_CELL_SIZE)
        const cellY = Math.floor(y / GRID_CELL_SIZE)
        const cellKey = `${cellX}_${cellY}`

        if (!newGrid[cellKey]) {
          newGrid[cellKey] = []
        }

        newGrid[cellKey].push(newDots.length)

        const baseOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
        newDots.push({
          x,
          y,
          targetOpacity: baseOpacity,
          currentOpacity: baseOpacity,
          opacitySpeed: Math.random() * 0.005 + 0.002,
          baseRadius: BASE_RADIUS,
          currentRadius: BASE_RADIUS,
        })
      }
    }

    dotsRef.current = newDots
    gridRef.current = newGrid
  }, [])

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const container = canvas.parentElement
    const width = container ? container.clientWidth : window.innerWidth
    const height = container ? container.clientHeight : window.innerHeight

    if (canvas.width !== width || canvas.height !== height || canvasSizeRef.current.width !== width || canvasSizeRef.current.height !== height) {
      canvas.width = width
      canvas.height = height
      canvasSizeRef.current = { width, height }
      createDots()
    }
  }, [createDots])

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    mousePositionRef.current = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height ? { x, y } : { x: null, y: null }
  }, [])

  const handleMouseLeave = useCallback(() => {
    mousePositionRef.current = { x: null, y: null }
  }, [])

  const animateDots = useCallback(function runAnimationFrame() {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    const dots = dotsRef.current
    const grid = gridRef.current
    const { width, height } = canvasSizeRef.current
    const { x: mouseX, y: mouseY } = mousePositionRef.current

    if (!ctx || width === 0 || height === 0) {
      animationFrameId.current = requestAnimationFrame(runAnimationFrame)
      return
    }

    ctx.clearRect(0, 0, width, height)

    const activeDotIndices = new Set<number>()
    if (mouseX !== null && mouseY !== null) {
      const mouseCellX = Math.floor(mouseX / GRID_CELL_SIZE)
      const mouseCellY = Math.floor(mouseY / GRID_CELL_SIZE)
      const searchRadius = Math.ceil(INTERACTION_RADIUS / GRID_CELL_SIZE)

      for (let i = -searchRadius; i <= searchRadius; i += 1) {
        for (let j = -searchRadius; j <= searchRadius; j += 1) {
          const cellKey = `${mouseCellX + i}_${mouseCellY + j}`
          grid[cellKey]?.forEach((dotIndex) => activeDotIndices.add(dotIndex))
        }
      }
    }

    dots.forEach((dot, index) => {
      dot.currentOpacity += dot.opacitySpeed

      if (dot.currentOpacity >= dot.targetOpacity || dot.currentOpacity <= BASE_OPACITY_MIN) {
        dot.opacitySpeed = -dot.opacitySpeed
        dot.currentOpacity = Math.max(BASE_OPACITY_MIN, Math.min(dot.currentOpacity, BASE_OPACITY_MAX))
        dot.targetOpacity = Math.random() * (BASE_OPACITY_MAX - BASE_OPACITY_MIN) + BASE_OPACITY_MIN
      }

      let interactionFactor = 0
      dot.currentRadius = dot.baseRadius

      if (mouseX !== null && mouseY !== null && activeDotIndices.has(index)) {
        const dx = dot.x - mouseX
        const dy = dot.y - mouseY
        const distSq = dx * dx + dy * dy

        if (distSq < INTERACTION_RADIUS_SQ) {
          const distance = Math.sqrt(distSq)
          interactionFactor = Math.max(0, 1 - distance / INTERACTION_RADIUS)
          interactionFactor *= interactionFactor
        }
      }

      const finalOpacity = Math.min(0.9, dot.currentOpacity + interactionFactor * OPACITY_BOOST)
      dot.currentRadius = dot.baseRadius + interactionFactor * RADIUS_BOOST

      const r = Math.round(BASE_DOT_RGB.r + (HOVER_DOT_RGB.r - BASE_DOT_RGB.r) * interactionFactor)
      const g = Math.round(BASE_DOT_RGB.g + (HOVER_DOT_RGB.g - BASE_DOT_RGB.g) * interactionFactor)
      const b = Math.round(BASE_DOT_RGB.b + (HOVER_DOT_RGB.b - BASE_DOT_RGB.b) * interactionFactor)

      ctx.beginPath()
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity.toFixed(3)})`
      ctx.arc(dot.x, dot.y, dot.currentRadius, 0, Math.PI * 2)
      ctx.fill()
    })

    animationFrameId.current = requestAnimationFrame(runAnimationFrame)
  }, [])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    animationFrameId.current = requestAnimationFrame(animateDots)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [animateDots, handleMouseLeave, handleMouseMove, handleResize])

  return (
    <>
      <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-0 opacity-75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_38%,#050507_96%),linear-gradient(to_bottom,transparent_0%,#050507_92%)]"
        aria-hidden="true"
      />
    </>
  )
}

function MenuIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

function Logo() {
  return (
    <img className="h-8 w-auto" src={logoDark} alt="WeDigitize" />
  )
}

function RotatingTitleWord() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeWord = rotatingTitleWords[activeIndex]

  const characters = useMemo(() => {
    if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })

      return Array.from(segmenter.segment(activeWord), (segment) => segment.segment)
    }

    return activeWord.split('')
  }, [activeWord])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % rotatingTitleWords.length)
    }, 2200)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <span className="relative inline-block align-bottom text-white">
      <span className="inline-block h-[1.16em] overflow-hidden">
        <span className="sr-only">{activeWord}</span>
        <span key={activeWord} className="inline-flex whitespace-nowrap" aria-hidden="true">
          {characters.map((character, index) => (
            <span
              className="inline-block animate-[title-flip_650ms_cubic-bezier(0.22,1,0.36,1)_both] leading-none"
              key={`${character}-${index}`}
              style={{ animationDelay: `${(characters.length - index - 1) * 12}ms` }}
            >
              {character === ' ' ? '\u00A0' : character}
            </span>
          ))}
        </span>
      </span>
    </span>
  )
}

function SlidingButtonTextVertical({ defaultText, hoverText }: { defaultText: string; hoverText: string }) {
  return (
    <span className="relative inline-grid h-[1.4em] overflow-hidden">
      <span className="transition-transform duration-300 ease-out group-hover/button:-translate-y-full">
        {defaultText}
      </span>
      <span className="absolute inset-x-0 top-full transition-transform duration-300 ease-out group-hover/button:-translate-y-full">
        {hoverText}
      </span>
    </span>
  )
}

function SlidingButtonTextHorizontal({ defaultText, hoverText }: { defaultText: string; hoverText: string }) {
  return (
    <span className="relative inline-grid h-[1.4em] min-w-full overflow-hidden">
      <span className="flex w-full justify-center whitespace-nowrap transition-transform duration-300 ease-out group-hover/button:-translate-x-full">
        {defaultText}
      </span>
      <span className="absolute inset-0 flex translate-x-full justify-center whitespace-nowrap transition-transform duration-300 ease-out group-hover/button:translate-x-0">
        {hoverText}
      </span>
    </span>
  )
}

const slidingButtonTextVariants = {
  horizontal: SlidingButtonTextHorizontal,
  vertical: SlidingButtonTextVertical,
}

const SlidingButtonText = slidingButtonTextVariants.horizontal
// const SlidingButtonText = slidingButtonTextVariants.vertical

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050507] text-white">
      <style>{`
        @keyframes title-flip {
          0% {
            opacity: 0;
            transform: translateY(-100%) rotateX(75deg);
          }

          55% {
            opacity: 1;
          }

          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_50%_12%,rgba(155,153,254,0.22),transparent_34rem),radial-gradient(circle_at_14%_0%,rgba(43,200,183,0.18),transparent_28rem),linear-gradient(180deg,#090911_0%,#050507_72%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 hidden opacity-70 lg:block">
        <div className="absolute -top-[22rem] -left-36 h-[72rem] w-[32rem] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.025)_54%,rgba(255,255,255,0)_80%)]" />
        <div className="absolute -top-40 left-16 h-[64rem] w-52 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_80%,transparent_100%)]" />
        <div className="absolute -top-80 left-48 h-[68rem] w-48 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.018)_80%,transparent_100%)]" />
      </div>

      <img
        className="pointer-events-none absolute top-64 left-1/2 z-0 hidden w-[130rem] max-w-none -translate-x-1/2 opacity-25 [mask-image:linear-gradient(180deg,transparent_0%,black_20%,black_62%,transparent_100%)] lg:block"
        src={heroImages.background}
        alt=""
        aria-hidden="true"
      />

      <DottedHeroBackground />

      <header className="fixed inset-x-0 top-0 z-30 px-3 pt-2">
        <nav
          className={[
            'mx-auto transition-all duration-300',
            isScrolled ? 'max-w-4xl' : 'max-w-6xl',
          ].join(' ')}
          aria-label="Main navigation"
        >
          <div
            className={[
              'flex items-center justify-between border transition-all duration-300',
              isScrolled || isMenuOpen
                ? 'min-h-14 rounded-full border-white/[0.12] bg-black/[0.45] px-4 shadow-2xl shadow-black/25 backdrop-blur-xl'
                : 'min-h-16 rounded-[1.35rem] border-transparent bg-transparent px-4',
            ].join(' ')}
          >
            <Link to="/" aria-label="WeDigitize home">
              <Logo />
            </Link>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-white/70 lg:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link className="transition hover:text-white" to={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                className={['rounded-xl px-4 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white', isScrolled ? 'lg:hidden' : ''].join(' ')}
                to="/contact"
              >
                Book Call
              </Link>
              <Link
                className={['rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-100', isScrolled ? 'lg:hidden' : ''].join(' ')}
                to="/contact"
              >
                Request Quote
              </Link>
              <Link
                className={['rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-100', isScrolled ? 'lg:inline-flex' : 'hidden'].join(' ')}
                to="/contact"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl text-white transition hover:bg-white/10 lg:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="mt-2 grid gap-4 rounded-3xl border border-white/[0.12] bg-black/70 p-5 shadow-2xl shadow-black/[0.35] backdrop-blur-xl lg:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  className="font-medium text-white/75 transition hover:text-white"
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link className="rounded-xl border border-white/[0.12] px-4 py-2 text-center font-semibold text-white" to="/contact">
                  Book Call
                </Link>
                <Link className="rounded-xl bg-white px-4 py-2 text-center font-semibold text-zinc-950" to="/contact">
                  Request Quote
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="relative z-10 overflow-hidden">
        <section className="relative min-h-screen pt-32 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:bg-[radial-gradient(125%_125%_at_50%_100%,transparent_0%,#050507_76%)] md:pt-30">
          <div className="mx-auto w-[min(100%-1.5rem,72rem)] text-center">
            {/* <a
              className="animate-hero-rise mx-auto inline-flex max-w-full items-center gap-3 rounded-full border border-white/[0.12] bg-white/[0.07] py-1 pr-1 pl-4 text-sm font-semibold text-white shadow-2xl shadow-black/20 backdrop-blur-xl transition hover:bg-white/10"
              href="#models"
            >
              <span className="truncate">Introducing Support for AI Models</span>
              <span className="h-4 w-px bg-white/[0.18]" aria-hidden="true" />
              <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-full bg-white/10">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </a> */}

            <h1 className="animate-hero-rise mx-auto mt-8 max-w-5xl text-balance text-6xl leading-[0.96] font-bold tracking-normal [animation-delay:100ms] md:text-7xl lg:mt-14 xl:text-[5.25rem]">
              <span className="text-violet-100">Building digital presence with</span>
              <br /> <RotatingTitleWord />
            </h1>

            <p className="animate-hero-rise mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-zinc-400 [animation-delay:180ms]">
              We create modern websites, apps, SEO strategies and social media handles that help your business stand out, connect with customers and grow online.
            </p>

            <div className="animate-hero-rise mt-12 flex flex-col items-center justify-center gap-3 [animation-delay:260ms] sm:flex-row">
              <div className="rounded-[1.05rem] border border-white/10 bg-white/[0.08] p-1">
                <Link
                  className="group/button inline-flex min-h-12 min-w-45 items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-zinc-950 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-zinc-100"
                  to="/institutions"
                >
                  <SlidingButtonText defaultText="Build Presence" hoverText="Free Consultation" />
                </Link>
              </div>
              <Link
                className="group/button inline-flex min-h-12 min-w-40 items-center justify-center rounded-xl px-6 text-base font-semibold text-white/[0.78] transition hover:bg-white/[0.08] hover:text-white"
                to="/websites"
              >
                <SlidingButtonText defaultText="Explore Services" hoverText="Digital Solutions" />
              </Link>
            </div>
          </div>

          <ContainerScrollAnimation>
            <div className="animate-hero-rise relative -mr-56 px-2 [animation-delay:340ms] sm:mr-0">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-b from-transparent via-[#050507]/80 to-[#050507]" />
              <div className="pointer-events-none absolute inset-x-6 bottom-0 z-10 h-25 rounded-full bg-black/70 blur-3xl" />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.2] bg-[#09090b] p-4 shadow-[0_35px_110px_rgba(0,0,0,0.72)] ring-1 ring-white/[0.08]">
                <img
                  className="aspect-[15/8] w-full rounded-2xl border border-white/[0.08] object-cover object-top"
                  src={heroImages.dashboard}
                  alt="Digital agency dashboard preview"
                  width="2700"
                  height="1440"
                />
              </div>
            </div>
          </ContainerScrollAnimation>
        </section>
      </main>
    </div>
  )
}
