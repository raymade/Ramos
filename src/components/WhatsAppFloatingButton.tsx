import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { generateWhatsAppLink } from '../utils/portfolioLogic';
import { MessageSquare, X, Send, ArrowUpRight, Sparkles } from 'lucide-react';

interface WhatsAppFloatingButtonProps {
  currentService?: string;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ currentService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(currentService || 'UI/UX Design');
  const [customClientName, setCustomClientName] = useState('');

  const services = [
    'UI/UX Design',
    'Digital Product Design',
    'Logo Design',
    'Brand Identity Design',
    'Graphic Design',
    'Business Cards & Print',
  ];

  const generatedLink = generateWhatsAppLink(
    DESIGNER_INFO.defaultWhatsApp,
    selectedService,
    customClientName
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-3xl shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25)] border border-[#E2E8F0] overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="bg-gradient-to-r from-[#171717] via-[#262626] to-[#171717] px-5 py-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                <MessageSquare className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="font-extrabold text-sm flex items-center gap-1.5">
                  <span>Chat with Ramos</span>
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                </div>
                <div className="text-[11px] text-[#25D366] font-mono font-bold">+234 706 933 4173</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-5 space-y-4 bg-white text-xs text-[#171717]">
            <p className="text-[#737373] leading-relaxed">
              Hi! Select the design service you want to discuss, and we'll connect directly on WhatsApp with your project details pre-filled.
            </p>

            <div className="space-y-1">
              <label className="block font-bold text-[#171717]">Your Name (optional)</label>
              <input
                type="text"
                placeholder="e.g. Alex Johnson"
                value={customClientName}
                onChange={(e) => setCustomClientName(e.target.value)}
                className="w-full px-3.5 py-2 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] bg-[#F8F8F5]"
              />
            </div>

            <div className="space-y-1">
              <label className="block font-bold text-[#171717]">Service Needed</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3.5 py-2 border border-[#E2E8F0] rounded-xl text-xs focus:ring-2 focus:ring-[#315CF5]/20 focus:border-[#315CF5] bg-[#F8F8F5]"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <a
              href={generatedLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              style={{
                boxShadow: '0 4px 0 0 #15803d, 0 8px 18px rgba(37,211,102,0.3)',
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white font-extrabold rounded-xl hover:-translate-y-0.5 hover:brightness-105 active:translate-y-1 active:shadow-none transition-all cursor-pointer text-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Open in WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 3D Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          boxShadow: '0 5px 0 0 #15803d, 0 12px 24px rgba(37,211,102,0.35)',
        }}
        className="flex items-center gap-2.5 px-4 sm:px-5 py-3.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-2xl hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer group"
        aria-label="Direct WhatsApp Consultation"
        aria-expanded={isOpen}
      >
        <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 group-hover:rotate-6 transition-transform">
          <MessageSquare className="w-4 h-4 fill-current" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-xs font-extrabold tracking-wide hidden sm:inline-block">
            Chat on WhatsApp
          </span>
          <span className="text-[10px] font-mono text-white/90 hidden sm:inline-block">
            +234 706 933 4173
          </span>
        </div>
      </button>
    </div>
  );
};
