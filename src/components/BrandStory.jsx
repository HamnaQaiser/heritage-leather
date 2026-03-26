import React from "react";
import craftsmanshipImg from "../assets/craftsmanship.jpg";

const BrandStory = () => {
  return (
    <section id="story" className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={craftsmanshipImg}
                alt="Close-up of premium leather stitching craftsmanship"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-primary/20 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
              Our Heritage
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              A Legacy of <span className="italic gold-gradient-text">Craftsmanship</span>
            </h2>
            <div className="gold-divider-wide !mx-0 mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              For over two decades, Aurelius has been dedicated to the art of leather craftsmanship. Each piece begins with carefully selected full-grain Italian leather — chosen for its natural beauty, durability, and the way it develops a rich patina over time.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our master artisans hand-cut, hand-stitch, and hand-finish every wallet and belt, ensuring that each product meets the exacting standards our clients have come to expect. This is not mass production — this is legacy, one piece at a time.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-3xl gold-gradient-text">25+</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Years</p>
              </div>
              <div>
                <p className="font-display text-3xl gold-gradient-text">50K+</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Pieces Crafted</p>
              </div>
              <div>
                <p className="font-display text-3xl gold-gradient-text">100%</p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">Handmade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;