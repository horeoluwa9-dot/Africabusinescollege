import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Users, 
  Globe, 
  Zap,
  Calendar,
  Award,
  BookOpen,
  Target,
  Rocket,
  Shield,
  Briefcase,
  Activity,
  Cpu,
  ArrowRight,
  ChevronRight,
  FileText
} from 'lucide-react';
import { PROGRAMS } from '../constants';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { downloadMockPdf } from '../lib/downloadPdf';
import { useToast } from '../contexts/ToastContext';

interface ProgramDetailProps {
  programId: string | null;
  onPageChange: (page: Page, id?: string) => void;
  onBack: () => void;
}

export const ProgramDetail = ({ programId, onPageChange, onBack }: ProgramDetailProps) => {
  const { t } = useLanguage();
  const { isLoggedIn, hasImage, isApplied } = useAuth();
  const { showToast } = useToast();

  const containerRef = useRef<HTMLDivElement>(null);
  const program = PROGRAMS.find(p => p.id === programId);

  const handleDownloadProspectus = () => {
    if (!program) return;
    downloadMockPdf(program.title + ' Prospectus');
    showToast('Prospectus Downloaded Successfully');
  };

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-black text-botanical-950 mb-4 uppercase">Program Not Found</h2>
          <button 
            onClick={onBack}
            className="text-emerald-500 font-black uppercase tracking-widest text-[10px] border-b border-emerald-500/30 hover:border-emerald-500 transition-all pb-1"
          >
            Back to Programs
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'gains', title: 'Gains' },
    { id: 'structure', title: 'Structure' },
    { id: 'experience', title: 'Experience' },
    { id: 'simulation', title: 'Simulation' },
    { id: 'tools', title: 'Tools' },
    { id: 'outcomes', title: 'Outcomes' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white min-h-screen" ref={containerRef}>
      {/* SECTION 1: HERO */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 bg-botanical-950 overflow-hidden min-h-[60vh] flex flex-col justify-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={program.image} 
            alt={program.title} 
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-botanical-950 via-botanical-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-10" />
        </div>

        <AnimatedBackground intensity="high" className="opacity-30 z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <button 
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to Programs</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-9">
              {program.badge && (
                <div className="inline-flex items-center space-x-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                  <Zap className="w-3 h-3" />
                  <span>{program.badge}</span>
                </div>
              )}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-6">
                {program.title}
              </h1>
              <p className="text-xl md:text-2xl text-emerald-500 font-black uppercase tracking-tight mb-6">
                {program.subtitle}
              </p>
              <p className="text-lg text-slate-300 font-medium leading-relaxed max-w-2xl mb-10">
                {program.excerpt}
              </p>

              <div className="flex flex-wrap gap-10 mb-10 py-6 border-y border-white/10">
                {[
                  { label: 'Duration', value: program.duration, icon: Clock },
                  { label: 'Level', value: program.level, icon: Target },
                  { label: 'Format', value: program.format, icon: Globe }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="flex items-center space-x-2 mb-1.5">
                      <stat.icon className="w-4 h-4 text-emerald-500" />
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{stat.label}</span>
                    </div>
                    <div className="text-base font-black text-white uppercase tracking-tight">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onPageChange('application')}
                  className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20"
                >
                  Apply Now
                </button>
                <button 
                  onClick={() => scrollToSection('structure')}
                  className="bg-white/10 border border-white/20 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all active:scale-95"
                >
                  View Curriculum
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            {/* SECTION 2: PROGRAM OVERVIEW */}
            <div id="overview" className="mb-32">
              <div className="flex items-center space-x-4 mb-8">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">What This Program Is About</span>
              </div>
              <p className="text-2xl text-botanical-950 font-black leading-tight mb-12">
                {program.overview.content}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {program.overview.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-emerald-500 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-black text-botanical-950 uppercase tracking-tight">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 3: WHAT YOU'LL GAIN */}
            <div id="gains" className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">What You'll Walk Away With</span>
              </div>
              <div className="space-y-4">
                {program.gains.map((gain, i) => (
                  <div key={i} className="flex items-center justify-between p-8 bg-white border border-slate-100 rounded-3xl hover:shadow-xl transition-all group">
                    <div className="flex items-center space-x-6">
                      <span className="text-2xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors">0{i + 1}</span>
                      <h4 className="text-xl font-black text-botanical-950 uppercase tracking-tight">{gain}</h4>
                    </div>
                    <ChevronRight className="w-6 h-6 text-slate-200 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 4: PROGRAM STRUCTURE */}
            <div id="structure" className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Program Structure</span>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {program.structure.map((course, i) => (
                  <div key={i} className="p-8 bg-slate-50 border border-slate-100 rounded-[32px] hover:border-emerald-500 transition-all group cursor-pointer">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                      <div>
                        <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mb-2 block tracking-[0.2em]">{course.duration}</span>
                        <h4 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter">{course.title}</h4>
                      </div>
                      <button 
                        onClick={() => onPageChange('simulation-demo')}
                        className="bg-white border border-slate-200 text-botanical-950 px-6 py-3 text-[8px] font-black uppercase tracking-widest rounded-lg hover:bg-emerald-500 hover:text-white transition-all"
                      >
                        View Course
                      </button>
                    </div>
                    <p className="text-slate-500 font-medium leading-relaxed max-w-2xl">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: LEARNING EXPERIENCE */}
            <div id="experience" className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">How You'll Learn</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {program.learningExperience.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="text-lg font-black text-botanical-950 uppercase tracking-tight leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 6: SIMULATION EXPERIENCE */}
            <div id="simulation" className="mb-32">
              <div className="bg-botanical-950 rounded-[40px] p-12 md:p-20 relative overflow-hidden group">
                <AnimatedBackground intensity="low" className="opacity-20" />
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8 block">Simulation Experience</span>
                  <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-12 max-w-xl leading-none">
                    Practice decision-making <br /><span className="text-emerald-500 italic">before doing it in real life.</span>
                  </h3>
                  <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12 max-w-xl">
                    {program.simulationExperience.content}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {program.simulationExperience.examples.map((example, i) => (
                      <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm group-hover:border-emerald-500/30 transition-all">
                        <Activity className="w-6 h-6 text-emerald-500 mb-4" />
                        <h4 className="text-sm font-black text-white uppercase tracking-tight">{example}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 7: TOOLS & METHODS */}
            <div id="tools" className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Tools You'll Use</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {program.tools.map((tool, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl">
                    <Cpu className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 8: WHO THIS IS FOR */}
            <div className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Who This Program Is For</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: t('home.entrepreneurship'), desc: t('home.entrepreneurshipDesc') },
                  { title: t('home.professionals'), desc: t('home.professionalsDesc') },
                  { title: t('home.founders'), desc: t('home.foundersDesc') },
                  { title: t('home.executives'), desc: t('home.executivesDesc') }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col p-8 border border-slate-100 rounded-[32px] bg-white hover:border-emerald-500/30 transition-all group">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                      <Users className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 9: OUTCOMES */}
            <div id="outcomes" className="mb-32">
              <div className="flex items-center space-x-4 mb-12">
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Outcomes</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {program.outcomes.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight">{item}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SIDEBAR: STICKY ON DESKTOP */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-botanical-950 p-6 md:p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Shield className="w-24 h-24 text-emerald-500" />
                </div>
                
                <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-2 relative z-10">PROGRAM</h3>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-12 relative z-10 leading-relaxed max-w-[85%] break-words hyphens-auto">
                  {program.title}
                </h2>
                
                <div className="space-y-6 mb-12 relative z-10">
                  {[
                    { label: 'Duration', value: program.duration, icon: Clock },
                    { label: 'Level', value: program.level, icon: Target },
                    { label: 'Courses', value: `${program.structure.length} Modules`, icon: BookOpen },
                    { label: 'Format', value: program.format, icon: Globe }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-3.5 h-3.5 text-slate-600" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">{item.label}</span>
                      </div>
                      <span className="text-[10px] font-black text-white uppercase">{item.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-4 mb-12">
                  <div className="flex items-center space-x-3 text-[8px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Includes Simulations</span>
                  </div>
                  <div className="flex items-center space-x-3 text-[8px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Includes Capstone Project</span>
                  </div>
                </div>

                {isLoggedIn && isApplied ? (
                  <button 
                    onClick={() => onPageChange('dashboard-student')}
                    className="w-full bg-emerald-500 text-white py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20 mb-6"
                  >
                    Go to Portal
                  </button>
                ) : (
                  <button 
                    onClick={() => onPageChange('application')}
                    className="w-full bg-emerald-500 text-white py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-xl shadow-emerald-500/20 mb-6"
                  >
                    Apply Now
                  </button>
                )}
                
                <button 
                  onClick={handleDownloadProspectus}
                  className="w-full border border-white/20 text-white py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all active:scale-95 flex items-center justify-center space-x-3"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Prospectus</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: FINAL CTA */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-[0.9]">
            Start Building <br /><span className="text-emerald-500">Your Venture.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium mb-16 max-w-2xl mx-auto">
            Join a cohort of builders and start executing your ideas. The next economic transformation begins with your first decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {isLoggedIn && isApplied ? (
              <button 
                onClick={() => onPageChange('dashboard-student')}
                className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl shadow-emerald-500/40"
              >
                Go to Portal
              </button>
            ) : (
              <button 
                onClick={() => onPageChange('application')}
                className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-2xl shadow-emerald-500/40"
              >
                Apply Now
              </button>
            )}
            <button 
              onClick={() => onPageChange('programs')}
              className="bg-white border border-slate-200 text-botanical-950 px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95"
            >
              Explore Other Programs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
