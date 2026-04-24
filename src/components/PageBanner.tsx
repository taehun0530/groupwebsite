import React from 'react';
import { motion } from 'motion/react';

interface PageBannerProps {
  title?: string;
  hideLine?: boolean;
}

const PageBanner: React.FC<PageBannerProps> = ({ hideLine = false }) => {
  return (
    <div className="relative w-full h-16 md:h-20 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=2000" 
          alt="Decorative artwork" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary" />
      </div>
      
      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      
      {!hideLine && (
        <div className="relative z-10 h-full max-w-7xl mx-auto px-8 flex items-center">
           <motion.div 
             initial={{ opacity: 0, x: -10 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             className="w-12 h-px bg-accent-blue/50"
           />
        </div>
      )}
    </div>
  );
};

export default PageBanner;
