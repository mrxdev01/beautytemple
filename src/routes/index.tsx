import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, MapPin, MessageCircle, Phone, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS, SERVICES, REASONS, TESTIMONIALS, FAQS, AREAS, salonJsonLd, faqJsonLd, abs } from "@/lib/business";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero.jpg";
import gBridal from "@/assets/g-bridal.jpg";
import gHair from "@/assets/g-hair.jpg";
import gFacial from "@/assets/g-facial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Beauty Temple | Beauty Salon in Pratap Nagar, Jaipur" },
      { name: "description", content: "Visit The Beauty Temple, a modern beauty salon in Pratap Nagar, Jaipur offering hair, skin, makeup, nails, waxing & bridal services. Open daily 8 AM – 10 PM." },
      { property: "og:title", content: "The Beauty Temple | Beauty Salon in Pratap Nagar, Jaipur" },
      { property: "og:description", content: "Premium beauty salon in Pratap Nagar, Jaipur — hair, skin, nails, makeup & bridal services." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: abs("/og-cover.jpg") },
      { name: "twitter:title", content: "The Beauty Temple | Beauty Salon in Pratap Nagar, Jaipur" },
      { name: "twitter:description", content: "Premium beauty salon in Pratap Nagar, Jaipur." },
      { name: "twitter:image", content: abs("/og-cover.jpg") },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(salonJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: HomePage,
});

function RatingBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-2 text-sm shadow-soft backdrop-blur">
      <Star className="h-4 w-4 fill-primary text-primary" />
      <span className="font-semibold text-foreground">{BUSINESS.rating}</span>
      <span className="text-muted-foreground">on Google Maps</span>
      <span className="hidden text-muted-foreground sm:inline">· {BUSINESS.reviewCount}+ reviews</span>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-ivory" />
        <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-blush blur-3xl" />

        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
          <div>
            <Reveal>
              <RatingBadge />
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.05] text-foreground md:text-6xl">
                Enhance your natural beauty at <span className="text-primary">The Beauty Temple</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Premium hair, skin, nails, makeup, and grooming services in Pratap Nagar, Jaipur.
                A relaxing, hygienic salon experience trusted by local customers.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" /> Book on WhatsApp
                </a>
                <a
                  href={BUSINESS.mapsLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold text-foreground hover:bg-secondary"
                >
                  <MapPin className="h-4 w-4" /> Get directions
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Trusted by local customers in Pratap Nagar, Jaipur
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-primary/20 shadow-soft">
              <img src={heroImg} alt="The Beauty Temple salon interior" className="h-full w-full object-cover" width={1400} height={1750} fetchPriority="high" decoding="async" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-soft backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">Open today</p>
                  <p className="text-sm font-semibold">8:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x grid grid-cols-2 gap-6 py-8 text-center md:grid-cols-4">
          {[
            { k: "10+", v: "Beauty services" },
            { k: BUSINESS.rating + "★", v: "Google rating" },
            { k: "Daily", v: "8 AM – 10 PM" },
            { k: "Pratap Nagar", v: "Jaipur" },
          ].map((s) => (
            <div key={s.v}>
              <p className="font-display text-2xl font-semibold text-primary md:text-3xl">{s.k}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="container-x py-20">
        <div className="mb-10 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Our services</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">A complete beauty destination</h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary ring-1 ring-primary/20">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gradient-to-b from-background to-secondary/40">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Why choose us</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">A premium salon experience, every visit</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 50}>
                <div className="h-full rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                      <r.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container-x py-20">
        <div className="mb-10 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Glimpses</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Inside The Beauty Temple</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            { src: gBridal, alt: "Bridal makeup" },
            { src: gHair, alt: "Hair styling" },
            { src: gFacial, alt: "Skincare and facial" },
          ].map((g, i) => (
            <Reveal key={g.alt} delay={i * 80} className={i === 0 ? "row-span-2 col-span-2 md:col-span-1 md:row-span-2" : ""}>
              <div className="relative h-full overflow-hidden rounded-2xl ring-1 ring-border">
                <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TRUST / REVIEWS */}
      <section className="bg-secondary/40">
        <div className="container-x py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Loved by local customers</p>
            <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Trusted in Pratap Nagar, Jaipur</h2>
            <p className="mt-4 text-muted-foreground">
              The Beauty Temple is trusted for professional beauty care, salon services, makeup, hair care and grooming.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-primary/30 bg-card p-6 text-center shadow-soft">
              <Star className="mx-auto h-6 w-6 fill-primary text-primary" />
              <p className="mt-2 font-display text-3xl font-semibold">{BUSINESS.rating} ★</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Google Maps rating</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-display text-3xl font-semibold">{BUSINESS.reviewCount}+</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Customer reviews</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 text-center">
              <MapPin className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 font-display text-lg font-semibold">Pratap Nagar</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Jaipur, Rajasthan</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div key={t.name} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary" />)}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <p className="mt-4 text-sm font-semibold">{t.name} <span className="font-normal text-muted-foreground">· {t.role}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="container-x py-16 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">Areas served</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Serving Pratap Nagar & nearby Jaipur</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {AREAS.map((a) => (
            <span key={a} className="rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">{a}</span>
          ))}
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="container-x pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">Frequently asked</h2>
          <ul className="mt-6 divide-y divide-border">
            {FAQS.slice(0, 3).map((f) => (
              <li key={f.q} className="py-4">
                <p className="font-semibold">{f.q}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            See more on the contact page <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/30 via-blush to-secondary p-10 text-center md:p-16">
          <div className="absolute -top-24 left-1/2 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="relative font-display text-3xl font-semibold md:text-5xl">Book your appointment today</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Message us on WhatsApp and we'll confirm your slot. Walk-ins welcome subject to availability.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft hover:opacity-90">
              <MessageCircle className="h-4 w-4" /> WhatsApp now
            </a>
            <a href={BUSINESS.phoneTel} className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-semibold hover:bg-secondary">
              <Phone className="h-4 w-4" /> Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
