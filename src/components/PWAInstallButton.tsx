import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, X, Smartphone, ArrowUpRight } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'footer' | 'prominent';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed in standalone mode, hide the button
  if (isInstalled) {
    return null;
  }

  // Handle click based on device platform
  const handleClick = () => {
    if (isInstallable) {
      install();
    } else if (isIOS) {
      setShowIOSGuide(true);
    } else {
      // General prompt or info
      setShowIOSGuide(true);
    }
  };

  return (
    <>
      {variant === 'nav' && (
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] bg-white border border-[#E7E7E7] rounded-lg hover:border-[#315CF5] hover:text-[#315CF5] transition-colors cursor-pointer shadow-xs whitespace-nowrap"
          title="Install RAMZY_SN@ALL App to your device"
          aria-label="Install RAMZY_SN@ALL Web App"
        >
          <Download className="w-3.5 h-3.5 text-[#315CF5]" />
          <span>Install App</span>
        </button>
      )}

      {variant === 'footer' && (
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#737373] hover:text-[#171717] transition-colors cursor-pointer"
          aria-label="Install App for offline browsing"
        >
          <Smartphone className="w-3.5 h-3.5 text-[#315CF5]" />
          <span>Install Portfolio App</span>
        </button>
      )}

      {variant === 'prominent' && (
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-[#171717] hover:bg-[#315CF5] rounded-xl transition-all cursor-pointer shadow-md"
        >
          <Download className="w-4 h-4 text-[#315CF5]" />
          <span>Install RAMZY_SN@ALL App</span>
        </button>
      )}

      {/* Guided installation instructions modal for iOS / non-prompt browsers */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-[#E7E7E7] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center font-bold text-xs">
                  R
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#171717]">Install RAMZY_SN@ALL</h3>
                  <p className="text-[11px] text-[#737373]">Fast offline access & standalone mode</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 text-[#737373] hover:text-[#171717] rounded-lg transition-colors cursor-pointer"
                aria-label="Close installation guide"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3.5 bg-[#F8F8F5] rounded-xl text-xs text-[#171717] space-y-2 border border-[#E7E7E7]/60">
              <div className="font-semibold text-xs text-[#315CF5]">On iPhone / iPad:</div>
              <ol className="list-decimal pl-4 space-y-1 text-[#737373] text-[11px]">
                <li>Tap the <strong>Share</strong> button (box with upward arrow) in Safari.</li>
                <li>Scroll down and tap <strong>Add to Home Screen</strong>.</li>
                <li>Tap <strong>Add</strong> in the top-right corner.</li>
              </ol>

              <div className="font-semibold text-xs text-[#315CF5] pt-1">On Android / Chrome:</div>
              <p className="text-[#737373] text-[11px]">
                Tap the three-dot browser menu and select <strong>Install app</strong> or <strong>Add to Home screen</strong>.
              </p>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-[#171717] text-white text-xs font-semibold hover:bg-[#315CF5] transition-colors cursor-pointer"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
};
