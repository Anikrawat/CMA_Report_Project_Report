import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiteContainer } from "@/components/sections/site-shell";

export function HeroSection() {
  return (
    <section className="border-b border-border">
      <SiteContainer className="py-12 md:py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              CMA Report Builder for Indian bank loans
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Build bank-ready Project Reports & CMA in minutes
            </h1>

            <p className="text-pretty text-base text-muted-foreground md:text-lg">
              Use ready templates, guided inputs, and smart calculations to create
              a professional report accepted by banks—without spreadsheets.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href="/create-project">Get started</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#pricing">View pricing</a>
              </Button>
            </div>

            <div className="grid gap-3 pt-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-sm font-semibold">Ready templates</div>
                <div className="text-xs text-muted-foreground">
                  Bank-style formats
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-sm font-semibold">Smart calculations</div>
                <div className="text-xs text-muted-foreground">
                  Ratios & projections
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <div className="text-sm font-semibold">Fast output</div>
                <div className="text-xs text-muted-foreground">
                  Under 10 minutes
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">CMA Report Draft</div>
                  <div className="text-xs text-muted-foreground">
                    Preview • Auto structured
                  </div>
                </div>
                <div className="rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground">
                  Preview
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="rounded-lg border border-border bg-background p-3">
                  <div className="text-xs text-muted-foreground">Section</div>
                  <div className="text-sm font-medium">Business Overview</div>
                </div>
                <div className="rounded-lg border border-border bg-background p-3">
                  <div className="text-xs text-muted-foreground">Section</div>
                  <div className="text-sm font-medium">Project Cost</div>
                </div>
                <div className="rounded-lg border border-border bg-background p-3">
                  <div className="text-xs text-muted-foreground">Section</div>
                  <div className="text-sm font-medium">DSCR & Ratios</div>
                </div>

                <div className="rounded-lg border border-border bg-accent p-4">
                  <div className="text-sm font-semibold text-accent-foreground">
                    Ready to download
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Clean structure, accurate projections.
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent opacity-30" />
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}

