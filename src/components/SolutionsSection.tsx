import { Bot, ShoppingCart, Database, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Bot,
    title: "Chatbot IA 24/7",
    description: "Assistant virtuel qui répond à vos clients instantanément, à toute heure",
    benefits: [
      "Réponse en <3 secondes",
      "Support WhatsApp intégré",
      "Automatisation des FAQ",
      "Lead capture intelligent",
    ],
    metric: "Setup en 2h",
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Automatisé",
    description: "Boutique en ligne complète avec paiements et gestion automatique des commandes",
    benefits: [
      "Mobile Money intégré",
      "Gestion stock temps réel",
      "Emails automatiques",
      "Analytics avancés",
    ],
    metric: "3 jours livraison",
    color: "secondary",
  },
  {
    icon: Database,
    title: "CRM & Automatisation",
    description: "Système complet pour gérer clients, factures et workflows sans effort",
    benefits: [
      "Base données centralisée",
      "Facturation automatique",
      "Rappels intelligents",
      "Reporting en temps réel",
    ],
    metric: "ROI en 3 mois",
    color: "accent",
  },
];

const SolutionsSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Nos solutions qui{" "}
            <span className="text-gradient">transforment</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Des outils puissants et simples pour automatiser votre entreprise
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/50 via-secondary/50 to-accent/50 blur-xl -z-10" />

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-20 h-20 bg-${solution.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                  <solution.icon className={`w-10 h-10 text-${solution.color}`} />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefits List */}
              <ul className="space-y-3 mb-6">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`w-5 h-5 text-${solution.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Metric Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${solution.color}/10 border border-${solution.color}/20 mb-6`}>
                <span className={`text-sm font-semibold text-${solution.color}`}>
                  {solution.metric}
                </span>
              </div>

              {/* CTA */}
              <Button
                variant="ghost"
                className="group/btn w-full justify-between hover:bg-accent/10"
                onClick={() => scrollToSection("contact")}
              >
                <span>En savoir plus</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
