import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BarChart3, Zap, Shield, Lock } from 'lucide-react';
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
import { API_URL } from '@/constants';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

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

// Sample data for charts
const areaChartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 450 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 550 },
  { name: 'Jul', value: 800 },
];

const barChartData = [
  { name: 'A', value: 60 },
  { name: 'B', value: 80 },
  { name: 'C', value: 40 },
  { name: 'D', value: 90 },
  { name: 'E', value: 70 },
  { name: 'F', value: 85 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-primary">{payload[0].value}</p>
      </div>
    );
  }
  return null;
};

const QuantumDashPage = () => {
  const { toast } = useToast();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          formType: "QuantumDash Waitlist",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast({
        title: "You're on the list!",
        description: "We'll notify you when Quantum Dash is ready.",
      });
      setEmail('');
      setIsModalOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden hero-pattern">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

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
              {/* Left - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-primary">Beta Access Available</span>
                </div>

                <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
                  <span className="gradient-text">Quantum</span>
                  <br />
                  Dash
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Mission control for your data. Real-time analytics with AI-powered insights, 
                  delivered through a beautiful interface.
                </p>

                <Button size="lg" className="group" onClick={() => setIsModalOpen(true)}>
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Right - Dashboard Visual with Recharts */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-card border border-border rounded-2xl p-6 shadow-xl">
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

                    {/* Charts with Recharts */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Area Chart */}
                      <div className="bg-secondary rounded-lg p-4 h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart data={areaChartData}>
                            <defs>
                              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="hsl(217 91% 60%)" stopOpacity={0.3}/>
                                <stop offset="95%" stopColor="hsl(217 91% 60%)" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <Tooltip content={<CustomTooltip />} />
                            <Area 
                              type="monotone" 
                              dataKey="value" 
                              stroke="hsl(217 91% 60%)" 
                              strokeWidth={2}
                              fill="url(#colorValue)" 
                            />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                      
                      {/* Bar Chart */}
                      <div className="bg-secondary rounded-lg p-4 h-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={barChartData}>
                            <Tooltip content={<CustomTooltip />} />
                            <Bar 
                              dataKey="value" 
                              fill="hsl(217 91% 60%)" 
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: 'Active Users', value: '12.4K' },
                        { label: 'Queries/sec', value: '8,421' },
                        { label: 'Uptime', value: '99.99%' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-secondary rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Everything You Need
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A complete analytics suite designed for speed, security, and simplicity.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="card-enhanced gradient-border silver-gloss rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
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
              className="card-enhanced gradient-border rounded-2xl p-12 text-center"
            >
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4">
                Ready to See the Future?
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8">
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
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
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
              className="bg-secondary"
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
