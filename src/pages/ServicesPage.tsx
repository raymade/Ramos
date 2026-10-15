import React, { useState } from 'react';
import { SERVICES_DATA, DESIGNER_INFO } from '../data/portfolioData';
import { generateWhatsAppLink } from '../utils/portfolioLogic';
import { SEOMetadata } from '../components/SEOMetadata';
import { ArrowUpRight, Check, HelpCircle, MessageSquare, ChevronDown, ChevronUp, Sparkles, Layers } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: string) => void;
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForEnquiry,
}) => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (key: string) => {
    setOpenFaq(openFaq === key ? null : key);
  };

  const serviceColors = [
    { gradient: 'from-[#315CF5] to-[#06B6D4]', shadow: '#1e3fb5', border: 'border-[#315CF5]/20', badge: 'bg-blue-50 text-[#315CF5]' },
    { gradient: 'from-[#10B981] to-[#06B6D4]', shadow: '#047857', border: 'border-[#10B981]/20', badge: 'bg-emerald-50 text-[#10B981]' },
    { gradient: 'from-[#8057F5] to-[#EC4899]', shadow: '#6b21a8', border: 'border-[#8057F5]/20', badge: 'bg-purple-50 text-[#8057F5]' },
    { gradient: 'from-[#F59E0B] to-[#EF4444]', shadow: '#b45309', border: 'border-[#F59E0B]/20', badge: 'bg-amber-50 text-[#F59E0B]' },
    { gradient: 'from-[#6366F1] to-[#8057F5]', shadow: '#4338ca', border: 'border-[#6366F1]/20', badge: 'bg-indigo-50 text-[#6366F1]' },
    { gradient: 'from-[#EC4899] to-[#F43F5E]', shadow: '#be185d', border: 'border-[#EC4899]/20', badge: 'bg-rose-50 text-[#EC4899]' },
  ];

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic SEO Metadata */}
      <SEOMetadata
        title="Design Services & Strategic Solutions"
        description="Comprehensive UI/UX design, digital product architecture, logo design, visual identity systems, and graphic design by Ramos Friday Oluwaseun (RAMZY_SN@ALL)."
        path="/services"
      />

      {/* Colorful Ambient Glow Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#8057F5]/10 via-[#315CF5]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#EC4899]/10 via-[#F59E0B]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-10 border-b border-[#E7E7E7]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#315CF5]/10 to-[#8057F5]/10 border border-[#315CF5]/20 text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
            <span>Design Services & Strategic Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] text-balance">
            Delivering Measurable Impact Through Purposeful Design
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            From initial product architecture to scalable brand identity guidelines, explore each service, its concrete deliverables, and transparent workflow.
          </p>
        </div>

        {/* 3D Service Quick-Jump Menu */}
        <div className="space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#737373] flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#315CF5]" />
            <span>Quick-Jump to Service Offerings:</span>
          </div>
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none p-2 bg-[#F0F2F6] rounded-2xl border border-[#E2E8F0] shadow-inner">
            {SERVICES_DATA.map((service, idx) => {
              const theme = serviceColors[idx % serviceColors.length];
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToService(service.id)}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="px-4 py-2 bg-white hover:bg-slate-50 text-[#171717] hover:text-[#315CF5] text-xs font-bold rounded-xl border border-[#E2E8F0] transition-all cursor-pointer whitespace-nowrap shrink-0 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none flex items-center gap-2"
                >
                  <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${theme.gradient}`} />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Strategic Guidance Box: Understanding the Difference */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] space-y-4 shadow-[0_10px_30px_-10px_rgba(49,92,245,0.08)]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Choosing the Right Service for Your Stage
          </div>
          <h2 className="text-xl font-bold text-[#171717]">
            UI vs. UX vs. Branding: What does your business actually need?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs">
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#315CF5]/5 to-transparent border border-[#315CF5]/15 space-y-2">
              <div className="w-2 h-2 rounded-full bg-[#315CF5]" />
              <strong className="text-sm text-[#171717] block">UX Design (User Experience)</strong>
              <p className="text-[#737373] leading-relaxed">
                Choose this if your product has high drop-off rates, confusing navigation, or multi-step checkout friction. We map user journeys, flows, and usability hierarchy.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#10B981]/5 to-transparent border border-[#10B981]/15 space-y-2">
              <div className="w-2 h-2 rounded-full bg-[#10B981]" />
              <strong className="text-sm text-[#171717] block">UI Design (User Interface)</strong>
              <p className="text-[#737373] leading-relaxed">
                Choose this if your wireframes are ready and you need polished, modern visual design, component libraries, typography, and developer-ready Figma specifications.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#8057F5]/5 to-transparent border border-[#8057F5]/15 space-y-2">
              <div className="w-2 h-2 rounded-full bg-[#8057F5]" />
              <strong className="text-sm text-[#171717] block">Brand Identity Design</strong>
              <p className="text-[#737373] leading-relaxed">
                Choose this if you are launching a new company or rebranding. Beyond a logo, we define your colors, typography rules, voice, and comprehensive brand guide book.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Service Sections */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const theme = serviceColors[index % serviceColors.length];
            const serviceWhatsAppUrl = generateWhatsAppLink(
              DESIGNER_INFO.defaultWhatsApp,
              service.title
            );

            return (
              <section
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E7E7] space-y-8 scroll-mt-24 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-10px_rgba(49,92,245,0.15)] transition-all duration-300"
              >
                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-[#E7E7E7]">
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className={`px-2.5 py-0.5 rounded-full text-white font-bold bg-gradient-to-r ${theme.gradient} text-[10px]`}>
                        0{index + 1}
                      </span>
                      <span className="uppercase tracking-wider text-[#737373] font-semibold">Service Scope</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                      {service.title}
                    </h2>
                    <p className="text-sm text-[#737373] leading-relaxed">
                      {service.longDesc}
                    </p>
                  </div>

                  {/* Quick 3D CTAs */}
                  <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
                    <button
                      onClick={() => onSelectServiceForEnquiry(service.title)}
                      style={{
                        boxShadow: `0 4px 0 0 ${theme.shadow}, 0 6px 16px rgba(0,0,0,0.12)`,
                      }}
                      className={`px-5 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r ${theme.gradient} rounded-xl transition-all cursor-pointer whitespace-nowrap text-center -translate-y-0.5 hover:-translate-y-1 hover:brightness-105 active:translate-y-0.5 active:shadow-none`}
                    >
                      Request a Quote
                    </button>
                    <a
                      href={serviceWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        boxShadow: '0 3px 0 0 #cbd5e1',
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold text-[#171717] bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all whitespace-nowrap"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>WhatsApp Ramos</span>
                    </a>
                  </div>
                </div>

                {/* 3-Column Specifications: Scope, Deliverables, Workflow */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
                  {/* Column 1: Scope */}
                  <div className="space-y-3 p-5 rounded-2xl bg-[#F8F8F5] border border-[#E7E7E7]">
                    <h3 className="font-bold uppercase tracking-wider text-[#171717]">
                      Scope of Work
                    </h3>
                    <ul className="space-y-2 text-[#737373]">
                      {service.scope.map((s) => (
                        <li key={s} className="flex items-start gap-2">
                          <span className="text-[#315CF5] font-bold select-none">·</span>
                          <span className="leading-relaxed">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Deliverables */}
                  <div className="space-y-3 p-5 rounded-2xl bg-[#F8F8F5] border border-[#E7E7E7]">
                    <h3 className="font-bold uppercase tracking-wider text-[#171717]">
                      Expected Deliverables
                    </h3>
                    <ul className="space-y-2 text-[#737373]">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span className="leading-relaxed font-medium text-[#171717]">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Typical Workflow */}
                  <div className="space-y-3 p-5 rounded-2xl bg-[#F8F8F5] border border-[#E7E7E7]">
                    <h3 className="font-bold uppercase tracking-wider text-[#171717]">
                      Typical Workflow
                    </h3>
                    <ol className="space-y-2 text-[#737373]">
                      {service.workflow.map((w, wIdx) => (
                        <li key={w} className="leading-relaxed flex items-start gap-2">
                          <span className="font-bold text-[#8057F5] select-none">{wIdx + 1}.</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Service FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="pt-6 border-t border-[#E7E7E7]/80 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#171717] flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4 text-[#315CF5]" />
                      <span>Frequently Asked Questions</span>
                    </div>

                    <div className="space-y-2">
                      {service.faqs.map((faq, fIdx) => {
                        const faqKey = `${service.id}-${fIdx}`;
                        const isOpen = openFaq === faqKey;
                        return (
                          <div
                            key={faqKey}
                            className="border border-[#E7E7E7] rounded-xl overflow-hidden bg-[#F8F8F5] transition-all"
                          >
                            <button
                              onClick={() => toggleFaq(faqKey)}
                              className="w-full px-4 py-3 text-left font-semibold text-xs text-[#171717] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100 transition-colors"
                            >
                              <span>{faq.question}</span>
                              {isOpen ? (
                                <ChevronUp className="w-4 h-4 text-[#737373]" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-[#737373]" />
                              )}
                            </button>
                            {isOpen && (
                              <div className="px-4 pb-3 pt-1 text-xs text-[#737373] leading-relaxed border-t border-[#E7E7E7]/50">
                                {faq.answer}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
};
