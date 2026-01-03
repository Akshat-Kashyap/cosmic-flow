import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, BarChart3, Zap, Shield, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const features = [
  {
    icon: BarChart3,
    title: 'Universal Data Ingest',
    description: 'Connect any data source in seconds. SQL, NoSQL, APIs, spreadsheets—we handle it all.',
  },
  {
    icon: Zap,
    title: 'Instant Analysis',
    description: 'AI-powered insights delivered in milliseconds, not hours or days.',
  },
  {
    icon: Shield,
    title: 'Auto-Visualization',
    description: 'Smart charts that adapt to your data. No configuration needed.',
  },
  {
    icon: Lock,
    title: 'Local-First Privacy',
    description: 'Your data stays on your infrastructure. Zero cloud dependencies.',
  },
];

const QuantumDashPage = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "You're on the list!",
      description: "We'll notify you when Quantum Dash is ready.",
    });
    setEmail('');
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section - Mission Control Style */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Cockpit-style background */}
          <div className="absolute inset-0">
            {/* Grid overlay */}
            <div className="absolute inset-0 grid-pattern opacity-50" />
            
            {/* Holographic data streams */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(187 100% 50%)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(187 100% 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[100, 200, 300, 400, 500].map((y, i) => (
                <motion.line
                  key={i}
                  x1="-100"
                  y1={y}
                  x2="100%"
                  y2={y}
                  stroke="url(#streamGrad)"
                  strokeWidth="1"
                  initial={{ x1: '-100%' }}
                  animate={{ x1: '100%' }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
            </svg>
            
            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-glow-pulse" />
                  <span className="text-sm font-medium text-accent-cyan">Beta Access Available</span>
                </div>

                <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text">Quantum</span>
                  <br />
                  Dash
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Mission control for your data. Real-time analytics with AI-powered insights, 
                  delivered through a stunning holographic interface.
                </p>

                <Button size="lg" className="group glow-cyan" onClick={() => setIsModalOpen(true)}>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Right - Holographic Dashboard Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative glass-card p-6 glow-cyan">
                  {/* Dashboard mockup */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-accent-green" />
                        <span className="text-sm text-muted-foreground font-mono">SYSTEM ONLINE</span>
                      </div>
                      <span className="text-xs text-primary font-mono">v2.4.1-beta</span>
                    </div>

                    {/* Charts */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-secondary/50 rounded-lg p-4 h-32">
                        <svg viewBox="0 0 100 50" className="w-full h-full">
                          <motion.path
                            d="M 0 40 Q 25 10 50 30 T 100 20"
                            fill="none"
                            stroke="hsl(187 100% 50%)"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </svg>
                      </div>
                      <div className="bg-secondary/50 rounded-lg p-4 h-32 flex items-end justify-around gap-1">
                        {[60, 80, 40, 90, 70, 85].map((h, i) => (
                          <motion.div
                            key={i}
                            className="w-4 bg-gradient-to-t from-primary to-accent-blue rounded-t"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Active Users', value: '12.4K' },
                        { label: 'Queries/sec', value: '8,421' },
                        { label: 'Uptime', value: '99.99%' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-secondary/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold gradient-text">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Scan line effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 glass-card p-3 rounded-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-full h-full rounded-lg bg-accent-green/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-accent-green" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Everything You Need
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete analytics suite designed for speed, security, and simplicity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center group hover:bg-card/80 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-outfit font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center glow-cyan"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Ready to See the Future?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join thousands of data professionals already on the waitlist. 
                Be among the first to experience Quantum Dash.
              </p>
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Join the Waitlist
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Waitlist Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-card border-primary/30">
          <DialogHeader>
            <DialogTitle className="font-outfit text-2xl">Join the Waitlist</DialogTitle>
            <DialogDescription>
              Be the first to know when Quantum Dash launches. Early access members get exclusive features.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4 mt-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary/50"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Joining...' : 'Join Waitlist'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuantumDashPage;
