import { Link } from 'react-router-dom'
import { platformFeatures } from '../data/home'

const implementationSteps = ['Map goals and channels', 'Set up the growth workflow', 'Launch, review and improve']

export default function InstitutionsPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[1fr_0.85fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">Growth services</p>
          <h1 className="mt-4 text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            Grow your online presence with a clear digital workflow.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            WeDigitize helps businesses plan websites, manage content, improve SEO and keep social channels active.
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

        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5">
          <div className="rounded-2xl border border-white/[0.06] bg-black/25 p-4">
            <p className="font-bold text-white">Growth workspace</p>
            <div className="mt-6 grid gap-4">
              {[82, 68, 74].map((width) => (
                <div className="h-3 rounded-full bg-white/[0.06]" key={width}>
                  <div className="h-full rounded-full bg-gradient-to-r from-teal-200 to-violet-200" style={{ width: `${width}%` }} />
                </div>
              ))}
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
