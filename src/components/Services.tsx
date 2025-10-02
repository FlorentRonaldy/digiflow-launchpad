import { Settings, Brain, Search, Layers } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Settings,
    title: "Smart Manufacturing",
    description: "Optimisez votre production avec des solutions d'automatisation industrielle intelligentes et évolutives.",
    color: "text-accent"
  },
  {
    icon: Brain,
    title: "Autonomous Systems",
    description: "Développez des systèmes autonomes capables de prendre des décisions intelligentes en temps réel.",
    color: "text-secondary"
  },
  {
    icon: Search,
    title: "Data Intelligence",
    description: "Transformez vos données en insights actionnables grâce à l'intelligence artificielle avancée.",
    color: "text-accent"
  },
  {
    icon: Layers,
    title: "Scalable AI Platforms",
    description: "Déployez des plateformes IA évolutives adaptées à la croissance de votre entreprise.",
    color: "text-secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-4">
            OUR SERVICES
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="gradient-card border-0 hover:shadow-glow-violet hover:-translate-y-2 transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`${service.color} transition-transform group-hover:scale-110 duration-300`}>
                    <Icon size={64} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-foreground/80 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
