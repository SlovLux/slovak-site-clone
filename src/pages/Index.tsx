import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import hero3 from "@/assets/hero-3.png";
import hero4 from "@/assets/hero-4.png";
import hero5 from "@/assets/hero-5.png";
import hero6 from "@/assets/hero-6.png";
import hero7 from "@/assets/hero-7.png";
import hero8 from "@/assets/hero-8.png";
import hero9 from "@/assets/hero-9.png";
import hero10 from "@/assets/hero-10.png";
import hero11 from "@/assets/hero-11.png";
import hero12 from "@/assets/hero-12.png";
import hero13 from "@/assets/hero-13.png";
import hero14 from "@/assets/hero-14.png";
import hero15 from "@/assets/hero-15.png";
import hero16 from "@/assets/hero-16.png";
import hero17 from "@/assets/hero-17.png";
import hero18 from "@/assets/hero-18.png";
import hero19 from "@/assets/hero-19.png";
import hero20 from "@/assets/hero-20.png";

const heroSlides = [
  hero1, hero11, hero2, hero12, hero3, hero13, hero4, hero14, hero5, hero15,
  hero6, hero16, hero7, hero17, hero8, hero18, hero9, hero19, hero10, hero20,
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Brand intro above slider */}
      <section className="bg-background py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-primary" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              effis s.r.o.
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight text-foreground max-w-4xl mx-auto">
            Kvalitný nábytok pre{" "}
            <span className="text-primary">škôlky</span>,{" "}
            <span className="text-primary">školy</span>,{" "}
            <span className="text-primary">univerzity</span>,{" "}
            <span className="text-primary">kancelárie</span> a{" "}
            <span className="text-primary">sociálne ubytovanie</span>.
          </h1>
        </div>
      </section>

      {/* Hero Slider */}
      <section className="relative h-[420px] md:h-[560px] overflow-hidden bg-foreground">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform [transition-duration:6000ms] ease-out ${
                i === currentSlide ? "scale-110" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide})` }}
            />
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full p-2 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentSlide ? "bg-primary w-8" : "bg-foreground/30 hover:bg-foreground/50 w-3"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section className="bg-background py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Ceny produktov závisia od objednaného množstva, zvoleného prevedenia a konkrétnych požiadaviek zákazníka. Pre vypracovanie nezáväznej cenovej ponuky nás neváhajte kontaktovať.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
