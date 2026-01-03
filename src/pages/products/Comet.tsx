import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Users, Clock, BarChart3, 
  Brain, Shield, Calendar, Sparkles, MessageSquare 
} from 'lucide-react';
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
    icon: Clock,
    title: 'Smart Time Tracking',
    description: 'Automatic attendance with AI-powered anomaly detection and flexible policies.',
  },
  {
    icon: BarChart3,
    title: 'People Analytics',
    description: 'Deep insights into team performance, engagement, and growth opportunities.',
  },
  {
    icon: Brain,
    title: 'Zeno AI Assistant',
    description: 'Your personal HR companion that handles queries, approvals, and scheduling.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with role-based access and complete audit trails.',
  },
];

const avatars = [
  { name: 'Alex', color: 'from-pink-400 to-rose-500' },
  { name: 'Jordan', color: 'from-purple-400 to-violet-500' },
  { name: 'Sam', color: 'from-fuchsia-400 to-pink-500' },
  { name: 'Taylor', color: 'from-rose-400 to-pink-500' },
  { name: 'Casey', color: 'from-violet-400 to-purple-500' },
  { name: 'Morgan', color: 'from-pink-400 to-fuchsia-500' },
];

const CometPage = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', teamSize: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Demo scheduled!",
      description: "We'll send you a calendar invite shortly.",
    });
    setFormData({ name: '', email: '', company: '', teamSize: '' });
    setIsModalOpen(false);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero - Team Constellation Style */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Warm gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Gradient sky */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-pink/5 to-background" />
            
            {/* Stars/particles */}
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-accent-pink/50"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2 + Math.random() * 2, delay: i * 0.1, repeat: Infinity }}
              />
            ))}

            {/* Comet trails */}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-gradient-to-r from-accent-pink/60 via-accent-pink/30 to-transparent"
                style={{
                  width: `${100 + i * 50}px`,
                  top: `${20 + i * 15}%`,
                  left: '-150px',
                  transform: `rotate(-${15 + i * 5}deg)`,
                }}
                animate={{ x: ['0%', '200%'], opacity: [0, 1, 0] }}
                transition={{ duration: 3, delay: i * 2, repeat: Infinity, repeatDelay: 5 }}
              />
            ))}

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-pink/15 rounded-full blur-[180px]" />
            <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[150px]" />
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

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-pink/10 border border-accent-pink/30 mb-6">
                  <Sparkles className="w-4 h-4 text-accent-pink" />
                  <span className="text-sm font-medium text-accent-pink">Now Available</span>
                </div>

                <h1 className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text-pink">Comet</span>
                  <br />
                  HRMS
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Where teams come together like stars in a constellation. Modern HR 
                  platform with AI-powered assistance and beautiful people analytics.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group glow-pink bg-accent-pink hover:bg-accent-pink/90" onClick={() => setIsModalOpen(true)}>
                    Book Free Demo
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-accent-pink/50 text-accent-pink hover:bg-accent-pink/10">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Talk to Sales
                  </Button>
                </div>
              </motion.div>

              {/* Visual - Orbiting Team Constellation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative flex items-center justify-center min-h-[400px]"
              >
                {/* Central hub */}
                <motion.div
                  className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-3xl font-outfit font-bold text-white">C</span>
                  
                  {/* Pulse rings */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 rounded-full border border-accent-pink/50"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
                    />
                  ))}
                </motion.div>

                {/* Orbit rings */}
                <div className="absolute w-[240px] h-[240px] rounded-full border border-accent-pink/20" />
                <div className="absolute w-[340px] h-[340px] rounded-full border border-accent-pink/10" />

                {/* Orbiting avatars - Inner ring */}
                {avatars.slice(0, 3).map((avatar, i) => (
                  <motion.div
                    key={avatar.name}
                    className="absolute"
                    style={{ left: '50%', top: '50%' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear', delay: i * -5 }}
                  >
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatar.color} border-2 border-background flex items-center justify-center shadow-lg`}
                      style={{ 
                        transform: `translateX(${120}px) translateY(-50%) rotate(${-360}deg)`,
                        marginLeft: '-24px',
                        marginTop: '-24px',
                      }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-white font-medium text-sm">{avatar.name[0]}</span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Orbiting avatars - Outer ring */}
                {avatars.slice(3).map((avatar, i) => (
                  <motion.div
                    key={avatar.name}
                    className="absolute"
                    style={{ left: '50%', top: '50%' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: i * -6.67 }}
                  >
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatar.color} border-2 border-background flex items-center justify-center shadow-lg`}
                      style={{ 
                        transform: `translateX(${170}px) translateY(-50%) rotate(${360}deg)`,
                        marginLeft: '-20px',
                        marginTop: '-20px',
                      }}
                    >
                      <span className="text-white font-medium text-xs">{avatar.name[0]}</span>
                    </motion.div>
                  </motion.div>
                ))}

                {/* Connection lines */}
                <svg className="absolute w-full h-full" style={{ left: 0, top: 0 }}>
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <motion.line
                      key={angle}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos((angle * Math.PI) / 180) * 35}%`}
                      y2={`${50 + Math.sin((angle * Math.PI) / 180) * 35}%`}
                      stroke="hsl(330 85% 60%)"
                      strokeWidth="1"
                      strokeOpacity="0.3"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                    />
                  ))}
                </svg>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Everything Your <span className="gradient-text-pink">Team</span> Needs
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A complete HR platform that brings your people together and helps them thrive.
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
                  <div className="w-14 h-14 rounded-2xl bg-accent-pink/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-pink/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-accent-pink" />
                  </div>
                  <h3 className="font-outfit font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zeno AI Highlight */}
        <section className="py-24 relative bg-gradient-to-b from-accent-pink/5 to-transparent">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 glow-pink"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-pink/10 border border-accent-pink/30 mb-6">
                    <Brain className="w-4 h-4 text-accent-pink" />
                    <span className="text-sm font-medium text-accent-pink">AI-Powered</span>
                  </div>
                  <h2 className="font-outfit font-bold text-3xl text-foreground mb-6">
                    Meet Zeno, Your AI HR Assistant
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Zeno handles the routine so your HR team can focus on what matters—your people. 
                    From answering policy questions to scheduling interviews, Zeno is always available.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Instant answers to employee questions',
                      'Automated leave management',
                      'Smart interview scheduling',
                      'Personalized onboarding flows',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-pink" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <motion.div
                    className="relative w-48 h-48"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-pink/30 to-accent-purple/30 backdrop-blur-xl border border-accent-pink/30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Brain className="w-20 h-20 text-accent-pink" />
                    </div>
                    {/* Floating particles */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-accent-pink"
                        style={{
                          left: `${20 + i * 20}%`,
                          top: `${10 + (i % 2) * 80}%`,
                        }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Ready to Transform Your HR?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Join hundreds of companies already using Comet to build better workplaces.
              </p>
              <Button size="lg" className="glow-pink bg-accent-pink hover:bg-accent-pink/90" onClick={() => setIsModalOpen(true)}>
                Book Your Free Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="glass-card border-accent-pink/30 max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-outfit text-2xl">Book a Free Demo</DialogTitle>
            <DialogDescription>
              See how Comet can transform your HR operations in a personalized demo.
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
            <Input
              placeholder="Team size (e.g., 50-100)"
              value={formData.teamSize}
              onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
              className="bg-secondary/50"
            />
            <Button type="submit" className="w-full bg-accent-pink hover:bg-accent-pink/90" disabled={isSubmitting}>
              {isSubmitting ? 'Scheduling...' : 'Schedule Demo'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CometPage;
