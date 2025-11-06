import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Facebook, Instagram, Linkedin, Phone } from "lucide-react";
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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Prêt à transformer votre{" "}
            <span className="text-gradient">business</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discutons de votre projet dès aujourd'hui
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-xl border border-border hover:shadow-2xl transition-all duration-500">
            <CardHeader className="space-y-2 pb-6">
              <CardTitle className="text-2xl font-bold text-foreground">
                Envoyez-nous un message
              </CardTitle>
              <p className="text-muted-foreground">Réponse sous 24h</p>
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
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                      Envoi en cours...
                    </span>
                  ) : (
                    "Envoyer le message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Info Cards */}
            <Card className="bg-card/50 backdrop-blur-xl border border-border hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-accent transition-colors">Email</h3>
                    <a 
                      href="mailto:digiflow.team@gmail.com" 
                      className="text-muted-foreground text-lg hover:text-accent transition-colors"
                    >
                      digiflow.team@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-xl border border-border hover:shadow-xl transition-all duration-500 group">
              <CardContent className="p-8">
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-accent-foreground transition-all duration-300 group-hover:scale-110">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-secondary transition-colors">Localisation</h3>
                    <p className="text-muted-foreground text-lg">🇲🇬 Antananarivo, Madagascar</p>
                    <p className="text-muted-foreground text-lg mt-1">🌍 Service international</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Card */}
            <Card className="bg-card/50 backdrop-blur-xl border border-border hover:shadow-xl transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-foreground mb-6">Suivez-nous</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61583118653473" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                  
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-secondary/10 text-secondary hover:bg-secondary hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                  <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
