
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
  ArrowRight,
  MoreHorizontal,
  Plus,
  Mail,
  CheckCircle2,
  FileDown,
  Users2,
  Clock,
  BarChart3,
  PieChart,
  LogOut,
  Home as HomeIcon,
  Activity,
  Award,
  Cpu
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';

interface DashboardProps {
  onPageChange: (page: Page) => void;
}

export const FacultyDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onPageChange('home');
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: t('faculty.oversight'), active: true },
    { icon: BookOpen, label: t('faculty.design') },
    { icon: Monitor, label: t('faculty.monitor') },
    { icon: Users, label: t('faculty.registry') },
    { icon: FileText, label: t('faculty.research') },
    { icon: Calendar, label: t('faculty.calendar') },
    { icon: MessageSquare, label: t('faculty.governance') },
    { icon: Settings, label: t('faculty.preferences') },
  ];

  return (
    <div className="flex h-screen bg-white font-sans text-slate-900 overflow-hidden">
      {/* Sidebar - Notion Style */}
      <aside className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-6">
          <div 
            className="cursor-pointer group flex items-center space-x-3 mb-8"
            onClick={() => onPageChange('home')}
          >
            <div className="w-8 h-8 bg-botanical-950 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=100&q=80" 
                alt="ABC Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tighter text-botanical-950 leading-none">AFRICA BUSINESS</h1>
              <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">COLLEGE • FACULTY</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-sm mb-8">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-black text-xs">
              ED
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-black uppercase text-slate-900 truncate">Elena Diop</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate">Chair, Venture Lab</div>
            </div>
          </div>

          <nav className="space-y-0.5">
            {sidebarItems.map((item, i) => (
              <button
                key={i}
                className={`w-full flex items-center space-x-2.5 px-3 py-1.5 rounded-lg transition-all text-left ${
                  item.active 
                    ? 'bg-slate-200/50 text-slate-950 font-bold' 
                    : 'text-slate-500 hover:bg-slate-200/30 hover:text-slate-900'
                } ${isRTL ? 'space-x-reverse text-right' : ''}`}
              >
                <item.icon className={`w-4 h-4 ${item.active ? 'text-emerald-500' : 'text-slate-400'}`} />
                <span className="text-xs uppercase tracking-tight">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-slate-200 space-y-1">
          <button 
            onClick={() => onPageChange('home')}
            className="w-full flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-slate-500 hover:bg-slate-200/30 hover:text-slate-900 transition-all"
          >
            <HomeIcon className="w-4 h-4" />
            <span className="text-xs uppercase tracking-tight">Main Campus</span>
          </button>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-2.5 px-3 py-1.5 rounded-lg text-red-500 hover:bg-red-50 transition-all font-bold"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-xs uppercase tracking-tight">System Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow flex flex-col min-w-0 bg-white">
        {/* Header */}
        <header className="h-14 border-b border-slate-100 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('faculty.oversight')}</span>
            <span className="text-slate-200">/</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{t('faculty.design')}</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-300" />
              <input 
                type="text" 
                placeholder="Search Scholar ID..." 
                className="bg-slate-50 border border-slate-100 rounded-lg pl-9 pr-4 py-1.5 text-xs focus:ring-1 focus:ring-emerald-500 focus:bg-white transition-all w-64"
              />
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition-all relative">
                <Bell className="w-4 h-4" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
              </button>
              <button className="bg-botanical-950 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">
                Review Submissions
              </button>
            </div>
          </div>
        </header>

        {/* Workspace */}
        <div className="flex-grow p-10 overflow-y-auto custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-2">{t('faculty.overview')}</h2>
              <p className="text-slate-400 text-sm font-medium">Monitoring cohort progression and institutional performance metrics for 2026.</p>
            </div>

            {/* Metric Blocks */}
            <div className="grid grid-cols-4 gap-6">
              {[
                { label: t('faculty.metrics.curricula'), value: '4', trend: 'STABLE', icon: BookOpen },
                { label: t('faculty.metrics.scholars'), value: '182', trend: '+12%', icon: Users2 },
                { label: t('faculty.metrics.engagement'), value: '94%', trend: '+3%', icon: Activity },
                { label: t('faculty.metrics.achievement'), value: '86', trend: 'UP', icon: Award }
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl group hover:border-emerald-200 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-4 h-4 text-emerald-500" />
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded ${stat.trend.includes('+') || stat.trend === 'UP' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-500'}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-botanical-950 mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-8">
              {/* Monitoring Column */}
              <div className="col-span-8 space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-10">
                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-400">{t('faculty.pipeline')}</h4>
                    <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all">View Full Log</button>
                  </div>
                  <div className="space-y-4">
                    {[
                      { student: 'Julianne Moore', program: 'Venture Leadership', date: '2h ago', status: 'Pending Review' },
                      { student: 'Marcus Chen', program: 'Global Strategic Finance', date: '5h ago', status: 'In Review' },
                      { student: 'Amara Diop', program: 'Digital Governance', date: 'Yesterday', status: 'Pending Review' }
                    ].map((sub, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 border border-slate-100 rounded-2xl hover:bg-white hover:shadow-lg transition-all group">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-200 overflow-hidden flex-shrink-0">
                            <img src={`https://i.pravatar.cc/100?u=${sub.student}`} alt={sub.student} className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <div className="text-sm font-black text-botanical-950 tracking-tight">{sub.student}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub.program}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-black uppercase text-emerald-500 mb-1">{sub.status}</div>
                          <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{sub.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytical Preview */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-botanical-950 rounded-3xl p-8 border border-white/5 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Cpu className="w-16 h-16 text-emerald-500" />
                    </div>
                    <div className="relative z-10">
                      <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">{t('faculty.analytics')}</div>
                      <h5 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">Strategic Rigor <br /> Index 04.</h5>
                      <div className="flex items-end space-x-2 h-24 mb-6">
                        {[40, 60, 45, 90, 65, 80].map((v, i) => (
                          <div key={i} className="flex-grow bg-emerald-500 rounded-sm" style={{ height: `${v}%` }} />
                        ))}
                      </div>
                      <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 flex items-center space-x-2 group">
                        <span>Analysis Detail</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">{t('faculty.health')}</div>
                    <div className="space-y-6">
                      {[
                        { label: 'Retention rate', val: '98%' },
                        { label: 'Faculty feedback', val: '4.9/5' },
                        { label: 'Research impact', val: 'Active' }
                      ].map((h, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">{h.label}</span>
                          <span className="text-sm font-black text-emerald-500">{h.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Oversight Column */}
              <div className="col-span-4 space-y-8">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{t('faculty.schedule')}</h4>
                    <Calendar className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="space-y-8">
                    {[
                      { time: '14:30', title: 'Curriculum Review', type: 'Design Meeting' },
                      { time: '16:00', title: 'Simulation Validation', type: 'Tech Lab' },
                      { time: '10 OCT', title: 'Scholars Town Hall', type: 'Institutional' }
                    ].map((event, i) => (
                      <div key={i} className="relative pl-6 border-l border-slate-200 last:border-0 pb-2">
                        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-slate-200" />
                        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">{event.time}</div>
                        <h5 className="text-xs font-black text-botanical-950 uppercase tracking-tight">{event.title}</h5>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{event.type}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-3xl p-8 border border-emerald-100 flex flex-col justify-between min-h-[240px]">
                  <div>
                    <h4 className="text-sm font-black text-emerald-900 uppercase tracking-widest mb-4">Faculty Research</h4>
                    <p className="text-xs text-emerald-800/70 font-medium leading-relaxed mb-8">
                      Your latest whitepaper "Sovereign Strategic Frameworks in Pan-African Markets" is currently trending in the Research Hub.
                    </p>
                  </div>
                  <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Upload New Asset</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
