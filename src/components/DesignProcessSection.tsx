import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ArrowRight, Check, Sparkles } from 'lucide-react';

export const DesignProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const stepThemes = [
    { color: 'from-[#315CF5] to-[#06B6D4]', shadow: '#1e3fb5', border: 'border-[#315CF5]', badge: 'bg-blue-50 text-[#315CF5]' },
    { color: 'from-[#10B981] to-[#059669]', shadow: '#047857', border: 'border-[#10B981]', badge: 'bg-emerald-50 text-[#10B981]' },
    { color: 'from-[#8057F5] to-[#EC4899]', shadow: '#6b21a8', border: 'border-[#8057F5]', badge: 'bg-purple-50 text-[#8057F5]' },
    { color: 'from-[#F59E0B] to-[#EF4444]', shadow: '#b45309', border: 'border-[#F59E0B]', badge: 'bg-amber-50 text-[#F59E0B]' },
  ];

  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E7E7]">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#315CF5]/10 to-[#8057F5]/10 border border-[#315CF5]/20 text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
              <span>Workflow & Method</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
              The 4-Step Collaborative Design Process
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              Every project is structured to minimize ambiguity and maximize momentum. While the exact timeline adapts to your project scope, this framework ensures predictability from start to finish.
            </p>
          </div>
        </div>

        {/* 3D Step Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNER_INFO.designProcess.map((proc, index) => {
            const isSelected = activeStep === index;
            const theme = stepThemes[index % stepThemes.length];

            return (
              <div
                key={proc.step}
                onClick={() => setActiveStep(index)}
                style={
                  isSelected
                    ? {
                        boxShadow: `0 8px 0 0 ${theme.shadow}, 0 16px 30px rgba(0,0,0,0.12)`,
                      }
                    : {
                        boxShadow: '0 4px 0 0 #e2e8f0',
                      }
                }
                className={`rounded-3xl p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? `bg-white ${theme.border} -translate-y-1`
                    : 'bg-[#F8F8F5] border-[#E7E7E7] hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#cbd5e1]'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full text-white bg-gradient-to-r ${theme.color} shadow-xs`}
                    >
                      {proc.step}
                    </span>
                    <span className="text-[10px] font-bold text-[#737373] bg-white border border-[#E7E7E7] px-2.5 py-0.5 rounded-full shadow-xs">
                      {proc.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#171717]">
                    {proc.title}
                  </h3>

                  <p className="text-xs text-[#737373] leading-relaxed">
                    {proc.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#E7E7E7]/80">
                  <div className="text-[11px] font-bold text-[#171717] mb-2 uppercase tracking-wider">
                    Expected Outputs:
                  </div>
                  <ul className="text-xs text-[#737373] space-y-1.5">
                    {proc.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="font-medium text-[#171717]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F8F8F5] border border-[#E7E7E7] text-xs text-[#737373] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
          <span>
            <strong className="text-[#171717]">Adaptive Milestone Delivery:</strong> Project stages can be customized to match your internal sprint cycles, launch dates, and executive review cadences.
          </span>
          <span className="text-[#315CF5] font-bold whitespace-nowrap">
            Weekly Live Async Loom Check-ins
          </span>
        </div>

      </div>
    </section>
  );
};
