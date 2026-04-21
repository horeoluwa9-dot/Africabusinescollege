import React from 'react';
import { motion } from 'motion/react';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ children, className = '', dark = false }) => {
  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 48 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`h-[1.5px] ${dark ? 'bg-emerald-400/30' : 'bg-emerald-500/40'}`}
      />
      <span className={`text-[11px] md:text-[13px] font-black uppercase tracking-[0.25em] ${dark ? 'text-emerald-400/90' : 'text-emerald-800/80'}`}>
        {children}
      </span>
    </div>
  );
};
