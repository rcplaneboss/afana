import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-primary">
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-[url('/public/images/wp/hero-banner.jpg')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-primary/70" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-32 text-center">
        <p className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
          Championing Animal Welfare in Africa
        </p>
        <h1 className="font-heading text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
          AFANA Animal Futures
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
          Through research and action, we recognize the interconnectedness of
          animal well-being, healthier communities, and sustainable environments.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Support Our Mission
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
