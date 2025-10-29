import { Search, Lightbulb, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Audit & Analyse",
    description: "Analyse approfondie de vos processus et identification des opportunités d'automatisation"
  },
  {
    icon: Lightbulb,
    title: "Stratégie & Design",
    description: "Conception de la solution optimale adaptée à vos besoins spécifiques"
  },
  {
    icon: Code,
    title: "Développement & IA",
    description: "Développement de votre solution avec intégration de l'intelligence artificielle"
  },
  {
    icon: TestTube,
    title: "Tests & Optimisation",
    description: "Tests rigoureux et optimisation pour garantir la performance maximale"
  },
  {
    icon: Rocket,
    title: "Déploiement & Formation",
    description: "Mise en production et formation de vos équipes pour une adoption réussie"
  },
  {
    icon: HeadphonesIcon,
    title: "Support continu",
    description: "Accompagnement et support technique pour assurer votre succès à long terme"
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
            Un Processus <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-accent via-secondary to-accent">Éprouvé</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Six étapes clés pour transformer vos opérations avec l'IA et l'automatisation
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
                <div className="relative h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="text-accent" size={32} strokeWidth={1.5} />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            Prêt à commencer votre transformation digitale ?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-accent to-secondary text-white font-semibold hover:shadow-2xl hover:shadow-accent/30 hover:-translate-y-1 transition-all duration-300"
          >
            Démarrer Maintenant
            <Rocket size={20} />
          </button>
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
