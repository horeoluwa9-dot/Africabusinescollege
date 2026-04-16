import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  Monitor,
  Users,
  Zap,
  Shield,
  BookOpen
} from 'lucide-react';
import { PROGRAMS, DEADLINES } from '../constants';
import { ProgramDetail } from '../types';

import { Page } from '../components/Layout';

interface ProgramsProps {
  onPageChange: (page: Page) => void;
}

const Hero = ({ onPageChange }: ProgramsProps) => {
  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Precision Luminescence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8">
            Explore Our <br />
            <span className="text-emerald-500">Programs</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-lg mb-12">
            Architecture of the next generation of African business leaders. Our programs blend institutional stability with technological velocity to prepare you for the global stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => onPageChange('admissions')}
              className="bg-botanical-950 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-xl"
            >
              View All Paths
            </button>
            <button className="bg-slate-100 text-botanical-950 px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all active:scale-95">
              Download Brochure
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08759dfeb3f?auto=format&fit=crop&w=800&q=80" 
              alt="Campus" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FilterBar = () => {
  const categories = ['All', 'Entrepreneurship', 'Finance', 'Tech', 'Leadership', 'Strategy'];
  const [active, setActive] = useState('All');

  return (
    <div className="bg-surface-low border-y border-slate-100 py-6">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center space-x-8 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Filter by:</span>
        <div className="flex space-x-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                active === cat ? 'bg-botanical-950 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200 hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedProgram = ({ onPageChange }: ProgramsProps) => {
  const featured = PROGRAMS.find(p => p.tag === 'FEATURED');
  if (!featured) return null;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl transition-all">
          <div className="p-12 md:w-1/2 flex flex-col justify-between">
            <div>
              <div className="bg-emerald-500 text-white px-3 py-1 text-[8px] font-black uppercase tracking-widest rounded mb-8 inline-block">
                FEATURED PROGRAM
              </div>
              <h2 className="text-4xl font-black text-botanical-950 mb-6 group-hover:text-emerald-500 transition-colors">{featured.title}</h2>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">{featured.excerpt}</p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">DURATION</div>
                  <div className="text-sm font-black text-botanical-950">{featured.duration}</div>
                </div>
                <div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">FORMAT</div>
                  <div className="text-sm font-black text-botanical-950">{featured.format}</div>
                </div>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onPageChange('application');
              }}
              className="bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl mt-12 hover:bg-emerald-500 transition-all self-start"
            >
              Apply for Fellowship
            </button>
          </div>
          <div className="md:w-1/2 relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Innovation" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-500/10 mix-blend-multiply" />
          </div>
        </div>

        <div className="lg:col-span-4 bg-surface-low rounded-3xl border border-slate-100 p-12 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-8">
              <Users className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-black text-botanical-950 mb-4">Cohort Experience</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
              Join a curated network of 40 global leaders per intake for radical peer-to-peer learning.
            </p>
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              ].map((src, i) => (
                <img 
                  key={i}
                  src={src} 
                  alt="User" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-[10px] font-black text-white">
                +37
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramGrid = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PROGRAMS.filter(p => p.tag !== 'FEATURED').map(program => (
        <div key={program.id} className="bg-white p-10 rounded-3xl border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all group cursor-pointer">
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-emerald-500" />
            </div>
            <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase">{program.category}</span>
          </div>
          <h3 className="text-2xl font-black text-botanical-950 mb-4 group-hover:text-emerald-500 transition-colors">{program.title}</h3>
          <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">{program.excerpt}</p>
          
          <div className="flex items-center justify-between pt-8 border-t border-slate-50">
            <div className="flex space-x-6">
              <div>
                <div className="text-[7px] font-black uppercase tracking-widest text-slate-400 mb-1">{program.duration}</div>
              </div>
              <div>
                <div className="text-[7px] font-black uppercase tracking-widest text-slate-400 mb-1">{program.format}</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
          </div>
        </div>
      ))}
      
      <div className="bg-botanical-950 p-10 rounded-3xl flex flex-col justify-between group cursor-pointer overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
          <BookOpen className="w-32 h-32 text-white" />
        </div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-12">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-black text-white mb-6">Custom Programs</h3>
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-12">
            We design bespoke learning journeys for corporations and government institutions.
          </p>
        </div>
        <button className="bg-white text-botanical-950 px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 hover:text-white transition-all self-start relative z-10">
          Contact Partnerships
        </button>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-12">
            The ABC Learning <br />
            <span className="text-emerald-500">Ecosystem</span>
          </h2>
          <div className="space-y-12">
            {[
              { icon: Shield, title: 'Simulation Labs', desc: 'Real-world sandboxes where you test strategies against algorithmic market stressors.' },
              { icon: Users, title: 'Network Alchemy', desc: 'Access to the Alumni Vault containing Investors, CEOs, and policy makers across the continent.' },
              { icon: Monitor, title: 'Digital Literacy', desc: 'Every program includes mandatory AI and Blockchain fluency modules.' }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-black text-botanical-950 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1551288049-bbda4833effb?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522071823991-b1ae5e6a3058?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1518186239751-2467ef4f5ca1?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 text-center min-w-[200px]">
            <div className="text-4xl font-black text-botanical-950 mb-1">98%</div>
            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">ALUMNI CAREER GROWTH</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-black text-center text-botanical-950 tracking-tighter mb-20">Program Comparison</h2>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">PROGRAM NAME</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">DURATION</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">LEVEL</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">FOCUS</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">FORMAT</th>
            </tr>
          </thead>
          <tbody>
            {PROGRAMS.slice(0, 4).map(p => (
              <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="py-8 font-black text-botanical-950">{p.title}</td>
                <td className="py-8 text-sm text-slate-500 font-medium">{p.duration}</td>
                <td className="py-8 text-sm text-slate-500 font-medium">{p.level}</td>
                <td className="py-8 text-sm text-slate-500 font-medium">{p.focus}</td>
                <td className="py-8 text-sm text-slate-500 font-medium">{p.format}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const Deadlines = ({ onPageChange }: ProgramsProps) => {
  return (
    <section className="bg-botanical-950 py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black text-white tracking-tighter mb-12">Upcoming Deadlines</h2>
          <div className="space-y-6">
            {DEADLINES.map(d => (
              <div key={d.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex justify-between items-center group hover:bg-white/10 transition-all">
                <div>
                  <div className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mb-2">{d.date}</div>
                  <h4 className="text-xl font-black text-white">{d.title}</h4>
                </div>
                <button 
                  onClick={() => onPageChange('application')}
                  className="bg-emerald-500 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-all"
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -left-12 text-emerald-500 opacity-20">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
              <path d="M0 0h100v100H0z" />
            </svg>
          </div>
          <blockquote className="relative z-10">
            <p className="text-3xl font-black text-white leading-tight mb-12">
              "ABC didn't just teach me business; they taught me how to architect a vision that survives the complexities of the African market. It's the most intensive and rewarding experience of my career."
            </p>
            <div className="flex items-center space-x-6">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                alt="Kofi" 
                className="w-16 h-16 rounded-full border-2 border-emerald-500 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="font-black text-white text-lg">Kofi Mensah</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">CEO, Zenith Tech Hub | Class of '22</div>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export const Programs = ({ onPageChange }: ProgramsProps) => {
  return (
    <>
      <Hero onPageChange={onPageChange} />
      <FilterBar />
      <FeaturedProgram onPageChange={onPageChange} />
      <ProgramGrid />
      <Ecosystem />
      <Comparison />
      <Deadlines onPageChange={onPageChange} />
    </>
  );
};
