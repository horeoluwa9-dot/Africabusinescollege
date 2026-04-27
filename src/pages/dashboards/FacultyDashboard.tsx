
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  Monitor, 
  FileCheck, 
  TrendingUp, 
  MessageSquare, 
  Settings,
  Search,
  Bell,
  ChevronRight,
  MoreVertical,
  Plus,
  ArrowRight,
  Filter,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Clock,
  LogOut,
  Mail,
  User,
  ShieldCheck,
  Zap,
  Award,
  Globe,
  Rocket
} from 'lucide-react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line
} from 'recharts';
import { useLanguage } from '../../contexts/LanguageContext';
import { Page } from '../../components/Layout';
import { useAuth } from '../../contexts/AuthContext';
import { cn } from '../../lib/utils';

// --- Types ---
type FacultyView = 
  | 'overview' 
  | 'cohorts' 
  | 'cohort-details' 
  | 'students' 
  | 'student-profile' 
  | 'simulations' 
  | 'submissions' 
  | 'performance' 
  | 'messages' 
  | 'settings'
  | 'notifications';

interface DashboardProps {
  onPageChange: (page: Page, id?: string) => void;
}

// --- Mock Data ---

const METRICS = [
  { label: 'Total Students', value: '1,240', trend: '+12%', icon: Users },
  { label: 'Active Cohorts', value: '24', trend: '+3', icon: ShieldCheck },
  { label: 'Sims in Progress', value: '84', trend: 'In Loop', icon: Monitor },
  { label: 'Pending Reviews', value: '18', trend: 'Priority', icon: AlertCircle },
];

const COHORTS = [
  { id: 'vc-lag-24', name: 'VC Lagos 2024', students: 45, progress: 65, nextSession: 'Tomorrow, 10:00 AM' },
  { id: 'pm-nai-24', name: 'Product Nairobi 2024', students: 32, progress: 42, nextSession: 'Monday, 2:00 PM' },
  { id: 'fs-acc-24', name: 'Finance Accra 2024', students: 28, progress: 88, nextSession: 'Wednesday, 9:00 AM' },
];

const STUDENTS = [
  { id: '1', name: 'Kofi Mensah', program: 'Venture Leadership', score: 94, status: 'On track', trend: 'up' },
  { id: '2', name: 'Sarah Alabi', program: 'Market Expansion', score: 88, status: 'On track', trend: 'stable' },
  { id: '3', name: 'James Okoro', program: 'Strategic Finance', score: 62, status: 'Needs attention', trend: 'down' },
  { id: '4', name: 'Amara Diop', program: 'Venture Leadership', score: 91, status: 'On track', trend: 'up' },
];

const RECENT_ACTIVITY = [
  { id: 1, user: 'Kofi Mensah', action: 'completed Entrepreneurship Simulation', time: '2 mins ago' },
  { id: 2, user: 'Sarah Alabi', action: 'submitted Strategy Assignment', time: '1 hour ago' },
  { id: 3, user: 'System', action: 'Cohort VC-LAG-24 milestone reached', time: '3 hours ago' },
];

const SUBMISSIONS = [
  { id: 'sub-1', student: 'Kofi Mensah', type: 'Simulation Report', date: 'Oct 24, 2024' },
  { id: 'sub-2', student: 'Sarah Alabi', type: 'Assignment: Market Entry', date: 'Oct 23, 2024' },
  { id: 'sub-3', student: 'James Okoro', type: 'Risk Analysis', date: 'Oct 23, 2024' },
];

const SKILL_DATA = [
  { subject: 'Strategy', A: 120, fullMark: 150 },
  { subject: 'Execution', A: 98, fullMark: 150 },
  { subject: 'Finance', A: 86, fullMark: 150 },
  { subject: 'Leadership', A: 99, fullMark: 150 },
  { subject: 'Risk', A: 85, fullMark: 150 },
  { subject: 'Market', A: 110, fullMark: 150 },
];

