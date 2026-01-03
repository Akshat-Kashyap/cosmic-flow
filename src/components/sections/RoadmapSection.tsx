import { motion } from 'framer-motion';
import { Check, Clock, ArrowRight } from 'lucide-react';

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
    <section id="roadmap" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Roadmap</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Our journey
          </h2>
          <p className="text-muted-foreground">
            See where we've been and where we're headed.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-5 rounded-xl border ${
                milestone.status === 'current'
                  ? 'bg-primary/5 border-primary/30'
                  : 'bg-card border-border'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  milestone.status === 'completed'
                    ? 'bg-accent-green/20 text-accent-green'
                    : milestone.status === 'current'
                    ? 'bg-primary/20 text-primary'
                    : 'bg-secondary text-muted-foreground'
                }`}>
                  {milestone.status === 'completed' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : milestone.status === 'current' ? (
                    <ArrowRight className="w-3.5 h-3.5" />
                  ) : (
                    <Clock className="w-3.5 h-3.5" />
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  milestone.status === 'completed'
                    ? 'text-accent-green'
                    : milestone.status === 'current'
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}>
                  {milestone.date}
                </span>
              </div>
              <h3 className="font-medium text-foreground mb-1">{milestone.title}</h3>
              <p className="text-sm text-muted-foreground">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
