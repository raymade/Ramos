import React from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import {
  ArrowUpRight,
  ArrowRight,
  Smartphone,
  Layout,
  Sparkles,
  Palette,
  FileText,
  CreditCard,
} from 'lucide-react';

interface ServicesOverviewSectionProps {
  onNavigate: (path: string) => void;
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const ServicesOverviewSection: React.FC<ServicesOverviewSectionProps> = ({
  onNavigate,
  onSelectServiceForEnquiry,
}) => {
  const serviceThemes = [
    {
      gradient: 'from-[#315CF5] to-[#06B6D4]',
      shadow: '#1e3fb5',
      iconBg: 'bg-blue-50 text-[#315CF5]',
      borderHover: 'hover:border-[#315CF5]/50',
    },
    {
      gradient: 'from-[#10B981] to-[#059669]',
      shadow: '#047857',
      iconBg: 'bg-emerald-50 text-[#10B981]',
      borderHover: 'hover:border-[#10B981]/50',
    },
    {
      gradient: 'from-[#8057F5] to-[#EC4899]',
      shadow: '#6b21a8',
      iconBg: 'bg-purple-50 text-[#8057F5]',
      borderHover: 'hover:border-[#8057F5]/50',
    },
    {
      gradient: 'from-[#F59E0B] to-[#EF4444]',
      shadow: '#b45309',
      iconBg: 'bg-amber-50 text-[#F59E0B]',
      borderHover: 'hover:border-[#F59E0B]/50',
    },
    {
      gradient: 'from-[#6366F1] to-[#8057F5]',
      shadow: '#4338ca',
      iconBg: 'bg-indigo-50 text-[#6366F1]',
      borderHover: 'hover:border-[#6366F1]/50',
    },
    {
      gradient: 'from-[#EC4899] to-[#F43F5E]',
      shadow: '#be185d',
      iconBg: 'bg-rose-50 text-[#EC4899]',
      borderHover: 'hover:border-[#EC4899]/50',
    },
  ];

  const getIcon = (id: string) => {
    switch (id) {
      case 'ui-ux-design':
        return <Smartphone className="w-5 h-5 text-[#315CF5]" />;
      case 'digital-product-design':
        return <Layout className="w-5 h-5 text-[#10B981]" />;
      case 'logo-design':
        return <Sparkles className="w-5 h-5 text-[#8057F5]" />;
      case 'brand-identity-design':
        return <Palette className="w-5 h-5 text-[#F59E0B]" />;
      case 'graphic-design':
        return <FileText className="w-5 h-5 text-[#6366F1]" />;
      case 'business-cards-and-print':
        return <CreditCard className="w-5 h-5 text-[#EC4899]" />;
      default:
        return <Layout className="w-5 h-5 text-[#315CF5]" />;
    }
  };

  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E7E7]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#315CF5]/10 to-[#8057F5]/10 border border-[#315CF5]/20 text-xs font-bold uppercase tracking-wider text-[#315CF5] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
              <span>Full Studio Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
              Design Services & Creative Solutions
            </h2>
          </div>
          <div>
            <button
              onClick={() => onNavigate('/services')}
              style={{
                boxShadow: '0 3px 0 0 #cbd5e1',
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#171717] bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Detailed Services Guide</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#315CF5]" />
            </button>
          </div>
        </div>

        {/* 6 Services Grid with 3D tactile elevation */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const theme = serviceThemes[index % serviceThemes.length];

            return (
              <div
                key={service.id}
                style={{
                  boxShadow: '0 4px 0 0 #e2e8f0, 0 10px 24px -6px rgba(0,0,0,0.06)',
                }}
                className={`bg-[#F8F8F5] rounded-3xl p-7 border border-[#E7E7E7] flex flex-col justify-between ${theme.borderHover} hover:bg-white hover:-translate-y-1 hover:shadow-[0_8px_0_0_#cbd5e1,0_18px_36px_-10px_rgba(49,92,245,0.18)] transition-all duration-300 group`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_3px_0_0_#e2e8f0] flex items-center justify-center group-hover:scale-105 group-hover:rotate-3 transition-transform">
                      {getIcon(service.id)}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-white font-mono text-[10px] font-bold bg-gradient-to-r ${theme.gradient} shadow-xs`}>
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#171717] group-hover:text-[#315CF5] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#737373] leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables Bulletless list */}
                  <div className="pt-2 border-t border-[#E7E7E7]/60 space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#171717]">
                      Key Deliverables:
                    </div>
                    <ul className="text-xs text-[#737373] space-y-1">
                      {service.deliverables.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-1.5">
                          <span className="text-[#315CF5] font-bold select-none">·</span>
                          <span className="font-medium text-[#171717]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 3D Action Link */}
                <div className="pt-6 mt-4 border-t border-[#E7E7E7]/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectServiceForEnquiry(service.title)}
                    style={{
                      boxShadow: '0 3px 0 0 #cbd5e1',
                    }}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-white border border-[#E2E8F0] rounded-xl text-xs font-bold text-[#171717] hover:text-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#315CF5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
