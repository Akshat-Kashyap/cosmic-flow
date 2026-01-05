import { Link } from 'react-router-dom';
import logo from '@/assets/logo.ico';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Agaami" className="w-7 h-7 rounded-lg object-contain" />
            <span className="font-medium text-foreground">Agaami AI Labs</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Agaami AI Labs. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
