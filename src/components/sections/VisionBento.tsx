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
    <section id="vision" className="py-12 bg-secondary/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-sm font-medium text-primary mb-2">Our Vision</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-3">
            What drives us forward
          </h2>
          <p className="text-muted-foreground">
            Our core principles guide everything we build.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group p-5 rounded-2xl backdrop-blur-sm bg-card/60 border border-border/50 hover:bg-card/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionBento;
