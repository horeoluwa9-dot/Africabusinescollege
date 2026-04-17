import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Quote, Mail, Linkedin, Twitter } from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface ExperienceProps {
  onPageChange: (page: Page) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onPageChange }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-botanical-950 overflow-hidden">
        <AnimatedBackground intensity="high" className="opacity-40" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
             <button 
              onClick={() => onPageChange('about')}
              className="flex items-center space-x-2 text-emerald-500 mb-12 hover:text-emerald-400 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Back to About</span>
            </button>
            
            <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full mb-8 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 italic">Institutional Voice</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
              The <span className="text-emerald-500 italic">Director's</span> <br /> Vision
            </h1>
            
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
              "We are building the institution Africa has always needed—one that meets the continent's builders exactly where they are."
            </p>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-30"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white">Scroll to Read</span>
          <div className="w-px h-12 bg-white/50" />
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="relative">
          <Quote className="absolute -top-16 -left-16 w-32 h-32 text-slate-50 opacity-[0.05] rotate-12" />
          
          <div className="prose prose-xl prose-slate max-w-none">
            <h2 className="text-4xl font-black text-botanical-950 uppercase tracking-tight mb-12 leading-tight">
              A Letter from Professor James Adesina
            </h2>
            
            <div className="space-y-8 text-xl text-slate-600 leading-relaxed font-medium">
              <p>
                Dear Students, Alumni, Partners and Stakeholders,
              </p>
              
              <p>
                As we move through 2026, I extend my warmest greetings and deepest appreciation for your continued commitment to Africa Business College. Your belief in this institution, and in the idea that Africa's entrepreneurs and leaders deserve world-class, execution-focused education, remains central to everything we do.
              </p>
              
              <p>
                When we co-founded ABC, we weren't looking to create just another academic mirror of Western business schools. We saw a continent brimming with raw talent, but struggling with a gap between that talent and the formal structures of global business. 
              </p>

              <p className="text-3xl font-black text-botanical-950 border-l-4 border-emerald-500 pl-10 my-16 italic py-4">
                "We are not building a traditional business school. We are building a laboratory for the future of the African economy."
              </p>

              <p>
                Africa's markets are unique—they are fast, they are fragmented, and they require a specific kind of grit combined with high-level systems thinking. Our pedagogy at ABC is designed to instill exactly that. Through our simulation labs and practitioner-led sessions, we bridge the gap between academic theory and the grit required to build in Lagos, Nairobi, Johannesburg, and Cairo.
              </p>

              <p>
                To our students: you are the architects of the next decade. Do not just study the world as it is; build the world as it should be. Our faculty and resources are here to support that construction.
              </p>

              <p>
                To our partners: thank you for your collaboration. By integrating with our ecosystem, you are gaining access to the most dynamic talent pool on the continent.
              </p>
              
              <p>
                We remain purpose-built for the digital era—leveraging technology not just for delivery, but for community-driven accountability and Pan-African connection. That is our promise, and we renew it every single day.
              </p>

              <p className="pt-12 text-botanical-950 font-black">
                Sincerely,
                <br />
                <span className="text-3xl uppercase tracking-tighter mt-4 block">Professor James Adesina</span>
                <span className="text-[10px] text-emerald-500 uppercase tracking-widest mt-2 block">Academic Director & Co-Founder</span>
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-24 pt-12 border-t border-slate-100 flex items-center space-x-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Connect with the Director</span>
          <div className="flex items-center space-x-6">
             <Linkedin className="w-5 h-5 text-slate-400 hover:text-emerald-500 cursor-pointer transition-colors" />
             <Twitter className="w-5 h-5 text-slate-400 hover:text-emerald-500 cursor-pointer transition-colors" />
             <Mail className="w-5 h-5 text-slate-400 hover:text-emerald-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </section>

      {/* Related Actions */}
      <section className="bg-slate-50 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h3 className="text-3xl font-black text-botanical-950 uppercase tracking-tighter mb-4">
              Explore Our Philosophy
            </h3>
            <p className="text-slate-500 font-medium">Learn more about the ABC Architecture of Execution.</p>
          </div>
          <div className="flex gap-6">
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl"
            >
              Our Programs
            </button>
            <button 
              onClick={() => onPageChange('faculty')}
              className="bg-white text-botanical-950 border border-slate-200 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all"
            >
              Meet the Faculty
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
