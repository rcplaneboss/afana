import { Users, BookOpen, Globe, HeartHandshake } from "lucide-react"

const stats = [
 
  {
    icon: BookOpen,
    value: "Research",
    label: "Evidence-Based Approach",
  },
  {
    icon: Globe,
    value: "Africa",
    label: "Continental Reach",
  },
  {
    icon: HeartHandshake,
    value: "One Health",
    label: "Integrated Framework",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
            Our Impact
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Making a Difference
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Through science, policy, and collective action we strive for the
            benefit of people, animals, and the planet.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl bg-card p-8 text-center shadow-sm"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <span className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
