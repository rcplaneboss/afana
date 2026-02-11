import Link from "next/link"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
          Join Us in Making a Difference
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          Your support helps us champion animal welfare across Africa. Together,
          we can build healthier communities and sustainable environments.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Donate Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
