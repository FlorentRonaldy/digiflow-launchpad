import { Zap, Workflow, Sparkles, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Automatisez vos tâches répétitives avec l'intelligence artificielle. Libérez votre équipe pour des missions à forte valeur ajoutée.",
    color: "text-accent",
    available: true
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Optimisez vos processus métier avec des workflows intelligents connectés à tous vos outils existants.",
    color: "text-secondary",
    available: true
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Solutions IA sur mesure adaptées à vos besoins spécifiques. De la conception au déploiement.",
    color: "text-accent",
    available: true
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Accompagnement complet dans votre transformation digitale avec les technologies les plus récentes.",
    color: "text-secondary",
    available: true
  },
  {
    icon: TrendingUp,
    title: "Marketing Automation",
    description: "Automatisez vos campagnes marketing, lead nurturing et customer journey pour maximiser vos conversions.",
    color: "text-accent",
    available: false,
    badge: "Bientôt disponible"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            NOS SERVICES
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes d'automatisation et d'IA pour transformer votre entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`gradient-card border-0 hover:shadow-glow-cyan hover:-translate-y-2 transition-all duration-500 animate-fade-in-up group relative overflow-hidden cursor-pointer ${
                  !service.available ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <CardHeader className="space-y-4 relative z-10">
                  {service.badge && (
                    <Badge className="w-fit bg-secondary text-white animate-pulse">
                      {service.badge}
                    </Badge>
                  )}
                  <div className={`${service.color} transition-all group-hover:scale-110 group-hover:rotate-6 duration-500`}>
                    <Icon size={64} strokeWidth={1.5} className="group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base text-foreground/80 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-lg transition-all duration-500" />
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
