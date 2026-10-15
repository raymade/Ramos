import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { generateWhatsAppLink } from '../utils/portfolioLogic';
import { PWAInstallButton } from './PWAInstallButton';
import { ArrowUpRight, Mail, MessageSquare, ShieldCheck, Inbox } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenLeads?: () => void;
  leadsCount?: number;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLeads, leadsCount = 0 }) => {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = generateWhatsAppLink(DESIGNER_INFO.defaultWhatsApp);

  return (
    <footer className="bg-white border-t border-[#E7E7E7] text-[#171717] pt-16 pb-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E7E7E7]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-[#171717]">
                {DESIGNER_INFO.brandName}
              </span>
            </div>
            <p className="text-sm text-[#737373] leading-relaxed max-w-sm">
              Thoughtful digital experiences and distinctive visual identities designed with purpose. Directed by Ramos Friday Oluwaseun.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#737373]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#315CF5]" />
                <span>Verified Independent Practice</span>
              </div>
              <span aria-hidden="true">·</span>
              <span>Lagos / Global Remote</span>
            </div>
            
            <div className="pt-1">
              <PWAInstallButton variant="footer" />
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Navigation</h4>
            <ul className="space-y-2 text-sm text-[#737373]">
              <li>
                <button
                  onClick={() => onNavigate('/')}
                  className="hover:text-[#171717] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/work')}
                  className="hover:text-[#171717] transition-colors cursor-pointer"
                >
                  Featured Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer"
                >
                  Design Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/about')}
                  className="hover:text-[#171717] transition-colors cursor-pointer"
                >
                  About Ramos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="hover:text-[#171717] transition-colors cursor-pointer"
                >
                  Start a Project
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Services</h4>
            <ul className="space-y-2 text-sm text-[#737373]">
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer text-left"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer text-left"
                >
                  Digital Product Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer text-left"
                >
                  Logo Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer text-left"
                >
                  Brand Identity
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/services')}
                  className="hover:text-[#171717] transition-colors cursor-pointer text-left"
                >
                  Graphic Design
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717]">Direct Connect</h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="flex items-center gap-2 text-[#737373] hover:text-[#315CF5] transition-colors group"
                aria-label={`Send email to ${DESIGNER_INFO.email}`}
              >
                <Mail className="w-4 h-4 text-[#737373] group-hover:text-[#315CF5]" />
                <span className="truncate">{DESIGNER_INFO.email}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#737373] hover:text-[#315CF5] transition-colors group"
                aria-label="Direct WhatsApp consultation with Ramos Friday Oluwaseun"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span className="font-medium text-[#171717]">{DESIGNER_INFO.defaultWhatsApp}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => onNavigate('/contact')}
                style={{
                  boxShadow: '0 4px 0 0 #1e3fb5, 0 8px 18px rgba(49,92,245,0.35)',
                }}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {onOpenLeads && (
                <button
                  onClick={onOpenLeads}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-bold text-[#171717] bg-[#F8F8F5] border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  aria-label="Open Studio Client Inquiries Portal"
                >
                  <Inbox className="w-3.5 h-3.5 text-[#315CF5]" />
                  <span>Client Inquiries ({leadsCount})</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Middle Legal / Policy Links */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#737373] border-b border-[#E7E7E7]">
          <div>
            <p>© {currentYear} {DESIGNER_INFO.brandName}. All rights reserved. Created by {DESIGNER_INFO.ownerName}.</p>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="hover:text-[#171717] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('/terms')}
              className="hover:text-[#171717] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>

        {/* MANDATORY WEBSITE ATTRIBUTION TO 3CORDS SYSTEM GLOBAL RESOURCES */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#737373]">
          <div className="flex items-center gap-1.5">
            <span>Website by</span>
            <a
              href={DESIGNER_INFO.partnerAttribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#171717] hover:text-[#315CF5] transition-colors underline decoration-[#E7E7E7] hover:decoration-[#315CF5] underline-offset-4"
              aria-label="Visit 3Cords System Global Resources official website"
            >
              {DESIGNER_INFO.partnerAttribution.name}
            </a>
          </div>

          <div className="text-[11px] text-[#737373]/80">
            Engineered with Progressive Web App (PWA) & WCAG 2.2 AA Standards
          </div>
        </div>

      </div>
    </footer>
  );
};
