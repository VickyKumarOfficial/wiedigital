import { useEffect, useMemo, useState } from 'react'
import { heroImages, navItems } from '../data/home'
import ContainerScrollAnimation from './ContainerScrollAnimation'

const rotatingTitleWords = ['products', 'design', 'experiences', 'talent']

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
    <span className="inline-flex items-center gap-2.5 font-bold tracking-normal text-white">
      <svg className="h-7 w-7 text-teal-300" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M8 5h4v22H8zM20 5h4v22h-4zM5 8h22v4H5zM5 20h22v4H5z" />
      </svg>
      <span>wielearn</span>
    </span>
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
            <a href="/" aria-label="wielearn home">
              <Logo />
            </a>

            <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-white/70 lg:flex">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a className="transition hover:text-white" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2 lg:flex">
              <a
                className={['rounded-xl px-4 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/[0.08] hover:text-white', isScrolled ? 'lg:hidden' : ''].join(' ')}
                href="#login"
              >
                Login
              </a>
              <a
                className={['rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-100', isScrolled ? 'lg:hidden' : ''].join(' ')}
                href="#signup"
              >
                Sign Up
              </a>
              <a
                className={['rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-zinc-100', isScrolled ? 'lg:inline-flex' : 'hidden'].join(' ')}
                href="#start"
              >
                Get Started
              </a>
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
                <a
                  key={item.name}
                  className="font-medium text-white/75 transition hover:text-white"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a className="rounded-xl border border-white/[0.12] px-4 py-2 text-center font-semibold text-white" href="#login">
                  Login
                </a>
                <a className="rounded-xl bg-white px-4 py-2 text-center font-semibold text-zinc-950" href="#signup">
                  Sign Up
                </a>
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
              <span className="text-violet-100">Shaping next-gen digital</span>
              <br /> <RotatingTitleWord />
            </h1>

            <p className="animate-hero-rise mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-zinc-400 [animation-delay:180ms]">
              Where top-tier agency execution meets hands-on tech education. We build for clients
              and train the future workforce.
            </p>

            <div className="animate-hero-rise mt-12 flex flex-col items-center justify-center gap-3 [animation-delay:260ms] sm:flex-row">
              <div className="rounded-[1.05rem] border border-white/10 bg-white/[0.08] p-1">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-zinc-950 shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-zinc-100"
                  href="#start"
                >
                  Start Building
                </a>
              </div>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-6 text-base font-semibold text-white/[0.78] transition hover:bg-white/[0.08] hover:text-white"
                href="https://aiforkids.in" target='_blank'
              >
                Start Learning
              </a>
            </div>
          </div>

          <ContainerScrollAnimation>
            <div className="animate-hero-rise relative -mr-56 px-2 [animation-delay:340ms] sm:mr-0">
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/3 bg-gradient-to-b from-transparent via-[#050507]/80 to-[#050507]" />
              <div className="pointer-events-none absolute inset-x-6 bottom-0 z-10 h-40 rounded-full bg-black/70 blur-3xl" />
              <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/[0.12] bg-[#09090b] p-4 shadow-[0_35px_110px_rgba(0,0,0,0.72)] ring-1 ring-white/[0.08]">
                <img
                  className="aspect-[15/8] w-full rounded-2xl border border-white/[0.08] object-cover object-top"
                  src={heroImages.dashboard}
                  alt="Customer engagement dashboard preview"
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
