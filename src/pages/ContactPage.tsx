import React, { useState } from 'react';
import { DESIGNER_INFO } from '../data/portfolioData';
import {
  ContactFormData,
  validateContactForm,
  generateWhatsAppLink,
  SubmittedLead,
} from '../utils/portfolioLogic';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  Download,
  Sparkles,
} from 'lucide-react';
import { SEOMetadata } from '../components/SEOMetadata';

interface ContactPageProps {
  initialService?: string;
  onSaveLead: (lead: SubmittedLead) => void;
  onOpenCapabilitiesModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialService = '',
  onSaveLead,
  onOpenCapabilitiesModal,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    companyName: '',
    serviceRequired: initialService || 'UI/UX Design',
    projectDescription: '',
    budgetRange: '$2,500 – $5,000',
    desiredTimeline: '2 – 4 weeks',
    preferredContactMethod: 'whatsapp',
    referenceLinks: '',
  });

  const [honeypot, setHoneypot] = useState(''); // Anti-spam trap
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLeadData, setSubmittedLeadData] = useState<SubmittedLead | null>(null);

  const servicesList = [
    'UI/UX Design',
    'Mobile App Design',
    'Website Design',
    'Digital Product Design',
    'Logo Design',
    'Brand Identity Design',
    'Graphic Design',
    'Business Cards & Print Materials',
    'Other / Custom Scope',
  ];

  const budgetOptions = [
    'Under $1,500',
    '$1,500 – $2,500',
    '$2,500 – $5,000',
    '$5,000 – $10,000',
    '$10,000+',
    'Flexible / Undetermined',
  ];

  const timelineOptions = [
    'Urgent (< 2 weeks)',
    '2 – 4 weeks',
    '1 – 2 months',
    '3+ months',
    'Ongoing Retainer',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot check
    if (honeypot) {
      console.warn('Spam submission intercepted.');
      return;
    }

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validation.errors)[0];
      const element = document.getElementById(`field-${firstErrorKey}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate secure processing & local persistence
    setTimeout(() => {
      const newLead: SubmittedLead = {
        ...formData,
        id: `lead_${Date.now()}`,
        createdAt: new Date().toISOString(),
        status: 'New',
      };

      onSaveLead(newLead);
      setSubmittedLeadData(newLead);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setSubmittedLeadData(null);
    setFormData({
      fullName: '',
      email: '',
      companyName: '',
      serviceRequired: 'UI/UX Design',
      projectDescription: '',
      budgetRange: '$2,500 – $5,000',
      desiredTimeline: '2 – 4 weeks',
      preferredContactMethod: 'whatsapp',
      referenceLinks: '',
    });
  };

  const directWhatsAppUrl = generateWhatsAppLink(
    DESIGNER_INFO.defaultWhatsApp,
    formData.serviceRequired,
    formData.fullName
  );

  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
      {/* Dynamic SEO Metadata */}
      <SEOMetadata
        title="Start a Project & Request a Quote"
        description="Ready to build your next product or brand? Connect directly with Ramos Friday Oluwaseun (RAMZY_SN@ALL) for quotes, scope estimates, and WhatsApp chat."
        path="/contact"
      />

      {/* Colorful Ambient Glow Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-[#315CF5]/10 via-[#8057F5]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 rounded-full bg-gradient-to-tr from-[#10B981]/10 via-[#EC4899]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 pb-10 border-b border-[#E7E7E7]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#315CF5]/10 to-[#8057F5]/10 border border-[#315CF5]/20 text-xs font-bold uppercase tracking-wider text-[#315CF5]">
            <Sparkles className="w-3.5 h-3.5 text-[#8057F5]" />
            <span>Start a Project</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#171717] text-balance">
            Let's Discuss Your Next Product or Brand
          </h1>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
            Fill out the project enquiry form below to receive a formal scope estimate, or message directly on WhatsApp for an immediate conversation.
          </p>
        </div>

        {/* 2-Column Layout: Form & Direct Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form / Confirmation */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-[#E7E7E7] shadow-[0_10px_30px_-10px_rgba(49,92,245,0.08)]">
            
            {isSubmitted && submittedLeadData ? (
              <div className="space-y-6 py-6 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-[#171717]">
                    Thank you, {submittedLeadData.fullName.split(' ')[0]}!
                  </h2>
                  <p className="text-sm text-[#737373] leading-relaxed">
                    Your enquiry for <strong className="text-[#171717]">{submittedLeadData.serviceRequired}</strong> has been received by Ramos Friday Oluwaseun. A reply will be sent to <span className="font-semibold text-[#171717]">{submittedLeadData.email}</span> within 24 hours.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8F8F5] border border-[#E7E7E7] text-xs space-y-2 text-[#737373]">
                  <div className="font-semibold text-[#171717]">Submission Summary:</div>
                  <div>· Scope: {submittedLeadData.serviceRequired} ({submittedLeadData.budgetRange})</div>
                  <div>· Target Timeline: {submittedLeadData.desiredTimeline}</div>
                  <div>· Reference ID: <code className="font-mono text-[#315CF5]">{submittedLeadData.id}</code></div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] rounded-lg hover:bg-[#20ba59] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Follow Up Instantly on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2.5 text-xs font-medium text-[#737373] hover:text-[#171717] bg-[#F8F8F5] rounded-lg border border-[#E7E7E7] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                
                {/* Honeypot field (hidden from users, traps automated bots) */}
                <div className="hidden" aria-hidden="true">
                  <input
                    type="text"
                    name="website_honeypot"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div id="field-fullName" className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:ring-1 transition-colors ${
                        errors.fullName
                          ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#E7E7E7] bg-white focus:border-[#315CF5] focus:ring-[#315CF5]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div id="field-email" className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:ring-1 transition-colors ${
                        errors.email
                          ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#E7E7E7] bg-white focus:border-[#315CF5] focus:ring-[#315CF5]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company / Brand Name */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Company or Brand Name <span className="text-[#737373] font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studio"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E7E7] bg-white text-xs focus:border-[#315CF5] focus:ring-1 focus:ring-[#315CF5]"
                    />
                  </div>

                  {/* Service Required */}
                  <div id="field-serviceRequired" className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:ring-1 transition-colors ${
                        errors.serviceRequired
                          ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#E7E7E7] bg-white focus:border-[#315CF5] focus:ring-[#315CF5]'
                      }`}
                    >
                      {servicesList.map((svc) => (
                        <option key={svc} value={svc}>{svc}</option>
                      ))}
                    </select>
                    {errors.serviceRequired && (
                      <p className="text-[11px] text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.serviceRequired}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Project Description */}
                <div id="field-projectDescription" className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#171717]">
                    Project Details & Goals <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your product, what problems you want to solve, and your target audience..."
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-xs focus:ring-1 transition-colors ${
                      errors.projectDescription
                        ? 'border-red-400 bg-red-50/20 focus:border-red-500 focus:ring-red-500'
                        : 'border-[#E7E7E7] bg-white focus:border-[#315CF5] focus:ring-[#315CF5]'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.projectDescription}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Estimated Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E7E7] bg-white text-xs focus:border-[#315CF5] focus:ring-1 focus:ring-[#315CF5]"
                    >
                      {budgetOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Desired Timeline */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Target Timeline
                    </label>
                    <select
                      value={formData.desiredTimeline}
                      onChange={(e) => setFormData({ ...formData, desiredTimeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E7E7] bg-white text-xs focus:border-[#315CF5] focus:ring-1 focus:ring-[#315CF5]"
                    >
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Preferred Contact Method */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Preferred Contact Method
                    </label>
                    <div className="flex items-center gap-4 pt-1">
                      <label className="flex items-center gap-2 text-xs text-[#171717] cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="whatsapp"
                          checked={formData.preferredContactMethod === 'whatsapp'}
                          onChange={() => setFormData({ ...formData, preferredContactMethod: 'whatsapp' })}
                          className="text-[#315CF5] focus:ring-[#315CF5]"
                        />
                        <span>WhatsApp (Faster)</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs text-[#171717] cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value="email"
                          checked={formData.preferredContactMethod === 'email'}
                          onChange={() => setFormData({ ...formData, preferredContactMethod: 'email' })}
                          className="text-[#315CF5] focus:ring-[#315CF5]"
                        />
                        <span>Email Proposal</span>
                      </label>
                    </div>
                  </div>

                  {/* Optional Reference Links */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#171717]">
                      Reference Links / Figma / Deck <span className="text-[#737373] font-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      placeholder="https://..."
                      value={formData.referenceLinks}
                      onChange={(e) => setFormData({ ...formData, referenceLinks: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E7E7] bg-white text-xs focus:border-[#315CF5] focus:ring-1 focus:ring-[#315CF5]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#E7E7E7]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      boxShadow: '0 4px 0 0 #1e3fb5, 0 8px 20px rgba(49,92,245,0.35)',
                    }}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold text-white bg-gradient-to-r from-[#315CF5] via-[#8057F5] to-[#EC4899] rounded-xl hover:-translate-y-0.5 active:translate-y-1 active:shadow-none transition-all cursor-pointer disabled:opacity-50 whitespace-nowrap"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Project Enquiry'}</span>
                  </button>

                  <div className="text-[11px] text-[#737373] flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#315CF5]" />
                    <span>Response guaranteed within 24 hours</span>
                  </div>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Direct Connect & Capabilities Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7E7] space-y-5 shadow-[0_10px_30px_-10px_rgba(49,92,245,0.08)]">
              <h3 className="text-base font-bold text-[#171717]">
                Prefer Direct Communication?
              </h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Skip the form and chat with Ramos Friday Oluwaseun directly via WhatsApp or send an email.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    boxShadow: '0 3px 0 0 #15803d',
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-gradient-to-r from-[#25D366]/15 to-[#128C7E]/10 border border-[#25D366]/30 text-[#128C7E] rounded-2xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#15803d] active:translate-y-0.5 active:shadow-none transition-all font-bold text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                      <MessageSquare className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="font-bold text-[#171717] block">Chat on WhatsApp</span>
                      <span className="text-[11px] text-[#25D366] font-mono">{DESIGNER_INFO.defaultWhatsApp}</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  style={{
                    boxShadow: '0 3px 0 0 #cbd5e1',
                  }}
                  className="w-full flex items-center justify-between p-3.5 bg-[#F8F8F5] border border-[#E2E8F0] text-[#171717] rounded-2xl hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none transition-all font-bold text-xs group"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#315CF5] flex items-center justify-center">
                      <Mail className="w-4 h-4 text-[#315CF5]" />
                    </div>
                    <span className="truncate">{DESIGNER_INFO.email}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#737373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Capabilities Deck Download Card */}
            <div className="bg-gradient-to-br from-[#171717] via-[#262626] to-[#171717] text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.3)] border border-white/10">
              <div className="text-xs font-mono uppercase text-[#315CF5] tracking-wider font-bold">
                Studio Capabilities
              </div>
              <h3 className="text-base font-bold text-white">
                Download Studio Overview
              </h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Need to present Ramos's capabilities, service matrices, and deliverable specs to your executive team or co-founders?
              </p>
              <button
                onClick={onOpenCapabilitiesModal}
                style={{
                  boxShadow: '0 3px 0 0 #cbd5e1',
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-[#171717] bg-white hover:-translate-y-0.5 hover:shadow-[0_4px_0_0_#94a3b8] active:translate-y-0.5 active:shadow-none rounded-xl transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#315CF5]" />
                <span>View Capabilities Summary</span>
              </button>
            </div>

            {/* Privacy Reassurance */}
            <div className="p-4 rounded-2xl bg-white border border-[#E7E7E7] text-[11px] text-[#737373] space-y-1 shadow-xs">
              <strong className="text-[#171717] block font-bold">Strict Client Confidentiality</strong>
              <p>All project briefs, sketches, and business concepts are treated as strictly confidential under non-disclosure terms.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
