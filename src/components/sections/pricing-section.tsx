import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiteContainer } from "@/components/sections/site-shell";

type Plan = {
  name: string;
  price: string;
  description: string;
  bullets: string[];
  highlight?: boolean;
};

const plans: Plan[] = [
  {
    name: "BASIC PLAN",
    price: "₹399",
    description:
      "Get a basic 10-page report in minutes. Perfect for small business loans or single asset loans like vehicles and machinery.",
    bullets: [
      "Report accepted by all Banks in India",
      "3 times edits",
      "Up to 10 years of projections",
      "Up to 10 pages",
      "Project Cost Calculation",
      "Depreciation Schedule",
      "Profitability Calculation",
      "Project Prospects",
      "DSCR Calculation",
      "Detailed Assumptions",
      "CA certification is available at an additional charge",
      "With “STARTUP GURUZ’ Branding in Footer",
    ],
  },
  {
    name: "ADVANCED PLAN",
    price: "₹799",
    description:
      "Create a detailed 22 page report in minutes. Ideal for government loan schemes (Mudra, PMEGP, MSME) and business loans above ₹5 lakh.",
    bullets: [
      "Report accepted by all Banks in India",
      "5 times edits",
      "Up to 10 years of projections",
      "Up to 22 pages",
      "Project Cost Calculation",
      "Depreciation Schedule",
      "Profitability Calculation",
      "Project Prospects",
      "DSCR Calculation",
      "Detailed Assumptions",
      "SWOT Analysis",
      "Target Market Analysis",
      "EBITDA Analysis",
      "ROI Calculation",
      "Break-Even Sales",
      "Repayment Schedule",
      "MPBF Calculation",
      "Important Ratios",
      "Sensivity Analysis",
      "Balance Sheet",
      "Cash FLow Statement",
      "Financial Report",
      "Loan Calculation",
      "CA certification is available at an additional charge",
      "With “STARTUP GURUZ’ Branding in Footer",
    ],
    highlight: true,
  },
  {
    name: "PREMIUM PLAN",
    price: "₹999",
    description:
      "Our expert team will prepare a customized 25 page report tailored to bank requirements for seamless loan approval.",
    bullets: [
      "Report accepted by all Banks in India",
      "10 times edits",
      "Up to 10 years of projections",
      "Up to 25 pages",
      "Project Cost Calculation",
      "Depreciation Schedule",
      "Profitability Calculation",
      "Project Prospects",
      "DSCR Calculation",
      "Detailed Assumptions",
      "SWOT Analysis",
      "Target Market Analysis",
      "EBITDA Analysis",
      "ROI Calculation",
      "Break-Even Sales",
      "Repayment Schedule",
      "MPBF Calculation",
      "Important Ratios",
      "Sensivity Analysis",
      "Balance Sheet",
      "Cash FLow Statement",
      "Financial Report",
      "Loan Calculation",
      "Break-Even Sales Analysis",
      "Sensivity Calculation",
      "CMA Report Builder",
      "CA certification is available at an additional charge",
      "Without “STARTUP GURUZ’ Branding in Footer",
    ],
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="border-b border-border bg-background">
      <SiteContainer className="py-12 md:py-16">
        <div className="mb-8 space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Pricing & Packages</h2>
          <p className="text-muted-foreground">
            Suitable for Mudra, PMEGP, Standup India, MSME & more.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={[
                "border-border bg-card",
                plan.highlight ? "ring-1 ring-ring" : "",
              ].join(" ")}
            >
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between">
                  <span className="text-lg">{plan.name}</span>
                  <span className="text-2xl font-bold">{plan.price}</span>
                </CardTitle>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  {plan.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-lg border border-border bg-background px-3 py-2"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" size="lg">
                  <Link href="/create-project">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}

