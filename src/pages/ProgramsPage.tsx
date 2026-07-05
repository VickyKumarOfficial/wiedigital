import { programs } from '../data/programs'

export default function ProgramsPage() {
  return (
    <main>
      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Services</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
          Digital services built around business growth.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Browse Wiedigital services for websites, apps, SEO and social media presence, each shaped around practical outcomes.
        </p>
      </section>

      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-4 pb-24 sm:grid-cols-2">
        {programs.map((program) => (
          <article className="rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-6" key={program.title}>
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-zinc-400">{program.level}</span>
            <h2 className="mt-6 text-2xl font-bold text-white">{program.title}</h2>
            <p className="mt-4 text-base leading-7 text-zinc-400">{program.description}</p>
            <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.035] p-4 text-sm font-semibold text-violet-100/85">
              {program.outcome}
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
