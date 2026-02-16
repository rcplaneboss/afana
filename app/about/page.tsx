import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Target,
  Eye,
  FlaskConical,
  Megaphone,
  GraduationCap,
  Handshake,
  BookOpen,
  Heart,
  Scale,
  Lightbulb,
  Users,
  Leaf,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About | AFANA Animal Futures",
  description:
    "Learn about AFANA Animal Futures - our mission, vision, team, and programs championing animal welfare in Africa.",
}

const values = [
  {
    icon: FlaskConical,
    title: "Research & Evidence",
    description:
      "Multidisciplinary research on farmed animal welfare, health, and management systems.",
    image: "/images/wp/focus-research.webp",
  },
  {
    icon: Megaphone,
    title: "Advocacy",
    description:
      "Interventions that improve animal welfare while enhancing food safety and sustainable farming.",
    image: "/images/wp/focus-advocacy.webp",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "Training and empowering farmers, veterinarians, and local authorities.",
    image: "/images/wp/focus-capacity.webp",
  },
  {
    icon: Handshake,
    title: "Community Engagement",
    description:
      "Collaboration with communities, institutions, and organisations for locally grounded solutions.",
    image: "/images/wp/focus-community.webp",
  },
  {
    icon: BookOpen,
    title: "Public Education",
    description:
      "Promoting informed attitudes and responsible practices for better welfare outcomes.",
    image: "/images/wp/focus-education.webp",
  },
]

const coreValues = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We believe every animal deserves to be treated with kindness and dignity, and we let empathy guide every action we take.",
  },
  {
    icon: FlaskConical,
    title: "Evidence-Based Action",
    description:
      "Our work is grounded in rigorous, multidisciplinary research that translates findings into real-world, policy-relevant solutions.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in our research, advocacy, and partnerships, ensuring transparency and accountability.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work alongside communities, institutions, and organisations, recognising that lasting change comes through shared learning and collective effort.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creative, locally grounded solutions and digital tools to address complex challenges at the intersection of animal welfare and public health.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We champion practices that protect animal well-being while promoting healthier communities and a more sustainable environment for future generations.",
  },
]

const team = [
  {
    name: "Farhan Rhidor Akorede",
    role: "Co-Founder",
    bio: "Farhan Rhidor Akorede is a Nigerian veterinary surgeon and research scientist specialising in animal welfare, One Health, antimicrobial resistance, and livestock systems. He leads and contributes to multidisciplinary, grant-funded research across Nigeria, translating evidence into practical, policy-relevant solutions. He holds a DVM degree and he's currently pursuing his MSc in Veterinary Neuropharmacology.",
    image: "/images/wp/team-farhan.avif",
  },
  {
    name: "Kaosarah Lawal",
    role: "Co-Founder",
    bio: "Kaosarah Lawal is a veterinarian with strong technical, marketing, and analytical expertise. With interests in research, advocacy, and One Health, Kaosarah focuses on using data-driven insights and digital tools to support evidence-based decision-making, public engagement, and sustainable animal and human health initiatives in Africa.",
    image: "/images/wp/team-kaosarah.png",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
            About Us
          </p>
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Who We Are
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            AFANA Animal Futures champions animal welfare in Africa through
            research and action, recognizing the interconnectedness of animal
            well-being, healthier communities, and sustainable environments.
          </p>
        </div>
      </section>

     
      {/* Our Values */}
      <section className="bg-muted py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
              What We Stand For
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Our Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              These core values shape everything we do — from the research we
              conduct to the communities we serve.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-xl bg-card p-8 shadow-sm"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-xl bg-card p-8 shadow-sm md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                To champion animal welfare in Africa through research and action
                that recognizes the interconnectedness of animal well-being,
                healthier communities, and sustainable environments.
              </p>
            </div>
            <div className="flex flex-col rounded-xl bg-card p-8 shadow-sm md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/15">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">
                A society where animals are treated humanely, and their
                well-being is protected through science, policy, and collective
                action for the benefit of people, animals, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Team */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center">
            <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
              Our People
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Our Team
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center rounded-xl bg-card p-8 text-center shadow-sm md:flex-row md:items-start md:text-left md:p-10"
              >
                <div className="relative mb-6 h-28 w-28 shrink-0 overflow-hidden rounded-full md:mb-0 md:mr-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
            Support Our Mission
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            Together, we can create a future where animals are treated humanely
            and communities thrive.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  )
}
