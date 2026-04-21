
import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Monitor, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  Settings,
  Search,
  Bell,
  Play,
  ArrowRight,
  MoreHorizontal,
  Plus,
  Mail,
  LogOut,
  Home as HomeIcon,
  Zap,
  Lock,
  BarChart3,
  Wrench,
  Globe,
  Rocket,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import { SimulationCarousel } from '../../components/SimulationCarousel';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';

interface DashboardProps {
  onPageChange: (page: Page, id?: string) => void;
}

export const StudentDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();
  const { user, logout, isLoggedIn, isPaid } = useAuth();
  const { showToast } = useToast();
  const [activeView, setActiveView] = React.useState('os');

  useEffect(() => {
    if (!isLoggedIn) {
      onPageChange('home');
    }
  }, [isLoggedIn, onPageChange]);

  const handleLogout = () => {
    logout();
    onPageChange('home');
  };

  const sidebarItems = [
    { id: 'os', icon: LayoutDashboard, label: 'Learning OS' },
    { id: 'curriculum', icon: Play, label: 'Curriculum' },
    { id: 'simulation', icon: Monitor, label: 'Simulations' },
    { id: 'network', icon: Users, label: 'Community' },
    { id: 'performance', icon: BarChart3, label: 'Performance' },
    { id: 'preferences', icon: Settings, label: 'Settings' },
  ];

  const modules = [
    { title: 'Opportunity Identification', progress: 100, status: 'complete' },
    { title: 'Business Model Design', progress: 45, status: 'active' },
    { title: 'Market Validation', progress: 0, status: 'locked' },
    { title: 'Fundraising Strategy', progress: 0, status: 'locked' },
    { title: 'Scaling Operations', progress: 0, status: 'locked' },
  ];

  const simulations = [
    { title: 'Startup Survival', icon: Rocket, status: 'available', level: 'Master' },
    { title: 'Investor Pitch AI', icon: Zap, status: 'available', level: 'Expert' },
    { title: 'Pan-African Scale', icon: Globe, status: isPaid ? 'available' : 'locked', level: 'Elite' },
  ];

  const performanceMetrics = [
    { label: 'Decision Score', value: '88/100', trend: '+4%' },
    { label: 'Simulation Rank', value: 'Top 5%', trend: 'Steady' },
    { label: 'Strategic Rigor', value: 'A-', trend: 'Improving' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FBFBFB] font-sans text-slate-900">
      {/* Sidebar - Hidden on mobile */}
      <aside className="hidden md:flex w-[260px] bg-white border-r border-slate-100 p-4 flex-col shrink-0">
        <div className="px-4 py-6 mb-4">
          <div 
            className="cursor-pointer group flex items-center space-x-3 mb-8"
            onClick={() => onPageChange('home')}
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden relative border border-slate-100 shadow-sm">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M20 8L36 18L20 28L4 18L20 8Z" fill="#0a2540" />
                  <path d="M10 21V28C10 28 15 32 20 32C25 32 30 28 30 28V21" stroke="#0a2540" strokeWidth="2.5" />
                  <path d="M32 12L36 8M36 8H31M36 8V13" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 36C12 32 28 32 36 36" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <span className="text-sm font-black tracking-tighter text-botanical-950 uppercase">Africa Business College</span>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl mb-6">
            <img 
              src={user?.avatarUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"} 
              alt="Profile" 
              className="w-8 h-8 rounded-full object-cover border border-slate-200"
            />
            <div className="flex-grow min-w-0">
              <div className="text-[10px] font-black text-botanical-950 truncate">{user?.name || 'Kofi Mensah'}</div>
              <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">Pro Member</div>
            </div>
          </div>
        </div>

        <nav className="flex-grow space-y-0.5">
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-4 mb-4">Workspace</div>
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
                activeView === item.id 
                  ? 'bg-slate-50 text-botanical-950 font-black' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-4 h-4 ${activeView === item.id ? 'text-emerald-500' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-50">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden sticky top-0 z-50 bg-white border-b border-slate-100 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-botanical-950 rounded-lg flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" className="w-6 h-6">
              <path d="M20 8L36 18L20 28L4 18L20 8Z" fill="#ffffff" />
            </svg>
          </div>
          <span className="text-xs font-black uppercase tracking-tighter text-botanical-950">ABC Learning OS</span>
        </div>
        <button onClick={() => showToast('Profile settings opening...')} className="w-8 h-8 rounded-full overflow-hidden border border-slate-100">
           <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0 overflow-y-auto pb-24 md:pb-0">
        {activeView === 'os' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-botanical-950 tracking-tighter mb-2">
                  {t('student.welcome')}, {user?.name?.split(' ')[0] || 'Kofi'}.
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{user?.program || 'Entrepreneurship Program'}</span>
                  <span className="w-1 h-1 bg-slate-200 rounded-full hidden sm:block" />
                  <div className="flex items-center space-x-2">
                     <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[24%]" />
                    </div>
                    <span className="text-[10px] font-black text-emerald-500">24% Complete</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto">
                <button onClick={() => showToast('No new notifications')} className="p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm text-slate-400 hover:text-botanical-950 transition-all">
                  <Bell className="w-5 h-5" />
                </button>
                <button onClick={() => showToast('Events panel opening...')} className="flex-grow md:flex-none bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all">
                  Cohort Event
                </button>
              </div>
            </div>

            {/* SECTION 2: CURRENT STATUS / COHORT NOTIFICATION */}
            <div className="bg-botanical-950 rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden mb-12 group cursor-pointer transition-all hover:bg-botanical-900" onClick={() => showToast('Opening session details...')}>
               <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                <Zap className="w-32 md:w-48 h-32 md:h-48" />
              </div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-4 w-full">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Next Cohort Session</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none text-white">Cohort starts in 3 days.</h3>
                  <p className="text-slate-400 text-sm font-medium">Topic: Advanced Unit Economics & Execution Market Entry</p>
                </div>
                <button onClick={(e) => { e.stopPropagation(); showToast('Added to schedule'); }} className="w-full md:w-auto bg-white text-botanical-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-emerald-500 hover:text-white transition-all">
                  <span>Add to Schedule</span>
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* LEFT COLUMN: LEARNING & MODULES */}
              <div className="lg:col-span-8 space-y-12">
                
                {/* SECTION 3: CONTINUE LEARNING (MAIN ACTION) */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('student.focus')}</h4>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group flex flex-col md:flex-row items-center gap-10" onClick={() => setActiveView('curriculum')}>
                    <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center shrink-0 border border-emerald-100">
                      <Play className="w-10 h-10 text-emerald-500 fill-current" />
                    </div>
                    <div className="flex-grow space-y-4 text-center md:text-left">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Module</div>
                      <h3 className="text-3xl font-black text-botanical-950 tracking-tight leading-tight">Business Model Design: Institutional Advantage</h3>
                      <div className="flex items-center justify-center md:justify-start space-x-4">
                        <span className="text-xs font-medium text-slate-500">Unit 2 / 5</span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full" />
                        <span className="text-xs font-medium text-slate-500">45 mins remaining</span>
                      </div>
                    </div>
                    <button onClick={() => onPageChange('full-course')} className="bg-botanical-950 text-white px-10 py-6 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center space-x-4 shadow-2xl shadow-botanical-950/20 active:scale-95">
                      <span>Continue Program</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* SECTION 4: PROGRAM STRUCTURE (MODULES) - Shortcut */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('student.path')}</h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {modules.slice(0, 3).map((module, i) => (
                      <div key={i} className={`p-6 bg-white border rounded-3xl flex items-center justify-between transition-all group ${
                        module.status === 'locked' ? 'opacity-50 border-slate-50' : 'border-slate-100 hover:border-emerald-200 cursor-pointer'
                      }`}>
                        <div className="flex items-center space-x-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                            module.status === 'complete' ? 'bg-emerald-50 text-emerald-500' : 
                            module.status === 'active' ? 'bg-indigo-50 text-indigo-500' : 'bg-slate-50 text-slate-400'
                          }`}>
                            {module.status === 'complete' ? <ShieldCheck className="w-6 h-6" /> : 
                             module.status === 'active' ? <Zap className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                          </div>
                          <div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mb-1">Module 0{i+1}</div>
                            <h5 className="text-lg font-black text-botanical-950">{module.title}</h5>
                          </div>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all" onClick={() => onPageChange('full-course')}>
                          {module.status === 'complete' ? 'Review' : 'Continue'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: METRICS & TOOLS */}
              <div className="lg:col-span-4 space-y-12">
                {/* Performance Metrics Summary */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t('student.analytics')}</h4>
                  <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-8">
                    {performanceMetrics.slice(0, 3).map((met, i) => (
                      <div key={i} className="flex justify-between items-end border-b border-slate-50 pb-6 last:border-0 last:pb-0">
                        <div className="space-y-1">
                          <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{met.label}</div>
                          <div className="text-3xl font-black text-botanical-950 tracking-tighter">{met.value}</div>
                        </div>
                        <div className={`text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full ${
                          met.trend.startsWith('+') || met.trend === 'Improving' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'
                        }`}>
                          {met.trend}
                        </div>
                      </div>
                    ))}
                    <button onClick={() => setActiveView('performance')} className="w-full py-5 bg-slate-50 text-botanical-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all flex items-center justify-center space-x-3">
                      <BarChart3 className="w-4 h-4" />
                      <span>View Detailed Dossier</span>
                    </button>
                  </div>
                </div>

                {/* Community Snapshot */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t('student.community')}</h4>
                  <div className="bg-emerald-50/50 border border-emerald-100 rounded-[32px] p-8">
                    <div className="flex items-center space-x-4 mb-8">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                      <h5 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Cohort 01 • Active Chat</h5>
                    </div>
                    <div className="space-y-6">
                      {[
                        { user: 'Chidi E.', msg: 'Has anyone integrated the new financial model?', time: '2m ago' },
                        { user: 'Sade A.', msg: 'The Simulation 2 results were mind-blowing.', time: '5m ago' },
                      ].map((chat, i) => (
                        <div key={i} className="bg-white/50 p-4 rounded-xl border border-white/50 shadow-sm">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] font-black text-botanical-950">{chat.user}</span>
                            <span className="text-[8px] font-black uppercase text-slate-400">{chat.time}</span>
                          </div>
                          <p className="text-[10px] font-medium text-slate-600 leading-relaxed">{chat.msg}</p>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setActiveView('network')} className="w-full mt-8 bg-botanical-950 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">
                      Open Channel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : activeView === 'curriculum' ? (
          <section className="px-12 pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Curriculum</h2>
            <div className="grid grid-cols-1 gap-6 max-w-4xl">
              {modules.map((module, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950 font-black">
                      0{i+1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight mb-1">{module.title}</h3>
                      <p className="text-sm text-slate-500">Progress: {module.progress}%</p>
                    </div>
                  </div>
                  <button onClick={() => showToast('Connecting to interactive module...')} className="bg-botanical-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500">
                    Enter Module
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : activeView === 'simulation' ? (
          <section className="px-12 pt-12">
             <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-black text-botanical-950 tracking-tighter uppercase">Simulation Lab</h2>
                <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Full Access Active</span>
                </div>
             </div>
             
             <SimulationCarousel 
               items={simulations.map(sim => ({
                 id: sim.title.toLowerCase().replace(' ', '-'),
                 name: sim.title,
                 desc: `High-fidelity ${sim.level} environment designed for strategic stress testing within the ${sim.title} framework.`,
                 image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80", // Placeholder
                 icon: sim.icon,
                 status: sim.status === 'available' ? 'Available' : 'Locked',
                 difficulty: sim.level,
                 focus: ['Strategy', 'Execution', 'Crisis Management']
               }))} 
               onSelect={(id) => onPageChange('simulation-demo', id)} 
             />
          </section>
        ) : activeView === 'tools' ? (
          <section className="px-12 pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-12 uppercase">Instrument Studio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {[
                { title: 'Financial Engine', desc: 'Construct complex capitalization tables and unit economic models.', icon: BarChart3 },
                { title: 'Market Pulse', desc: 'Real-time aggregate data from Pan-African markets.', icon: Globe },
                { title: 'Strategic Canvas', desc: 'Visualize and iterate on business model hypotheses.', icon: Wrench },
                { title: 'Diligence Bot', desc: 'AI-powered stress tester for investment readiness.', icon: Zap }
              ].map((tool, i) => (
                <div key={i} className="bg-white p-10 rounded-[40px] border border-slate-100 hover:border-emerald-500 group transition-all">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-all">
                    <tool.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{tool.title}</h3>
                  <p className="text-sm text-slate-500 mb-8 font-medium leading-relaxed">{tool.desc}</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                    <span>Open Tool</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : activeView === 'network' ? (
          <section className="px-12 pt-12 h-full flex flex-col">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Cohort Network</h2>
            <div className="flex-grow grid grid-cols-12 gap-8 pb-12">
              <div className="col-span-8 flex flex-col space-y-6">
                <div className="bg-slate-50 p-6 rounded-3xl flex-grow overflow-y-auto space-y-4">
                   {[
                     { user: 'Amara K.', msg: 'Incredible insights in the growth simulator today.', time: '10:42 AM' },
                     { user: 'Execution Faculty', msg: 'Reminder: Live session begins in 1 hour.', time: '11:00 AM' },
                     { user: 'Jean-Luc M.', msg: 'Has anyone cracked the pricing model for Francophone markets?', time: '11:15 AM' }
                   ].map((chat, i) => (
                     <div key={i} className="bg-white p-6 rounded-[24px] shadow-sm border border-slate-100 max-w-[80%]">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[10px] font-black tracking-tight text-emerald-500">{chat.user}</span>
                           <span className="text-[8px] font-black text-slate-400">{chat.time}</span>
                        </div>
                        <p className="text-sm font-medium text-slate-600 leading-relaxed">{chat.msg}</p>
                     </div>
                   ))}
                </div>
                <div className="flex space-x-4">
                   <input className="flex-grow bg-white border border-slate-100 rounded-2xl px-6 py-4 text-sm focus:border-emerald-500 focus:outline-none shadow-sm" placeholder="Message your cohort..." />
                   <button onClick={() => showToast('Message sent to cohort')} className="bg-botanical-950 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-botanical-950/20">Send</button>
                </div>
              </div>
              <div className="col-span-4 bg-white border border-slate-100 rounded-[40px] p-10">
                 <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8">Scholars Online</h4>
                 <div className="space-y-6">
                    {['Amara K.', 'Jean-Luc M.', 'Sade A.', 'Chidi E.', 'Zarah F.'].map( scholar => (
                      <div key={scholar} className="flex items-center justify-between">
                         <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400">
                               {scholar[0]}
                            </div>
                            <span className="text-sm font-black text-botanical-950">{scholar}</span>
                         </div>
                         <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </section>
        ) : activeView === 'performance' ? (
          <section className="px-12 pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-12 uppercase">Performance Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {performanceMetrics.map((met, i) => (
                 <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{met.label}</div>
                    <div className="text-4xl font-black text-botanical-950 tracking-tighter mb-4">{met.value}</div>
                    <div className={`text-[8px] font-black uppercase tracking-widest inline-flex px-3 py-1 rounded-full ${
                      met.trend.startsWith('+') || met.trend === 'Improving' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'
                    }`}>
                      {met.trend}
                    </div>
                 </div>
               ))}
            </div>
            <div className="bg-botanical-950 rounded-[48px] p-12 text-white overflow-hidden relative min-h-[400px] flex items-end">
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_60%)]" />
               <div className="absolute top-12 right-12 text-right">
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Institutional Ranking</div>
                  <div className="text-7xl font-black tracking-tighter">#12 <span className="text-3xl text-slate-500">/ 450</span></div>
               </div>
               <div className="relative z-10 max-w-xl">
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-6 leading-tight">Advanced Strategic Readiness</h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed mb-8">Your simulation performance indicates high adaptability in crisis management but moderate risk exposure in portfolio scaling. Focus on Unit 4 (Risk Mitigation) to optimize your profile.</p>
                  <button onClick={() => showToast('Downloading secure dossier...')} className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20">Download Full Record</button>
               </div>
            </div>
          </section>
        ) : (
          <section className="px-12 pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Preferences</h2>
            <div className="max-w-2xl space-y-12">
               <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Account Access</h4>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                        <span className="text-sm font-black text-botanical-950 uppercase tracking-tight">Two-Factor Authentication</span>
                        <div className="w-12 h-6 bg-slate-300 rounded-full p-1 cursor-pointer">
                           <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                     </div>
                     <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl">
                        <span className="text-sm font-black text-botanical-950 uppercase tracking-tight">Institutional Encryption</span>
                        <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end">
                           <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                     </div>
                  </div>
               </div>
               <div className="space-y-6">
                  <button onClick={handleLogout} className="flex items-center space-x-3 text-red-500 text-[10px] font-black uppercase tracking-widest hover:text-red-600 transition-colors">
                     <Lock className="w-4 h-4" />
                     <span>Terminate Session</span>
                  </button>
               </div>
            </div>
          </section>
        )}
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 flex justify-around p-4 z-50">
        {sidebarItems.slice(0, 5).map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveView(item.id)}
            className={`flex flex-col items-center space-y-1 transition-all ${
              activeView === item.id ? 'text-emerald-500' : 'text-slate-400'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};
