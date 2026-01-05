import { motion } from 'framer-motion';
import logo from '@/assets/logo.ico';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5" />
      
      <div className="relative flex flex-col items-center gap-6">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full scale-150" />
          
          {/* Logo container with pulse ring */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-2xl bg-primary/10 animate-ping" style={{ animationDuration: '2s' }} />
            <img 
              src={logo} 
              alt="Agaami AI Labs" 
              className="w-20 h-20 rounded-2xl object-contain relative z-10"
            />
          </motion.div>
        </motion.div>

        {/* Brand name */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-2xl font-semibold text-foreground">Agaami AI Labs</h1>
          <p className="text-sm text-muted-foreground mt-1">Enterprise Intelligence Solutions</p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-1.5"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.15,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 rounded-full bg-primary"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;
