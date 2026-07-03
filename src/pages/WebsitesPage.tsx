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
    title: 'Homepage preview',
    description: 'A polished first screen with brand message, trust points and a strong consultation CTA.',
  },
  {
    title: 'Service page preview',
    description: 'Built sections that explain your offers, process, outcomes and next steps clearly.',
  },
  {
    title: 'Contact flow preview',
    description: 'A simple conversion path with forms and next steps that help visitors reach you without friction.',
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

      
    </main>
  )
}
