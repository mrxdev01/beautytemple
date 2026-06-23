import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BUSINESS, TESTIMONIALS, breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews | The Beauty Temple, Jaipur" },
      { name: "description", content: `Rated ${BUSINESS.rating} ★ on Google Maps. Hear what local customers say about The Beauty Temple in Pratap Nagar, Jaipur.` },
      { property: "og:title", content: "Reviews | The Beauty Temple" },
      { property: "og:description", content: "Customer reviews and ratings for The Beauty Temple, Pratap Nagar, Jaipur." },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])) }],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero eyebrow="Reviews" title="Loved by local customers" subtitle="Trusted in Pratap Nagar, Jaipur for professional beauty care, hair, makeup and grooming." />

      <section className="container-x py-12">
        <div className="mx-auto max-w-3xl rounded-3xl border border-primary/30 bg-card p-8 text-center shadow-soft">
          <div className="flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-primary" />)}
          </div>
          <p className="mt-3 font-display text-5xl font-semibold">{BUSINESS.rating} ★</p>
          <p className="text-sm uppercase tracking-wider text-muted-foreground">on Google Maps · {BUSINESS.reviewCount}+ reviews</p>
          <a
            href={BUSINESS.mapsLink}
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            View on Google Maps
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Customer reviews and rating connected from our Google Business profile.
          </p>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-primary" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold">{t.name} <span className="font-normal text-muted-foreground">· {t.role}</span></p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
