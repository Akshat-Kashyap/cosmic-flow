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
    <section id="services" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Services</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
            What we offer
          </h2>
          <p className="text-muted-foreground">
            Comprehensive technology services to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
