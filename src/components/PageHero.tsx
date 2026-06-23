import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, subtitle, children }: { eyebrow?: string; title: string; subtitle?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 via-background to-background">
      <div className="absolute inset-x-0 -top-24 -z-10 mx-auto h-80 max-w-3xl rounded-full bg-primary/20 blur-3xl" />
      <div className="container-x py-16 text-center md:py-24">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        )}
        <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
}
