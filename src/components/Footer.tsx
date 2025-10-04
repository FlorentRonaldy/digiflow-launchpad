import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-2">
              <span className="text-secondary">Digi</span>
              <span className="text-accent">Flow</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Solutions d'automatisation intelligente et IA pour entreprises
            </p>
            <p className="text-white/60 text-sm">
              🇲🇬 Antananarivo, Madagascar
            </p>
            <p className="text-white/60 text-sm">
              🌍 Service international
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Processus
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
            <div className="flex gap-3 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            <div className="space-y-2">
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm block">
                Politique de confidentialité
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors text-sm block">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 DigiFlow - Creative Intelligence Agency. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
