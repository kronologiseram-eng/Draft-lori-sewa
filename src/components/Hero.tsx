import { motion } from "framer-motion";
import { MessageCircle, ChevronDown, Shield, Clock, DollarSign } from "lucide-react";

interface HeroProps {
  lang: string;
  content: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
      badge: string;
    };
  };
}

export default function Hero({ lang, content }: HeroProps) {
  const isBM = lang === "bm";

  const scrollToCTA = () => {
    const el = document.querySelector("#cta");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD60A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-yellow/5 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 pt-20 pb-12 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-5 py-2 text-sm font-bold text-brand-yellow backdrop-blur-sm">
            {content.hero.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {isBM ? (
            <>
              <span className="block">Pakar</span>
              <span className="block bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-yellow bg-clip-text text-transparent">
                Lori Sewa JB
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl">
                &amp; Pindah Rumah
              </span>
            </>
          ) : (
            <>
              <span className="block">JB Truck Rental &amp;</span>
              <span className="block bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-yellow bg-clip-text text-transparent">
                House Moving Experts
              </span>
            </>
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-center text-lg text-white/70 sm:text-xl"
        >
          {content.hero.subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="https://wa.me/601110134881?text=Hi%20saya%20nak%20tanya%20pasal%20servis%20lori%20sewa"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-brand-yellow px-8 py-4 text-lg font-bold text-charcoal-900 shadow-2xl shadow-yellow-500/30 transition-all hover:scale-105 hover:bg-yellow-300 hover:shadow-yellow-500/50 sm:text-xl"
          >
            <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
            {content.hero.cta}
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50"
        >
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-brand-yellow" />
            <span>{isBM ? "Harga Terendah" : "Lowest Price"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-brand-yellow" />
            <span>{isBM ? "On-Time Pickup" : "On-Time Pickup"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-yellow" />
            <span>{isBM ? "Barang Selamat" : "Items Safe"}</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToCTA}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-brand-yellow"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
