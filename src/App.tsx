import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import QuantumDash from "./pages/products/QuantumDash";
import Assurely from "./pages/products/Assurely";
import CustomAI from "./pages/products/CustomAI";
import StockFlow from "./pages/products/StockFlow";
import Comet from "./pages/products/Comet";
import IntroSequence from "./components/IntroSequence";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    // Check if intro has been shown this session
    const introShown = sessionStorage.getItem('introShown');
    if (!introShown) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <AnimatePresence mode="wait">
          {showIntro && <IntroSequence onComplete={handleIntroComplete} />}
        </AnimatePresence>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/products/quantumdash" element={<QuantumDash />} />
            <Route path="/products/kyc-suite" element={<Assurely />} />
            <Route path="/products/custom-ai" element={<CustomAI />} />
            <Route path="/products/stock-flow" element={<StockFlow />} />
            <Route path="/products/comet" element={<Comet />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
