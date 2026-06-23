import { createFileRoute } from "@tanstack/react-router";
import { breadcrumb } from "@/lib/business";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import gBridal from "@/assets/g-bridal.jpg";
import gHair from "@/assets/g-hair.jpg";
import gNails from "@/assets/g-nails.jpg";
import gFacial from "@/assets/g-facial.jpg";
import gInterior from "@/assets/g-interior.jpg";
import gColor from "@/assets/g-color.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | The Beauty Temple, Pratap Nagar Jaipur" },
      { name: "description", content: "A glimpse inside The Beauty Temple — salon interiors, hair, makeup, nails, bridal and skincare looks in Pratap Nagar, Jaipur." },
      { property: "og:title", content: "Gallery | The Beauty Temple" },
      { property: "og:description", content: "Salon interior, hair, makeup, nails and bridal looks." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumb([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])) }],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { src: gInterior, alt: "Salon interior" },
  { src: gBridal, alt: "Bridal makeup" },
  { src: gHair, alt: "Hair styling" },
  { src: gColor, alt: "Hair color" },
  { src: gNails, alt: "Spa and nail care" },
  { src: gFacial, alt: "Facial and skincare" },
];

function GalleryPage() {
  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside The Beauty Temple" subtitle="Salon interior, hair, makeup, nails and skincare moments." />
      <section className="container-x py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {ITEMS.map((g, i) => (
            <Reveal key={g.alt} delay={i * 60}>
              <div className="mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-border">
                <img src={g.src} alt={g.alt} loading="lazy" className="w-full object-cover transition duration-700 hover:scale-[1.03]" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
