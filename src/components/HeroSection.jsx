import { Button } from "./ui/button";
import heroDesktop from "../assets/hero-main.jpg";
import heroMobile from "../assets/mobile-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture>
          {/* Mobile Image */}
          <source media="(max-width: 768px)" srcSet={heroMobile} />

          {/* Desktop Fallback */}
          <img
            src={heroDesktop}
            alt="Luxury leather wallet and belt"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-background/90 md:via-background/70 md:to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl">
          
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Premium Leather Goods
          </p>

          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            Crafted for <span className="gold-gradient-text italic">Elegance.</span>
            <br />
            Designed for <span className="gold-gradient-text italic">Legacy.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
            Discover handcrafted leather wallets and belts made from the finest full-grain Italian leather.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button className="w-full sm:w-auto" variant="luxury" size="lg" asChild>
              <a href="#categories">Shop Wallets</a>
            </Button>
            <Button className="w-full sm:w-auto" variant="luxury-outline" size="lg" asChild>
              <a href="#categories">Shop Belts</a>
            </Button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator (Desktop Only) */}
      <div className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent mx-auto mb-2" />
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          Scroll
        </p>
      </div>
    </section>
  );
};

export default HeroSection;