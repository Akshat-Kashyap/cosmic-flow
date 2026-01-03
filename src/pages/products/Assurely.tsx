import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Fingerprint, FileCheck, Globe, Shield, Lock, Zap } from 'lucide-react';
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

const steps = [
  {
    icon: Fingerprint,
    title: 'Biometric Scan',
    description: 'Advanced facial recognition and liveness detection in under 3 seconds.',
  },
  {
    icon: FileCheck,
    title: 'Document Verification',
    description: 'AI-powered document analysis supporting 10,000+ ID types globally.',
  },
  {
    icon: Globe,
    title: 'Global Approval',
    description: 'Instant compliance checks across 200+ jurisdictions worldwide.',
  },
];

const features = [
  { icon: Shield, title: 'Bank-Grade Security', description: 'SOC 2 Type II certified infrastructure.' },
  { icon: Lock, title: 'Data Privacy', description: 'GDPR and CCPA compliant by design.' },
  { icon: Zap, title: 'Sub-Second Results', description: '95% of verifications complete in under 1 second.' },
];

const AssurelyPage = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Request received!",
      description: "Our enterprise team will contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '' });
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero - Digital Fortress Style */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Hexagonal security grid background */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                  <polygon 
                    points="25,0 50,14.4 50,38.4 25,52.8 0,38.4 0,14.4" 
                    fill="none" 
                    stroke="hsl(142 76% 45%)" 
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
            
            {/* Glowing nodes */}
            {[
              { x: '20%', y: '30%' },
              { x: '80%', y: '25%' },
              { x: '60%', y: '70%' },
              { x: '30%', y: '60%' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-accent-green"
                style={{ left: pos.x, top: pos.y }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
              />
            ))}

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-green/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-green/10 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green/10 border border-accent-green/30 mb-6">
                  <Shield className="w-4 h-4 text-accent-green" />
                  <span className="text-sm font-medium text-accent-green">Enterprise Ready</span>
                </div>

                <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text-green">Assurely</span>
                  <br />
                  KYC Suite
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  The digital fortress for identity verification. Enterprise-grade security 
                  meets frictionless user experience.
                </p>

                <Button size="lg" className="group glow-green bg-accent-green hover:bg-accent-green/90 text-primary-foreground" onClick={() => setIsModalOpen(true)}>
                  Request Enterprise Access
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Visual - Vault Door Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Outer ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-accent-green/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Middle ring */}
                  <motion.div
                    className="absolute inset-8 rounded-full border-2 border-accent-green/50"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  >
                    {/* Ring markers */}
                    {[0, 90, 180, 270].map((deg) => (
                      <div
                        key={deg}
                        className="absolute w-3 h-3 rounded-full bg-accent-green"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${deg}deg) translateX(100px) translateY(-50%)`,
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* Inner vault */}
                  <div className="absolute inset-16 rounded-full bg-gradient-to-br from-accent-green/20 to-transparent border border-accent-green/30 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Shield className="w-20 h-20 text-accent-green" />
                    </motion.div>
                  </div>

                  {/* Pulse rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-accent-green/30"
                      initial={{ scale: 0.5, opacity: 1 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Three Steps to <span className="gradient-text-green">Trust</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Verify identities in seconds with our streamlined process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-accent-green/50 to-transparent" />
                  )}
                  
                  <div className="glass-card p-8 text-center relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-green text-primary-foreground font-bold flex items-center justify-center text-sm">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-accent-green/10 flex items-center justify-center mx-auto mb-6 mt-4">
                      <step.icon className="w-8 h-8 text-accent-green" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 relative bg-secondary/20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <feature.icon className="w-10 h-10 text-accent-green mb-4" />
                  <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Enterprise Access Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-card border-accent-green/30">
          <DialogHeader>
            <DialogTitle className="font-outfit text-2xl">Request Enterprise Access</DialogTitle>
            <DialogDescription>
              Get in touch with our enterprise team for custom pricing and integration support.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              required
              className="bg-secondary/50"
            />
            <Input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-secondary/50"
            />
            <Input
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              className="bg-secondary/50"
            />
            <Button type="submit" className="w-full bg-accent-green hover:bg-accent-green/90 text-primary-foreground" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Access'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AssurelyPage;
