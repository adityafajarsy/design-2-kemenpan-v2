import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Info, Search, TrainTrack } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "/images/hero-1.jpg";
import hero2 from "/images/hero-2.jpg";
import hero3 from "/images/hero-3.jpg";
import { Link } from "react-router";

const slides = [
  {
    image: hero1,
    title: "Transparansi Informasi Publik",
    subtitle:
      "Mewujudkan keterbukaan informasi untuk pelayanan publik yang lebih baik",
    cta: "Ajukan Permohonan",
    icon: <Search/>
  },
  {
    image: hero2,
    title: "Layanan Informasi Terpercaya",
    subtitle: "Akses informasi publik dengan mudah, cepat, dan transparan",
    cta: "Pelajari Lebih Lanjut",
    icon: <Info/>
  },
  {
    image: hero3,
    title: "Akses Mudah untuk Semua",
    subtitle:
      "Sistem informasi terintegrasi untuk mendukung reformasi birokrasi",
    cta: "Lacak Permohonan",
    icon: <TrainTrack/>
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full section-container flex items-center">
              <div className="max-w-2xl text-primary-foreground">
                <h1
                  className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-lg md:text-xl mb-6 md:mb-8 text-primary-foreground/90 transition-all duration-700 ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: "400ms" }}
                >
                  {slide.subtitle}
                </p>
                <Link to={"/sippid"}>
                  <Button
                    size="lg"
                    className={`bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 transition-all duration-700 cursor-pointer ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: "600ms" }}
                  >
                    {slide.cta}
                    {slide.icon}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-primary w-8 md:w-10"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
