import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-secondary">Digi</span>
              <span className="text-accent">Flow</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Transformation digitale & IA pour les entreprises malgaches.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <span>🇲🇬</span>
                <span>Antananarivo, Madagascar</span>
              </p>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <span>🌍</span>
                <span>Service International</span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Offres
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Processus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Témoignages
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-foreground font-bold mb-6">Suivez-nous</h3>
            <div className="flex gap-3 mb-8">
              <a
                href="https://www.facebook.com/profile.php?id=61583118653473"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <div className="space-y-3">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors block text-sm">
                Mentions légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors block text-sm">
                Confidentialité
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 <span className="text-accent font-semibold">DigiFlow</span> - Transformation digitale & IA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
