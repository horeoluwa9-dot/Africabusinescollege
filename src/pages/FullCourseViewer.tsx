import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  BookOpen, 
  PlayCircle,
  FileText,
  CheckCircle2,
  Clock,
  Download,
  Users
} from 'lucide-react';
import { PROGRAMS } from '../constants';

interface FullCourseViewerProps {
  programId: string | null;
  onBack: () => void;
}

export const FullCourseViewer: React.FC<FullCourseViewerProps> = ({ programId, onBack }) => {
  const program = PROGRAMS.find(p => p.id === programId) || PROGRAMS[0];
  const [activeModule, setActiveModule] = React.useState(0);

  return (
    <div className="bg-slate-50 min-h-screen pt-20">
      {/* Top Header */}
      <div className="bg-botanical-950 text-white py-8 px-6 md:px-12 border-b border-white/10 sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <button 
              onClick={onBack}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">
                Active Course
              </div>
              <h1 className="text-2xl font-black uppercase tracking-tighter">{program.title}</h1>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-500" />
              <span>{program.duration}</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>{program.structure.length} Modules</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Video/Content Area */}
          <div className="lg:col-span-8 space-y-8">
            <div className="aspect-video bg-botanical-950 rounded-3xl overflow-hidden relative shadow-2xl group flex items-center justify-center border border-slate-200">
                <img 
                  src={program.image}
                  alt="Pre-recorded session"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-emerald-500/10" />
                <button className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all shadow-xl">
                  <PlayCircle className="w-12 h-12 text-white" />
                </button>
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className="bg-botanical-950/80 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lecture {activeModule + 1}
                  </div>
                </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
              <h2 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-4">
                {typeof program.structure[activeModule] === 'string' ? program.structure[activeModule] : (program.structure[activeModule] as any).title}
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed mb-8 text-lg">
                This module dives deep into resolving real market constraints, building operational resilience, and analyzing competitive forces unique to African scaling dynamics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-500/10 flex items-center justify-center">
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Download Slides</div>
                    <div className="text-xs text-slate-500 font-medium">PDF • 4.2 MB</div>
                  </div>
                </button>
                <button className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-500/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Module Notes</div>
                    <div className="text-xs text-slate-500 font-medium">Review key points</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / Modules List */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden sticky top-48">
              <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <h3 className="font-black text-botanical-950 uppercase tracking-tight">Course Modules</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">
                  {program.structure.length} Parts
                </span>
              </div>
              <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                {program.structure.map((mod, index) => {
                  const isActive = index === activeModule;
                  const isCompleted = index < activeModule;
                  
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveModule(index)}
                      className={`w-full text-left p-6 transition-colors hover:bg-slate-50 ${isActive ? 'bg-emerald-50/50 border-l-4 border-l-emerald-500' : 'border-l-4 border-l-transparent'}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                          {isCompleted ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                          ) : isActive ? (
                            <PlayCircle className="w-5 h-5 text-emerald-600" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-slate-200" />
                          )}
                        </div>
                        <div>
                          <div className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isActive ? 'text-emerald-600' : 'text-slate-400'}`}>
                            Module {index + 1}
                          </div>
                          <div className={`text-sm font-bold uppercase tracking-tight ${isActive ? 'text-botanical-950' : 'text-slate-600'}`}>
                            {typeof mod === 'string' ? mod : mod.title}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
