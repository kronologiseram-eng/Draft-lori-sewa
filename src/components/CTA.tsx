import { motion } from "framer-motion";
import { MessageCircle, Phone, Clock, Truck } from "lucide-react";

interface CTAProps {
  content: {
    cta: {
      title: string;
      subtitle: string;
      button: string;
      subtext: string;
    };
  };
}

export default function CTA({ content }: CTAProps) {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-br from-charcoal-900 via-charcoal-800 to-charcoal-900 py-20 sm:py-28"
    >
      {/* Decorative elements */}
      <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-brand-yellow/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-brand-yellow/5 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-yellow/20">
            <Truck className="h-8 w-8 text-brand-yellow" />
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            {content.cta.subtitle}
          </p>

          {/* Big CTA Button */}
          <div className="mt-10">
            <a
              href="https://wa.me/601110134881?text=Hi%20saya%20nak%20tanya%20pasal%20servis%20lori%20sewa%20murah"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 rounded-full bg-brand-yellow px-10 py-5 text-xl font-black text-charcoal-900 shadow-2xl shadow-yellow-500/30 transition-all hover:scale-105 hover:bg-yellow-300 hover:shadow-yellow-500/50 sm:text-2xl"
            >
              <MessageCircle className="h-7 w-7 transition-transform group-hover:scale-110 group-hover:rotate-12" />
              {content.cta.button}
            </a>
          </div>

          {/* Subtext */}
          <p className="mt-6 text-sm text-white/40">{content.cta.subtext}</p>

          {/* Additional contact info */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <Phone className="h-5 w-5 text-brand-yellow" />
              <span className="text-sm font-semibold text-white/80">
                011-1013 4881
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3">
              <Clock className="h-5 w-5 text-brand-yellow" />
              <span className="text-sm font-semibold text-white/80">
                7 Hari Seminggu
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
