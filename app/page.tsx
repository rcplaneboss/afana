import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ProgramsSection } from "@/components/home/programs-section"
import { ImpactSection } from "@/components/home/impact-section"
import { CtaSection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <AboutPreview /> */}
      <ProgramsSection />
      <ImpactSection />
      <CtaSection />
    </>
  )
}
