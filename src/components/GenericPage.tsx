import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface GenericPageProps {
  title: string;
  description: string;
  onBack: () => void;
}

export const GenericPage: React.FC<GenericPageProps> = ({ title, description, onBack }) => {
  return (
    <div className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[70vh]">
      <motion.button 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onBack}
        className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-12 hover:translate-x-[-4px] transition-transform"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8">
          {title}
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mb-12">
          {description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div className="p-12 bg-surface-low rounded-3xl border border-slate-100">
            <h3 className="text-2xl font-black text-botanical-950 mb-6">Overview</h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              This section is currently being architected by our institutional team. We are committed to providing high-fidelity content that mirrors the excellence of the African business landscape.
            </p>
          </div>
          <div className="p-12 bg-botanical-950 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
            <h3 className="text-2xl font-black text-white mb-6 relative z-10">Next Steps</h3>
            <p className="text-slate-400 font-medium leading-relaxed relative z-10">
              Stay tuned for updates regarding this module. You can subscribe to our newsletter in the footer to be notified of new institutional releases.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
