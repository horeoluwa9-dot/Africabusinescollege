/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Download, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight,
  Globe,
  Share2,
  ArrowUpRight
} from 'lucide-react';
import { ARTICLES, DEEP_DIVES, REPORTS, CONTRIBUTORS } from './constants';
import { Article, DeepDive, Report, Contributor } from './types';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-botanical-950">ABC</div>
        
        <div className="hidden lg:flex items-center space-x-10">
          {['About', 'Programs', 'Experience', 'Labs', 'Faculty', 'Admissions'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                item === 'Experience' ? 'text-emerald-500' : 'text-slate-500 hover:text-botanical-950'
              }`}
            >
              {item}
              {item === 'Experience' && <div className="h-0.5 w-full bg-emerald-500 mt-1" />}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-8">
          <button className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-botanical-950 transition-colors">Login</button>
          <button className="bg-emerald-500 text-white px-8 py-3 text-xs font-black uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20">
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
      >
        <div className="lg:col-span-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px w-12 bg-emerald-500" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">Insights & Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950">
            Architecting the <br />
            <span className="text-emerald-500 luminescence-glow">African Future</span>
          </h1>
        </div>
        <div className="lg:col-span-4 lg:pb-4">
          <p className="text-lg text-slate-500 leading-relaxed font-medium">
            The authoritative journal for African sovereign leadership. Critical research and operational playbooks for the continent's next economic decade.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-16 relative aspect-[21/9] w-full overflow-hidden rounded-2xl group cursor-pointer"
      >
        <img 
          src="https://picsum.photos/seed/sovereign/1920/1080?grayscale" 
          alt="Featured" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full lg:w-3/4">
          <div className="flex items-center space-x-4 mb-6">
            <span className="bg-emerald-500 text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded">Special Report</span>
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">12 Min Read</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight group-hover:text-emerald-500 transition-colors">
            The Sovereign Alpha: How African Institutional Capital is Redefining Global Risk.
          </h2>
          <div className="flex items-center space-x-4">
            <img 
              src="https://picsum.photos/seed/elias/100/100" 
              alt="Dr. Elias Ndlovu" 
              className="w-12 h-12 rounded-full border-2 border-emerald-500/30 object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-white font-bold text-sm">Dr. Elias Ndlovu</p>
              <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Dean of Research</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const FilterNav = () => {
  const categories = ['All Insights', 'Entrepreneurship', 'Capital Markets', 'Public Policy', 'Digital Economy', 'Governance'];
  const [active, setActive] = useState('All Insights');

  return (
    <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center py-6 overflow-x-auto no-scrollbar">
        <div className="flex space-x-10 whitespace-nowrap">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-bold uppercase tracking-widest transition-all relative ${
                active === cat ? 'text-emerald-500' : 'text-slate-400 hover:text-botanical-950'
              }`}
            >
              {cat}
              {active === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute -bottom-6 left-0 w-full h-0.5 bg-emerald-500"
                />
              )}
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 ml-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Filter By:</span>
          <button className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <Menu className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ArticleCard = ({ article }: { article: Article, key?: string }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group cursor-pointer"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-8">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="flex items-center space-x-3 mb-4">
      <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">{article.category}</span>
      <div className="w-1 h-1 bg-slate-200 rounded-full" />
      <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{article.readTime}</span>
    </div>
    <h3 className="text-2xl font-black text-botanical-950 mb-4 leading-tight group-hover:text-emerald-500 transition-colors">
      {article.title}
    </h3>
    <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
      {article.excerpt}
    </p>
    <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
      <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{article.author}</span>
      <button className="text-slate-300 hover:text-emerald-500 transition-colors">
        <Bookmark className="w-4 h-4" />
      </button>
    </div>
  </motion.article>
);

const DeepDiveCard = ({ dive }: { dive: DeepDive, key?: string }) => (
  <div className="min-w-[400px] bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
    <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest mb-6 block">{dive.partInfo}</span>
    <h4 className="text-2xl font-black text-botanical-950 mb-6 leading-tight group-hover:text-emerald-500 transition-colors">
      {dive.title}
    </h4>
    <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
      {dive.excerpt}
    </p>
    <div className="flex items-center justify-between group-hover:translate-x-1 transition-transform">
      <span className="text-botanical-950 font-black text-[10px] uppercase tracking-widest">Access Analysis</span>
      <ArrowRight className="w-4 h-4 text-emerald-500" />
    </div>
  </div>
);

const ResearchReport = ({ report }: { report: Report, key?: string }) => (
  <div className="bg-white border border-slate-100 p-10 rounded-2xl flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-10 hover:border-emerald-500/30 transition-all group cursor-pointer">
    <div className="w-36 h-48 bg-botanical-950 flex-shrink-0 relative overflow-hidden flex items-center justify-center p-6 text-center rounded-lg">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
      <div className="relative z-10">
        <div className="text-[8px] font-black tracking-widest text-emerald-500 mb-2 uppercase">{report.subtitle}</div>
        <div className="text-[10px] font-bold leading-tight text-white tracking-tighter uppercase">
          {report.title.split(' ').slice(0, 2).join(' ')} <br />
          {report.title.split(' ').slice(2).join(' ')}
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center h-full">
      <h4 className="text-xl font-black text-botanical-950 mb-4">{report.title}</h4>
      <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{report.excerpt}</p>
      <button className="flex items-center space-x-3 text-emerald-500 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
        <Download className="w-4 h-4" />
        <span>Download Executive PDF ({report.downloadSize})</span>
      </button>
    </div>
  </div>
);

