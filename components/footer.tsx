import Link from "next/link"
import { Leaf, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-[hsl(153,42%,14%)] text-[hsl(40,20%,90%)]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[hsl(153,42%,26%)]">
                <Image src="/images/logo.webp" alt="AFANA Logo" width={24} height={24} className="object-contain" />
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-[hsl(0,0%,100%)]">
                AFANA
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[hsl(40,20%,70%)]">
              Advancing Research-Driven Change in Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                Home
              </Link>
              <Link href="/about" className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                About
              </Link>
              <Link href="/contact" className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(42,50%,50%)]" />
                <span className="text-sm text-[hsl(40,20%,70%)]">
                  hi@mygroovydomain.com
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(42,50%,50%)]" />
                <span className="text-sm text-[hsl(40,20%,70%)]">
                  +234 813 635 1989
                </span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[hsl(42,50%,50%)]" />
                <span className="text-sm text-[hsl(40,20%,70%)]">
                  Kano, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-[hsl(0,0%,100%)]">
              Follow Us
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                href="#"
                className="text-sm text-[hsl(40,20%,70%)] transition-colors hover:text-[hsl(0,0%,100%)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-12 border-t border-[hsl(153,42%,20%)] pt-8">
          <p className="text-center text-sm text-[hsl(40,20%,60%)]">
            {"AFANA Animal Futures. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
