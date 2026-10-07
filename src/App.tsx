/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  ProjectCaseStudy,
} from './data/portfolioData';
import { ProjectMediaContainer } from './components/SamuraiAikidoArtwork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DossierModal } from './components/DossierModal';
import { AikidoArsenalSection } from './components/AikidoArsenalSection';
import { ChronicleLineageSection } from './components/ChronicleLineageSection';
import { DojoContactSection } from './components/DojoContactSection';

export default function App() {
  const [stance, setStance] = useState<'samurai' | 'aikido'>('samurai');
  const [projectFilter, setProjectFilter] = useState<'all' | 'ai' | 'web' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [heroImgFailed, setHeroImgFailed] = useState<boolean>(false);

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === projectFilter);

  const handleSelectNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[nextIndex]);
  };

  const handleSelectPrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[prevIndex]);
  };

  return (
    <div id="top" className="min-h-screen bg-[#050505] text-[#E4EBE6] flex flex-col">
      {/* Strict 3-Zone Top Bar Contract */}
      <header className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 bg-[#050505]/90 backdrop-blur-md border-b border-[#16201B]">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#top"
          className="font-display text-base md:text-lg font-bold tracking-tight text-[#E4EBE6] hover:text-[#10B981] transition-colors whitespace-nowrap shrink-0"
        >
          Jihed Ben Othmen
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#95A69C]"
        >
          <a
            href="#works"
            className="hover:text-[#E4EBE6] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Selected Works
          </a>
          <a
            href="#arsenal"
            className="hover:text-[#E4EBE6] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Aikido & Arsenal
          </a>
          <a
            href="#chronicle"
            className="hover:text-[#E4EBE6] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Chronicle
          </a>
          <a
            href="#contact"
            className="hover:text-[#E4EBE6] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Dojo Contact
          </a>
        </nav>

        {/* Zone 3: 2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setIsDossierOpen(true)}
            className="px-3.5 py-2 text-xs font-medium text-[#E4EBE6] bg-[#0E1511] hover:bg-[#16221C] border border-[#1E2E25] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Curriculum Vitae
          </button>
          <a
            href="#contact"
            className="px-4 py-2 text-xs font-semibold text-[#050505] bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Initiate Dialogue
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Split-Screen Hero Section */}
        <section className="relative py-14 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Side: Bold Typographic Hierarchy, Stance Philosophy & Quantitative Proof */}
              <div className="lg:col-span-7 space-y-8">
                {/* Quiet Unboxed Metadata Line */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#8A9990]">
                  <span className="text-[#10B981] font-medium">{PROFILE_DATA.title}</span>
                  <span aria-hidden="true">·</span>
                  <span>{PROFILE_DATA.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>React · Node.js · Python · Flutter</span>
                </div>

                {/* Display Headline */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#E4EBE6] leading-[1.12] max-w-2xl">
                    Forged Like a Katana. Flowing Like Aikido.
                  </h1>
                  <p className="text-base md:text-lg text-[#B0C0B6] leading-relaxed max-w-[66ch]">
                    {PROFILE_DATA.summary}
                  </p>
                </div>

                {/* Interactive Martial Philosophy Stance Selector */}
                <div className="p-5 bg-[#0A0E0C] border border-[#18241E] rounded-2xl space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono-tabular text-[#8A9990]">
                      ARCHITECTURAL STANCE
                    </span>
                    <div
                      className="flex items-center gap-1 p-1 bg-[#060907] border border-[#16201B] rounded-lg"
                      role="tablist"
                      aria-label="Select Martial Engineering Stance"
                    >
                      <button
                        type="button"
                        role="tab"
                        aria-selected={stance === 'samurai'}
                        onClick={() => setStance('samurai')}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          stance === 'samurai'
                            ? 'bg-[#10B981] text-[#050505] font-semibold'
                            : 'text-[#95A69C] hover:text-[#E4EBE6]'
                        }`}
                      >
                        刀 Kenjutsu Precision
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected={stance === 'aikido'}
                        onClick={() => setStance('aikido')}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                          stance === 'aikido'
                            ? 'bg-[#10B981] text-[#050505] font-semibold'
                            : 'text-[#95A69C] hover:text-[#E4EBE6]'
                        }`}
                      >
                        合気道 Aikido Flow
                      </button>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#D0DDD5] leading-relaxed">
                    {stance === 'samurai'
                      ? PROFILE_DATA.martialCreed.samurai
                      : PROFILE_DATA.martialCreed.aikido}
                  </p>
                </div>

                {/* Key Quantitative Metrics (Unboxed, Tabular Numerals) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-t border-[#16201B]">
                  {PROFILE_DATA.heroMetrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xl md:text-2xl font-bold font-mono-tabular text-[#10B981]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[#8A9990] leading-snug">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Hero CTAs & Unboxed Profile Coordinates */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#works"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-semibold text-[#050505] bg-[#10B981] hover:bg-[#34D399] rounded-xl transition-colors whitespace-nowrap"
                  >
                    <span>Explore Selected Works</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#arsenal"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-medium text-[#E4EBE6] bg-[#0D1410] hover:bg-[#142019] border border-[#1E2E25] rounded-xl transition-colors whitespace-nowrap"
                  >
                    <span>Test Aikido Architecture Kata</span>
                  </a>
                  <div className="flex items-center gap-3 text-xs font-mono-tabular text-[#8A9990] pl-1">
                    <a
                      href={PROFILE_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#10B981] transition-colors"
                    >
                      GitHub
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={PROFILE_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#10B981] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="hover:text-[#10B981] transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Large Visual Container with Enso Calligraphy & Samurai Dojo Artwork */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#1C2A22] bg-[#080C0A] aspect-[4/4.3] flex flex-col justify-between">
                  {!heroImgFailed ? (
                    <img
                      src={PROFILE_DATA.heroImage}
                      alt="Samurai and Aikido master in an obsidian dojo with emerald green rim lighting"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImgFailed(true)}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'radial-gradient(circle at 50% 40%, rgba(16, 185, 129, 0.25), #050505 75%)',
                      }}
                    />
                  )}

                  {/* Measured Contrast Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-black/30 pointer-events-none" />

                  {/* Luminous SVG Enso Circle & Katana Axis Overlay */}
                  <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="200"
                      cy="185"
                      r="118"
                      stroke="#10B981"
                      strokeWidth={stance === 'aikido' ? '4.5' : '2'}
                      strokeLinecap="round"
                      strokeDasharray="610 130"
                      opacity={stance === 'aikido' ? '0.9' : '0.45'}
                    />
                    <line
                      x1="75"
                      y1="310"
                      x2="325"
                      y2="60"
                      stroke="#34D399"
                      strokeWidth={stance === 'samurai' ? '3' : '1.2'}
                      strokeLinecap="round"
                      opacity={stance === 'samurai' ? '0.9' : '0.4'}
                    />
                  </svg>

                  {/* Top Corner Unboxed Frame Readout */}
                  <div className="relative z-10 p-6 flex items-center justify-between text-xs font-mono-tabular text-[#D0DDD5]">
                    <span>武士道 · BUSHIDO CODE</span>
                    <span className="text-[#10B981]">
                      {stance === 'samurai' ? 'KENJUTSU FOCUS' : 'AIKIDO HARMONY'}
                    </span>
                  </div>

                  {/* Bottom Signature Overlay & Quick Dossier Trigger */}
                  <div className="relative z-10 p-6 md:p-8 space-y-3 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent">
                    <div className="text-xs font-mono-tabular text-[#10B981]">
                      ORACLE CLOUD 2025 CERTIFIED AI & FOUNDATIONS
                    </div>
                    <div className="text-lg md:text-xl font-display font-semibold text-[#E4EBE6]">
                      “Full-Stack Autonomy from REST & AI/ML Architecture to Sub-2s Reactive Interfaces.”
                    </div>
                    <div className="flex items-center justify-between pt-2 text-xs text-[#95A69C] font-mono-tabular">
                      <span>{PROFILE_DATA.phone}</span>
                      <button
                        type="button"
                        onClick={() => setIsDossierOpen(true)}
                        className="text-[#10B981] hover:underline underline-offset-4"
                      >
                        Inspect Full CV →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subtle Animated Marquee Text Ribbon Divider */}
        <div
          aria-hidden="true"
          className="py-3.5 border-y border-[#141F19] bg-[#070B09] overflow-hidden select-none"
        >
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono-tabular text-[#7E8F85]">
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center gap-8 shrink-0">
                <span>selected works & case studies</span>
                <span className="text-[#10B981]">·</span>
                <span>react.js & angular 10+</span>
                <span className="text-[#10B981]">·</span>
                <span>python ai/ml media pipelines</span>
                <span className="text-[#10B981]">·</span>
                <span>node.js, express & spring boot</span>
                <span className="text-[#10B981]">·</span>
                <span>flutter ios & android</span>
                <span className="text-[#10B981]">·</span>
                <span>postgresql, mongodb & mysql</span>
                <span className="text-[#10B981]">·</span>
                <span>samurai precision & aikido flow</span>
                <span className="text-[#10B981]">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 01: Media-First Dynamic Bento Grid for Selected Works */}
        <section id="works" className="py-20 md:py-28 bg-[#050505]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12">
            {/* Section Header + Functional Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="text-xs font-mono-tabular text-[#8A9990]">
                  <span>作品集 · PRODUCTION CASE STUDIES</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span className="text-[#10B981]">CLICK ANY TILE FOR FULL CASE STUDY</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold text-[#E4EBE6] tracking-tight">
                  01. Selected Works & Engineering Katas
                </h2>
                <p className="text-sm md:text-base text-[#9FB0A6] leading-relaxed">
                  Six production systems and engineering milestones spanning confidential AI audio/video platforms,
                  Saudi e-commerce ecosystems, German HR guided processes, and real-time Flutter marketplaces.
                </p>
              </div>

              {/* Interactive Segmented Filter Controls */}
              <div
                className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0C120F] border border-[#18241E] rounded-xl self-start"
                role="tablist"
                aria-label="Filter Selected Works"
              >
                {[
                  { id: 'all', label: 'All Works (6)' },
                  { id: 'ai', label: 'AI & Python (1)' },
                  { id: 'web', label: 'Web & Enterprise (3)' },
                  { id: 'mobile', label: 'Mobile & Flutter (2)' },
                ].map((tab) => {
                  const active = projectFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() =>
                        setProjectFilter(tab.id as 'all' | 'ai' | 'web' | 'mobile')
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

            {/* Dynamic Bento Grid (col-span-2 wide cards + col-span-1 compact cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const isWide =
                  project.bentoSpan === 'wide' && projectFilter === 'all';
                return (
                  <article
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedProject(project);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open case study for ${project.title}`}
                    className={`group cursor-pointer rounded-2xl bg-[#0A0E0C] border border-[#18241E] hover:border-[#10B981]/70 transition-colors overflow-hidden flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#10B981] ${
                      isWide ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    {/* Visual Media Container */}
                    <div className="relative h-56 md:h-64 w-full border-b border-[#151F1A] overflow-hidden">
                      <ProjectMediaContainer
                        src={project.image}
                        alt={project.title}
                        motif={project.svgMotif}
                        index={project.index}
                        categoryLabel={project.categoryLabel}
                        className="w-full h-full"
                      />

                      {/* Hover Lightbox Affordance */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[#050505]/80 border border-[#1E2E25] flex items-center justify-center text-[#E4EBE6] group-hover:bg-[#10B981] group-hover:text-[#050505] transition-colors">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Body — Leads Directly with Unboxed Kicker & Title (Zero Pill Sandwiches) */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-2.5">
                        {/* Quiet 1-line unboxed metadata with typographic separators */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tabular text-[#8A9990]">
                          <span className="text-[#10B981]">{project.index}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.organization}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.period}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold text-[#E4EBE6] group-hover:text-[#10B981] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs md:text-sm text-[#9FB0A6] leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      {/* Bottom Proof Metric & Unboxed Tech Stack */}
                      <div className="pt-4 border-t border-[#141E19] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tabular">
                        <span className="text-[#B8C7BE]">
                          {project.techStack.slice(0, 4).join(' · ')}
                        </span>
                        <span className="text-[#10B981] font-semibold">
                          {project.metrics[0]?.value} {project.metrics[0]?.unit} →
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 02: Interactive Aikido Flow & Technical Arsenal */}
        <AikidoArsenalSection />

        {/* Section 03: Experience Chronicle, Education, Oracle Certifications & Languages */}
        <ChronicleLineageSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Section 04: Direct Dojo Contact & Inquiry Composer */}
        <DojoContactSection onOpenDossier={() => setIsDossierOpen(true)} />
      </main>

      {/* Quiet Editorial Footer (No Ornamental Telemetry Tickers) */}
      <footer className="border-t border-[#16201B] bg-[#050505] py-10 px-6 md:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7E8F85]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#E4EBE6] font-display font-semibold">
              {PROFILE_DATA.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.title}</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#10B981] transition-colors"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={() => setIsDossierOpen(true)}
              className="hover:text-[#10B981] transition-colors"
            >
              Printable CV
            </button>
            <a href="#top" className="text-[#10B981] hover:underline">
              Return to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Fullscreen Case Study Lightbox Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectNext={handleSelectNextProject}
        onSelectPrev={handleSelectPrevProject}
      />

      {/* Full Printable Curriculum Vitae Dossier Modal */}
      <DossierModal
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
      />
    </div>
  );
}
