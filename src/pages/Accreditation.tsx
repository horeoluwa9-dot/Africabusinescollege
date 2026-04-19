
import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Globe, CheckCircle2, Star } from 'lucide-react';
import { Page } from '../components/Layout';

interface AccreditationProps {
  onPageChange: (page: Page) => void;
}

export const Accreditation: React.FC<AccreditationProps> = ({ onPageChange }) => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <Award className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Global Standards</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter uppercase mb-12 leading-none">
            Accreditation <span className="text-emerald-500">& Quality</span>
          </h1>

          <div className="prose prose-slate prose-lg max-w-none">
            <section className="mb-16">
              <h2 className="text-3xl font-black text-botanical-950 uppercase tracking-tight mb-8">Architecting Excellence</h2>
              <p className="text-slate-600 leading-relaxed font-medium">
                Africa Business College (ABC) is committed to setting a new benchmark for business education on the continent. Our accreditation strategy reflects our mission to bridge the gap between continental relevance and global academic rigor.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-slate-50 rounded-[32px] border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <Globe className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black text-botanical-950 uppercase mb-4">Global Network</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  As a GNAM Affiliate member, we maintain academic standards verified by a network of 32 leading global business schools, ensuring our graduates are recognized from Lagos to London.
                </p>
              </div>
              <div className="p-8 bg-botanical-950 text-white rounded-[32px] border border-white/5 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Star className="w-16 h-16 text-emerald-500" />
                 </div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-black uppercase mb-4">Quality Assurance</h3>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">
                  Our internal Academic Quality Committee (AQC) conducts bi-annual reviews of our simulation algorithms and faculty research to ensure alignment with rapidly evolving market dynamics.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-6">Our Institutional Affiliations</h2>
              <div className="space-y-6">
                {[
                  { name: 'Pan-African Business Education Alliance', role: 'Founding Member' },
                  { name: 'Global Network for Advanced Management (GNAM)', role: 'Affiliate Partner' },
                  { name: 'African Private Equity and Venture Capital Association (AVCA)', role: 'Strategic Academic Partner' },
                  { name: 'European Foundation for Management Development (EFMD)', role: 'Institutional Quality Member' }
                ].map((aff, i) => (
                  <div key={i} className="flex items-center justify-between p-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-all rounded-xl">
                    <span className="font-black text-botanical-950 uppercase text-xs tracking-tight">{aff.name}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 whitespace-nowrap ml-4">{aff.role}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="p-12 bg-emerald-50 rounded-[40px] text-center border border-emerald-100">
               <div className="max-w-xl mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-8" />
                <h3 className="text-2xl font-black text-botanical-950 uppercase mb-4">Continuous Evolution</h3>
                <p className="text-slate-600 font-medium leading-relaxed">
                  We view accreditation not as a static destination, but as a commitment to continuous institutional evolution. Our standards are designed for a future where African business leadership is the global benchmark.
                </p>
               </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
