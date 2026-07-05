export default function ContactPage() {
  return (
    <main>
      <section className="mx-auto grid w-[min(100%-1.5rem,76rem)] gap-10 py-20 md:grid-cols-[0.85fr_1fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-200/65">Contact</p>
          <h1 className="mt-4 text-balance text-5xl font-bold leading-tight text-white md:text-7xl">
            Start your digital project with Wiedigital.
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tell us what you need, from a new website to SEO, apps or social media support.
          </p>
        </div>

        <form className="rounded-[2rem] border border-white/[0.08] bg-[#0b0b0d] p-6">
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-white">
              Name
              <input className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-violet-200/40" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white">
              Email
              <input className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-violet-200/40" placeholder="you@example.com" type="email" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white">
              Interest
              <select className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-violet-200/40">
                <option>Website project</option>
                <option>SEO and social media</option>
                <option>App development</option>
                <option>Digital consulting</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-white">
              Message
              <textarea className="min-h-32 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white outline-none transition focus:border-violet-200/40" placeholder="Tell us what you need" />
            </label>
            <button className="rounded-2xl bg-white px-6 py-3 font-bold text-zinc-950 transition hover:bg-zinc-100" type="button">
              Submit Inquiry
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
