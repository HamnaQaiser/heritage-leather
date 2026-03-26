import { Gem, Hand, Shield, Gift } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Full-Grain Leather",
    description: "Sourced from the finest Italian tanneries, our leather develops a beautiful patina over time.",
  },
  {
    icon: Hand,
    title: "Handcrafted Excellence",
    description: "Every stitch is placed by hand by our master artisans with decades of experience.",
  },
  {
    icon: Shield,
    title: "Durable & Timeless Design",
    description: "Built to last a lifetime with designs that transcend fleeting trends.",
  },
  {
    icon: Gift,
    title: "Luxury Packaging",
    description: "Each piece arrives in a premium gift box, perfect for giving or indulging yourself.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">The Aurelius Difference</p>
          <h2 className="font-display text-3xl md:text-5xl mb-4">Why Choose Us</h2>
          <div className="gold-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 border border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary/60 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg mb-3">{feature.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;