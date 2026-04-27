import React from 'react';
import { motion } from 'motion/react';

interface PageBannerProps {
  title?: string;
  hideLine?: boolean;
}

const PageBanner: React.FC<PageBannerProps> = ({ hideLine = false }) => {
  return (
    <div className="relative w-full h-24 md:h-[120px] overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/main-banner.jpg" 
          alt="Decorative artwork" 
          className="w-full h-full object-cover object-[0%_65%]"
          referrerPolicy="no-referrer"
        />
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
