import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact | AFANA Animal Futures",
  description:
    "Get in touch with AFANA Animal Futures. Reach out for questions, collaborations, or partnership opportunities.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info.afnanimals.org",
    href: "mailto:info.afnanimals.org",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Kano, Nigeria",
    href: null,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday - Friday\n8am - 6pm",
    href: null,
  },
]

const socials = [
  { label: "Instagram", href: "#" },
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
]

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 md:pb-28">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="mb-2 font-sans text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </p>
          <h1 className="font-heading text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Get in Touch
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            {"We'd love to hear from you. Whether you're interested in our research, advocacy work, or partnership opportunities, feel free to reach out and start the conversation."}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Contact Information
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Have a question or want to collaborate with us? Reach out
                through any of the channels below.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social */}
              <div className="mt-10">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                  Follow Us
                </h3>
                <div className="mt-3 flex gap-4">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-xl bg-card p-8 shadow-sm md:p-10">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out the form below and we will get back to you as soon as
                  possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
