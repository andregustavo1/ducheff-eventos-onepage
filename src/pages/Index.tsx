
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import Differentials from "../components/Differentials";
import HowWeWork from "../components/HowWeWork";
import ClientsSection from "../components/ClientsSection";
import ContactSection from "../components/ContactSection";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <Differentials />
      <HowWeWork />
      <ClientsSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
