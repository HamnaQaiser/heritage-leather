import { Button } from "./ui/button";
import wallet1 from "../assets/wallet-1.jpg";
import belt1 from "../assets/belt-1.jpg";

const categories = [
  {
    title: "Wallet Collection",
    subtitle: "Timeless elegance, pocket-sized",
    image: wallet1,
    cta: "Shop Wallets",
  },
  {
    title: "Belt Collection",
    subtitle: "The finishing touch of distinction",
    image: belt1,
    cta: "Shop Belts",
  },
];

const CategorySection = () => {
  return (
    <section id="categories" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Shop By Category</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Explore Our Collections</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="group relative aspect-[4/5] overflow-hidden luxury-card cursor-pointer">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">{cat.subtitle}</p>
                <h3 className="font-display text-2xl md:text-3xl mb-6">{cat.title}</h3>
                <Button variant="luxury-outline" size="default">
                  {cat.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
