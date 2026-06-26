import { useEffect, useRef, useState } from 'react'
import { platformFeatures } from '../data/home'
import GlowingEffect from './GlowingEffect'

function PlatformGlow({ proximity = 120, opacity = 0.58, spread = 38 }: { proximity?: number; opacity?: number; spread?: number }) {
  return <GlowingEffect borderWidth={1.5} opacity={opacity} proximity={proximity} spread={spread} />
}

const curriculumTracks = [
  'Website design roadmap',
  'App development workflow',
  'SEO content planning',
  'Social media calendar',
]

const learnerBatches = [
  { name: 'Website', progress: 78 },
  { name: 'SEO', progress: 64 },
  { name: 'Social', progress: 86 },
  { name: 'Content', progress: 52 },
]

const learnerStatGroups = [
  { title: 'Project Progress', stats: learnerBatches.slice(0, 2) },
  { title: 'Growth Channels', stats: learnerBatches.slice(2) },
]

const learnerInsights = [
  { value: '12', label: 'active tasks' },
  { value: '3', label: 'launch items' },
  { value: '2', label: 'review notes' },
]

const coreTrackTerms = ['Web Design', 'App Development', 'SEO Strategy', 'Social Media', 'CMS Setup', 'Digital Consulting']

export default function InstitutionPlatformSection() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list')
  const [isProgressActive, setIsProgressActive] = useState(false)
  const [shouldAnimateProgress, setShouldAnimateProgress] = useState(false)
  const [visibleInsights, setVisibleInsights] = useState(() => learnerInsights.map(() => 0))
  const [coreTrackIndex, setCoreTrackIndex] = useState(0)
  const [typedTrackLength, setTypedTrackLength] = useState(0)
  const [isDeletingTrack, setIsDeletingTrack] = useState(false)
  const [isCoreTrackActive, setIsCoreTrackActive] = useState(false)
  const insightAnimationRef = useRef<number | null>(null)
  const progressReplayRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isCoreTrackActive) {
      return undefined
    }

    const activeTrack = coreTrackTerms[coreTrackIndex]
    const isComplete = typedTrackLength === activeTrack.length
    const isCleared = typedTrackLength === 0
    const delay = isComplete && !isDeletingTrack ? 1100 : isCleared && isDeletingTrack ? 260 : isDeletingTrack ? 42 : 76

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeletingTrack) {
        setIsDeletingTrack(true)
        return
      }

      if (isCleared && isDeletingTrack) {
        setIsDeletingTrack(false)
        setCoreTrackIndex((index) => (index + 1) % coreTrackTerms.length)
        return
      }

      setTypedTrackLength((length) => length + (isDeletingTrack ? -1 : 1))
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [coreTrackIndex, isCoreTrackActive, isDeletingTrack, typedTrackLength])

  const cancelInsightAnimation = () => {
    if (insightAnimationRef.current) {
      window.cancelAnimationFrame(insightAnimationRef.current)
    }

    if (progressReplayRef.current) {
      window.cancelAnimationFrame(progressReplayRef.current)
    }

    insightAnimationRef.current = null
    progressReplayRef.current = null
  }

  const pauseCoreTrackAnimation = () => {
    setIsCoreTrackActive(false)
  }

  const startProgressAnimation = () => {
    cancelInsightAnimation()
    setShouldAnimateProgress(false)
    setIsProgressActive(false)
    setVisibleInsights(learnerInsights.map(() => 0))

    progressReplayRef.current = window.requestAnimationFrame(() => {
      progressReplayRef.current = window.requestAnimationFrame(() => {
        const startedAt = performance.now()
        const duration = 1000

        setShouldAnimateProgress(true)
        setIsProgressActive(true)

        const countUp = (timestamp: number) => {
          const progress = Math.min((timestamp - startedAt) / duration, 1)
          const easedProgress = 1 - Math.pow(1 - progress, 3)

          setVisibleInsights(learnerInsights.map((insight) => Math.round(Number(insight.value) * easedProgress)))

          if (progress < 1) {
            insightAnimationRef.current = window.requestAnimationFrame(countUp)
          }
        }

        insightAnimationRef.current = window.requestAnimationFrame(countUp)
      })
    })
  }

  return (
    <section id="platform" className="relative mx-auto w-[min(100%-1.5rem,76rem)] py-14 md:py-20">
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-5 md:p-6">
          <PlatformGlow opacity={0.62} proximity={210} spread={46} />
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">Growth workflow</p>
              <h2 className="mt-3 max-w-full text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
                Everything your online presence needs in one clear plan.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-zinc-400">
              Plan websites, apps, SEO, social media and content updates through a focused digital roadmap.
            </p>
          </div>

          <div
            className="relative mt-8 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-black/30"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                pauseCoreTrackAnimation()
              }
            }}
            onFocus={() => setIsCoreTrackActive(true)}
            onMouseEnter={() => setIsCoreTrackActive(true)}
            onMouseLeave={pauseCoreTrackAnimation}
          >
            <PlatformGlow opacity={0.58} proximity={170} spread={40} />
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-200/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-200/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
              </div>
              <span className="text-xs font-semibold text-zinc-500">WeDigitize workspace</span>
            </div>

            <div className="grid min-h-80 gap-3 p-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="grid gap-3">
                <div className="group/curriculum relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.035] p-4">
                  <PlatformGlow opacity={0.54} proximity={120} spread={34} />
                  <p className="text-sm font-semibold text-white">Service stack</p>
                  <div className="mt-4 grid gap-2">
                    {curriculumTracks.map((track, index) => (
                      <button
                        className="relative h-4 overflow-hidden rounded-full bg-white/[0.06] text-left outline-none transition-colors duration-500 group-hover/curriculum:bg-white/[0.1] focus-visible:bg-white/[0.1] focus-visible:ring-2 focus-visible:ring-teal-200/60"
                        key={track}
                        style={{ width: `${100 - index * 13}%` }}
                        type="button"
                      >
                        <span className="absolute inset-x-3 top-1/2 z-10 block -translate-y-1/2 truncate text-[0.58rem] font-medium leading-none text-white/85 opacity-0 blur-sm transition-all duration-700 group-hover/curriculum:opacity-100 group-hover/curriculum:blur-none">
                          {track}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                <div
                  className="relative overflow-hidden rounded-2xl border border-teal-200/[0.12] bg-teal-200/[0.06] p-4"
                >
                  <PlatformGlow opacity={0.5} proximity={110} spread={32} />
                  <p className="text-xl font-semibold text-white">Core services:</p>
                  <div className="mt-2 flex min-h-8 items-center rounded-xl border border-white/[0.06] bg-black/20 px-3">
                    <p className="truncate text-sm font-bold text-white">
                      {coreTrackTerms[coreTrackIndex].slice(0, typedTrackLength)}
                      <span className={`ml-0.5 inline-block h-5 w-px translate-y-0.5 bg-teal-100/80 ${isCoreTrackActive ? 'animate-pulse' : 'opacity-45'}`} />
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4"
                onFocus={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    startProgressAnimation()
                  }
                }}
                onMouseEnter={startProgressAnimation}
              >
                <PlatformGlow opacity={0.54} proximity={140} spread={36} />
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Project progress</p>
                  <div className="grid grid-cols-2 overflow-hidden rounded-full border border-white/[0.07] bg-white/[0.04] p-0.5">
                    {(['list', 'grid'] as const).map((mode) => (
                      <button
                        aria-pressed={viewMode === mode}
                        className={`rounded-full px-3 py-1 text-xs transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/60 ${
                          viewMode === mode ? 'bg-white/[0.12] text-white' : 'text-zinc-500 hover:text-zinc-200'
                        }`}
                        key={mode}
                        onClick={() => setViewMode(mode)}
                        type="button"
                      >
                        {mode === 'list' ? 'List' : 'Grid'}
                      </button>
                    ))}
                  </div>
                </div>
                {viewMode === 'list' ? (
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {learnerStatGroups.map((group) => (
                      <div className="rounded-xl border border-white/[0.05] bg-black/15 p-3" key={group.title}>
                        <p className="truncate text-xs font-semibold text-zinc-400">{group.title}</p>
                        <div className="mt-3 grid gap-3">
                          {group.stats.map((batch) => (
                            <div className="grid gap-1.5" key={batch.name}>
                              <span className="text-xs text-zinc-500">{batch.name}</span>
                              <div className="h-2 rounded-full bg-white/[0.06]">
                                <span
                                  className={`block h-full rounded-full bg-gradient-to-r from-teal-200 to-violet-200 ${
                                    shouldAnimateProgress ? 'transition-[width] duration-1000 ease-out' : ''
                                  }`}
                                  style={{ width: isProgressActive ? `${batch.progress}%` : 0 }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {learnerStatGroups.map((group) => (
                      <div className="rounded-xl border border-white/[0.05] bg-black/15 p-3" key={group.title}>
                        <p className="truncate text-xs font-semibold text-zinc-400">{group.title}</p>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {group.stats.map((batch) => {
                            const circumference = 2 * Math.PI * 19
                            const progressOffset = circumference - (circumference * batch.progress) / 100
                            const gradientId = `learnerProgressGradient-${batch.name.replace(/\s+/g, '')}`

                            return (
                              <div className="flex flex-col items-center justify-center" key={batch.name}>
                                <svg aria-hidden="true" className="h-12 w-12 -rotate-90" viewBox="0 0 52 52">
                                  <circle cx="26" cy="26" fill="none" r="19" stroke="rgba(255,255,255,0.07)" strokeWidth="6" />
                                  <circle
                                    className={shouldAnimateProgress ? 'transition-[stroke-dashoffset] duration-1000 ease-out' : ''}
                                    cx="26"
                                    cy="26"
                                    fill="none"
                                    r="19"
                                    stroke={`url(#${gradientId})`}
                                    strokeDasharray={circumference}
                                    strokeDashoffset={isProgressActive ? progressOffset : circumference}
                                    strokeLinecap="round"
                                    strokeWidth="6"
                                  />
                                  <defs>
                                    <linearGradient id={gradientId} x1="8" x2="44" y1="8" y2="44">
                                      <stop stopColor="#99f6e4" />
                                      <stop offset="1" stopColor="#ddd6fe" />
                                    </linearGradient>
                                  </defs>
                                </svg>
                                <span className="mt-1 text-xs text-zinc-500">{batch.name}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {learnerInsights.map((insight, index) => (
                    <div className="min-w-0 flex-1 rounded-lg bg-white/[0.035] px-2.5 py-2 text-center" key={insight.label}>
                      <p className="text-sm font-bold text-white">{visibleInsights[index]}</p>
                      <p className="truncate text-[0.68rem] text-zinc-500">{insight.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {platformFeatures.map((feature) => (
            <article
              className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5"
              key={feature.title}
            >
              <PlatformGlow opacity={0.58} proximity={170} spread={40} />
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
