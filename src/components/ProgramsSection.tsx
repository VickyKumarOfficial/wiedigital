import { Link } from 'react-router-dom'
import { programs } from '../data/programs'

export default function ProgramsSection() {
  return (
    <section id="programs" className="relative mx-auto w-[min(100%-1.5rem,76rem)] py-14 md:py-20">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Programs</p>
          <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
            Practical tracks for school-age digital fluency.
          </h2>
        </div>
        <Link className="w-fit rounded-full border border-white/[0.1] px-5 py-2 text-sm font-bold text-white transition hover:bg-white/[0.08]" to="/programs">
          View all programs
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => (
          <article
            className="group flex min-h-72 flex-col rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d] p-5 transition hover:-translate-y-1 hover:border-white/[0.16]"
            key={program.title}
          >
            <span className="w-fit rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-zinc-400">{program.level}</span>
            <h3 className="mt-5 text-xl font-bold text-white">{program.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{program.outcome}</p>
            <Link className="mt-auto pt-6 text-sm font-bold text-violet-100 transition group-hover:text-white" to="/programs">
              Explore track
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
