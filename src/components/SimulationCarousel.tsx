import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, ChevronRight, Zap, Target, BarChart2, Lightbulb } from 'lucide-react';

interface Environment {
  id: string;
  name: string;
  desc: string;
  image?: string;
  focus?: string[];
  difficulty?: string;
  status: string;
  icon?: any;
}

interface SimulationCarouselProps {
  items: Environment[];
  onSelect: (id: string) => void;
  title?: string;
  subtitle?: string;
}

export const SimulationCarousel = ({ items, onSelect, title, subtitle }: SimulationCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  // Helper to get consistent icons if missing
  const getIcon = (item: Environment, index: number) => {
    if (item.icon) return item.icon;
    const icons = [Lightbulb, Target, Zap, BarChart2];
    return icons[index % icons.length];
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="mb-12">
          {title && <h2 className="text-4xl md:text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-4">{title}</h2>}
          {subtitle && <p className="text-slate-500 font-medium max-w-2xl">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Main Column (Active Environment) - 65% width on desktop */}
        <div className="lg:col-span-8 group relative min-h-[600px] lg:min-h-[650px]">
          <div className="absolute inset-0 rounded-[48px] overflow-hidden bg-botanical-950 shadow-2xl">
            {/* Background Image with Crossfade */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 0.6, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={activeItem.image || `https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80`}
                alt={activeItem.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/40 to-transparent" />
            
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-end">
              <div className="max-w-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="px-4 py-1.5 bg-emerald-500 text-white rounded-full">
                        <span className="text-[10px] font-black uppercase tracking-widest">
                          {activeItem.difficulty || activeItem.status}
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Active Environment</span>
                    </div>

                    <h3 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                      {activeItem.name}
                    </h3>
                    
                    <p className="text-xl text-slate-300 font-medium mb-12 leading-relaxed line-clamp-3">
                      {activeItem.desc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => onSelect(activeItem.id)}
                        className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-emerald-500/20 active:scale-95"
                      >
                        <Play className="w-4 h-4 fill-current" />
                        <span>Start Simulation</span>
                      </button>
                      <button className="bg-white/5 border border-white/10 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Grid (4 cards in 2x2) - 35% width on desktop */}
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-2 gap-4">
          {items.slice(0, 4).map((item, index) => {
            const Icon = getIcon(item, index);
            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-6 rounded-[32px] border transition-all duration-500 group relative overflow-hidden flex flex-col justify-between ${
                  activeIndex === index 
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-xl' 
                  : 'bg-white text-botanical-950 border-slate-100 hover:border-emerald-500/30 shadow-sm'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    activeIndex === index ? 'bg-white/20' : 'bg-slate-50'
                  }`}>
                    <Icon className={`w-6 h-6 ${activeIndex === index ? 'text-white' : 'text-emerald-500'}`} />
                  </div>
                  {activeIndex === index && (
                    <motion.div 
                      layoutId="active-dot"
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </div>
                
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight mb-2 leading-tight">
                    {item.name}
                  </h4>
                  <div className={`h-1 w-8 rounded-full transition-all duration-500 ${
                    activeIndex === index ? 'bg-white/50 w-12' : 'bg-slate-100'
                  }`} />
                </div>

                {/* Focus badges - very small */}
                {activeIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-2 right-2"
                  >
                     <ChevronRight className="w-4 h-4 text-white/40" />
                  </motion.div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Indicator */}
      <div className="mt-8 flex items-center justify-center space-x-3 lg:hidden">
         {items.map((_, i) => (
           <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-emerald-500' : 'w-2 bg-slate-200'}`} 
           />
         ))}
      </div>
    </div>
  );
};
