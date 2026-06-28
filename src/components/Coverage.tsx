import { motion } from "framer-motion";
import { MapPin, Navigation, Check } from "lucide-react";

interface CoverageProps {
  content: {
    coverage: {
      title: string;
      subtitle: string;
      local: { title: string; areas: string[] };
      interstate: { title: string; areas: string[] };
      badge: string;
    };
  };
}

export default function Coverage({ content }: CoverageProps) {
  return (
    <section id="coverage" className="relative bg-charcoal-900 py-20 sm:py-28">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFD60A' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='m0 40 40-40h-40v40zm40 0v-40h-40'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-4 py-1.5 text-sm font-bold text-brand-yellow">
            <MapPin className="h-4 w-4" /> {content.coverage.badge}
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {content.coverage.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            {content.coverage.subtitle}
          </p>
        </motion.div>

        {/* Coverage Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Local Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-yellow">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {content.coverage.local.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {content.coverage.local.areas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  <span className="text-sm font-medium text-white/80">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interstate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-brand-yellow/20 bg-gradient-to-br from-brand-yellow/10 to-brand-yellow/5 p-8 backdrop-blur-sm"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-yellow text-charcoal-900">
                <Navigation className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {content.coverage.interstate.title}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {content.coverage.interstate.areas.map((area, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.3 }}
                  className="flex items-center gap-2 rounded-lg bg-brand-yellow/10 px-3 py-2"
                >
                  <Check className="h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  <span className="text-sm font-semibold text-brand-yellow">
                    {area}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
