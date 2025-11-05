import { Clock, Users, TrendingDown, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Temps perdu sur tâches répétitives",
    description: "3h/jour en saisie manuelle, emails et tâches administratives qui ne génèrent aucun revenu",
  },
  {
    icon: Users,
    title: "Clients perdus par lenteur",
    description: "Pas de réponse instantanée = clients qui partent chez la concurrence en 24h",
  },
  {
    icon: TrendingDown,
    title: "Croissance bloquée",
    description: "Impossible de scaler sans embaucher, mais pas de budget pour recruter une équipe",
  },
];

const ProblemsSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
            <AlertCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-destructive">Problèmes courants</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Vous en avez marre de... ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Ces problèmes coûtent des milliers d'euros à votre entreprise chaque mois
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-destructive/20 transition-all duration-300">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-destructive transition-colors">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative element */}
              <div className="mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r from-destructive to-transparent transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemsSection;
