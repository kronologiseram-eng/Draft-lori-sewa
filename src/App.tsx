import { useState, useCallback } from "react";
import { content, type Lang } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Coverage from "./components/Coverage";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  const [lang, setLang] = useState<Lang>("bm");
  const t = content[lang];

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "bm" ? "en" : "bm"));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar lang={lang} onToggleLang={toggleLang} content={t} />
      <Hero lang={lang} content={t} />
      <Services content={t} />
      <Coverage content={t} />
      <Pricing content={t} />
      <Testimonials content={t} />
      <FAQ content={t} />
      <CTA content={t} />
      <Footer content={t} />
      <WhatsAppFloat />
    </div>
  );
}
