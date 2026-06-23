import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { BUSINESS, SERVICES, breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Salon Services | The Beauty Temple, Jaipur" },
      { name: "description", content: "Hair, skin, nails, makeup, waxing and bridal services at The Beauty Temple in Pratap Nagar, Jaipur. Book on WhatsApp." },
      { property: "og:title", content: "Salon Services | The Beauty Temple" },
      { property: "og:description", content: "Full menu of beauty and grooming services in Pratap Nagar, Jaipur." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])) }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Beauty services for every occasion"
        subtitle="A full menu of hair, skin, nails, makeup and grooming — all in a hygienic, relaxing space."
      >
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Book on WhatsApp
        </a>
      </PageHero>

      <section className="container-x py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 40}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary ring-1 ring-primary/20">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  Book this service →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
