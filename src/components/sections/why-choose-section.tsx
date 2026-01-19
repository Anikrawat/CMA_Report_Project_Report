import { SiteContainer } from "@/components/sections/site-shell";

const reasons = [
  "Affordable pricing (starting from ₹399 only)",
  "Save time report ready in under 10 minutes",
  "Expert support available",
  "Trusted by 10,000+ entrepreneurs",
];

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Why choose us?</h2>
          <p className="text-muted-foreground">Proven results!</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {reasons.map((text) => (
            <div
              key={text}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="text-sm font-semibold text-foreground">{text}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Built to make reports faster and more reliable.
              </div>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

