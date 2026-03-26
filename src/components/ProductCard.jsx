import { useState } from "react";
import { Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`}
      className="group luxury-card overflow-hidden block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-4 left-4 gold-gradient-bg text-primary-foreground font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1">
            {product.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-background/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
            
          
          <button className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-2">
          {product.category === "wallet" ? "Wallet Collection" : "Belt Collection"}
        </p>
        <h3 className="font-display text-lg mb-2 group-hover:text-primary transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-elegant text-xl text-primary">Rs. {product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;