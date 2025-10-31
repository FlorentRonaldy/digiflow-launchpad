import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      whatsapp: "",
      message: ""
    };

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Le nom doit faire moins de 100 caractères";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Veuillez entrer un email valide";
    } else if (formData.email.trim().length > 255) {
      newErrors.email = "L'email doit faire moins de 255 caractères";
    }

    if (formData.whatsapp.trim()) {
      if (!/^\+?[\d\s-]{10,20}$/.test(formData.whatsapp.trim())) {
        newErrors.whatsapp = "Numéro WhatsApp invalide";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Le message doit faire moins de 2000 caractères";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mblpoekr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          message: formData.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: "Message envoyé!",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });

      setFormData({ name: "", email: "", whatsapp: "", message: "" });
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer le message. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Parlons de votre projet</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight">
            CONTACTEZ-NOUS
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Prêt à <span className="text-primary font-semibold">transformer</span> votre entreprise ? Discutons de votre projet
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="gradient-card border border-border/50 shadow-xl-custom hover:shadow-card-hover transition-all duration-500 backdrop-blur-sm">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-3xl sm:text-4xl text-primary font-extrabold tracking-tight">
                Envoyez-nous un message
              </CardTitle>
              <p className="text-muted-foreground">Nous répondons généralement sous 24h</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                    Nom complet <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-12 text-base border-border/50 focus:border-accent transition-colors ${errors.name ? "border-destructive" : ""}`}
                    placeholder="Jean Dupont"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                    Email professionnel <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-12 text-base border-border/50 focus:border-accent transition-colors ${errors.email ? "border-destructive" : ""}`}
                    placeholder="jean.dupont@entreprise.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-foreground">
                    <Phone className="inline-block w-4 h-4 mr-1" />
                    Numéro WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    maxLength={20}
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`w-full h-12 text-base border-border/50 focus:border-accent transition-colors ${errors.whatsapp ? "border-destructive" : ""}`}
                    placeholder="+261 34 12 345 67"
                  />
                  {errors.whatsapp && (
                    <p className="text-destructive text-sm mt-1">{errors.whatsapp}</p>
                  )}
                  <p className="text-xs text-muted-foreground">Format: +261 34 12 345 67</p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    maxLength={2000}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full min-h-[180px] text-base border-border/50 focus:border-accent transition-colors resize-none ${errors.message ? "border-destructive" : ""}`}
                    placeholder="Parlez-nous de votre projet d'automatisation et des défis que vous souhaitez relever..."
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  className="w-full shine-effect text-lg py-7"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ENVOI EN COURS...
                    </span>
                  ) : (
                    "ENVOYER LE MESSAGE"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Info Cards */}
            <Card className="gradient-card border border-border/50 shadow-lg hover:shadow-card-hover transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-accent transition-colors">Email</h3>
                    <a 
                      href="mailto:contact@digiflow.com" 
                      className="text-muted-foreground text-lg hover:text-accent transition-colors"
                    >
                      contact@digiflow.com
                    </a>
                    <p className="text-sm text-muted-foreground/70 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border border-border/50 shadow-lg hover:shadow-card-hover transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors">Localisation</h3>
                    <p className="text-muted-foreground text-lg">🇲🇬 Antananarivo, Madagascar</p>
                    <p className="text-muted-foreground text-lg mt-1">🌍 Service international</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="gradient-card border border-border/50 shadow-lg hover:shadow-card-hover transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-primary mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-accent/10 text-accent hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-accent/10 text-accent hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={28} />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-white hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* CTA Box */}
            <Card className="gradient-cta text-white border-0 shadow-glow-primary overflow-hidden relative">
              <div className="absolute inset-0 shine-effect" />
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-extrabold mb-3">Demandez votre démo gratuite</h3>
                <p className="text-white/95 text-lg mb-2">
                  Découvrez comment DigiFlow peut transformer votre entreprise
                </p>
                <p className="text-sm text-white/85 font-medium">
                  ✓ Réponse sous 24h • ✓ Sans engagement • ✓ ROI garanti
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
