import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">FloRise</h3>
            <p className="text-accent text-sm">AI & Automation Solutions</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/70">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>

          {/* Copyright */}
          <div className="text-white/60 text-sm text-center pt-6 border-t border-white/10 w-full">
            <p>© 2025 FloRise - All rights reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
