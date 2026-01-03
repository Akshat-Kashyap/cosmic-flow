import SciFiBackground from '@/components/SciFiBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ServicesSection from '@/components/sections/ServicesSection';
import VisionBento from '@/components/sections/VisionBento';
import RoadmapSection from '@/components/sections/RoadmapSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SciFiBackground />
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <ProductShowcase />
        <VisionBento />
        <ServicesSection />
        <RoadmapSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
