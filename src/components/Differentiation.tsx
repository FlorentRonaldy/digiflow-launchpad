import { Brain, TrendingUp, Globe, Code } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "L'IA au cœur",
    description: "Intelligence artificielle intégrée dans chaque solution pour des résultats optimaux"
  },
  {
    icon: TrendingUp,
    title: "ROI rapide",
    description: "Retour sur investissement garanti en 3-6 mois avec des résultats mesurables"
  },
  {
    icon: Globe,
    title: "Expertise internationale",
    description: "Standards internationaux, tarifs compétitifs (-60% vs Europe/US)"
  },
  {
    icon: Code,
    title: "Tech open-source",
    description: "Solutions basées sur n8n et technologies open-source pour plus de flexibilité"
  }
];

const Differentiation = () => {
  return (
    <section id="differentiation" className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            POURQUOI DIGIFLOW ?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Ce qui nous différencie et fait notre force
          </p>
        </div>

        {/* Differentiation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 text-accent group-hover:scale-110 transition-transform duration-300">
                  <Icon size={48} strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Differentiation;
