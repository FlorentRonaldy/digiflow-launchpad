import { Button } from "@/components/ui/button";
import heroRobot from "@/assets/hero-robot.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 lg:py-0 gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              TRANSFORM YOUR
              <span className="block text-gradient mt-2">FUTURE WITH AI</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
              Innovate. Automate. Rise.
            </p>
            
            <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
              Unlock the power of artificial intelligence to revolutionize your business. 
              From smart manufacturing to autonomous systems, we deliver cutting-edge solutions 
              that drive real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="cta"
                size="lg"
                className="text-lg px-8 py-6 h-auto"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-white text-white hover:bg-white hover:text-primary"
                onClick={() => scrollToSection("services")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-slide-in-right">
            <div className="relative">
              <img 
                src={heroRobot} 
                alt="Futuristic AI Robot Technology" 
                className="w-full max-w-2xl mx-auto animate-float drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-50" />
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
