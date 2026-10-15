import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { ShieldCheck, Clock, FileCheck2, UserCheck } from 'lucide-react';

export const WhatYouCanExpectSection: React.FC = () => {
  const expectationIcons = [
    <UserCheck className="w-5 h-5 text-[#315CF5]" />,
    <FileCheck2 className="w-5 h-5 text-[#315CF5]" />,
    <Clock className="w-5 h-5 text-[#315CF5]" />,
    <ShieldCheck className="w-5 h-5 text-[#315CF5]" />,
  ];

  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3 mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Collaboration Standards
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
            What You Can Expect Working Together
          </h2>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            Integrity and professionalism come first. Rather than displaying unverified review quotes, here are the concrete service standards guaranteed on every RAMZY_SN@ALL project:
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESIGNER_INFO.whatYouCanExpect.map((item, index) => (
            <div
              key={item.heading}
              className="bg-white rounded-2xl p-7 border border-[#E7E7E7] space-y-3 hover:border-[#315CF5]/50 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F8F8F5] border border-[#E7E7E7] flex items-center justify-center">
                {expectationIcons[index % expectationIcons.length]}
              </div>

              <h3 className="text-base font-bold text-[#171717]">
                {item.heading}
              </h3>

              <p className="text-xs text-[#737373] leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
