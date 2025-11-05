import Header from "@/components/Header";
import HeroModern from "@/components/HeroModern";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import PricingSection from "@/components/PricingSection";
import ProcessModern from "@/components/ProcessModern";
import Testimonials from "@/components/Testimonials";
import StatsSection from "@/components/StatsSection";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroModern />
      <ProblemsSection />
      <SolutionsSection />
      <PricingSection />
      <ProcessModern />
      <Testimonials />
      <StatsSection />
      <FinalCTA />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
