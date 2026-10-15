import React from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { SEOMetadata } from '../components/SEOMetadata';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (path: string) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';
  const effectiveDate = 'October 15, 2026';

  return (
    <div className="py-12 md:py-20">
      <SEOMetadata
        title={isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
        description={`Legal compliance, confidentiality, and ${isPrivacy ? 'privacy protection' : 'terms of service'} for ${DESIGNER_INFO.brandName}.`}
        path={isPrivacy ? '/privacy-policy' : '/terms'}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Back Link */}
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#737373] hover:text-[#171717] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Page Title */}
        <div className="space-y-3 pb-8 border-b border-[#E7E7E7]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#171717]">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
          <p className="text-xs text-[#737373]">
            {DESIGNER_INFO.brandName} · Ramos Friday Oluwaseun · Last Updated: {effectiveDate}
          </p>
        </div>

        {/* Content Body */}
        <div className="prose prose-sm max-w-none text-[#737373] space-y-8 text-xs sm:text-sm leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">1. Information We Collect</h2>
                <p>
                  When you submit a project enquiry through the {DESIGNER_INFO.brandName} website, we collect your name, email address, company name, service requirements, budget estimates, and project details solely for the purpose of communicating about potential design work.
                </p>
                <p>
                  We do not sell, rent, trade, or distribute your personal contact information to any third parties for advertising or marketing purposes.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">2. How Your Information is Used</h2>
                <p>
                  Information gathered is used exclusively to evaluate project feasibility, prepare formal scopes of work, correspond with you regarding project milestones, and fulfill contractual design obligations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">3. Data Security & Confidentiality</h2>
                <p>
                  All project briefs, client data, and preliminary concept documents are treated under strict professional confidentiality. We employ modern security practices to protect all submitted data.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">4. Contact & Inquiries</h2>
                <p>
                  If you have questions regarding this Privacy Policy or wish to request data deletion, you may contact Ramos Friday Oluwaseun directly at <a href={`mailto:${DESIGNER_INFO.email}`} className="text-[#315CF5] underline">{DESIGNER_INFO.email}</a>.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">1. Engagement & Scope of Work</h2>
                <p>
                  All creative design projects undertaken by {DESIGNER_INFO.brandName} (owned by Ramos Friday Oluwaseun) are governed by an agreed written Project Brief or formal Scope of Work defining deliverables, milestone timelines, and revision rounds.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">2. Intellectual Property & Commercial Ownership</h2>
                <p>
                  Upon final milestone payment completion, full commercial ownership and rights to the approved final deliverables (including vector logos, Figma source files, and brand guidelines) are unconditionally assigned to the client. Preliminary exploratory sketches and rejected concepts remain the property of {DESIGNER_INFO.brandName}.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">3. Revisions & Approvals</h2>
                <p>
                  Each engagement includes structured feedback checkpoints at wireframe and visual concept stages. Work proceeds to subsequent milestones upon written client sign-off.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-base font-bold text-[#171717]">4. Portfolio Display Rights</h2>
                <p>
                  Unless specifically agreed otherwise under a written Non-Disclosure Agreement (NDA), {DESIGNER_INFO.brandName} reserves the right to display completed design work in professional portfolios, award showcases, and studio marketing.
                </p>
              </section>
            </>
          )}
        </div>

      </div>
    </div>
  );
};
