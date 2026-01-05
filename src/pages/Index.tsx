import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import ProcessSection from '@/components/sections/ProcessSection';
import ServicesSection from '@/components/sections/ServicesSection';
import VisionBento from '@/components/sections/VisionBento';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Enterprise Intelligence Solutions"
        description="Agaami AI Labs builds intelligent enterprise systems. From real-time analytics to identity verification, we help businesses scale securely with AI-powered solutions."
      />
      <Navbar />
      
      <main>
        <HeroSection />
        <TechStackSection />
        <ProductShowcase />
        <ProcessSection />
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
