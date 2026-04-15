import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, Share2, Linkedin, Twitter, Youtube, Mail, CheckCircle2, Loader2, ChevronDown, GraduationCap } from 'lucide-react';

export type Page = 
  | 'home' | 'insights' | 'programs' | 'admissions' | 'experience' | 'about'
  | 'faculty' | 'learning' | 'simulation-labs' | 'careers'
  | 'entrepreneurship' | 'venture-building' | 'digital-business' | 'innovation-leadership'
  | 'community' | 'partnerships' | 'contact'
  | 'privacy' | 'terms' | 'accreditation'
  | 'login-student' | 'login-faculty';

interface LayoutProps {
  children: React.ReactNode;
  activePage: Page;
  onPageChange: (page: Page) => void;
}

const Newsletter = () => {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative">
      <h6 className="text-[10px] font-black uppercase tracking-widest text-white mb-4">Stay Informed</h6>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6 leading-relaxed">
        Get insights, deadlines, and updates from ABC.
      </p>
      
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-[10px] font-black uppercase tracking-widest text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 transition-colors"
          required
        />
        <button 
          disabled={status === 'loading'}
          className="bg-emerald-500 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center space-x-2"
        >
          {status === 'loading' ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : (
            <span>Subscribe</span>
          )}
        </button>
      </form>

      {status === 'success' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 mt-4 bg-emerald-500 p-6 rounded-xl shadow-2xl z-20"
        >
          <div className="flex items-center space-x-3 mb-2">
            <CheckCircle2 className="w-5 h-5 text-white" />
            <h4 className="font-black text-white text-sm">You're Subscribed</h4>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-white/90 leading-relaxed">
            You will receive insights, updates, and opportunities from ABC.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-4 text-[8px] font-black uppercase tracking-widest text-white/60 hover:text-white"
          >
            Dismiss
          </button>
        </motion.div>
      )}
    </div>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children, activePage, onPageChange }) => {
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  const navLinks = [
    { name: 'About', page: 'about' },
    { name: 'Programs', page: 'programs' },
    { name: 'Learning', page: 'learning' },
    { name: 'Simulation Labs', page: 'simulation-labs' },
    { name: 'Admissions', page: 'admissions' },
    { name: 'Faculty', page: 'faculty' },
    { name: 'Community', page: 'community' },
  ];

  const moreLinks = [
    { name: 'Contact', page: 'contact' },
    { name: 'Insights', page: 'insights' },
    { name: 'Partnerships', page: 'partnerships' },
  ];

  const languages = ['EN', 'FR', 'ZH', 'AR', 'ES'];

  return (
    <div className="min-h-screen font-sans bg-white">
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl py-3 border-b border-slate-100">
        <div className="max-w-[1600px] mx-auto px-6 flex justify-between items-center">
          {/* LEFT: LOGO */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onPageChange('home')}
          >
            <div className="w-10 h-10 bg-botanical-950 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors shadow-lg shadow-botanical-950/10">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-botanical-950 leading-none">ABC</span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-emerald-500 leading-none mt-1">Sovereign</span>
            </div>
          </div>
          
          {/* CENTER: NAV LINKS */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((item) => (
              <button 
                key={item.name} 
                onClick={() => onPageChange(item.page as Page)}
                className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all rounded-lg relative ${
                  activePage === item.page
                    ? 'text-emerald-500 bg-emerald-50' 
                    : 'text-slate-500 hover:text-botanical-950 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            {/* MORE DROPDOWN */}
            <div className="relative" onMouseEnter={() => setIsMoreOpen(true)} onMouseLeave={() => setIsMoreOpen(false)}>
              <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-botanical-950 hover:bg-slate-50 rounded-lg flex items-center space-x-1">
                <span>More</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white border border-slate-100 rounded-xl shadow-2xl shadow-slate-200/50 p-2 z-50"
                  >
                    {moreLinks.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => {
                          onPageChange(item.page as Page);
                          setIsMoreOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg transition-colors"
                      >
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center space-x-6">
            {/* LANGUAGE SWITCHER */}
            <div className="relative" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
              <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-botanical-950 transition-colors py-2 px-3 rounded-lg hover:bg-slate-50">
                <Globe className="w-4 h-4" />
                <span>{currentLang}</span>
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-1 w-24 bg-white border border-slate-100 rounded-xl shadow-2xl shadow-slate-200/50 p-2 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setCurrentLang(lang);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-center px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-colors ${
                          currentLang === lang ? 'text-emerald-500 bg-emerald-50' : 'text-slate-500 hover:text-emerald-500 hover:bg-slate-50'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => onPageChange('login-student')}
              className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-botanical-950 transition-colors"
            >
              Login
            </button>
            <button 
              onClick={() => onPageChange('admissions')}
              className="bg-emerald-500 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-botanical-950 relative overflow-hidden">
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)] opacity-10" />
        
        {/* TOP CTA SECTION */}
        <div className="relative z-10 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-12">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter text-center md:text-left">
              Start Learning <br /> by Building
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => onPageChange('admissions')}
                className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20"
              >
                Apply Now
              </button>
              <button 
                onClick={() => onPageChange('programs')}
                className="bg-white/10 text-white border border-white/10 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all active:scale-95"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
            {/* COLUMN 1: BRAND */}
            <div className="lg:col-span-4">
              <div 
                className="text-3xl font-black tracking-tighter text-white mb-8 cursor-pointer"
                onClick={() => onPageChange('home')}
              >
                ABC
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-10 leading-loose max-w-xs">
                A virtual-first African business institution building the next generation of entrepreneurs, leaders, and innovators.
              </p>
              <div className="flex space-x-6">
                <Linkedin className="w-5 h-5 text-slate-500 cursor-pointer hover:text-emerald-500 transition-colors" />
                <Twitter className="w-5 h-5 text-slate-500 cursor-pointer hover:text-emerald-500 transition-colors" />
                <Youtube className="w-5 h-5 text-slate-500 cursor-pointer hover:text-emerald-500 transition-colors" />
              </div>
            </div>

            {/* COLUMN 2: ABOUT ABC */}
            <div className="lg:col-span-2">
              <h6 className="text-[10px] font-black uppercase tracking-widest text-white mb-8">About ABC</h6>
              <ul className="space-y-4">
                {[
                  { name: 'About', page: 'about' },
                  { name: 'Faculty', page: 'faculty' },
                  { name: 'Learning', page: 'learning' },
                  { name: 'Simulation Labs', page: 'simulation-labs' },
                  { name: 'Careers', page: 'careers' }
                ].map(item => (
                  <li key={item.name}>
                    <button 
                      onClick={() => onPageChange(item.page as Page)}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: PROGRAMS */}
            <div className="lg:col-span-2">
              <h6 className="text-[10px] font-black uppercase tracking-widest text-white mb-8">Programs</h6>
              <ul className="space-y-4">
                {[
                  { name: 'All Programs', page: 'programs' },
                  { name: 'Entrepreneurship', page: 'entrepreneurship' },
                  { name: 'Venture Building', page: 'venture-building' },
                  { name: 'Digital Business', page: 'digital-business' },
                  { name: 'Innovation Leadership', page: 'innovation-leadership' }
                ].map(item => (
                  <li key={item.name}>
                    <button 
                      onClick={() => onPageChange(item.page as Page)}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4: RESOURCES */}
            <div className="lg:col-span-2">
              <h6 className="text-[10px] font-black uppercase tracking-widest text-white mb-8">Resources</h6>
              <ul className="space-y-4">
                {[
                  { name: 'Insights', page: 'insights' },
                  { name: 'Community', page: 'community' },
                  { name: 'Partnerships', page: 'partnerships' },
                  { name: 'Contact', page: 'contact' }
                ].map(item => (
                  <li key={item.name}>
                    <button 
                      onClick={() => onPageChange(item.page as Page)}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-emerald-500 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER SECTION */}
            <div className="lg:col-span-2">
              <Newsletter />
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="relative z-10 border-t border-white/5 py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
              © 2026 AFRICA BUSINESS COLLEGE
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'Privacy Policy', page: 'privacy' },
                { name: 'Terms of Service', page: 'terms' },
                { name: 'Accreditation', page: 'accreditation' }
              ].map(item => (
                <button 
                  key={item.name}
                  onClick={() => onPageChange(item.page as Page)}
                  className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-emerald-500 transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
