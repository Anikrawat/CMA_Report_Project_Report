import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteContainer } from "@/components/sections/site-shell";

export function NavbarSection() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <SiteContainer className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            RB
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Report Builder</div>
            <div className="text-xs text-muted-foreground">CMA Platform</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a href="#who-can-use" className="hover:text-foreground">
            Who can use
          </a>
          <a href="#what-we-offer" className="hover:text-foreground">
            What we offer
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link href="/sign-in">Sign in</Link>
          </Button>
          <Button asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
        </div>
      </SiteContainer>
    </header>
  );
}

