import { SiteContainer } from "@/components/sections/site-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I never thought making a project report for my cow dairy farm could be this easy. Saved me time, and my loan got approved without a single query!",
    name: "Ravi Yadav",
    role: "Dairy Farmer",
  },
  {
    quote:
      "With this, I got a clean, professional project report for my Kirana shop in just 10 minutes. Highly recommended!",
    name: "Meena Sharma",
    role: "Retail Shop Owner",
  },
  {
    quote:
      "The format and details were exactly what my bank needed. My beauty parlour loan got sanctioned smoothly.",
    name: "Anjali Verma",
    role: "Salon Owner",
  },
  {
    quote:
      "Everything was pre-filled and customizable. Got my subsidy approved for my agarbatti unit.",
    name: "Sunil Patel",
    role: "Small Scale Manufacturer",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Hear from our users</h2>
          <p className="text-muted-foreground">
            Increase credibility with more flexibility.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base">{t.name}</CardTitle>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                “{t.quote}”
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

