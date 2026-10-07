import React, { useEffect, useState } from 'react';
import { X, Printer, Copy, Check } from 'lucide-react';
import { PROFILE_DATA, PROJECTS_DATA, ARSENAL_DISCIPLINES } from '../data/portfolioData';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyPlainText = () => {
    const text = [
      `${PROFILE_DATA.name} — ${PROFILE_DATA.title}`,
      `${PROFILE_DATA.location} | ${PROFILE_DATA.phone} | ${PROFILE_DATA.email}`,
      `LinkedIn: ${PROFILE_DATA.linkedin} | GitHub: ${PROFILE_DATA.github}`,
      '',
      'PROFILE',
      PROFILE_DATA.summary,
      '',
      'EXPERIENCE & PROJECTS',
      ...PROJECTS_DATA.map(
        (p) => `- ${p.role} at ${p.organization} (${p.period}): ${p.summary} [${p.techStack.join(', ')}]`
      ),
      '',
      'QUALIFICATIONS',
      ...PROFILE_DATA.qualifications.map((q) => `- ${q.degree}, ${q.institution} (${q.period})`),
      '',
      'CERTIFICATIONS',
      ...PROFILE_DATA.certifications.map((c) => `- ${c.title} (${c.year})`),
    ].join('\n');

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B0F0D] border border-[#1C2822] rounded-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#18221D] bg-[#080B09]">
          <div className="text-xs font-mono-tabular text-[#8A9990]">
            <span className="text-[#10B981]">CURRICULUM VITAE DOSSIER</span>
            <span className="mx-2">·</span>
            <span>JIHED BEN OTHMEN</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#E4EBE6] bg-[#121A16] hover:bg-[#19261F] rounded-lg transition-colors whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied CV Summary' : 'Copy Text CV'}</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#050505] bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close curriculum vitae dossier"
              className="w-10 h-10 flex items-center justify-center text-[#E4EBE6] bg-[#111714] hover:bg-[#10B981] hover:text-[#050505] rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Content */}
        <div className="p-6 md:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Header Identity */}
          <div className="border-b border-[#18221D] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 id="dossier-modal-title" className="text-2xl md:text-3xl font-semibold text-[#E4EBE6]">
                {PROFILE_DATA.name}
              </h2>
              <p className="text-sm text-[#10B981] mt-1 font-medium">
                {PROFILE_DATA.title} · {PROFILE_DATA.location}
              </p>
            </div>
            <div className="text-xs font-mono-tabular text-[#95A69C] space-y-1 md:text-right">
              <div>{PROFILE_DATA.phone} · {PROFILE_DATA.email}</div>
              <div>
                LinkedIn: {PROFILE_DATA.linkedinHandle} · GitHub: {PROFILE_DATA.githubHandle}
              </div>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-sm font-semibold text-[#E4EBE6] mb-2">01. Executive Profile</h3>
            <p className="text-sm text-[#B8C7BE] leading-relaxed">{PROFILE_DATA.summary}</p>
          </div>

          {/* Experience & Internships */}
          <div>
            <h3 className="text-sm font-semibold text-[#E4EBE6] mb-4">
              02. Professional Experience & Internships
            </h3>
            <div className="space-y-6">
              {PROJECTS_DATA.map((item) => (
                <div key={item.id} className="border-l-2 border-[#1C2E24] pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[#E4EBE6]">
                      {item.role} — <span className="text-[#10B981]">{item.organization}</span>
                    </h4>
                    <span className="text-xs font-mono-tabular text-[#8A9990]">{item.period}</span>
                  </div>
                  <p className="text-xs text-[#B8C7BE] leading-relaxed">{item.summary}</p>
                  <ul className="space-y-1 pt-1">
                    {item.samuraiExecution.map((bullet, i) => (
                      <li key={i} className="text-xs text-[#95A69C] leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono-tabular text-[#10B981] pt-1">
                    Technical environment: {item.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#18221D]">
            <div>
              <h3 className="text-sm font-semibold text-[#E4EBE6] mb-3">03. Technical Arsenal</h3>
              <div className="space-y-2.5 text-xs">
                {ARSENAL_DISCIPLINES.map((group) => (
                  <div key={group.id}>
                    <span className="text-[#E4EBE6] font-medium">{group.englishTitle}: </span>
                    <span className="text-[#95A69C]">
                      {group.items.map((i) => i.name).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[#E4EBE6] mb-2">04. Qualifications</h3>
                <div className="space-y-2 text-xs">
                  {PROFILE_DATA.qualifications.map((q, i) => (
                    <div key={i}>
                      <div className="text-[#E4EBE6] font-medium">{q.degree}</div>
                      <div className="text-[#8A9990]">
                        {q.institution} · <span className="font-mono-tabular">{q.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[#E4EBE6] mb-2">05. Certifications & Languages</h3>
                <div className="space-y-1 text-xs text-[#95A69C]">
                  {PROFILE_DATA.certifications.map((c, i) => (
                    <div key={i} className="text-[#10B981]">
                      • {c.title}
                    </div>
                  ))}
                  <div className="pt-2 text-[#B8C7BE]">
                    Languages: {PROFILE_DATA.languages.map((l) => `${l.language} (${l.proficiency})`).join(' · ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
