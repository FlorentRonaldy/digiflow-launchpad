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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            NOTRE PROCESSUS
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une méthodologie éprouvée pour garantir votre succès
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />
          
          <div className="grid grid-cols-6 gap-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.title} className="relative">
                  {/* Connector Dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full border-2 border-background z-10" />
                  
                  {/* Content Card */}
                  <div className={isEven ? 'mb-48' : 'mt-48'}>
                    <div className="bg-card border border-border rounded-lg p-6">
                      {/* Number Badge */}
                      <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold mb-4 mx-auto">
                        {index + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className="text-accent mb-3 flex justify-center">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-base font-bold text-primary mb-2 text-center">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground text-center">
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.title} className="relative pl-20">
                  {/* Connector Dot */}
                  <div className="absolute left-5 top-6 w-8 h-8 bg-accent rounded-full border-4 border-background flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    {/* Icon */}
                    <div className="text-accent mb-3">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
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
