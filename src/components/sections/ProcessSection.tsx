import { motion } from 'framer-motion';
import { Database, Brain, Zap, Lock } from 'lucide-react';

const steps = [
  { icon: Database, title: "Data Ingestion", desc: "We securely connect to your on-premise or cloud data lakes." },
  { icon: Lock, title: "Sanitization", desc: "PII stripping and enterprise-grade encryption before processing." },
  { icon: Brain, title: "AI Processing", desc: "Our custom LLM agents analyze data patterns and anomalies." },
  { icon: Zap, title: "Actionable Intel", desc: "Real-time dashboards deliver insights, not just raw numbers." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 section-enhanced">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-primary mb-4 tracking-wide uppercase">
            Our Architecture
          </p>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Security and performance at the core
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center relative z-10">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
