
import React from 'react';
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

interface DashboardProps {
  onPageChange: (page: Page) => void;
}

export const StudentDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onPageChange('home');
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: t('student.os'), active: true },
    { icon: Play, label: t('student.curriculum') },
    { icon: Monitor, label: t('student.simulation') },
    { icon: Wrench, label: t('student.tools') },
    { icon: Users, label: t('student.network') },
    { icon: BarChart3, label: t('student.performance') },
    { icon: Settings, label: t('student.preferences') },
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
    { title: 'Pan-African Scale', icon: Globe, status: 'locked', level: 'Elite' },
  ];

  const performanceMetrics = [
    { label: 'Decision Score', value: '88/100', trend: '+4%' },
    { label: 'Simulation Rank', value: 'Top 5%', trend: 'Steady' },
    { label: 'Strategic Rigor', value: 'A-', trend: 'Improving' },
  ];

  return (
    <div className="flex min-h-screen bg-[#FBFBFB] font-sans text-slate-900">
      {/* Sidebar - Notion Style Minimal */}
      <aside className="w-[260px] bg-white border-r border-slate-100 p-4 flex flex-col shrink-0">
        <div className="px-4 py-6 mb-4">
          <div 
            className="cursor-pointer group flex items-center space-x-3 mb-8"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 bg-botanical-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 shadow-sm">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                <path d="M20 8L36 18L20 28L4 18L20 8Z" fill="white" />
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
              className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all text-sm font-medium ${
                item.active 
                  ? 'bg-slate-50 text-botanical-950 font-black' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon className={`w-4 h-4 ${item.active ? 'text-emerald-500' : 'text-slate-400'}`} />
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

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0 overflow-y-auto">
        {/* Header Section */}
        <section className="px-12 pt-12 pb-8">
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-2">
                {t('student.welcome')}, {user?.name?.split(' ')[0] || 'Kofi'}.
              </h2>
              <div className="flex items-center space-x-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{user?.program || 'Entrepreneurship Program'}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full" />
                <div className="flex items-center space-x-2">
                   <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[24%]" />
                  </div>
                  <span className="text-[10px] font-black text-emerald-500">24% Complete</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2.5 bg-white border border-slate-100 rounded-xl shadow-sm text-slate-400 hover:text-botanical-950 transition-all">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all">
                Register for Cohort Event
              </button>
            </div>
          </div>

          {/* SECTION 2: CURRENT STATUS / COHORT NOTIFICATION */}
          <div className="bg-botanical-950 rounded-[32px] p-8 text-white relative overflow-hidden mb-12 group cursor-pointer transition-all hover:bg-botanical-900">
             <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Zap className="w-48 h-48" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">Next Cohort Session</span>
                </div>
                <h3 className="text-3xl font-black tracking-tight leading-none">Cohort starts in 3 days.</h3>
                <p className="text-slate-400 text-sm font-medium">Topic: Advanced Unit Economics & Sovereign Market Entry</p>
              </div>
              <button className="bg-white text-botanical-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 hover:bg-emerald-500 hover:text-white transition-all">
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
                <div className="bg-white border border-slate-100 rounded-[40px] p-10 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all group flex flex-col md:flex-row items-center gap-10">
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
                  <button className="bg-botanical-950 text-white px-10 py-6 rounded-2xl text-[12px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all flex items-center space-x-4 shadow-2xl shadow-botanical-950/20 active:scale-95">
                    <span>Continue Program</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* SECTION 4: PROGRAM STRUCTURE (MODULES) */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('student.path')}</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {modules.map((module, i) => (
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
                      <div className="flex items-center space-x-8">
                        {module.status !== 'locked' && (
                          <div className="text-right hidden sm:block">
                            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Progress</div>
                            <div className="flex items-center space-x-3">
                              <div className="w-24 h-1 bg-slate-50 rounded-full">
                                <div className={`h-full rounded-full ${module.status === 'complete' ? 'bg-emerald-500' : 'bg-indigo-500'}`} style={{ width: `${module.progress}%` }} />
                              </div>
                              <span className="text-[10px] font-black text-botanical-950">{module.progress}%</span>
                            </div>
                          </div>
                        )}
                        {module.status === 'active' || module.status === 'complete' ? (
                          <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all">
                            {module.status === 'complete' ? 'Review' : 'Continue'}
                          </button>
                        ) : (
                          <Lock className="w-5 h-5 text-slate-300 mr-2" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 5: SIMULATION LABS */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('student.simulation')}</h4>
                  <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Access Global Lab</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {simulations.map((sim, i) => (
                    <div key={i} className={`p-8 rounded-[32px] border transition-all flex flex-col items-center text-center group ${
                      sim.status === 'locked' ? 'bg-slate-50/50 border-slate-50' : 'bg-white border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-100 cursor-pointer'
                    }`}>
                      <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-6 border transition-all ${
                        sim.status === 'locked' ? 'bg-white text-slate-300' : 'bg-indigo-50 text-indigo-600 border-indigo-100 group-hover:scale-110'
                      }`}>
                        {sim.status === 'locked' ? <Lock className="w-8 h-8" /> : <sim.icon className="w-8 h-8" />}
                      </div>
                      <div className="flex-grow">
                        <div className="text-[8px] font-black uppercase tracking-widest text-indigo-500 mb-2">{sim.level} Ready</div>
                        <h5 className="text-xl font-black text-botanical-950 mb-4">{sim.title}</h5>
                      </div>
                      <button 
                        disabled={sim.status === 'locked'}
                        className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          sim.status === 'locked' ? 'bg-slate-100 text-slate-300' : 'bg-botanical-950 text-white hover:bg-indigo-600'
                        }`}
                      >
                        Launch Simulation
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: METRICS & TOOLS */}
            <div className="lg:col-span-4 space-y-12">
              
              {/* SECTION 6: PERFORMANCE METRICS */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono">{t('student.analytics')}</h4>
                <div className="bg-white border border-slate-100 rounded-[32px] p-8 shadow-sm space-y-8">
                  {performanceMetrics.map((met, i) => (
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
                  <button className="w-full py-5 bg-slate-50 text-botanical-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all flex items-center justify-center space-x-3">
                    <BarChart3 className="w-4 h-4" />
                    <span>View Detailed Dossier</span>
                  </button>
                </div>
              </div>

              {/* SECTION 7: TOOLS (INSTRUMENT STUDIO) */}
              <div className="space-y-6">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('student.instruments')}</h4>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: 'Financial Engine', desc: 'Real-time cohort modeling', icon: BarChart3 },
                    { label: 'Market Intelligence', desc: 'Real-time sovereign data', icon: Globe },
                    { label: 'Strategic Canvas', desc: 'Proposition designer', icon: Wrench },
                  ].map((tool, i) => (
                    <div key={i} className="bg-white border border-slate-100 p-5 rounded-2xl hover:border-emerald-500/30 transition-all cursor-pointer group flex items-center space-x-5">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-all">
                        <tool.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-500 transition-all" />
                      </div>
                      <div className="flex-grow">
                        <h6 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{tool.label}</h6>
                        <p className="text-[10px] font-medium text-slate-400">{tool.desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-200 group-hover:text-emerald-500 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 8: COMMUNITY */}
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
                  <button className="w-full mt-8 bg-botanical-950 text-white py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">
                    Open Channel
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
