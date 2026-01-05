import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="font-bold text-4xl md:text-5xl text-foreground mb-8">
              Terms of Service
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>

              <div className="space-y-8 text-foreground">
                <section>
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing or using our services, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
                  <p className="text-muted-foreground">
                    You may use our services only in compliance with these Terms and all applicable laws. 
                    You agree not to misuse our services or help anyone else do so.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
                  <p className="text-muted-foreground">
                    Our services and all content, features, and functionality are owned by Agaami AI Labs 
                    and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">4. Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, Agaami AI Labs shall not be liable for any 
                    indirect, incidental, special, consequential, or punitive damages resulting from your 
                    use of or inability to use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">5. Changes to Terms</h2>
                  <p className="text-muted-foreground">
                    We reserve the right to modify these terms at any time. We will notify users of any 
                    material changes by posting the new Terms on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us through our 
                    website contact form.
                  </p>
                </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
