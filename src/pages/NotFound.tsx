import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Floating cubes decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="floating-cube absolute top-[15%] left-[10%]"
          animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="floating-cube floating-cube-sm absolute top-[25%] right-[15%]"
          animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="floating-cube floating-cube-xs absolute bottom-[30%] left-[20%]"
          animate={{ y: [-5, 15, -5], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div 
          className="floating-cube absolute bottom-[20%] right-[10%]"
          animate={{ y: [5, -15, 5], rotate: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="floating-cube floating-cube-sm absolute top-[50%] left-[5%]"
          animate={{ y: [-8, 12, -8], rotate: [0, 6, 0] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-[10rem] md:text-[14rem] font-bold leading-none gradient-text"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            404
          </motion.h1>

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Status message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-sm font-mono text-primary mb-2 tracking-wider">
              MISSION STATUS: LOST IN SPACE
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Houston, we have a problem
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              The page you're looking for has drifted into the void. 
              Let's navigate you back to familiar territory.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg" className="group">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Base
              </Link>
            </Button>
          </motion.div>

          {/* Path info */}
          <motion.p
            className="mt-8 text-sm text-muted-foreground font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Lost route: <span className="text-foreground">{location.pathname}</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
