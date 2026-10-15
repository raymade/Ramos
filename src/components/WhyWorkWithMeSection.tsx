import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { Eye, Target, Sparkles, Layers } from 'lucide-react';

export const WhyWorkWithMeSection: React.FC = () => {
  const icons = [
    <Eye className="w-5 h-5 text-[#315CF5]" />,
    <Target className="w-5 h-5 text-[#315CF5]" />,
    <Sparkles className="w-5 h-5 text-[#315CF5]" />,
    <Layers className="w-5 h-5 text-[#315CF5]" />,
  ];

  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Design Philosophy
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
            Why Work With RAMZY_SN@ALL?
          </h2>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            I believe that great design is purposeful, disciplined, and rooted in functional clarity. Here are the four bedrock principles that guide every client collaboration:
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESIGNER_INFO.workingPrinciples.map((principle, index) => (
            <div
              key={principle.title}
              className="bg-white rounded-2xl p-7 border border-[#E7E7E7] space-y-4 hover:border-[#315CF5]/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F8F8F5] border border-[#E7E7E7] flex items-center justify-center">
                {icons[index % icons.length]}
              </div>

              <h3 className="text-lg font-bold text-[#171717]">
                {principle.title}
              </h3>

              <p className="text-xs text-[#737373] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
