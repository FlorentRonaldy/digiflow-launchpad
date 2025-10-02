import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    title: "Visionary AI Powering the Future",
    text: "FloRise a transformé notre approche de la production. Leur expertise en IA nous a permis d'augmenter notre efficacité de 40%.",
    name: "Potu Maci",
    role: "CEO",
    company: "TechVision",
    rating: 5
  },
  {
    title: "Powering the Future",
    text: "Une solution d'automatisation remarquable qui a révolutionné nos processus métier et réduit nos coûts opérationnels.",
    name: "Ulrick Mwansta",
    role: "Operations Director",
    company: "InnovateCorp",
    rating: 5
  },
  {
    title: "Exceptional Partnership",
    text: "L'accompagnement de FloRise nous a permis de déployer une plateforme IA scalable en un temps record.",
    name: "Liat Conseir",
    role: "CTO",
    company: "DataFlow Systems",
    rating: 5
  },
  {
    title: "Innovation at Its Best",
    text: "Des experts passionnés qui comprennent vraiment les enjeux de la transformation digitale.",
    name: "Hamopi-kriss",
    role: "Innovation Lead",
    company: "FutureWorks",
    rating: 5
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
    <section id="testimonials" className="py-20 sm:py-28 gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Hear from our clients about their transformation journey
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Testimonial Card */}
          <Card className="bg-primary/30 backdrop-blur-lg border-white/20 text-white">
            <CardHeader className="space-y-4">
              <Quote className="text-accent" size={48} />
              <h3 className="text-2xl sm:text-3xl font-bold">
                {testimonials[currentIndex].title}
              </h3>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="fill-accent text-accent" size={20} />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="pt-4 border-t border-white/20">
                <p className="text-xl font-semibold">{testimonials[currentIndex].name}</p>
                <p className="text-accent">{testimonials[currentIndex].role}</p>
                <p className="text-white/70">{testimonials[currentIndex].company}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="text-white hover:text-accent hover:bg-white/10"
            >
              <ChevronLeft size={32} />
            </Button>

            {/* Dots Navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-accent w-8" 
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="text-white hover:text-accent hover:bg-white/10"
            >
              <ChevronRight size={32} />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
