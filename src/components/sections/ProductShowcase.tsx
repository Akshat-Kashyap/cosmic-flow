import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Shield, Brain, Package, Users } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  status: 'live' | 'coming-soon' | 'beta';
  icon: React.ElementType;
  index: number;
}

const ProductCard = ({ title, description, href, status, icon: Icon, index }: ProductCardProps) => {
  const statusConfig = {
    live: { label: 'Live', className: 'bg-accent-green/20 text-accent-green border border-accent-green/30' },
    'coming-soon': { label: 'Coming Soon', className: 'bg-muted/50 text-muted-foreground border border-border' },
    beta: { label: 'Beta', className: 'bg-primary/20 text-primary border border-primary/30' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={href} className="block group h-full">
        <div className="h-full p-6 rounded-2xl backdrop-blur-sm bg-card/60 border border-border/50 hover:bg-card/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 gradient-border silver-gloss">
          <div className="flex items-start justify-between mb-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            {/* Status Badge */}
            <div className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusConfig[status].className}`}>
              {statusConfig[status].label}
            </div>
          </div>

          {/* Content */}
          <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
            {title}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      title: 'Quantum Dash',
      description: 'Real-time analytics dashboard with AI-powered insights and beautiful visualizations.',
      href: '/products/quantumdash',
      status: 'beta' as const,
      icon: BarChart3,
    },
    {
      title: 'Assurely KYC',
      description: 'Enterprise-grade identity verification with biometric scanning and global compliance.',
      href: '/products/kyc-suite',
      status: 'live' as const,
      icon: Shield,
    },
    {
      title: 'Custom AI',
      description: 'Bespoke AI solutions tailored to your enterprise needs with on-premise deployment.',
      href: '/products/custom-ai',
      status: 'live' as const,
      icon: Brain,
    },
    {
      title: 'Stock-Flow',
      description: 'Intelligent supply chain and inventory management powered by predictive AI.',
      href: '/products/stock-flow',
      status: 'coming-soon' as const,
      icon: Package,
    },
    {
      title: 'Comet HRMS',
      description: 'Modern HR platform with AI assistant, smart analytics, and seamless team management.',
      href: '/products/comet',
      status: 'live' as const,
      icon: Users,
    },
  ];

  return (
    <section id="products" className="py-16">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <p className="text-sm font-medium text-primary mb-2">Products</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-3">
            Enterprise-ready solutions
          </h2>
          <p className="text-muted-foreground">
            A suite of intelligent products designed to transform how enterprises operate.
          </p>
        </motion.div>

        {/* Products Grid - 3 columns symmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
        {/* Bottom row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.67%]">
          {products.slice(3).map((product, index) => (
            <ProductCard key={product.title} {...product} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
