import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ArrowRight, Download, Mail, ArrowLeft, ArrowRight as ArrowRightIcon, Linkedin, Twitter } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { SectionLabel } from '../components/SectionLabel';
import { downloadMockPdf } from '../lib/downloadPdf';

import { Page } from '../components/Layout';

interface InsightsProps {
  onPageChange: (page: Page, id?: string) => void;
}

export const Insights = ({ onPageChange }: InsightsProps) => {
  const [notification, setNotification] = React.useState<string | null>(null);
  const [activeFilter, setActiveFilter] = React.useState('All Insights');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const insightsData = [
    { 
      id: 'urban-legacies',
      cat: 'Governance', 
      time: '8 MIN READ', 
      title: 'Restructuring Urban Legacies: The Rise of Pan-African Smart Cities.', 
      desc: 'How decentralization and localized energy grids are transforming the blueprint of the African metropolis.',
      author: 'AMARA OKAFOR',
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'afcfta-playbook',
      cat: 'Capital Markets', 
      time: '15 MIN READ', 
      title: 'The AfCFTA Playbook: Navigating Cross-Border Liquidity in 2026.', 
      desc: 'Analyzing the regulatory shifts enabling seamless capital flow across the continental free trade zone.',
      author: 'KOFI MENSAH',
      img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'execution-leadership',
      cat: 'Entrepreneurship', 
      time: '12 MIN READ', 
      title: 'Execution Leadership: Beyond the Quarterly Earnings Cycle.', 
      desc: 'Why the most successful African CEOs are prioritizing long-term social utility over short-term returns.',
      author: 'FATIMA DIOP',
      img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'last-mile-logistics',
      cat: 'Digital Economy', 
      time: '10 MIN READ', 
      title: 'Optimizing Last-Mile Logistics in Megacities.', 
      desc: 'Leveraging data-driven routing and micro-warehousing to overcome the friction of African urban congestion.',
      author: 'DAVID OKAFOR',
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'regulatory-sandbox',
      cat: 'Public Policy', 
      time: '14 MIN READ', 
      title: 'Regulatory Sandbox: A Guide for Tech Founders.', 
      desc: 'How to navigate the evolving regulatory landscape and collaborate with governments to scale safely.',
      author: 'AMARA DIOP',
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'exit-strategies',
      cat: 'Capital Markets', 
      time: '18 MIN READ', 
      title: 'Exit Strategies for African Tech Startups.', 
      desc: 'An analysis of recent M&A activity and the path to secondary markets for Pan-African founders.',
      author: 'ZARA EL-AMIN',
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'simulation-lab',
      cat: 'Entrepreneurship', 
      time: '5 MIN READ', 
      title: 'ABC Launches New Simulation Lab for Market Expansion', 
      desc: 'A look into how ABC is using new immersive simulations to train founders for Pan-African growth.',
      author: 'ABC PRESS',
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'fintech-founders',
      cat: 'Digital Economy', 
      time: '7 MIN READ', 
      title: 'Cohort 2026: The Rise of Pan-African Fintech Founders', 
      desc: 'Highlighting the next wave of financial innovators emerging from our latest cohort.',
      author: 'ABC PRESS',
      img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80"
    },
    { 
      id: 'adesina-vc',
      cat: 'Capital Markets', 
      time: '10 MIN READ', 
      title: 'Professor Adesina on the Future of African Venture Capital', 
      desc: 'A critical analysis of capital allocation models shifting towards local LPs in the decade ahead.',
      author: 'ABC PRESS',
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const filteredInsights = activeFilter === 'All Insights' 
    ? insightsData 
    : insightsData.filter(insight => insight.cat === activeFilter);

  return (
    <div className="pt-24 min-h-screen relative">
      {/* Toast Notification */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] pointer-events-none">
        <div className={`bg-botanical-950 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-white/10 transition-all duration-300 ${notification ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{notification}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <SectionLabel className="mb-8" dark>Insights & Intelligence</SectionLabel>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-12 uppercase">
                Architecting the <br />
                <span className="text-emerald-500 italic">African Future</span>
              </h1>
            </div>
          </div>

          {/* Featured Report Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => onPageChange('insight-detail', 'execution-alpha')}
            className="mt-8 relative rounded-[40px] overflow-hidden min-h-[500px] lg:min-h-[600px] group cursor-pointer shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80" 
              alt="Featured Report" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/40 to-transparent" />
            
            {/* Vertically centered content area with padding */}
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-20">
              <div className="max-w-4xl">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest text-shadow-sm">Special Report</span>
                  <span className="text-white/60 text-[8px] font-black uppercase tracking-widest">12 MIN READ</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-[0.95] mb-10 drop-shadow-lg">
                  The Execution Alpha: How African Institutional Capital is Redefining Global Risk.
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-200 border-2 border-white/20 shadow-sm">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Dr. Elias Ndlovu" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase tracking-tight text-base">Dr. Elias Ndlovu</h4>
                    <p className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mt-1">Academic Director of Research</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 px-6 md:px-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="flex flex-wrap gap-4">
            {['All Insights', 'Entrepreneurship', 'Capital Markets', 'Public Policy', 'Digital Economy', 'Governance'].map((filter, i) => (
              <button 
                key={filter} 
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeFilter === filter ? 'bg-emerald-500 text-white' : 'bg-white border border-slate-200 text-slate-400 hover:border-emerald-500 hover:text-emerald-500'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Filtered By</span>
            <Filter className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredInsights.map((insight, i) => (
              <motion.div 
                key={insight.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => onPageChange('insight-detail', insight.id)}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-[32px] overflow-hidden mb-8 shadow-sm">
                  <img src={insight.img} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest">{insight.cat}</span>
                  <span className="text-slate-300 text-[8px] font-black uppercase tracking-widest">•</span>
                  <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest">{insight.time}</span>
                </div>
                <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter leading-tight mb-4 group-hover:text-emerald-500 transition-colors">
                  {insight.title}
                </h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">
                  {insight.desc}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">BY {insight.author}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dives Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4 block">PREMIUM SERIES CONTENT</span>
              <h2 className="text-5xl font-black tracking-tighter text-botanical-950 uppercase">The Deep Dives</h2>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => showNotification('Previous series analysis')}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={() => showNotification('Next series analysis')}
                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-emerald-500 hover:text-emerald-500 transition-all"
              >
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'mining-future', part: 'PART 1 OF 3 • MINING', title: 'Mining the Future: Strategic Minerals and African Agency.', desc: 'An exhaustive investigation into the global race for lithium and cobalt, and the policy frameworks ensuring local value retention.' },
              { id: 'agritech-revolution', part: 'PART 2 OF 4 • AGRITECH', title: "Agritech Revolution: Securing the Continent's Food Supply.", desc: 'Examining the intersection of satellite imaging, micro-finance, and small-scale farming in East Africa.' },
              { id: 'vc-maturity', part: 'PART 3 OF 6 • CAPITAL', title: 'Venture Capital Maturity: From Hype to High-Yield.', desc: 'A data-driven look at exit strategies and IPO readiness for African unicorns in the next 36 months.' }
            ].map((dive, i) => (
              <div 
                key={i} 
                onClick={() => onPageChange('insight-detail', dive.id)}
                className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 flex flex-col justify-between group cursor-pointer hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <span className="text-emerald-500 text-[8px] font-black uppercase tracking-widest mb-6 block">{dive.part}</span>
                  <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter leading-tight mb-6 group-hover:text-emerald-500 transition-colors">
                    {dive.title}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">
                    {dive.desc}
                  </p>
                </div>
                <button className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-botanical-950 group-hover:text-emerald-500 transition-colors">
                  <span>Access Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Research & Whitepapers */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter text-botanical-950 uppercase">Institutional Research & Whitepapers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: 'outlook-report', title: '2026 Africa Economic Outlook Report', desc: 'Comprehensive analysis of macroeconomic trends across 54 nations, focusing on debt sustainability and industrial growth.', color: 'bg-botanical-950' },
              { id: 'logistics-whitepaper', title: 'The Digital Logistics Whitepaper', desc: 'Mapping the technological infrastructure required to fulfill the promise of the continental free trade area.', color: 'bg-emerald-900' }
            ].map((paper, i) => (
              <div 
                key={i} 
                className="bg-slate-50 p-12 rounded-[40px] flex items-center space-x-12 group cursor-pointer hover:bg-white border border-transparent hover:border-slate-100 transition-all shadow-sm hover:shadow-xl"
                onClick={() => {
                  downloadMockPdf(paper.title);
                  showNotification('Brochure downloaded successfully');
                }}
              >
                <div className={`${paper.color} w-32 h-44 rounded-lg shadow-2xl shrink-0 flex flex-col justify-end p-4 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Download className="w-12 h-12 text-white" />
                  </div>
                  <div className="w-8 h-1 bg-emerald-500 mb-2" />
                  <span className="text-[6px] font-black text-white uppercase tracking-widest leading-tight">Institutional Report</span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-4 group-hover:text-emerald-500 transition-colors">{paper.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-6">{paper.desc}</p>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      showNotification('Downloading professional report...');
                    }}
                    className="flex items-center space-x-2 text-[8px] font-black uppercase tracking-widest text-emerald-600"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Executive PDF (4.2 MB)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leading Voices */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 text-white relative overflow-hidden">
        <AnimatedBackground intensity="low" className="opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-center mb-20">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Leading Voices</h2>
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">EDITORIAL BOARD</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { name: 'Dr. Olowu Ade', role: 'POLICY LEAD', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80' },
              { name: 'Zara Ibrahim', role: 'MARKET ANALYST', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
              { name: 'Joel Tsegaye', role: 'SENIOR FELLOW', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
              { name: 'Nia Mbeki', role: 'VENTURE PARTNER', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' }
            ].map((voice, i) => (
              <div key={i} className="text-center group">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white/5 group-hover:border-emerald-500 transition-all duration-500">
                  <img src={voice.img} alt={voice.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2">{voice.name}</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{voice.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Weekly Execution */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-[60px] p-12 md:p-24 text-center">
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">The Weekly Execution</h2>
          <p className="text-xl text-slate-500 font-medium mb-12 max-w-2xl mx-auto">
            Join 25,000+ institutional leaders receiving our curated intelligence on African strategy every Sunday morning.
          </p>
          <form 
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              showNotification('Subscription successful. Welcome to The Weekly Execution.');
            }}
          >
            <input 
              type="email" 
              placeholder="Enter your institutional email" 
              required
              className="flex-1 bg-white border border-slate-200 rounded-xl px-6 py-4 text-botanical-950 focus:outline-none focus:border-emerald-500 transition-colors"
            />
            <button 
              type="submit"
              className="bg-botanical-950 text-white px-10 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-6 text-[8px] font-black uppercase tracking-widest text-slate-400">ENCRYPTED. PRIVACY PROTECTED. NO COMMERCIAL SPAM.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 bg-white text-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
            <span className="text-[20vw] font-black uppercase tracking-tighter">VERIDIAN</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-botanical-950 mb-12 uppercase leading-[0.9] relative z-10">
            Shape the <br /> Execution Future.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-emerald-500 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all shadow-2xl shadow-emerald-500/20"
            >
              Explore Programs
            </button>
            <button 
              onClick={() => onPageChange('partnerships')}
              className="bg-white border border-slate-200 text-botanical-950 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all"
            >
              Partner with the Lab
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
