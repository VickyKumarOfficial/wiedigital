import { Link } from 'react-router-dom'
import { learningExperience } from '../data/home'
import { programs } from '../data/programs'

const faqs = [
  ['What kind of websites do you build?', 'We build modern business websites, landing pages, portfolios and service pages for startups and small businesses.'],
  ['Will the website work on mobile?', 'Yes. Every website is planned for responsive layouts, fast loading and clear customer journeys across devices.'],
  ['Can you help with copy and SEO?', 'Yes. We can shape page structure, website copy and SEO basics so your site is ready for search and conversion.'],
]

const websiteMockups = [
  {
    title: 'Homepage layout',
    description: 'A clear first screen with brand message, trust points and a strong consultation CTA.',
  },
  {
    title: 'Service page',
    description: 'Focused sections that explain your offers, process, outcomes and next steps.',
  },
  {
    title: 'Contact flow',
    description: 'Simple forms and conversion points that help visitors reach you without friction.',
  },
]

const websiteStats = [
  { value: 'Responsive', label: 'mobile-first layouts' },
  { value: 'SEO-ready', label: 'search-friendly structure' },
  { value: 'Conversion-led', label: 'clear customer journey' },
  { value: 'Fast launch', label: 'focused delivery plan' },
]

export default function WebsitesPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[1fr_0.8fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Websites</p>
          <h1 className="mt-4 text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            Modern websites that make your business easier to trust.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            WeDigitize designs responsive websites that present your brand clearly, guide customers smoothly and support your online growth.
          </p>
          <Link className="mt-8 inline-flex rounded-2xl bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-zinc-100" to="/contact">
            Start Website Project
          </Link>
        </div>
        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5">
          <div className="grid gap-3">
            {websiteStats.map((stat) => (
              <div className="rounded-2xl bg-black/25 p-4" key={stat.value}>
                <p className="font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">How we build your website</h2>
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
        <h2 className="text-3xl font-bold text-white md:text-4xl">Website mockups we plan</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {websiteMockups.map((mockup) => (
            <article className="rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d] p-5" key={mockup.title}>
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.035] p-4">
                <div className="h-3 w-2/3 rounded-full bg-white/[0.12]" />
                <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-teal-200/[0.16] to-violet-200/[0.12]" />
                <div className="mt-4 grid gap-2">
                  <div className="h-2 rounded-full bg-white/[0.08]" />
                  <div className="h-2 w-3/4 rounded-full bg-white/[0.06]" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{mockup.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{mockup.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-12">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Related digital services</h2>
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
