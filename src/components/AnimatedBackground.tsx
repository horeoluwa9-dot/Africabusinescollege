import React from 'react';
import { motion } from 'motion/react';

interface AnimatedBackgroundProps {
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  className = "opacity-20", 
  intensity = 'medium' 
}) => {
  const settings = {
    low: { duration: 15, opacity: 0.3 },
    medium: { duration: 12, opacity: 0.5 },
    high: { duration: 8, opacity: 0.7 }
  };

  const { duration, opacity } = settings[intensity];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div 
        animate={{ 
          x: [0, 150, -150, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.6, 0.6, 1],
          rotate: [0, 45, -45, 0]
        }}
        transition={{ 
          duration: duration, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ opacity }}
        className="absolute -top-[20%] -right-[10%] w-[90%] h-[90%] bg-emerald-400 rounded-full blur-[140px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -120, 120, 0],
          y: [0, -150, 60, 0],
          scale: [1.5, 0.5, 1.4, 1.5],
          rotate: [0, -60, 60, 0]
        }}
        transition={{ 
          duration: duration * 1.3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ opacity: opacity * 0.8 }}
        className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-emerald-600 rounded-full blur-[120px]" 
      />
      {/* Third subtle accent */}
      <motion.div 
        animate={{ 
          scale: [0.6, 1.4, 0.6],
          opacity: [0.2, 0.5, 0.2],
          x: [-20, 20, -20]
        }}
        transition={{ 
          duration: duration * 1.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-300/20 rounded-full blur-[180px]"
      />
    </div>
  );
};
