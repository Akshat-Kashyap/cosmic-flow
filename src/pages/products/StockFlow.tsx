import { motion } from 'framer-motion';
import { ArrowLeft, Truck, Package, Globe, BarChart, Clock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const stats = [
  { label: 'Target Launch', value: 'Q1 2025', icon: Clock },
  { label: 'Projected Uptime', value: '99.9%', icon: Zap },
  { label: 'Global Coverage', value: '150+ Countries', icon: Globe },
];

const features = [
  {
    icon: Truck,
    title: 'Intelligent Routing',
    description: 'AI-optimized delivery routes that reduce costs and improve speed.',
  },
  {
    icon: Package,
    title: 'Inventory Prediction',
    description: 'Machine learning models that forecast demand with 95% accuracy.',
  },
  {
    icon: BarChart,
    title: 'Real-Time Analytics',
    description: 'Live dashboards tracking every package across your supply chain.',
  },
];

const StockFlowPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero - Command Center Style (Coming Soon) */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* World map background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            
            {/* Animated supply routes */}
            <svg className="absolute inset-0 w-full h-full opacity-40">
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(187 100% 50%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(187 100% 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[
                'M 100 300 Q 400 100 700 250',
                'M 200 400 Q 500 200 800 350',
                'M 150 200 Q 450 350 750 200',
              ].map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                />
              ))}
            </svg>

            {/* Warehouse nodes */}
            {[
              { x: '20%', y: '40%' },
              { x: '50%', y: '30%' },
              { x: '80%', y: '45%' },
              { x: '35%', y: '60%' },
              { x: '65%', y: '55%' },
            ].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: pos.x, top: pos.y }}
              >
                <motion.div
                  className="w-4 h-4 rounded-sm bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-sm bg-primary"
                  animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                />
              </motion.div>
            ))}

            {/* Ambient glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/15 rounded-full blur-[150px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-purple/10 border border-accent-purple/30 mb-8"
              >
                <Clock className="w-4 h-4 text-accent-purple" />
                <span className="text-sm font-medium text-accent-purple">Coming Q1 2025</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-outfit font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
              >
                <span className="gradient-text">Stock-Flow</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
              >
                The command center for your supply chain. AI-powered logistics 
                that predict, optimize, and deliver with unprecedented precision.
              </motion.p>

              {/* Training Progress */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-8 max-w-md mx-auto mb-12"
              >
                <h3 className="font-outfit font-semibold text-foreground mb-4">System Training Progress</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Route Optimization AI', progress: 92 },
                    { label: 'Demand Forecasting', progress: 87 },
                    { label: 'Inventory Models', progress: 78 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-primary">{item.progress}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-accent-blue"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Get Notified at Launch
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-outfit font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Features */}
        <section className="py-24 relative bg-secondary/20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                What's <span className="gradient-text">Coming</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A preview of the capabilities that will revolutionize your logistics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StockFlowPage;
