import * as React from "react";

import { cn } from "@/lib/utils";

export function SiteShell({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-h-screen bg-background text-foreground font-sans", className)}
      {...props}
    />
  );
}

export function SiteContainer({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4", className)} {...props} />
  );
}

