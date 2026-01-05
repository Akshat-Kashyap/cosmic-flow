import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, ogImage = '/og-image.png' }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Agaami AI Labs`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Agaami AI Labs`);
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${title} | Agaami AI Labs`);
    }
    
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }
    
    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    if (twitterImg) {
      twitterImg.setAttribute('content', ogImage);
    }
    
    // Cleanup - restore defaults on unmount
    return () => {
      document.title = 'Agaami AI Labs | Enterprise Intelligence Solutions';
    };
  }, [title, description, ogImage]);
  
  return null;
};

export default SEOHead;
