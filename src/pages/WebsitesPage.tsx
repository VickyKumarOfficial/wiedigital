import { Link } from 'react-router-dom'

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
]

const websiteHighlights = [
  ...websiteStats.map((stat) => ({
    title: stat.value,
    description: stat.label,
  })),
  ...websiteMockups.map((mockup) => ({
    title: mockup.title,
    description: mockup.description,
  })),
]

const websiteProjects = [
  {
    title: 'Local Business Website',
    description: 'A conversion-focused website structure for service businesses that need trust, clarity and quick contact paths.',
    href: '#',
    imageSrc: '',
    tags: ['Website', 'SEO', 'Lead gen'],
  },
  {
    title: 'Founder Portfolio',
    description: 'A sharp personal brand site with project highlights, credentials and a streamlined inquiry experience.',
    href: '#',
    imageSrc: '',
    tags: ['Portfolio', 'Brand', 'Responsive'],
  },
  {
    title: 'Product Landing Page',
    description: 'A launch-ready landing page built around positioning, proof points, benefits and a clear primary CTA.',
    href: '#',
    imageSrc: '',
    tags: ['Landing page', 'Copy', 'Launch'],
  },
]

export default function WebsitesPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[1fr_0.86fr] md:py-28">
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

        <div className="flex min-h-[31.5rem] flex-col gap-3 rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-5">
          {websiteHighlights.map((item) => (
            <article
              className="flex flex-1 flex-col justify-center rounded-2xl border border-white/[0.07] bg-[#0b0b0d] px-4 py-3"
              key={item.title}
            >
              <h2 className="text-base font-bold text-white">{item.title}</h2>
              <p className="mt-1.5 text-sm leading-6 text-zinc-500">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-[min(100%-1.5rem,76rem)] pb-20 md:pb-28">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Projects</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-normal text-white md:text-5xl">
              Website work shaped for real business outcomes.
            </h2>
          </div>
          <Link className="w-fit rounded-full border border-white/[0.1] px-5 py-2 text-sm font-bold text-white transition hover:bg-white/[0.08]" to="/contact">
            Start yours
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {websiteProjects.map((project) => (
            <article
              className="group grid min-h-[30rem] grid-rows-[1fr_1fr] overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#0b0b0d] transition hover:-translate-y-1 hover:border-white/[0.16]"
              key={project.title}
            >
              <div className="overflow-hidden bg-[#121215]">
                {project.imageSrc ? (
                  <img className="h-full w-full object-cover" src={project.imageSrc} alt={`${project.title} screenshot`} />
                ) : (
                  <div className="grid h-full min-h-60 place-items-center border-b border-white/[0.08] bg-[#101012] text-sm font-semibold text-zinc-600">
                    Project screenshot placeholder
                  </div>
                )}
              </div>

              <div className="flex flex-col p-5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-zinc-400" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-bold leading-tight text-white">{project.title}</h3>
                  <a
                    aria-label={`Open ${project.title}`}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/[0.12] bg-white/[0.045] text-zinc-300 transition hover:text-lime-300"
                    href={project.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>

                <p className="mt-auto pt-5 text-sm leading-6 text-zinc-400">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
