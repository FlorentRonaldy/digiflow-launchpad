import { Search, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const processSteps = [
  {
    icon: Search,
    title: "Découverte",
    description: "Analyse complète de vos besoins et objectifs pour définir la meilleure approche"
  },
  {
    icon: Lightbulb,
    title: "Conception",
    description: "Élaboration d'une stratégie sur mesure parfaitement alignée avec votre vision"
  },
  {
    icon: Code,
    title: "Développement",
    description: "Création de solutions innovantes avec les dernières technologies"
  },
  {
    icon: TestTube,
    title: "Validation",
    description: "Tests approfondis et ajustements pour garantir l'excellence"
  },
  {
    icon: Rocket,
    title: "Lancement",
    description: "Déploiement réussi et accompagnement pour une transition en douceur"
  },
  {
    icon: HeadphonesIcon,
    title: "Suivi",
    description: "Support continu et optimisations pour maximiser vos résultats"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 sm:py-28 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Notre <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Méthodologie</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Une approche structurée et professionnelle pour garantir votre succès
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={step.title}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-full bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-2">
                  
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                    <Icon className="text-accent w-8 h-8" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover effect bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-secondary rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 border border-accent/20">
            <p className="text-xl font-bold text-foreground mb-4">
              Prêt à <span className="text-accent">démarrer</span> votre transformation ?
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-lg px-8"
            >
              Lancer Votre Projet
              <Rocket size={20} />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
