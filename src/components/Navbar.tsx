import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";
import type { Lang } from "../data/content";

interface NavbarProps {
  lang: Lang;
  onToggleLang: () => void;
  content: {
    nav: {
      services: string;
      coverage: string;
      pricing: string;
      contact: string;
      langToggle: string;
    };
  };
}

export default function Navbar({ lang: _lang, onToggleLang, content }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: content.nav.services, href: "#services" },
    { label: content.nav.coverage, href: "#coverage" },
    { label: content.nav.pricing, href: "#pricing" },
    { label: content.nav.contact, href: "#cta" },
  ];

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-charcoal-900/95 shadow-xl backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow shadow-lg shadow-yellow-500/30">
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
          </a>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-semibold text-white/80 transition-colors hover:text-brand-yellow"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onToggleLang}
              className="rounded-full border-2 border-brand-yellow/40 bg-brand-yellow/10 px-4 py-1.5 text-xs font-bold text-brand-yellow transition-all hover:bg-brand-yellow hover:text-charcoal-900"
            >
              {content.nav.langToggle}
            </button>
            <button
              onClick={() => scrollTo("#cta")}
              className="rounded-full bg-brand-yellow px-5 py-2 text-sm font-bold text-charcoal-900 shadow-lg shadow-yellow-500/30 transition-all hover:scale-105 hover:bg-yellow-300"
            >
              WhatsApp
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={onToggleLang}
              className="rounded-full border-2 border-brand-yellow/40 px-3 py-1 text-xs font-bold text-brand-yellow"
            >
              {content.nav.langToggle}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-charcoal-900/98 p-6 shadow-2xl backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-lg font-semibold text-white/90 transition-colors hover:text-brand-yellow"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#cta")}
                className="mt-2 w-full rounded-full bg-brand-yellow py-3 text-center text-lg font-bold text-charcoal-900"
              >
                WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
