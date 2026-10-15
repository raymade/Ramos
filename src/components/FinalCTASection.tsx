import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { generateWhatsAppLink } from '../utils/portfolioLogic';
import { ArrowUpRight, MessageSquare, Sparkles } from 'lucide-react';

interface FinalCTASectionProps {
  onNavigate: (path: string) => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onNavigate }) => {
  const whatsappUrl = generateWhatsAppLink(
    DESIGNER_INFO.defaultWhatsApp,
    'UI/UX & Brand Design'
  );

  return (
    <section className="py-24 bg-[#171717] text-white overflow-hidden relative">
      {/* Colorful Ambient Glow Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-[#315CF5]/25 via-[#8057F5]/25 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-tr from-[#EC4899]/25 via-[#F59E0B]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
        
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#315CF5]/30 to-[#8057F5]/30 border border-[#315CF5]/40 px-4 py-1.5 rounded-full shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-[#EC4899]" />
          <span>Let's Build Something Meaningful</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight">
          Have an idea worth bringing to life?
        </h2>

        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed text-balance">
          Let's turn your next product, brand, or creative project into something thoughtful, useful, and memorable.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            style={{
              boxShadow: '0 4px 0 0 #cbd5e1, 0 10px 24px rgba(0,0,0,0.35)',
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-extrabold text-[#171717] bg-white hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#94a3b8] active:translate-y-1 active:shadow-none rounded-2xl transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#315CF5]" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxShadow: '0 4px 0 0 #15803d, 0 10px 24px rgba(37,211,102,0.3)',
            }}
            className="inline-flex items-center gap-2 px-7 py-4 text-sm font-extrabold text-white bg-[#25D366] hover:-translate-y-0.5 hover:brightness-105 active:translate-y-1 active:shadow-none rounded-2xl transition-all cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 opacity-75" />
          </a>
        </div>

        <div className="pt-8 text-xs text-white/50 flex flex-wrap items-center justify-center gap-4">
          <span>Average response time: &lt; 2 hours</span>
          <span>·</span>
          <span>No commitment project discovery</span>
          <span>·</span>
          <span>NDA protected upon request</span>
        </div>

      </div>
    </section>
  );
};
