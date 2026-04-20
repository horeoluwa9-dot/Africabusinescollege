import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Shield, 
  Target, 
  ArrowRight, 
  Lock, 
  ChevronRight, 
  Activity, 
  TrendingUp, 
  Users,
  AlertCircle,
  CheckCircle2,
  DollarSign,
  Play,
  ArrowLeft,
  Clock,
  BarChart3,
  Brain
} from 'lucide-react';
import { SIMULATIONS } from '../constants/simulations';
import { useAuth } from '../contexts/AuthContext';
import { SimulationEnvironment, SimulationScenario, SimulationOption } from '../types/simulation';
import { SimulationCarousel } from '../components/SimulationCarousel';

interface SimulationDemoProps {
  simulationId?: string | null;
  onApply: () => void;
  onContinueProgram: () => void;
  onExit: () => void;
}

export const SimulationDemo: React.FC<SimulationDemoProps> = ({ simulationId, onApply, onContinueProgram, onExit }) => {
  const { isPaid } = useAuth();
  const config = SIMULATIONS[simulationId || 'entrepreneurship'] || SIMULATIONS['entrepreneurship'];
  
  const [phase, setPhase] = useState<'overview' | 'stage-selection' | 'simulation' | 'locked'>('overview');
  const [currentEnv, setCurrentEnv] = useState<SimulationEnvironment | null>(null);
  const [currentScenario, setCurrentScenario] = useState<SimulationScenario | null>(null);
  const [round, setRound] = useState(1);
  const [outcome, setOutcome] = useState<{ feedback: string; optionText: string } | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const heroImage = config.heroImage || 'https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&w=1200&q=80';

  // Initialize metrics from config
  const initialMetrics = config.metrics.reduce((acc, m) => {
    acc[m.key] = m.initial;
    return acc;
  }, {} as Record<string, number>);

  const [metrics, setMetrics] = useState(initialMetrics);

  // Reset state when simulationId changes
  useEffect(() => {
    setPhase('overview');
    setCurrentEnv(null);
    setCurrentScenario(null);
    setRound(1);
    setMetrics(initialMetrics);
    setOutcome(null);
    setSelectedOptionId(null);
  }, [simulationId]);

  const selectEnvironment = (env: SimulationEnvironment) => {
    if (env.status === 'Locked' && !isPaid) {
      setPhase('locked');
      return;
    }
    setCurrentEnv(env);
    setCurrentScenario(env.scenarios[0]);
    setPhase('simulation');
    setRound(1);
    setMetrics(initialMetrics);
  };

  const handleDecision = () => {
    if (!selectedOptionId || !currentScenario) return;
    
    const option = currentScenario.options.find(o => o.id === selectedOptionId);
    if (!option) return;

    // Apply metrics impact
    setMetrics(prev => {
      const next = { ...prev };
      Object.keys(option.impact.metrics).forEach(key => {
        if (key in next) {
          next[key] = Math.max(0, Math.min(100, next[key] + option.impact.metrics[key]));
        } else {
          // Some metrics might be new/dynamic
          next[key] = option.impact.metrics[key];
        }
      });
      return next;
    });

    setOutcome({ feedback: option.impact.feedback, optionText: option.text });
  };

  const nextRound = () => {
    setOutcome(null);
    setSelectedOptionId(null);
    
    if (!currentScenario || !currentEnv) return;

    const option = currentScenario.options.find(o => o.id === selectedOptionId);
    const nextId = option?.impact.nextScenarioId;

    if (nextId === 100 || !nextId) {
      // End of simulation for this environment
      setPhase('locked'); // Show completion/up-sell
      return;
    }

    const next = currentEnv.scenarios.find(s => s.id === nextId);
    if (next) {
      setCurrentScenario(next);
      setRound(prev => prev + 1);
    } else {
      setPhase('locked');
    }
  };

  return (
    <div className="min-h-[100dvh] bg-botanical-950 flex flex-col overflow-hidden font-sans selection:bg-emerald-500/30">
      <div className="h-full w-full max-w-[1600px] mx-auto flex flex-col flex-grow">
        
        {/* TOP NAV BAR - Fixed at top, height 16 (4rem = 64px) */}
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 sm:px-8 bg-botanical-950/50 backdrop-blur-md shrink-0 z-50">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button 
              onClick={() => {
                if (phase === 'stage-selection' || phase === 'locked') setPhase('overview');
                else if (phase === 'simulation') setPhase('stage-selection');
                else onExit();
              }}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">{config.title} Lab</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">
                {currentEnv ? currentEnv.name : 'System Overview'}
              </span>
            </div>
          </div>

          {phase === 'simulation' && (
            <div className="hidden lg:flex items-center space-x-12">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Current Round</span>
                <span className="text-sm font-black text-white">Round {round}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Progress</span>
                <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-emerald-500"
                    animate={{ width: `${(round / (currentEnv?.scenarios.length || 6)) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                <Clock className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] font-black text-white font-mono">12:00</span>
              </div>
            </div>
          )}

          <button 
            onClick={onExit}
            className="text-[8px] sm:text-[10px] font-black text-slate-400 hover:text-white uppercase tracking-widest border border-white/10 px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all"
          >
            Exit Simulation
          </button>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* OVERVIEW PHASE */}
            {phase === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                className="h-full overflow-y-auto flex items-center justify-center p-6 sm:p-12 relative"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={heroImage} 
                    alt={config.title}
                    className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/80 to-botanical-950/40" />
                </div>

                <div className="max-w-4xl text-center relative z-10 py-12">
                  <div className="flex items-center justify-center space-x-4 mb-4 sm:mb-8">
                    <div className="h-px w-8 sm:w-12 bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">{isPaid ? 'Full Experience' : 'Preview Experience'}</span>
                  </div>
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter uppercase mb-6 sm:mb-8 leading-none">
                    {config.title} <br className="hidden sm:block" /> <span className="text-emerald-500 italic">{config.subtitle}</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
                    {config.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
                    <button 
                      onClick={() => setPhase('stage-selection')}
                      className="group w-full sm:w-auto bg-emerald-500 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-[24px] text-xs sm:text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-95 flex items-center justify-center space-x-4"
                    >
                      <Play className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                      <span>{isPaid ? 'Enter Simulation Labs' : 'Try Demo Simulation'}</span>
                    </button>
                    {!isPaid && (
                      <button 
                        onClick={onApply}
                        className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-8 sm:px-12 py-5 sm:py-6 rounded-2xl sm:rounded-[24px] text-xs sm:text-sm font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center justify-center space-x-4"
                      >
                        <Shield className="w-4 h-4" />
                        <span>Apply for Full Access</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STAGE SELECTION PHASE */}
            {phase === 'stage-selection' && (
              <motion.div 
                key="stage-selection"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full overflow-y-auto flex flex-col items-center p-6 lg:p-12 relative"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={heroImage} 
                    alt={config.title}
                    className="w-full h-full object-cover opacity-10 grayscale mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-botanical-950/90 to-botanical-950/80" />
                </div>

                <div className="max-w-7xl w-full relative z-10 py-12 flex-grow flex flex-col justify-center">
                  <div className="text-center mb-8 lg:mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Choose Your Simulation Business Stage</h2>
                    <p className="text-slate-400 font-medium tracking-wide">Each stage presents a different business challenge in the {config.title} ecosystem.</p>
                  </div>

                  <SimulationCarousel 
                    items={config.environments.map(env => ({
                      ...env,
                      desc: env.desc,
                      image: env.image || config.heroImage,
                    }))}
                    onSelect={(id) => {
                      const env = config.environments.find(e => e.id === id);
                      if (env) selectEnvironment(env);
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* SIMULATION INTERFACE (3-PANEL) */}
            {phase === 'simulation' && currentScenario && (
              <motion.div 
                key="simulation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="h-full flex overflow-hidden relative"
              >
                {/* Background Image for simulation */}
                <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay max-h-full">
                  <img 
                    src={currentEnv?.image || heroImage} 
                    alt={currentScenario.title}
                    className="w-full h-full object-cover grayscale blur-sm"
                  />
                </div>

                {/* LEFT: SCENARIO PANEL */}
                <div className="w-[400px] border-r border-white/5 p-10 bg-botanical-950/80 backdrop-blur-sm overflow-y-auto hidden xl:block relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">Current Scenario</h3>
                  </div>

                  <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative border border-white/10 group">
                    <img 
                      src={currentEnv?.image || heroImage} 
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-botanical-950 via-transparent to-transparent" />
                  </div>

                  <h4 className="text-2xl font-black text-white uppercase tracking-tight leading-none mb-6">
                    {currentScenario.title}
                  </h4>
                  
                  <div className="space-y-8">
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-3">Context</span>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{currentScenario.context}</p>
                    </div>

                    {currentScenario.challenge && (
                    <div>
                      <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-3">Key Challenge</span>
                      <p className="text-sm text-white font-medium">{currentScenario.challenge}</p>
                    </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      {currentScenario.marketConditions && (
                        <div className="bg-white/2 p-4 rounded-2xl border border-white/5">
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">Market</span>
                          <span className="text-[10px] font-bold text-white leading-tight">{currentScenario.marketConditions}</span>
                        </div>
                      )}
                      {currentScenario.constraints && (
                        <div className="bg-white/2 p-4 rounded-2xl border border-white/5">
                          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest block mb-2">Constraints</span>
                          <span className="text-[10px] font-bold text-white leading-tight">{currentScenario.constraints}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* CENTER: DECISION PANEL */}
                <div className="flex-1 p-12 bg-white/1 rounded-[60px] my-4 mx-4 border border-white/5 overflow-y-auto flex flex-col">
                  <div className="text-center mb-16">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4 italic">Make Your Decision</h3>
                    <p className="text-slate-500 font-medium">Select the path that optimizes your institutional goals.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full mb-12 flex-1">
                    {currentScenario.options.map((opt) => (
                      <div 
                        key={opt.id}
                        onClick={() => setSelectedOptionId(opt.id)}
                        className={`p-10 rounded-[32px] border-2 transition-all cursor-pointer flex flex-col h-full relative overflow-hidden group ${
                          selectedOptionId === opt.id 
                            ? 'bg-emerald-500 border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                            : 'bg-white/3 border-white/10 hover:border-emerald-500/50 hover:bg-white/5'
                        }`}
                      >
                        {selectedOptionId === opt.id && (
                          <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                        )}
                        
                        <div className="flex justify-between items-start mb-6 font-black uppercase tracking-widest">
                          <span className={`text-[10px] ${selectedOptionId === opt.id ? 'text-white/80' : 'text-emerald-500'}`}>Decision Option</span>
                          {opt.risk && (
                            <div className="flex items-center space-x-2">
                              <span className={`text-[10px] ${selectedOptionId === opt.id ? 'text-white' : 'text-slate-400'}`}>Risk:</span>
                              <span className={`text-[10px] ${
                                opt.risk === 'low' ? 'text-blue-400' : opt.risk === 'medium' ? 'text-amber-400' : 'text-rose-400'
                              } ${selectedOptionId === opt.id ? 'text-white' : ''} transition-colors`}>
                                {opt.risk}
                              </span>
                            </div>
                          )}
                        </div>

                        <h4 className={`text-2xl font-black mb-4 uppercase tracking-tight ${selectedOptionId === opt.id ? 'text-white' : 'text-white'}`}>
                          {opt.text}
                        </h4>
                        
                        {opt.explanation && (
                          <p className={`text-sm font-medium leading-relaxed ${selectedOptionId === opt.id ? 'text-white/90' : 'text-slate-400'}`}>
                            {opt.explanation}
                          </p>
                        )}

                        <div className="mt-auto pt-8">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                            selectedOptionId === opt.id ? 'bg-white text-emerald-500' : 'bg-emerald-500/20 text-emerald-500 group-hover:scale-110'
                          }`}>
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center shrink-0 mt-auto pt-8 pb-Safe md:pb-0 sticky bottom-0 md:relative bg-gradient-to-t from-botanical-950/80 md:bg-none p-4 md:p-0 backdrop-blur-sm md:backdrop-blur-none -mx-10 md:mx-0">
                    <button 
                      onClick={handleDecision}
                      disabled={!selectedOptionId || outcome !== null}
                      className={`px-20 py-6 rounded-[24px] text-sm font-black uppercase tracking-[0.3em] transition-all flex items-center space-x-4 ${
                        !selectedOptionId || outcome !== null
                          ? 'bg-white/5 text-white/20 cursor-not-allowed border border-white/10' 
                          : 'bg-white text-botanical-950 hover:bg-emerald-500 hover:text-white shadow-3xl shadow-white/10'
                      }`}
                    >
                      <Target className="w-4 h-4" />
                      <span>Confirm Decision</span>
                    </button>
                  </div>
                </div>

                {/* RIGHT: LIVE METRICS PANEL */}
                <div className="w-[320px] p-10 bg-botanical-950/50 hidden lg:block overflow-y-auto">
                  <div className="flex items-center space-x-3 mb-12">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">Performance</h3>
                  </div>

                  <div className="space-y-12">
                    {config.metrics.map((m) => (
                      <div key={m.key} className="space-y-4">
                        <div className="flex justify-between items-end uppercase tracking-tight">
                          <div className="flex items-center space-x-2">
                            <m.icon className="w-3 h-3 text-slate-500" />
                            <span className="text-[10px] font-black text-slate-400">{m.label}</span>
                          </div>
                          <span className="text-lg font-black text-white">{metrics[m.key]}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                          <motion.div 
                            className={`h-full ${m.color || 'bg-emerald-500'} shadow-[0_0_10px_rgba(16,185,129,0.3)]`}
                            initial={{ width: 0 }}
                            animate={{ width: `${metrics[m.key]}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-24">
                      <div className="flex items-center space-x-3 mb-8">
                        <Brain className="w-4 h-4 text-emerald-500" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none">Strategy Insights</span>
                      </div>
                      <div className="bg-white/2 p-6 rounded-3xl border border-white/5">
                        <p className="text-[10px] text-slate-500 font-mono leading-relaxed mb-4">
                          // LOGGING STRATEGY STYLE
                          <br />
                          {metrics.cash < 30 ? "> WARNING: CRITICAL LIQUIDITY" : `> SECTOR ALIGNMENT: ${metrics.growth > 50 ? 'Scalable' : 'Conservative'}`}
                          <br />
                          {">"} MARKET ADAPTATION: STABLE
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Active Intelligence</span>
                        </div>
                      </div>
                  </div>
                </div>

                {/* BOTTOM OUTCOME PANEL */}
                <AnimatePresence>
                  {outcome && (
                    <motion.div 
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                      className="absolute bottom-4 left-4 right-4 z-[100] bg-white rounded-[40px] p-10 shadow-3xl text-botanical-950 flex flex-col md:flex-row items-center justify-between gap-8 border border-white transition-all transform-gpu"
                    >
                      <div className="flex items-center space-x-8 max-w-4xl">
                        <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
                          <Brain className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-4 mb-2">
                            <h4 className="text-2xl font-black uppercase tracking-tighter">Outcome</h4>
                            <div className="h-px w-8 bg-botanical-950/20" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Decision result for: {outcome.optionText}</span>
                          </div>
                          <p className="text-lg font-medium text-slate-700 leading-tight">
                            {outcome.feedback}
                          </p>
                        </div>
                      </div>

                      <button 
                        onClick={nextRound}
                        className="group bg-botanical-950 text-white px-12 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all active:scale-95 flex items-center space-x-4 whitespace-nowrap shadow-xl shadow-botanical-950/20"
                      >
                        <span>Continue to Next Round</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* COMPLETION / LOCKED PHASE */}
            {phase === 'locked' && (
              <motion.div 
                key="locked"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full overflow-y-auto flex items-center justify-center p-6 sm:p-12 relative"
              >
                <div className="absolute inset-0 z-0 grayscale blur-[120px] opacity-10 pointer-events-none scale-125">
                   <div className="grid grid-cols-12 gap-8 p-12 h-full">
                      <div className="col-span-8 h-96 bg-emerald-500 rounded-full" />
                      <div className="col-span-4 h-96 bg-emerald-500 rounded-full" />
                   </div>
                </div>

                <div className="relative z-10 text-center max-w-2xl px-6 sm:px-12 py-12">
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 sm:mb-10 shadow-3xl shadow-emerald-500/20"
                  >
                    {isPaid ? <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-white" /> : <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />}
                  </motion.div>
                  
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none italic">
                    {isPaid ? "Simulation" : "Continue the"} <br /> <span className="text-emerald-500">{isPaid ? "Mastered." : "Simulation."}</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-400 font-medium mb-10 sm:mb-12 max-w-lg mx-auto leading-relaxed">
                    {isPaid 
                      ? "You have successfully navigated this tactical environment. Your institutional performance report is now available in your professional portal."
                      : "Master higher-stakes scenarios, sovereign scale-ups, and boardroom dynamics by joining Africa Business College."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {isPaid ? (
                      <>
                        <button 
                          onClick={onExit}
                          className="bg-emerald-500 text-white py-5 sm:py-6 rounded-2xl sm:rounded-[20px] text-[10px] sm:text-[12px] font-black uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-95"
                        >
                          Return to Labs
                        </button>
                        <button 
                          onClick={() => setPhase('stage-selection')}
                          className="bg-white/5 border border-white/10 text-white py-5 sm:py-6 rounded-2xl sm:rounded-[20px] text-[10px] sm:text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
                        >
                          Stage Selection
                        </button>
                      </>
                    ) : (
                      <>
                        <button 
                          onClick={onApply}
                          className="bg-emerald-500 text-white py-5 sm:py-6 rounded-2xl sm:rounded-[20px] text-[10px] sm:text-[12px] font-black uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20 hover:bg-emerald-400 transition-all active:scale-95"
                        >
                          Apply Now
                        </button>
                        <button 
                          onClick={onExit}
                          className="bg-white/5 border border-white/10 text-white py-5 sm:py-6 rounded-2xl sm:rounded-[20px] text-[10px] sm:text-[12px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all"
                        >
                          Exit Simulation
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
            
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
