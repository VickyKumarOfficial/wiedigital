import { Link } from 'react-router-dom'
import { pathCards } from '../data/home'

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  )
}

export default function ChoosePathSection() {
  return (
    <section id="paths" className="relative mx-auto w-[min(100%-1.5rem,76rem)] py-14 md:py-20">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">What we do</p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
            Digital solutions built for growing businesses.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-400">
          From websites and apps to SEO and social media, Wiedigital helps brands build a stronger online presence.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {pathCards.map((card, index) => (
          <Link
            className="group relative min-h-80 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.055]"
            key={card.title}
            to={card.href}
          >
            <div
              className={[
                'pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100',
                index === 0
                  ? 'bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.22),transparent_32rem)]'
                  : 'bg-[radial-gradient(circle_at_80%_15%,rgba(167,139,250,0.24),transparent_32rem)]',
              ].join(' ')}
            />

            <div className="relative flex h-full flex-col">
              <span className="w-fit rounded-full border border-white/[0.1] bg-black/20 px-3 py-1 text-xs font-semibold text-zinc-300">
                {card.eyebrow}
              </span>
              <h3 className="mt-6 text-3xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 max-w-md text-base leading-7 text-zinc-400">{card.description}</p>

              <div className="mt-7 grid gap-3">
                {card.features.map((feature) => (
                  <div className="flex items-center gap-3 text-sm font-medium text-zinc-300" key={feature}>
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-white/[0.08] bg-white/[0.04] text-teal-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-2 pt-8 text-sm font-bold text-white">
                {card.cta}
                <span className="transition group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
