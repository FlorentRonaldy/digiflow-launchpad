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
    <section id="process" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            NOTRE PROCESSUS
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Une méthodologie éprouvée pour garantir votre succès
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent transform -translate-y-1/2" />
          
          <div className="grid grid-cols-6 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.title} className="relative">
                  {/* Connector Dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background z-10 shadow-glow-cyan" />
                  
                  {/* Content Card */}
                  <div
                    className={`animate-fade-in-up ${
                      isEven ? 'mb-48' : 'mt-48'
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-glow-cyan transition-all duration-300 hover:-translate-y-2">
                      {/* Number Badge */}
                      <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-accent mb-3 flex justify-center">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-lg font-bold text-primary mb-2 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-secondary to-accent" />
          
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div
                  key={step.title}
                  className="relative pl-20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Connector Dot */}
                  <div className="absolute left-5 top-6 w-8 h-8 bg-accent rounded-full border-4 border-background shadow-glow-cyan flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-glow-cyan transition-all duration-300">
                    {/* Icon */}
                    <div className="text-accent mb-3">
                      <Icon size={40} strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
