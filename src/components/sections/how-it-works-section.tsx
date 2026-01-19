import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/sections/site-shell";

const steps = [
  {
    step: "Step 1",
    title: "Enter Business Details",
    description:
      "Basic info like your name, business type, and funding requirement.",
  },
  {
    step: "Step 2",
    title: "Fill Financial Inputs",
    description:
      "Guided input forms for your expected income, expenses, and assets.",
  },
  {
    step: "Step 3",
    title: "Download Report",
    description:
      "Instantly generate a bank-ready report with accurate financial statements.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="text-muted-foreground">
            Take your business to the next level!
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="mb-3 inline-flex items-center gap-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  {s.step.replace("Step ", "")}
                </div>
                <div className="text-sm text-muted-foreground">{s.step}</div>
              </div>
              <div className="text-lg font-semibold">{s.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {s.description}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-semibold">Ready to get started?</div>
            <div className="text-sm text-muted-foreground">
              Create a project and start building your report now.
            </div>
          </div>
          <Button asChild size="lg">
            <Link href="/create-project">Get Started</Link>
          </Button>
        </div>
      </SiteContainer>
    </section>
  );
}

