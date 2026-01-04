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
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden hero-pattern">
          {/* Clean background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-background" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Back Button - Separated */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-center"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-8"
              >
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Coming Q1 2025</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6"
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
                className="card-enhanced gradient-border silver-gloss rounded-2xl p-8 max-w-md mx-auto mb-12"
              >
                <h3 className="font-semibold text-foreground mb-4">System Training Progress</h3>
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
                          className="h-full bg-primary"
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
                <Button size="lg" variant="outline">
                  Get Notified at Launch
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 relative section-enhanced">
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
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
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-semibold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview Features */}
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-16"
            >
              <h2 className="font-bold text-4xl md:text-5xl text-foreground mb-4">
                What's <span className="gradient-text">Coming</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A preview of the capabilities that will revolutionize your logistics.
              </p>
            </motion.div>

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
                  className="card-enhanced gradient-border silver-gloss rounded-xl p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground mb-3">{feature.title}</h3>
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
