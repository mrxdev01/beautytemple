import { Scissors, Sparkles, Flower2, Hand, Footprints, Brush, Eye, Droplets, Palette, Crown, Heart, ShieldCheck, Clock, MapPin, Star } from "lucide-react";

export const SITE_URL: string = ""; // TODO: set after publish

export const BUSINESS = {
  name: "Beauty Salon",
  shortName: "Beauty Salon",
  type: "Beauty Salon",
  tagline: "Premium beauty salon in Pratap Nagar, Jaipur",
  description:
    "A modern beauty salon in Pratap Nagar, Jaipur offering hair, skin, nails, makeup, and grooming services.",
  phone: "+91 9999999999",
  phoneTel: "tel:+919999999999",
  whatsapp: "919999999999",
  whatsappText: "Hi%20The%20Beauty%Salon%2C%20I%20want%20to%20book%20a%20salon%20appointment.",
  get whatsappLink() {
    return `https://wa.me/${this.whatsapp}?text=${this.whatsappText}`;
  },
  email: "abc@salon.com",
  addressLine: "1, Bhamasha Marg, Balaji Nagar, Sector 3",
  addressArea: "Sector 3, Pratap Nagar",
  city: "Jaipur",
  region: "Rajasthan",
  postalCode: "302033",
  country: "IN",
  fullAddress:
    "1 Bhamasha Marg, Tirupati Balaji Nagar, Sector 3, Sector 3, Pratap Nagar, Jaipur, Rajasthan 302033",
  hours: "Mon–Sun · 8:00 AM – 10:00 PM",
  hoursStructured: "Mo-Su 08:00-22:00",
  geo: { lat: 26.7995604, lng: 75.8158025 },
  mapsLink: "https://maps.app.goo.gl/PqXaS2SpWyLVNhvX9",
  mapEmbed:
    "https://maps.app.goo.gl/PqXaS2SpWyLVNhvX9",
  rating: 4.8,
  reviewCount: 442,
};

export const NAV: Array<[string, string]> = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Gallery", "/gallery"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
];

export const SERVICES = [
  { icon: Scissors, title: "Haircut & Styling", desc: "Professional haircut and styling for a fresh, confident look." },
  { icon: Sparkles, title: "Hair Spa", desc: "Nourishing hair spa treatment to improve smoothness, shine and texture." },
  { icon: Droplets, title: "Hair Smoothening", desc: "Sleek and manageable hair transformation with professional care." },
  { icon: Palette, title: "Hair Color", desc: "Stylish hair color services to refresh and enhance your look." },
  { icon: Flower2, title: "Facial Treatment", desc: "Skin-focused facial services for a clean, fresh and glowing appearance." },
  { icon: Heart, title: "Bleach & Skin Care", desc: "Gentle beauty care services to brighten and refresh the skin." },
  { icon: Hand, title: "Manicure & Pedicure", desc: "Relaxing hand and foot care for clean, polished, beautiful nails." },
  { icon: Footprints, title: "Waxing & Hair Removal", desc: "Hygienic waxing and hair removal services for smooth skin." },
  { icon: Eye, title: "Threading", desc: "Eyebrow and facial threading for a clean, defined finish." },
  { icon: Brush, title: "Party Makeup", desc: "Elegant makeup for parties, functions and special occasions." },
  { icon: Crown, title: "Bridal Makeup", desc: "Premium makeup services for bridal, engagement and wedding events." },
];

export const REASONS = [
  { icon: Sparkles, title: "Complete beauty destination", desc: "Hair, skin, nails, makeup and grooming under one roof." },
  { icon: ShieldCheck, title: "Hygienic & comfortable", desc: "Sanitised tools, fresh linen and a relaxing environment." },
  { icon: Crown, title: "Professional salon experience", desc: "Skilled beauticians trained in modern techniques." },
  { icon: Heart, title: "Everyday & special occasions", desc: "From a quick trim to full bridal — we do it all." },
  { icon: Clock, title: "Open daily 8 AM – 10 PM", desc: "Flexible timings to fit your schedule." },
  { icon: MapPin, title: "Conveniently located", desc: "Near Sector 6, Sector 8, Pratap Nagar." },
];

export const TESTIMONIALS = [
  { name: "Priya S.", role: "Pratap Nagar", text: "Loved the salon experience and service quality. The staff is very professional and the place feels so relaxing." },
  { name: "Anjali K.", role: "Sector 8", text: "Great place for hair and beauty services. Got my hair coloured here and absolutely loved the result." },
  { name: "Neha M.", role: "Sanganer", text: "Professional staff and a comfortable environment. My go-to salon for facials and bridal trials." },
  { name: "Ritu A.", role: "Sector 6", text: "Hygienic, premium and affordable. Booking on WhatsApp is super easy." },
];

export const FAQS = [
  { q: "Where is The Beauty Temple located?", a: "We are at 151, Bhamasha Marg, Tirupati Balaji Nagar, Sector 8, Pratap Nagar, Jaipur — easily reachable from Sector 6 and Sanganer." },
  { q: "What are your timings?", a: "We are open every day, Monday to Sunday, from 8:00 AM to 10:00 PM." },
  { q: "How do I book an appointment?", a: "The fastest way is to message us on WhatsApp at +91 98757 58280. You can also call us directly." },
  { q: "Do you offer bridal packages?", a: "Yes, we offer bridal and engagement makeup along with full pre-bridal grooming. Contact us for a custom package." },
  { q: "Are walk-ins accepted?", a: "Walk-ins are welcome subject to availability. We recommend booking via WhatsApp to avoid waiting." },
  { q: "Do you serve nearby areas?", a: "Yes, we welcome customers from Pratap Nagar, Sector 6, Sector 8, Tirupati Balaji Nagar, Bhamasha Marg, Sanganer and other Jaipur localities." },
];

export const AREAS = [
  "Pratap Nagar", "Sector 6", "Sector 8", "Tirupati Balaji Nagar",
  "Bhamasha Marg", "Sanganer", "Jaipur",
];

export function abs(path: string) {
  if (!SITE_URL) return path;
  return `${SITE_URL.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export const salonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: BUSINESS.name,
  description: BUSINESS.description,
  image: abs("/og-cover.jpg"),
  telephone: BUSINESS.phone,
  url: SITE_URL || undefined,
  address: {
    "@type": "PostalAddress",
    streetAddress: "151, Bhamasha Marg, Tirupati Balaji Nagar, Sector 8",
    addressLocality: "Jaipur",
    addressRegion: "Rajasthan",
    postalCode: "302033",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  openingHours: BUSINESS.hoursStructured,
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
  },
  hasMap: BUSINESS.mapsLink,
  makesOffer: SERVICES.map((s) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: s.title, description: s.desc },
  })),
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function breadcrumb(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

export { Star };
