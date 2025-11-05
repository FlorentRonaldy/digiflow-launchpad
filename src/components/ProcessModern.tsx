import { MessageSquare, FileSearch, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation gratuite",
    description: "On analyse vos besoins et vos processus actuels",
    duration: "30 min",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Audit & Proposition",
    description: "On identifie les opportunités d'automatisation et on propose une solution sur mesure",
    duration: "2-3 jours",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Développement & Formation",
    description: "On crée votre solution et on forme votre équipe à l'utiliser",
    duration: "2-4 semaines",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Suivi & Optimisation",
    description: "On reste à vos côtés pour améliorer continuellement vos résultats",
    duration: "Continu",
  },
];

const ProcessModern = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Comment on travaille{" "}
            <span className="text-gradient">ensemble</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Un processus simple et transparent du début à la fin
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-20" />

          {/* Steps Grid */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                  
                  {/* Number Badge */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border">
                    <span className="text-xs font-medium text-muted-foreground">
                      ⏱ {step.duration}
                    </span>
                  </div>

                  {/* Progress Indicator */}
                  <div className="mt-4 h-1 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-1000 group-hover:w-full"
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>

                {/* Connector Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 text-accent/30 z-10">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessModern;
