import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps {
  content: {
    testimonials: {
      title: string;
      items: Array<{
        name: string;
        location: string;
        text: string;
        rating: number;
      }>;
    };
  };
}

export default function Testimonials({ content }: TestimonialsProps) {
  return (
    <section className="relative bg-charcoal-50 py-20 sm:py-28">
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
            {content.testimonials.title}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.testimonials.items.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-charcoal-200 bg-white p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-brand-yellow/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-brand-yellow text-brand-yellow"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed text-charcoal-700">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/20 text-sm font-bold text-brand-yellow-dark">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-charcoal-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-charcoal-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
