import React from 'react';
import { DESIGNER_INFO, HERO_IMAGE } from '../data/portfolioData';
import { ArrowUpRight, ArrowRight, CheckCircle2, Layers, Compass, Sparkles } from 'lucide-react';

interface HomeHeroProps {
  onNavigate: (path: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onNavigate }) => {
  return (
    <section className="pt-10 pb-16 md:pt-16 md:pb-24 border-b border-[#E7E7E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Clean unboxed Eyebrow */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wider uppercase text-[#315CF5]">
              <span>Independent Designer</span>
              <span aria-hidden="true">·</span>
              <span>UI/UX</span>
              <span aria-hidden="true">·</span>
              <span>Branding</span>
              <span aria-hidden="true">·</span>
              <span>Graphics</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.1] text-balance">
              Design that makes digital products intuitive and brands unforgettable.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-2xl">
              I create clean, user-friendly interfaces and distinctive visual identities that help businesses communicate clearly, connect with people, and stand out.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#171717] hover:bg-[#315CF5] rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg active:scale-98 whitespace-nowrap"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/work')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#171717] bg-white hover:bg-slate-50 border border-[#E7E7E7] rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-[#737373]" />
              </button>
            </div>

            {/* Verified Trust Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#737373]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#315CF5]" />
                <span>Ramos Friday Oluwaseun</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#315CF5]" />
                <span>Production-ready Figma & Vector specs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#315CF5]" />
                <span>Zero agency markup</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Studio Showcase */}
          <div className="lg:col-span-5 flex items-center">
            <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-full min-h-[340px] rounded-2xl overflow-hidden border border-[#E7E7E7] bg-white shadow-lg group">
              <img
                src={HERO_IMAGE}
                alt="RAMZY_SN@ALL Studio Work table featuring mobile application UI, design tokens, and typography sheets"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              />
              {/* Subtle scrim for card credit */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-white">RAMZY_SN@ALL Studio</div>
                  <div className="text-white/80 text-[11px]">Interface Architecture & Identity Systems</div>
                </div>
                <div className="text-[11px] font-mono text-white/80 uppercase">Selected Works</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof Row below the split */}
        <div className="mt-16 pt-8 border-t border-[#E7E7E7] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">100%</div>
            <div className="text-xs font-medium text-[#171717]">Custom Visuals</div>
            <div className="text-xs text-[#737373]">Tailored exclusively to your brand goals</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">4 Core</div>
            <div className="text-xs font-medium text-[#171717]">Creative Disciplines</div>
            <div className="text-xs text-[#737373]">UI/UX, Product, Identity & Print</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">Figma & Vector</div>
            <div className="text-xs font-medium text-[#171717]">Complete Source Handoff</div>
            <div className="text-xs text-[#737373]">Tokens, components & production exports</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">Direct</div>
            <div className="text-xs font-medium text-[#171717]">Designer Collaboration</div>
            <div className="text-xs text-[#737373]">Fast WhatsApp & Email feedback cycles</div>
          </div>
        </div>

      </div>
    </section>
  );
};