const NOTIFICATIONS = [
  { id: 1, type: 'simulation', title: 'Simulation Results Ready', desc: 'Results for Cohort VC-LAG-24 are now available for review.', time: '2 mins ago', unread: true },
  { id: 2, type: 'updates', title: 'Application Update', desc: 'New student application received from Lagos Hub.', time: '1 hour ago', unread: true },
  { id: 3, type: 'cohort', title: 'New Cohort Session Scheduled', desc: 'Advanced Unit Economics session added to schedule.', time: '3 hours ago', unread: false },
  { id: 4, type: 'system', title: 'Institutional Alert', desc: 'All student records have been backed up successfully.', time: '1 day ago', unread: false },
];

// --- Sub-Components ---

const StatCard = ({ label, value, trend, icon: Icon, delay = 0 }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
        <Icon className="w-6 h-6" />
      </div>
      <span className={cn(
        "text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full",
        trend.startsWith('+') || trend === 'Priority' ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400"
      )}>
        {trend}
      </span>
    </div>
    <div className="text-4xl font-black text-botanical-950 tracking-tighter mb-1">{value}</div>
    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</div>
  </motion.div>
);

const SectionHeader = ({ title, subtitle, cta, onCtaClick }: any) => (
  <div className="flex justify-between items-end mb-10">
    <div>
      <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase">{title}</h2>
      {subtitle && <p className="text-sm text-slate-400 font-medium mt-1">{subtitle}</p>}
    </div>
    {cta && (
      <button 
        onClick={onCtaClick}
        className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-emerald-600 transition-colors flex items-center space-x-2"
      >
        <span>{cta}</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    )}
  </div>
);

// --- Main Page ---

