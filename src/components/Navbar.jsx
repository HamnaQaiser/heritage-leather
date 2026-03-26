import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/CartContext";

// 👉 Import logo (if inside src/assets)
import logo from "../assets/logo.png";
// OR if using public folder → use "/logo.png" directly in src

const navLinks = [
  { label: "Collections", href: "#featured" },
  { label: "Wallets", href: "#categories" },
  { label: "Belts", href: "#categories" },
  { label: "Our Story", href: "#story" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-8">
        
        {/* ✅ Logo + Brand */}
        <Link to="/" className="flex items-center gap-2">
          
          {/* Logo Image */}
          <img
            src={logo} // 👉 or "/logo.png" if in public
            alt="Heritage Leather Logo"
            className="h-12 md:h-16 w-aut object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
          />

          {/* Brand Name (hidden on small mobile) */}
          <span className="hidden sm:block font-display text-lg md:text-2xl tracking-widest gold-gradient-text">
            Heritage Leather
          </span>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-foreground hover:text-primary"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />

            {/* Cart Count */}
            <span className="absolute -top-1 -right-1 w-4 h-4 gold-gradient-bg rounded-full text-[10px] flex items-center justify-center text-primary-foreground font-bold">
              {totalItems}
            </span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;