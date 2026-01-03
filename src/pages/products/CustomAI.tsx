import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Server, Database, Cpu, Lock, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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

const capabilities = [
  {
    icon: Brain,
    title: 'Fine-Tuned LLMs',
    description: 'Custom language models trained on your specific domain data for unmatched accuracy.',
  },
  {
    icon: Server,
    title: 'On-Premise Deploy',
    description: 'Run AI entirely within your infrastructure. Zero data leaves your servers.',
  },
  {
    icon: Database,
    title: 'RAG Pipelines',
    description: 'Retrieval-augmented generation for real-time knowledge base integration.',
  },
  {
    icon: Cpu,
    title: 'Custom Agents',
    description: 'Autonomous AI agents that execute complex multi-step workflows.',
  },
];

const CustomAIPage = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', requirements: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Strategy call scheduled!",
      description: "Our AI architects will reach out within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', requirements: '' });
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero - Neural Laboratory Style */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Neural network background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Synaptic connections */}
            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(280 80% 70%)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Neural pathways */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.path
                  key={i}
                  d={`M ${Math.random() * 100}% ${Math.random() * 100}% Q ${Math.random() * 100}% ${Math.random() * 100}%, ${Math.random() * 100}% ${Math.random() * 100}%`}
                  fill="none"
                  stroke="url(#purpleGlow)"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3 + Math.random() * 2, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
            </svg>

            {/* Neural nodes */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent-purple"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              />
            ))}

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[180px]" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent-purple/15 rounded-full blur-[150px]" />
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

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-6">
                  <Brain className="w-4 h-4 text-accent-purple" />
                  <span className="text-sm font-medium text-accent-purple">Enterprise AI Solutions</span>
                </div>

                <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text-purple">Custom</span>
                  <br />
                  AI
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Bespoke AI solutions engineered for your enterprise. From fine-tuned models 
                  to autonomous agents, we build intelligence that transforms.
                </p>

                <Button size="lg" className="group glow-purple bg-accent-purple hover:bg-accent-purple/90" onClick={() => setIsModalOpen(true)}>
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Visual - Brain Visualization */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Central brain */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-accent-purple/40 to-accent-purple/10 border border-accent-purple/30 flex items-center justify-center">
                      <Brain className="w-20 h-20 text-accent-purple" />
                    </div>
                  </motion.div>

                  {/* Orbiting elements */}
                  {[
                    { icon: Server, delay: 0, radius: 120 },
                    { icon: Database, delay: 2, radius: 120 },
                    { icon: Cpu, delay: 4, radius: 120 },
                    { icon: Lock, delay: 1, radius: 140 },
                    { icon: Zap, delay: 3, radius: 140 },
                    { icon: Settings, delay: 5, radius: 140 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: item.delay,
                      }}
                      style={{ transformOrigin: '0 0' }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: `translateX(${item.radius}px) translateY(-50%)`,
                        }}
                      >
                        <item.icon className="w-5 h-5 text-accent-purple" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Data streams */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.div
                      key={angle}
                      className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-accent-purple/50 to-transparent"
                      style={{
                        transform: `rotate(${angle}deg)`,
                        transformOrigin: 'left center',
                      }}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, delay: i * 0.25, repeat: Infinity }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our <span className="gradient-text-purple">Capabilities</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                End-to-end AI solutions tailored to your specific business needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 group hover:bg-card/80 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent-purple/10 flex items-center justify-center shrink-0 group-hover:bg-accent-purple/20 transition-colors">
                      <cap.icon className="w-7 h-7 text-accent-purple" />
                    </div>
                    <div>
                      <h3 className="font-outfit font-semibold text-xl text-foreground mb-2">{cap.title}</h3>
                      <p className="text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative bg-secondary/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-outfit font-bold text-3xl text-foreground mb-6">
                    Enterprise-Grade AI Development
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    We work closely with your team to understand your unique challenges 
                    and build AI solutions that integrate seamlessly with your existing systems.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Dedicated AI architects',
                      'Custom model development',
                      'Full IP ownership',
                      'Ongoing optimization',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Button size="lg" className="glow-purple bg-accent-purple hover:bg-accent-purple/90" onClick={() => setIsModalOpen(true)}>
                    Start Your Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Strategy Call Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-card border-accent-purple/30 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-outfit text-2xl">Book a Strategy Call</DialogTitle>
            <DialogDescription>
              Tell us about your AI needs and our architects will design a custom solution.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
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
            </div>
            <Input
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              className="bg-secondary/50"
            />
            <Textarea
              placeholder="Tell us about your AI requirements..."
              value={formData.requirements}
              onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
              className="bg-secondary/50 resize-none"
              rows={4}
            />
            <Button type="submit" className="w-full bg-accent-purple hover:bg-accent-purple/90" disabled={isSubmitting}>
              {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomAIPage;
