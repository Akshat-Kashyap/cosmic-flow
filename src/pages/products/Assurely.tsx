import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Fingerprint, FileCheck, Globe, Shield, Lock, Zap, Clock } from 'lucide-react';
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
import SEOHead from '@/components/SEOHead';
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
      <SEOHead 
        title="Assurely KYC - Identity Verification" 
        description="Enterprise-grade KYC identity verification. Advanced biometric scanning and document verification for secure onboarding."
        ogImage="/og-assurely.png"
      />
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden hero-pattern">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-background" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Back Button - Separated */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-muted-foreground">Coming Soon</span>
                </div>

                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text-green">Assurely</span>
                  <br />
                  KYC Suite
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  The digital fortress for identity verification. Enterprise-grade security 
                  meets frictionless user experience.
                </p>

                <Button size="lg" className="group bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsModalOpen(true)}>
                  Request Enterprise Access
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Visual - Shield with security layers */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Outer ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-200" />
                  
                  {/* Middle ring */}
                  <div className="absolute inset-8 rounded-full border-2 border-emerald-300" />
                  
                  {/* Inner vault */}
                  <div className="absolute inset-16 rounded-full bg-emerald-50 border-2 border-emerald-400 flex items-center justify-center">
                    <Shield className="w-20 h-20 text-emerald-600" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3-Step Process */}
        <section className="py-24 relative section-enhanced">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4">
                Three Steps to <span className="text-emerald-600">Trust</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Verify identities in seconds with our streamlined process.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-emerald-200" />
                  )}
                  
                  <div className="card-enhanced gradient-border silver-gloss rounded-xl p-8 text-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="font-semibold text-xl text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="card-enhanced gradient-border silver-gloss rounded-xl p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
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
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">Request Enterprise Access</DialogTitle>
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
              className="bg-secondary"
            />
            <Input
              type="email"
              placeholder="Work email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              required
              className="bg-secondary"
            />
            <Input
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              className="bg-secondary"
            />
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Request Access'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AssurelyPage;
