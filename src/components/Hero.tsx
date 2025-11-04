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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }}></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 animate-fade-in-up max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Disponible Bientôt</span>
          </div>
          
          {/* Main heading with modern gradient */}
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
            <span className="inline-block">
              Transformez
            </span>
            <br />
            <span className="text-foreground">votre Business</span>
            <br />
            <span className="inline-block">
              avec l'IA
            </span>
          </h1>
          
          {/* Modern subtitle */}
          <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Solutions d'automatisation intelligente et IA sur mesure
            <br />
            <span className="text-foreground/90">pour propulser votre croissance</span>
          </p>

          {/* Key benefits with modern cards */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8">
            <div className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 p-6 hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <p className="text-3xl font-bold text-primary mb-2">40%</p>
                <p className="text-sm text-muted-foreground">de temps économisé</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-secondary/20 p-6 hover:border-secondary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <p className="text-3xl font-bold text-secondary mb-2">3x</p>
                <p className="text-sm text-muted-foreground">productivité accrue</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 p-6 hover:border-accent/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <p className="text-3xl font-bold text-accent mb-2">24/7</p>
                <p className="text-sm text-muted-foreground">automatisation continue</p>
              </div>
            </div>
          </div>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-10 py-5 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 hover:scale-105 shadow-glow-primary"
              style={{ background: 'var(--gradient-cta)' }}
            >
              <span className="relative z-10 flex items-center gap-2 text-white">
                Demander une Démo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => scrollToSection('services')}
              className="group px-10 py-5 bg-card/50 backdrop-blur-sm border-2 border-primary/40 text-foreground rounded-2xl font-semibold text-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Découvrir nos Services
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
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
