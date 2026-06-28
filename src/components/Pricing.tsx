import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";

interface PricingProps {
  content: {
    pricing: {
      title: string;
      subtitle: string;
      highlight: string;
      price: string;
      priceNote: string;
      features: string[];
      cta: string;
      guarantee: string;
    };
  };
}

export default function Pricing({ content }: PricingProps) {
  return (
    <section id="pricing" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-black tracking-tight text-charcoal-900 sm:text-4xl lg:text-5xl">
            {content.pricing.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            {content.pricing.subtitle}
          </p>
        </motion.div>

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-14 max-w-lg"
        >
          <div className="relative overflow-hidden rounded-3xl border-2 border-brand-yellow/30 bg-gradient-to-br from-charcoal-900 to-charcoal-800 p-8 shadow-2xl shadow-charcoal-900/30 sm:p-10">
            {/* Sparkle decorations */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-yellow/20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-yellow/10 blur-2xl" />

            {/* Guarantee Badge */}
            <div className="relative mb-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2 text-sm font-bold text-charcoal-900 shadow-lg shadow-yellow-500/30">
                <Sparkles className="h-4 w-4" />
                {content.pricing.guarantee}
              </span>
            </div>

            {/* Price */}
            <div className="relative text-center">
              <p className="text-lg font-semibold text-white/60">
                {content.pricing.highlight}
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-1">
                <span className="bg-gradient-to-r from-brand-yellow via-yellow-300 to-brand-yellow bg-clip-text text-6xl font-black text-transparent sm:text-7xl">
                  {content.pricing.price}
                </span>
                <span className="text-2xl font-bold text-brand-yellow">
                  {content.pricing.priceNote}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="relative mt-8 space-y-4">
              {content.pricing.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-yellow/20">
                    <Check className="h-3.5 w-3.5 text-brand-yellow" />
                  </div>
                  <span className="text-sm font-medium text-white/80">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="relative mt-8">
              <a
                href="https://wa.me/601110134881?text=Hi%20saya%20nak%20dapatkan%20harga%20sewa%20lori"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-brand-yellow py-4 text-lg font-bold text-charcoal-900 shadow-xl shadow-yellow-500/30 transition-all hover:scale-[1.02] hover:bg-yellow-300"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                {content.pricing.cta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
