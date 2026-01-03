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
    <section className="relative min-h-screen flex items-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="max-w-xl">
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
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              From real-time analytics to identity verification, we build intelligent 
              systems that help enterprises scale securely and efficiently.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
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

            {/* Trust Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
                Trusted by leading companies
              </p>
              <div className="flex items-center gap-6">
                {logos.map((logo, index) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center"
                  >
                    <span className="text-sm font-semibold text-muted-foreground">
                      {logo.initial}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Product Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-border bg-card overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-accent-green/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-6 rounded-md bg-background/50 flex items-center px-3">
                    <span className="text-xs text-muted-foreground">dashboard.agaami.ai</span>
                  </div>
                </div>
              </div>
              
              {/* Dashboard mockup */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="h-4 w-32 rounded bg-foreground/10" />
                    <div className="h-3 w-24 rounded bg-foreground/5" />
                  </div>
                  <div className="h-8 w-24 rounded-md bg-primary/20" />
                </div>
                
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="p-4 rounded-lg bg-secondary/50 space-y-2">
                      <div className="h-6 w-16 rounded bg-foreground/10" />
                      <div className="h-3 w-12 rounded bg-foreground/5" />
                    </div>
                  ))}
                </div>
                
                {/* Chart area */}
                <div className="h-32 rounded-lg bg-secondary/30 flex items-end justify-around px-4 pb-4">
                  {[40, 65, 45, 80, 55, 70, 60].map((height, i) => (
                    <motion.div
                      key={i}
                      className="w-6 rounded-t bg-primary/40"
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                    />
                  ))}
                </div>
                
                {/* Table rows */}
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <div className="w-8 h-8 rounded-full bg-foreground/10" />
                      <div className="flex-1 space-y-1">
                        <div className="h-3 w-24 rounded bg-foreground/10" />
                        <div className="h-2 w-16 rounded bg-foreground/5" />
                      </div>
                      <div className="h-6 w-16 rounded bg-accent-green/20" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
