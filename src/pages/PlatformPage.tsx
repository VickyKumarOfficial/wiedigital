import { platformFeatures } from '../data/home'

export default function PlatformPage() {
  return (
    <main>
      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">Workflow</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
          A clear workspace for digital growth operations.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Manage website planning, SEO priorities, content assets and social media activity from one focused workflow.
        </p>
      </section>

      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-4 pb-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="min-h-96 rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-5">
          <div className="rounded-[1.5rem] border border-white/[0.06] bg-black/25 p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-white">Growth overview</p>
              <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-400">Digital stack</span>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[72, 84, 58, 91].map((width, index) => (
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4" key={width}>
                  <p className="text-sm font-semibold text-white">Channel {index + 1}</p>
                  <div className="mt-4 h-2 rounded-full bg-white/[0.06]">
                    <div className="h-full rounded-full bg-gradient-to-r from-teal-200 to-violet-200" style={{ width: `${width}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {platformFeatures.map((feature) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5" key={feature.title}>
              <h2 className="text-lg font-bold text-white">{feature.title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
