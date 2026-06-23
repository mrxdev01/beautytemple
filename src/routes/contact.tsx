import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Clock, Star } from "lucide-react";
import { BUSINESS, FAQS, breadcrumb, faqJsonLd, salonJsonLd } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | The Beauty Temple, Pratap Nagar Jaipur" },
      { name: "description", content: "Visit The Beauty Temple at 151, Bhamasha Marg, Pratap Nagar, Jaipur. Call +91 98757 58280 or book on WhatsApp. Open daily 8 AM – 10 PM." },
      { property: "og:title", content: "Contact The Beauty Temple — Pratap Nagar, Jaipur" },
      { property: "og:description", content: "Address, phone, WhatsApp, hours and directions." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(salonJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])) },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    { icon: MapPin, title: "Address", body: BUSINESS.fullAddress, action: { label: "Open in Google Maps", href: BUSINESS.mapsLink, external: true } },
    { icon: Phone, title: "Phone", body: BUSINESS.phone, action: { label: "Call now", href: BUSINESS.phoneTel } },
    { icon: MessageCircle, title: "WhatsApp", body: "Quick replies on WhatsApp", action: { label: "Message us", href: BUSINESS.whatsappLink, external: true } },
    { icon: Clock, title: "Hours", body: BUSINESS.hours },
  ];

  return (
    <>
      <PageHero eyebrow="Contact & location" title="Visit The Beauty Temple" subtitle="We're easy to find in Pratap Nagar, Jaipur — open every day from 8 AM to 10 PM." />

      <section className="container-x py-12">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              {c.action && (
                <a
                  href={c.action.href}
                  {...(c.action.external ? { target: "_blank", rel: "noopener" } : {})}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                >
                  {c.action.label} →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-12">
        <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            src={BUSINESS.mapEmbed}
            title="The Beauty Temple on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[420px] w-full border-0"
          />
        </div>
        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/60 px-4 py-2 text-sm">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="font-semibold">{BUSINESS.rating} ★</span>
            <span className="text-muted-foreground">on Google Maps · {BUSINESS.reviewCount}+ reviews</span>
          </div>
          <p className="text-sm text-muted-foreground">Check our Google Maps rating, reviews, and directions.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.mapsLink} target="_blank" rel="noopener" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:opacity-90">
              <MapPin className="h-4 w-4" /> View on Google Maps
            </a>
            <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener" className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold hover:bg-secondary">
              <MessageCircle className="h-4 w-4" /> WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-4">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
