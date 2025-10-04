import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Target } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Flow Particles Background */}
      <div className="flow-particles" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Flowing Lines */}
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        <div className="absolute top-1/4 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-flow-line" />
        <div className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent animate-flow-line" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-3/4 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-flow-line" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          
          {/* Main Content */}
          <div className="max-w-5xl space-y-8 animate-fade-in-up">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-white">Intelligence Artificielle & Automatisation</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Automatisez.</span>
              <span className="block text-gradient mt-2">Accélérez. Dominez.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto">
              Solutions d'IA et d'automatisation pour propulser votre entreprise
            </p>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
              DigiFlow transforme vos processus métier avec l'intelligence artificielle. 
              Réduisez vos coûts de 60%, optimisez vos workflows et obtenez un ROI en 3-6 mois.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg"
                className="gradient-cta hover:opacity-90 transition-opacity text-lg px-8 py-6 h-auto group"
                onClick={() => scrollToSection("contact")}
              >
                Demander une Démo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection("services")}
              >
                Découvrir nos Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Target className="w-8 h-8 text-accent" />
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-white/70">Clients satisfaits</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <TrendingUp className="w-8 h-8 text-secondary" />
                <div className="text-3xl font-bold text-white">60%</div>
                <div className="text-sm text-white/70">Réduction des coûts</div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                <Zap className="w-8 h-8 text-accent" />
                <div className="text-3xl font-bold text-white">3-6 mois</div>
                <div className="text-sm text-white/70">ROI garanti</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
