import { BarChart3, Shield, Brain, Package, Users, Phone, MapPin } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Agaami AI Labs",
  tagline: "Building intelligent systems for the future of enterprise",
};

export const PRODUCTS = [
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
    status: 'coming-soon' as const,
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

export const CONTACT_INFO = [
  { icon: Phone, label: "Phone", value: "+91 8310530325" },
  { icon: Phone, label: "Phone", value: "+91 7007241423" },
  { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India" },
];

// API Configuration - Replace with your actual API URL
export const API_URL = "INSERT_API_URL_HERE";
