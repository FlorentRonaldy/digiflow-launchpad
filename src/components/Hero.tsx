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
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
              <span className="block animate-fade-in">Automatisez.</span>
              <span className="block text-gradient mt-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Accélérez. Dominez.
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-light max-w-3xl mx-auto leading-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Solutions d'IA et d'automatisation pour propulser votre entreprise
            </p>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
              DigiFlow transforme vos processus métier avec l'intelligence artificielle. 
              Réduisez vos coûts de <span className="text-accent font-semibold">60%</span>, optimisez vos workflows et obtenez un ROI en <span className="text-secondary font-semibold">3-6 mois</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button 
                size="lg"
                className="gradient-cta hover:shadow-glow-primary hover:scale-105 transition-all duration-300 text-lg px-10 py-7 h-auto group font-semibold shine-effect"
                onClick={() => scrollToSection("contact")}
              >
                Demander une Démo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 h-auto border-2 border-white/50 text-white hover:bg-white hover:text-primary hover:border-white hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/5 font-semibold"
                onClick={() => scrollToSection("services")}
              >
                Découvrir nos Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-16 max-w-4xl mx-auto">
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-glow-cyan animate-fade-in" style={{ animationDelay: "1s" }}>
                <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                  <Target className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">200+</div>
                <div className="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">Clients satisfaits</div>
              </div>
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-secondary/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-glow-orange animate-fade-in" style={{ animationDelay: "1.2s" }}>
                <div className="p-3 rounded-xl bg-secondary/20 group-hover:bg-secondary/30 transition-colors duration-300">
                  <TrendingUp className="w-8 h-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-extrabold text-white group-hover:text-secondary transition-colors duration-300">60%</div>
                <div className="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">Réduction des coûts</div>
              </div>
              <div className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-glow-cyan animate-fade-in" style={{ animationDelay: "1.4s" }}>
                <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                  <Zap className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-extrabold text-white group-hover:text-accent transition-colors duration-300">3-6</div>
                <div className="text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 font-medium">Mois pour ROI</div>
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
