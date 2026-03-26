import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alexander M.",
    role: "Entrepreneur",
    text: "The craftsmanship is exceptional. My Aurelius wallet has aged beautifully over two years — it looks even better now than when I first received it.",
    rating: 5,
  },
  {
    name: "Victoria S.",
    role: "Fashion Editor",
    text: "I've reviewed dozens of luxury leather brands. Aurelius stands out for their attention to detail and the quality of their leather. Truly world-class.",
    rating: 5,
  },
  {
    name: "James R.",
    role: "Executive",
    text: "The belt is simply perfect. The gold buckle, the weight of the leather — everything feels premium. This is now my go-to gift for colleagues.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">What Our Clients Say</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="luxury-card p-8 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-elegant text-lg italic text-foreground/90 mb-8 leading-relaxed">
                "{t.text}"
              </p>
              <div className="gold-divider mb-6" />
              <p className="font-display text-sm tracking-wider">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;