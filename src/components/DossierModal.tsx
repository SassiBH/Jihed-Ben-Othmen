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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md p-4 md:p-8 overflow-y-auto"
      style={{ backgroundColor: 'var(--modal-backdrop)' }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl overflow-hidden my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-subtle)] bg-[var(--bg-card-alt)]">
          <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
            <span className="text-[var(--accent-text)] font-semibold">CURRICULUM VITAE DOSSIER</span>
            <span className="mx-2">·</span>
            <span className="text-[var(--text-primary)]">JIHED BEN OTHMEN</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[var(--bg-control-hover)] rounded-lg transition-colors whitespace-nowrap"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-text)]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied CV Summary' : 'Copy Text CV'}</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#050505] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close curriculum vitae dossier"
              className="w-10 h-10 flex items-center justify-center text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[#38BDF8] hover:text-[#050505] rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Content */}
        <div className="p-6 md:p-10 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Header Identity */}
          <div className="border-b border-[var(--border-subtle)] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 id="dossier-modal-title" className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                {PROFILE_DATA.name}
              </h2>
              <p className="text-sm text-[var(--accent-text)] mt-1 font-medium">
                {PROFILE_DATA.title} · {PROFILE_DATA.location}
              </p>
            </div>
            <div className="text-xs font-mono-tabular text-[var(--text-secondary)] space-y-1 md:text-right">
              <div>{PROFILE_DATA.phone} · {PROFILE_DATA.email}</div>
              <div>
                LinkedIn: {PROFILE_DATA.linkedinHandle} · GitHub: {PROFILE_DATA.githubHandle}
              </div>
            </div>
          </div>

          {/* Profile */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">01. Executive Profile</h3>
            <p className="text-sm text-[var(--text-body)] leading-relaxed">{PROFILE_DATA.summary}</p>
          </div>

          {/* Experience & Internships */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
              02. Professional Experience & Internships
            </h3>
            <div className="space-y-6">
              {PROJECTS_DATA.map((item) => (
                <div key={item.id} className="border-l-2 border-[var(--border-strong)] pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      {item.role} — <span className="text-[var(--accent-text)]">{item.organization}</span>
                    </h4>
                    <span className="text-xs font-mono-tabular text-[var(--text-muted)]">{item.period}</span>
                  </div>
                  <p className="text-xs text-[var(--text-body)] leading-relaxed">{item.summary}</p>
                  <ul className="space-y-1 pt-1">
                    {item.samuraiExecution.map((bullet, i) => (
                      <li key={i} className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        • {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono-tabular text-[var(--accent-text)] pt-1">
                    Technical environment: {item.techStack.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
            <div>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-3">03. Technical Arsenal</h3>
              <div className="space-y-2.5 text-xs">
                {ARSENAL_DISCIPLINES.map((group) => (
                  <div key={group.id}>
                    <span className="text-[var(--text-primary)] font-medium">{group.englishTitle}: </span>
                    <span className="text-[var(--text-secondary)]">
                      {group.items.map((i) => i.name).join(' · ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">04. Qualifications</h3>
                <div className="space-y-2 text-xs">
                  {PROFILE_DATA.qualifications.map((q, i) => (
                    <div key={i}>
                      <div className="text-[var(--text-primary)] font-medium">{q.degree}</div>
                      <div className="text-[var(--text-muted)]">
                        {q.institution} · <span className="font-mono-tabular">{q.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">05. Certifications & Languages</h3>
                <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                  {PROFILE_DATA.certifications.map((c, i) => (
                    <div key={i} className="text-[var(--accent-text)] font-medium">
                      • {c.title}
                    </div>
                  ))}
                  <div className="pt-2 text-[var(--text-body)]">
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
