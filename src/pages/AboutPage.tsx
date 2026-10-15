import React from 'react';
import { DESIGNER_INFO, HERO_IMAGE } from '../data/portfolioData';
import { generateWhatsAppLink } from '../utils/portfolioLogic';
import { SEOMetadata } from '../components/SEOMetadata';
import { ArrowUpRight, CheckCircle2, Download, Mail, MessageSquare, Wrench, Sparkles, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
  onOpenCapabilitiesModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenCapabilitiesModal,
}) => {
  const whatsappUrl = generateWhatsAppLink(
    DESIGNER_INFO.defaultWhatsApp,
    'Design Collaboration'
  );

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic SEO Metadata */}
      <SEOMetadata
        title="About Ramos Friday Oluwaseun"
        description="Learn about Ramos Friday Oluwaseun, independent UI/UX and visual identity designer behind RAMZY_SN@ALL. Philosophy, tool stack, and collaboration readiness."
        path="/about"
      />

      {/* Colorful Ambient Glow Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#F59E0B]/10 via-[#EF4444]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#315CF5]/10 via-[#8057F5]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Profile Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#E7E7E7]">
          
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#F59E0B]/10 to-[#EF4444]/10 border border-[#F59E0B]/20 text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              <Sparkles className="w-3.5 h-3.5 text-[#EF4444]" />
              <span>About the Designer</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] text-balance">
              Ramos Friday Oluwaseun
            </h1>
            <p className="text-sm font-bold bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] bg-clip-text text-transparent">
              Founder & Principal Designer at {DESIGNER_INFO.brandName}
            </p>
            <p className="text-sm sm:text-base text-[#737373] leading-relaxed max-w-2xl whitespace-pre-line">
              {DESIGNER_INFO.bio}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold">
              <button
                onClick={() => onNavigate('/contact')}
                style={{
                  boxShadow: '0 4px 0 0 #1e3fb5, 0 8px 18px rgba(49,92,245,0.3)',
                }}
                className="px-5 py-2.5 text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
              >
                Start a Conversation
              </button>
              <button
                onClick={onOpenCapabilitiesModal}
                style={{
                  boxShadow: '0 3px 0 0 #cbd5e1',
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[#171717] bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
              >
                <Download className="w-3.5 h-3.5 text-[#315CF5]" />
                <span>Capabilities Deck Summary</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border border-[#E2E8F0] bg-white shadow-[0_16px_36px_-10px_rgba(49,92,245,0.25)] relative group">
              <img
                src={HERO_IMAGE}
                alt="Ramos Friday Oluwaseun design desk showcase"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/40 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {DESIGNER_INFO.brandName} Studio
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Section: Design Philosophy */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E7E7E7] space-y-4 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Design Philosophy
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
            Thoughtful Design. Meaningful Experiences.
          </h2>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed max-w-3xl">
            {DESIGNER_INFO.philosophy}
          </p>
        </div>

        {/* Section: Core Capabilities */}
        <div className="space-y-6 pt-6 border-t border-[#E7E7E7]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5] mb-2">
              Capabilities & Focus Areas
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              Multi-Disciplinary Design Execution
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {DESIGNER_INFO.capabilities.map((cap, idx) => {
              const borderColors = [
                'hover:border-[#315CF5]',
                'hover:border-[#10B981]',
                'hover:border-[#8057F5]',
                'hover:border-[#F59E0B]',
              ];
              const hoverColor = borderColors[idx % borderColors.length];
              return (
                <div
                  key={cap}
                  className={`p-4 bg-white rounded-2xl border border-[#E7E7E7] flex items-start gap-2.5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 ${hoverColor}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-[#171717]">{cap}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Tools & Software */}
        <div className="space-y-6 pt-6 border-t border-[#E7E7E7]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5] mb-2">
              Tool Stack
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              Software & Production Environment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {DESIGNER_INFO.tools.map((tool) => (
              <div
                key={tool.name}
                className="p-5 bg-white rounded-2xl border border-[#E7E7E7] space-y-1 hover:border-[#315CF5]/50 shadow-xs hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-[#171717]">{tool.name}</span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#315CF5] font-mono text-[10px] font-bold">
                    {tool.proficiency}
                  </span>
                </div>
                <div className="text-xs text-[#737373]">{tool.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Collaboration Approach & What to Prepare */}
        <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#E7E7E7] space-y-6 shadow-sm">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5] mb-1">
              Client Readiness
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717]">
              What to Prepare Before We Kick Off
            </h2>
            <p className="text-xs sm:text-sm text-[#737373] mt-1">
              To ensure the fastest turnaround and greatest clarity, having these assets prepared accelerates your project:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 bg-[#F8F8F5] rounded-2xl border border-[#E7E7E7] space-y-2">
              <strong className="text-sm text-[#171717] block font-bold">1. Business Goals</strong>
              <p className="text-[#737373] leading-relaxed">
                A short summary of who your product serves and what single objective this project must achieve.
              </p>
            </div>
            <div className="p-5 bg-[#F8F8F5] rounded-2xl border border-[#E7E7E7] space-y-2">
              <strong className="text-sm text-[#171717] block font-bold">2. References & Links</strong>
              <p className="text-[#737373] leading-relaxed">
                2-3 links to existing products or brand aesthetics that resonate with your vision.
              </p>
            </div>
            <div className="p-5 bg-[#F8F8F5] rounded-2xl border border-[#E7E7E7] space-y-2">
              <strong className="text-sm text-[#171717] block font-bold">3. Timeline & Scope</strong>
              <p className="text-[#737373] leading-relaxed">
                Your target launch date and any hard deadlines (e.g., investor meetings or beta rollout).
              </p>
            </div>
          </div>
        </div>

        {/* 3D Tactile CTA Bar */}
        <div className="p-8 sm:p-10 bg-gradient-to-r from-[#171717] via-[#262626] to-[#171717] text-white rounded-3xl shadow-[0_16px_36px_-10px_rgba(0,0,0,0.3)] flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold">Ready to discuss your project?</div>
            <div className="text-xs text-white/70">Reach out directly via email or message on WhatsApp (+234 706 933 4173).</div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${DESIGNER_INFO.email}`}
              style={{
                boxShadow: '0 3px 0 0 #cbd5e1',
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#171717] bg-white rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#315CF5]" />
              <span>Email Ramos</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                boxShadow: '0 3px 0 0 #15803d',
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#25D366] rounded-xl hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
