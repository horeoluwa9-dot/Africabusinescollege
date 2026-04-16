
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
  Home as HomeIcon
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';

interface DashboardProps {
  onPageChange: (page: Page) => void;
}

export const StudentDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();

  const sidebarItems = [
    { icon: LayoutDashboard, label: t('dashboard.student.dashboard'), active: true },
    { icon: BookOpen, label: t('dashboard.student.programs') },
    { icon: Monitor, label: t('dashboard.student.labs') },
    { icon: Users, label: t('dashboard.student.community') },
    { icon: FileText, label: t('dashboard.student.resources') },
    { icon: Calendar, label: t('dashboard.student.calendar') },
    { icon: MessageSquare, label: t('dashboard.student.messages') },
    { icon: Settings, label: t('dashboard.student.settings') },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col shrink-0">
        <div 
          className="mb-10 cursor-pointer group"
          onClick={() => onPageChange('home')}
        >
          <h1 className="text-xl font-black tracking-tighter text-botanical-950 group-hover:text-emerald-500 transition-colors">ABC Dashboard</h1>
          <p className="text-[8px] font-black uppercase tracking-widest text-slate-400">Global Leadership</p>
        </div>

        <nav className="flex-grow space-y-1">
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? 'bg-emerald-50 text-emerald-600 font-bold' 
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              } ${isRTL ? 'space-x-reverse' : ''}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto space-y-2">
          <button 
            onClick={() => onPageChange('home')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all"
          >
            <HomeIcon className="w-5 h-5" />
            <span className="text-sm">Back to Site</span>
          </button>
          <button 
            onClick={() => onPageChange('home')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="relative w-96">
            <Search className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${isRTL ? 'right-4' : 'left-4'}`} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className={`w-full bg-slate-100 border-none rounded-full py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 transition-all ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}`}
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              <div className="text-right">
                <div className="text-sm font-bold text-slate-900">Kofi Mensah</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">MBA Candidate</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-4xl font-black text-botanical-950 tracking-tighter">
                {t('dashboard.welcome')}, Kofi Mensah
              </h2>

              {/* Current Program Card */}
              <div className="bg-white rounded-[32px] p-10 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <BookOpen className="w-48 h-48 text-botanical-950" />
                </div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2 block">{t('dashboard.currentProgram')}</span>
                      <h3 className="text-3xl font-black text-botanical-950 max-w-md leading-tight">
                        Executive Leadership & Strategic Innovation
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-slate-200 tracking-tighter">78%</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-3 rounded-full mb-10 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-emerald-500 rounded-full" 
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="bg-botanical-950 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-3 hover:bg-emerald-500 transition-all group">
                      <span>{t('dashboard.continueLearning')}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Next: <span className="text-slate-900">Case Study: Emerging Markets Strategy</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Active Simulations */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-black text-botanical-950 tracking-tight">{t('dashboard.activeSimulations')}</h4>
                  <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-600">View All Labs</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: 'Fintech Ecosystems v2.0', desc: 'Complex regulatory and market flow simulation.', icon: Monitor },
                    { title: 'Macro Trends: West Africa', desc: 'Interactive forecasting for retail and manufacturing.', icon: Search }
                  ].map((sim, i) => (
                    <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-emerald-500/30 transition-all group">
                      <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-500">
                        <sim.icon className="w-6 h-6" />
                      </div>
                      <h5 className="text-lg font-black text-botanical-950 mb-2">{sim.title}</h5>
                      <p className="text-xs text-slate-500 font-medium leading-relaxed mb-8">{sim.desc}</p>
                      <button className="w-full py-3 bg-slate-100 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900 hover:bg-emerald-500 hover:text-white transition-all">
                        Open Simulation
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks & Deadlines */}
              <div>
                <h4 className="text-xl font-black text-botanical-950 tracking-tight mb-6">{t('dashboard.tasksDeadlines')}</h4>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                  {[
                    { title: 'Module 4: Case Study Submission', desc: 'Strategic Innovation in Emerging Markets', status: 'DUE TODAY', color: 'text-red-500' },
                    { title: 'Peer Review: Financial Models', desc: 'Review 3 peer submissions', status: 'IN 2 DAYS', color: 'text-slate-400' },
                    { title: 'Quiz: Digital Transformation', desc: 'Unit 5 assessment', status: 'IN 5 DAYS', color: 'text-slate-400' }
                  ].map((task, i) => (
                    <div key={i} className="p-6 flex items-center justify-between border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors cursor-pointer">
                      <div className="flex items-center space-x-6">
                        <div className="w-6 h-6 rounded-full border-2 border-emerald-500/30 flex items-center justify-center">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div>
                          <h5 className="font-black text-botanical-950 text-sm mb-1">{task.title}</h5>
                          <p className="text-xs text-slate-400 font-medium">{task.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span className={`text-[8px] font-black uppercase tracking-widest ${task.color}`}>{task.status}</span>
                        <MoreHorizontal className="w-5 h-5 text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Community Activity */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h4 className="text-lg font-black text-botanical-950 tracking-tight mb-8">{t('dashboard.communityActivity')}</h4>
                <div className="space-y-8">
                  {[
                    { user: 'Amara Okafor', action: 'replied to your comment in', target: 'Global Markets Hub', color: 'bg-emerald-500' },
                    { user: 'Faculty News', action: 'New Simulation Lab "Tech Frontier" is now open.', target: '', color: 'bg-emerald-400' },
                    { user: 'Strategic Thinker', action: 'You earned a badge for Week 4 completion.', target: '', color: 'bg-slate-300' }
                  ].map((act, i) => (
                    <div key={i} className="flex space-x-4">
                      <div className={`w-10 h-10 rounded-full ${act.color} flex items-center justify-center text-white shrink-0`}>
                        {i === 0 ? <MessageSquare className="w-5 h-5" /> : i === 1 ? <Monitor className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-600 leading-relaxed">
                          <span className="font-black text-slate-900">{act.user}</span> {act.action} <span className="text-emerald-500 font-bold">{act.target}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-botanical-950 rounded-3xl p-8 text-white shadow-xl shadow-botanical-950/20">
                <h4 className="text-lg font-black tracking-tight mb-8">{t('dashboard.quickActions')}</h4>
                <div className="space-y-4">
                  <button className="w-full bg-white text-botanical-950 p-4 rounded-2xl flex items-center justify-between group hover:bg-emerald-500 hover:text-white transition-all">
                    <span className="text-xs font-black uppercase tracking-widest">Continue Module</span>
                    <Play className="w-4 h-4 fill-current" />
                  </button>
                  <button className="w-full bg-emerald-500 text-white p-4 rounded-2xl flex items-center justify-between group hover:bg-emerald-400 transition-all">
                    <span className="text-xs font-black uppercase tracking-widest">Join Simulation</span>
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl flex items-center justify-between group hover:bg-white/10 transition-all">
                    <span className="text-xs font-black uppercase tracking-widest">Message Faculty</span>
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-slate-100/50 rounded-3xl p-8 border border-slate-200">
                <h4 className="text-lg font-black text-botanical-950 tracking-tight mb-8">{t('dashboard.upcomingSessions')}</h4>
                <div className="space-y-10">
                  {[
                    { time: 'TOMORROW @ 10:00 AM', title: 'Advanced Venture Capital Models', host: 'Dr. Sarah Mensah' },
                    { time: 'FRIDAY @ 2:00 PM', title: 'Leadership Q&A: Public Policy', host: 'Prof. John Adu' }
                  ].map((session, i) => (
                    <div key={i}>
                      <div className="text-[8px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-2">{session.time}</div>
                      <h5 className="font-black text-botanical-950 mb-1">{session.title}</h5>
                      <p className="text-xs text-slate-400 font-medium mb-4">{session.host}</p>
                      <button className="flex items-center space-x-2 text-[8px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-600">
                        <Calendar className="w-3 h-3" />
                        <span>Add to Calendar</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
