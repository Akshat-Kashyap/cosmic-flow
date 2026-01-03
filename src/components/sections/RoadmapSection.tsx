import { motion } from 'framer-motion';
import { Check, Clock, Rocket } from 'lucide-react';

const milestones = [
  {
    date: 'Q1 2024',
    title: 'Assurely KYC Launch',
    description: 'Enterprise identity verification goes live with biometric scanning.',
    status: 'completed',
  },
  {
    date: 'Q2 2024',
    title: 'Custom AI Solutions',
    description: 'Launched bespoke AI development for enterprise clients.',
    status: 'completed',
  },
  {
    date: 'Q3 2024',
    title: 'Quantum Dash Beta',
    description: 'Real-time analytics platform enters public beta testing.',
    status: 'completed',
  },
  {
    date: 'Q4 2024',
    title: 'Comet HRMS Release',
    description: 'Modern HR platform with AI assistant goes live.',
    status: 'current',
  },
  {
    date: 'Q1 2025',
    title: 'Stock-Flow Launch',
    description: 'Intelligent supply chain management platform release.',
    status: 'upcoming',
  },
  {
    date: 'Q2 2025',
    title: 'Global Expansion',
    description: 'Opening new data centers in Europe and Asia-Pacific.',
    status: 'upcoming',
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Roadmap</span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See where we've been and where we're headed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`glass-card p-6 inline-block ${
                    milestone.status === 'current' ? 'border-primary/50 glow-cyan' : ''
                  }`}>
                    <span className={`text-sm font-medium ${
                      milestone.status === 'completed' ? 'text-accent-green' :
                      milestone.status === 'current' ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {milestone.date}
                    </span>
                    <h3 className="font-outfit font-semibold text-lg text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    milestone.status === 'completed' ? 'bg-accent-green/20 text-accent-green' :
                    milestone.status === 'current' ? 'bg-primary/20 text-primary animate-glow-pulse' :
                    'bg-secondary text-muted-foreground'
                  }`}>
                    {milestone.status === 'completed' ? (
                      <Check className="w-5 h-5" />
                    ) : milestone.status === 'current' ? (
                      <Rocket className="w-5 h-5" />
                    ) : (
                      <Clock className="w-5 h-5" />
                    )}
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
