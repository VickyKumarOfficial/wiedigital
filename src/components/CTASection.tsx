import { Link } from 'react-router-dom'

type MockScreen = {
  id: string
  title: string
  caption: string
  className: string
}

const mockScreens: MockScreen[] = [
  {
    id: 'features',
    title: 'Website strategy',
    caption: 'Clear page roadmap',
    className: 'left-[2%] top-0 h-64 w-52 md:h-72 md:w-60',
  },
  {
    id: 'progress',
    title: 'SEO progress',
    caption: 'Track growth signals',
    className: 'left-[20%] top-8 h-52 w-48 md:h-60 md:w-56',
  },
  {
    id: 'projects',
    title: 'App development',
    caption: 'Custom digital tools',
    className: 'left-[2%] bottom-0 h-48 w-64 md:h-60 md:w-80',
  },
  {
    id: 'knowledge',
    title: 'Content library',
    caption: 'Organized brand assets',
    className: 'right-[2%] top-0 h-64 w-52 md:h-72 md:w-60',
  },
  {
    id: 'skills',
    title: 'Social media',
    caption: 'Posts and handle support',
    className: 'right-[20%] top-10 h-52 w-48 md:h-60 md:w-56',
  },
  {
    id: 'workspace',
    title: 'Growth workspace',
    caption: 'Digital delivery stack',
    className: 'right-[2%] bottom-0 h-48 w-64 md:h-60 md:w-80',
  },
]

function MockScreenCard({ screen }: { screen: MockScreen }) {
  return (
    <div
      className={`absolute ${screen.className} overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101011] shadow-2xl shadow-black/40`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[#101011]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(167,139,250,0.1),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.012))]" />
      <div className="relative flex h-full flex-col p-4">
        <p className="text-[11px] font-semibold text-white/60">{screen.title}</p>
        <p className="mt-1 text-[9px] leading-3 text-white/28">{screen.caption}</p>

        <div className="mt-5 grid gap-2">
          <div className="h-9 rounded-lg border border-white/[0.07] bg-[#18181a]" />
          <div className="h-2 w-2/3 rounded-full bg-[#202024]" />
          <div className="h-2 w-1/2 rounded-full bg-[#1a1a1d]" />
        </div>

        <div className="mt-auto grid grid-cols-3 gap-2">
          <div className="h-12 rounded-xl border border-white/[0.06] bg-[#151517]" />
          <div className="h-12 rounded-xl border border-white/[0.06] bg-[#151517]" />
          <div className="h-12 rounded-xl border border-white/[0.06] bg-[#151517]" />
        </div>
      </div>
    </div>
  )
}

export default function CTASection() {
  return (
    <section id="features" className="relative mx-auto w-[min(100%-1.5rem,79rem)] py-16 md:py-24">
      <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#101011] shadow-2xl shadow-black/[0.35]">
        <div className="absolute inset-0" aria-hidden="true">
          {mockScreens.map((screen) => (
            <MockScreenCard key={screen.id} screen={screen} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[13%] bg-gradient-to-r from-[#101011] via-[#101011]/88 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] w-[13%] bg-gradient-to-l from-[#101011] via-[#101011]/88 to-transparent" />

        <div className="absolute inset-y-0 left-1/2 z-10 w-[calc(92%+2rem)] -translate-x-1/2 overflow-hidden rounded-[2rem] bg-[#151515] shadow-[0_0_95px_rgba(0,0,0,0.78)] sm:w-[calc(72%+2rem)] md:w-[calc(52%+2rem)] lg:w-[calc(44%+2rem)]">
          <div className="absolute inset-0 bg-[#151515]" />
        </div>

        <div className="relative z-20 flex min-h-[30rem] flex-col items-center justify-center px-6 text-center">
          <h2 className="max-w-xl text-balance text-4xl font-bold leading-tight tracking-normal text-white md:text-5xl">
            Ready to build your digital presence?
          </h2>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-blue-600 px-6 text-base font-semibold text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-300/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              to="/websites"
            >
              Book Free Consultation
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-white px-6 text-base font-semibold text-zinc-950 shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-zinc-100"
              to="/institutions"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
