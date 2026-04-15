import React from 'react';
import { motion } from 'motion/react';
import { Play, BookOpen, Target, Zap, Globe, Landmark, Users, ArrowRight, Quote } from 'lucide-react';

export const SimulationLabs = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Experimental Learning</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-8">
              Learn Business by <br />
              <span className="text-emerald-500 italic">Making Real</span> <br />
              Decisions
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-xl mb-12">
              Step into a high-fidelity digital sandbox where the stakes are simulated but the consequences are felt. Test strategies, lead teams, and master market dynamics in our world-class simulation environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center justify-center space-x-3">
                <Play className="w-4 h-4 fill-current" />
                <span>Launch A Simulation</span>
              </button>
              <button className="bg-slate-100 text-slate-600 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all">
                View Curriculum
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 rounded-[40px] overflow-hidden relative shadow-2xl">
              <img 
                src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_8.png?alt=media&token=48021020-001c-438c-8594-551711200000" 
                alt="Simulation Lab" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 to-transparent" />
              
              {/* Floating UI Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/20"
              >
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400 block mb-1">Market Cap</span>
                    <span className="text-2xl font-black text-botanical-950">+$2.4M</span>
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-md text-[8px] font-black uppercase tracking-widest mb-2">
                      Strategy Optimized
                    </div>
                    <div className="flex space-x-1 justify-end">
                      {[1, 2, 3, 4, 5].map(i => (
                        <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unique Environments Section */}
      <section className="py-32 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="text-4xl font-black tracking-tighter text-botanical-950 mb-8 uppercase">
                Unique Business Simulation <br /> Environments
              </h2>
              <div className="w-20 h-1.5 bg-emerald-500 mb-12" />
              <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12">
                ABC's Simulation Labs provide proprietary, high-fidelity environments that mirror the complexity of global markets. We bridge the gap between theory and practice through intensive simulations in Entrepreneurship, Startup Fundraising, Market Expansion, Economic Policy, and Leadership Decision-making.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div>
                  <span className="text-4xl font-black text-botanical-950 block mb-2">500+</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Active Scenarios</span>
                </div>
                <div>
                  <span className="text-4xl font-black text-botanical-950 block mb-2">Real-Time</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Data Streams</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_1.png?alt=media&token=48021020-001c-438c-8594-551711200000" alt="Sim 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl bg-emerald-400 flex items-center justify-center p-12">
                  <Zap className="w-full h-full text-white" />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-3xl bg-emerald-100 flex items-center justify-center p-12">
                  <Target className="w-full h-full text-emerald-500" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://storage.googleapis.com/firebasestorage.v0.appspot.com/o/antigravity-attachments%2F59913ed7-1325-4434-9bb0-792f9c375fd3%2Finput_file_10.png?alt=media&token=48021020-001c-438c-8594-551711200000" alt="Sim 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tighter text-botanical-950 mb-4 uppercase">Simulation Environments</h2>
            <p className="text-slate-500 font-medium">Five specialized arenas designed to test the limits of your professional intuition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Entrepreneurship */}
            <div className="lg:col-span-2 bg-emerald-900 rounded-[40px] p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                <Zap className="w-48 h-48" />
              </div>
              <Zap className="w-12 h-12 mb-8 text-emerald-400" />
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Entrepreneurship</h3>
              <p className="text-emerald-100/60 font-medium max-w-md">Founding and scaling from Day Zero in a competitive landscape.</p>
            </div>

            {/* Startup Fundraising */}
            <div className="bg-slate-200 rounded-[40px] p-12 text-botanical-950 relative overflow-hidden group">
              <div className="absolute top-8 right-8">
                <BookOpen className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Startup Fundraising</h3>
              <p className="text-slate-500 font-medium mb-8">Master the art of the pitch and cap table management through live negotiations.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">Series A</span>
                <span className="px-3 py-1 bg-white rounded-full text-[8px] font-black uppercase tracking-widest text-slate-400">Valuation Modeling</span>
              </div>
            </div>

            {/* Market Expansion */}
            <div className="bg-emerald-100 rounded-[40px] p-12 text-botanical-950">
              <Globe className="w-12 h-12 mb-8 text-emerald-500" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Market Expansion</h3>
              <p className="text-slate-500 font-medium">Global logistics and cultural adaptation strategies.</p>
            </div>

            {/* Economic Policy */}
            <div className="bg-white border border-slate-100 rounded-[40px] p-12 text-botanical-950">
              <Landmark className="w-12 h-12 mb-8 text-emerald-500" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Economic Policy</h3>
              <p className="text-slate-500 font-medium">Macro-indicators and regulatory impact simulations for future policy makers.</p>
            </div>

            {/* Leadership Decision */}
            <div className="bg-botanical-950 rounded-[40px] p-12 text-white">
              <Users className="w-12 h-12 mb-8 text-emerald-500" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Leadership Decision</h3>
              <p className="text-slate-400 font-medium">Crisis management and high-performance team dynamics in high-pressure scenarios.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Instrument Studio */}
      <section className="py-32 px-6 md:px-12 bg-botanical-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00D98E_0%,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">The Lab Toolbox</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-8 uppercase">
              Business Instrument <br /> Studio
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
              A dedicated environment for professional-grade tools. Every simulation is powered by our proprietary analytics suite, used by top-tier strategists and analysts globally.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Financial Modeling', desc: 'Dynamic real-time P&L.' },
                { title: 'Market Analysis', desc: 'Predictive sector mapping.' },
                { title: 'Investment Evaluation', desc: 'Risk assessment tools.' },
                { title: 'Startup Valuation', desc: 'Cap table simulations.' },
                { title: 'Strategy Frameworks', desc: 'SWOT/PESTEL builders.' },
                { title: 'Business Planning', desc: 'Interactive pitch decks.' }
              ].map((tool, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-sm uppercase tracking-tight">{tool.title}</h4>
                    <p className="text-slate-500 text-xs font-medium">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <div className="bg-slate-900 rounded-[40px] p-8 border border-white/5 shadow-2xl">
              <div className="aspect-[4/3] bg-botanical-950 rounded-2xl overflow-hidden border border-white/10 p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Dashboard v4.0</div>
                </div>
                <div className="space-y-6">
                  <div className="h-32 bg-emerald-500/5 rounded-xl border border-emerald-500/10 flex items-end p-4 space-x-2">
                    {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        className="flex-1 bg-emerald-500/40 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl" />
                    <div className="h-24 bg-white/5 rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 px-6 md:px-12 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <Quote className="w-12 h-12 text-emerald-500 mx-auto mb-12" />
          <h2 className="text-4xl font-black tracking-tighter text-botanical-950 mb-12 uppercase">
            The "Tuesday Morning" Crisis
          </h2>
          <div className="bg-slate-50 p-12 rounded-[40px] relative">
            <p className="text-xl text-slate-500 leading-relaxed font-medium italic mb-12">
              "It's 9:00 AM in the Economic Policy Sim. You're the Central Banker of a developing nation. Suddenly, a major global commodity price drops by 40%. Your currency is in freefall. You have twelve simulated minutes to adjust interest rates, communicate with the IMF, and stabilize the market. This is where theory ends and mastery begins."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                <img src="https://picsum.photos/seed/elena/100/100" alt="Dr. Elena Vance" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="text-left">
                <h4 className="font-black text-botanical-950 uppercase tracking-tight">Dr. Elena Vance</h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Director of Simulations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
