import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Play, 
  MessageSquare, 
  FileText, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Command,
  Download,
  Share2,
  Lock,
  ChevronRight,
  BookOpen
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { PROGRAMS } from '../constants';

interface ModulePageProps {
  programId: string | null;
  moduleId: number;
  onBack: () => void;
  onComplete: () => void;
}

export const ModulePage: React.FC<ModulePageProps> = ({ programId, moduleId, onBack, onComplete }) => {
  const { t } = useLanguage();
  const program = PROGRAMS.find(p => p.id === programId) || PROGRAMS[0];
  const moduleInfo = program.structure[moduleId] as any;
  const [activeTab, setActiveTab] = useState<'content' | 'discussion' | 'assets'>('content');
  const [isAiPanelOpen, setIsAiPanelOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* Precision Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-500 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="h-6 w-px bg-slate-100" />
          <div>
            <div className="text-[8px] font-black uppercase tracking-widest text-emerald-500 mb-0.5">LEARNING PATH • {program.title}</div>
            <h1 className="text-sm font-black uppercase tracking-tighter text-botanical-950">{moduleInfo?.title || `Module ${moduleId + 1}`}</h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={onComplete}
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            Mark as Finished
          </button>
        </div>
      </nav>

      <div className="pt-24 lg:pt-32 pb-24 max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Arc */}
        <main className="lg:col-span-8 space-y-12">
          {/* Hero Video/Visual Section */}
          <section className="relative aspect-video bg-botanical-950 rounded-[40px] overflow-hidden group border border-slate-100 shadow-2xl">
            <img 
              src={program.image}
              alt="Course Visual"
              className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/80 via-transparent to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white flex items-center justify-center rounded-full hover:scale-110 hover:bg-emerald-500 hover:text-white transition-all shadow-2xl group-hover:bg-opacity-100">
                <Play className="w-8 h-8 ml-1" />
              </button>
            </div>

            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="max-w-md">
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-2">NOW PLAYING</div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">{moduleInfo?.title}</h2>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10">18:24 / 45:00</div>
              </div>
            </div>
          </section>

          {/* Module Description & Tabs */}
          <section className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
            <div className="border-b border-slate-100 flex overflow-x-auto no-scrollbar">
              {(['content', 'discussion', 'assets'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-12 py-6 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeTab === tab ? 'text-botanical-950' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab" className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500" />
                  )}
                </button>
              ))}
            </div>

            <div className="p-12">
              <AnimatePresence mode="wait">
                {activeTab === 'content' ? (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <div className="prose prose-slate max-w-none">
                      <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-6">Learning Objectives</h3>
                      <p className="text-lg text-slate-500 leading-relaxed font-medium mb-8">
                        {moduleInfo?.description || "In this module, we explore the foundational frameworks for building scalable business models in Africa. We'll focus on resolving real market constraints, building operational resilience, and analyzing competitive forces unique to African scaling dynamics."}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        {[
                          "Understanding market fragmentation in West Africa",
                          "Developing cross-border payment integration filters",
                          "Architecting localized talent acquisition strategies",
                          "Analyzing multi-jurisdictional compliance frameworks"
                        ].map((point, i) => (
                          <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                            <span className="text-sm font-black uppercase tracking-tight text-botanical-950">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : activeTab === 'discussion' ? (
                  <motion.div
                    key="discussion"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-8"
                  >
                    <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tighter mb-8 italic">Cohort Discourse</h3>
                    <div className="space-y-6">
                      {[1, 2].map(i => (
                        <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                           <div className="w-12 h-12 bg-slate-200 rounded-2xl shrink-0 overflow-hidden">
                             <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                           </div>
                           <div>
                             <div className="flex items-center gap-3 mb-2">
                               <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Chidi Okafor</span>
                               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">• 2h ago</span>
                             </div>
                             <p className="text-slate-500 font-medium leading-relaxed italic">
                               "How do you factor in the currency volatility when designing the unit economics for this model? I'm finding it difficult to maintain a 30% margin."
                             </p>
                           </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex gap-4">
                      <input 
                        type="text" 
                        placeholder="Join the conversation..." 
                        className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                      <button className="bg-botanical-950 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500">Send</button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="assets"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {[
                      { title: 'Scaling Strategy PDF', size: '2.4 MB', type: 'PDF' },
                      { title: 'Market Analysis Excel', size: '1.8 MB', type: 'XLSX' },
                      { title: 'Compliance Checklist', size: '0.5 MB', type: 'DOCX' },
                      { title: 'Lecture Slides', size: '8.2 MB', type: 'PDF' }
                    ].map((asset, i) => (
                      <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-emerald-500 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <FileText className="w-5 h-5 text-emerald-500" />
                          </div>
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-botanical-950">{asset.title}</div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-slate-400">{asset.size} • {asset.type}</div>
                          </div>
                        </div>
                        <button className="text-slate-300 group-hover:text-emerald-500 transition-colors">
                          <Download className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>
        </main>

        {/* Intelligence Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Module Navigation */}
          <div className="bg-white rounded-[40px] border border-slate-100 overflow-hidden shadow-sm">
             <div className="p-8 border-b border-slate-100 bg-slate-50/50">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-botanical-950">Curriculum Hierarchy</h3>
             </div>
             <div className="p-4 space-y-2">
               {program.structure.map((mod: any, idx) => (
                 <button 
                  key={idx} 
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${idx === moduleId ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-slate-50 text-slate-400'}`}
                 >
                   <div className="flex items-center gap-4">
                     {idx < moduleId ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <div className={`w-4 h-4 rounded-full border-2 ${idx === moduleId ? 'border-emerald-500' : 'border-slate-100'}`} />}
                     <span className="text-[10px] font-black uppercase tracking-widest text-left line-clamp-1">{mod.title || `Module ${idx + 1}`}</span>
                   </div>
                   {idx < moduleId === false && idx !== moduleId && <Lock className="w-3 h-3 opacity-30" />}
                 </button>
               ))}
             </div>
          </div>

          {/* Deliverables Section */}
          <div className="bg-botanical-950 rounded-[40px] p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
              <Command className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-6">Execution Deliverables</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Market Brief</div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black opacity-60">Submitted for grading</p>
                  </div>
                </div>
                <div className="flex gap-4 opacity-50">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-slate-500" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Financial Model</div>
                    <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Requires feedback</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Prompts / Tools */}
          <div className="bg-emerald-500 rounded-[40px] p-8 text-white relative overflow-hidden group cursor-pointer" onClick={() => setIsAiPanelOpen(true)}>
            <Sparkles className="w-8 h-8 mb-4 animate-pulse" />
            <h3 className="text-xl font-black uppercase tracking-tighter leading-none mb-4">AI Studio <br /> Assistant</h3>
            <p className="text-[10px] font-black uppercase tracking-widest opacity-80 leading-relaxed mb-6">
              Use the ABC Intelligence model to analyze your business ideas against real African market data.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white/20 w-fit px-4 py-2 rounded-full backdrop-blur-md">
              <span>Launch Studio</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </div>
        </aside>
      </div>

      {/* AI Studio Slide-over Panel */}
      <AnimatePresence>
        {isAiPanelOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAiPanelOpen(false)}
              className="fixed inset-0 bg-botanical-950/60 backdrop-blur-md z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-2xl bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-botanical-950 text-white">
                <div className="flex items-center gap-4">
                  <Sparkles className="w-6 h-6 text-emerald-500" />
                  <div>
                    <h2 className="text-xl font-black uppercase tracking-tighter">ABC AI Studio</h2>
                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Powered by African Market Intelligence</p>
                  </div>
                </div>
                <button onClick={() => setIsAiPanelOpen(false)} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                  <ArrowLeft className="w-5 h-5 rotate-180" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto p-12 space-y-12">
                {/* AI Prompts Section */}
                <div>
                   <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8 border-l-2 border-emerald-500 pl-4">Curriculum Specific Prompts</h3>
                   <div className="space-y-6">
                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group cursor-pointer hover:border-emerald-500 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <Command className="w-6 h-6 text-botanical-950" />
                          <div className="bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Market Analysis</div>
                        </div>
                        <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-4">Market Opportunity Scoping</h4>
                        <p className="text-xs text-slate-500 font-medium italic mb-6 leading-relaxed">
                          "Analyze the cross-border payment landscape in the EAC region for a fintech startup focusing on SME trade finance. Identify top 3 regulatory hurdles."
                        </p>
                        <button className="text-[9px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                          <span>Run Prompt</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group cursor-pointer hover:border-emerald-500 transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <Sparkles className="w-6 h-6 text-emerald-500" />
                          <div className="bg-botanical-100 text-botanical-600 px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest">Strategy</div>
                        </div>
                        <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight mb-4">GTM Framework Generator</h4>
                        <p className="text-xs text-slate-500 font-medium italic mb-6 leading-relaxed">
                          "Generate a Go-To-Market framework for an EdTech platform launching in Nigeria with a focus on semi-urban technical vocational training."
                        </p>
                        <button className="text-[9px] font-black uppercase tracking-widest text-emerald-500 flex items-center gap-2 group-hover:gap-4 transition-all">
                          <span>Run Prompt</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                   </div>
                </div>

                {/* Prompt Template Section */}
                <div className="bg-botanical-50 p-10 rounded-[40px] border border-botanical-100">
                   <h3 className="text-sm font-black text-botanical-950 mb-6 uppercase tracking-tighter">ABC Intelligence Prompt Architecture</h3>
                   <div className="bg-white p-6 rounded-2xl border border-slate-100 font-mono text-[10px] text-slate-600 leading-loose">
                      <span className="text-emerald-500"># SYSTEM_PROMPT:</span><br />
                      You are the ABC Intelligence Engine. Your knowledge base is strictly partitioned to African market dynamics (2018-2026), venture capital flows, and regulatory environments across 54 nations.<br /><br />
                      <span className="text-emerald-500"># FORMAT:</span><br />
                      1. Market Constraint Identification<br />
                      2. Solution Architecture Suggestion<br />
                      3. Execution Risk Profile<br />
                      4. ABC Module Reference
                   </div>
                </div>
              </div>

              <div className="p-8 border-t border-slate-100 flex items-center gap-4">
                <input 
                  type="text" 
                  placeholder="Ask the ABC Intelligence Engine..." 
                  className="flex-grow bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest focus:outline-none focus:border-emerald-500 transition-colors"
                />
                <button className="w-12 h-12 bg-botanical-950 text-white rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
