import React from 'react';
import { DESIGNER_INFO, SERVICES_DATA } from '../data/portfolioData';
import { X, Printer, CheckCircle2, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

interface CapabilitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateContact: () => void;
}

export const CapabilitiesModal: React.FC<CapabilitiesModalProps> = ({
  isOpen,
  onClose,
  onNavigateContact,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E7E7E7] shadow-2xl">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm px-6 py-4 border-b border-[#E7E7E7] flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-[#171717]">{DESIGNER_INFO.brandName}</span>
            <span className="text-[11px] text-[#737373]">· Studio Capabilities One-Sheet</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] bg-[#F8F8F5] border border-[#E7E7E7] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#737373] hover:text-[#171717] rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#171717]">
          
          {/* Header */}
          <div className="space-y-2 border-b border-[#E7E7E7] pb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              Executive Overview
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
              {DESIGNER_INFO.brandName}
            </h2>
            <p className="text-xs sm:text-sm text-[#737373]">
              Owned and Directed by <strong>{DESIGNER_INFO.ownerName}</strong>
            </p>
            <p className="text-xs text-[#737373] max-w-xl leading-relaxed pt-1">
              {DESIGNER_INFO.tagline} Focused on user interface design, mobile applications, data visualization dashboards, and enduring brand identities.
            </p>
          </div>

          {/* Service Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
              Primary Services Matrix
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_DATA.map((svc) => (
                <div key={svc.id} className="p-4 rounded-xl bg-[#F8F8F5] border border-[#E7E7E7] space-y-1.5">
                  <div className="font-bold text-xs text-[#171717]">{svc.title}</div>
                  <p className="text-[11px] text-[#737373] leading-relaxed">{svc.shortDesc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Tools & Software */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#171717]">
              Production Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {DESIGNER_INFO.tools.map((t) => (
                <div key={t.name} className="px-3 py-1.5 rounded-lg border border-[#E7E7E7] bg-white">
                  <span className="font-medium text-[#171717]">{t.name}</span>{' '}
                  <span className="text-[#737373] font-mono text-[11px]">({t.proficiency})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collaboration Guarantees */}
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs space-y-2 text-[#171717]">
            <div className="font-bold flex items-center gap-1.5 text-[#315CF5]">
              <ShieldCheck className="w-4 h-4" />
              <span>Studio Collaboration Standard</span>
            </div>
            <p className="text-[#737373] leading-relaxed">
              Every project comes with full commercial ownership rights, 100% vector SVG/EPS assets, organized Figma source files, developer spacing specifications, and milestone revision checkpoints.
            </p>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-[#E7E7E7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#737373]">
              Direct Inquiries: <a href={`mailto:${DESIGNER_INFO.email}`} className="text-[#171717] font-semibold underline">{DESIGNER_INFO.email}</a>
            </div>
            <button
              onClick={() => {
                onClose();
                onNavigateContact();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#171717] hover:bg-[#315CF5] rounded-xl transition-colors cursor-pointer text-center"
            >
              Start Project Inquiry
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
