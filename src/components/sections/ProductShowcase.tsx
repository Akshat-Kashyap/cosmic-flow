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
    live: { label: 'Live', className: 'bg-accent-green/10 text-accent-green' },
    'coming-soon': { label: 'Coming Soon', className: 'bg-muted text-muted-foreground' },
    beta: { label: 'Beta', className: 'bg-primary/10 text-primary' },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link to={href} className="block group">
        <div className="h-full p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-200">
          {/* Status Badge */}
          <div className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium mb-4 ${statusConfig[status].className}`}>
            {statusConfig[status].label}
          </div>

          {/* Icon */}
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-foreground" />
          </div>

          {/* Content */}
          <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
            {title}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
          className="max-w-2xl mb-12"
        >
          <p className="text-sm font-medium text-primary mb-2">Products</p>
          <h2 className="font-semibold text-3xl md:text-4xl text-foreground mb-4">
            Enterprise-ready solutions
          </h2>
          <p className="text-muted-foreground">
            A suite of intelligent products designed to transform how enterprises operate, 
            analyze, and grow.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
