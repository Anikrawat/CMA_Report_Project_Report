import { SiteContainer } from "@/components/sections/site-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const insideItems = [
  "Business Overview",
  "ROI & DSCR Ratios",
  "Project Cost Breakdown",
  "EBITDA Analysis",
  "Cost Statement",
  "Balance Sheet",
  "MBPF",
  "Break-even Analysis",
  "Sensivity Calculation",
  "Important Ratios",
  "SWOT Analysis",
  "And more",
];

export function WhatsInsideSection() {
  return (
    <section id="whats-inside" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            What’s inside the report?
          </h2>
          <p className="text-muted-foreground">
            Report contains high accuracy projection.
          </p>
        </div>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-lg">Included sections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {insideItems.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-muted-foreground"
                >
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </SiteContainer>
    </section>
  );
}

