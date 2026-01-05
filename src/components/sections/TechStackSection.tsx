import { motion } from 'framer-motion';

const technologies = [
  "OpenAI", "TensorFlow", "AWS", "Python", "React", "Docker", "Kubernetes", "PostgreSQL"
];

const TechStackSection = () => {
  return (
    <section className="py-8 border-y border-border/30 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground text-center mb-6"
        >
          Powered by Next-Gen Infrastructure
        </motion.p>
        
        {/* Infinite Scrolling Marquee */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <span
                key={index}
                className="mx-8 text-sm font-medium text-muted-foreground/70 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
