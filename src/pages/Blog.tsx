import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Calendar, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SciFiBackground from '@/components/SciFiBackground';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Enterprise AI: Trends to Watch in 2025',
    excerpt: 'Explore the emerging trends that will shape how enterprises leverage artificial intelligence in the coming year.',
    date: 'Dec 15, 2024',
    author: 'Agaami Team',
    category: 'AI Trends',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Secure KYC Systems: A Technical Deep Dive',
    excerpt: 'Learn the architecture behind enterprise-grade identity verification and how to implement it securely.',
    date: 'Dec 10, 2024',
    author: 'Security Team',
    category: 'Security',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'Why Real-Time Analytics Matters for Modern Businesses',
    excerpt: 'Discover how instant data insights can transform decision-making and drive competitive advantage.',
    date: 'Dec 5, 2024',
    author: 'Product Team',
    category: 'Analytics',
    readTime: '4 min read',
  },
  {
    id: 4,
    title: 'Introducing Comet: Reimagining HR for the AI Era',
    excerpt: 'A behind-the-scenes look at how we built our AI-powered HRMS platform from the ground up.',
    date: 'Nov 28, 2024',
    author: 'Agaami Team',
    category: 'Product',
    readTime: '6 min read',
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SciFiBackground />
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Blog</span>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mt-4 mb-6">
              Insights & <span className="gradient-text">Updates</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest in AI, security, and enterprise technology from our team.
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-sm">{post.readTime}</span>
                </div>
                
                <h2 className="font-outfit font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="glass-card inline-block px-8 py-4">
              <p className="text-muted-foreground">
                <FileText className="w-5 h-5 inline mr-2" />
                Full blog with CMS coming soon. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
