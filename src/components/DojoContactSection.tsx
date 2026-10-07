import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Copy, Check, ArrowUpRight, Send } from 'lucide-react';

interface DojoContactSectionProps {
  onOpenDossier: () => void;
}

export const DojoContactSection: React.FC<DojoContactSectionProps> = ({
  onOpenDossier,
}) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | 'brief' | null>(null);
  const [engagementType, setEngagementType] = useState<string>('Full-Time Product Role');
  const [senderName, setSenderName] = useState<string>('');
  const [senderOrg, setSenderOrg] = useState<string>('');
  const [messageBody, setMessageBody] = useState<string>(
    'Hello Jihed, we are impressed by your React, Node.js, Python AI, and Flutter background and would love to discuss an engineering role.'
  );
  const [dispatchConfirmed, setDispatchConfirmed] = useState<boolean>(false);

  const copyValue = (value: string, field: 'email' | 'phone' | 'brief') => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2200);
  };

  const formattedSubject = `[${engagementType}] Inquiry for Jihed Ben Othmen${
    senderOrg ? ` — ${senderOrg}` : ''
  }`;

  const formattedFullBrief = `To: ${PROFILE_DATA.name} <${PROFILE_DATA.email}>\nEngagement: ${engagementType}\nFrom: ${
    senderName || 'Hiring Team'
  }${senderOrg ? ` (${senderOrg})` : ''}\n\n${messageBody}`;

  const handleDispatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(formattedFullBrief);
    setCopiedField('brief');
    setDispatchConfirmed(true);
    setTimeout(() => setCopiedField(null), 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-section-alt)] transition-colors"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Dojo Coordinates & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
                <span className="text-[var(--text-primary)] font-medium">礼 · INITIATE DIALOGUE</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-[var(--accent-text)] font-medium">MAHDIA, TUNISIA & REMOTE</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
                04. Enter the Dojo & Build Together
              </h2>
              <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">
                Currently seeking a full-time role in a product-focused company or high-impact full-stack & AI
                engineering collaborations. Reach out directly via email, phone, LinkedIn, or the dispatch composer.
              </p>
            </div>

            {/* Direct Coordinates with One-Click Copy */}
            <div className="space-y-4">
              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl flex items-center justify-between gap-4 transition-colors">
                <div>
                  <div className="text-xs font-mono-tabular text-[var(--text-muted)]">DIRECT ELECTRONIC MAIL</div>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-sm md:text-base font-medium text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors break-all"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE_DATA.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[#38BDF8] hover:text-[#050505] rounded-lg transition-colors shrink-0 whitespace-nowrap"
                >
                  {copiedField === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl flex items-center justify-between gap-4 transition-colors">
                <div>
                  <div className="text-xs font-mono-tabular text-[var(--text-muted)]">DIRECT TELEPHONE LINE</div>
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                    className="text-sm md:text-base font-mono-tabular font-medium text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors"
                  >
                    {PROFILE_DATA.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE_DATA.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[#38BDF8] hover:text-[#050505] rounded-lg transition-colors shrink-0 whitespace-nowrap"
                >
                  {copiedField === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* External Profiles & Printable Dossier */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-text)] underline-offset-4 hover:underline transition-colors"
                >
                  <span>LinkedIn {PROFILE_DATA.linkedinHandle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--accent-text)]" />
                </a>
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-primary)] hover:text-[var(--accent-text)] underline-offset-4 hover:underline transition-colors"
                >
                  <span>GitHub {PROFILE_DATA.githubHandle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--accent-text)]" />
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="px-4 py-2.5 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[var(--bg-control-hover)] border border-[var(--border-card)] rounded-lg transition-colors whitespace-nowrap"
                >
                  Open Complete Printable CV Dossier
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Composer */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl transition-colors">
            <form onSubmit={handleDispatchSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)]">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Compose Engineering Dispatch
                  </h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    Select your mission focus and prepare a direct brief for Jihed Ben Othmen.
                  </p>
                </div>
                <span className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                  RESPONSE TARGET: &lt; 24H
                </span>
              </div>

              {/* Mission Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-tabular text-[var(--text-secondary)]">
                  01. SELECT ENGAGEMENT DISCIPLINE
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Full-Time Product Role',
                    'AI & Python Full-Stack',
                    'React / Angular Web Platform',
                    'Flutter Mobile Ecosystem',
                  ].map((option) => {
                    const active = engagementType === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setEngagementType(option)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors whitespace-nowrap ${
                          active
                            ? 'bg-[#38BDF8] text-[#050505] border-[#38BDF8] font-semibold'
                            : 'bg-[var(--bg-card-alt)] text-[var(--text-secondary)] border-[var(--border-card)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sender Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="sender-name"
                    className="block text-xs font-mono-tabular text-[var(--text-secondary)]"
                  >
                    02. YOUR NAME
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Al-Mansoor"
                    className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-card-alt)] border border-[var(--border-card)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="sender-org"
                    className="block text-xs font-mono-tabular text-[var(--text-secondary)]"
                  >
                    03. COMPANY OR TEAM
                  </label>
                  <input
                    id="sender-org"
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. Product Engineering Team"
                    className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-card-alt)] border border-[var(--border-card)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#38BDF8]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="dispatch-message"
                  className="block text-xs font-mono-tabular text-[var(--text-secondary)]"
                >
                  04. ARCHITECTURAL BRIEF OR ROLE OVERVIEW
                </label>
                <textarea
                  id="dispatch-message"
                  rows={4}
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[var(--bg-card-alt)] border border-[var(--border-card)] rounded-lg text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#38BDF8] resize-y"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#050505] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>
                    {copiedField === 'brief'
                      ? 'Formatted Brief Copied to Clipboard'
                      : 'Prepare & Copy Dispatch Brief'}
                  </span>
                </button>

                <a
                  href={`mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
                    formattedSubject
                  )}&body=${encodeURIComponent(formattedFullBrief)}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[var(--bg-control-hover)] border border-[var(--border-card)] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 text-[var(--accent-text)]" />
                  <span>Launch Mail Client</span>
                </a>
              </div>

              {dispatchConfirmed && (
                <div className="p-4 bg-[var(--bg-active-tint)] border border-[#38BDF8] rounded-xl text-xs text-[var(--text-body)] flex items-center justify-between gap-4">
                  <span>
                    Dispatch prepared and copied to your clipboard. You can paste it directly into an email to{' '}
                    <strong className="text-[var(--accent-text)]">{PROFILE_DATA.email}</strong> or message on LinkedIn.
                  </span>
                  <button
                    type="button"
                    onClick={() => setDispatchConfirmed(false)}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] underline shrink-0"
                  >
                    Dismiss
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
