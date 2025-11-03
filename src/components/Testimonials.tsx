import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import marieDubois from "@/assets/testimonials/marie-dubois.jpg";
import jeanBaptisteMartin from "@/assets/testimonials/jean-baptiste-martin.jpg";
import sophieLaurent from "@/assets/testimonials/sophie-laurent.jpg";
import alexandrePetit from "@/assets/testimonials/alexandre-petit.jpg";

const testimonials = [
  {
    name: "Marie Dubois",
    role: "CEO",
    company: "InnovTech Solutions",
    text: "DigiFlow a révolutionné notre façon de travailler. L'automatisation de nos processus nous a permis de réduire nos coûts de 65% et d'augmenter notre productivité de 80%.",
    rating: 5,
    avatar: marieDubois,
    initials: "MD"
  },
  {
    name: "Jean-Baptiste Martin",
    role: "Directeur des Opérations",
    company: "DataFlow Systems",
    text: "Une expertise technique impressionnante et un accompagnement personnalisé. Le ROI a été atteint en seulement 4 mois. Je recommande vivement DigiFlow.",
    rating: 5,
    avatar: jeanBaptisteMartin,
    initials: "JM"
  },
  {
    name: "Sophie Laurent",
    role: "CTO",
    company: "TechVision Group",
    text: "L'équipe DigiFlow a compris nos enjeux dès le départ. La solution d'IA qu'ils ont développée dépasse nos attentes et nous permet de rester compétitifs sur notre marché.",
    rating: 5,
    avatar: sophieLaurent,
    initials: "SL"
  },
  {
    name: "Alexandre Petit",
    role: "Responsable Innovation",
    company: "FutureWorks International",
    text: "Des professionnels passionnés qui maîtrisent vraiment les technologies d'automatisation. Le rapport qualité/prix est imbattable comparé aux agences européennes.",
    rating: 5,
    avatar: alexandrePetit,
    initials: "AP"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            ILS NOUS FONT CONFIANCE
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de leur expérience avec DigiFlow
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Testimonial Card */}
          <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-accent/20 transition-all duration-500 rounded-3xl overflow-hidden">
            <CardContent className="p-8 sm:p-12 relative">
              {/* Background gradient decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-50" />
              
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 text-accent/30">
                <Quote size={64} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                {/* Stars */}
                <div className="flex gap-1 justify-center">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl sm:text-2xl text-white/90 leading-relaxed text-center italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center pt-4 space-y-4">
                  <Avatar className="w-20 h-20 border-4 border-accent/30 shadow-xl">
                    <AvatarImage 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-accent text-white text-xl font-bold">
                      {testimonials[currentIndex].initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <div className="font-bold text-xl text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-accent">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
