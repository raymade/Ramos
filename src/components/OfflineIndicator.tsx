import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff, RefreshCw } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-20 left-4 z-40 max-w-sm flex items-center gap-3 p-3.5 bg-[#171717] text-white rounded-xl shadow-2xl border border-white/10 text-xs animate-in slide-in-from-bottom-3 duration-300"
    >
      <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
        <WifiOff className="w-4 h-4" />
      </div>
      <div className="flex-1 space-y-0.5">
        <div className="font-semibold text-white">You're offline, but good design is still here.</div>
        <div className="text-[11px] text-white/70">Showing cached portfolio data.</div>
      </div>
      <button
        onClick={handleRetry}
        className="p-1.5 hover:bg-white/10 rounded-md text-white/80 hover:text-white transition-colors cursor-pointer shrink-0"
        title="Check connection and reload"
        aria-label="Retry connection"
      >
        <RefreshCw className="w-4 h-4" />
      </button>
    </div>
  );
};
