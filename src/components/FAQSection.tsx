import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Combien de temps prend un projet d'automatisation ?",
    answer: "La durée varie selon la complexité : un chatbot IA simple peut être opérationnel en 2-3 jours, un site e-commerce en 1-2 semaines, et un CRM complet avec automatisations en 3-4 semaines. Nous vous fournissons un planning détaillé après l'audit gratuit."
  },
  {
    question: "Quels sont vos tarifs et modes de paiement ?",
    answer: "Nos packs démarrent à 500 000 Ar pour un site vitrine. Nous acceptons les paiements par virement bancaire, Mobile Money (MVola, Orange Money, Airtel Money), et proposons des facilités de paiement en plusieurs fois. Tous nos tarifs incluent l'hébergement la première année."
  },
  {
    question: "Proposez-vous une maintenance après livraison ?",
    answer: "Oui ! Chaque projet inclut 30 jours de support gratuit post-livraison. Ensuite, nous proposons des contrats de maintenance mensuels (à partir de 50 000 Ar/mois) incluant : mises à jour, corrections de bugs, backup quotidiens, et support prioritaire."
  },
  {
    question: "Dois-je avoir des compétences techniques pour utiliser vos solutions ?",
    answer: "Absolument pas ! Nous concevons des interfaces intuitives et formons votre équipe à l'utilisation. Chaque projet inclut une session de formation complète et des guides vidéo. Nos clients non-techniques gèrent facilement leurs outils au quotidien."
  },
  {
    question: "Comment se passe la collaboration à distance ?",
    answer: "Nous travaillons avec des clients partout à Madagascar et à l'international. Notre processus 100% digital inclut : visioconférences régulières, accès à une plateforme de suivi en temps réel, et communication via WhatsApp/Email. Vous voyez l'avancement à chaque étape."
  },
  {
    question: "Puis-je modifier mon site/application après la livraison ?",
    answer: "Oui, de deux façons : (1) Vous pouvez faire des modifications simples via l'interface admin que nous créons, ou (2) Nous faire appel pour des modifications plus complexes. Nos solutions sont évolutives et conçues pour grandir avec votre business."
  },
  {
    question: "Quelle est votre garantie de satisfaction ?",
    answer: "Nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos projets. Si le résultat ne correspond pas au cahier des charges validé, nous effectuons les corrections nécessaires ou remboursons intégralement. Votre satisfaction est notre priorité."
  },
  {
    question: "Travaillez-vous avec des PME ou uniquement des grandes entreprises ?",
    answer: "Nous accompagnons TOUTES les tailles d'entreprises ! De l'entrepreneur individuel à la multinationale. Nos solutions modulaires s'adaptent à vos besoins et budget actuels, avec possibilité d'évolution future. 80% de nos clients sont des PME malgaches."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <HelpCircle className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Questions fréquentes
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Vous avez des{" "}
            <span className="text-gradient">questions</span> ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Trouvez rapidement les réponses à vos interrogations
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-xl border border-border rounded-2xl px-6 overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 group-hover:text-accent transition-colors">
                  <span className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-8 rounded-3xl bg-card/50 backdrop-blur-xl border border-border hover:shadow-xl transition-all duration-500">
            <p className="text-lg text-muted-foreground mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contactez-nous
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
