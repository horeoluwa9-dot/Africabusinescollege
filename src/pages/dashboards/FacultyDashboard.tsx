
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
  onPageChange: (page: Page, id?: string) => void;
}

export const FacultyDashboard = ({ onPageChange }: DashboardProps) => {
  const { t, isRTL } = useLanguage();
  const { user, logout, isLoggedIn } = useAuth();

  const [activeView, setActiveView] = React.useState('oversight');

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
    { id: 'oversight', icon: LayoutDashboard, label: t('faculty.oversight') },
    { id: 'design', icon: BookOpen, label: t('faculty.design') },
    { id: 'monitor', icon: Monitor, label: t('faculty.monitor') },
    { id: 'registry', icon: Users, label: t('faculty.registry') },
    { id: 'research', icon: FileText, label: t('faculty.research') },
    { id: 'calendar', icon: Calendar, label: t('faculty.calendar') },
    { id: 'governance', icon: MessageSquare, label: t('faculty.governance') },
    { id: 'preferences', icon: Settings, label: t('faculty.preferences') },
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
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden relative border border-slate-100 shadow-sm">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M20 8L36 18L20 28L4 18L20 8Z" fill="#0a2540" />
                  <path d="M10 21V28C10 28 15 32 20 32C25 32 30 28 30 28V21" stroke="#0a2540" strokeWidth="2.5" />
                  <path d="M32 12L36 8M36 8H31M36 8V13" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4 36C12 32 28 32 36 36" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tighter text-botanical-950 leading-none">AFRICA BUSINESS</h1>
              <p className="text-[8px] font-bold uppercase tracking-widest text-slate-400 mt-0.5">COLLEGE • FACULTY</p>
            </div>
          </div>

          <div className="flex items-center space-x-3 px-3 py-2 bg-white rounded-xl border border-slate-200 shadow-sm mb-8">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-black text-xs uppercase">
              {user?.name?.substring(0, 2) || 'ED'}
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-black uppercase text-slate-900 truncate">{user?.name || 'Elena Diop'}</div>
              <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest truncate">Chair, Venture Lab</div>
            </div>
          </div>

          <nav className="space-y-0.5">
            {sidebarItems.map((item, i) => (
              <button
                key={i}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center space-x-2.5 px-3 py-1.5 rounded-lg transition-all text-left ${
                  activeView === item.id 
                    ? 'bg-slate-200/50 text-slate-950 font-bold' 
                    : 'text-slate-500 hover:bg-slate-200/30 hover:text-slate-900'
                } ${isRTL ? 'space-x-reverse text-right' : ''}`}
              >
                <item.icon className={`w-4 h-4 ${activeView === item.id ? 'text-emerald-500' : 'text-slate-400'}`} />
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
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Institutional</span>
            <span className="text-slate-200">/</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">{sidebarItems.find(i => i.id === activeView)?.label}</span>
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
          {activeView === 'oversight' ? (
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
                      <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:bg-emerald-50 px-4 py-2 rounded-lg transition-all" onClick={() => setActiveView('monitor')}>View Full Log</button>
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
                    <button className="bg-emerald-500 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all flex items-center justify-center space-x-2" onClick={() => setActiveView('research')}>
                      <Plus className="w-4 h-4" />
                      <span>Upload New Asset</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : activeView === 'design' ? (
            <div className="max-w-4xl mx-auto py-12">
               <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Educational Design</h2>
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'Venture Leadership', status: 'Published', lastEdit: '2 days ago' },
                    { title: 'Global Strategic Finance', status: 'In Review', lastEdit: '5 hours ago' },
                    { title: 'Digital Governance', status: 'Draft', lastEdit: 'Just now' }
                  ].map((cur, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center justify-between">
                       <div>
                          <div className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mb-2">{cur.status}</div>
                          <h3 className="text-xl font-black uppercase tracking-tight">{cur.title}</h3>
                          <p className="text-xs text-slate-400 font-medium mt-1">Last edited {cur.lastEdit}</p>
                       </div>
                       <button className="bg-slate-50 text-botanical-950 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all">Edit Framework</button>
                    </div>
                  ))}
               </div>
               <button className="mt-8 bg-emerald-500 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-3">
                  <Plus className="w-4 h-4" />
                  <span>Create New Curriculum</span>
               </button>
            </div>
          ) : activeView === 'monitor' ? (
            <div className="max-w-6xl mx-auto py-12">
               <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Simulation Monitor</h2>
               <div className="bg-white rounded-[32px] border border-slate-200 overflow-hidden">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="bg-slate-50 border-b border-slate-100">
                           <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Scholar</th>
                           <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Lab Instance</th>
                           <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Live Metric</th>
                           <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Action</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100 text-[10px] font-black uppercase tracking-widest">
                        {[
                          { scholar: 'Julianne M.', lab: 'Crisis Management', metric: 'Strategic Rigor: 92/100', status: 'Active' },
                          { scholar: 'Marcus C.', lab: 'Startup Launch', metric: 'Runway: 18 Months', status: 'Terminated' },
                          { scholar: 'Amara D.', lab: 'Growth & Scaling', metric: 'Market Share: 24%', status: 'Active' }
                        ].map((row, i) => (
                           <tr key={i} className="hover:bg-slate-50 transition-colors">
                              <td className="px-8 py-6 text-slate-900">{row.scholar}</td>
                              <td className="px-8 py-6 text-slate-500">{row.lab}</td>
                              <td className="px-8 py-6 text-emerald-500">{row.metric}</td>
                              <td className="px-8 py-6">
                                 <button className="text-emerald-500 border border-emerald-100 bg-emerald-50 px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white transition-all">Intercept Session</button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          ) : activeView === 'registry' ? (
             <div className="max-w-6xl mx-auto py-12">
               <h2 className="text-3xl font-black text-botanical-900 tracking-tighter mb-12 uppercase">Scholar Registry</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {['Julianne Moore', 'Marcus Chen', 'Amara Diop', 'Sade Adu', 'Fela Kuti', 'Chinua Achebe'].map((name, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center space-x-6 hover:shadow-xl transition-all group">
                       <div className="w-16 h-16 rounded-2xl bg-slate-100 overflow-hidden flex-shrink-0 grayscale">
                          <img src={`https://i.pravatar.cc/150?u=${name}`} alt={name} className="w-full h-full object-cover" />
                       </div>
                       <div className="flex-grow">
                          <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight leading-none mb-2">{name}</h4>
                          <p className="text-[10px] font-black uppercase text-emerald-500">Scholar ID: #ABC-2026-00{i+1}</p>
                       </div>
                    </div>
                  ))}
               </div>
             </div>
          ) : activeView === 'research' ? (
            <div className="max-w-4xl mx-auto py-12">
               <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Research & Assets</h2>
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'Sovereign Strategic Frameworks', type: 'PDF • Whitepaper', downloads: '1.2K' },
                    { title: 'Pan-African Market Patterns 2026', type: 'Dataset • CSV', downloads: '450' },
                    { title: 'Institutional Resilience Model', type: 'Simulation • Executable', downloads: '890' }
                  ].map((asset, i) => (
                    <div key={i} className="bg-white p-8 rounded-[32px] border border-slate-100 flex items-center justify-between">
                       <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500">
                             <FileText className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-black uppercase tracking-tight">{asset.title}</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asset.type} • {asset.downloads} downloads</p>
                          </div>
                       </div>
                       <button className="p-3 bg-slate-50 text-botanical-950 rounded-xl hover:bg-botanical-950 hover:text-white transition-all">
                          <FileDown className="w-5 h-5" />
                       </button>
                    </div>
                  ))}
               </div>
            </div>
          ) : activeView === 'calendar' ? (
            <div className="max-w-6xl mx-auto py-12">
               <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-12 uppercase">Academic Calendar</h2>
               <div className="grid grid-cols-7 gap-4 bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map( day => (
                    <div key={day} className="text-center pb-8 text-[10px] font-black uppercase tracking-widest text-slate-400">{day}</div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => (
                    <div key={i} className={`aspect-square rounded-2xl bg-white border border-slate-100 p-3 flex flex-col justify-between hover:border-emerald-500 transition-all cursor-pointer shadow-sm ${i === 11 || i === 18 ? 'border-emerald-500 ring-4 ring-emerald-500/10' : ''}`}>
                       <span className="text-[10px] font-black text-slate-900">{i+1}</span>
                       {(i === 11) && <div className="w-2 h-2 bg-emerald-500 rounded-full mx-auto" />}
                       {(i === 18) && <div className="w-2 h-2 bg-indigo-500 rounded-full mx-auto" />}
                    </div>
                  ))}
               </div>
            </div>
          ) : activeView === 'governance' ? (
             <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Governance Ink</h2>
                <div className="bg-botanical-950 p-12 rounded-[48px] text-white relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-10">
                      <MessageSquare className="w-32 h-32 text-emerald-500" />
                   </div>
                   <h3 className="text-2xl font-black uppercase mb-6 text-emerald-500">Board Decisions & Directives</h3>
                   <div className="space-y-8">
                      {[
                        { date: 'OCT 24', title: 'Institutional Expansion Directive #22', desc: 'Approved strategy for East African market entry.' },
                        { date: 'SEP 12', title: 'Curriculum Standardization Protocol', desc: 'New standards for high-fidelity simulation labs.' }
                      ].map((item, i) => (
                        <div key={i} className="border-l-2 border-emerald-500/30 pl-8 py-2">
                           <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">{item.date}</div>
                           <h4 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h4>
                           <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                   <button className="mt-12 bg-white text-botanical-950 px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all">Access Governance Vault</button>
                </div>
             </div>
          ) : (
            <div className="max-w-2xl mx-auto py-12">
              <h2 className="text-3xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Faculty Preferences</h2>
              <div className="space-y-12">
                  <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security & Authentication</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-8 bg-slate-50 rounded-3xl">
                          <div>
                            <div className="text-sm font-black text-botanical-950 uppercase tracking-tight">Institutional MFA</div>
                            <p className="text-[10px] text-slate-500 font-medium mt-1">Multi-factor authentication required for session interception.</p>
                          </div>
                          <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end">
                            <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <button onClick={handleLogout} className="flex items-center space-x-3 text-red-500 text-[10px] font-black uppercase tracking-widest hover:text-red-600 transition-all font-bold">
                        <LogOut className="w-4 h-4" />
                        <span>System Exit</span>
                    </button>
                  </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
