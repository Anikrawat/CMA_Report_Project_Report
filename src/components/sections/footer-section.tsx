import Link from "next/link";

import { SiteContainer } from "@/components/sections/site-shell";
import { Button } from "@/components/ui/button";

export function FooterSection() {
  return (
    <footer className="border-t border-border bg-background">
      <SiteContainer className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-semibold">Get Started</div>
            <div className="text-sm text-muted-foreground">
              Build your report with a clean structure and bank-friendly formats.
            </div>
            <div className="pt-2">
              <Button asChild>
                <Link href="/create-project">Get Started</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Quick Links</div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link className="hover:text-foreground" href="/">
                Home
              </Link>
              <Link className="hover:text-foreground" href="/sign-in">
                Log in / Sign up
              </Link>
              <a className="hover:text-foreground" href="#pricing">
                Pricing
              </a>
              <a className="hover:text-foreground" href="#faq">
                FAQ
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold">Legal</div>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <Link className="hover:text-foreground" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="hover:text-foreground" href="/terms-and-conditions">
                Terms &amp; Conditions
              </Link>
              <Link className="hover:text-foreground" href="/disclaimer">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CMA Platform • Report Builder
          </div>
          <div className="text-sm text-muted-foreground">
            Built with theme tokens from globals.css
          </div>
        </div>
      </SiteContainer>
    </footer>
  );
}

