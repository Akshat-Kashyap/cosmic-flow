import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex items-center pt-32 pb-16 hero-pattern min-h-[90vh]">
      {/* Minimal 3D Floating Cubes */}
      <div className="absolute top-32 left-[10%] floating-cube" style={{ animationDelay: '0s' }} />
      <div className="absolute top-48 right-[12%] floating-cube floating-cube-sm" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-40 left-[15%] floating-cube floating-cube-xs" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-[10%] floating-cube floating-cube-sm" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-3d-glossy mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_hsl(var(--accent-green)/0.6)]" />
            <span className="text-sm font-medium text-foreground/90">Now Accepting Enterprise Clients</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-semibold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground mb-6"
          >
            Build smarter with{' '}
            <span className="gradient-text">AI-powered</span>{' '}
            enterprise solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            From real-time analytics to identity verification, we build intelligent 
            systems that help enterprises scale securely and efficiently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link to="/#products">
              <Button size="lg" className="w-full sm:w-auto">
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/#contact">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Talk to Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
