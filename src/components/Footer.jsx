import { useState } from "react";
import { Button } from "./ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-secondary/50 border-t border-border">
      {/* Newsletter */}
      <div className="border-b border-border">
        <div className="container mx-auto py-16 px-4 md:px-8 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Newsletter</p>
          <h3 className="font-display text-2xl md:text-3xl mb-3">Stay in the World of Luxury</h3>
          <p className="font-body text-sm text-muted-foreground mb-8 max-w-md mx-auto">
            Be the first to discover new collections, exclusive offers, and the stories behind our craft.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 px-4 bg-background border border-border font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <Button variant="luxury" size="default">
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      {/* Footer links */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <p className="font-display text-xl tracking-widest gold-gradient-text mb-4">AURELIUS</p>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Handcrafted luxury leather goods. Designed for those who appreciate the finer things.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Shop</p>
            <div className="flex flex-col gap-3">
              {["All Products", "Wallets", "Belts", "Gift Sets"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Company</p>
            <div className="flex flex-col gap-3">
              {["Our Story", "Craftsmanship", "Sustainability", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-foreground mb-4">Support</p>
            <div className="flex flex-col gap-3">
              {["Shipping & Returns", "Care Guide", "Size Guide", "FAQ"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-divider-wide mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Aurelius. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Facebook"].map((social) => (
              <a
                key={social}
                href="https://www.instagram.com/heritage.leather_2026?igsh=MW1mdmpuaWI0dHlhZQ%3D%3D&utm_source=qr"
                className="font-body text-xs text-muted-foreground hover:text-primary transition-colors tracking-wider uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
