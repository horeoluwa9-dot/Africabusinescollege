import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, HelpCircle, ChevronRight, MessageSquare, Mail } from 'lucide-react';
import { SectionLabel } from '../components/SectionLabel';
import { Page } from '../components/Layout';

interface AdmissionsFAQProps {
  onPageChange: (page: Page) => void;
}

const AdmissionsFAQ: React.FC<AdmissionsFAQProps> = ({ onPageChange }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [openId, setOpenId] = React.useState<string | null>(null);

  const categories = ['All', 'Application Process', 'Financial Aid', 'Programs', 'Experience'];

  const faqs = [
    {
      id: '1',
      category: 'Application Process',
      question: "What is the application deadline for the 2026 cohort?",
      answer: "The final deadline for the 2026 Sovereign MBA Cohort is December 1, 2026. However, we operate on a rolling admissions basis and recommend applying early as spots often fill before the final deadline."
    },
    {
      id: '2',
      category: 'Financial Aid',
      question: "Do you offer full-ride scholarships?",
      answer: "Yes, ABC offers a limited number of 'Presidential Impact Scholarships' which cover 100% of tuition. These are awarded based on exceptional entrepreneurial potential and commitment to continental impact."
    },
    {
      id: '3',
      category: 'Experience',
      question: "Is the program 100% virtual?",
      answer: "Yes, our core curriculum is delivered via our high-fidelity virtual platform. However, we organize periodic 'Executive Summits' across major African cities (Lagos, Nairobi, Cairo) which are optional but highly recommended."
    },
    {
      id: '4',
      category: 'Programs',
      question: "Can I switch programs once I've started?",
      answer: "Switches are permitted within the first 4 weeks of the program, provided there is space available in the target program and the candidate meets the specific entry requirements."
    },
    {
      id: '5',
      category: 'Application Process',
      question: "What documents are required for the application?",
      answer: "You will need a digital copy of your official transcripts, two professional references, a personal statement (vision for impact), and a portfolio or CV highlighting your work or venture."
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="py-32 px-6 md:px-12 bg-botanical-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <SectionLabel className="mb-8 justify-center" dark>Admissions Center</SectionLabel>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-12 uppercase leading-[0.85]">
            Knowledge <br /> <span className="text-emerald-500 italic">Base.</span>
          </h1>
          
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for questions..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-6 px-16 text-white text-lg focus:bg-white/20 transition-all focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                activeCategory === cat ? 'bg-botanical-950 text-white shadow-xl' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map(faq => (
              <motion.div 
                layout
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`bg-white border rounded-[32px] p-10 transition-all cursor-pointer ${
                  openId === faq.id ? 'border-emerald-500 shadow-2xl' : 'border-slate-100 hover:border-emerald-500/30 shadow-sm'
                }`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="pr-12">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-emerald-500 mb-2 block">{faq.category}</span>
                    <h4 className="text-xl md:text-2xl font-black text-botanical-950 leading-tight uppercase">{faq.question}</h4>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${openId === faq.id ? 'bg-emerald-500 text-white rotate-90' : 'bg-slate-50 text-slate-300'}`}>
                    <ChevronRight className="w-6 h-6" />
                  </div>
                </div>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-8 pt-8 border-t border-slate-50">
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-24 bg-slate-50 rounded-[40px] border border-dashed border-slate-200">
              <HelpCircle className="w-16 h-16 text-slate-300 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-botanical-950 uppercase mb-2">No results found</h3>
              <p className="text-slate-400 font-medium">Try adjusting your search query or category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-botanical-950">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-8 uppercase leading-tight">Need More Specific <br /> Clarity?</h2>
            <p className="text-slate-400 text-lg font-medium mb-12">Our admissions advisors are available for direct consultation regarding your institutional or individual objectives.</p>
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email Support</div>
                  <div className="text-white font-black">admissions@abc.edu</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Office Hours</div>
                  <div className="text-white font-black">Mon–Sat, 9AM–6PM WAT</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-12 rounded-[40px] border border-white/10">
            <h3 className="text-2xl font-black text-emerald-500 mb-8 uppercase tracking-tight">Institutional Inquiry</h3>
            <div className="space-y-6">
              <input type="text" placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500" />
              <input type="email" placeholder="Work Email" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500" />
              <textarea placeholder="Your Question" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-white focus:outline-none focus:border-emerald-500 resize-none"></textarea>
              <button className="w-full bg-emerald-500 text-white py-5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-600 transition-all">Submit Question</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsFAQ;
