import React from 'react';
import { FINTECH_IMAGE, PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, Check, ShieldCheck, Zap, Layers } from 'lucide-react';

interface CaseStudySpotlightProps {
  onSelectProject: (slug: string) => void;
  onNavigateContact: () => void;
}

export const CaseStudySpotlight: React.FC<CaseStudySpotlightProps> = ({
  onSelectProject,
  onNavigateContact,
}) => {
  const fintechProject = PROJECTS_DATA.find((p) => p.slug === 'fintech-mobile-experience') || PROJECTS_DATA[0];

  return (
    <section className="py-20 md:py-28 border-b border-[#E7E7E7] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E7E7]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#8057F5] mb-2 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#315CF5]" />
              <span>Deep Dive Spotlight</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
              Architecting High-Trust Financial Interfaces
            </h2>
          </div>

          <p className="text-xs text-[#737373] max-w-sm">
            Examining the UX deconstruction, transaction verification hierarchy, and Figma token structure behind the Fintech Mobile Experience.
          </p>
        </div>

        {/* Spotlight Card: 2-Column Split */}
        <div className="mt-12 rounded-3xl bg-[#F8F8F5] border border-[#E7E7E7] p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Mockup Showcase */}
          <div className="lg:col-span-6 relative">
            <div
              onClick={() => onSelectProject(fintechProject.slug)}
              className="relative aspect-4/3 rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-lg bg-slate-900 group cursor-pointer"
            >
              <img
                src={FINTECH_IMAGE}
                alt="Fintech Mobile Interface Deep Dive"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-semibold text-white flex items-center gap-1">
                  <span>Explore full case study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Floating Tag Overlap */}
            <div className="absolute -bottom-4 -right-2 sm:right-6 bg-white px-4 py-2 rounded-xl border border-[#E7E7E7] shadow-md flex items-center gap-2 text-xs font-medium text-[#171717]">
              <ShieldCheck className="w-4 h-4 text-[#315CF5]" />
              <span>OLED-Calibrated High Contrast</span>
            </div>
          </div>

          {/* Right Column: Case Study Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#737373]">
                <span className="font-semibold text-[#315CF5]">Mobile Product Architecture</span>
                <span aria-hidden="true">·</span>
                <span>45+ Screens</span>
                <span aria-hidden="true">·</span>
                <span>Figma Tokens</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold text-[#171717]">
                {fintechProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                {fintechProject.challenge}
              </p>
            </div>

            {/* 3 Outcome Pillars */}
            <div className="space-y-3 pt-2 border-t border-[#E7E7E7]/70">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#315CF5]/10 text-[#315CF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div className="text-xs">
                  <strong className="text-[#171717] block font-semibold">3-Tap Fund Transfer Workflow</strong>
                  <span className="text-[#737373]">Cut transaction completion time by consolidating verification modals.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#315CF5]/10 text-[#315CF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div className="text-xs">
                  <strong className="text-[#171717] block font-semibold">200+ Token Figma Component System</strong>
                  <span className="text-[#737373]">Engineered with auto-layout and semantic spacing for frictionless engineering handoff.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#315CF5]/10 text-[#315CF5] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <div className="text-xs">
                  <strong className="text-[#171717] block font-semibold">Real-Time Categorized Ledgers</strong>
                  <span className="text-[#737373]">Color-coded spending velocity cards without cluttered data spreadsheets.</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onSelectProject(fintechProject.slug)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#315CF5] rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#171717] bg-white border border-[#E7E7E7] rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <span>Request Similar Product Scope</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
