import { motion } from 'framer-motion';
import { 
  Brain, Shield, Cpu, BarChart3, 
  Cloud, Workflow, Lock, Zap 
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Strategy Consulting',
    description: 'Expert guidance on implementing AI solutions that align with your business goals.',
  },
  {
    icon: Shield,
    title: 'Security Audits',
    description: 'Comprehensive security assessments to protect your digital infrastructure.',
  },
  {
    icon: Cpu,
    title: 'Custom Development',
    description: 'Tailored software solutions built with cutting-edge technology stacks.',
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable cloud infrastructure design for optimal performance.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Streamline operations with intelligent automation workflows.',
  },
  {
    icon: Lock,
    title: 'Identity Solutions',
    description: 'Secure identity verification and access management systems.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Fine-tune your systems for maximum speed and efficiency.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 section-enhanced">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-base font-medium text-primary mb-3">Services</p>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            What we offer
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive technology services to help your business thrive.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group p-5 rounded-2xl card-enhanced gradient-border silver-gloss"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
