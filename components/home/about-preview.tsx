import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/wp/hero-banner.webp"
              alt="AFANA team working with animals in Africa"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
              Who We Are
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl text-balance">
              Our Mission
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              To champion animal welfare in Africa through research and action
              that recognizes the interconnectedness of animal well-being,
              healthier communities, and sustainable environments.
            </p>
            <h3 className="mt-8 font-heading text-xl font-semibold text-foreground">
              Our Vision
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              A society where animals are treated humanely, and their well-being
              is protected through science, policy, and collective action for the
              benefit of people, animals, and the planet.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
