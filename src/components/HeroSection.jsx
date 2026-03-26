import { Button } from "./ui/button";
import heroImage from "../assets/hero-main.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury leather wallet and belt on black marble"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-2xl">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6 animate-fade-up opacity-0 delay-100">
            Premium Leather Goods
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-up opacity-0 delay-200">
            Crafted for{" "}
            <span className="gold-gradient-text italic">Elegance.</span>
            <br />
            Designed for{" "}
            <span className="gold-gradient-text italic">Legacy.</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed animate-fade-up opacity-0 delay-300">
            Discover handcrafted leather wallets and belts made from the finest full-grain Italian leather. Each piece tells a story of timeless artisanship.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-up opacity-0 delay-400">
            <Button variant="luxury" size="lg" asChild>
              <a href="#categories">Shop Wallets</a>
            </Button>
            <Button variant="luxury-outline" size="lg" asChild>
              <a href="#categories">Shop Belts</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up opacity-0 delay-500">
        <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent mx-auto mb-2" />
        <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;