import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Target,
  Users,
  Zap,
  Shield,
  Globe2,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Mail,
  Calendar,
  Layers,
  Award,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface AboutProps {
  onPageChange: (page: Page, id?: string) => void;
}

const AboutHero = () => {
  return (
    <section className="pt-12 pb-32 bg-white px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-1 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">The Institution</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-[0.9]">
              Architecture of <br /> <span className="text-emerald-500 italic">Execution</span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed font-bold mb-8">
              ABC offers academic programs, executive programs, simulation-based learning, and custom cohort programs in business education that transform individuals, organisations, and business practices across Africa and beyond.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12">
              Our programs stand out because of their emphasis on practical execution, African market intelligence, and community-driven accountability. We are a virtual-first institution, purpose-built for the digital era, combining the rigor of a top business school with the agility and accessibility of a modern technology company.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-black text-botanical-950">2026</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-1">Established</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-botanical-950">54</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-1">Countries</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center">
                <div className="text-3xl font-black text-botanical-950">100%</div>
                <div className="text-[8px] font-black uppercase tracking-widest text-slate-400 mt-1">Virtual</div>
              </div>
            </div>
          </div>
          <div className="order-2 lg:order-2 relative">
            <div className="aspect-square rounded-[48px] overflow-hidden border border-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80" 
                alt="ABC Campus Life" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-emerald-500 rounded-full -z-10 blur-[100px] opacity-20" />
          </div>
      </div>
    </section>
  );
};

