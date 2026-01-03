import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket, Shield, Globe } from 'lucide-react';

const visionItems = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Solving real-world problems with innovative technology solutions.',
    size: 'large',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge AI and ML.',
    size: 'small',
  },
  {
    icon: Users,
    title: 'Human-Centric',
    description: 'Technology that enhances human potential.',
    size: 'small',
  },
  {
    icon: Rocket,
    title: 'Rapid Scaling',
    description: 'From prototype to production at lightning speed.',
    size: 'medium',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security built into every layer.',
    size: 'medium',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Building solutions that work across borders and cultures.',
    size: 'large',
  },
];

const VisionBento = () => {
  return (
    <section id="vision" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Vision</span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4">
            What Drives <span className="gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core principles guide everything we build and every decision we make.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {/* Mission-Driven - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 glass-card p-8 flex flex-col justify-between min-h-[300px]"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-2xl text-foreground mb-3">Mission-Driven</h3>
              <p className="text-muted-foreground">
                We believe technology should solve real problems. Every product we build 
                starts with a genuine need and ends with a meaningful impact on people's lives.
              </p>
            </div>
          </motion.div>

          {/* Innovation First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-3">
              <Lightbulb className="w-5 h-5 text-accent-cyan" />
            </div>
            <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">Innovation First</h3>
            <p className="text-sm text-muted-foreground">Pushing boundaries with cutting-edge AI and ML.</p>
          </motion.div>

          {/* Human-Centric */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-pink/10 flex items-center justify-center mb-3">
              <Users className="w-5 h-5 text-accent-pink" />
            </div>
            <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">Human-Centric</h3>
            <p className="text-sm text-muted-foreground">Technology that enhances human potential.</p>
          </motion.div>

          {/* Rapid Scaling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass-card p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-green/10 flex items-center justify-center mb-3">
              <Rocket className="w-5 h-5 text-accent-green" />
            </div>
            <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">Rapid Scaling</h3>
            <p className="text-sm text-muted-foreground">
              From prototype to production at lightning speed. We move fast without breaking things.
            </p>
          </motion.div>

          {/* Security First */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card p-6 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-accent-purple" />
            </div>
            <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">Security First</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade security built into every layer.</p>
          </motion.div>

          {/* Global Impact - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-3 glass-card p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center shrink-0">
              <Globe className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-outfit font-bold text-xl text-foreground mb-2">Global Impact</h3>
              <p className="text-muted-foreground">
                We build solutions that transcend borders and cultures, creating technology 
                that's accessible and impactful on a global scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionBento;
