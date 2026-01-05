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
      {/* 3D Floating Blocks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-32 left-[10%] w-16 h-16 rounded-xl floating-block"
        style={{ transform: 'rotateX(10deg) rotateY(-15deg)' }}
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotateY: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute top-48 right-[12%] w-12 h-12 rounded-lg floating-block"
        style={{ transform: 'rotateX(-10deg) rotateY(20deg)' }}
      >
        <motion.div
          animate={{ y: [0, -8, 0], rotateY: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="w-full h-full"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute bottom-32 left-[15%] w-10 h-10 rounded-lg floating-block"
        style={{ transform: 'rotateX(15deg) rotateY(10deg)' }}
      >
        <motion.div
          animate={{ y: [0, -6, 0], rotateX: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="w-full h-full"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-48 right-[8%] w-14 h-14 rounded-xl floating-block"
        style={{ transform: 'rotateX(-5deg) rotateY(-10deg)' }}
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotateY: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          className="w-full h-full"
        />
      </motion.div>

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
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-sm font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
