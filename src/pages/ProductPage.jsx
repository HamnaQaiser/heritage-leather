import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { ArrowLeft, Star, ShoppingBag, Minus, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { products } from "../data/products";
import { useCart } from "../contexts/CartContext";
import { toast } from "../hooks/use-tost";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [zoomed, setZoomed] = useState(false);
  const { addToCart, setIsOpen } = useCart();
   // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll optional
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl mb-4">Product Not Found</h1>
          <Button variant="luxury-outline" asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsOpen(true);
    toast({ title: "Added to Cart", description: `${product.name} × ${quantity} added to your cart.` });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div
              className="relative aspect-square overflow-hidden luxury-card cursor-zoom-in"
              onClick={() => setZoomed(!zoomed)}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  zoomed ? "scale-150" : "scale-100"
                }`}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 gold-gradient-bg text-primary-foreground font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3">
                {product.category === "wallet" ? "Wallet Collection" : "Belt Collection"}
              </p>
              <h1 className="font-display text-3xl md:text-4xl mb-4">{product.name}</h1>
              <p className="font-elegant text-3xl text-primary mb-6">Rs.{product.price}</p>
              <div className="gold-divider-wide !mx-0 mb-6" />
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <div className="flex items-center gap-4 mb-8">
                <span className="font-body text-xs tracking-wider uppercase text-muted-foreground">Quantity</span>
                <div className="flex items-center border border-border">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center font-body text-sm border-x border-border">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <Button variant="luxury" size="lg" className="w-full mb-4" onClick={handleAddToCart}>
                <ShoppingBag className="w-5 h-5 mr-2" />
                Add to Cart — Rs. {product.price * quantity}
              </Button>
              <Button variant="luxury-outline" size="lg" className="w-full" onClick={handleBuyNow}>
                Buy Now
              </Button>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {["Free Shipping", "Lifetime Warranty", "Gift Packaging", "Easy Returns"].map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full gold-gradient-bg" />
                    <span className="font-body text-xs text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span className="font-body text-sm text-muted-foreground">4.9 (128 reviews)</span>
                </div>
                <p className="font-elegant text-sm italic text-foreground/80">
                  "Absolutely stunning quality. Worth every penny." — James R.
                </p>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-24">
              <div className="text-center mb-12">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-3">You May Also Like</p>
                <h2 className="font-display text-2xl md:text-3xl">Related Products</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;