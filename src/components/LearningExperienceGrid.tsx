import { learningExperience } from '../data/home'
import GlowingEffect from './GlowingEffect'

export default function LearningExperienceGrid() {
  return (
    <section className="relative mx-auto w-[min(100%-1.5rem,76rem)] py-14 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Our process</p>
        <h2 className="mt-3 text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
          From idea to launch with a clear digital plan.
        </h2>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {learningExperience.map((step) => (
          <article
            className="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0b0b0d] p-5"
            key={step.title}
          >
            <GlowingEffect borderWidth={1.25} opacity={0.42} proximity={120} spread={32} />
            <div className="relative h-40 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.025]">
              <GlowingEffect borderWidth={1.25} opacity={0.36} proximity={86} spread={28} />
              <div className="absolute inset-x-4 top-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-teal-200/70" />
                <span className="h-2 w-2 rounded-full bg-violet-200/60" />
                <span className="h-2 w-2 rounded-full bg-white/35" />
              </div>
              <div className="absolute inset-x-4 top-12 grid gap-2">
                <div className="h-3 w-3/4 rounded-full bg-white/[0.1]" />
                <div className="h-3 w-1/2 rounded-full bg-white/[0.07]" />
              </div>
              <div className="absolute right-4 bottom-4 left-4 grid grid-cols-3 gap-2">
                <div className="h-14 rounded-xl bg-teal-200/[0.08] ring-1 ring-teal-200/[0.14]" />
                <div className="h-14 rounded-xl bg-violet-200/[0.08] ring-1 ring-violet-200/[0.14]" />
                <div className="h-14 rounded-xl bg-white/[0.04] ring-1 ring-white/[0.08]" />
              </div>
              <span className="absolute right-4 top-4 text-5xl font-black text-white/[0.04]">
                {step.metric}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
