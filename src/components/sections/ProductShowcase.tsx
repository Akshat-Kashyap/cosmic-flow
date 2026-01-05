import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/constants';

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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <Link to={href} className="block group h-full">
        <div className="h-full p-6 rounded-2xl card-enhanced gradient-border silver-gloss">
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
  return (
    <section id="products" className="py-24 section-enhanced">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xl md:text-2xl font-semibold text-primary mb-4 tracking-wide uppercase">Products</p>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Enterprise-ready solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            A suite of intelligent products designed to transform how enterprises operate.
          </p>
        </motion.div>

        {/* Products Grid - 3 columns symmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.slice(0, 3).map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
        {/* Bottom row centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[16.67%]">
          {PRODUCTS.slice(3).map((product, index) => (
            <ProductCard key={product.title} {...product} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
