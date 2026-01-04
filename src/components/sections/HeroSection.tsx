import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const logos = [
  { name: 'TechCorp', initial: 'T' },
  { name: 'DataFlow', initial: 'D' },
  { name: 'CloudNet', initial: 'C' },
  { name: 'AILabs', initial: 'A' },
  { name: 'SecureIO', initial: 'S' },
];

const HeroSection = () => {
  return (
    <section className="relative flex items-center pt-32 pb-16 hero-pattern">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">Now accepting enterprise clients</span>
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
    </section>
  );
};

export default HeroSection;
