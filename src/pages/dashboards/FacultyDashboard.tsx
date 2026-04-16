
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
  Home as HomeIcon
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';

interface DashboardProps {
  onPageChange: (page: Page) => void;
}

export const FacultyDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();

  const sidebarItems = [
    { icon: LayoutDashboard, label: t('dashboard.faculty.dashboard'), active: true },
    { icon: BookOpen, label: t('dashboard.faculty.programs') },
    { icon: Monitor, label: t('dashboard.faculty.labs') },
    { icon: Users, label: t('dashboard.faculty.community') },
    { icon: FileText, label: t('dashboard.faculty.resources') },
    { icon: Calendar, label: t('dashboard.faculty.calendar') },
    { icon: MessageSquare, label: t('dashboard.faculty.messages') },
    { icon: Settings, label: t('dashboard.faculty.settings') },
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

        <div className="mt-8 space-y-2 mb-8">
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

        <div className="mt-auto p-4 bg-slate-100 rounded-2xl flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" 
            alt="Faculty" 
            className="w-10 h-10 rounded-full object-cover grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="min-w-0">
            <div className="text-xs font-bold text-slate-900 truncate">Dr. Elena Vance</div>
            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 truncate">Senior Faculty</div>
          </div>
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
              placeholder="Search student records..." 
              className={`w-full bg-slate-100 border-none rounded-full py-2.5 text-sm focus:ring-2 focus:ring-emerald-500/20 transition-all ${isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4'}`}
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-all">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center space-x-4">
              <button className="bg-slate-100 text-slate-900 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center space-x-2">
                <FileDown className="w-4 h-4" />
                <span>Export Reports</span>
              </button>
              <button className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                Review Submissions
              </button>
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <h2 className="text-4xl font-black text-botanical-950 tracking-tighter">
                  Welcome, Dr. Elena Vance
                </h2>
                <p className="text-slate-500 font-medium mt-2">Your faculty oversight for the Fall 2024 semester is currently active.</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: 'Active Programs', value: '04', icon: BookOpen, color: 'bg-white text-emerald-500' },
                { label: 'Enrolled Students', value: '182', icon: Users2, color: 'bg-emerald-500 text-white' },
                { label: 'Upcoming Sessions', value: '12', icon: Clock, color: 'bg-emerald-100 text-emerald-600' }
              ].map((stat, i) => (
                <div key={i} className={`${stat.color} rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col justify-between h-48`}>
                  <stat.icon className="w-8 h-8" />
                  <div>
                    <div className="text-5xl font-black tracking-tighter mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest opacity-70">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Assignments & Reviews */}
              <div className="lg:col-span-8 space-y-8">
                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-xl font-black text-botanical-950 tracking-tight">Assignments & Reviews</h4>
                    <span className="bg-red-50 text-red-500 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Action Required</span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { code: 'ML', title: 'Machine Learning Case Study', desc: 'Advanced Data Labs • 12 submissions pending' },
                      { code: 'GB', title: 'Global Business Dynamics', desc: 'Executive Leadership • 8 submissions pending' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-2xl flex items-center justify-between group hover:bg-emerald-50 transition-all cursor-pointer">
                        <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-slate-400 group-hover:text-emerald-500 transition-colors">
                            {item.code}
                          </div>
                          <div>
                            <h5 className="font-black text-botanical-950 text-sm mb-1">{item.title}</h5>
                            <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
                          </div>
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-600">Grade Now</button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                    <h4 className="text-lg font-black text-botanical-950 tracking-tight mb-8">Engagement Metrics</h4>
                    <div className="h-48 flex items-end justify-between px-4">
                      {[40, 70, 45, 90, 60].map((h, i) => (
                        <div key={i} className="w-8 bg-emerald-500 rounded-t-lg transition-all hover:bg-emerald-400" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-4 px-4 text-[8px] font-black uppercase tracking-widest text-slate-400">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center">
                    <h4 className="text-lg font-black text-botanical-950 tracking-tight mb-4">Completion Rates</h4>
                    <p className="text-xs text-slate-400 font-medium mb-8">Average across all programs</p>
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path className="text-slate-100" strokeWidth="3" stroke="currentColor" fill="transparent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                        <path className="text-emerald-500" strokeWidth="3" strokeDasharray="88, 100" strokeLinecap="round" stroke="currentColor" fill="transparent" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center text-2xl font-black text-botanical-950">88%</div>
                    </div>
                  </div>
                </div>

                {/* Student Monitoring */}
                <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-xl font-black text-botanical-950 tracking-tight">Student Monitoring</h4>
                    <div className="flex -space-x-2">
                      {[
                        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80",
                        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      ].map((src, i) => (
                        <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-white object-cover" referrerPolicy="no-referrer" />
                      ))}
                      <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[8px] font-black text-slate-400">+14</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="text-[8px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">
                          <th className="pb-4">Student</th>
                          <th className="pb-4">Simulation</th>
                          <th className="pb-4">Progress</th>
                          <th className="pb-4">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[
                          { name: 'Julianne Moore', sim: 'Market Penetration v3', prog: 60, status: 'Active' },
                          { name: 'Marcus Chen', sim: 'Risk Assessment Beta', prog: 45, status: 'Active' }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-50 last:border-0">
                            <td className="py-6 font-bold text-slate-900">{row.name}</td>
                            <td className="py-6 text-slate-500">{row.sim}</td>
                            <td className="py-6">
                              <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: `${row.prog}%` }} />
                              </div>
                            </td>
                            <td className="py-6">
                              <div className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{row.status}</span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-4 space-y-8">
                {/* Quick Actions */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-black text-botanical-950 tracking-tight mb-8">Quick Actions</h4>
                  <div className="space-y-4">
                    <button className="w-full bg-slate-50 p-4 rounded-2xl flex items-center justify-between group hover:bg-emerald-500 hover:text-white transition-all">
                      <div className="flex items-center space-x-3">
                        <Plus className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Create Session</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                    <button className="w-full bg-slate-50 p-4 rounded-2xl flex items-center justify-between group hover:bg-emerald-500 hover:text-white transition-all">
                      <div className="flex items-center space-x-3">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Review Assignments</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                    <button className="w-full bg-slate-50 p-4 rounded-2xl flex items-center justify-between group hover:bg-emerald-500 hover:text-white transition-all">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4" />
                        <span className="text-xs font-black uppercase tracking-widest">Message Students</span>
                      </div>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  </div>
                </div>

                {/* Upcoming Sessions */}
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="text-lg font-black text-botanical-950 tracking-tight">Upcoming Sessions</h4>
                    <Calendar className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div className="space-y-8">
                    {[
                      { time: 'TODAY • 14:00', title: 'Data Ethics Seminar', loc: 'Lecture Hall A / Zoom ID: 482-110' },
                      { time: 'TOMORROW • 10:00', title: 'Capstone Project Check-in', loc: 'Office Hours - Block C' },
                      { time: 'OCT 12 • 09:30', title: 'Supply Chain Simulation', loc: 'Virtual Lab 04' }
                    ].map((session, i) => (
                      <div key={i} className="relative pl-6 border-l-2 border-emerald-500">
                        <div className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mb-1">{session.time}</div>
                        <h5 className="font-black text-botanical-950 text-sm mb-1">{session.title}</h5>
                        <p className="text-[10px] text-slate-400 font-medium">{session.loc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insight Card */}
                <div className="bg-emerald-900 rounded-[32px] p-8 text-white relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 opacity-20">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-black mb-4">Student Insight of the Week</h4>
                    <p className="text-sm text-emerald-100/80 leading-relaxed mb-8">
                      "Engagement in simulation labs has increased by 14% since the last module update. Interactive learning is thriving."
                    </p>
                    <button className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                      <span>View Full Report</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
