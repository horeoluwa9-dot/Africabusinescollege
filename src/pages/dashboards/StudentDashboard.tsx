
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Monitor, 
  Users, 
  FileText, 
  Calendar, 
  MessageSquare, 
  MessageCircle,
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
  Award,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import { SimulationCarousel } from '../../components/SimulationCarousel';
import { ArrowUpRight } from 'lucide-react';
import { useToast } from '../../contexts/ToastContext';
import CommunityInterface from '../community/CommunityInterface';

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
    { id: 'cohort', icon: Calendar, label: 'Cohort' },
    { id: 'performance', icon: BarChart3, label: 'Performance' },
    { id: 'notifications', icon: Bell, label: 'Notifications' },
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
    { label: 'Completion Rate', value: '24%', trend: 'On Track', detail: '8/32 Modules' },
    { label: 'Simulation Score', value: '88/100', trend: 'Top 5%', detail: 'Expert Level' },
    { label: 'Decision Accuracy', value: '92%', trend: '+4%', detail: 'High Precision' },
    { label: 'Consistency Index', value: 'A-', trend: 'Stable', detail: '4.2 Avg / Day' },
  ];

  const [showCalendarModal, setShowCalendarModal] = React.useState(false);

  const CalendarModal = () => (
    <AnimatePresence>
      {showCalendarModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setShowCalendarModal(false)}
            className="absolute inset-0 bg-botanical-950/60 backdrop-blur-sm" 
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-[40px] p-12 max-w-md w-full relative z-10 shadow-2xl border border-slate-100"
          >
            <h3 className="text-3xl font-black text-botanical-950 uppercase tracking-tighter mb-4">Add to Calendar</h3>
            <p className="text-slate-500 font-medium mb-10">Select your preferred calendar platform to sync the upcoming cohort session.</p>
            
            <div className="space-y-4 mb-10">
              {['Google Calendar', 'Apple Calendar', 'Outlook'].map((cal) => (
                <button 
                  key={cal}
                  onClick={() => {
                    showToast(`✔ Added to your ${cal}`);
                    setShowCalendarModal(false);
                  }}
                  className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-emerald-50 rounded-2xl transition-all group"
                >
                  <span className="text-sm font-black text-botanical-950 uppercase tracking-tight group-hover:text-emerald-600 transition-colors">{cal}</span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 group-hover:text-emerald-500 transition-all" />
                </button>
              ))}
            </div>

            <button 
              onClick={() => setShowCalendarModal(false)}
              className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FBFBFB] font-sans text-slate-900">
      <CalendarModal />
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

        <div className="mt-auto pt-6 border-t border-slate-50 space-y-2">
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl mb-2">
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
      <main className={`flex-grow flex flex-col min-w-0 ${activeView === 'network' ? 'h-screen overflow-hidden' : 'overflow-y-auto pb-24 md:pb-0'}`}>
        {activeView === 'os' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-botanical-950 tracking-tighter mb-2">
                  {t('student.welcome')}, {user?.name?.split(' ')[0] || 'Kofi'}.
                </h2>
                <div className="flex items-center gap-4">
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
                <button 
                  onClick={() => setActiveView('notifications')} 
                  className={`p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm hover:text-botanical-950 transition-all ${activeView === 'notifications' ? 'text-emerald-500 border-emerald-500/20' : 'text-slate-400'}`}
                >
                  <Bell className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveView('cohort')} 
                  className="flex-grow md:flex-none bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all"
                >
                  Cohort Events
                </button>
              </div>
            </div>

            {/* SECTION 2: CURRENT STATUS / COHORT NOTIFICATION */}
            <div className="bg-botanical-950 rounded-[32px] p-6 md:p-8 text-white relative overflow-hidden mb-12 group cursor-pointer transition-all hover:bg-botanical-900" onClick={() => setActiveView('cohort')}>
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
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none text-white">Cohort session starts in 3 days.</h3>
                  <p className="text-slate-400 text-sm font-medium">Topic: Advanced Unit Economics & Execution Market Entry</p>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); setShowCalendarModal(true); }} 
                  className="w-full md:w-auto bg-white text-botanical-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center space-x-3 hover:bg-emerald-500 hover:text-white transition-all active:scale-95"
                >
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
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Execution Path</h4>
                  </div>
                  <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group flex flex-col md:flex-row items-center gap-10 cursor-pointer" onClick={() => setActiveView('curriculum')}>
                    <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center shrink-0 border border-emerald-100">
                      <Play className="w-10 h-10 text-emerald-500 fill-current" />
                    </div>
                    <div className="flex-grow space-y-4 text-center md:text-left">
                      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Resume Progress</div>
                      <h3 className="text-3xl font-black text-botanical-950 tracking-tight leading-tight">Module 3: Pricing Strategy</h3>
                      <div className="flex items-center justify-center md:justify-start space-x-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Last visited: 2 hours ago</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => onPageChange('full-course')} 
                      className="bg-botanical-950 text-white px-10 py-6 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center space-x-4 shadow-2xl shadow-botanical-950/20 active:scale-95"
                    >
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
                      <span>View Details</span>
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
          <section className="px-6 md:px-12 pt-8 md:pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8 uppercase text-center md:text-left">Curriculum</h2>
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto md:mx-0">
              {modules.map((module, i) => (
                <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-emerald-500/20 transition-all group">
                  <div className="flex items-center space-x-8">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950 font-black relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                       0{i+1}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase tracking-tight mb-1">{module.title}</h3>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${module.progress}%` }} />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{module.progress}%</p>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => module.status !== 'locked' ? onPageChange('module-viewer', i.toString()) : showToast('Connecting to interactive module...')} className={`px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${module.status === 'locked' ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-botanical-950 text-white hover:bg-emerald-500'}`}>
                    {module.status === 'locked' ? 'Locked' : 'Enter Module'}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ) : activeView === 'simulation' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-24">
             <div className="flex justify-between items-center mb-12">
                <h2 className="text-4xl font-black text-botanical-950 tracking-tighter uppercase text-center md:text-left">Simulation Lab</h2>
                <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Full Access Active</span>
                </div>
             </div>
             
             <SimulationCarousel 
               items={simulations.map(sim => ({
                 id: sim.title.toLowerCase().replace(/\s+/g, '-'),
                 name: sim.title,
                 desc: `High-fidelity ${sim.level} environment designed for strategic stress testing within the ${sim.title} framework.`,
                 image: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80", 
                 icon: sim.icon,
                 status: sim.status === 'available' ? 'Available' : 'Locked',
                 difficulty: sim.level,
                 focus: ['Strategy', 'Execution', 'Crisis Management']
               }))} 
               onSelect={(id) => onPageChange('simulation-details', id)} 
             />
          </section>
        ) : activeView === 'network' ? (
          <CommunityInterface />
        ) : activeView === 'performance' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-24">
            <div className="mb-12">
              <h2 className="text-4xl font-black text-botanical-950 tracking-tighter uppercase mb-2 text-center md:text-left">Performance & Progress</h2>
              <p className="text-slate-500 font-medium tracking-tight text-center md:text-left">Track your execution, decisions, and growth across simulations and programs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
               {performanceMetrics.map((met, i) => (
                 <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">{met.label}</div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-4xl font-black text-botanical-950 tracking-tighter mb-2">{met.value}</div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{met.detail}</div>
                      </div>
                      <div className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                        met.trend.startsWith('+') || met.trend === 'Top 5%' || met.trend === 'On Track' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'
                      }`}>
                        {met.trend}
                      </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
              <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[48px] p-10 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-1">Execution Momentum</h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Growth score over the last 12 weeks</p>
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                   {[40, 55, 45, 65, 75, 60, 85, 80, 95, 88, 92, 100].map((h, i) => (
                     <div key={i} className="flex-1 space-y-2 group">
                        <div className="relative w-full bg-slate-50 rounded-lg overflow-hidden h-full flex flex-col justify-end">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1 }}
                            className="w-full bg-emerald-500 group-hover:bg-emerald-400 transition-colors"
                          />
                        </div>
                        <div className="text-[8px] font-black text-slate-300 text-center uppercase tracking-widest">W{i+1}</div>
                     </div>
                   ))}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-8">
                <div className="bg-botanical-950 rounded-[48px] p-10 text-white relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b981_0%,transparent_70%)] opacity-20" />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-8">
                      <Zap className="w-6 h-6 text-emerald-500" />
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500">AI Strategy Profile</h4>
                    </div>
                    <p className="text-lg font-medium text-slate-300 leading-relaxed italic mb-8">
                      "You demonstrate strong execution and decision speed, but tend to underinvest in long-term strategy."
                    </p>
                    <div className="space-y-4">
                      <button onClick={() => setActiveView('curriculum')} className="w-full bg-emerald-500 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all">Improve Strategy Skills</button>
                      <button onClick={() => setActiveView('simulation')} className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Enter Simulation</button>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-[40px] p-8">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Simulation Status</h4>
                  <div className="space-y-6">
                    {[
                      { name: 'Entrepreneurship Lab', score: 82 },
                      { name: 'Market Expansion', score: 74 },
                      { name: 'Leadership Lab', score: 88 }
                    ].map((sim, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-black text-botanical-950 uppercase tracking-tight">{sim.name}</span>
                          <span className="text-[10px] font-black text-emerald-500">{sim.score}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${sim.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight text-center md:text-left">Institutional Achievements</h3>
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                 {[
                   { name: 'Strategic Thinker', icon: ShieldCheck },
                   { name: 'Market Operator', icon: Globe },
                   { name: 'Execution Leader', icon: Rocket },
                   { name: 'Financial Mastery', icon: Award }
                 ].map((badge, i) => (
                   <div key={i} className="bg-white border border-slate-100 px-6 py-4 rounded-2xl flex items-center space-x-4 shadow-sm hover:translate-y-[-2px] transition-all cursor-default group">
                      <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <badge.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-black text-botanical-950 uppercase tracking-widest">{badge.name}</span>
                   </div>
                 ))}
              </div>
            </div>
          </section>
        ) : activeView === 'notifications' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-24 max-w-4xl mx-auto md:mx-0">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-12 uppercase text-center md:text-left">Notifications</h2>
            <div className="space-y-4">
              {[
                { type: 'simulation', title: 'Simulation Results Ready', desc: 'Your performance data from Market Expansion Lab is now live.', time: '2 mins ago', unread: true },
                { type: 'cohort', title: 'New Cohort Session Scheduled', desc: 'Advanced Unit Economics with Dr. Amara Diop starts on Monday.', time: '1 hour ago', unread: true },
                { type: 'system', title: 'Security Protocol Updated', desc: 'Your 2FA has been successfully configured.', time: '2 days ago', unread: false },
                { type: 'application', title: 'Admissions Inquiry Response', desc: 'A response has been added to your partnership inquiry.', time: '3 days ago', unread: false }
              ].map((notif, i) => (
                <div key={i} className={`p-6 md:p-8 rounded-[32px] border transition-all cursor-pointer group hover:shadow-lg ${notif.unread ? 'bg-white border-emerald-500/20 shadow-md' : 'bg-slate-50/50 border-slate-100'}`} onClick={() => {
                   if (notif.type === 'cohort') setActiveView('cohort');
                   if (notif.type === 'simulation') setActiveView('performance');
                   if (notif.type === 'application') onPageChange('admissions');
                }}>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start space-x-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${notif.unread ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-400'}`}>
                        {notif.type === 'simulation' ? <Monitor className="w-6 h-6" /> : 
                         notif.type === 'cohort' ? <Calendar className="w-6 h-6" /> : 
                         notif.type === 'system' ? <ShieldCheck className="w-6 h-6" /> : <Mail className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2 group-hover:text-emerald-500 transition-colors">{notif.title}</h4>
                        <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">{notif.desc}</p>
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{notif.time}</div>
                      </div>
                    </div>
                    {notif.unread && <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0" />}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : activeView === 'cohort' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-24">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-12 uppercase text-center md:text-left">Cohort Experience</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center md:text-left">Upcoming Sessions</h4>
                    <div className="grid grid-cols-1 gap-6">
                       {[
                         { title: 'Advanced Unit Economics', time: 'Monday, 10:00 AM', desc: 'Case studies on scaling logistics in Lagos and Nairobi.' },
                         { title: 'Capital Raising Architecture', time: 'Wednesday, 02:00 PM', desc: 'Live teardown of pitch decks that secured Series A funding.' }
                       ].map((event, i) => (
                         <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:shadow-xl transition-all">
                            <div className="flex items-center space-x-6">
                              <div className="w-16 h-16 bg-emerald-50 rounded-3xl flex flex-col items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                <Calendar className="w-6 h-6 mb-1" />
                                <span className="text-[8px] font-black uppercase tracking-tight">MAY 0{i+4}</span>
                              </div>
                              <div>
                                <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-1">{event.title}</h3>
                                <p className="text-sm font-black text-emerald-500 uppercase tracking-widest mb-2">{event.time}</p>
                                <p className="text-[10px] font-medium text-slate-500 leading-relaxed">{event.desc}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                               <button 
                                onClick={() => showToast('Connecting to ABC Virtual Boardroom...')}
                                className="w-full md:w-auto bg-botanical-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center justify-center space-x-2"
                               >
                                 <Monitor className="w-4 h-4" />
                                 <span>Join Session</span>
                               </button>
                               <button 
                                onClick={() => setShowCalendarModal(true)}
                                className="hidden md:flex p-4 bg-slate-50 text-slate-400 rounded-xl hover:text-botanical-950 hover:bg-slate-100 transition-all"
                               >
                                 <Plus className="w-4 h-4" />
                               </button>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center md:text-left">Past Sessions (Recordings)</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {[
                         { title: 'Market Entry Strategy', duration: '90m' },
                         { title: 'Product-Market Fit', duration: '124m' },
                         { title: 'Scaling Team Culture', duration: '75m' },
                         { title: 'Fintech Regulations', duration: '110m' }
                       ].map((session, i) => (
                         <div key={i} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:bg-white transition-all">
                            <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-botanical-950 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                <Play className="w-4 h-4 fill-current" />
                              </div>
                              <div>
                                <h5 className="text-[10px] font-black text-botanical-950 uppercase tracking-tight line-clamp-1">{session.title}</h5>
                                <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest font-bold">{session.duration} • Shared Resource</p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                         </div>
                       ))}
                    </div>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-12">
                  <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm overflow-hidden relative">
                     <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 font-mono">Cohort Efficiency</div>
                     <div className="space-y-8 relative z-10">
                        <div>
                          <div className="text-4xl font-black text-botanical-950 tracking-tighter mb-1">94%</div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Attendance Logic</div>
                        </div>
                        <div>
                          <div className="text-4xl font-black text-botanical-950 tracking-tighter mb-1">12</div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Projected Milestones</div>
                        </div>
                        <div>
                          <div className="text-4xl font-black text-emerald-500 tracking-tighter mb-1"> Elite </div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">Cohort Health Score</div>
                        </div>
                     </div>
                     <div className="absolute top-0 right-0 p-12 opacity-5 text-emerald-500">
                        <Users className="w-48 h-48" />
                     </div>
                  </div>

                  <div className="bg-botanical-950 p-10 rounded-[40px] text-white">
                    <div className="flex items-center space-x-3 mb-6">
                      <MessageCircle className="w-6 h-6 text-emerald-500" />
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Live Support</h4>
                    </div>
                    <p className="text-sm font-medium text-slate-400 leading-relaxed mb-8">Need help? Our institutional support team is available 24/7 for strategic aid.</p>
                    <button onClick={() => showToast('Connecting to support...')} className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Contact Registrar</button>
                  </div>
               </div>
            </div>
          </section>
        ) : activeView === 'preferences' ? (
          <section className="px-6 md:px-12 pt-8 md:pt-12 pb-24 max-w-4xl mx-auto md:mx-0">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-12 uppercase text-center md:text-left">Account & Preferences</h2>
            
            <div className="space-y-12">
               <div className="p-10 bg-white border border-slate-100 rounded-[40px] shadow-sm">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-10">Institutional Profile</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Full Name</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-sm font-bold focus:border-emerald-500 outline-none" defaultValue={user?.name || "Kofi Mensah"} />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Email Address</label>
                       <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-6 py-4 text-sm font-bold focus:border-emerald-500 outline-none" defaultValue={user?.email || "kofi.mensah@builder.abc"} />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <button onClick={() => showToast('Changes saved')} className="w-full md:w-auto bg-botanical-950 text-white px-10 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Save Changes</button>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-8 bg-white border border-slate-100 rounded-[32px] space-y-8">
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Learning Mode</h4>
                     <div className="space-y-4">
                        {['Self-paced', 'Guided', 'Hybrid'].map((mode) => (
                          <label key={mode} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-white border border-transparent hover:border-emerald-500/20 transition-all group">
                             <span className="text-sm font-black text-botanical-950 uppercase tracking-tight">{mode}</span>
                             <input type="radio" name="learning-mode" defaultChecked={mode === 'Guided'} className="w-4 h-4 text-emerald-500" />
                          </label>
                        ))}
                     </div>
                  </div>
                  <div className="p-8 bg-white border border-slate-100 rounded-[32px] space-y-8">
                     <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Simulation Difficulty</h4>
                     <div className="space-y-4">
                        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                          <label key={level} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl cursor-pointer hover:bg-white border border-transparent hover:border-emerald-500/20 transition-all group">
                             <span className="text-sm font-black text-botanical-950 uppercase tracking-tight">{level}</span>
                             <input type="radio" name="sim-diff" defaultChecked={level === 'Intermediate'} className="w-4 h-4 text-emerald-500" />
                          </label>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="p-8 bg-white border border-slate-100 rounded-[32px]">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-8 font-bold">Security & Alerts</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-widest text-botanical-950">Enable 2FA</span>
                        <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end transition-all"><div className="w-4 h-4 bg-white rounded-full shadow-sm" /></div>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-xs font-black uppercase tracking-widest text-botanical-950">Email Alerts</span>
                         <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end transition-all"><div className="w-4 h-4 bg-white rounded-full shadow-sm" /></div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <button onClick={() => showToast('Redirecting to reset...')} className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors">
                        <span>Change Password</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
               </div>

               <div className="bg-botanical-950 p-10 rounded-[48px] text-white flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">Billing</div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Pro Plan • Active</h3>
                  </div>
                  <button onClick={() => showToast('Managing subscription...')} className="w-full md:w-auto bg-white text-botanical-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Manage Subscription</button>
               </div>

               <div className="pt-12 border-t border-slate-100 flex items-center justify-between">
                  <button onClick={handleLogout} className="flex items-center space-x-3 text-slate-400 hover:text-red-500 transition-colors uppercase text-[10px] font-black tracking-widest">
                     <LogOut className="w-4 h-4" />
                     <span>Terminate Session</span>
                  </button>
                  <button onClick={() => showToast('Institutional deletion requires confirmation...')} className="text-[10px] font-black uppercase tracking-widest text-red-500 p-4 hover:bg-red-50 rounded-xl transition-all">Delete Account</button>
               </div>
            </div>
          </section>
        ) : (
          <section className="px-12 pt-12">
            <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8 uppercase text-center md:text-left">Preferences</h2>
            <div className="max-w-2xl space-y-12 mx-auto md:mx-0">
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
                     <LogOut className="w-4 h-4" />
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

export default StudentDashboard;
