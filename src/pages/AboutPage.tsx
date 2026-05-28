const values = ['Hands-on learning', 'Platform-backed delivery', 'Responsible AI adoption', 'School-ready digital skills']

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">About Wielearn</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
          We help students learn modern technology and help institutions deliver it.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Wielearn exists to make AI, CS, IT and IP learning practical, structured and ready for classrooms.
        </p>
      </section>

      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-4 pb-24 md:grid-cols-2">
        <article className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6">
          <h2 className="text-2xl font-bold text-white">Our approach</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            We combine curriculum clarity, project-based learning and platform infrastructure so learning is not just content, but a repeatable experience.
          </p>
        </article>
        <article className="rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-6">
          <h2 className="text-2xl font-bold text-white">What we value</h2>
          <div className="mt-5 grid gap-3">
            {values.map((value) => (
              <div className="rounded-2xl bg-white/[0.04] px-4 py-3 text-sm font-semibold text-zinc-300" key={value}>
                {value}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
