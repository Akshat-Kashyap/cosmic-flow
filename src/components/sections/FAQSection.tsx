import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including finance, healthcare, retail, logistics, and technology. Our AI solutions are designed to be adaptable across various sectors.',
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation timelines vary based on project complexity. Simple integrations can be completed in 2-4 weeks, while enterprise-wide deployments may take 2-3 months.',
  },
  {
    question: 'Do you offer custom AI solutions?',
    answer: 'Yes, we specialize in building custom AI solutions tailored to your specific business needs. Our team works closely with you to understand requirements and deliver bespoke solutions.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 enterprise support with dedicated account managers, technical documentation, training sessions, and ongoing maintenance for all our products.',
  },
  {
    question: 'Is my data secure with your solutions?',
    answer: 'Absolutely. Security is our top priority. We implement enterprise-grade encryption, comply with GDPR and SOC 2 standards, and never share your data with third parties.',
  },
  {
    question: 'Can I integrate your products with existing systems?',
    answer: 'Yes, all our products are designed with integration in mind. We provide RESTful APIs, webhooks, and pre-built connectors for popular enterprise tools.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 section-enhanced">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl font-semibold text-primary mb-4 tracking-wide uppercase">FAQ</p>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our products and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="card-enhanced gradient-border rounded-xl px-5 border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
