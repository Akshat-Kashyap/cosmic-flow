import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ServicesSection from '@/components/sections/ServicesSection';
import VisionBento from '@/components/sections/VisionBento';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <ProductShowcase />
        <VisionBento />
        <ServicesSection />
        <ContactSection />
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
