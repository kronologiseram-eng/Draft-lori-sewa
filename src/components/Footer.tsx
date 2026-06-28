import { Truck, MessageCircle, Phone, MapPin } from "lucide-react";

interface FooterProps {
  content: {
    footer: {
      tagline: string;
      copyright: string;
    };
  };
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-charcoal-900 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow shadow-lg">
                <Truck className="h-5 w-5 text-charcoal-900" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-extrabold text-white">
                  LORI SEWA
                </span>
                <span className="text-[10px] font-bold tracking-wider text-brand-yellow">
                  MURAH JB
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              {content.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white">Quick Links</h4>
            <div className="mt-4 space-y-3">
              {[
                { label: "Servis", href: "#services" },
                { label: "Kawasan", href: "#coverage" },
                { label: "Harga", href: "#pricing" },
                { label: "FAQ", href: "#" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white">Servis</h4>
            <div className="mt-4 space-y-3">
              {[
                "Lori 1-Tan",
                "Lori 3-Tan",
                "Servis Pekerja",
                "Pindah Rumah",
                "Buang Perabot",
              ].map((service) => (
                <p key={service} className="text-sm text-white/50">
                  {service}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white">Hubungi</h4>
            <div className="mt-4 space-y-3">
              <a
                href="https://wa.me/601110134881"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand-yellow"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+601110134881"
                className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand-yellow"
              >
                <Phone className="h-4 w-4" />
                011-1013 4881
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <MapPin className="h-4 w-4" />
                Johor Bahru, Malaysia
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/30">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
