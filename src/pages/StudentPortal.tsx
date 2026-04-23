import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Lock, Globe, ShieldCheck, ArrowRight } from 'lucide-react';
import { Page } from '../components/Layout';
import { SectionLabel } from '../components/SectionLabel';

interface StudentPortalProps {
  onPageChange: (page: Page) => void;
}

export const StudentPortal: React.FC<StudentPortalProps> = ({ onPageChange }) => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-6 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="pt-4">
            <SectionLabel className="mb-8">Access Point</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-[0.85]">
              Student <br /> <span className="text-emerald-500 italic">Portal.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
              The ABC Learning OS is your mission control for business excellence. Access your simulation labs, curriculum, and cohort network in one unified interface.
            </p>
            
            <div className="space-y-6 mb-12">
               {[
                 { icon: LayoutDashboard, title: 'Learning OS', desc: 'Real-time dashboard for your progress and goals.' },
                 { icon: ShieldCheck, title: 'Institution-Grade Security', desc: 'Your data and ventures are protected by end-to-end encryption.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm shrink-0">
                       <item.icon className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                       <h4 className="text-lg font-black text-botanical-950 uppercase">{item.title}</h4>
                       <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            <button 
              onClick={() => onPageChange('dashboard-student')}
              className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl flex items-center gap-4 active:scale-95"
            >
              <span>Enter Learning OS</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
             <div className="aspect-[4/5] bg-white rounded-[60px] p-12 shadow-2xl border border-slate-100 relative overflow-hidden group">
                <div className="absolute inset-0 bg-slate-50 opacity-50 group-hover:opacity-30 transition-opacity" />
                <div className="relative z-10 space-y-12">
                   <div className="flex justify-between items-center">
                      <div className="w-16 h-16 bg-botanical-950 rounded-2xl flex items-center justify-center">
                         <Lock className="w-8 h-8 text-emerald-500" />
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secure Entry</span>
                   </div>
                   
                   <div className="space-y-4">
                      <div className="h-2 bg-slate-100 rounded-full w-3/4" />
                      <div className="h-2 bg-slate-100 rounded-full w-1/2" />
                   </div>

                   <div className="pt-24 text-center">
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Verification Required</p>
                      <div className="inline-flex items-center space-x-2 text-emerald-500">
                         <Globe className="w-5 h-5" />
                         <span className="text-[10px] font-black uppercase tracking-widest">Encrypted Connection</span>
                      </div>
                   </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-100/50 rounded-full pointer-events-none" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
