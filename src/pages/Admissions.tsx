import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2,
  HelpCircle,
  FileText,
  CreditCard,
  Users,
  Rocket,
  Building2,
  Globe
} from 'lucide-react';
import { Page } from '../components/Layout';
import { FAQS } from '../constants';

interface AdmissionsProps {
  onPageChange: (page: Page) => void;
}

const Hero = ({ onPageChange }: AdmissionsProps) => {
  const handleDownloadProspectus = () => {
    // Mock download
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'ABC_Prospectus_2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert('Prospectus download started.');
  };

  return (
    <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-4xl">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-px w-12 bg-emerald-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500">ENROLLING FOR 2025 COHORT</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-botanical-950 mb-12">
          Start Your Journey <br />
          at <span className="text-emerald-500">ABC.</span>
        </h1>
        <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mb-12">
          Join an elite cohort of sovereign leaders shaping the future of African commerce through excellence, research, and institutional prestige.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <button 
            onClick={() => onPageChange('application')}
            className="bg-emerald-500 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
          >
            Begin Application
          </button>
          <button 
            onClick={handleDownloadProspectus}
            className="bg-white text-botanical-950 border border-slate-200 px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center space-x-3"
          >
            <span>Download Prospectus</span>
            <FileText className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

const TargetAudience = () => {
  const audiences = [
    { icon: Rocket, title: 'Entrepreneurs', desc: 'Founders looking to scale continental ventures with institutional rigor and sustainable frameworks.' },
    { icon: Building2, title: 'Corporate Leaders', desc: 'Executives aiming to master sovereign leadership and complex pan-African market navigation.' },
    { icon: Globe, title: 'Public Servants', desc: 'Policy makers and administrators bridging the gap between business innovation and public excellence.' }
  ];

  return (
    <section className="py-32 bg-surface-low">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">TARGET AUDIENCE</div>
            <h2 className="text-5xl font-black text-botanical-950 tracking-tighter">Who Should Apply</h2>
          </div>
          <p className="text-slate-500 max-w-md font-medium">
            We seek candidates who are not just looking for a degree, but a platform to catalyze continental transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map(item => (
            <div key={item.title} className="bg-white p-12 rounded-3xl border border-slate-100 hover:shadow-2xl transition-all group cursor-pointer">
              <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-botanical-950 mb-6">{item.title}</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">{item.desc}</p>
              <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform">
                <span>Explore Path</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SelectionJourney = () => {
  const steps = [
    { num: '01', title: 'Explore Programs', desc: 'Review our curriculum and attend a virtual discovery session to align your goals with our ethos.' },
    { num: '02', title: 'Submit Application', desc: 'Complete the online dossier including academic transcripts, leadership essays, and references.' },
    { num: '03', title: 'Rigorous Review', desc: 'Our Admissions Council evaluates your potential for impact within the sovereign business landscape.' },
    { num: '04', title: 'Admissions Decision', desc: 'Successful candidates receive an invitation to join the college, delivered via the portal.' },
    { num: '05', title: 'Enroll & Onboard', desc: 'Confirm your seat and begin the immersion into the ABC ecosystem of excellence.' }
  ];

  return (
    <section className="py-32 bg-botanical-950 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 h-full border-x border-white/20">
          {[1, 2, 3, 4, 5].map(i => <div key={i} className="border-r border-white/20" />)}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">SELECTION JOURNEY</div>
            <h2 className="text-6xl font-black text-white tracking-tighter mb-8 leading-[0.9]">The Road to <br /> Excellence.</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
              Our selection process is rigorous, designed to identify visionaries who possess both the intellect and the character to lead the continent.
            </p>
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Journey" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="space-y-12">
            {steps.map(step => (
              <div key={step.num} className="flex items-start space-x-8 group">
                <div className="text-3xl font-black text-emerald-500/30 group-hover:text-emerald-500 transition-colors">{step.num}</div>
                <div>
                  <h4 className="text-xl font-black text-white mb-3">{step.title}</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Criteria = ({ onPageChange }: AdmissionsProps) => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-16">Admissions Criteria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Academic Excellence', desc: "Bachelor's degree from a recognized institution with a strong GPA or equivalent professional certifications." },
              { title: 'Leadership Record', desc: 'Minimum 3-5 years of documented leadership or entrepreneurial experience with demonstrated impact.' },
              { title: 'Visionary Intent', desc: 'A compelling personal statement outlining how you intend to contribute to Africa\'s sovereign growth.' },
              { title: 'Language Proficiency', desc: 'High-level proficiency in English. Knowledge of a major regional African language is a significant advantage.' }
            ].map(item => (
              <div key={item.title}>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">{item.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-surface-low rounded-3xl p-10 border border-slate-100">
            <h3 className="text-2xl font-black text-botanical-950 mb-8">Upcoming Cohort</h3>
            <div className="space-y-8">
              {[
                { label: 'APPLICATION DEADLINE', date: 'November 15, 2024' },
                { label: 'SCHOLARSHIP CUT-OFF', date: 'October 30, 2024' },
                { label: 'PROGRAM START', date: 'January 20, 2025' }
              ].map(item => (
                <div key={item.label}>
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{item.label}</span>
                  </div>
                  <div className="text-lg font-black text-botanical-950">{item.date}</div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onPageChange('application')}
              className="w-full bg-emerald-500 text-white px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl mt-12 hover:bg-emerald-600 transition-all"
            >
              Secure Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tuition = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">INVESTMENT</div>
        <h2 className="text-5xl font-black text-botanical-950 tracking-tighter mb-8">Tuition & Financials</h2>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium">
          Investing in sovereign leadership yields generational returns. We offer flexible structures to ensure the best minds can access our programs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-surface-low p-12 rounded-3xl border border-slate-100 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-botanical-950 mb-8">Standard Enrollment</h3>
            <div className="flex items-baseline space-x-2 mb-12">
              <span className="text-5xl font-black text-botanical-950">$12,500</span>
              <span className="text-slate-400 font-medium">/ Annual</span>
            </div>
            <ul className="space-y-4 mb-12">
              {['All academic modules & materials', 'Residency intensives (Travel excl.)', 'Lifetime Alumni Network access'].map(item => (
                <li key={item} className="flex items-center space-x-3 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-white border border-slate-200 text-botanical-950 px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-slate-50 transition-all">
            Inquire Details
          </button>
        </div>

        <div className="bg-botanical-950 p-12 rounded-3xl relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,#00D98E_0%,transparent_70%)]" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <h3 className="text-3xl font-black text-white mb-8">Institutional Partnership</h3>
              <p className="text-slate-400 font-medium leading-relaxed mb-12">
                Tailored for organizations sponsoring 3 or more leaders. Includes bespoke research project alignment.
              </p>
            </div>
            <div className="flex items-center text-[10px] font-black uppercase tracking-widest text-emerald-500 group-hover:translate-x-2 transition-transform">
              <span>Inquire for Pricing</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-6">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center">
              <CreditCard className="w-6 h-6 text-emerald-500" />
            </div>
            <div className="text-left">
              <h4 className="font-black text-botanical-950">Scholarships & Financial Access</h4>
              <p className="text-sm text-slate-500 font-medium">Up to 40% merit-based support is available for exceptional candidates.</p>
            </div>
          </div>
          <button className="bg-white text-botanical-950 px-8 py-3 text-[10px] font-black uppercase tracking-widest rounded-lg border border-slate-200 hover:bg-slate-50 transition-all whitespace-nowrap">
            View Financial Aid Portal
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <div className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-4">SUPPORT</div>
        <h2 className="text-5xl font-black text-botanical-950 tracking-tighter">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {FAQS.map(faq => (
          <div key={faq.id} className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-emerald-500/30 transition-all group cursor-pointer">
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-black text-botanical-950">{faq.question}</h4>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:rotate-90 transition-all" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FinalCTA = ({ onPageChange }: AdmissionsProps) => {
  return (
    <section className="py-32 bg-emerald-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80" alt="Lead" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
      </div>
      <div className="absolute inset-0 bg-emerald-500/80" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter mb-12 leading-[0.8]">Ready to Lead?</h2>
        <p className="text-white text-xl font-medium max-w-2xl mx-auto mb-16 opacity-90">
          Your journey to sovereign business excellence begins with a single application. The cohort is waiting for its next pioneer.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={() => onPageChange('application')}
            className="bg-white text-emerald-600 px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-botanical-950 hover:text-white transition-all active:scale-95 shadow-2xl"
          >
            Apply for 2025 Cohort
          </button>
          <button className="bg-transparent border-2 border-white text-white px-12 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all active:scale-95">
            Book Discovery Call
          </button>
        </div>
      </div>
    </section>
  );
};

export const Admissions = ({ onPageChange }: AdmissionsProps) => {
  return (
    <>
      <Hero onPageChange={onPageChange} />
      <TargetAudience />
      <SelectionJourney />
      <Criteria onPageChange={onPageChange} />
      <Tuition />
      <FAQSection />
      <FinalCTA onPageChange={onPageChange} />
    </>
  );
};
