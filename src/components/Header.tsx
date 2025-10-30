import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-2"
            onClick={() => scrollToSection("hero")}
          >
            <div className="text-2xl font-bold">
              <span className="text-secondary">Digi</span>
              <span className="text-accent">Flow</span>
            </div>
            <div className="hidden sm:block text-xs text-white/70 border-l border-white/30 pl-2">
              AI & Automation
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Processus
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Témoignages
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent transition-colors duration-300"
            >
              Contact
            </button>
            <Button
              variant="cta"
              onClick={() => scrollToSection("contact")}
              className="shine-effect"
              size="sm"
            >
              Demander une Démo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-accent transition-colors duration-300 text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-accent transition-colors duration-300 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-white hover:text-accent transition-colors duration-300 text-left"
              >
                Processus
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-white hover:text-accent transition-colors duration-300 text-left"
              >
                Témoignages
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-accent transition-colors duration-300 text-left"
              >
                Contact
              </button>
              <Button
                variant="cta"
                onClick={() => scrollToSection("contact")}
                className="shine-effect w-full"
                size="sm"
              >
                Demander une Démo
              </Button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;
