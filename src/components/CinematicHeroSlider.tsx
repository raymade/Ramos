import React, { useState, useEffect, useRef, useCallback } from 'react';
import { HERO_SLIDES, DESIGNER_INFO, HeroSlide } from '../data/portfolioData';
import { getSliderNextIndex, getSliderPrevIndex } from '../utils/portfolioLogic';
import {
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
} from 'lucide-react';

interface CinematicHeroSliderProps {
  onNavigate: (path: string) => void;
  onFilterCategory?: (category: string) => void;
}

export const CinematicHeroSlider: React.FC<CinematicHeroSliderProps> = ({
  onNavigate,
  onFilterCategory,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // 3D Pointer state
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Pause when document tab is hidden
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  // Autoplay timer (7 seconds)
  useEffect(() => {
    if (reducedMotion || isPaused || isUserHovering) return;

    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => getSliderNextIndex(prev, HERO_SLIDES.length));
    }, 7000);

    return () => clearInterval(timer);
  }, [reducedMotion, isPaused, isUserHovering]);

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => getSliderNextIndex(prev, HERO_SLIDES.length));
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => getSliderPrevIndex(prev, HERO_SLIDES.length));
  }, []);

  // Keyboard navigation for carousel
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  // 3D interactive pointer tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrain tilt to gentle, professional range (-8deg to +8deg)
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setIsUserHovering(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  const currentSlide: HeroSlide = HERO_SLIDES[currentSlideIndex];

  const handleSlideCta = (category: string) => {
    if (onFilterCategory) {
      onFilterCategory(category);
    }
    onNavigate('/work');
  };

  return (
    <section
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E7E7E7] overflow-hidden bg-[#F8F8F5]"
      aria-roledescription="carousel"
      aria-label="RAMZY_SN@ALL Creative Showcase"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Signature Brand Copy & Slide Context */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            
            <div className="space-y-6">
              {/* Eyebrow & Verified Availability */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs">
                <span className="font-bold tracking-wider uppercase text-[#315CF5]">
                  INDEPENDENT DESIGNER · UI/UX · BRANDING · DIGITAL PRODUCTS
                </span>
                {DESIGNER_INFO.isAvailableForProjects && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{DESIGNER_INFO.availabilityText}</span>
                  </span>
                )}
              </div>

              {/* Primary Anchor Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#171717] leading-[1.08] text-balance">
                I turn bold ideas into intuitive digital experiences.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#737373] leading-relaxed max-w-xl">
                I design thoughtful interfaces, digital products, and distinctive brand identities that make businesses easier to recognize and products easier to use.
              </p>

              {/* Slide Contextual Pill / Headline */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E7E7E7] space-y-2 shadow-xs transition-all duration-300">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#315CF5] font-bold uppercase tracking-wider text-[11px]">
                    Featured Focus: {currentSlide.discipline}
                  </span>
                  <span className="text-[11px] text-[#737373] font-mono">
                    0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
                  </span>
                </div>
                <div className="text-base sm:text-lg font-bold text-[#171717] transition-opacity duration-300">
                  {currentSlide.headline}
                </div>
                <p className="text-xs text-[#737373] leading-relaxed">
                  {currentSlide.subtext}
                </p>
                <div className="pt-1">
                  <button
                    onClick={() => handleSlideCta(currentSlide.filterCategory)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#315CF5] hover:text-[#8057F5] transition-colors cursor-pointer"
                  >
                    <span>{currentSlide.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons with 3D tactile style */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => onNavigate('/contact')}
                  style={{
                    boxShadow: '0 4px 0 0 #1e3fb5, 0 8px 20px rgba(49,92,245,0.35)',
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#1e3fb5,0_12px_24px_rgba(49,92,245,0.45)] active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/work')}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-[#171717] bg-white hover:bg-slate-50 border border-[#E2E8F0] rounded-xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer whitespace-nowrap"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4 text-[#315CF5]" />
                </button>
              </div>

            </div>

            {/* Slider Navigation & Progress Bar */}
            <div className="pt-4 border-t border-[#E7E7E7] flex flex-wrap items-center justify-between gap-4">
              
              {/* 3D Slide Selector Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-[#F0F2F6] rounded-xl border border-[#E2E8F0] shadow-inner" role="tablist" aria-label="Hero Slides">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex;
                  const slideThemes = [
                    { grad: 'from-[#315CF5] to-[#06B6D4]', shadow: '#1e3fb5' },
                    { grad: 'from-[#10B981] to-[#059669]', shadow: '#047857' },
                    { grad: 'from-[#8057F5] to-[#EC4899]', shadow: '#6b21a8' },
                    { grad: 'from-[#F59E0B] to-[#EF4444]', shadow: '#b45309' },
                  ];
                  const st = slideThemes[idx % slideThemes.length];

                  return (
                    <button
                      key={slide.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Slide ${idx + 1}: ${slide.discipline}`}
                      onClick={() => setCurrentSlideIndex(idx)}
                      style={
                        isActive
                          ? {
                              boxShadow: `0 3px 0 0 ${st.shadow}, 0 4px 10px rgba(0,0,0,0.15)`,
                            }
                          : {
                              boxShadow: '0 2px 0 0 #cbd5e1',
                            }
                      }
                      className={`relative px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                        isActive
                          ? `bg-gradient-to-r ${st.grad} text-white -translate-y-0.5`
                          : 'bg-white text-[#737373] hover:text-[#171717] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none'
                      }`}
                    >
                      <span>0{idx + 1}</span>
                      <span className="hidden sm:inline-block ml-1.5">{slide.discipline.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>

              {/* 3D Controls: Prev, Pause, Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#171717] hover:text-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#171717] hover:text-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  aria-label={isPaused ? 'Resume slideshow' : 'Pause slideshow'}
                  title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
                >
                  {isPaused ? <Play className="w-4 h-4 text-[#10B981]" /> : <Pause className="w-4 h-4 text-[#315CF5]" />}
                </button>

                <button
                  onClick={handleNext}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#171717] hover:text-[#315CF5] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: 3D Interactive Dimensional Showcase */}
          <div
            ref={containerRef}
            className="lg:col-span-6 flex items-center justify-center"
            onMouseEnter={() => setIsUserHovering(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1200px' }}
          >
            <div
              className="relative w-full aspect-4/3 lg:aspect-auto lg:h-[480px] rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-white via-[#FFFFFF] to-[#F1F1F8] border border-[#E7E7E7] shadow-xl transition-transform duration-200 ease-out overflow-hidden flex flex-col justify-between"
              style={{
                transform: reducedMotion
                  ? 'none'
                  : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Dynamic specular glare overlay */}
              {!reducedMotion && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.8) 0%, rgba(49,92,245,0.06) 40%, transparent 70%)`,
                  }}
                />
              )}

              {/* Top dimensional bar inside 3D card */}
              <div
                className="flex items-center justify-between z-10 transition-transform duration-200"
                style={{ transform: reducedMotion ? 'none' : 'translateZ(25px)' }}
              >
                <div className="flex items-center gap-2 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-[#E7E7E7] shadow-xs text-xs font-semibold text-[#171717]">
                  <span className="w-2 h-2 rounded-full bg-[#315CF5]" />
                  <span>{currentSlide.metricsTag}</span>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#737373] bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#E7E7E7]">
                  <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
                  <span>3D Interactive View</span>
                </div>
              </div>

              {/* Main Visual Image Layer with 3D Depth */}
              <div
                className="relative my-2 flex-1 rounded-2xl overflow-hidden border border-[#E7E7E7] shadow-inner bg-slate-900 group"
                style={{ transform: reducedMotion ? 'none' : 'translateZ(15px)' }}
              >
                <img
                  key={currentSlide.id}
                  src={currentSlide.visualImage}
                  alt={`${currentSlide.discipline} preview presentation`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-98"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white flex items-end justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/70 font-mono">
                      RAMZY_SN@ALL Studio
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      {currentSlide.headline}
                    </div>
                  </div>

                  <button
                    onClick={() => handleSlideCta(currentSlide.filterCategory)}
                    className="p-2 bg-white text-[#171717] rounded-xl hover:bg-[#315CF5] hover:text-white transition-colors cursor-pointer shadow-md"
                    aria-label={`View ${currentSlide.discipline} case studies`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Floating Bottom Dimensional Badge */}
              <div
                className="flex items-center justify-between z-10 pt-2 transition-transform duration-200"
                style={{ transform: reducedMotion ? 'none' : 'translateZ(35px)' }}
              >
                <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E7E7E7] shadow-md flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#315CF5]/10 text-[#315CF5] flex items-center justify-center font-bold text-xs">
                    0{currentSlideIndex + 1}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-mono text-[#737373]">
                      {currentSlide.floatingBadge.title}
                    </div>
                    <div className="text-xs font-bold text-[#171717]">
                      {currentSlide.floatingBadge.value}
                    </div>
                  </div>
                </div>

                {/* Subtle Brand Token Indicator */}
                <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#737373] bg-white/80 px-3 py-1.5 rounded-lg border border-[#E7E7E7]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#315CF5]" title="#315CF5 Cobalt" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#8057F5]" title="#8057F5 Violet" />
                  <span className="font-mono">Figma · Vector</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Column Proof Row below the split */}
        <div className="mt-14 pt-8 border-t border-[#E7E7E7] grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">100%</div>
            <div className="text-xs font-medium text-[#171717]">Custom Visuals</div>
            <div className="text-xs text-[#737373]">Tailored exclusively to your brand goals</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">4 Core</div>
            <div className="text-xs font-medium text-[#171717]">Creative Disciplines</div>
            <div className="text-xs text-[#737373]">UI/UX, Product, Identity & Print</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">Figma & Vector</div>
            <div className="text-xs font-medium text-[#171717]">Complete Source Handoff</div>
            <div className="text-xs text-[#737373]">Tokens, components & production exports</div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl font-bold tracking-tight text-[#171717] font-mono tabular-nums">Direct</div>
            <div className="text-xs font-medium text-[#171717]">Designer Access</div>
            <div className="text-xs text-[#737373]">WhatsApp: +234 706 933 4173</div>
          </div>
        </div>

      </div>
    </section>
  );
};
