import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Users, Building2, Globe, ArrowRight, Shield, Zap, Target, BookOpen } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface WhoShouldApplyProps {
  onPageChange: (page: Page) => void;
}

const WhoShouldApply: React.FC<WhoShouldApplyProps> = ({ onPageChange }) => {
  const personas = [
    {
      icon: Rocket,
      title: "Visionary Entrepreneurs",
      desc: "Founders building enterprise-grade solutions for African infrastructure, commerce, and technology.",
      qualities: ["Resilience", "Scale Intent", "Market Awareness"]
    },
    {
      icon: Building2,
      title: "Corporate Intrapreneurs",
      desc: "Leaders within established institutions tasked with driving internal innovation and digital shift.",
      qualities: ["Political IQ", "Operational Rigor", "Delta Vision"]
    },
    {
      icon: Globe,
      title: "Public Sector Architects",
      desc: "Policy makers and government officials focused on crafting institutional frameworks for economic growth.",
      qualities: ["Policy Insight", "Collaborative DNA", "Impact Focus"]
    },
    {
      icon: Users,
      title: "Scale-up Professionals",
      desc: "Ambitious managers seeking to master the specific frictions of African market execution.",
      qualities: ["Execution Bias", "Strategic Depth", "Peer Leadership"]
    }
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-32 bg-botanical-950 relative overflow-hidden">
        <AnimatedBackground intensity="low" className="opacity-20" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <SectionLabel className="mb-8 justify-center" dark>Candidate Profile</SectionLabel>
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-12 uppercase leading-[0.8]">
             The New <br /> <span className="text-emerald-500 italic">Vanguard.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            ABC is not for everyone. We seek high-potential practitioners committed to the serious work of African institution building.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {personas.map((p, i) => (
             <div key={i} className="bg-slate-50 p-12 rounded-[48px] border border-slate-100 hover:shadow-2xl transition-all group overflow-hidden relative">
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                    <p.icon className="w-64 h-64 text-botanical-950" />
                </div>
                <div className="relative z-10 h-full flex flex-col items-start">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <p.icon className="w-8 h-8" />
                   </div>
                   <h3 className="text-3xl font-black text-botanical-950 uppercase mb-6 tracking-tighter leading-tight">{p.title}</h3>
                   <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-sm">{p.desc}</p>
                   <div className="flex flex-wrap gap-3 mt-auto">
                      {p.qualities.map(q => (
                         <span key={q} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                            {q}
                         </span>
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <SectionLabel className="mb-8">Institutional Alignment</SectionLabel>
               <h2 className="text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-tight">The Admissions <br /> Invariant.</h2>
               <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                  Our selection process is designed to filter for obsession over curiosity. We look for individuals who are already in the arena, facing the friction of real-world commerce.
               </p>
               <div className="space-y-6">
                  {[
                     { icon: Target, title: "Impact Delta", text: "What is the measurable change you intend to drive in your market?" },
                     { icon: Shield, title: "Integrity Factor", text: "Do your values align with the institutional standards of ABC?" },
                     { icon: Zap, title: "Scale Bias", text: "Are you building for a neighborhood or for the entire continent?" }
                  ].map((item, i) => (
                     <div key={i} className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                           <item.icon className="w-6 h-6 text-emerald-500" />
                        </div>
                        <div>
                           <h4 className="text-lg font-black text-botanical-950 uppercase mb-2 tracking-tight">{item.title}</h4>
                           <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.text}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className="relative">
               <div className="bg-botanical-950 rounded-[48px] p-16 text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
                  <div className="relative z-10">
                     <h3 className="text-3xl font-black mb-12 uppercase tracking-tighter">Readiness Audit</h3>
                     <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                           <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                           </div>
                           <span className="font-black text-sm uppercase tracking-widest text-slate-300">Minimum 3 Years Management Experience</span>
                        </div>
                        <div className="flex items-center space-x-4">
                           <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                           </div>
                           <span className="font-black text-sm uppercase tracking-widest text-slate-300">Proven Operational Track Record</span>
                        </div>
                        <div className="flex items-center space-x-4">
                           <div className="w-6 h-6 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                           </div>
                           <span className="font-black text-sm uppercase tracking-widest text-slate-300">High-Fidelity Communication Skills</span>
                        </div>
                     </div>
                     <button 
                        onClick={() => onPageChange('application')}
                        className="w-full bg-white text-botanical-950 py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl mt-12"
                     >
                        Confirm Readiness & Apply
                     </button>
                  </div>
               </div>
            </div>
        </div>
      </section>

      <section className="py-24 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <SectionLabel className="mb-8 justify-center">Final Thought</SectionLabel>
            <h2 className="text-5xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-tight">Ready to join the <br /> <span className="text-emerald-500 italic">Serious Guard?</span></h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={() => onPageChange('application')}
                  className="bg-botanical-950 text-white px-12 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => onPageChange('contact' as Page)}
                  className="bg-white border border-slate-200 text-botanical-950 px-12 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all font-mono"
                >
                  Request Consultation
                </button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default WhoShouldApply;
