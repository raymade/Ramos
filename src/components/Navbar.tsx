import React, { useState, useEffect } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { PWAInstallButton } from './PWAInstallButton';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/', color: 'from-[#315CF5] to-[#8057F5]', shadow: '#1e3fb5', dot: '#315CF5' },
    { label: 'Work', path: '/work', color: 'from-[#10B981] to-[#059669]', shadow: '#047857', dot: '#10B981' },
    { label: 'Services', path: '/services', color: 'from-[#8057F5] to-[#EC4899]', shadow: '#6b21a8', dot: '#8057F5' },
    { label: 'About', path: '/about', color: 'from-[#F59E0B] to-[#EF4444]', shadow: '#b45309', dot: '#F59E0B' },
    { label: 'Contact', path: '/contact', color: 'from-[#EC4899] to-[#315CF5]', shadow: '#9d174d', dot: '#EC4899' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-gradient-to-r focus:from-[#315CF5] focus:to-[#8057F5] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-[0_6px_0_0_#1e3fb5] focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Floating 3D Navigation Island */}
      <header className="sticky top-3 z-40 px-3 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#E2E8F0] px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_14px_36px_-8px_rgba(49,92,245,0.2),0_4px_16px_rgba(0,0,0,0.06)] flex items-center justify-between gap-4 transition-all duration-300">
          
          {/* Zone 1: 3D Wordmark with dynamic gradient text & tactile emblem */}
          <button
            onClick={() => handleLinkClick('/')}
            className="text-left group cursor-pointer focus:outline-none shrink-0"
            aria-label="RAMZY_SN@ALL Home"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#315CF5] via-[#8057F5] to-[#EC4899] text-white flex items-center justify-center font-extrabold text-sm shadow-[0_4px_0_0_#1e3fb5,0_8px_16px_rgba(49,92,245,0.35)] group-hover:scale-105 group-hover:-rotate-3 group-active:translate-y-0.5 group-active:shadow-none transition-all">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#171717] group-hover:text-[#315CF5] transition-colors whitespace-nowrap">
                  {DESIGNER_INFO.brandName}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] bg-clip-text text-transparent flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#8057F5]" />
                  Creative Studio
                </span>
              </div>
            </div>
          </button>

          {/* Zone 2: 3D-styled Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-2 p-1.5 bg-[#F0F2F6] rounded-2xl border border-[#E2E8F0] shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  style={
                    isActive
                      ? {
                          boxShadow: `0 4px 0 0 ${link.shadow}, 0 6px 16px rgba(0,0,0,0.18)`,
                        }
                      : {
                          boxShadow: '0 3px 0 0 #cbd5e1',
                        }
                  }
                  className={`relative px-4 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
                    isActive
                      ? `bg-gradient-to-r ${link.color} text-white -translate-y-0.5`
                      : 'bg-white text-[#475569] hover:text-[#0f172a] hover:bg-slate-50 hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none'
                  }`}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: isActive ? '#FFFFFF' : link.dot }}
                  />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 3D-Styled Action Controls */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <PWAInstallButton variant="nav" />

            <button
              onClick={() => handleLinkClick('/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl shadow-[0_4px_0_0_#1e3fb5,0_8px_20px_rgba(49,92,245,0.35)] hover:shadow-[0_6px_0_0_#1e3fb5,0_12px_24px_rgba(49,92,245,0.45)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Install Controls */}
          <div className="flex md:hidden items-center gap-2">
            <PWAInstallButton variant="nav" />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white border border-[#E2E8F0] text-[#171717] hover:border-[#315CF5] shadow-[0_3px_0_0_#cbd5e1] hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open 3D Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-500" /> : <Menu className="w-5 h-5 text-[#315CF5]" />}
            </button>
          </div>

        </div>

        {/* 3D Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden mt-2 bg-white/98 backdrop-blur-xl rounded-2xl border border-[#E2E8F0] p-4 shadow-[0_20px_45px_-10px_rgba(49,92,245,0.3),0_8px_16px_rgba(0,0,0,0.06)] space-y-3 animate-in fade-in slide-in-from-top-3 duration-200"
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = currentPath === link.path || (link.path !== '/' && currentPath.startsWith(link.path));
                return (
                  <button
                    key={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    style={
                      isActive
                        ? {
                            boxShadow: `0 4px 0 0 ${link.shadow}`,
                          }
                        : {
                            boxShadow: '0 3px 0 0 #e2e8f0',
                          }
                    }
                    className={`text-left px-4 py-3 text-sm font-bold rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? `bg-gradient-to-r ${link.color} text-white -translate-y-0.5`
                        : 'text-[#171717] bg-[#F8F8F5] border border-[#E7E7E7] hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#cbd5e1] active:translate-y-0.5 active:shadow-none'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: isActive ? '#FFFFFF' : link.dot }}
                      />
                      <span>{link.label}</span>
                    </div>
                    <span className="text-xs font-mono opacity-80">→</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#E7E7E7]">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl shadow-[0_4px_0_0_#1e3fb5,0_10px_20px_rgba(49,92,245,0.35)] hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
