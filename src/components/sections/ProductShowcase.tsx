import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  href: string;
  accentColor: 'cyan' | 'green' | 'purple' | 'pink';
  status: 'live' | 'coming-soon' | 'beta';
  visual: React.ReactNode;
  index: number;
}

const ProductCard = ({ title, description, href, accentColor, status, visual, index }: ProductCardProps) => {
  const colorClasses = {
    cyan: 'from-accent-cyan/20 to-transparent border-accent-cyan/30 hover:border-accent-cyan/50',
    green: 'from-accent-green/20 to-transparent border-accent-green/30 hover:border-accent-green/50',
    purple: 'from-accent-purple/20 to-transparent border-accent-purple/30 hover:border-accent-purple/50',
    pink: 'from-accent-pink/20 to-transparent border-accent-pink/30 hover:border-accent-pink/50',
  };

  const glowClasses = {
    cyan: 'glow-cyan',
    green: 'glow-green',
    purple: 'glow-purple',
    pink: 'glow-pink',
  };

  const statusColors = {
    live: 'bg-accent-green/20 text-accent-green border-accent-green/30',
    'coming-soon': 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
    beta: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
  };

  const statusLabels = {
    live: 'Live',
    'coming-soon': 'Coming Soon',
    beta: 'Beta',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link to={href}>
        <div className={`group relative h-full rounded-2xl bg-gradient-to-b ${colorClasses[accentColor]} border backdrop-blur-sm p-6 transition-all duration-300 hover:scale-[1.02] overflow-hidden`}>
          {/* Status Badge */}
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[status]} mb-4`}>
            {statusLabels[status]}
          </div>

          {/* Visual */}
          <div className="relative h-40 mb-6 flex items-center justify-center">
            {visual}
          </div>

          {/* Content */}
          <h3 className="font-outfit font-semibold text-xl text-foreground mb-2 flex items-center gap-2">
            {title}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

          {/* Hover glow effect */}
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${glowClasses[accentColor]}`} />
        </div>
      </Link>
    </motion.div>
  );
};

// Animated Visuals for each product
const QuantumDashVisual = () => (
  <svg viewBox="0 0 200 120" className="w-full h-full">
    {/* Grid */}
    <defs>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="hsl(187 100% 50%)" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    {/* Bars */}
    {[20, 50, 80, 110, 140, 170].map((x, i) => (
      <motion.rect
        key={x}
        x={x}
        y={100 - (20 + Math.random() * 60)}
        width="20"
        height={20 + Math.random() * 60}
        rx="4"
        fill="url(#cyanGrad)"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        style={{ transformOrigin: 'bottom' }}
      />
    ))}
    {/* Line chart */}
    <motion.path
      d="M 10 80 Q 50 30 100 60 T 190 40"
      fill="none"
      stroke="hsl(187 100% 50%)"
      strokeWidth="2"
      strokeDasharray="200"
      initial={{ strokeDashoffset: 200 }}
      animate={{ strokeDashoffset: 0 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </svg>
);

const AssurelyVisual = () => (
  <div className="relative w-32 h-32">
    {/* Radar circles */}
    {[1, 0.75, 0.5, 0.25].map((scale, i) => (
      <motion.div
        key={i}
        className="absolute inset-0 rounded-full border border-accent-green/30"
        style={{ transform: `scale(${scale})` }}
      />
    ))}
    {/* Rotating scan line */}
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-1/2 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-accent-green to-transparent origin-left" />
    </motion.div>
    {/* Center dot */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent-green animate-glow-pulse" />
    {/* Blips */}
    {[{ x: 20, y: -30 }, { x: -25, y: 15 }, { x: 35, y: 20 }].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent-green"
        style={{ x: pos.x, y: pos.y }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, delay: i * 0.5, repeat: Infinity }}
      />
    ))}
  </div>
);

const CustomAIVisual = () => (
  <div className="relative w-40 h-32">
    {/* Neural nodes */}
    {[
      { x: 20, y: 60 }, { x: 60, y: 20 }, { x: 60, y: 60 }, { x: 60, y: 100 },
      { x: 100, y: 40 }, { x: 100, y: 80 }, { x: 140, y: 60 }
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 rounded-full bg-accent-purple"
        style={{ left: pos.x, top: pos.y }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
      />
    ))}
    {/* Connections */}
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(270 70% 60%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(270 70% 60%)" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {[
        "M 26 66 L 66 26", "M 26 66 L 66 66", "M 26 66 L 66 106",
        "M 66 26 L 106 46", "M 66 66 L 106 46", "M 66 66 L 106 86",
        "M 66 106 L 106 86", "M 106 46 L 146 66", "M 106 86 L 146 66"
      ].map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="url(#purpleGrad)"
          strokeWidth="1.5"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: i * 0.1, repeat: Infinity, repeatType: "loop", repeatDelay: 1 }}
        />
      ))}
    </svg>
  </div>
);

