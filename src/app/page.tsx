import { FaqSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { NavbarSection } from "@/components/sections/navbar-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { SiteShell } from "@/components/sections/site-shell";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhatWeOfferSection } from "@/components/sections/what-we-offer-section";
import { WhatsInsideSection } from "@/components/sections/whats-inside-section";
import { WhoCanUseSection } from "@/components/sections/who-can-use-section";
import { WhyChooseSection } from "@/components/sections/why-choose-section";

export default function Home() {
  return (
    <SiteShell>
      <NavbarSection />
      <main>
        <HeroSection />
        <WhoCanUseSection />
        <WhatWeOfferSection />
        <WhatsInsideSection />
        <HowItWorksSection />
        <PricingSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <FooterSection />
    </SiteShell>
  );
}