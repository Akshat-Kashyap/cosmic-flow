import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Rocket, Shield, Globe } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'Every product starts with a genuine need and ends with meaningful impact.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Pushing boundaries with cutting-edge AI and machine learning.',
  },
  {
    icon: Users,
    title: 'Human-Centric',
    description: 'Technology that enhances human potential, not replaces it.',
  },
  {
    icon: Rocket,
    title: 'Rapid Scaling',
    description: 'From prototype to production at enterprise speed.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Enterprise-grade security built into every layer.',
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Building solutions that work across borders and cultures.',
  },
];

const VisionBento = () => {
  return (
    <section id="vision" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Our Vision</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
            What drives us forward
          </h2>
          <p className="text-muted-foreground">
            Our core principles guide everything we build and every decision we make.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                <value.icon className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionBento;
