import React, { useState } from 'react';
import {
  ARSENAL_DISCIPLINES,
  AIKIDO_KATA_SCENARIOS,
  ArsenalDiscipline,
} from '../data/portfolioData';
import { ArrowRight } from 'lucide-react';

export const AikidoArsenalSection: React.FC = () => {
  const [selectedKataId, setSelectedKataId] = useState<string>(AIKIDO_KATA_SCENARIOS[0].id);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(0);
  const [disciplineFilter, setDisciplineFilter] = useState<
    'all' | ArsenalDiscipline['category']
  >('all');

  const currentKata =
    AIKIDO_KATA_SCENARIOS.find((k) => k.id === selectedKataId) || AIKIDO_KATA_SCENARIOS[0];

  const filteredDisciplines =
    disciplineFilter === 'all'
      ? ARSENAL_DISCIPLINES
      : ARSENAL_DISCIPLINES.filter((d) => d.category === disciplineFilter);

  return (
    <section
      id="arsenal"
      className="py-20 md:py-28 border-t border-[var(--border-subtle)] bg-[var(--bg-section-alt)] transition-colors"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-20">
        {/* Part 1: Interactive Aikido System Flow Simulator */}
        <div className="space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
                <span className="text-[var(--text-primary)] font-medium">合気道 · AIKIDO ARCHITECTURE SIMULATOR</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-[var(--accent-text)] font-medium">REDIRECTING SYSTEM LOAD INTO HARMONY</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
                02. The Aikido of Full-Stack Architecture
              </h2>
              <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">
                In Aikido, a practitioner never collides head-on with incoming force — they blend with it
                (<span className="text-[var(--text-primary)] font-medium">Awase</span>), pivot around a stable center
                (<span className="text-[var(--text-primary)] font-medium">Tenkan</span>), and redirect energy into a decisive resolution
                (<span className="text-[var(--text-primary)] font-medium">Kime</span>). Inspect how Jihed applies this principle to real
                production systems.
              </p>
            </div>

            {/* Interactive Segmented Kata Selector */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl self-start"
              role="tablist"
              aria-label="Select Architecture Kata Scenario"
            >
              {AIKIDO_KATA_SCENARIOS.map((kata, idx) => {
                const isActive = kata.id === selectedKataId;
                return (
                  <button
                    key={kata.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      setSelectedKataId(kata.id);
                      setActiveNodeIndex(0);
                    }}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#38BDF8] text-[#050505] font-semibold'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-control)]'
                    }`}
                  >
                    Kata 0{idx + 1} ·{' '}
                    {kata.id === 'kata-ai-media'
                      ? 'AI Media Stream'
                      : kata.id === 'kata-realtime-marketplace'
                      ? 'WebSocket Marketplace'
                      : 'Saudi E-Commerce RBAC'}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Kata Canvas Container (Single-Level Card Elevation) */}
          <div className="p-6 md:p-8 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl space-y-8 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)]">
              <div>
                <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium mb-1">
                  {currentKata.japaneseName}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)]">
                  {currentKata.name}
                </h3>
              </div>

              <div className="flex items-center gap-6 text-xs font-mono-tabular">
                <div>
                  <span className="text-[var(--text-muted)] block">LATENCY TARGET</span>
                  <span className="text-[var(--accent-text)] text-sm font-semibold">{currentKata.latencyTarget}</span>
                </div>
                <div className="h-8 w-px bg-[var(--border-subtle)]" />
                <div>
                  <span className="text-[var(--text-muted)] block">MEASURED OUTCOME</span>
                  <span className="text-[var(--text-primary)] text-sm font-semibold">{currentKata.efficiencyGain}</span>
                </div>
              </div>
            </div>

            {/* Interactive 4-Stage Pipeline Nodes */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {currentKata.nodes.map((node, index) => {
                const isSelected = index === activeNodeIndex;
                return (
                  <button
                    key={node.stage}
                    type="button"
                    onClick={() => setActiveNodeIndex(index)}
                    className={`text-left p-5 rounded-xl border transition-all duration-150 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[var(--bg-active-tint)] border-[#38BDF8]'
                        : 'bg-[var(--bg-card-alt)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className={isSelected ? 'text-[var(--accent-text)] font-semibold' : 'text-[var(--text-muted)]'}>
                          {node.stage}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected ? 'text-[var(--accent-text)] translate-x-0.5' : 'text-[var(--text-muted)]'
                          }`}
                        />
                      </div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">{node.tech}</div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{node.role}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)]">
                      {node.detail}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Redirection Explanation Strip */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 text-xs md:text-sm text-[var(--text-body)]">
              <div>
                <span className="text-[var(--text-primary)] font-semibold font-mono-tabular">INCOMING FORCE: </span>
                <span>{currentKata.incomingForce}</span>
              </div>
              <div className="md:text-right">
                <span className="text-[var(--accent-text)] font-semibold font-mono-tabular">AIKIDO REDIRECTION: </span>
                <span>{currentKata.redirectionPrinciple}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Complete Technical Arsenal (Filterable by Martial Discipline) */}
        <div className="space-y-8 pt-6 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
                <span className="text-[var(--text-primary)] font-medium">武具 · TECHNICAL DOJO ARSENAL</span>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-[var(--accent-text)] font-medium">VERIFIED PRODUCTION STACK</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-[var(--text-primary)]">
                Forged Weapons & Frameworks
              </h3>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl self-start"
              role="tablist"
              aria-label="Filter Technical Skills by Discipline"
            >
              {[
                { id: 'all', label: 'All Disciplines (17)' },
                { id: 'languages', label: 'Languages (6)' },
                { id: 'frontend', label: 'Frontend (2)' },
                { id: 'backend', label: 'Backend (3)' },
                { id: 'mobile', label: 'Mobile (2)' },
                { id: 'data-devops', label: 'SGBD & Cloud (4)' },
              ].map((tab) => {
                const active = disciplineFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() =>
                      setDisciplineFilter(tab.id as 'all' | ArsenalDiscipline['category'])
                    }
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
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

          {/* Discipline Sections separated by whitespace and subtle hairlines */}
          <div className="space-y-10">
            {filteredDisciplines.map((discipline) => (
              <div
                key={discipline.id}
                className="pt-6 border-t border-[var(--border-subtle)] first:border-t-0 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6"
              >
                <div className="lg:col-span-4 space-y-2">
                  <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
                    {discipline.japaneseTitle}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                    {discipline.englishTitle}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed pr-4">
                    {discipline.philosophy}
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {discipline.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[#38BDF8] rounded-xl transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-base font-semibold text-[var(--text-primary)]">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium shrink-0">
                            {skill.yearsOrProjects}
                          </span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] mt-1">{skill.domain}</div>
                      </div>
                      <p className="text-xs text-[var(--text-muted)] mt-3 pt-3 border-t border-[var(--border-subtle)] leading-relaxed">
                        {skill.experienceContext}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
