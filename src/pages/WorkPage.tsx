import React, { useState, useEffect } from 'react';
import { Project, filterProjects } from '../utils/portfolioLogic';
import { SEOMetadata } from '../components/SEOMetadata';
import { ArrowUpRight, Search, Layers, X, Maximize2, Sparkles } from 'lucide-react';

interface WorkPageProps {
  projects: Project[];
  initialCategory?: string;
  onSelectProject: (slug: string) => void;
  onNavigate: (path: string) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({
  projects,
  initialCategory = 'All Work',
  onSelectProject,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; category: string } | null>(null);

  // Sync category if initialCategory changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Handle ESC key to dismiss lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxImage) {
        setLightboxImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage]);

  const categories = [
    { label: 'All Work', color: 'from-[#315CF5] to-[#8057F5]', shadow: '#1e3fb5' },
    { label: 'UI/UX Design', color: 'from-[#315CF5] to-[#06B6D4]', shadow: '#1e3fb5' },
    { label: 'Mobile App Design', color: 'from-[#10B981] to-[#059669]', shadow: '#047857' },
    { label: 'Web Design', color: 'from-[#6366F1] to-[#8057F5]', shadow: '#4338ca' },
    { label: 'Logo Design', color: 'from-[#F59E0B] to-[#D97706]', shadow: '#b45309' },
    { label: 'Branding', color: 'from-[#EC4899] to-[#8057F5]', shadow: '#be185d' },
    { label: 'Graphic Design', color: 'from-[#FF5C5C] to-[#F97316]', shadow: '#c2410c' },
  ];

  const filteredByCategory = filterProjects(projects, selectedCategory);
  const displayedProjects = filteredByCategory.filter((p) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.services.some((s) => s.toLowerCase().includes(q))
    );
  });

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic SEO Metadata */}
      <SEOMetadata
        title="Featured Work & Case Studies"
        description="Explore UI/UX, mobile banking applications, enterprise SaaS dashboards, and modern brand identity systems crafted by RAMZY_SN@ALL."
        path="/work"
      />

      {/* Colorful Ambient Glow Background Blobs */}
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#315CF5]/10 via-[#8057F5]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-80 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#10B981]/10 via-[#F59E0B]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="space-y-4 max-w-3xl pb-10 border-b border-[#E7E7E7]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#315CF5]/10 to-[#8057F5]/10 border border-[#315CF5]/20 text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
            <span>Curated Creative Gallery</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] text-balance">
            Digital Products, Mobile Interfaces & Brand Systems
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            A vibrant, tactile portfolio of user experience explorations, mobile banking flows, data dashboards, and brand identities designed with precision and intention.
          </p>
        </div>

        {/* 3D-Styled Category Filter Menu & Search */}
        <div className="mt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8">
          
          {/* 3D Segmented Control Buttons */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 lg:pb-0 scrollbar-none p-1.5 bg-slate-100/70 rounded-2xl border border-[#E7E7E7] shadow-inner" role="tablist" aria-label="Portfolio Categories">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.label)}
                  style={{
                    boxShadow: isSelected
                      ? `0 4px 0 0 ${cat.shadow}, 0 6px 14px rgba(0,0,0,0.15)`
                      : '0 3px 0 0 #d1d5db',
                  }}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? `bg-gradient-to-r ${cat.color} text-white -translate-y-0.5`
                      : 'bg-white text-[#171717] hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input with 3D shadow */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#737373] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#E7E7E7] rounded-xl text-xs text-[#171717] placeholder-[#737373] focus:border-[#315CF5] focus:ring-2 focus:ring-[#315CF5]/20 shadow-[0_3px_0_0_#e5e7eb] focus:shadow-none transition-all"
              aria-label="Filter projects by title or keyword"
            />
          </div>

        </div>

        {/* Projects Gallery */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, idx) => {
              // Dynamic color themes for cards
              const cardColors = [
                'from-[#315CF5] to-[#8057F5]',
                'from-[#10B981] to-[#315CF5]',
                'from-[#8057F5] to-[#EC4899]',
                'from-[#F59E0B] to-[#EF4444]',
              ];
              const cardGradient = cardColors[idx % cardColors.length];

              return (
                <article
                  key={project.slug}
                  className="bg-white rounded-3xl border border-[#E7E7E7] overflow-hidden group hover:border-[#315CF5]/50 shadow-[0_8px_20px_-6px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_36px_-10px_rgba(49,92,245,0.2)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Image */}
                    <div className="aspect-4/3 w-full overflow-hidden bg-slate-900 relative group">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 cursor-pointer"
                        onClick={() => onSelectProject(project.slug)}
                      />
                      
                      {/* Colorful 3D Tag */}
                      <div className={`absolute top-3 left-3 bg-gradient-to-r ${cardGradient} text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-md`}>
                        {project.categoryTag}
                      </div>

                      {project.isConcept && (
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#737373] shadow-xs">
                          Concept Study
                        </div>
                      )}

                      {/* Lightbox trigger */}
                      <button
                        onClick={() =>
                          setLightboxImage({
                            src: project.coverImage,
                            title: project.title,
                            category: project.categoryTag,
                          })
                        }
                        className="absolute bottom-3 right-3 p-2 bg-white/95 hover:bg-white text-[#171717] rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:scale-105"
                        title="Inspect mockup"
                        aria-label={`Inspect ${project.title} in lightbox`}
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-[#315CF5]" />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-[#737373]">
                        <span className="font-semibold text-[#171717]">{project.year}</span>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#315CF5] font-medium">{project.services[0]}</span>
                      </div>

                      <h2
                        onClick={() => onSelectProject(project.slug)}
                        className="text-lg font-extrabold text-[#171717] group-hover:text-[#315CF5] transition-colors cursor-pointer text-balance"
                      >
                        {project.title}
                      </h2>

                      <p className="text-xs text-[#737373] leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] text-[#737373]">
                        {project.tools.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded-md bg-[#F8F8F5] border border-[#E7E7E7] font-mono text-[10px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 3D Action Footer */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => onSelectProject(project.slug)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#171717] group-hover:text-[#315CF5] transition-colors cursor-pointer"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#315CF5]" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center bg-white rounded-3xl border border-[#E7E7E7] p-8 space-y-4 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#F8F8F5] flex items-center justify-center text-[#737373]">
              <Layers className="w-6 h-6 text-[#315CF5]" />
            </div>
            <h3 className="text-base font-bold text-[#171717]">No projects found in this category</h3>
            <p className="text-xs text-[#737373] max-w-sm mx-auto">
              Try selecting "All Work" or clear your search query to view all available case studies.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Work');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#315CF5] to-[#8057F5] rounded-xl shadow-[0_4px_0_0_#1e3fb5] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Accessible High-Resolution Gallery Lightbox */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`High-resolution preview of ${lightboxImage.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 flex flex-col">
            <div className="p-4 bg-[#171717] text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">{lightboxImage.title}</span>
                <span className="text-[11px] text-[#315CF5] font-semibold">{lightboxImage.category} · High-Resolution Inspector</span>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 text-white/70 hover:text-white rounded-xl transition-colors cursor-pointer"
                aria-label="Close high-resolution lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-slate-950 flex items-center justify-center flex-1 overflow-auto">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
