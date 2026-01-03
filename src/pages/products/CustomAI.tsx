import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Brain, Server, Database, Cpu } from 'lucide-react';
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
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-50/50 to-background" />

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

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                  <Brain className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-medium text-violet-600">Enterprise AI Solutions</span>
                </div>

                <h1 className="font-semibold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text-purple">Custom</span>
                  <br />
                  AI
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Bespoke AI solutions engineered for your enterprise. From fine-tuned models 
                  to autonomous agents, we build intelligence that transforms.
                </p>

                <Button size="lg" className="group bg-violet-600 hover:bg-violet-700" onClick={() => setIsModalOpen(true)}>
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Visual - Brain with orbiting elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Central brain */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-violet-50 border-2 border-violet-200 flex items-center justify-center">
                      <Brain className="w-20 h-20 text-violet-600" />
                    </div>
                  </div>

                  {/* Capability icons around */}
                  {capabilities.map((cap, i) => {
                    const angle = (i * 90) * (Math.PI / 180);
                    const x = Math.cos(angle) * 120;
                    const y = Math.sin(angle) * 120;
                    return (
                      <div
                        key={cap.title}
                        className="absolute w-12 h-12 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center"
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                        }}
                      >
                        <cap.icon className="w-6 h-6 text-violet-600" />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-24 relative bg-secondary/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
                Our <span className="text-violet-600">Capabilities</span>
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
                  className="bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-violet-200 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center shrink-0">
                      <cap.icon className="w-7 h-7 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-foreground mb-2">{cap.title}</h3>
                      <p className="text-muted-foreground">{cap.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-12 shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-semibold text-3xl text-foreground mb-6">
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
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <Button size="lg" className="bg-violet-600 hover:bg-violet-700" onClick={() => setIsModalOpen(true)}>
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
        <DialogContent className="bg-card border-border max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Book a Strategy Call</DialogTitle>
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
            </div>
            <Input
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              required
              className="bg-secondary"
            />
            <Textarea
              placeholder="Tell us about your AI requirements..."
              value={formData.requirements}
              onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
              className="bg-secondary resize-none"
              rows={4}
            />
            <Button type="submit" className="w-full bg-violet-600 hover:bg-violet-700" disabled={isSubmitting}>
              {isSubmitting ? 'Scheduling...' : 'Schedule Call'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomAIPage;
