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
      className="py-20 md:py-28 border-t border-[#16201B] bg-[#050505]"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-20">
        {/* Header & Timeline Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-mono-tabular text-[#8A9990]">
              <span>武道伝承 · CHRONICLE & LINEAGE</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span className="text-[#10B981]">2016 – 2025 PATH OF MASTERY</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#E4EBE6] tracking-tight">
              03. Experience Chronicle & Academic Lineage
            </h2>
            <p className="text-sm md:text-base text-[#9FB0A6] leading-relaxed">
              Every engagement — from autonomous AI product engineering to enterprise HR modules and cross-platform
              mobile marketplaces — sharpens the blade.
            </p>
          </div>

          <div
            className="flex items-center gap-1.5 p-1.5 bg-[#0C120F] border border-[#18241E] rounded-xl self-start"
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
                      ? 'bg-[#10B981] text-[#050505] font-semibold'
                      : 'text-[#95A69C] hover:text-[#E4EBE6]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Experience Ledger */}
        <div className="divide-y divide-[#16201B] border-y border-[#16201B]">
          {filteredTimeline.map((entry) => (
            <div
              key={entry.id}
              className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group"
            >
              {/* Period & Organization */}
              <div className="lg:col-span-3 space-y-1">
                <div className="text-xs font-mono-tabular text-[#10B981]">
                  {entry.period}
                </div>
                <div className="text-base font-semibold text-[#E4EBE6]">
                  {entry.organization}
                </div>
                <div className="text-xs text-[#7E8F85]">
                  {entry.location}
                </div>
              </div>

              {/* Role, Bullets & Unboxed Metadata */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-lg font-semibold text-[#E4EBE6] group-hover:text-[#10B981] transition-colors">
                  {entry.role}
                </h3>
                <p className="text-sm text-[#B8C7BE] leading-relaxed">
                  {entry.summary}
                </p>
                <ul className="space-y-1.5 pt-1">
                  {entry.samuraiExecution.map((point, idx) => (
                    <li key={idx} className="text-xs md:text-sm text-[#95A69C] leading-relaxed">
                      · {point}
                    </li>
                  ))}
                </ul>
                <div className="pt-2 text-xs font-mono-tabular text-[#7E8F85]">
                  <span className="text-[#A3B3A9]">Environment: </span>
                  {entry.techStack.join(' · ')}
                </div>
              </div>

              {/* Inspect Case Study Button */}
              <div className="lg:col-span-2 flex lg:justify-end">
                <button
                  type="button"
                  onClick={() => onSelectProject(entry)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#E4EBE6] bg-[#0D1410] hover:bg-[#10B981] hover:text-[#050505] border border-[#1B2B22] rounded-lg transition-colors whitespace-nowrap"
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
              <div className="text-xs font-mono-tabular text-[#10B981]">ACADEMIC LINEAGE</div>
              <h3 className="text-xl font-semibold text-[#E4EBE6]">
                Engineering Qualifications
              </h3>
            </div>

            <div className="space-y-6">
              {PROFILE_DATA.qualifications.map((qual, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#0A0E0C] border border-[#18241E] rounded-2xl space-y-2"
                >
                  <div className="text-xs font-mono-tabular text-[#10B981]">
                    {qual.period}
                  </div>
                  <h4 className="text-base font-semibold text-[#E4EBE6]">
                    {qual.degree}
                  </h4>
                  <div className="text-sm text-[#B8C7BE]">{qual.institution}</div>
                  <p className="text-xs text-[#7E8F85] pt-2 border-t border-[#141E19] leading-relaxed">
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
                <div className="text-xs font-mono-tabular text-[#10B981]">
                  CLOUD & AI SEALS OF MASTERY
                </div>
                <h3 className="text-xl font-semibold text-[#E4EBE6]">
                  Oracle Cloud Infrastructure Certifications
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE_DATA.certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-6 bg-[#0A0E0C] border border-[#18241E] rounded-2xl flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="text-xs font-mono-tabular text-[#10B981]">
                        {cert.issuer} · {cert.year}
                      </div>
                      <h4 className="text-base font-semibold text-[#E4EBE6] leading-snug">
                        {cert.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#7E8F85] pt-3 border-t border-[#141E19]">
                      {cert.domain}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spoken Languages, Core Strengths & Personal Interests */}
            <div className="p-6 bg-[#0A0E0C] border border-[#18241E] rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-xs font-mono-tabular text-[#10B981]">SPOKEN TONGUES</div>
                <div className="space-y-1.5 text-xs text-[#B8C7BE]">
                  {PROFILE_DATA.languages.map((lang) => (
                    <div key={lang.language} className="flex items-center justify-between">
                      <span className="text-[#E4EBE6] font-medium">{lang.language}</span>
                      <span className="text-[#7E8F85]">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:border-l md:border-[#16201B] md:pl-6">
                <div className="text-xs font-mono-tabular text-[#10B981]">BUSHIDO STRENGTHS</div>
                <div className="space-y-1.5 text-xs text-[#B8C7BE]">
                  {PROFILE_DATA.strengths.map((str) => (
                    <div key={str.title} className="text-[#E4EBE6] font-medium">
                      · {str.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 md:border-l md:border-[#16201B] md:pl-6">
                <div className="text-xs font-mono-tabular text-[#10B981]">METHODOLOGY & INTERESTS</div>
                <div className="text-xs text-[#B8C7BE] space-y-1.5 leading-relaxed">
                  <div className="text-[#E4EBE6] font-medium">· Agile Scrum Delivery</div>
                  <div>· {PROFILE_DATA.interests.join(' · ')}</div>
                  <div className="text-[#7E8F85]">Mahdia, Tunisia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
