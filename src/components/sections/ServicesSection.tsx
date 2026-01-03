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
    <section id="services" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-purple text-sm font-medium uppercase tracking-wider">Services</span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4">
            What We <span className="gradient-text-purple">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group glass-card p-6 hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center mb-4 group-hover:bg-accent-purple/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="font-outfit font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
