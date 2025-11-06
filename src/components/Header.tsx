import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-xl shadow-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="cursor-pointer flex items-center gap-3 group"
            onClick={() => scrollToSection("hero")}
          >
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-secondary">Digi</span>
              <span className="text-accent">Flow</span>
            </div>
            <div className="hidden sm:block text-xs text-muted-foreground border-l border-border pl-3">
              AI & Automation
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              Offres
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              Contact
            </button>
            <div className="ml-2">
              <ThemeToggle />
            </div>
            <Button
              variant="default"
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              size="sm"
            >
              Audit Gratuit
            </Button>
          </nav>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground p-2 hover:bg-accent/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl animate-fade-in">
            <div className="flex flex-col p-6 gap-2">
              <button
                onClick={() => scrollToSection("services")}
                className="px-4 py-3 rounded-lg text-left font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="px-4 py-3 rounded-lg text-left font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all"
              >
                Offres
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="px-4 py-3 rounded-lg text-left font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-3 rounded-lg text-left font-medium text-foreground hover:text-accent hover:bg-accent/10 transition-all"
              >
                Contact
              </button>
              <Button
                variant="default"
                onClick={() => scrollToSection("contact")}
                className="mt-4 w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                Audit Gratuit
              </Button>
            </div>
          </nav>
        )}
      </nav>
    </header>
  );
};

export default Header;
