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
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-rgb),0.05),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 via-accent/10 to-secondary/20 border border-accent/30 shadow-lg">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-accent font-bold text-sm uppercase tracking-widest">Excellence & Expertise</span>
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary mb-8 tracking-tight">
            Notre <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">Méthodologie</span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une approche <span className="text-accent font-semibold">structurée</span> et <span className="text-secondary font-semibold">professionnelle</span> pour garantir votre succès
          </p>
        </div>

        {/* Timeline Process - Vertical on Mobile, Horizontal on Desktop */}
        <div className="relative max-w-7xl mx-auto">
          
          {/* Timeline line - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-secondary/40 to-accent/20">
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-accent animate-pulse opacity-30" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={step.title}
                  className="relative group"
                  style={{ 
                    animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Connector line for mobile */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden absolute left-8 top-full w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                  )}
                  
                  {/* Vertical connector to timeline - Desktop only */}
                  <div className="hidden lg:block absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-b from-transparent via-accent/50 to-accent -translate-x-1/2">
                    <div className="absolute top-full w-4 h-4 bg-accent rounded-full -translate-x-1/2 left-1/2 shadow-glow-primary animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="relative pt-20 lg:pt-24">

                    {/* Icon Container - Floating above card */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 backdrop-blur-xl flex items-center justify-center border border-accent/30 group-hover:border-accent transition-all duration-500 group-hover:scale-110 shadow-lg">
                          <Icon className="text-accent drop-shadow-lg" size={36} strokeWidth={2.5} />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-20 h-20 rounded-2xl bg-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                      </div>
                    </div>
                    
                    {/* Main Card */}
                    <div className="relative h-full bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-xl border-2 border-border/50 rounded-3xl p-8 pt-20 transition-all duration-500 hover:border-accent hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 overflow-hidden">
                      
                      {/* Background decoration */}
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-3xl font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300 text-center">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base text-center min-h-[4rem]">
                          {step.description}
                        </p>
                      </div>
                      
                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-24 animate-fade-in">
          <div className="inline-block p-12 rounded-3xl bg-gradient-to-br from-accent/10 via-transparent to-secondary/10 border border-accent/20">
            <p className="text-2xl font-bold text-foreground mb-6">
              Prêt à <span className="text-accent">démarrer</span> votre transformation ?
            </p>
            <Button
              variant="cta"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="shine-effect shadow-glow-primary text-lg px-8 py-7"
            >
              Lancer Votre Projet
              <Rocket size={22} />
            </Button>
          </div>
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
