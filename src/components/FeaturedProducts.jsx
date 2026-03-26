import { useState } from "react";
import { products } from "../data/products"; // adjust path for your project
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const [filter, setFilter] = useState("all"); // removed TypeScript type

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  const filters = [
    { key: "all", label: "All" },       // removed 'as const'
    { key: "wallet", label: "Wallets" },
    { key: "belt", label: "Belts" },
  ];

  return (
    <section id="featured" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
            The Collection
          </p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Featured Products</h2>
          <div className="gold-divider mb-8" />
          <p className="font-body text-muted-foreground max-w-lg mx-auto">
            Each piece is meticulously crafted from the finest full-grain leather, designed to age beautifully.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center gap-6 mb-14">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`font-body text-xs tracking-[0.2em] uppercase pb-2 border-b-2 transition-all duration-300 ${
                filter === f.key
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;