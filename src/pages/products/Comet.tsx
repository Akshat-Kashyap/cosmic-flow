import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, Users, Clock, BarChart3, 
  Brain, Shield, Calendar, Sparkles, MessageSquare,
  CheckCircle2, Star, Play, Zap, TrendingUp, UserCheck,
  Building2, Award, ChevronRight, Send
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

const stats = [
  { value: '500+', label: 'Companies' },
  { value: '50K+', label: 'Employees Managed' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'Rating' },
];

const testimonials = [
  {
    quote: "Comet transformed how we manage our distributed team. The AI assistant alone saves us 20+ hours per week.",
    author: "Sarah Chen",
    role: "VP of People",
    company: "TechFlow Inc",
    avatar: "SC",
  },
  {
    quote: "Finally, an HRMS that our employees actually enjoy using. The interface is intuitive and the analytics are game-changing.",
    author: "Marcus Johnson",
    role: "HR Director",
    company: "ScaleUp Labs",
    avatar: "MJ",
  },
  {
    quote: "Implementation took 2 weeks instead of the 3 months we expected. The Comet team's support was exceptional.",
    author: "Emily Rodriguez",
    role: "COO",
    company: "GrowthPath",
    avatar: "ER",
  },
];

const logos = [
  'TechCorp', 'Innovate.io', 'ScaleUp', 'DataFlow', 'CloudSync', 'NextGen'
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
      
      <main>
        {/* Hero Section - Professional Split Layout */}
        <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-pink/5 via-background to-accent-purple/5" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-pink/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-purple/8 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
              >
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 mb-6"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-pink opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-pink"></span>
                  </span>
                  <span className="text-xs font-medium text-accent-pink">Now Available</span>
                </motion.div>

                <h1 className="font-outfit font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-[1.1]">
                  The Modern HRMS
                  <br />
                  <span className="bg-gradient-to-r from-accent-pink via-accent-purple to-accent-pink bg-clip-text text-transparent">
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
                      <badge.icon className="w-3.5 h-3.5 text-accent-pink" />
                      <span>{badge.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-accent-pink hover:bg-accent-pink/90 text-white shadow-lg shadow-accent-pink/25 px-8"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-border hover:bg-card group"
                  >
                    <Play className="w-4 h-4 mr-2 text-accent-pink group-hover:scale-110 transition-transform" />
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
                <div className="relative bg-card/80 backdrop-blur-xl border border-border rounded-2xl shadow-2xl shadow-accent-pink/10 overflow-hidden">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                      <div className="w-3 h-3 rounded-full bg-green-400/80" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-muted-foreground text-center">
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
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
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
                        <div key={stat.label} className="bg-muted/50 rounded-xl p-3">
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl font-semibold text-foreground">{stat.value}</span>
                            <span className="text-xs text-green-400">{stat.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Chart Placeholder */}
                    <div className="bg-muted/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-foreground">Team Activity</span>
                        <span className="text-xs text-muted-foreground">This week</span>
                      </div>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 45, 80, 55, 70, 90].map((height, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-accent-pink/60 to-accent-pink rounded-sm"
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
                        <div key={i} className="flex items-center justify-between py-2 px-3 bg-muted/30 rounded-lg">
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
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Zeno AI</p>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-2.5 text-xs text-muted-foreground">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      "3 pending approvals need your attention. Want me to summarize them?"
                    </motion.span>
                  </div>
                </motion.div>

                {/* Floating Notification */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-lg shadow-lg px-4 py-2.5 flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">New hire onboarded</p>
                    <p className="text-xs text-muted-foreground">Alex → Engineering</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-border/50"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof - Logo Bar */}
        <section className="py-16 border-y border-border/50 bg-muted/30">
          <div className="container mx-auto px-6">
            <p className="text-center text-sm text-muted-foreground mb-8">
              Trusted by forward-thinking teams worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {logos.map((logo) => (
                <motion.div
                  key={logo}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-xl font-outfit font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {logo}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Everything Your Team Needs
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A complete HR platform that brings your people together and helps them thrive.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                    feature.highlight 
                      ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-accent-pink/10 to-accent-purple/5 border-accent-pink/30 hover:border-accent-pink/50' 
                      : 'bg-card/50 border-border hover:border-border/80 hover:bg-card'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                    feature.highlight 
                      ? 'bg-accent-pink/20 group-hover:bg-accent-pink/30' 
                      : 'bg-muted group-hover:bg-muted/80'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${feature.highlight ? 'text-accent-pink' : 'text-foreground'}`} />
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                  {feature.highlight && (
                    <div className="mt-4 flex items-center gap-2 text-accent-pink text-sm font-medium">
                      Learn more <ChevronRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zeno AI Section - Chat Interface */}
        <section className="py-24 relative bg-gradient-to-b from-muted/30 to-transparent">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-pink/10 border border-accent-pink/20 mb-6">
                  <Sparkles className="w-3.5 h-3.5 text-accent-pink" />
                  <span className="text-xs font-medium text-accent-pink">AI-Powered</span>
                </div>
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Meet Zeno, Your
                  <br />
                  <span className="text-accent-pink">AI HR Assistant</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Zeno handles the routine so your HR team can focus on what matters—your people. 
                  From answering policy questions to scheduling interviews, Zeno is always available.
                </p>
                <ul className="space-y-4">
                  {[
                    'Instant answers to employee questions',
                    'Automated leave and approval workflows',
                    'Smart interview scheduling',
                    'Personalized onboarding journeys',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-accent-pink flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Chat Interface Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl shadow-xl overflow-hidden">
                  {/* Chat Header */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-muted/30">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Zeno</p>
                      <p className="text-xs text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                        Online
                      </p>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-5 space-y-4 min-h-[300px]">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-accent-pink text-white rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]">
                        <p className="text-sm">How many vacation days do I have left?</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center flex-shrink-0">
                        <Brain className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm text-foreground mb-2">
                          You have <strong>12 vacation days</strong> remaining this year. Here's a quick breakdown:
                        </p>
                        <div className="bg-background/50 rounded-lg p-3 space-y-1 text-xs text-muted-foreground">
                          <p>• Annual allowance: 20 days</p>
                          <p>• Used: 8 days</p>
                          <p>• Pending approval: 0 days</p>
                        </div>
                        <p className="text-sm text-foreground mt-2">
                          Would you like to submit a vacation request?
                        </p>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="flex gap-2 ml-11">
                      <button className="px-3 py-1.5 text-xs font-medium bg-accent-pink/10 text-accent-pink rounded-lg hover:bg-accent-pink/20 transition-colors">
                        Submit Request
                      </button>
                      <button className="px-3 py-1.5 text-xs font-medium bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                        View Calendar
                      </button>
                    </div>
                  </div>

                  {/* Chat Input */}
                  <div className="px-5 py-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Ask Zeno anything..."
                        className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-pink/50"
                      />
                      <button className="w-10 h-10 bg-accent-pink rounded-xl flex items-center justify-center hover:bg-accent-pink/90 transition-colors">
                        <Send className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Loved by HR Teams
              </h2>
              <p className="text-muted-foreground">
                See what our customers have to say about Comet
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card/50 border border-border rounded-2xl p-6 hover:shadow-lg hover:border-border/80 transition-all"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center">
                      <span className="text-white text-sm font-medium">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
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
              className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-pink via-accent-purple to-accent-pink p-12 md:p-16 text-center"
            >
              {/* Background pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
              
              <div className="relative z-10">
                <h2 className="font-outfit font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                  Ready to Transform Your HR?
                </h2>
                <p className="text-white/80 max-w-xl mx-auto mb-8 text-lg">
                  Join 500+ companies already using Comet to build better workplaces.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-accent-pink hover:bg-white/90 shadow-lg px-8"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Talk to Sales
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Demo Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card border-border max-w-md">
          <DialogHeader>
            <DialogTitle className="font-outfit text-xl">Start Your Free Trial</DialogTitle>
            <DialogDescription>
              Get started with Comet in minutes. No credit card required.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted border-border"
              />
              <Input
                type="email"
                placeholder="Work email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted border-border"
              />
            </div>
            <Input
              placeholder="Company name"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              required
              className="bg-muted border-border"
            />
            <select
              value={formData.teamSize}
              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
              className="w-full px-3 py-2 rounded-md bg-muted border border-border text-foreground text-sm"
              required
            >
              <option value="">Team size</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="500+">500+ employees</option>
            </select>
            <Button 
              type="submit" 
              className="w-full bg-accent-pink hover:bg-accent-pink/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Starting trial...' : 'Start Free Trial'}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              By signing up, you agree to our Terms and Privacy Policy
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CometPage;
