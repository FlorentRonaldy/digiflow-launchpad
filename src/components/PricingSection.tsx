import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Visibilité",
    price: "500 000",
    popular: false,
    features: [
      "Site web professionnel",
      "SEO optimisé",
      "Responsive mobile",
      "Hébergement 1 an",
      "Support email",
    ],
  },
  {
    name: "E-commerce",
    price: "1 200 000",
    popular: true,
    features: [
      "Tout du pack Visibilité",
      "Boutique en ligne complète",
      "Paiement Mobile Money",
      "Gestion produits illimitée",
      "Analytics avancés",
      "Support prioritaire",
    ],
  },
  {
    name: "Gestion Complète",
    price: "2 000 000",
    popular: false,
    features: [
      "Tout du pack E-commerce",
      "CRM personnalisé",
      "Automatisation workflows",
      "Chatbot IA inclus",
      "Intégrations API",
      "Formation équipe",
      "Support 24/7",
    ],
  },
];

const PricingSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Choisissez votre{" "}
            <span className="text-gradient">pack</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Des solutions adaptées à chaque étape de votre croissance
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-3xl p-8 transition-all duration-500 animate-fade-in ${
                plan.popular
                  ? "border-accent shadow-2xl scale-105 md:scale-110"
                  : "border-border hover:shadow-xl hover:-translate-y-2"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-full shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-bold">POPULAIRE</span>
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8 pt-4">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">Ar</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mb-8 ${plan.popular ? "bg-gradient-to-r from-transparent via-accent to-transparent" : "bg-border"}`} />

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? "text-accent" : "text-muted-foreground"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl"
                    : "bg-background hover:bg-muted border border-border"
                } transition-all duration-300`}
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                {plan.popular ? "Commencer maintenant" : "Choisir ce pack"}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Tous les packs incluent une garantie satisfait ou remboursé de 30 jours</p>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
