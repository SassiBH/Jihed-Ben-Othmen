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
      className="py-20 md:py-28 border-t border-[#16201B] bg-[#070A08]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Dojo Coordinates & Quick Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-mono-tabular text-[#8A9990]">
                <span>礼 · INITIATE DIALOGUE</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-[#10B981]">MAHDIA, TUNISIA & REMOTE</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-[#E4EBE6] tracking-tight">
                04. Enter the Dojo & Build Together
              </h2>
              <p className="text-sm md:text-base text-[#9FB0A6] leading-relaxed">
                Currently seeking a full-time role in a product-focused company or high-impact full-stack & AI
                engineering collaborations. Reach out directly via email, phone, LinkedIn, or the dispatch composer.
              </p>
            </div>

            {/* Direct Coordinates with One-Click Copy */}
            <div className="space-y-4">
              <div className="p-5 bg-[#0B100D] border border-[#18241E] rounded-2xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono-tabular text-[#7E8F85]">DIRECT ELECTRONIC MAIL</div>
                  <a
                    href={`mailto:${PROFILE_DATA.email}`}
                    className="text-sm md:text-base font-medium text-[#E4EBE6] hover:text-[#10B981] transition-colors break-all"
                  >
                    {PROFILE_DATA.email}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE_DATA.email, 'email')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E4EBE6] bg-[#121B16] hover:bg-[#10B981] hover:text-[#050505] rounded-lg transition-colors shrink-0 whitespace-nowrap"
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

              <div className="p-5 bg-[#0B100D] border border-[#18241E] rounded-2xl flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono-tabular text-[#7E8F85]">DIRECT TELEPHONE LINE</div>
                  <a
                    href={`tel:${PROFILE_DATA.phone.replace(/\s+/g, '')}`}
                    className="text-sm md:text-base font-mono-tabular font-medium text-[#E4EBE6] hover:text-[#10B981] transition-colors"
                  >
                    {PROFILE_DATA.phone}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyValue(PROFILE_DATA.phone, 'phone')}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#E4EBE6] bg-[#121B16] hover:bg-[#10B981] hover:text-[#050505] rounded-lg transition-colors shrink-0 whitespace-nowrap"
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
                  className="inline-flex items-center gap-1.5 text-[#E4EBE6] hover:text-[#10B981] underline-offset-4 hover:underline transition-colors"
                >
                  <span>LinkedIn {PROFILE_DATA.linkedinHandle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
                </a>
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#E4EBE6] hover:text-[#10B981] underline-offset-4 hover:underline transition-colors"
                >
                  <span>GitHub {PROFILE_DATA.githubHandle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
                </a>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onOpenDossier}
                  className="px-4 py-2.5 text-xs font-medium text-[#E4EBE6] bg-[#101814] hover:bg-[#17241D] border border-[#1E2E25] rounded-lg transition-colors whitespace-nowrap"
                >
                  Open Complete Printable CV Dossier
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Dispatch Composer */}
          <div className="lg:col-span-7 p-6 md:p-8 bg-[#0B100D] border border-[#18241E] rounded-2xl">
            <form onSubmit={handleDispatchSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#16201B]">
                <div>
                  <h3 className="text-lg font-semibold text-[#E4EBE6]">
                    Compose Engineering Dispatch
                  </h3>
                  <p className="text-xs text-[#8A9990]">
                    Select your mission focus and prepare a direct brief for Jihed Ben Othmen.
                  </p>
                </div>
                <span className="text-xs font-mono-tabular text-[#10B981]">
                  RESPONSE TARGET: &lt; 24H
                </span>
              </div>

              {/* Mission Type Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-mono-tabular text-[#95A69C]">
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
                            ? 'bg-[#10B981] text-[#050505] border-[#10B981] font-semibold'
                            : 'bg-[#080B09] text-[#95A69C] border-[#18241E] hover:text-[#E4EBE6]'
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
                    className="block text-xs font-mono-tabular text-[#95A69C]"
                  >
                    02. YOUR NAME
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Sarah Al-Mansoor"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#070A08] border border-[#19261F] rounded-lg text-[#E4EBE6] placeholder-[#526158] focus:outline-none focus:border-[#10B981]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="sender-org"
                    className="block text-xs font-mono-tabular text-[#95A69C]"
                  >
                    03. COMPANY OR TEAM
                  </label>
                  <input
                    id="sender-org"
                    type="text"
                    value={senderOrg}
                    onChange={(e) => setSenderOrg(e.target.value)}
                    placeholder="e.g. Product Engineering Team"
                    className="w-full px-3.5 py-2.5 text-sm bg-[#070A08] border border-[#19261F] rounded-lg text-[#E4EBE6] placeholder-[#526158] focus:outline-none focus:border-[#10B981]"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="dispatch-message"
                  className="block text-xs font-mono-tabular text-[#95A69C]"
                >
                  04. ARCHITECTURAL BRIEF OR ROLE OVERVIEW
                </label>
                <textarea
                  id="dispatch-message"
                  rows={4}
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-[#070A08] border border-[#19261F] rounded-lg text-[#E4EBE6] placeholder-[#526158] focus:outline-none focus:border-[#10B981] resize-y"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#050505] bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors whitespace-nowrap"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-[#E4EBE6] bg-[#121B16] hover:bg-[#19261F] border border-[#1E2E25] rounded-lg transition-colors whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Launch Mail Client</span>
                </a>
              </div>

              {dispatchConfirmed && (
                <div className="p-4 bg-[#0D1913] border border-[#10B981]/50 rounded-xl text-xs text-[#B8C7BE] flex items-center justify-between gap-4">
                  <span>
                    Dispatch prepared and copied to your clipboard. You can paste it directly into an email to{' '}
                    <strong className="text-[#10B981]">{PROFILE_DATA.email}</strong> or message on LinkedIn.
                  </span>
                  <button
                    type="button"
                    onClick={() => setDispatchConfirmed(false)}
                    className="text-[#8A9990] hover:text-[#E4EBE6] underline shrink-0"
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
