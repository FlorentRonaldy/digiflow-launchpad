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
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Notre Méthode</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Notre <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent via-secondary to-accent">Méthodologie</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Six étapes structurées pour garantir le succès de votre projet
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div
                key={step.title}
                className="group relative"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card */}
                <div className="relative h-full bg-card/80 backdrop-blur-md border-2 border-border/60 rounded-2xl p-8 transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-3 hover:bg-card">

                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <Icon className="text-accent" size={36} strokeWidth={2} />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-accent/30 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {step.description}
                  </p>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
                </div>
                
                {/* Connection line for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground mb-6 text-lg">
            Prêt à commencer votre transformation digitale ?
          </p>
          <Button
            variant="cta"
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="shine-effect shadow-glow-primary"
          >
            Démarrer Maintenant
            <Rocket size={20} />
          </Button>
        </div>

      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-grid-white\/5 {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        }
      `}</style>
    </section>
  );
};

export default Process;
