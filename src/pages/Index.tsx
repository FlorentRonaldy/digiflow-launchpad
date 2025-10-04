import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentiation from "@/components/Differentiation";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Differentiation />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
