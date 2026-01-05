import AboutPPID from "@/elements/AboutPPID";
import BackToTop from "@/elements/BackToTop";
import FAQSection from "@/elements/FAQSection";
import HeroCarousel from "@/elements/HeroCarousel";
import NewsSection from "@/elements/NewsSection";
import Partners from "@/elements/Partners";
import PublicInfoSection from "@/elements/PublicInfoSection";
import ServicesSection from "@/elements/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="md:-pt-20 -pt">
        <HeroCarousel />
        <AboutPPID />
        <Partners />
        <PublicInfoSection />
        <ServicesSection />
        <NewsSection />
        <FAQSection />
      </main>
      <BackToTop />
    </div>
  );
};

export default Index;