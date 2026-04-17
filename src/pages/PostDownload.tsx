import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Mail, Calendar, BookOpen, Share2 } from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface PostDownloadProps {
  onPageChange: (page: Page) => void;
}

export const PostDownload = ({ onPageChange }: PostDownloadProps) => {
  return (
    <div className="min-h-screen bg-botanical-950 flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
      <AnimatedBackground intensity="high" className="opacity-40" />
      
      <div className="max-w-4xl w-full relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl shadow-emerald-500/40"
        >
          <CheckCircle2 className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none"
        >
          Brochure <br /><span className="text-emerald-500 italic">Downloaded.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto"
        >
          Your roadmap to execution has been successfully downloaded. While you're here, why not start your transformation today?
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-left">
          {[
            {
              icon: Calendar,
              title: "Next Intake",
              desc: "Starts May 15, 2026",
              action: "View Deadlines",
              page: 'admissions' as Page
            },
            {
              icon: Mail,
              title: "Talk to us",
              desc: "Get your questions answered",
              action: "Contact Support",
              page: 'contact' as Page
            },
            {
              icon: BookOpen,
              title: "Curriculum",
              desc: "Deep dive into modules",
              action: "Explore Learning",
              page: 'learning' as Page
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/10 transition-all group cursor-pointer"
              onClick={() => onPageChange(item.page)}
            >
              <item.icon className="w-8 h-8 text-emerald-500 mb-6" />
              <h3 className="text-lg font-black text-white uppercase tracking-tight mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 font-medium mb-6">{item.desc}</p>
              <div className="flex items-center space-x-2 text-[10px] font-black text-emerald-500 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                <span>{item.action}</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onPageChange('application')}
            className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/40"
          >
            Apply Now
          </button>
          <button 
            onClick={() => onPageChange('home')}
            className="bg-white/5 border border-white/10 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center space-x-3"
          >
            <Share2 className="w-4 h-4" />
            <span>Go Back Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
