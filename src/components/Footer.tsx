import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16 border-t border-white/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold mb-4">
              <span className="text-secondary">Digi</span>
              <span className="text-accent">Flow</span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-sm">
              Solutions d'automatisation intelligente et IA pour transformer vos opérations et accélérer votre croissance.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-white/70 flex items-center gap-2">
                <span className="text-xl">🇲🇬</span>
                <span>Antananarivo, Madagascar</span>
              </p>
              <p className="text-white/70 flex items-center gap-2">
                <span className="text-xl">🌍</span>
                <span>Service International</span>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Services
                </a>
              </li>
              <li>
                <a href="#differentiation" className="text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Différenciation
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Processus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-colors inline-flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Suivez-nous</h3>
            <div className="flex gap-3 mb-8">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary hover:scale-110 hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <div className="space-y-3">
                <a href="#" className="text-white/70 hover:text-accent transition-colors block">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition-colors block">
                  Conditions d'utilisation
                </a>
                <a href="#" className="text-white/70 hover:text-accent transition-colors block">
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center space-y-2">
          <p className="text-white/80 font-medium">
            © 2025 <span className="text-accent">DigiFlow</span> - Creative Intelligence Agency
          </p>
          <p className="text-white/50 text-sm">
            Tous droits réservés. Fait avec ❤️ à Madagascar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
