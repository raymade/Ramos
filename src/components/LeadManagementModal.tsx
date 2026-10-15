import React, { useState } from 'react';
import { SubmittedLead, generateWhatsAppLink } from '../utils/portfolioLogic';
import { X, Mail, MessageSquare, Check, Trash2, ArrowUpRight, Copy, Filter } from 'lucide-react';

interface LeadManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  leads: SubmittedLead[];
  onUpdateStatus: (id: string, newStatus: SubmittedLead['status']) => void;
  onDeleteLead: (id: string) => void;
}

export const LeadManagementModal: React.FC<LeadManagementModalProps> = ({
  isOpen,
  onClose,
  leads,
  onUpdateStatus,
  onDeleteLead,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  if (!isOpen) return null;

  const handleCopyEmail = (email: string, id: string) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredLeads = leads.filter((l) => {
    if (filterStatus === 'All') return true;
    return l.status === filterStatus;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#E7E7E7] shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#171717] text-white flex items-center justify-between">
          <div>
            <div className="font-bold text-sm">Client Inquiries & Lead Management</div>
            <div className="text-xs text-white/70">
              RAMZY_SN@ALL Studio Portal · {leads.length} Total Submissions
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close inquiries modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="px-6 py-3 bg-[#F8F8F5] border-b border-[#E7E7E7] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <span className="text-[#737373] font-bold">Filter:</span>
            {[
              { label: 'All', color: 'from-[#171717] to-[#262626]', shadow: '#000' },
              { label: 'New', color: 'from-[#10B981] to-[#059669]', shadow: '#047857' },
              { label: 'In Discussion', color: 'from-[#315CF5] to-[#8057F5]', shadow: '#1e3fb5' },
              { label: 'Proposal Sent', color: 'from-[#8057F5] to-[#EC4899]', shadow: '#6b21a8' },
              { label: 'Completed', color: 'from-[#F59E0B] to-[#D97706]', shadow: '#b45309' },
            ].map((st) => {
              const isSelected = filterStatus === st.label;
              return (
                <button
                  key={st.label}
                  onClick={() => setFilterStatus(st.label)}
                  style={
                    isSelected
                      ? {
                          boxShadow: `0 3px 0 0 ${st.shadow}`,
                        }
                      : {
                          boxShadow: '0 2px 0 0 #cbd5e1',
                        }
                  }
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? `bg-gradient-to-r ${st.color} text-white -translate-y-0.5`
                      : 'bg-white text-[#737373] hover:text-[#171717] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none border border-[#E2E8F0]'
                  }`}
                >
                  {st.label}
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-[#737373] font-medium">
            Stored securely in browser local storage
          </div>
        </div>

        {/* Inquiries List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filteredLeads.length > 0 ? (
            filteredLeads.map((lead) => {
              const formattedDate = new Date(lead.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={lead.id}
                  className="bg-white rounded-xl border border-[#E7E7E7] p-5 space-y-4 hover:border-[#315CF5]/50 transition-colors shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E7E7]/70 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-[#171717]">{lead.fullName}</span>
                        {lead.companyName && (
                          <span className="text-xs text-[#737373]">({lead.companyName})</span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#737373]">{formattedDate} · ID: {lead.id}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={lead.status}
                        onChange={(e) =>
                          onUpdateStatus(lead.id, e.target.value as SubmittedLead['status'])
                        }
                        className="text-xs px-2.5 py-1 rounded border border-[#E7E7E7] bg-[#F8F8F5] text-[#171717] font-medium"
                      >
                        <option value="New">Status: New</option>
                        <option value="In Discussion">Status: In Discussion</option>
                        <option value="Proposal Sent">Status: Proposal Sent</option>
                        <option value="Completed">Status: Completed</option>
                      </select>

                      <button
                        onClick={() => onDeleteLead(lead.id)}
                        className="p-1.5 text-[#737373] hover:text-red-500 rounded transition-colors cursor-pointer"
                        title="Delete inquiry"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Lead Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="text-[#737373] block">Service:</span>
                      <strong className="text-[#315CF5] font-semibold">{lead.serviceRequired}</strong>
                    </div>
                    <div>
                      <span className="text-[#737373] block">Budget & Timeline:</span>
                      <span className="text-[#171717]">{lead.budgetRange} · {lead.desiredTimeline}</span>
                    </div>
                    <div>
                      <span className="text-[#737373] block">Preferred Method:</span>
                      <span className="capitalize text-[#171717]">{lead.preferredContactMethod}</span>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="p-3 bg-[#F8F8F5] rounded-lg text-xs text-[#171717] leading-relaxed">
                    <span className="font-semibold text-[#737373] block mb-1">Project Brief:</span>
                    {lead.projectDescription}
                  </div>

                  {lead.referenceLinks && (
                    <div className="text-xs text-[#737373]">
                      <span>Reference: </span>
                      <a
                        href={lead.referenceLinks}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#315CF5] underline"
                      >
                        {lead.referenceLinks}
                      </a>
                    </div>
                  )}

                  {/* Action row */}
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    <button
                      onClick={() => handleCopyEmail(lead.email, lead.id)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E7E7E7] rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      {copiedId === lead.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600">Copied Email</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#737373]" />
                          <span>Copy Email ({lead.email})</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:${lead.email}?subject=Regarding your ${lead.serviceRequired} inquiry with RAMZY_SN@ALL`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] text-white rounded-md hover:bg-[#315CF5] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Reply via Email</span>
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="py-16 text-center text-[#737373] space-y-2">
              <div className="font-semibold text-sm text-[#171717]">No inquiries matching this filter</div>
              <p className="text-xs">When visitors submit the project form, their details appear here instantly.</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#F8F8F5] border-t border-[#E7E7E7] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#171717] bg-white border border-[#E7E7E7] rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close Portal
          </button>
        </div>

      </div>
    </div>
  );
};
