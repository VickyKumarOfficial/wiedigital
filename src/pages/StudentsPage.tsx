import { Link } from 'react-router-dom'
import { learningExperience, outcomeStats } from '../data/home'
import { programs } from '../data/programs'

const faqs = [
  ['Which classes is this for?', 'Wielearn is planned for classes 6-12 with age-appropriate digital learning paths.'],
  ['Is it only theory?', 'No. Every track is designed around projects, labs and practical outcomes.'],
  ['Which subjects are included?', 'The core focus is AI, Computer Science, IT and Informatics Practices.'],
]

export default function StudentsPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[1fr_0.8fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">For students</p>
          <h1 className="mt-4 text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            Build future-ready digital skills from class 6 onward.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Learn AI, CS, IT and IP with guided lessons, real projects and progress visibility made for school-age learners.
          </p>
          <Link className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-zinc-100" to="/contact">
            Start Learning
          </Link>
        </div>
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5">
          <div className="grid gap-3">
            {outcomeStats.map((stat) => (
              <div className="rounded-2xl bg-black/25 p-4" key={stat.value}>
                <p className="font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">How students learn</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {learningExperience.map((step) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-5" key={step.title}>
              <p className="text-sm font-bold text-violet-100">{step.metric}</p>
              <h3 className="mt-4 text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Subjects and projects</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {programs.map((program) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d] p-5" key={program.title}>
              <h3 className="text-xl font-bold text-white">{program.title}</h3>
              <p className="mt-2 text-sm font-semibold text-teal-100/70">{program.level}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12 pb-24">
        <h2 className="text-3xl font-bold text-white md:text-4xl">FAQ</h2>
        <div className="mt-6 grid gap-3">
          {faqs.map(([question, answer]) => (
            <details className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5" key={question}>
              <summary className="cursor-pointer font-bold text-white">{question}</summary>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{answer}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  )
}
