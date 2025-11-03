import { Zap, Workflow, Sparkles, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description: "Automatisez vos tâches répétitives avec l'intelligence artificielle. Libérez votre équipe pour des missions à forte valeur ajoutée.",
    color: "text-accent",
    available: false,
    badge: "Bientôt disponible"
  },
  {
    icon: Workflow,
    title: "Intelligent Workflows",
    description: "Optimisez vos processus métier avec des workflows intelligents connectés à tous vos outils existants.",
    color: "text-secondary",
    available: false,
    badge: "Bientôt disponible"
  },
  {
    icon: Sparkles,
    title: "Custom AI Solutions",
    description: "Solutions IA sur mesure adaptées à vos besoins spécifiques. De la conception au déploiement.",
    color: "text-accent",
    available: false,
    badge: "Bientôt disponible"
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "Accompagnement complet dans votre transformation digitale avec les technologies les plus récentes.",
    color: "text-secondary",
    available: false,
    badge: "Bientôt disponible"
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
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Nos Expertises</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight">
            NOS SERVICES
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Des solutions complètes d'automatisation et d'IA pour <span className="text-primary font-semibold">transformer</span> votre entreprise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className={`gradient-card border border-border/50 hover:border-accent/50 hover:shadow-card-hover hover:-translate-y-3 transition-all duration-500 animate-fade-in-up group relative overflow-hidden cursor-pointer ${
                  !service.available ? 'opacity-75' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 gradient-card-hover opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
                
                <CardHeader className="space-y-5 relative z-10 pb-4">
                  {service.badge && (
                    <Badge className="w-fit gradient-cta text-white font-semibold px-3 py-1 shadow-lg">
                      {service.badge}
                    </Badge>
                  )}
                  <div className={`${service.color} transition-all group-hover:scale-125 group-hover:rotate-12 duration-700 inline-block`}>
                    <Icon size={72} strokeWidth={1.5} className="drop-shadow-lg" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl text-primary group-hover:text-accent transition-colors duration-300 font-extrabold tracking-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base sm:text-lg text-foreground/75 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
                
                {/* Animated Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
