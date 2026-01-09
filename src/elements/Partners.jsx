import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { partners } from "@/data";


const Partners = () => {
  return (
    <section className="py-16 md:py-12 overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-black/60 font-semibold text-lg uppercase tracking-wider mb-3">
            Mitra Kerja
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Link Terkait
          </h2>
        </div>
      </div>

      <div className="relative mt-15 marquee-wrapper">
        <div className="flex gap-4 animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <a
              key={`${partner.abbr}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0"
            >
              <div
                className="
                  w-60 h-40 bg-card rounded-xl border border-border/60
                  flex flex-col items-center justify-center gap-2
                  transition-all duration-300 ease-out
                  opacity-70
                  group-hover:opacity-100
                  group-hover:scale-105
                  group-hover:-translate-y-1
                  group-hover:shadow-lg
                  group-hover:ring-1
                  group-hover:ring-primary/30
                "
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center leading-tight">
                  <span className="text-sm font-semibold text-foreground">
                    {partner.abbr}
                  </span>
                  <p className="text-[10px] text-muted-foreground">
                    {partner.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
