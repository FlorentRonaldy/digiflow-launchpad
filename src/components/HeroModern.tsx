import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, TrendingUp, Users } from "lucide-react";

const HeroModern = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,100,255,0.03),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
              <span className="text-2xl">🇲🇬</span>
              <span className="text-sm font-medium text-accent">#1 en transformation digitale Madagascar</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-foreground">Automatisez votre</span>
              <span className="block mt-2 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                business malgache
              </span>
              <span className="block text-foreground mt-2">avec l'IA</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-xl leading-relaxed">
              Gagnez <span className="text-accent font-semibold">20h/semaine</span> et doublez vos ventes sans embaucher
            </p>

            {/* Inline Stats */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent" />
                <span><strong className="text-foreground">150+</strong> PME</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" />
                <span><strong className="text-foreground">24h</strong> réponse</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span><strong className="text-foreground">280%</strong> ROI</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection("contact")}
              >
                Démarrer maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-border hover:border-accent hover:bg-accent/10 text-lg px-8 py-6 h-auto group backdrop-blur-sm"
                onClick={() => scrollToSection("services")}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Voir démo
              </Button>
            </div>

          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card border border-border rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-6xl font-bold text-gradient">
                      280%
                    </div>
                    <div className="text-lg text-muted-foreground">ROI Moyen Client</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2h</div>
                    <div className="text-xs text-muted-foreground">Setup rapide</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm animate-float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">+150%</div>
                    <div className="text-xs text-muted-foreground">Productivité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroModern;