export const FacultyDashboard = ({ onPageChange }: DashboardProps) => {
  const { user, logout, isLoggedIn } = useAuth();
  const [activeView, setActiveView] = useState<FacultyView>('overview');
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [selectedCohort, setSelectedCohort] = useState<any>(null);

  useEffect(() => {
    if (!isLoggedIn) {
      onPageChange('home');
    }
  }, [isLoggedIn, onPageChange]);

  const handleLogout = () => {
    logout();
    onPageChange('home');
  };

  const navItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'cohorts', label: 'Cohorts', icon: Users },
    { id: 'students', label: 'Students', icon: User },
    { id: 'simulations', label: 'Simulations', icon: Monitor },
    { id: 'submissions', label: 'Submissions', icon: FileCheck },
    { id: 'performance', label: 'Performance', icon: TrendingUp },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderView = () => {
    switch (activeView) {
      case 'overview':
        return (
          <div className="space-y-16">
            <SectionHeader title="Faculty Overview" subtitle="High-level performance signals across the ABC ecosystem." />
            
            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {METRICS.map((m, i) => (
                <StatCard key={i} {...m} delay={i * 0.1} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Cohort Snapshot */}
              <div className="lg:col-span-8">
                <SectionHeader 
                  title="Cohort Activity" 
                  cta="View All Cohorts" 
                  onCtaClick={() => setActiveView('cohorts')} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {COHORTS.map((c, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
                      onClick={() => {
                        setSelectedCohort(c);
                        setActiveView('cohort-details');
                      }}
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                          <Users className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-1">Next Session</div>
                          <div className="text-[10px] font-black text-emerald-500 uppercase">{c.nextSession}</div>
                        </div>
                      </div>
                      <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight mb-2">{c.name}</h3>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">{c.students} Students Enrolled</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-slate-400">
                          <span>Overall Progress</span>
                          <span>{c.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${c.progress}%` }} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Recent Activity Feed */}
              <div className="lg:col-span-4">
                <SectionHeader title="Recent Activity" />
                <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 space-y-8">
                  {RECENT_ACTIVITY.map((act, i) => (
                    <div key={i} className="flex space-x-4 relative">
                      {i !== RECENT_ACTIVITY.length - 1 && (
                        <div className="absolute left-[9px] top-6 w-[2px] h-10 bg-slate-200" />
                      )}
                      <div className="w-5 h-5 rounded-full bg-emerald-500 border-4 border-white shadow-sm shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-slate-700 leading-snug">
                          <span className="font-black text-botanical-950 uppercase tracking-tight mr-1">{act.user}</span>
                          {act.action}
                        </p>
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{act.time}</span>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors border-t border-slate-200 mt-4">View All Logs</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Performance Insights */}
              <div>
                <SectionHeader 
                  title="Performance Insights" 
                  subtitle="Focus on top performance and at-risk students"
                  cta="Full Analytics"
                  onCtaClick={() => setActiveView('performance')}
                />
                <div className="bg-white rounded-[40px] border border-slate-100 shadow-sm overflow-hidden">
                  <div className="divide-y divide-slate-50">
                    {STUDENTS.map((s, i) => (
                      <div 
                        key={i} 
                        className="p-6 flex items-center justify-between hover:bg-slate-50 transition-all cursor-pointer group"
                        onClick={() => {
                          setSelectedStudent(s);
                          setActiveView('student-profile');
                        }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-2xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200 shadow-sm grayscale group-hover:grayscale-0 transition-all">
                            <img src={`https://i.pravatar.cc/100?u=${s.id}`} alt={s.name} referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-botanical-950 uppercase tracking-tight">{s.name}</h4>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.program}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-8">
                          <div className="text-right">
                            <div className="text-lg font-black text-botanical-950">{s.score}%</div>
                            <div className={cn(
                              "text-[8px] font-black uppercase tracking-widest",
                              s.status === 'On track' ? "text-emerald-500" : "text-amber-500"
                            )}>{s.status}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pending Reviews */}
              <div>
                <SectionHeader 
                  title="Pending Reviews" 
                  cta="Submission Portal"
                  onCtaClick={() => setActiveView('submissions')}
                />
                <div className="space-y-4">
                  {SUBMISSIONS.map((sub, i) => (
                    <div key={i} className="bg-white p-6 rounded-[32px] border border-slate-100 flex items-center justify-between hover:shadow-lg transition-all">
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950">
                          <FileCheck className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{sub.type}</h4>
                          <p className="text-sm font-black text-botanical-950 uppercase tracking-tight">{sub.student}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6">
                        <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{sub.date}</span>
                        <button className="bg-botanical-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-lg shadow-botanical-950/10">Review</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'cohorts':
        return (
          <div className="space-y-12">
            <SectionHeader title="Active Cohorts" subtitle="Manage your institutional cohort density and progression." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...COHORTS, ...COHORTS].map((c, i) => (
                <div key={i} className="bg-white p-10 rounded-[48px] border border-slate-100 shadow-sm hover:shadow-2xl transition-all group flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-14 h-14 bg-botanical-950 text-white rounded-3xl flex items-center justify-center group-hover:bg-emerald-500 transition-all">
                        <Users className="w-8 h-8" />
                      </div>
                      <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">
                        <MoreVertical className="w-5 h-5 text-slate-400" />
                      </button>
                    </div>
                    <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-2">{c.name}</h3>
                    <p className="text-sm text-slate-400 font-medium mb-12">Academic cycle focusing on high-growth market strategy and institutional resilience.</p>
                  </div>
                  <div className="space-y-8">
                    <div className="flex items-center space-x-12">
                       <div>
                          <div className="text-2xl font-black text-botanical-950">{c.students}</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Enrolled Scholars</div>
                       </div>
                       <div>
                          <div className="text-2xl font-black text-emerald-500">{c.progress}%</div>
                          <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Global Progress</div>
                       </div>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedCohort(c);
                        setActiveView('cohort-details');
                      }}
                      className="w-full py-5 bg-slate-50 text-botanical-950 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all shadow-sm"
                    >
                      Manage Cohort Node
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cohort-details':
        return (
          <div className="space-y-12 pb-24">
            <div className="flex items-center space-x-6 mb-12">
               <button onClick={() => setActiveView('cohorts')} className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all">
                 <Search className="w-5 h-5 rotate-180" />
               </button>
               <div>
                  <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase">{selectedCohort?.name || 'Cohort Overview'}</h2>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Active Academic Node</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full" />
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Node ID: VC-LAG-2024</span>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 space-y-12">
                  <div className="bg-white rounded-[48px] border border-slate-200 shadow-sm overflow-hidden">
                     <div className="p-10 border-b border-slate-100 flex items-center justify-between">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scholar Roster</h4>
                        <div className="flex items-center space-x-4">
                           <div className="relative">
                              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-400" />
                              <input type="text" placeholder="Search roster..." className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs w-48 focus:bg-white transition-all outline-none" />
                           </div>
                           <button className="p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-400 hover:text-botanical-950 transition-all">
                             <Filter className="w-4 h-4" />
                           </button>
                        </div>
                     </div>
                     <div className="divide-y divide-slate-100">
                        {STUDENTS.map((s, i) => (
                          <div key={i} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-all group">
                             <div className="flex items-center space-x-6">
                                <div className="w-14 h-14 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 grayscale group-hover:grayscale-0 transition-all">
                                   <img src={`https://i.pravatar.cc/150?u=${s.id}`} alt={s.name} referrerPolicy="no-referrer" />
                                </div>
                                <div className="space-y-1">
                                   <h5 className="text-lg font-black text-botanical-950 uppercase tracking-tight">{s.name}</h5>
                                   <div className="flex items-center space-x-3">
                                      <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Engagement: High</span>
                                      <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                      <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Attendance: 100%</span>
                                   </div>
                                </div>
                             </div>
                             <div className="flex items-center space-x-12">
                                <div className="text-right">
                                   <div className="text-xl font-black text-botanical-950 text-right">{s.score}%</div>
                                   <div className="text-[8px] font-black uppercase text-slate-400">Progression</div>
                                </div>
                                <button 
                                  onClick={() => {
                                    setSelectedStudent(s);
                                    setActiveView('student-profile');
                                  }}
                                  className="p-4 bg-slate-50 rounded-xl text-slate-400 hover:text-emerald-500 group-hover:bg-white group-hover:shadow-lg transition-all"
                                >
                                   <ArrowRight className="w-5 h-5" />
                                </button>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-4 space-y-12">
                  <div className="bg-botanical-950 p-10 rounded-[48px] text-white">
                      <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-8">Node Governance</h4>
                      <div className="space-y-6">
                         <button className="w-full bg-white text-botanical-950 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-black/20">Message Cohort</button>
                         <button className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Schedule Session</button>
                         <button className="w-full bg-white/5 border border-white/10 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">Bulk Export Data</button>
                      </div>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-[40px] p-10">
                     <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Attendance Momentum</h4>
                     <div className="space-y-8">
                        <div>
                           <div className="flex justify-between text-[10px] font-black text-botanical-950 uppercase tracking-tight mb-2">
                             <span>Current Week</span>
                             <span>98%</span>
                           </div>
                           <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500" style={{ width: '98%' }} />
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-[10px] font-black text-botanical-950 uppercase tracking-tight mb-2">
                             <span>Cohort Average</span>
                             <span>94%</span>
                           </div>
                           <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500" style={{ width: '94%' }} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'student-profile':
        return (
          <div className="space-y-12 pb-24">
            <div className="flex items-center space-x-6 mb-12">
               <button onClick={() => setActiveView('overview')} className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 transition-all">
                 <Search className="w-5 h-5 rotate-180" />
               </button>
               <div>
                  <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase">Scholar Profile</h2>
                  <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1">Deep Intelligence Record — 2024 Cycle</div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-4 space-y-12">
                  <div className="bg-white p-10 rounded-[48px] border border-slate-200 text-center shadow-sm">
                     <div className="w-32 h-32 bg-slate-100 rounded-[40px] border-4 border-white shadow-2xl mx-auto mb-8 overflow-hidden">
                        <img src={`https://i.pravatar.cc/300?u=${selectedStudent?.id || '1'}`} alt="Student" referrerPolicy="no-referrer" />
                     </div>
                     <h3 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-2">{selectedStudent?.name || 'Kofi Mensah'}</h3>
                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">{selectedStudent?.program || 'Venture Leadership'}</p>
                     
                     <div className="grid grid-cols-2 gap-4 mb-10">
                        <div className="bg-slate-50 p-6 rounded-3xl">
                           <div className="text-2xl font-black text-botanical-950">94%</div>
                           <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Global Score</div>
                        </div>
                        <div className="bg-emerald-50 p-6 rounded-3xl">
                           <div className="text-2xl font-black text-emerald-600">A+</div>
                           <div className="text-[8px] font-black text-emerald-600 uppercase tracking-widest">Risk Index</div>
                        </div>
                     </div>

                     <div className="space-y-4">
                        <button className="w-full bg-botanical-950 text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Send Direct Feedback</button>
                        <button className="w-full bg-slate-50 text-slate-400 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-red-50 hover:text-red-500 transition-all">Flag for Institutional Review</button>
                     </div>
                  </div>

                  <div className="bg-botanical-950 p-10 rounded-[48px] text-white overflow-hidden relative group">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#10b981_0%,transparent_70%)] opacity-20" />
                     <div className="relative z-10">
                        <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-8">Skill Radar chart</h4>
                        <div className="h-64 -mx-10 scale-110">
                           <ResponsiveContainer width="100%" height="100%">
                              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                                 <PolarGrid stroke="#ffffff20" />
                                 <PolarAngleAxis dataKey="subject" tick={{ fill: '#ffffff60', fontSize: 8, fontVariant: 'all-small-caps', fontWeight: 900 }} />
                                 <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                 <Radar name="Skills" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                              </RadarChart>
                           </ResponsiveContainer>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-8 space-y-12">
                  <SectionHeader title="Simulation Performance Record" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                        { name: 'Crisis Resilience Lab', score: 92, status: 'Distinction' },
                        { name: 'Market Entry: Lagos', score: 88, status: 'Exceeds Expectations' },
                        { name: 'Financial Scaling Lab', score: 95, status: 'Distinction' },
                        { name: 'Boardroom Strategy', score: 84, status: 'On Track' }
                     ].map((sim, i) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] border border-slate-100 flex items-center justify-between shadow-sm hover:shadow-xl hover:translate-y-[-2px] transition-all">
                           <div>
                              <h5 className="text-xl font-black text-botanical-950 uppercase tracking-tighter mb-1">{sim.name}</h5>
                              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{sim.status}</div>
                           </div>
                           <div className="text-3xl font-black text-botanical-950">{sim.score}%</div>
                        </div>
                     ))}
                  </div>

                  <SectionHeader title="Submission History" />
                  <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm">
                     {SUBMISSIONS.slice(0, 4).map((sub, i) => (
                        <div key={i} className="p-8 flex items-center justify-between border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-all">
                           <div className="flex items-center space-x-6">
                              <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center">
                                 <FileCheck className="w-5 h-5" />
                              </div>
                              <div>
                                 <h6 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{sub.date}</h6>
                                 <p className="text-sm font-black text-botanical-950 uppercase tracking-tight">{sub.type}</p>
                              </div>
                           </div>
                           <button className="text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-botanical-950 transition-colors">Review Full Pack</button>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        );

      case 'simulations':
        return (
          <div className="space-y-12 pb-24">
            <SectionHeader title="Simulation Oversight" subtitle="Global analytics and participation metrics for academic labs." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {[
                 { name: 'Entrepreneurship Lab', participation: '94%', avgScore: '82%', status: 'Active' },
                 { name: 'Crisis Management', participation: '88%', avgScore: '76%', status: 'Active' },
                 { name: 'Market Expansion', participation: '91%', avgScore: '85%', status: 'Maintenance' },
                 { name: 'Leadership Resilience', participation: '100%', avgScore: '92%', status: 'Active' },
                 { name: 'Strategic Finance', participation: '84%', avgScore: '78%', status: 'Active' },
                 { name: 'Consumer Behavior', participation: '72%', avgScore: '74%', status: 'Draft' }
               ].map((sim, i) => (
                 <div key={i} className="bg-white p-10 rounded-[48px] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden">
                    <div className={cn(
                      "absolute top-6 right-6 px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest",
                      sim.status === 'Active' ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-400"
                    )}>
                      {sim.status}
                    </div>
                    <div className="w-16 h-16 bg-slate-50 rounded-[28px] border border-slate-100 flex items-center justify-center text-botanical-950 mb-8 group-hover:bg-botanical-950 group-hover:text-white transition-all duration-500">
                       <Monitor className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-8 leading-tight">{sim.name}</h3>
                    <div className="grid grid-cols-2 gap-8 mb-10">
                       <div>
                          <div className="text-2xl font-black text-botanical-950">{sim.participation}</div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Participation</div>
                       </div>
                       <div>
                          <div className="text-2xl font-black text-emerald-500">{sim.avgScore}</div>
                          <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Avg. Score</div>
                       </div>
                    </div>
                    <button className="w-full bg-slate-50 text-botanical-950 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-botanical-950 hover:text-white transition-all">Detailed Analytics</button>
                 </div>
               ))}
            </div>
          </div>
        );

      case 'submissions':
        return (
          <div className="space-y-12 pb-24">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                <SectionHeader title="Review Submissions" subtitle="Approve outcomes and provide strategic feedback." />
                <div className="flex items-center space-x-4 bg-slate-50 p-2 rounded-2xl border border-slate-200 self-start md:self-auto">
                   {['All Nodes', 'Venture Leadership', 'Strategic Finance'].map((f) => (
                     <button key={f} className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors whitespace-nowrap">{f}</button>
                   ))}
                </div>
             </div>

             <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm">
                <div className="divide-y divide-slate-100">
                   {[...SUBMISSIONS, ...SUBMISSIONS, ...SUBMISSIONS].map((sub, i) => (
                     <div key={i} className="p-8 flex items-center justify-between hover:bg-slate-50 transition-all group">
                        <div className="flex items-center space-x-8">
                           <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-botanical-950 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                              <FileCheck className="w-6 h-6" />
                           </div>
                           <div>
                              <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-1">{sub.student}</h4>
                              <div className="flex items-center space-x-3">
                                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{sub.type}</span>
                                 <span className="w-1 h-1 bg-slate-200 rounded-full" />
                                 <span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Submitted: {sub.date}</span>
                              </div>
                           </div>
                        </div>
                        <div className="flex items-center space-x-6">
                           <button className="px-8 py-4 bg-botanical-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all shadow-xl shadow-botanical-950/10">Open Review Panel</button>
                           <button className="p-4 text-slate-300 hover:text-slate-900 transition-all">
                             <MoreVertical className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        );

      case 'messages':
        return (
          <div className="h-full flex flex-col">
            <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-6">Faculty Messaging</h2>
            <div className="flex-grow flex bg-slate-50 rounded-[48px] border border-slate-100 overflow-hidden shadow-inner">
               <div className="w-96 border-r border-slate-200 bg-white p-8 space-y-8 overflow-y-auto">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                    <input type="text" placeholder="Search conversations..." className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs outline-none focus:bg-white transition-all" />
                  </div>
                  <div className="space-y-4">
                     {[
                       { name: 'Kofi Mensah', msg: 'The simulation logic was complex...', time: '5m', unread: true },
                       { name: 'Amara Diop', msg: 'Need feedback on my Series A deck.', time: '1h', unread: true },
                       { name: 'James Okoro', msg: 'Rescheduling session check-in.', time: '2h', unread: false },
                       { name: 'Sarah Alabi', msg: 'Submitted report for Unit 4.', time: '1d', unread: false }
                     ].map((chat, i) => (
                       <div key={i} className={cn(
                        "p-6 rounded-3xl border transition-all cursor-pointer group",
                        chat.unread ? "bg-white border-emerald-500/20 shadow-md" : "bg-transparent border-transparent hover:bg-slate-50"
                       )}>
                          <div className="flex items-center justify-between mb-2">
                             <h4 className="text-sm font-black text-botanical-950 uppercase tracking-tight">{chat.name}</h4>
                             <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{chat.time} ago</span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium line-clamp-1 group-hover:text-botanical-950 transition-colors">{chat.msg}</p>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="flex-grow flex flex-col bg-white">
                  <div className="p-8 border-b border-slate-200 flex items-center justify-between bg-slate-50/50">
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-200" />
                        <div>
                           <h4 className="text-sm font-black text-botanical-950 uppercase tracking-tight">Kofi Mensah</h4>
                           <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Online — Cohort VC-LAG-24</span>
                        </div>
                     </div>
                     <div className="flex items-center space-x-4">
                        <button className="p-3 text-slate-400 hover:text-botanical-950 transition-all rounded-xl border border-transparent hover:border-slate-200">
                           <Clock className="w-5 h-5" />
                        </button>
                        <button className="bg-botanical-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Send Message</button>
                     </div>
                  </div>
                  <div className="flex-grow p-12 space-y-12 overflow-y-auto">
                     <div className="flex justify-center">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">October 24, 2024</span>
                     </div>
                     <div className="flex justify-start">
                        <div className="max-w-md bg-slate-100 p-6 rounded-t-[28px] rounded-br-[28px] text-sm font-medium text-slate-700 leading-relaxed shadow-sm">
                           The simulation logic was complex but very rewarding. I'm having small issues with the cash flow projection model in Year 3. Any guidance?
                        </div>
                     </div>
                     <div className="flex justify-end">
                        <div className="max-w-md bg-emerald-500 text-white p-6 rounded-t-[28px] rounded-bl-[28px] text-sm font-medium leading-relaxed shadow-xl shadow-emerald-500/20">
                           Excellent work on the initial rollout. For Year 3, ensure you are accounting for the 15% localization overhead common in Lagos tech hubs.
                        </div>
                     </div>
                  </div>
                  <div className="p-10 border-t border-slate-100">
                     <div className="relative">
                        <input type="text" placeholder="Draft organizational response..." className="w-full p-6 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:bg-white transition-all outline-none" />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-botanical-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Send</button>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <h2 className="text-3xl font-black text-botanical-950 tracking-tighter uppercase mb-12">Faculty Control Hub</h2>
            
            <div className="space-y-12">
               <div className="p-12 bg-white border border-slate-200 rounded-[48px] shadow-sm">
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-10">Institutional Account</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Faculty Name</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-sm font-bold focus:border-emerald-500 outline-none" defaultValue={user?.name || "Dr. Elena Diop"} />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Institutional Email</label>
                       <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-8 py-5 text-sm font-bold focus:border-emerald-500 outline-none" defaultValue={user?.email || "elena.diop@abc.edu"} />
                    </div>
                  </div>
                  <button className="bg-botanical-950 text-white px-12 py-5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 transition-all">Update Control Profile</button>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white border border-slate-200 rounded-[40px] p-10">
                     <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Notification Nodes</h4>
                     <div className="space-y-6">
                        {['Submission Alerts', 'Sim Lab Intercepts', 'Cohort Messages'].map((label) => (
                           <div key={label} className="flex items-center justify-between">
                              <span className="text-xs font-black uppercase tracking-tight text-botanical-950">{label}</span>
                              <div className="w-12 h-6 bg-emerald-500 rounded-full p-1 cursor-pointer flex justify-end"><div className="w-4 h-4 bg-white rounded-full shadow-sm" /></div>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="bg-white border border-slate-200 rounded-[40px] p-10">
                     <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-8">Security Layer</h4>
                     <div className="space-y-6">
                        <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">Reset Control Password</button>
                        <button className="w-full py-4 text-[10px] font-black uppercase tracking-widest text-red-500 bg-red-50 rounded-xl hover:bg-red-100 transition-all">Revoke All Instance Keys</button>
                     </div>
                  </div>
               </div>

               <div className="pt-12 border-t border-slate-200 flex items-center justify-between">
                  <button onClick={handleLogout} className="flex items-center space-x-3 text-slate-400 hover:text-red-500 transition-all font-black uppercase text-[10px] tracking-widest">
                    <LogOut className="w-5 h-5" />
                    <span>Terminate Control Session</span>
                  </button>
                  <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest">Core Version 2.4.0 • ABC Institutional Governance</p>
               </div>
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="max-w-4xl mx-auto py-12">
            <SectionHeader title="Institutional Notifications" subtitle="Chronological log of academic and operational signals." />
            <div className="space-y-4">
              {NOTIFICATIONS.map((notif, i) => (
                <div 
                  key={i} 
                  onClick={() => {
                    if (notif.type === 'simulation') setActiveView('submissions');
                    if (notif.type === 'cohort') setActiveView('cohorts');
                    if (notif.type === 'updates') setActiveView('submissions');
                  }}
                  className={cn(
                    "p-8 rounded-[32px] border transition-all cursor-pointer group hover:shadow-xl",
                    notif.unread ? "bg-white border-emerald-500/20 shadow-md" : "bg-slate-50/50 border-slate-100"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-6">
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0",
                        notif.unread ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-400"
                      )}>
                        {notif.type === 'simulation' ? <Monitor className="w-6 h-6" /> : 
                         notif.type === 'cohort' ? <Users className="w-6 h-6" /> : 
                         notif.type === 'system' ? <ShieldCheck className="w-6 h-6" /> : <Bell className="w-6 h-6" />}
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-1 group-hover:text-emerald-500 transition-colors">{notif.title}</h4>
                        <p className="text-sm text-slate-500 font-medium mb-3">{notif.desc}</p>
                        <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{notif.time}</div>
                      </div>
                    </div>
                    {notif.unread && <div className="w-2 h-2 bg-emerald-500 rounded-full" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>View not implemented</div>;
    }
  };

  return (
    <div className="flex h-screen bg-white text-slate-900 font-sans overflow-hidden">
      {/* Sidebar - Control Center Style */}
      <aside className="w-72 bg-slate-50 border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-8">
          <div 
            className="cursor-pointer group flex items-center space-x-4 mb-12"
            onClick={() => onPageChange('home')}
          >
            <div className="w-12 h-12 bg-botanical-950 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl shadow-botanical-950/20">
                <ShieldCheck className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-base font-black tracking-tighter text-botanical-950 leading-none">ABC FACULTY</h1>
              <p className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mt-1 italic">Control Center</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as FacultyView)}
                className={cn(
                  "w-full flex items-center space-x-4 px-5 py-4 rounded-[20px] transition-all duration-300 group",
                  activeView === item.id 
                    ? "bg-botanical-950 text-white shadow-xl shadow-botanical-950/10" 
                    : "text-slate-500 hover:bg-white hover:text-botanical-950"
                )}
              >
                <item.icon className={cn(
                  "w-5 h-5",
                  activeView === item.id ? "text-emerald-500" : "text-slate-400 group-hover:text-emerald-500 transition-colors"
                )} />
                <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                {activeView === item.id && (
                  <motion.div layoutId="bubble" className="ml-auto w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-200">
           <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
              <div className="w-10 h-10 rounded-xl bg-botanical-950 flex items-center justify-center text-emerald-500 font-black uppercase text-xs">
                 {user?.name?.substring(0, 2) || 'ED'}
              </div>
              <div className="min-w-0">
                 <div className="text-[10px] font-black text-botanical-950 uppercase truncate">{user?.name || 'Dr. Elena Diop'}</div>
                 <div className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Institutional Lead</div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Panel */}
      <main className="flex-grow flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="h-20 border-b border-slate-100 px-12 flex items-center justify-between bg-white shrink-0">
           <div className="flex items-center space-x-4">
             <div className="bg-slate-50 px-4 py-2 rounded-xl flex items-center space-x-3 border border-slate-100">
               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
               <span className="text-[10px] font-black text-botanical-950 uppercase tracking-widest">Institutional Node: Active</span>
             </div>
           </div>

           <div className="flex items-center space-x-8">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Scan Network..." 
                  className="bg-slate-50 border border-slate-100 rounded-2xl pl-12 pr-6 py-3 text-xs w-72 focus:bg-white focus:border-emerald-500/20 transition-all outline-none shadow-inner"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setActiveView('notifications')}
                  className={cn(
                    "relative p-3 rounded-2xl transition-all",
                    activeView === 'notifications' ? "bg-emerald-500 text-white shadow-lg" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                  )}
                >
                  <Bell className="w-5 h-5" />
                  {NOTIFICATIONS.some(n => n.unread) && (
                    <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                  )}
                </button>
                <button 
                  onClick={() => setActiveView('cohorts')}
                  className="bg-botanical-950 text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-botanical-950/10 hover:bg-emerald-500 transition-all"
                >
                  Cohort Activity
                </button>
                <button onClick={handleLogout} className="p-3 bg-slate-50 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all text-slate-400">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="flex-grow p-12 overflow-y-auto custom-scrollbar bg-white">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeView}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              {renderView()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};
