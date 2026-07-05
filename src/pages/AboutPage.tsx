const values = ['Clear communication', 'Growth-focused strategy', 'Modern digital execution', 'Reliable ongoing support']

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto w-[min(100%-1.5rem,76rem)] py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-200/65">About Wiedigital</p>
        <h1 className="mt-4 max-w-4xl text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
          We help businesses build digital presence and grow with confidence.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Wiedigital exists to make websites, apps, SEO and social media feel clear, useful and growth-focused.
        </p>
      </section>

      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-4 pb-24 md:grid-cols-2">
        <article className="rounded-[2rem] border border-white/[0.08] bg-white/[0.035] p-6">
          <h2 className="text-2xl font-bold text-white">Our approach</h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            We combine strategy, design and development so your digital presence is not just visible, but useful for real customers.
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
