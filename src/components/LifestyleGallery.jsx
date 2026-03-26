import lifestyle1 from "../assets/lifestyle-1.jpg";
import lifestyle2 from "../assets/lifestyle-2.jpg";
import lifestyle3 from "../assets/lifestyle-3.jpg";
import lifestyle4 from "../assets/lifestyle-4.jpg";

const images = [
  { src: lifestyle1, alt: "Elegant man holding premium leather wallet" },
  { src: lifestyle2, alt: "Luxury leather accessories flat lay" },
  { src: lifestyle3, alt: "Premium leather belt detail" },
  { src: lifestyle4, alt: "Luxury wallet unboxing experience" },
];

const LifestyleGallery = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">@aurelius</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">The Aurelius Lifestyle</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden cursor-pointer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
                <span className="font-body text-xs tracking-[0.2em] uppercase text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleGallery;