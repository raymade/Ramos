import React from 'react';
import { Project } from '../utils/portfolioLogic';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface FeaturedProjectsSectionProps {
  projects: Project[];
  onNavigate: (path: string) => void;
  onSelectProject: (slug: string) => void;
}

export const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
  onNavigate,
  onSelectProject,
}) => {
  const featured = projects.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 border-b border-[#E7E7E7] bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E7E7E7]">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#315CF5] mb-2">
              Curated Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#171717] text-balance">
              Featured Design Projects
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <p className="hidden lg:block text-xs text-[#737373] max-w-xs text-right">
              Explore recent digital product, mobile UI, and visual identity systems.
            </p>
            <button
              onClick={() => onNavigate('/work')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#171717] bg-white border border-[#E7E7E7] rounded-lg hover:border-[#171717] transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Editorial Grid: Asymmetrical Bento Layout */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {featured.map((project, idx) => (
            <article
              key={project.slug}
              className={`bg-white rounded-2xl border border-[#E7E7E7] overflow-hidden group hover:border-[#315CF5]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Visual Preview */}
                <div
                  onClick={() => onSelectProject(project.slug)}
                  className="aspect-16/10 w-full overflow-hidden bg-slate-100 cursor-pointer relative"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-[#171717] shadow-sm">
                    {project.year}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 space-y-4">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#737373]">
                    <span className="font-semibold text-[#315CF5]">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.isConcept ? 'Concept Project' : 'Client Case Study'}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.services[0]}</span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project.slug)}
                    className="text-xl sm:text-2xl font-bold text-[#171717] group-hover:text-[#315CF5] transition-colors cursor-pointer text-balance"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#737373] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Services List - unboxed plain text */}
                  <div className="pt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#171717]">
                    {project.services.map((svc, i) => (
                      <span key={svc} className="text-[#737373]">
                        {svc}{i < project.services.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
                <button
                  onClick={() => onSelectProject(project.slug)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#171717] group-hover:text-[#315CF5] transition-colors cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onNavigate('/work')}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#171717] bg-white border border-[#E7E7E7] rounded-xl hover:bg-slate-50 transition-colors cursor-pointer shadow-sm"
          >
            <span>Explore All 6 Projects & Design Studies</span>
            <ArrowRight className="w-4 h-4 text-[#315CF5]" />
          </button>
        </div>

      </div>
    </section>
  );
};
