import React from 'react';
import { motion } from 'motion/react';
import { Rocket, ArrowRight, Laptop, Award, Users, Share2, Play } from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface PostViewProps {
  onPageChange: (page: Page) => void;
}

export const PostView = ({ onPageChange }: PostViewProps) => {
  return (
    <div className="min-h-screen bg-botanical-950 flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      <AnimatedBackground intensity="high" className="opacity-40" />
      
      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-botanical-950 border-4 border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/20"
        >
          <Play className="w-10 h-10 text-emerald-500 fill-emerald-500" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none"
        >
          Module <br /><span className="text-emerald-500 italic">Explored.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto"
        >
          You've just witnessed a glimpse of the execution-first curriculum at ABC. Ready to commit to the full transformation?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-10 bg-emerald-500 rounded-[40px] text-left relative overflow-hidden group cursor-pointer"
            onClick={() => onPageChange('application')}
          >
            <div className="relative z-10">
              <Award className="w-12 h-12 text-white mb-8" />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Become a <br />Founder</h3>
              <p className="text-white/80 font-medium mb-8">Join the next cohort of African builders and scale your vision.</p>
              <div className="flex items-center space-x-2 text-[10px] font-black text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                <span>Start Application</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/20 transition-all" />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-10 bg-white/5 border border-white/10 rounded-[40px] text-left relative overflow-hidden group cursor-pointer"
            onClick={() => onPageChange('programs')}
          >
            <div className="relative z-10">
              <Laptop className="w-12 h-12 text-emerald-500 mb-8" />
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-none">Other <br />Programs</h3>
              <p className="text-slate-400 font-medium mb-8">Explore our range of specialized execution-led business modules.</p>
              <div className="flex items-center space-x-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                <span>Browse All</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onPageChange('experience')}
            className="text-white hover:text-emerald-500 font-black uppercase tracking-widest text-[10px] border-b border-white/10 hover:border-emerald-500 transition-all pb-2 flex items-center space-x-2"
          >
            <Users className="w-4 h-4" />
            <span>Community Experience</span>
          </button>
          <button 
            onClick={() => onPageChange('home')}
            className="text-white hover:text-emerald-500 font-black uppercase tracking-widest text-[10px] border-b border-white/10 hover:border-emerald-500 transition-all pb-2 flex items-center space-x-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
