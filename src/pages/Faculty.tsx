import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Microscope, GraduationCap, Briefcase, ArrowRight, Filter, Search, Globe, Linkedin, Twitter, CheckCircle2, X, Zap, Play } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useLanguage } from '../contexts/LanguageContext';

import { Page } from '../components/Layout';
import { SectionLabel } from '../components/SectionLabel';

const FACULTY_MEMBERS = [
  { name: 'Marcus Thorne', role: 'Founder, Neobank Nigeria', tag: 'ENTREPRENEURS', sub: ['FINTECH', 'SCALING'], img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80' },
  { name: 'Zara El-Amin', role: 'Partner, Blue Ocean Capital', tag: 'INVESTORS', sub: ['M&A', 'GOVERNANCE'], img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' },
  { name: 'David Okafor', role: 'COO, Pan-African Logistics', tag: 'OPERATORS', sub: ['OPERATIONS', 'SUPPLY CHAIN'], img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80' },
  { name: 'Amara Diop', role: 'Former Minister of Innovation', tag: 'POLICY LEADERS', sub: ['PUBLIC POLICY', 'REGULATION'], img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80' },
  { name: 'Kofi Mensah', role: 'VC, Execution Capital', tag: 'INVESTORS', sub: ['Venture Capital', 'Emerging Markets'], img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
  { name: 'Dr. Elena Vance', role: 'Board Advisor, Fintech Group', tag: 'POLICY LEADERS', sub: ['REGULATION', 'STRATEGY'], img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' }
];

interface FacultyProps {
  onPageChange: (page: Page, id?: string) => void;
}

export const Faculty = ({ onPageChange }: FacultyProps) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const filteredFaculty = FACULTY_MEMBERS.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.sub.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel className="mb-8">The Global Leadership Faculty</SectionLabel>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8 uppercase">
              <span className="text-emerald-500 italic">Builders</span>, <br />
              Not Instructors.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              Our faculty are active founders, seasoned venture capitalists, and policy architects shaping the future of African commerce.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button 
                onClick={() => {
                  const grid = document.getElementById('faculty-grid');
                  if (grid) grid.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center space-x-3"
              >
                <span>Meet the Faculty</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  ].map((src, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm">
                      <img src={src} alt="Faculty" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">50+ Active Practitioners</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="Featured Faculty" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 to-transparent" />
              
              {/* Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-xl p-6 lg:p-8 rounded-3xl shadow-2xl border border-white/20">
                <p className="text-xs lg:text-sm text-slate-500 font-medium italic mb-6 leading-relaxed">
                  "At ABC, we don't teach from textbooks. We teach from the scars of building companies in high-velocity markets."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-black text-botanical-950 uppercase tracking-tight text-sm lg:text-base">Dr. Kwame Mensah</h4>
                    <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400 leading-tight">Founding Academic Director & Investor</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar (Static/Non-functional as requested) */}
      <section className="py-12 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 cursor-default">
          {['All Expertise', 'Entrepreneurship', 'Venture Capital', 'Finance', 'Tech', 'Strategy', 'Policy'].map((filter, i) => (
            <span 
              key={filter} 
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest select-none ${
                i === 0 ? 'bg-botanical-950 text-white' : 'bg-white border border-slate-200 text-slate-300'
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section id="faculty-grid" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-3xl">
              <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase mb-4">The Precision Network</h2>
              <p className="text-slate-500 font-medium leading-relaxed">
                {t('facultyDesc')}
              </p>
            </div>
            
            <div className="relative w-full lg:w-96 group">
              <input 
                type="text" 
                placeholder="Search by expertise or name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => !searchQuery && setIsSearching(false)}
                className="w-full pl-12 pr-12 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 rounded-full transition-colors"
                >
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((faculty, i) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={faculty.name} 
                    className="bg-white rounded-[40px] overflow-hidden border border-slate-100 group hover:shadow-2xl transition-all"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden">
                      <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" referrerPolicy="no-referrer" />
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[8px] font-black uppercase tracking-widest text-botanical-950">
                        {faculty.tag}
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-black text-botanical-950 mb-2 uppercase tracking-tight">{faculty.name}</h3>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-6 min-h-[2em]">{faculty.role}</p>
                      <div className="flex flex-wrap gap-2">
                        {faculty.sub.map(s => (
                          <span key={s} className="px-3 py-1 bg-slate-100 rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">{s}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full py-24 text-center">
                  <p className="text-slate-400 font-medium">No results found for "{searchQuery}"</p>
                  <button onClick={() => setSearchQuery('')} className="mt-4 text-emerald-500 font-black uppercase tracking-widest text-[10px] border-b border-emerald-500">View All Faculty</button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 text-white relative overflow-hidden">
        <AnimatedBackground intensity="medium" className="opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">Our Teaching <br /> Philosophy</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12 max-w-xl">
                {t('facultyPillars')}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Microscope, title: 'Simulation Labs', desc: 'Students work through real historical business crises, mentored by the faculty who actually lived through them.' },
                { icon: Users, title: '1-on-1 Mentorship', desc: 'Beyond the classroom, faculty members provide personalized guidance on student ventures and career pivots.' },
                { icon: Briefcase, title: 'Thought Leadership', desc: 'Faculty publish regular whitepapers on frontier market dynamics, exclusive to the ABC ecosystem.' },
                { icon: GraduationCap, title: 'Industry Experience', desc: 'Every instructor must currently hold an active operational role or board seat in their respective field.' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[40px] backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <item.icon className="w-10 h-10 text-emerald-500 mb-8" />
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Faculty Detail */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] shadow-2xl">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Elena Vance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-12 bg-gradient-to-t from-botanical-950/90 to-transparent w-full">
              <h3 className="text-3xl lg:text-4xl font-black text-white mb-2 uppercase tracking-tighter leading-tight">Elena Vance</h3>
              <p className="text-emerald-400 font-black uppercase tracking-widest text-[10px] lg:text-xs">Head of Emerging Markets at Apex Ventures</p>
            </div>
          </div>
          <div>
            <SectionLabel className="mb-6">Featured Industry Leader</SectionLabel>
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 mb-8 uppercase leading-tight">Mastering Venture Capital in African Markets</h2>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium mb-8">
              Learn how venture capital operates across emerging and volatile economies. This module explores deal structuring, capital deployment, and investment strategy through real-world African case studies and practitioner-led instruction.
            </p>
            
            <div className="bg-slate-50 p-8 rounded-3xl mb-12 border border-slate-100">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4 flex items-center">
                <Zap className="w-3 h-3 mr-2" />
                Apply What You Learn
              </h4>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Engage in the <span className="text-botanical-950 font-bold">Startup Fundraising Simulation</span>, where you raise capital, negotiate terms, and evaluate investor decisions in dynamic market conditions.
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {[
                'Ex-Partner at Goldman Sachs Emerging Markets',
                'Board Member for 4 Unicorn Startups',
                'Author of "The Frontier Playbook"'
              ].map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  </div>
                  <span className="text-botanical-950 font-black uppercase tracking-tight text-xs lg:text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onPageChange('programs')}
                className="w-full sm:w-auto bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center space-x-3"
              >
                <span>Explore Program</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onPageChange('simulation-labs')}
                className="w-full sm:w-auto bg-white border border-slate-200 text-botanical-950 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center space-x-3"
              >
                <span>Start Simulation</span>
                <Play className="w-3 h-3 fill-current" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Peer Insights */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase leading-tight">Faculty Insights</h2>
            <button 
              onClick={() => onPageChange('insights')}
              className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-emerald-600 hover:translate-x-2 transition-transform"
            >
              <span>Explore all insights</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'last-mile-logistics', author: 'David Okafor', title: 'Optimizing Last-Mile Logistics in Megacities', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
              { id: 'regulatory-sandbox', author: 'Amara Diop', title: 'Regulatory Sandbox: A Guide for Tech Founders', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80' },
              { id: 'exit-strategies', author: 'Zara El-Amin', title: 'Exit Strategies for African Tech Startups', img: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80' }
            ].map((article, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => onPageChange('insight-detail', article.id)}>
                <div className="aspect-video rounded-[40px] overflow-hidden mb-8 shadow-sm">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 block leading-tight">BY {article.author}</span>
                <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter leading-tight group-hover:text-emerald-500 transition-colors">{article.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
