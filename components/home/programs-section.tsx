import Image from "next/image"
import { FlaskConical, Megaphone, GraduationCap, Handshake, BookOpen } from "lucide-react"

const programs = [
  {
    icon: FlaskConical,
    title: "Research & Evidence",
    description:
      "We conduct multidisciplinary research on farmed animal welfare, health, and management systems, exploring links to human health, livelihoods, and environmental sustainability.",
    image: "/images/wp/focus-research.webp",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description:
      "We design and support interventions that improve animal welfare while enhancing food safety, occupational health, and sustainable farming practices.",
    image: "/images/wp/focus-advocacy.webp",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "We train and empower farmers, veterinarians, paraprofessionals, traders, and local authorities to ensure responsible, humane, and environmentally conscious animal care.",
    image: "/images/wp/focus-capacity.webp",
  },
  {
    icon: Handshake,
    title: "Community Engagement & Partnerships",
    description:
      "We work with communities, farmer groups, academic institutions, and animal welfare organisations to foster collaboration, shared learning, and locally grounded solutions that improve animal welfare outcomes.",
    image: "/images/wp/focus-community.webp",
  },
  {
    icon: BookOpen,
    title: "Public Education & Awareness",
    description:
      "We engage the public on animal sentience, the Five Freedoms, and the importance of humane treatment, promoting informed attitudes and responsible practices that support better welfare for farmed animals.",
    image: "/images/wp/focus-education.webp",
  },
]

export function ProgramsSection() {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
            What We Do
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
            Our Programs & Initiatives
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We take a holistic approach to improving animal welfare across the
            African continent through five core areas.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <div
                key={program.title}
                className="group flex flex-col overflow-hidden rounded-xl bg-card shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