const StockFlowVisual = () => (
  <div className="relative w-40 h-32">
    {/* Warehouse nodes */}
    {[
      { x: 10, y: 50 }, { x: 70, y: 20 }, { x: 70, y: 80 }, { x: 130, y: 50 }
    ].map((pos, i) => (
      <motion.div
        key={i}
        className="absolute w-8 h-8 rounded-lg bg-accent-cyan/20 border border-accent-cyan/50 flex items-center justify-center"
        style={{ left: pos.x, top: pos.y }}
      >
        <div className="w-2 h-2 rounded-sm bg-accent-cyan" />
      </motion.div>
    ))}
    {/* Flow lines */}
    <svg className="absolute inset-0 w-full h-full">
      {[
        { d: "M 26 58 Q 50 40 78 28", delay: 0 },
        { d: "M 26 58 Q 50 75 78 88", delay: 0.3 },
        { d: "M 86 28 Q 110 40 138 58", delay: 0.6 },
        { d: "M 86 88 Q 110 75 138 58", delay: 0.9 },
      ].map((line, i) => (
        <motion.path
          key={i}
          d={line.d}
          stroke="hsl(187 100% 50%)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 4"
          initial={{ strokeDashoffset: 20 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 1, delay: line.delay, repeat: Infinity }}
        />
      ))}
    </svg>
    {/* Moving packages */}
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-sm bg-primary"
        animate={{
          x: [20, 75, 140],
          y: [60, i === 1 ? 30 : 90, 60],
        }}
        transition={{ duration: 2, delay: i * 0.7, repeat: Infinity }}
      />
    ))}
  </div>
);

const CometVisual = () => (
  <div className="relative w-40 h-40 flex items-center justify-center">
    {/* Central hub */}
    <motion.div
      className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-pink to-accent-purple flex items-center justify-center z-10"
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-lg font-bold text-white">C</span>
    </motion.div>
    
    {/* Orbit rings */}
    <div className="absolute inset-4 rounded-full border border-accent-pink/20" />
    <div className="absolute inset-0 rounded-full border border-accent-pink/10" />
    
    {/* Orbiting avatars */}
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-accent-pink/80 to-accent-purple/80 border-2 border-background"
        style={{ left: '50%', top: '50%' }}
        animate={{
          x: [
            Math.cos((i * 72 * Math.PI) / 180) * 55 - 12,
            Math.cos(((i * 72 + 360) * Math.PI) / 180) * 55 - 12,
          ],
          y: [
            Math.sin((i * 72 * Math.PI) / 180) * 55 - 12,
            Math.sin(((i * 72 + 360) * Math.PI) / 180) * 55 - 12,
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i * 0.2 }}
      />
    ))}
    
    {/* Comet trails */}
    <motion.div
      className="absolute w-20 h-1 bg-gradient-to-r from-accent-pink/50 to-transparent rounded-full"
      style={{ left: '60%', top: '45%', rotate: '-30deg' }}
      animate={{ opacity: [0, 0.8, 0], scaleX: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </div>
);

const ProductShowcase = () => {
  const products = [
    {
      title: 'Quantum Dash',
      description: 'Real-time analytics dashboard with AI-powered insights and beautiful visualizations.',
      href: '/products/quantumdash',
      accentColor: 'cyan' as const,
      status: 'beta' as const,
      visual: <QuantumDashVisual />,
    },
    {
      title: 'Assurely KYC',
      description: 'Enterprise-grade identity verification with biometric scanning and global compliance.',
      href: '/products/kyc-suite',
      accentColor: 'green' as const,
      status: 'live' as const,
      visual: <AssurelyVisual />,
    },
    {
      title: 'Custom AI',
      description: 'Bespoke AI solutions tailored to your enterprise needs with on-premise deployment.',
      href: '/products/custom-ai',
      accentColor: 'purple' as const,
      status: 'live' as const,
      visual: <CustomAIVisual />,
    },
    {
      title: 'Stock-Flow',
      description: 'Intelligent supply chain and inventory management powered by predictive AI.',
      href: '/products/stock-flow',
      accentColor: 'cyan' as const,
      status: 'coming-soon' as const,
      visual: <StockFlowVisual />,
    },
    {
      title: 'Comet HRMS',
      description: 'Modern HR platform with AI assistant, smart analytics, and seamless team management.',
      href: '/products/comet',
      accentColor: 'pink' as const,
      status: 'live' as const,
      visual: <CometVisual />,
    },
  ];

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">Our Products</span>
          <h2 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mt-4 mb-4">
            Built for the Future
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A suite of intelligent products designed to transform how enterprises operate, 
            analyze, and grow in the digital age.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
