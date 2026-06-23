import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import logo from "@/assets/logo-mark.png";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-background ring-1 ring-primary/30 shadow-soft">
              <img src={logo} alt="The Beauty Temple logo" width={56} height={56} loading="lazy" className="h-12 w-12 object-contain" />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">{BUSINESS.name}</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Beauty Salon · Jaipur</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            A modern beauty salon offering hair, skin, nails, makeup, and bridal services in
            Pratap Nagar, Jaipur. Premium care in a hygienic, relaxing environment.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-muted-foreground hover:text-primary">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{BUSINESS.fullAddress}</span></li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={BUSINESS.phoneTel} className="hover:text-primary">{BUSINESS.phone}</a></li>
            <li className="flex gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href={BUSINESS.whatsappLink} target="_blank" rel="noopener" className="hover:text-primary">WhatsApp us</a></li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{BUSINESS.hours}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-muted-foreground md:flex-row">
          <p>© {year} {BUSINESS.name}. All rights reserved.</p>
          <p>Beauty Salon in Pratap Nagar, Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
