import { outcomeStats } from '../data/home'

export default function OutcomeStrip() {
  return (
    <section className="relative mx-auto w-[min(100%-1.5rem,72rem)] py-12 pb-24 md:py-16 md:pb-28">
      <div className="grid gap-3 rounded-[2rem] border border-white/[0.08] bg-black/20 p-3 sm:grid-cols-2 lg:grid-cols-4">
        {outcomeStats.map((stat) => (
          <div className="rounded-3xl bg-white/[0.035] px-5 py-6 text-center" key={stat.value}>
            <p className="text-lg font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
