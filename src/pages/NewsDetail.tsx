import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Linkedin, Twitter, MessageSquare } from 'lucide-react';
import { Page } from '../components/Layout';
import { AnimatedBackground } from '../components/AnimatedBackground';

interface NewsDetailProps {
  onPageChange: (page: Page) => void;
  newsId?: string;
}

const NEWS_ARTICLES = {
  'simulation-lab': {
    title: 'ABC Launches New Simulation Lab for Market Expansion',
    date: 'Oct 24, 2026',
    author: 'Institutional Communications',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
    content: `
      Africa Business College today announced the launch of its newest simulation-driven learning environment: The Market Expansion Lab. 
      This lab is designed specifically for startups and growing enterprises looking to navigate the complexities of cross-border trade 
      within the African Continental Free Trade Area (AfCFTA).

      "We are moving beyond theoretical frameworks," says Professor James Adesina, Academic Director. "Our students can now test their 
      pricing strategies, logistics models, and regulatory compliance in a high-fidelity digital twin of the African market."

      The lab features real-time data integration from pan-African logistics partners and commercial banks, allowing students to 
      witness the immediate impact of their strategic decisions.
    `
  },
  'fintech-founders': {
    title: 'Cohort 2026: The Rise of Pan-African Fintech Founders',
    date: 'Oct 15, 2026',
    author: 'Zara Ibrahim',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    content: `
      The latest cohort at ABC represents a significant shift in the African tech landscape. Over 40% of the current student body 
      is actively building products in the fintech and cross-border payments space.

      This trend highlights the growing demand for home-grown solutions to Africa's liquidity and financial inclusion challenges. 
      Our curriculum has evolved to include deep-dives into regulatory sandboxes across West and East Africa, ensuring our 
      founders are compliant and scalable from day one.
    `
  },
  'adesina-vc': {
    title: 'Professor Adesina on the Future of African Venture Capital',
    date: 'Oct 05, 2026',
    author: 'Editorial Board',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    content: `
      In a keynote session last week, Professor James Adesina shared his outlook for the next decade of African venture capital. 
      He argues that "Sovereign Alpha"—the ability of local institutional capital to drive returns—will be the defining metric 
      for the continent's success.

      "We've relied on foreign direct investment for too long," Adesina noted. "The future belongs to the funds that understand 
      the nuances of local consumption patterns and can navigate the political economy of the 54 nations."
    `
  }
};

export const NewsDetail = ({ onPageChange, newsId = 'simulation-lab' }: NewsDetailProps) => {
  const article = NEWS_ARTICLES[newsId as keyof typeof NEWS_ARTICLES] || NEWS_ARTICLES['simulation-lab'];

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto">
        <button 
          onClick={() => onPageChange('about')}
          className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 transition-all mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News</span>
        </button>

        <div className="flex items-center space-x-4 mb-6">
          <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">Institutional Update</span>
          <div className="flex items-center space-x-2 text-slate-400">
            <Calendar className="w-3 h-3" />
            <span className="text-[8px] font-black uppercase tracking-widest">{article.date}</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-botanical-950 tracking-tighter uppercase mb-12 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center justify-between py-8 border-y border-slate-100 mb-12">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Written By</p>
              <p className="text-sm font-black text-botanical-950 uppercase">{article.author}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full border border-slate-100 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <Linkedin className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full border border-slate-100 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <Twitter className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full border border-slate-100 text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="aspect-[21/9] rounded-[48px] overflow-hidden mb-16 relative">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale" 
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
          {article.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-8">{paragraph.trim()}</p>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-50 rounded-[48px] border border-slate-100 text-center">
          <MessageSquare className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-2xl font-black text-botanical-950 uppercase tracking-tight mb-4">Join the Conversation</h3>
          <p className="text-slate-500 mb-8">Discuss this institutional update within our cohort network.</p>
          <button 
            onClick={() => onPageChange('community')}
            className="bg-botanical-950 text-white px-10 py-5 text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl"
          >
            Access Cohort Network
          </button>
        </div>
      </section>
    </div>
  );
};
