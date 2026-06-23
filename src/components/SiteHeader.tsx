import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BUSINESS, NAV } from "@/lib/business";
import logo from "@/assets/logo-mark.png";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-3 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded-full bg-background ring-1 ring-primary/30 shadow-soft">
            <img src={logo} alt="The Beauty Temple logo" width={48} height={48} className="h-10 w-10 object-contain" fetchPriority="high" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-foreground md:text-xl">
              The Beauty Temple
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Pratap Nagar · Jaipur
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([label, path]) => (
            <Link
              key={path}
              to={path}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeOptions={{ exact: path === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={BUSINESS.phoneTel}
            className="hidden h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-foreground hover:bg-secondary md:inline-flex"
          >
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener"
            className="hidden h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
          >
            Book on WhatsApp
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col py-3">
            {NAV.map(([label, path]) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                activeOptions={{ exact: path === "/" }}
                activeProps={{ className: "text-primary" }}
              >
                {label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 px-1 pb-2">
              <a href={BUSINESS.phoneTel} className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border text-sm font-medium">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener" className="inline-flex h-11 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
