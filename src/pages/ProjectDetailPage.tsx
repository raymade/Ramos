import React, { useState } from 'react';
import { Project, getAdjacentProjects } from '../utils/portfolioLogic';
import { SEOMetadata } from '../components/SEOMetadata';
import { generateProjectJsonLd } from '../utils/seoHelpers';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Share2,
  Sparkles,
  Wrench,
  Check,
} from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  allProjects,
  onSelectProject,
  onNavigate,
}) => {
  const { prev, next } = getAdjacentProjects(allProjects, project.slug);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  return (
    <article className="py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic SEO Metadata & Schema.org JSON-LD */}
      <SEOMetadata
        title={`${project.title} – Case Study`}
        description={project.shortDescription}
        path={`/project/${project.slug}`}
        ogType="article"
        ogImage={project.coverImage}
        structuredData={generateProjectJsonLd(project)}
      />

      {/* Colorful Ambient Glow Background Blobs */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#315CF5]/10 via-[#8057F5]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Navigation & Header Controls */}
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('/work')}
            style={{
              boxShadow: '0 3px 0 0 #cbd5e1',
            }}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#171717] bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#315CF5]" />
            <span>Back to All Projects</span>
          </button>

          <button
            onClick={handleShare}
            style={{
              boxShadow: '0 3px 0 0 #cbd5e1',
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#171717] bg-white border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            title="Share case study"
          >
            {copiedLink ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-[#10B981]">Link Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#8057F5]" />
                <span>Share Case Study</span>
              </>
            )}
          </button>
        </div>

        {/* Project Header Info */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#737373]">
            <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#315CF5] to-[#8057F5] shadow-xs">
              {project.category}
            </span>
            <span aria-hidden="true">·</span>
            <span className="font-semibold text-[#171717]">{project.clientOrContext}</span>
            <span aria-hidden="true">·</span>
            <span>Completed {project.year}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] text-balance">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-3xl">
            {project.shortDescription}
          </p>

          {/* Metadata Strip */}
          <div className="pt-6 border-t border-[#E7E7E7] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs">
              <div className="font-bold text-[#171717] mb-1.5">Services Provided</div>
              <div className="text-[#737373] space-y-1">
                {project.services.map((s) => (
                  <div key={s} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#315CF5]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs">
              <div className="font-bold text-[#171717] mb-1.5">Design & Prototyping Tools</div>
              <div className="text-[#737373] space-y-1 font-mono text-[11px]">
                {project.tools.map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8057F5]" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs">
              <div className="font-bold text-[#171717] mb-1.5">Project Classification</div>
              <div className="text-[#737373]">
                {project.isConcept ? (
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 font-semibold border border-amber-200">
                    Self-Initiated Concept Study
                  </span>
                ) : (
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                    Commercial Client Case
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <div className="rounded-3xl overflow-hidden border border-[#E7E7E7] bg-white shadow-[0_16px_40px_-10px_rgba(0,0,0,0.1)]">
          <img
            src={project.coverImage}
            alt={`${project.title} design showcase`}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-cover max-h-[580px]"
          />
        </div>

        {/* Case Study Sections */}
        <div className="space-y-12">
          
          {/* Challenge & Context */}
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] space-y-4 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              01 / The Challenge
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              Context & Core Problem
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* Design Objectives */}
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] space-y-4 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              02 / Design Objectives
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              What We Aimed to Accomplish
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {project.objectives.map((obj, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#F8F8F5] border border-[#E7E7E7] space-y-2"
                >
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#315CF5] to-[#8057F5] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {i + 1}
                  </div>
                  <p className="text-xs text-[#171717] font-medium leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Approach */}
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] space-y-4 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              03 / Design Strategy
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              User Research & Approach
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              {project.approach}
            </p>
          </section>

          {/* Solution & Deliverables */}
          <section className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] space-y-6 shadow-xs">
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
              04 / Executed Solution
            </div>
            <h2 className="text-2xl font-bold text-[#171717]">
              The Final Design Output
            </h2>
            <p className="text-sm text-[#737373] leading-relaxed">
              {project.solution}
            </p>

            {/* Deliverables List */}
            <div className="pt-4 border-t border-[#E7E7E7] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                Shipped Assets & Deliverables:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs text-[#171717]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Results / Key Takeaways */}
          {project.results && project.results.length > 0 && (
            <div className="bg-gradient-to-br from-white to-[#F8F8F5] rounded-3xl p-8 sm:p-10 border border-[#E7E7E7] space-y-4 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#8057F5]" />
                <span>Results & Strategic Takeaways</span>
              </div>
              <h2 className="text-2xl font-bold text-[#171717]">
                Measurable Impact & Reflections
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.results.map((res, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs space-y-2"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#315CF5]" />
                    <p className="text-xs text-[#171717] font-medium leading-relaxed">
                      {res}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Project Enquiry Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E7E7E7] space-y-4 text-center shadow-[0_12px_32px_-8px_rgba(49,92,245,0.15)]">
          <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            Start Your Own Project
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#171717]">
            Looking for similar design expertise for your product?
          </h3>
          <p className="text-xs sm:text-sm text-[#737373] max-w-lg mx-auto">
            Discuss your requirements with Ramos Friday Oluwaseun and receive a detailed project scope within 24 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              style={{
                boxShadow: '0 4px 0 0 #1e3fb5, 0 8px 20px rgba(49,92,245,0.35)',
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
            >
              <span>Request Quote for {project.services[0]}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3D Next / Previous Project Navigation */}
        <div className="pt-8 border-t border-[#E7E7E7] grid grid-cols-1 sm:grid-cols-2 gap-6">
          {prev && (
            <button
              onClick={() => onSelectProject(prev.slug)}
              style={{
                boxShadow: '0 4px 0 0 #cbd5e1',
              }}
              className="p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#94a3b8] active:translate-y-1 active:shadow-none transition-all text-left space-y-1 cursor-pointer group"
            >
              <div className="text-[11px] font-bold text-[#737373] flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5 text-[#315CF5] group-hover:-translate-x-1 transition-transform" />
                <span>Previous Case Study</span>
              </div>
              <div className="font-extrabold text-sm text-[#171717] group-hover:text-[#315CF5] transition-colors">
                {prev.title}
              </div>
            </button>
          )}

          {next && (
            <button
              onClick={() => onSelectProject(next.slug)}
              style={{
                boxShadow: '0 4px 0 0 #cbd5e1',
              }}
              className="p-6 bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#94a3b8] active:translate-y-1 active:shadow-none transition-all text-right space-y-1 cursor-pointer group sm:ml-auto w-full"
            >
              <div className="text-[11px] font-bold text-[#737373] flex items-center justify-end gap-1">
                <span>Next Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#315CF5] group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="font-extrabold text-sm text-[#171717] group-hover:text-[#315CF5] transition-colors">
                {next.title}
              </div>
            </button>
          )}
        </div>

      </div>
    </article>
  );
};
