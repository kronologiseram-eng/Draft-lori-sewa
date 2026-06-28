import { motion } from "framer-motion";
import { Truck, Users, Home, Trash2, Package } from "lucide-react";

interface ServicesProps {
  content: {
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        icon: string;
        title: string;
        desc: string;
        tag: string;
      }>;
    };
  };
}

const iconMap: Record<string, React.ReactNode> = {
  truck: <Truck className="h-7 w-7" />,
  "truck-heavy": <Package className="h-7 w-7" />,
  users: <Users className="h-7 w-7" />,
  home: <Home className="h-7 w-7" />,
  trash: <Trash2 className="h-7 w-7" />,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services({ content }: ServicesProps) {
  return (
    <section id="services" className="relative bg-charcoal-50 py-20 sm:py-28">
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
            {content.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-600">
            {content.services.subtitle}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.services.items.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm transition-all hover:border-brand-yellow/50 hover:shadow-xl hover:shadow-yellow-100/50"
            >
              {/* Tag */}
              <span className="absolute right-4 top-4 rounded-full bg-brand-yellow/10 px-3 py-1 text-xs font-bold text-brand-yellow-dark">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-yellow to-yellow-400 text-charcoal-900 shadow-lg shadow-yellow-200/50 transition-transform group-hover:scale-110">
                {iconMap[service.icon] || <Truck className="h-7 w-7" />}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-charcoal-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-600">
                {service.desc}
              </p>

              {/* Hover arrow */}
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand-yellow opacity-0 transition-all group-hover:opacity-100">
                <a
                  href="https://wa.me/601110134881"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