const DirectorMessage = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto bg-slate-50 rounded-[64px] mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-white px-3 py-1 rounded-full mb-8 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Message from the Academic Director</span>
          </div>
          
          <div className="relative">
            <span className="absolute -top-12 -left-8 text-botanical-950/5 text-[160px] font-black leading-none pointer-events-none">"</span>
            <blockquote className="relative z-10">
              <div className="text-xl md:text-2xl font-medium text-slate-600 leading-relaxed mb-12 tracking-tight">
                Dear Students, Alumni, Partners and Stakeholders,
                <br /><br />
                As we move through 2026, I extend my warmest greetings and deepest appreciation for your continued commitment to Africa Business College. Your belief in this institution, and in the idea that Africa's entrepreneurs and leaders deserve world-class, execution-focused education, remains central to everything we do.
                <br /><br />
                We are not building a traditional business school. We are building the institution Africa has always needed: one that meets the continent's builders exactly where they are, and equips them to go further than anyone imagined. That is our promise, and we renew it every single day.
              </div>
              
              <div className="mb-12">
                <div className="text-2xl font-black text-botanical-950 uppercase tracking-tighter">Professor James Adesina</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Academic Director & Co-Founder, Africa Business College</div>
              </div>

              <div className="flex flex-wrap gap-6">
                <button 
                  onClick={() => onPageChange('programs')}
                  className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center space-x-3 shadow-xl"
                >
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center space-x-4 group cursor-pointer border-b border-slate-200 pb-1" onClick={() => onPageChange('experience')}>
                  <span className="text-[10px] font-black uppercase tracking-widest text-botanical-950 group-hover:mr-2 transition-all">Read the full message</span>
                  <ArrowRight className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            </blockquote>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-white shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=1000&q=80" 
              alt="Professor James Adesina" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-botanical-950/40 via-transparent to-transparent" />
          </div>
          
          <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Active Faculty</span>
            </div>
            <p className="text-sm font-black text-botanical-950 leading-tight">
              "We bridge the gap between academic theory and the grit required to build in Lagos, Nairobi, and Cairo."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutOverview = () => {
  return (
    <section className="py-32 bg-botanical-950 relative overflow-hidden">
      <AnimatedBackground intensity="medium" className="opacity-30" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="h-px w-12 bg-emerald-500 mb-8" />
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 uppercase leading-tight">
              Africa's leading virtual <br /> business college
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed font-medium mb-12">
              Africa Business College (ABC) is a virtual-first institution dedicated to producing the next generation of entrepreneurs, leaders, and innovators shaping Africa's economic future. ABC was founded on the belief that Africa's business builders deserve education that reflects their market realities, not curricula borrowed from the West and applied without context.
            </p>
          </div>
          <div className="space-y-8 pt-4">
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">About ABC</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              ABC offers academic programs, executive programs, simulation-based learning, and custom cohort programs in business education that transform individuals, organisations, and business practices across Africa and beyond. Our programs stand out because of their emphasis on practical execution, African market intelligence, and community-driven accountability.
            </p>
            <p className="text-slate-400 font-medium leading-relaxed border-l-2 border-emerald-500 pl-8 italic">
              We are a virtual-first institution, purpose-built for the digital era, combining the rigor of a top business school with the agility and accessibility of a modern technology company.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FacultyResearch = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-24">
        <div className="inline-flex items-center space-x-2 bg-slate-100 px-3 py-1 rounded-full mb-6">
          <BookOpen className="w-3 h-3 text-slate-600" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Thought Leadership</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter mb-8 uppercase mx-auto max-w-4xl">
          A practitioner-led faculty dedicated to shaping, teaching, and evolving African business practice
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="p-12 bg-surface-low rounded-[40px] border border-slate-100">
          <h3 className="text-2xl font-black text-botanical-950 mb-8 uppercase tracking-tight">Faculty and Research</h3>
          <p className="text-slate-500 font-medium leading-relaxed mb-8">
            Our faculty comprises highly qualified practitioners and academics, entrepreneurs who have built and scaled businesses, investors who have funded dozens of ventures, and economists who have shaped policy across the continent. They bring a unique combination of research, professional experience, and consulting from African and global organisations, using these to equip every cohort with knowledge and practical guidance.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-black text-botanical-950 mb-2">45+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Industry Experts</div>
            </div>
            <div>
              <div className="text-3xl font-black text-botanical-950 mb-2">18</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Research Fellows</div>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          <div>
            <h4 className="text-xl font-black text-botanical-950 mb-4 flex items-center space-x-3">
              <Zap className="w-5 h-5 text-emerald-500" />
              <span>Emerging Research</span>
            </h4>
            <p className="text-slate-500 font-medium leading-relaxed">
              ABC is one of Africa's emerging research institutions in entrepreneurship and business management. Our Research and Intelligence unit is dedicated to advancing knowledge through applied research on African markets, consistently raising the quality and relevance of what we teach and publish.
            </p>
          </div>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
              alt="Faculty Meeting" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgramDiscovery = ({ onPageChange }: AboutProps) => {
  const highlightProgramIds = ['1', '2', '4', '5'];
  const { programs } = React.useMemo(() => {
    // Importing from constants in a real app, here we mock the selection for styling
    return { 
      programs: [
        { id: '1', title: 'Entrepreneurship', category: 'Entrepreneurship', duration: '6 Months', format: 'Cohort-Based | Full-time', excerpt: 'Designed for founders and early-stage entrepreneurs seeking to build, validate, and scale businesses.' },
        { id: '2', title: 'Venture Building', category: 'Entrepreneurship', duration: '12 Months', format: 'Online | Full-time', excerpt: 'Acquire the capabilities to structure and grow a venture from the ground up with simulation support.' },
        { id: '4', title: 'Investment & Finance', category: 'Finance', duration: '8 Months', format: 'Online | Part-time', excerpt: 'Master financial modelling, investment evaluation, and capital strategy in African markets.' },
        { id: '5', title: 'Innovation Leadership', category: 'Leadership', duration: '5 Months', format: 'Online | Executive', excerpt: 'Ideal for senior professionals seeking to lead innovation and drive transformation at scale.' }
      ]
    };
  }, []);

  return (
    <section className="py-32 bg-slate-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-botanical-950 tracking-tighter uppercase mb-6">
              Choose the Right <br /> Program for You
            </h2>
            <p className="text-slate-500 font-medium max-w-xl">
              Discover the right program to advance in your professional or entrepreneurial journey.
            </p>
          </div>
          <button 
            onClick={() => onPageChange('programs')}
            className="mt-8 md:mt-0 bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all flex items-center space-x-3 w-fit"
          >
            <span>View All Programs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, i) => (
            <motion.div 
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-slate-100 hover:border-emerald-500/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={[
                    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
                    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80'
                  ][i]}
                  alt={program.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-botanical-950/20 group-hover:bg-transparent transition-colors" />
              </div>
              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-[8px] font-black tracking-widest text-emerald-500 uppercase block mb-2">{program.category}</span>
                  <h3 className="text-xl font-black text-botanical-950 uppercase tracking-tight leading-tight group-hover:text-emerald-500 transition-colors">
                    {program.title}
                  </h3>
                </div>
                
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 line-clamp-3">
                  {program.excerpt}
                </p>

                {/* Meta Row */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-100 mt-auto">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{program.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-500" />
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[0]}</span>
                      <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">{program.format.split(' | ')[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: CTAs */}
                <div className="flex items-center justify-between mt-10">
                  <button 
                    onClick={() => onPageChange('program-detail', program.id)}
                    className="bg-botanical-950 text-white px-6 py-3.5 text-[8px] font-black uppercase tracking-widest rounded-xl group-hover:bg-emerald-500 transition-all"
                  >
                    View Program
                  </button>
                  <button 
                    onClick={() => onPageChange('program-detail', program.id)}
                    className="text-[8px] font-black uppercase tracking-widest text-slate-400 hover:text-botanical-950"
                  >
                    Quick View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AlumniSection = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-8">
            <Users className="w-3 h-3 text-emerald-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">ABC Alumni Community</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase leading-tight">
            Africa Business College Alumni
          </h2>
          <p className="text-2xl font-black text-emerald-500 mb-8">
            A growing community of over 2,400 business leaders, founders, and innovators
          </p>
          <p className="text-lg text-slate-500 leading-relaxed font-medium mb-12">
            The ABC Alumni Network is a vibrant community of graduates committed to supporting the ABC mission, fostering continuous learning, and driving meaningful economic impact across Africa. Alumni actively support each other with funding, talent, partnerships, and mentorship long after their program ends.
          </p>
          <button 
            onClick={() => onPageChange('community')}
            className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl"
          >
            Learn More
          </button>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80" 
              alt="Alumni Network" 
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Stats Overlay */}
          <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 flex items-center space-x-8">
            <div>
              <div className="text-3xl font-black text-botanical-950 mb-1">18</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Countries</div>
            </div>
            <div className="w-px h-12 bg-slate-100" />
            <div>
              <div className="text-3xl font-black text-botanical-950 mb-1">92%</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Launch Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ABCAdvantage = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Practical, Execution-First Learning',
      desc: 'ABC is the business school for Africa. Our unique methodology uses African and international case studies, real-world projects, and simulation environments to equip participants with the fundamentals of building and operating in dynamic African markets.'
    },
    {
      icon: TrendingUp,
      title: 'Career and Venture Accelerator',
      desc: '92% of ABC graduates launch or accelerate a business venture, or secure a new leadership role within 12 months of completing their program, a testament to the practical depth of our curriculum.'
    },
    {
      icon: Globe2,
      title: 'Pan-African Network',
      desc: 'Our cohort-based model and alumni network create deep connections across 18 African countries, giving graduates access to co-founders, investors, mentors, and collaborators across the continent.'
    },
    {
      icon: Zap,
      title: 'Simulation-Driven Experience',
      desc: 'Our simulation labs mirror real African market conditions, allowing students to test strategies, make investment decisions, and navigate business challenges in a live environment, before the stakes are real.'
    }
  ];

  return (
    <section className="py-32 bg-botanical-950 relative overflow-hidden">
      <AnimatedBackground intensity="low" className="opacity-20" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center space-x-2 bg-white/5 px-3 py-1 rounded-full mb-6 border border-white/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">The ABC Advantage</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 uppercase">
            A Serious African Business Institution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {advantages.map((adv, i) => (
            <div key={i} className="flex items-start space-x-8 p-10 bg-white/5 rounded-[40px] border border-white/10 hover:border-emerald-500/50 transition-all group">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all text-emerald-500">
                <adv.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tight">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Recognitions = () => {
  const partners = [
    'African Union', 'Pan-African VC Alliance', 'Google for Startups Africa', 
    'African Development Bank', 'GNAM Affiliate', 'Tech Council Africa'
  ];

  return (
    <section className="py-24 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Recognitions & Partnerships</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {partners.map(p => (
            <span key={p} className="text-xl font-bold tracking-tight text-botanical-950 whitespace-nowrap">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSection = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-4 uppercase">News</h2>
          <p className="text-slate-500 font-medium">Learn more about ABC through stories, updates, and insights from our community.</p>
        </div>
        <button 
          onClick={() => onPageChange('community')}
          className="hidden md:flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-botanical-950 border-b-2 border-emerald-500 pb-1"
        >
          <span>View All News</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80', title: 'ABC Launches New Simulation Lab for Market Expansion' },
          { image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80', title: 'Cohort 2026: The Rise of Pan-African Fintech Founders' },
          { image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', title: 'Professor Adesina on the Future of African Venture Capital' }
        ].map((news, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-slate-100">
              <img 
                src={news.image}
                alt={news.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-2">Institutional Update</div>
            <h4 className="text-xl font-black text-botanical-950 mb-4 group-hover:text-emerald-500 transition-colors">{news.title}</h4>
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Oct 24, 2026</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const CorporateConnections = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-32 bg-surface-low px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8 uppercase">Corporate Connections</h2>
          <p className="text-xl text-slate-500 leading-relaxed font-medium mb-12">
            Connect with us to gain access to our community for your talent, training, research, and thought leadership needs.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MapPin className="w-5 h-5 text-emerald-500" />
              <span className="text-botanical-950 font-black text-sm uppercase tracking-tight">Virtual-First, Serving learners across all of Africa</span>
            </div>
            <div className="flex items-center space-x-4">
              <Calendar className="w-5 h-5 text-emerald-500" />
              <span className="text-botanical-950 font-black text-sm uppercase tracking-tight">Office Hours: Monday, Saturday, 9:00 AM, 6:00 PM WAT</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white rounded-3xl border border-slate-100 flex flex-col justify-between overflow-hidden">
            <div>
              <Mail className="w-6 h-6 text-emerald-500 mb-6" />
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">General Inquiries</h4>
              <p className="text-xs sm:text-sm font-black text-botanical-950 break-all lg:break-normal">info@africabusinesscollege.com</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 flex flex-col justify-between overflow-hidden">
            <div>
              <Users className="w-6 h-6 text-emerald-500 mb-6" />
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Admissions</h4>
              <p className="text-xs sm:text-sm font-black text-botanical-950 break-all lg:break-normal">admissions@africabusinesscollege.com</p>
            </div>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-100 flex flex-col justify-between md:col-span-2 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <Award className="w-6 h-6 text-emerald-500 mb-6" />
                <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">Partnerships</h4>
                <p className="text-xs sm:text-sm font-black text-botanical-950 break-all lg:break-normal">partnerships@africabusinesscollege.com</p>
              </div>
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-botanical-950 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all whitespace-nowrap"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FinalIntroCTA = ({ onPageChange }: AboutProps) => {
  return (
    <section className="py-48 text-center bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-6xl md:text-8xl font-black text-botanical-950 tracking-tighter mb-12 uppercase leading-[0.85]">
          Ready to Shape <br /> <span className="text-emerald-500 italic">Africa's</span> Business Future?
        </h2>
        <p className="text-xl text-slate-500 font-medium mb-12">
          Apply for the next cohort and take your place among Africa's builders.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onPageChange('application')}
            className="bg-botanical-950 text-white px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all active:scale-95 shadow-2xl shadow-botanical-950/20"
          >
            Apply Now
          </button>
          <button 
            onClick={() => onPageChange('programs')}
            className="bg-slate-100 text-botanical-950 px-12 py-6 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-all active:scale-95"
          >
            Explore Programs
          </button>
        </div>
        <div className="mt-12">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 italic">*Next cohort, limited spots available*</span>
        </div>
      </div>
    </section>
  );
};

export const About = ({ onPageChange }: AboutProps) => {
  return (
    <div className="pt-24 bg-white overflow-x-hidden">
      <AboutHero />
      <DirectorMessage onPageChange={onPageChange} />
      <FacultyResearch onPageChange={onPageChange} />
      <ProgramDiscovery onPageChange={onPageChange} />
      <AlumniSection onPageChange={onPageChange} />
      <ABCAdvantage />
      <Recognitions />
      <NewsSection onPageChange={onPageChange} />
      <CorporateConnections onPageChange={onPageChange} />
      <FinalIntroCTA onPageChange={onPageChange} />
    </div>
  );
};
