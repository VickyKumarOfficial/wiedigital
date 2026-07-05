import { Link } from 'react-router-dom'
import { platformFeatures } from '../data/home'

const implementationSteps = ['Map goals and channels', 'Set up the growth workflow', 'Launch, review and improve']

const growthChannels = [
  { label: 'SEO', value: '94%' },
  { label: 'Social', value: '12 posts' },
  { label: 'Content', value: '6 assets' },
]

const weeklyViews = [
  { day: 'Mon', height: '38%' },
  { day: 'Tue', height: '54%' },
  { day: 'Wed', height: '52%' },
  { day: 'Thu', height: '78%' },
  { day: 'Fri', height: '66%' },
  { day: 'Sat', height: '86%' },
  { day: 'Sun', height: '96%' },
]

export default function GrowthPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[1fr_0.85fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">Growth services</p>
          <h1 className="mt-4 text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            Grow your online presence with a clear digital workflow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Wiedigital helps businesses plan websites, manage content, improve SEO and keep social channels active.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex rounded-2xl bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-zinc-100" to="/contact">
              Book Consultation
            </Link>
            <Link className="inline-flex rounded-2xl border border-white/[0.12] px-6 py-3 font-bold text-white transition hover:bg-white/[0.08]" to="/platform">
              Explore Workflow
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5">
          <div className="rounded-2xl border border-white/[0.06] bg-black/25 p-4">
            <div className="flex items-center justify-between">
              <p className="font-bold text-white">Growth dashboard</p>
              <span className="rounded-full bg-teal-200/10 px-3 py-1 text-xs font-semibold text-teal-100">Live plan</span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {growthChannels.map((channel) => (
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] p-3" key={channel.label}>
                  <p className="text-xs font-semibold text-zinc-500">{channel.label}</p>
                  <p className="mt-2 text-lg font-bold text-white">{channel.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Campaign progress</p>
                <span className="text-xs text-zinc-500">This month</span>
              </div>
              <div className="mt-4 grid gap-3">
                {[82, 68, 74].map((width, index) => (
                  <div className="grid gap-2" key={width}>
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{['Website updates', 'SEO tasks', 'Social content'][index]}</span>
                      <span>{width}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06]">
                      <div className="h-full rounded-full bg-gradient-to-r from-teal-200 to-violet-200" style={{ width: `${width}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">Progress</p>
                <span className="text-xs text-zinc-500">Views x weekdays</span>
              </div>
              <div className="mt-5 grid grid-cols-[1rem_1fr] gap-3">
                <div className="flex h-32 items-center justify-center">
                  <span className="-rotate-90 text-[0.65rem] font-medium text-zinc-600">Views</span>
                </div>
                <div>
                  <div className="flex h-32 items-end gap-2 border-b border-l border-white/[0.08] px-2">
                    {weeklyViews.map((item, index) => (
                      <div className="flex h-full flex-1 items-end justify-center" key={item.day}>
                        <div
                          className={`w-full max-w-7 rounded-t-lg ${index % 3 === 0 ? 'bg-teal-200/70' : index % 3 === 1 ? 'bg-violet-200/65' : 'bg-white/25'}`}
                          style={{ height: item.height }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-2 grid grid-cols-7 gap-2 px-2">
                    {weeklyViews.map((item) => (
                      <span className="text-center text-[0.62rem] font-semibold text-zinc-500" key={item.day}>
                        {item.day}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Growth capabilities</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformFeatures.map((feature) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d] p-5" key={feature.title}>
              <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12 pb-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Delivery flow</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {implementationSteps.map((step, index) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5" key={step}>
              <p className="text-sm font-bold text-violet-100">0{index + 1}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{step}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
