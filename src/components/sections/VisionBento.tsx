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
    <section id="vision" className="py-22 section-enhanced">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-base font-medium text-primary mb-3">Our Vision</p>
          <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            What drives us forward
          </h2>
          <p className="text-lg text-muted-foreground">
            Our core principles guide everything we build.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group p-5 rounded-2xl card-enhanced gradient-border silver-gloss"
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