const ContributorCard = ({ contributor }: { contributor: Contributor, key?: string }) => (
  <div className="text-center group">
    <div className="relative w-40 h-40 mx-auto mb-8">
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img 
        src={contributor.image} 
        alt={contributor.name} 
        className="relative w-40 h-40 rounded-full mx-auto grayscale group-hover:grayscale-0 transition-all duration-700 object-cover border-2 border-slate-100 group-hover:border-emerald-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <h5 className="font-black text-white text-lg tracking-tight">{contributor.name}</h5>
    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black mt-2">{contributor.role}</p>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      
      <main>
        <Hero />

        <FilterNav />

        {/* Article Grid */}
        <section className="px-6 md:px-12 py-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {ARTICLES.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Deep Dives */}
        <section className="bg-surface-low py-32 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
            <div>
              <span className="text-emerald-500 text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">Premium Series Content</span>
              <h2 className="text-5xl md:text-6xl font-black text-botanical-950 tracking-tighter">The Deep Dives</h2>
            </div>
            <div className="flex space-x-4">
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all group">
                <ChevronLeft className="w-6 h-6 group-active:scale-90" />
              </button>
              <button className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:border-emerald-500 hover:text-emerald-500 transition-all group">
                <ChevronRight className="w-6 h-6 group-active:scale-90" />
              </button>
            </div>
          </div>
          <div className="flex space-x-8 px-6 md:px-12 max-w-7xl mx-auto overflow-x-auto no-scrollbar pb-12">
            {DEEP_DIVES.map(dive => (
              <DeepDiveCard key={dive.id} dive={dive} />
            ))}
          </div>
        </section>

        {/* Research Section */}
        <section className="px-6 md:px-12 py-32 max-w-7xl mx-auto">
          <h2 className="text-4xl font-black mb-20 text-center tracking-tighter text-botanical-950">Institutional Research & Whitepapers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {REPORTS.map(report => (
              <ResearchReport key={report.id} report={report} />
            ))}
          </div>
        </section>

        {/* Leading Voices */}
        <section className="bg-botanical-950 py-32">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex justify-between items-center mb-20 border-b border-white/10 pb-10">
              <h2 className="text-4xl font-black text-white tracking-tighter">Leading Voices</h2>
              <a href="#" className="text-emerald-500 text-[10px] font-black tracking-[0.2em] uppercase border-b-2 border-emerald-500/30 hover:border-emerald-500 transition-colors pb-1">
                Editorial Board
              </a>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              {CONTRIBUTORS.map(contributor => (
                <ContributorCard key={contributor.id} contributor={contributor} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 md:px-12 py-32">
          <div className="max-w-4xl mx-auto bg-surface-low border border-slate-100 p-12 md:p-24 text-center rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-emerald-500" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-botanical-950">The Weekly Sovereign</h2>
            <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-medium">
              Join 25,000+ institutional leaders receiving our curated intelligence on African strategy every Sunday morning.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your institutional email"
                className="flex-grow bg-white border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 px-6 py-4 rounded-xl outline-none transition-all font-medium"
              />
              <button className="bg-botanical-950 text-white font-black px-10 py-4 rounded-xl hover:bg-emerald-500 transition-all uppercase tracking-widest text-[10px] shadow-xl active:scale-95">
                Subscribe
              </button>
            </form>
            <p className="text-[9px] text-slate-400 mt-8 uppercase tracking-[0.3em] font-black">
              Encrypted. Privacy Protected. No Commercial SPAM.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-48 px-6 md:px-12 text-center bg-white border-t border-slate-100 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-[25vw] font-black tracking-tighter leading-none">VERIDIAN</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter text-botanical-950">Shape the Sovereign Future.</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10">
              <button className="bg-emerald-500 text-white px-16 py-6 font-black rounded-xl shadow-2xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all text-[10px] uppercase tracking-widest">
                Explore Programs
              </button>
              <button className="text-botanical-950 font-black border-b-2 border-slate-200 hover:border-emerald-500 transition-colors pb-1 text-[10px] uppercase tracking-widest">
                Partner with the Lab
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-low pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-24">
          <div className="lg:col-span-2">
            <div className="text-2xl font-black tracking-tighter text-botanical-950 mb-8">ABC</div>
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 max-w-xs leading-loose">
              Precision Luminescence. Architecting the future of African industry through sovereign leadership and rigorous academic excellence.
            </p>
          </div>
          
          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-botanical-950 mb-8">Academic</h6>
            <ul className="space-y-4">
              {['About ABC', 'Programs', 'Admissions'].map(item => (
                <li key={item}><a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-botanical-950 mb-8">Resources</h6>
            <ul className="space-y-4">
              {['Simulation Labs', 'Faculty', 'Insights'].map(item => (
                <li key={item}><a href="#" className={`text-[10px] font-black uppercase tracking-widest transition-colors ${item === 'Insights' ? 'text-emerald-500' : 'text-slate-400 hover:text-emerald-500'}`}>{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-botanical-950 mb-8">Global</h6>
            <ul className="space-y-4">
              {['Community', 'Partnerships', 'Careers'].map(item => (
                <li key={item}><a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="text-[10px] font-black uppercase tracking-widest text-botanical-950 mb-8">Social</h6>
            <div className="flex space-x-6">
              <Globe className="w-5 h-5 text-slate-400 cursor-pointer hover:text-emerald-500 transition-colors" />
              <Share2 className="w-5 h-5 text-slate-400 cursor-pointer hover:text-emerald-500 transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-12 border-t border-slate-200 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            © 2024 Africa Business College. Precision Luminescence.
          </p>
        </div>
      </footer>
    </div>
  );
}
