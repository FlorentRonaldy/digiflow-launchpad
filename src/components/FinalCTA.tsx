import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FinalCTA = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/90 to-secondary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Prêt à transformer votre business ?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Rejoignez les 150+ entreprises malgaches qui automatisent déjà avec DigiFlow
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Sans engagement</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Réponse en 24h</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Audit gratuit</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="bg-white hover:bg-white/90 text-accent shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 group text-lg px-10 py-7 h-auto"
              onClick={() => scrollToSection("contact")}
            >
              Démarrer gratuitement
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-accent text-lg px-10 py-7 h-auto backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Planifier un appel
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-1">2h</div>
              <div className="text-sm text-white/80">Setup rapide</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">280%</div>
              <div className="text-sm text-white/80">ROI moyen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
