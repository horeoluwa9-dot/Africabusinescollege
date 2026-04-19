import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Monitor,
  Clock,
  BarChart,
  Layers,
  Users,
  GraduationCap,
  Microscope,
  TrendingUp,
  Zap,
  Target,
  Play,
  CheckCircle2,
  Globe,
  Beaker
} from 'lucide-react';
import { PROGRAMS, LABS, STUDIO_TOOLS, SESSIONS } from '../constants';
import { Program, Lab, StudioTool, Session } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

import { useAuth } from '../contexts/AuthContext';
import { downloadMockPdf } from '../lib/downloadPdf';

interface HomeProps {
  onPageChange: (page: Page, id?: string) => void;
}

const HeroSlider = ({ onPageChange }: HomeProps) => {
  const { isLoggedIn, hasImage } = useAuth();
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    if (isLoggedIn && hasImage) {
      onPageChange('post-download');
    } else {
      setDownloading(true);
      downloadMockPdf(slides[currentSlide].headline);
      setTimeout(() => setDownloading(false), 3000);
    }
  };

  const slides = [
    {
      eyebrow: t('nav.programs'),
      headline: t('home.hero.explore'),
      text: t('home.hero.exploreDesc'),
      cta1: t('home.hero.viewAll'),
      cta2: t('home.hero.downloadBrochure'),
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
      target: 'programs' as Page
    },
    {
      eyebrow: t('home.hero.learningExp'),
      headline: t('home.hero.learnByDoing'),
      text: t('home.hero.learnByDoingDesc'),
      cta1: t('home.hero.exploreLearning'),
      cta2: t('home.hero.viewCurriculum'),
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      target: 'learning' as Page
    },
    {
      eyebrow: t('nav.simulationLabs'),
      headline: t('home.hero.decisionsRealEnv'),
      text: t('home.hero.testStrategies'),
      cta1: t('home.hero.launchSimulation'),
      cta2: t('home.hero.viewLabs'),
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
      target: 'simulation-demo' as Page,
      targetId: 'policy'
    },
    {
      eyebrow: t('nav.community'),
      headline: t('home.hero.joinNetwork'),
      text: t('home.hero.joinNetworkDesc'),
      cta1: t('home.hero.joinNetworkCta'),
      cta2: t('home.hero.viewAlumni'),
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      target: 'community' as Page
    },
    {
      eyebrow: t('nav.admissions'),
      headline: t('home.hero.startJourney'),
      text: t('home.hero.applyNow'),
      cta1: t('home.hero.applyNowCta'),
      cta2: t('home.hero.admissionsGuide'),
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80',
      target: 'admissions' as Page
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="relative bg-botanical-950 min-h-[90vh] flex items-center overflow-hidden pt-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence>
        {downloading && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-white text-botanical-950 px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-slate-200"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Brochure Downloaded Successfully</span>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatedBackground intensity="high" className="opacity-40" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center py-20"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4 mb-8"
              >
                <div className="h-px w-12 bg-emerald-500" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">
                  {slides[currentSlide].eyebrow}
                </span>
              </motion.div>

              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-white mb-8 uppercase overflow-hidden">
                {slides[currentSlide].headline.split(' ').map((word, i) => (
                  <span key={i} className="inline-block overflow-hidden mr-[0.2em] whitespace-nowrap">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.1 + (i * 0.1),
                        ease: [0.33, 1, 0.68, 1]
                      }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-xl text-slate-400 leading-relaxed font-medium max-w-lg mb-12"
              >
                {slides[currentSlide].text}
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <button 
                  onClick={() => onPageChange(slides[currentSlide].target, (slides[currentSlide] as any).targetId)}
                  className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20"
                >
                  {slides[currentSlide].cta1}
                </button>
                <button 
                  onClick={() => {
                    if (currentSlide === 1) { // Learning slide
                      onPageChange('program-detail', 'entrepreneurship');
                    } else {
                      handleDownload();
                    }
                  }}
                  className="border border-white/20 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all active:scale-95"
                >
                  {slides[currentSlide].cta2}
                </button>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="lg:col-span-5 relative h-full flex items-center justify-center lg:justify-end"
            >
              <div className="w-full max-w-[400px] aspect-[3/4] lg:h-[60vh] lg:min-h-[500px] rounded-[40px] overflow-hidden border border-white/10 relative group shadow-2xl">
                <motion.img 
                  key={`img-${currentSlide}`}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={slides[currentSlide].image} 
                  alt={slides[currentSlide].headline} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/80 via-transparent to-transparent" />
              </div>
              
              {/* Glass Effect Accent */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-[120px] -z-10" />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-6 md:left-12 right-6 md:right-12 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-500 rounded-full ${
                  currentSlide === index ? 'w-12 bg-emerald-500' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  const stats = [
    { label: 'Alumni Network', value: '12K+' },
    { label: 'Placement Rate', value: '94%' },
    { label: 'African Nations', value: '45+' },
    { label: 'Industry Partners', value: '150+' }
  ];

  return (
    <section className="py-24 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map(stat => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-botanical-950 mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Programs = ({ onPageChange }: HomeProps) => {
  const { isLoggedIn, hasImage } = useAuth();
  const [activeTab, setActiveTab] = useState('Executive');
  const [downloading, setDownloading] = useState(false);
  const tabs = ['Executive', 'Advanced', 'Beginner'];

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLoggedIn && hasImage) {
      onPageChange('post-download');
    } else {
      setDownloading(true);
      downloadMockPdf('Programs');
      setTimeout(() => setDownloading(false), 3000);
    }
  };

  return (
    <section className="py-32 bg-slate-50">
      <AnimatePresence>
        {downloading && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-botanical-950 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-white/10"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Prospectus Downloaded Successfully</span>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Academic Excellence</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-6 uppercase leading-tight">Designed for Every Stage of Leadership</h2>
            <p className="text-slate-500 text-lg font-medium">Select a path that aligns with your professional trajectory and institutional goals.</p>
          </div>
          <div className="flex bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all whitespace-nowrap ${
                  activeTab === tab ? 'bg-botanical-950 text-white shadow-lg' : 'text-slate-400 hover:text-botanical-950'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROGRAMS.filter(p => activeTab === 'All' || p.level === activeTab).map(program => (
            <motion.div 
              key={program.id} 
              whileHover={{ y: -10 }}
              onClick={() => onPageChange('programs')}
              className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full relative"
            >
              {/* Top Section: Visual Layer */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={program.image || "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"} 
                  alt={program.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/80 via-botanical-950/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-6 left-6 bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest shadow-lg">
                  {program.level}
                </div>
                
                {/* Accent Border (Visible on hover) */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-[8px] font-black tracking-widest text-emerald-500 uppercase block mb-2">{program.category}</span>
                  <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-2">
                  {program.excerpt}
                </p>

                {/* Meta Row */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100 mt-auto">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{program.duration}</span>
                  </div>
          <div className="flex items-center space-x-3">
                    <Layers className="w-4 h-4 text-emerald-500" />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[0]}</span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: CTAs */}
                <div className="flex items-center justify-between mt-10">
                   <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onPageChange('programs');
                    }}
                    className="bg-botanical-950 text-white px-8 py-4 text-[9px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all"
                  >
                    View All
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onPageChange('program-detail', program.id);
                    }}
                    className="text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
                  >
                    Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button at bottom */}
        <div className="mt-20 text-center">
          <button 
            onClick={() => onPageChange('programs')}
            className="inline-flex items-center space-x-3 bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl shadow-botanical-950/20 group uppercase tracking-[0.2em]"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const Ecosystem = ({ onPageChange }: HomeProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">The ABC Advantage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-8 leading-[0.9] uppercase">
            Built for <br />
            <span className="text-emerald-500 italic">Execution</span>
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed font-medium mb-12">
            Our proprietary Business Instrument Studio merges physical seminar intensity with digital precision. Experience simulations that mirror the complexity of African market dynamics.
          </p>
          
          <div className="space-y-10 mb-12">
            {[
              { 
                title: 'Live Interactive Classes', 
                desc: 'Real-time engagement with global faculty and industry practitioners.',
                icon: <Globe className="w-6 h-6 text-emerald-500" />
              },
              { 
                title: 'Cohort-Based Learning', 
                desc: 'Deep relationships with ambitious peers from over 30 countries.',
                icon: <Users className="w-6 h-6 text-emerald-500" />
              },
              { 
                title: 'Simulation Labs', 
                desc: 'Immersive environments where you test strategies against dynamic, real-world market conditions.',
                icon: <Beaker className="w-6 h-6 text-emerald-500" />
              }
            ].map(item => (
              <div key={item.title} className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-sm group-hover:border-emerald-500/30 transition-all">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-black text-botanical-950 mb-2 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => onPageChange('learning')}
            className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl shadow-botanical-950/20"
          >
            Explore Experience
          </button>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] bg-botanical-950 rounded-[40px] p-12 flex items-center justify-center overflow-hidden group shadow-2xl">
            {!isPlaying ? (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" 
                  alt="Ecosystem" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#00D98E_0%,transparent_70%)]" />
              </>
            ) : (
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-working-at-a-laptop-in-a-modern-office-4762-large.mp4" type="video/mp4" />
              </video>
            )}
            
            {/* Learning Platform Visual */}
            <div className="relative z-10 w-full max-w-md">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl border border-white/20"
              >
                <div className="aspect-video bg-botanical-950 rounded-2xl flex items-center justify-center border border-white/5 relative overflow-hidden">
                  {!isPlaying && (
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" 
                      alt="Platform Interface" 
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/40 hover:scale-110 transition-transform"
                    >
                      {isPlaying ? (
                        <div className="w-4 h-4 bg-white rounded-sm" />
                      ) : (
                        <Play className="w-6 h-6 text-white fill-current" />
                      )}
                    </button>
                    <span className="text-white font-black tracking-widest text-[10px] uppercase">
                      {isPlaying ? 'Playing Demo' : 'Learning Platform'}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full -z-10 blur-[100px] opacity-20" />
        </div>
      </div>
    </section>
  );
};

import { SimulationCarousel } from '../components/SimulationCarousel';

const SimulationLabs = ({ onPageChange }: HomeProps) => {
  const { t } = useLanguage();
  
  const simulationItems = [
    { 
      id: 'entrepreneurship', 
      name: t('home.entrepreneurship'), 
      desc: t('home.entrepreneurshipDesc'), 
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
      icon: Zap,
      status: 'Simulation Lab',
      difficulty: 'Strategic intuition',
      focus: ['Execution', 'African Markets', 'Venture Building']
    },
    { 
      id: 'fundraising', 
      name: t('home.professionals'), 
      desc: t('home.professionalsDesc'), 
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      icon: Target,
      status: 'Negotiation Suite',
      difficulty: 'Term Sheets',
      focus: ['Valuation', 'Investor Psychology', 'Deal Making']
    },
    { 
      id: 'expansion', 
      name: t('home.founders'), 
      desc: t('home.foundersDesc'), 
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80",
      icon: Globe,
      status: 'Continental Scale',
      difficulty: 'Scaling Borders',
      focus: ['Trade', 'Regulation', 'Localization']
    },
    { 
      id: 'leadership', 
      name: t('home.executives'), 
      desc: t('home.executivesDesc'), 
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      icon: Users,
      status: 'Organizational Core',
      difficulty: 'Leadership',
      focus: ['Culture', 'Power', 'Moats']
    },
    { 
      id: 'policy', 
      name: t('home.hero.decisionsRealEnv'), 
      desc: t('home.testStrategies'), 
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      icon: Beaker,
      status: 'Sovereign Strategy',
      difficulty: 'Expert',
      focus: ['GDP Growth', 'Inflation', 'Fiscal Policy']
    }
  ];

  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{t('home.theLaboratory')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-6 uppercase leading-tight">
              {t('home.simLabsTitle')}
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              {t('home.simLabsSubtitle')}
            </p>
          </div>
          <button 
            onClick={() => onPageChange('simulation-labs')}
            className="group flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-emerald-500 hover:text-botanical-950 transition-colors"
          >
            <span>{t('home.viewAllLabs')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <SimulationCarousel 
          items={simulationItems} 
          onSelect={(id) => onPageChange('simulation-demo', id)} 
        />
      </div>
    </section>
  );
};

const InstrumentStudio = ({ onPageChange }: HomeProps) => {
  const { t } = useLanguage();
  return (
    <section className="bg-botanical-950 py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,#00D98E_0%,transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full mb-8 border border-white/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{t('home.businessInstrumentStudio')}</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">{t('home.useRealTools')}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STUDIO_TOOLS.map(tool => (
            <div key={tool.id} className="bg-white/5 border border-white/10 p-12 rounded-[32px] hover:bg-white/10 transition-all group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-24 h-24 text-emerald-500" />
              </div>
              <h4 className="text-2xl font-black text-white mb-6 group-hover:text-emerald-500 transition-colors uppercase tracking-tight">{t(`home.tools.${tool.key}`)}</h4>
              <p className="text-slate-400 font-medium leading-relaxed">{t(`home.tools.${tool.key}Desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      quote: t('home.testimonials.quote1'),
      author: t('home.testimonials.author1'),
      role: t('home.testimonials.role1'),
      program: t('home.testimonials.program1'),
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: t('home.testimonials.quote2'),
      author: t('home.testimonials.author2'),
      role: t('home.testimonials.role2'),
      program: t('home.testimonials.program2'),
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: t('home.testimonials.quote3'),
      author: t('home.testimonials.author3'),
      role: t('home.testimonials.role3'),
      program: t('home.testimonials.program3'),
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{t('home.studentSuccess')}</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-botanical-950 tracking-tighter uppercase leading-tight">{t('home.whatStudentsBuilding')}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 p-12 rounded-[40px] relative flex flex-col justify-between group hover:bg-botanical-950 transition-all duration-500"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-emerald-500/20">
                  <Zap className="w-6 h-6 text-emerald-500" />
                </div>
                <p className="text-xl font-medium text-slate-600 leading-relaxed mb-12 italic group-hover:text-slate-300 transition-colors">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-botanical-950 uppercase tracking-tight group-hover:text-white transition-colors">{t.author}</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-1">{t.role}</p>
                  <p className="text-[8px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-500 transition-colors">{t.program}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Sessions = ({ onPageChange }: HomeProps) => {
  const { t } = useLanguage();
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-black text-botanical-950 tracking-tighter mb-8">{t('home.scholarshipsImpact')}</h2>
          <p className="text-slate-500 font-medium mb-12 leading-relaxed">
            {t('home.scholarshipText')}
          </p>
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-10 rounded-2xl">
            <h4 className="font-black text-botanical-950 mb-4">{t('home.mandelaFellowship')}</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">{t('home.mandelaFellowshipDesc')}</p>
            <button 
              onClick={() => onPageChange('admissions')}
              className="text-[10px] font-black uppercase tracking-widest text-emerald-500 border-b border-emerald-500/30 hover:border-emerald-500 transition-all pb-1"
            >
              {t('home.applyFunding')}
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="flex justify-between items-center mb-12 border-b border-slate-100 pb-6">
            <h3 className="text-xl font-black text-botanical-950 tracking-tight">{t('home.upcomingSessions')}</h3>
            <button 
              onClick={() => onPageChange('insights')}
              className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950 transition-colors"
            >
              {t('home.viewAllEvents')}
            </button>
          </div>
          <div className="space-y-6">
            {SESSIONS.map(session => (
              <div key={session.id} className="bg-surface-low p-8 rounded-2xl border border-slate-100 flex flex-col md:flex-row items-center gap-10 group cursor-pointer hover:border-emerald-500/30 transition-all">
                <div className="text-center md:text-left min-w-[80px]">
                  <div className="text-4xl font-black text-botanical-950 tracking-tighter">{session.date.day}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">{session.date.month}</div>
                </div>
                <div className="flex-grow">
                  <div className="text-[8px] font-black tracking-widest text-emerald-500 uppercase mb-2">{session.type}</div>
                  <h4 className="text-xl font-black text-botanical-950 mb-2 group-hover:text-emerald-500 transition-colors">{session.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{session.description}</p>
                </div>
                <div className="text-right hidden md:block">
                  <div className="text-[8px] font-black tracking-widest text-slate-400 uppercase mb-1">{session.location}</div>
                  <div className="text-[10px] font-black text-botanical-950 uppercase tracking-widest">{session.attendees}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ onPageChange }: HomeProps) => {
  const { isLoggedIn, hasImage } = useAuth();
  const [downloading, setDownloading] = useState(false);

  const handleDownloadProspectus = () => {
    if (isLoggedIn && hasImage) {
      onPageChange('post-download');
    } else {
      setDownloading(true);
      downloadMockPdf('Full_Institutional_Prospectus');
      setTimeout(() => setDownloading(false), 3000);
    }
  };

  return (
    <section className="py-32 bg-botanical-950 relative overflow-hidden">
      <AnimatePresence>
        {downloading && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[100] bg-white text-botanical-950 px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border border-slate-200"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest">Prospectus Downloaded Successfully</span>
          </motion.div>
        )}
      </AnimatePresence>
      <img 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
        alt="CTA Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_bottom_left,#00D98E_0%,transparent_70%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
          Apply for the 2026 <br />
          Sovereign MBA Cohort
        </h2>
        <p className="text-slate-400 text-lg font-medium mb-16">Join a lineage of leadership that defines the future of the continent.</p>
        
        <div className="bg-white/5 border border-white/10 p-12 rounded-3xl mb-16 max-w-2xl mx-auto flex justify-between items-center">
          <div className="flex space-x-8">
            {['12', '08', '42'].map((val, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-white tracking-tighter">{val}</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-500 mt-1">{['DAYS', 'HOURS', 'MINS'][i]}</div>
              </div>
            ))}
          </div>
          <div className="text-right">
            <div className="text-[8px] font-black tracking-widest text-emerald-500 uppercase mb-1">APPLICATION DEADLINE</div>
            <div className="text-xl font-black text-white tracking-tight">December 1, 2026</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button 
            onClick={() => onPageChange('application')}
            className="bg-emerald-500 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-400 transition-all active:scale-95 shadow-2xl shadow-emerald-500/20"
          >
            Start Application
          </button>
          <button 
            onClick={handleDownloadProspectus}
            className="border border-white/20 text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/5 transition-all active:scale-95"
          >
            Download Prospectus
          </button>
        </div>
      </div>
    </section>
  );
};

export const Home = ({ onPageChange }: HomeProps) => {
  return (
    <>
      <HeroSlider onPageChange={onPageChange} />
      <Stats />
      <Programs onPageChange={onPageChange} />
      <Ecosystem onPageChange={onPageChange} />
      <SimulationLabs onPageChange={onPageChange} />
      <InstrumentStudio onPageChange={onPageChange} />
      <Testimonials />
      <Sessions onPageChange={onPageChange} />
      <CTA onPageChange={onPageChange} />
    </>
  );
};
