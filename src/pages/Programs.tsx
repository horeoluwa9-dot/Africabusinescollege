import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight,
  Monitor,
  Users,
  Zap,
  Shield,
  BookOpen,
  Clock,
  Layers
} from 'lucide-react';
import { PROGRAMS, DEADLINES } from '../constants';
import { ProgramDetail } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { downloadMockPdf } from '../lib/downloadPdf';

import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionLabel } from '../components/SectionLabel';
import { useToast } from '../contexts/ToastContext';

interface ProgramsProps {
  onPageChange: (page: Page, id?: string) => void;
}

const Hero = ({ onPageChange }: ProgramsProps) => {
  const { isLoggedIn, hasImage } = useAuth();
  const { showToast } = useToast();

  const handleDownload = () => {
    downloadMockPdf('ABC_Institutional_Brochure');
    showToast('Brochure Downloaded Successfully');
  };

  return (
    <section className="relative min-h-[85vh] flex items-center pt-6 pb-32 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)] opacity-5" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative z-10 pt-4"
          >
            <SectionLabel dark className="mb-8">Built for Precision</SectionLabel>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.85] text-botanical-950 mb-8 uppercase">
              Explore Our <br />
              <span className="text-emerald-500 italic">Programs</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-lg mb-12">
              We design learning experiences that merge structured thinking with execution speed, preparing African leaders for a rapidly evolving global economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => {
                  const grid = document.getElementById('all-programs');
                  if (grid) grid.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl shadow-botanical-950/20"
              >
                View All Programs
              </button>
              <button 
                onClick={handleDownload}
                className="bg-slate-100 text-botanical-950 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all active:scale-95"
              >
                Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-[600px] aspect-square rounded-[48px] overflow-hidden border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative group">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" 
                alt="Campus" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full -z-10 blur-[100px] opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FilterBarProps {
  active: string;
  setActive: (cat: string) => void;
}

const FilterBar = ({ active, setActive }: FilterBarProps) => {
  const categories = ['All', 'Entrepreneurship', 'Finance', 'Tech', 'Leadership', 'Strategy'];

  return (
    <div className="bg-surface-low border-y border-slate-100 py-10" id="all-programs">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col space-y-8">
          <SectionLabel dark className="mb-4">Filter by Category</SectionLabel>
          <div className="flex flex-wrap gap-3 overflow-x-auto no-scrollbar pb-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap shadow-sm border ${
                  active === cat 
                    ? 'bg-botanical-950 text-white border-botanical-950 shadow-botanical-950/20' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-emerald-500 hover:text-botanical-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
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
        <div 
          onClick={() => onPageChange('program-detail', featured.id)}
          className="lg:col-span-8 bg-white rounded-3xl border border-slate-100 overflow-hidden flex flex-col md:flex-row group cursor-pointer hover:shadow-2xl transition-all"
        >
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

interface ProgramGridProps extends ProgramsProps {
  activeCategory: string;
}

const ProgramGrid = ({ onPageChange, activeCategory }: ProgramGridProps) => {
  const filteredPrograms = PROGRAMS.filter(p => 
    p.tag !== 'FEATURED' && (activeCategory === 'All' || p.category === activeCategory)
  );

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {filteredPrograms.length > 0 ? (
        filteredPrograms.map(program => (
          <motion.div 
            key={program.id} 
            whileHover={{ y: -10 }}
            onClick={() => onPageChange('program-detail', program.id)}
            className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full relative"
          >
            {/* Top Section: Visual Layer */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={program.image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/80 via-botanical-950/20 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-6 left-6 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                {program.level}
              </div>
              
              {/* Accent Border (Visible on hover) */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </div>

            {/* Content Section */}
            <div className="p-10 flex flex-col flex-grow">
              <div className="mb-6">
                <span className="text-[8px] font-black tracking-widest text-emerald-500 uppercase block mb-2">{program.category}</span>
                <h3 className="text-lg font-black text-botanical-950 uppercase tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                  {program.title}
                </h3>
              </div>
              
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                {program.excerpt}
              </p>

              {/* Meta Row */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100 mt-auto">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{program.duration}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layers className="w-4 h-4 text-emerald-500" />
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[0]}</span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[1]}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Section: CTAs */}
              <div className="flex items-center justify-between mt-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onPageChange('program-detail', program.id);
                  }}
                  className="bg-botanical-950 text-white px-8 py-4 text-[9px] font-black uppercase tracking-widest rounded-xl group-hover:bg-emerald-500 transition-all"
                >
                  View Course
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onPageChange('program-detail', program.id);
                  }}
                  className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
                >
                  Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <div className="col-span-full py-24 text-center">
          <p className="text-slate-400 font-medium">No programs found in this category.</p>
        </div>
      )}
      
      <div className="bg-botanical-950 rounded-[32px] p-10 flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-[400px]">
        <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-110 transition-transform">
          <BookOpen className="w-32 h-32 text-white" />
        </div>
        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-12">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Custom Programs</h3>
          <p className="text-slate-400 text-sm font-medium leading-relaxed mb-12">
            We design bespoke learning journeys for corporations and government institutions.
          </p>
        </div>
        <button className="bg-white text-botanical-950 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 hover:text-white transition-all self-start relative z-10">
          Contact Partnerships
        </button>
      </div>
    </section>
  );
};

const WhatYouWillGain = () => {
  const gains = [
    'Practical business skills',
    'Real-world execution experience',
    'Business frameworks',
    'Strategic thinking',
    'Portfolio of work'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-black text-botanical-950 mb-16 uppercase tracking-tight">What You Will Gain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gains.map((gain, i) => (
            <div key={i} className="flex items-center space-x-6 p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-emerald-500 transition-colors">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-black text-botanical-950 tracking-tight">{gain}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CohortModel = () => {
  const stats = [
    { label: 'Students per cohort', value: '30' },
    { label: 'Countries represented', value: '12' },
    { label: 'Completion rate', value: '95%' },
    { label: 'Avg satisfaction', value: '4.8' }
  ];

  return (
    <section className="py-32 bg-botanical-950 text-white overflow-hidden relative">
      <AnimatedBackground intensity="low" className="opacity-20" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] -z-10" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase leading-tight">Learn With a <br /><span className="text-emerald-500">Cohort</span></h2>
          <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
            At ABC, you learn alongside a carefully selected group of peers from across Africa. The cohort model creates accountability, collaboration, and lifelong connections.
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 mb-12">
            {[
              'Peer learning & collaboration',
              'Shared accountability structures',
              'Structured progress milestones',
              'Cross-border networking'
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                <span className="text-sm font-black uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-all">
              <div className="text-5xl font-black text-emerald-500 mb-2">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Ecosystem = () => {
  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-12 uppercase leading-tight">
            The ABC Learning <br />
            <span className="text-emerald-500 italic">Ecosystem</span>
          </h2>
          <div className="space-y-12">
            {[
              { icon: Shield, title: 'Simulation Labs', desc: 'Immersive environments where you test strategies against dynamic, real-world market conditions.' },
              { icon: Users, title: 'Network Access', desc: 'Connect with a curated alumni network of investors, founders, executives, and policy leaders across Africa.' },
              { icon: Monitor, title: 'Digital Literacy', desc: 'Selected modules across programs introduce AI, blockchain, and emerging technologies relevant to modern business.' }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6 group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0 group-hover:border-emerald-500 border border-transparent transition-all">
                  <item.icon className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-black text-botanical-950 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-4 pt-12">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Eco" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
      <h2 className="text-4xl font-black text-center text-botanical-950 tracking-tighter mb-20 uppercase">Program Comparison</h2>
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">PROGRAM NAME</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">DURATION</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">LEVEL</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">FOCUS AREA</th>
              <th className="py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">FORMAT</th>
            </tr>
          </thead>
          <tbody>
            {PROGRAMS.map(p => (
              <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <td className="py-8 font-black text-botanical-950 uppercase">{p.title}</td>
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
    <section className="bg-botanical-950 py-32 relative overflow-hidden">
      <AnimatedBackground intensity="medium" className="opacity-30" />
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
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <div className="pt-24 bg-white overflow-x-hidden">
      <Hero onPageChange={onPageChange} />
      <FeaturedProgram onPageChange={onPageChange} />
      <FilterBar active={activeCategory} setActive={setActiveCategory} />
      <ProgramGrid onPageChange={onPageChange} activeCategory={activeCategory} />
      <WhatYouWillGain />
      <CohortModel />
      <Ecosystem />
      <Comparison />
      <Deadlines onPageChange={onPageChange} />
    </div>
  );
};
