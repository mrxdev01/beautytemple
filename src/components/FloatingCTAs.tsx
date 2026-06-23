import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function FloatingCTAs() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 md:right-6 md:bottom-6">
      <a
        href={BUSINESS.whatsappLink}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
        className="pulse-ring grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-soft transition hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={BUSINESS.phoneTel}
        aria-label="Call now"
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
