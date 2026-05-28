import { platformFeatures } from '../data/home'

export default function InstitutionPlatformSection() {
  return (
    <section id="platform" className="relative mx-auto w-[min(100%-1.5rem,76rem)] py-14 md:py-20">
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">Institution platform</p>
              <h2 className="mt-3 max-w-xl text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
                LMS and KMS tools for curriculum delivery.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              A dashboard-style workspace for content, classrooms, progress and institutional knowledge.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-black/30">
            <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-200/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-violet-200/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
              </div>
              <span className="text-xs font-semibold text-zinc-500">Wielearn workspace</span>
            </div>

            <div className="grid min-h-80 gap-3 p-4 md:grid-cols-[0.8fr_1.2fr]">
              <div className="grid gap-3">
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.035] p-4">
                  <p className="text-sm font-semibold text-white">Curriculum stack</p>
                  <div className="mt-4 grid gap-2">
                    <span className="h-3 rounded-full bg-white/[0.12]" />
                    <span className="h-3 w-4/5 rounded-full bg-white/[0.08]" />
                    <span className="h-3 w-3/5 rounded-full bg-white/[0.06]" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-teal-200/[0.12] bg-teal-200/[0.06] p-4">
                    <p className="text-2xl font-bold text-white">6-12</p>
                    <p className="mt-1 text-xs text-zinc-400">class-ready</p>
                  </div>
                  <div className="rounded-2xl border border-violet-200/[0.12] bg-violet-200/[0.06] p-4">
                    <p className="text-2xl font-bold text-white">4</p>
                    <p className="mt-1 text-xs text-zinc-400">core tracks</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Learner progress</p>
                  <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs text-zinc-400">Live view</span>
                </div>
                <div className="mt-6 grid gap-4">
                  {[78, 64, 86, 52].map((width, index) => (
                    <div className="grid gap-2" key={width}>
                      <div className="flex justify-between text-xs text-zinc-500">
                        <span>Batch {index + 1}</span>
                        <span>{width}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/[0.06]">
                        <div className="h-full rounded-full bg-gradient-to-r from-teal-200 to-violet-200" style={{ width: `${width}%` }} />
                      </div>
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
              className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-white/[0.16]"
              key={feature.title}
            >
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
