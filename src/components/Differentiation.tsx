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
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} strokeWidth={1.5} className="text-accent" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-secondary opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-2xl" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Differentiation;
