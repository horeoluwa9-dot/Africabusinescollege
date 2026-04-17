
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Monitor, 
  Award, 
  Sparkles,
  ChevronRight,
  TrendingUp,
  Target
} from 'lucide-react';
import { Page } from '../components/Layout';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface WelcomeProps {
  onDashboard: () => void;
  onSimulation: () => void;
}

export const Welcome: React.FC<WelcomeProps> = ({ onDashboard, onSimulation }) => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-botanical-950 flex items-center justify-center p-6 relative overflow-hidden">
      <AnimatedBackground intensity="high" className="opacity-40" />
      
      {/* Decorative Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/20"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
          
          <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            {t('welcome.title').split(' ')[0]} <span className="text-emerald-500">{t('welcome.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            {t('welcome.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-sm group hover:bg-white/[0.08] transition-all cursor-pointer" onClick={onDashboard}>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20">
              <TrendingUp className="w-7 h-7 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-emerald-400 transition-all">{t('welcome.goToDashboard')}</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">
              Access your modules, cohort network, and real-time performance analytics.
            </p>
            <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform">
              <span>Enter Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-sm group hover:bg-white/[0.08] transition-all cursor-pointer" onClick={onSimulation}>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 border border-emerald-500/20 relative">
              <Monitor className="w-7 h-7 text-emerald-500" />
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-4 h-4 text-emerald-500 animate-pulse" />
              </div>
            </div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-emerald-400 transition-all">{t('welcome.startFirstSimulation')}</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">
              Jump straight into your first challenge: <span className="text-white">Opportunity Identification Engine</span>.
            </p>
            <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform">
              <span>Launch Lab</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ONBOARDING PROGRESSION */}
        <div className="max-w-xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  i === 1 ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-white/10 text-white/20'
                }`}>
                  <span className="text-[10px] font-black">{i}</span>
                </div>
                <span className="text-[8px] font-black uppercase tracking-widest mt-3 text-white/40">{t('welcome.nextSteps')} {i}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 border border-white/5 rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-white/60">Program: {user?.program || 'Entrepreneurship Program'}</p>
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Cohort: Fall 2026</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
