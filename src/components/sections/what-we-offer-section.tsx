import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteContainer } from "@/components/sections/site-shell";

const offers = [
  {
    title: "Ready-to-Use Templates",
    description:
      "Pre-designed, industry-specific templates that match bank formats.",
  },
  {
    title: "Smart Financial Calculations",
    description:
      "Just fill in basic details, we handle projections, ratios, break-even points, and more.",
  },
  {
    title: "Secure & Confidential",
    description: "Your data is encrypted and only accessible by you.",
  },
  {
    title: "Built for Entrepreneurs",
    description:
      "No need for consultants or complex spreadsheets. Focus on your business, we’ll handle the report.",
  },
];

export function WhatWeOfferSection() {
  return (
    <section id="what-we-offer" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">What we offer</h2>
          <p className="text-muted-foreground">
            We give best, because you deserve best.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {offers.map((item) => (
            <Card key={item.title} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

