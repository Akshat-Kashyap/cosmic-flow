import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Users, Clock, BarChart3, 
  Brain, Shield, Calendar, MessageSquare,
  CheckCircle2, Play, Zap, TrendingUp, UserCheck,
  Award
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
    description: 'AI-powered attendance with anomaly detection and flexible policies.',
    highlight: false,
  },
  {
    icon: BarChart3,
    title: 'People Analytics',
    description: 'Deep insights into team performance, engagement, and growth.',
    highlight: false,
  },
  {
    icon: Brain,
    title: 'Zeno AI Assistant',
    description: 'Your personal HR companion for queries, approvals, and scheduling.',
    highlight: true,
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2 compliant with role-based access and audit trails.',
    highlight: false,
  },
  {
    icon: UserCheck,
    title: 'Seamless Onboarding',
    description: 'Automated workflows that get new hires productive faster.',
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: 'Performance Reviews',
    description: 'Continuous feedback loops and goal tracking made simple.',
    highlight: false,
  },
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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden hero-pattern">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-background" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Back Button - Separated */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                  <span className="text-xs font-medium text-rose-600">Now Available</span>
                </motion.div>

                <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                  The Modern HRMS
                  <br />
                  <span className="text-rose-500">
                    Built for Growth
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Comet unifies your HR operations with AI-powered automation, beautiful analytics, 
                  and an experience your team will actually love.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  {[
                    { icon: Shield, text: 'SOC 2 Type II' },
                    { icon: Award, text: 'GDPR Ready' },
                    { icon: Zap, text: '99.9% Uptime' },
                  ].map((badge) => (
                    <div key={badge.text} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <badge.icon className="w-3.5 h-3.5 text-rose-500" />
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group"
                  >
                    <Play className="w-4 h-4 mr-2 text-rose-500" />
                    Watch Demo
                  </Button>
                </div>
              </motion.div>

              {/* Product Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Main Dashboard Card */}
                <div className="relative bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
                        app.comet.ai/dashboard
                      </div>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-foreground">Good morning, Sarah 👋</h3>
                        <p className="text-xs text-muted-foreground">Here's your team overview</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center">
                          <span className="text-white text-xs font-medium">SC</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: 'Team Size', value: '124', change: '+5' },
                        { label: 'Attendance', value: '96%', change: '+2%' },
                        { label: 'Open Roles', value: '8', change: '-3' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-secondary rounded-xl p-3">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                            <span className="text-xs text-green-600">{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-secondary rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground">Team Activity</span>
                        <span className="text-xs text-muted-foreground">This week</span>
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-rose-500 rounded-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="space-y-2">
                      {[
                        { name: 'Alex joined Engineering', time: '2m ago' },
                        { name: 'Leave approved for Jordan', time: '15m ago' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-secondary rounded-lg">
                          <span className="text-xs text-foreground">{item.name}</span>
                          <span className="text-xs text-muted-foreground">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating AI Chat */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-8 w-64 bg-card border border-border rounded-xl shadow-xl p-4"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-rose-500 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Zeno AI</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="bg-secondary rounded-lg p-2.5 text-xs text-muted-foreground">
                    "3 pending approvals need your attention. Want me to summarize them?"
                  </div>
                </motion.div>

                {/* Floating Notification */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-lg shadow-lg px-4 py-2.5 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">New hire onboarded</p>
                    <p className="text-xs text-muted-foreground">Alex → Engineering</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
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
                Everything Your Team Needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                A complete HR platform that brings your people together and helps them thrive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className={`card-enhanced gradient-border silver-gloss rounded-xl p-6 ${
                    feature.highlight ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    feature.highlight ? 'bg-rose-500' : 'bg-gradient-to-br from-rose-100 to-rose-50 border border-rose-200'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-white' : 'text-rose-500'}`} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zeno AI Section */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 mb-6">
                  <Brain className="w-4 h-4 text-rose-500" />
                  <span className="text-xs font-medium text-rose-600">Powered by AI</span>
                </div>
                <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-6">
                  Meet Zeno, Your AI HR Partner
                </h2>
                <p className="text-muted-foreground mb-6">
                  Zeno handles the repetitive tasks so your HR team can focus on what matters—your people. 
                  From answering policy questions to processing approvals, Zeno is always there.
                </p>
                <ul className="space-y-3">
                  {[
                    'Instant answers to employee questions',
                    'Smart leave and approval workflows',
                    'Proactive insights and recommendations',
                    'Natural language policy lookups',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-rose-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
                    <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Zeno AI</p>
                      <p className="text-xs text-muted-foreground">HR Assistant</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-end">
                      <div className="bg-rose-500 text-white rounded-2xl rounded-tr-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm">How many vacation days do I have left?</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%]">
                        <p className="text-sm text-foreground">
                          You have 12 vacation days remaining. Would you like me to help you 
                          schedule some time off?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
                    <input 
                      type="text" 
                      placeholder="Ask Zeno anything..."
                      className="flex-1 bg-secondary rounded-lg px-4 py-2 text-sm outline-none"
                    />
                    <Button size="sm" className="bg-rose-500 hover:bg-rose-600">
                      <MessageSquare className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-12 text-center shadow-lg max-w-3xl mx-auto"
            >
              <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
                Ready to Transform Your HR?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Transform your HR operations with Comet today.
                Start your free trial now.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600" onClick={() => setIsModalOpen(true)}>
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">Start Your Free Trial</DialogTitle>
            <DialogDescription>
              Get started with Comet in minutes. No credit card required.
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
            <Input
              placeholder="Team size"
              value={formData.teamSize}
              onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
              className="bg-secondary"
            />
            <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600" disabled={isSubmitting}>
              {isSubmitting ? 'Starting...' : 'Start Free Trial'}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CometPage;