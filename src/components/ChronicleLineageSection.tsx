import React, { useState } from 'react';
import { PROFILE_DATA, PROJECTS_DATA, ProjectCaseStudy } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ChronicleLineageProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const ChronicleLineageSection: React.FC<ChronicleLineageProps> = ({
  onSelectProject,
}) => {
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'professional' | 'internship'>('all');

  const filteredTimeline = PROJECTS_DATA.filter((item) => {
    if (timelineFilter === 'all') return true;
    const isInternship = item.role.toLowerCase().includes('internship');
    return timelineFilter === 'internship' ? isInternship : !isInternship;
  });

  return (
    <section
      id="chronicle"
      className="py-20 md:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] transition-colors"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-20">
        {/* Header & Timeline Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
              <span className="text-[var(--text-primary)] font-medium">武道伝承 · CHRONICLE & LINEAGE</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span className="text-[var(--accent-text)] font-medium">2016 – 2025 PATH OF MASTERY</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
              03. Experience Chronicle & Academic Lineage
            </h2>
            <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">
              Every engagement — from autonomous AI product engineering to enterprise HR modules and cross-platform
              mobile marketplaces — sharpens the blade.
            </p>
          </div>

          <div
            className="flex items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl self-start"
            role="tablist"
            aria-label="Filter Experience Chronicle"
          >
            {[
              { id: 'all', label: 'Full Chronicle (6)' },
              { id: 'professional', label: 'Professional Roles (3)' },
              { id: 'internship', label: 'Engineering Internships (3)' },
            ].map((tab) => {
              const active = timelineFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() =>
                    setTimelineFilter(tab.id as 'all' | 'professional' | 'internship')
                  }
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#38BDF8] text-[#050505] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Experience Ledger */}
        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {filteredTimeline.map((entry) => (
            <div
              key={entry.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
            >
              {/* Period & Organization */}
              <div className="lg:col-span-3 space-y-1">
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                  {entry.period}
                </div>
                <div className="text-base font-semibold text-[var(--text-primary)]">
                  {entry.organization}
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  {entry.location}
                </div>
              </div>

              {/* Role, Bullets & Unboxed Metadata */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors">
                  {entry.role}
                </h3>
                <p className="text-sm text-[var(--text-body)] leading-relaxed">
                  {entry.summary}
                </p>
                <ul className="space-y-1.5 pt-1">
                  {entry.samuraiExecution.map((point, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                      · {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-xs font-mono-tabular text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)] font-medium">Environment: </span>
                  <span className="text-[var(--accent-text)]">{entry.techStack.join(' · ')}</span>
                </div>
              </div>

              {/* Inspect Case Study Button */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <button
                  type="button"
                  onClick={() => onSelectProject(entry)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[#38BDF8] hover:text-[#050505] border border-[var(--border-card)] rounded-lg transition-colors whitespace-nowrap"
                >
                  <span>Inspect Kata</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Lineage, Oracle Cloud Certifications & Martial Disciplines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          {/* Column 1: Academic Degrees */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">ACADEMIC LINEAGE</div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                Engineering Qualifications
              </h3>
            </div>

            <div className="space-y-6">
              {PROFILE_DATA.qualifications.map((qual, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl space-y-2 transition-colors"
                >
                  <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                    {qual.period}
                  </div>
                  <h4 className="text-base font-semibold text-[var(--text-primary)]">
                    {qual.degree}
                  </h4>
                  <div className="text-sm text-[var(--text-body)]">{qual.institution}</div>
                  <p className="text-xs text-[var(--text-muted)] pt-2 border-t border-[var(--border-subtle)] leading-relaxed">
                    {qual.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Oracle Cloud Certifications & Languages/Strengths */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                  CLOUD & AI SEALS OF MASTERY
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  Oracle Cloud Infrastructure Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl flex flex-col justify-between space-y-4 transition-colors"
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                        {cert.issuer} · {cert.year}
                      </div>
                      <h4 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-subtle)]">
                      {cert.domain}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spoken Languages, Core Strengths & Personal Interests */}
            <div className="p-6 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6 transition-colors">
              <div className="space-y-2">
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">SPOKEN TONGUES</div>
                <div className="space-y-1.5 text-xs text-[var(--text-body)]">
                  {PROFILE_DATA.languages.map((lang) => (
                    <div key={lang.language} className="flex items-center justify-between">
                      <span className="text-[var(--text-primary)] font-medium">{lang.language}</span>
                      <span className="text-[var(--text-muted)]">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:border-l md:border-[var(--border-subtle)] md:pl-6">
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">BUSHIDO STRENGTHS</div>
                <div className="space-y-1.5 text-xs text-[var(--text-body)]">
                  {PROFILE_DATA.strengths.map((str) => (
                    <div key={str.title} className="text-[var(--text-primary)] font-medium">
                      · {str.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:border-l md:border-[var(--border-subtle)] md:pl-6">
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">METHODOLOGY & INTERESTS</div>
                <div className="text-xs text-[var(--text-body)] space-y-1.5 leading-relaxed">
                  <div className="text-[var(--text-primary)] font-medium">· Agile Scrum Delivery</div>
                  <div>· {PROFILE_DATA.interests.join(' · ')}</div>
                  <div className="text-[var(--text-muted)]">Mahdia, Tunisia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
