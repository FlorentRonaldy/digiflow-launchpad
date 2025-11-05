import { Target, Zap, Users, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "150+",
    label: "Clients actifs",
    color: "accent",
  },
  {
    icon: Zap,
    value: "280%",
    label: "ROI moyen",
    color: "secondary",
  },
  {
    icon: Target,
    value: "98%",
    label: "Satisfaction",
    color: "accent",
  },
  {
    icon: Award,
    value: "24h",
    label: "Temps de réponse",
    color: "secondary",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br from-${stat.color} to-transparent`} />

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 bg-${stat.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <stat.icon className={`w-8 h-8 text-${stat.color}`} />
                </div>
              </div>

              {/* Value */}
              <div className={`text-5xl font-bold mb-2 text-${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>

              {/* Decorative Line */}
              <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-${stat.color} transition-all duration-500`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
