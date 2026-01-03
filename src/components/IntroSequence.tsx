import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

const IntroSequence = ({ onComplete }: IntroSequenceProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 500),
      setTimeout(() => setPhase(2), 1500),
      setTimeout(() => setPhase(3), 2500),
      setTimeout(() => onComplete(), 3500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px]"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Logo container */}
      <div className="relative">
        {/* Outer ring */}
        <motion.div
          className="absolute -inset-8 rounded-full border border-primary/30"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        />
        
        {/* Middle ring */}
        <motion.div
          className="absolute -inset-16 rounded-full border border-primary/20"
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={phase >= 1 ? { scale: 1, opacity: 1, rotate: 180 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />

        {/* Outer glow ring */}
        <motion.div
          className="absolute -inset-24 rounded-full border border-primary/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={phase >= 2 ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        {/* Logo */}
        <motion.div
          className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <motion.span
            className="font-outfit font-bold text-5xl text-primary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A
          </motion.span>
          
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>

        {/* Pulse rings */}
        {phase >= 2 && [0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-2xl border border-primary/50"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1.5, delay: i * 0.3, repeat: 1 }}
          />
        ))}
      </div>

      {/* Brand name */}
      <motion.div
        className="absolute bottom-1/3 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 2 ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-outfit font-bold text-4xl md:text-5xl">
          <span className="gradient-text">Agaami</span>
          <span className="text-foreground"> AI Labs</span>
        </h1>
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-muted-foreground text-lg"
        initial={{ opacity: 0 }}
        animate={phase >= 3 ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        Powering the Future of AI
      </motion.p>

      {/* Skip button */}
      <motion.button
        className="absolute bottom-8 right-8 text-sm text-muted-foreground hover:text-foreground transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={onComplete}
      >
        Skip →
      </motion.button>

      {/* Scanning lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ top: '0%' }}
        animate={{ top: '100%' }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      />
    </motion.div>
  );
};

export default IntroSequence;
