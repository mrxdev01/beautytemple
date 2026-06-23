import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, REASONS, abs, breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import gInterior from "@/assets/g-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | The Beauty Temple, Pratap Nagar Jaipur" },
      { name: "description", content: "Learn about The Beauty Temple — a modern, hygienic beauty salon in Pratap Nagar, Jaipur, offering hair, skin, makeup and bridal services." },
      { property: "og:title", content: "About Us | The Beauty Temple" },
      { property: "og:description", content: "A modern beauty salon in Pratap Nagar, Jaipur with skilled professionals and a relaxing atmosphere." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])) }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A modern beauty destination in Pratap Nagar"
        subtitle="The Beauty Temple is a premium yet approachable salon offering hair, skin, nails, makeup and bridal services for everyday looks and special occasions."
      />

      <section className="container-x grid items-center gap-12 py-16 md:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl ring-1 ring-border">
            <img src={gInterior} alt="The Beauty Temple salon interior" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Beauty, care and confidence — every visit</h2>
          <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              The Beauty Temple is a modern beauty salon located in Pratap Nagar, Jaipur. We offer
              a complete range of beauty and grooming services including hair care, skin care,
              makeup, nails, waxing, and bridal services.
            </p>
            <p>
              Our goal is simple — to provide a relaxing, hygienic, and professional salon
              experience for every client. From a quick trim to a full bridal package, our skilled
              team treats every appointment with care and attention.
            </p>
            <p>
              We're easy to reach from {BUSINESS.addressArea}, Sector 6, Sector 8 and nearby
              localities, and we're open every day from 8 AM to 10 PM.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/40">
        <div className="container-x py-16">
          <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">What we stand for</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 60}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                    <r.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
