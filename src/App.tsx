/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Eye, Sun, Moon } from 'lucide-react';
import {
  PROFILE_DATA,
  PROJECTS_DATA,
  ProjectCaseStudy,
} from './data/portfolioData';
import { ProjectMediaContainer } from './components/SamuraiAikidoArtwork';
import {
  SideMartialIllustrations,
  SimplifiedWhiteMartialStrip,
} from './components/SideMartialIllustrations';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DossierModal } from './components/DossierModal';
import { AikidoArsenalSection } from './components/AikidoArsenalSection';
import { ChronicleLineageSection } from './components/ChronicleLineageSection';
import { DojoContactSection } from './components/DojoContactSection';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('jihed-dojo-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });
  const [stance, setStance] = useState<'samurai' | 'aikido'>('samurai');
  const [projectFilter, setProjectFilter] = useState<'all' | 'ai' | 'web' | 'mobile'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [heroImgFailed, setHeroImgFailed] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('jihed-dojo-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
    <div
      id="top"
      className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex flex-col relative transition-colors duration-150"
    >
      {/* Simplified White Samurai (Left) & Aikido (Right) Side Illustrations */}
      <SideMartialIllustrations />

      {/* Strict 3-Zone Top Bar Contract */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors"
        style={{ backgroundColor: 'var(--header-bg)' }}
      >
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#top"
          className="font-display text-base md:text-lg font-bold tracking-tight text-[var(--text-primary)] hover:text-[var(--accent-text)] transition-colors whitespace-nowrap shrink-0"
        >
          Jihed Ben Othmen
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--text-secondary)]"
        >
          <a
            href="#works"
            className="hover:text-[var(--text-primary)] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Selected Works
          </a>
          <a
            href="#arsenal"
            className="hover:text-[var(--text-primary)] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Aikido & Arsenal
          </a>
          <a
            href="#chronicle"
            className="hover:text-[var(--text-primary)] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Chronicle
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--text-primary)] underline-offset-8 hover:underline transition-colors whitespace-nowrap shrink-0"
          >
            Dojo Contact
          </a>
        </nav>

        {/* Zone 3: 2 primary actions (Light/Dark Mode Toggle + Curriculum Vitae) */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[var(--bg-control-hover)] border border-[var(--border-card)] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#0284C7]" />
                <span>Dark Mode</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsDossierOpen(true)}
            className="px-4 py-2 text-xs font-semibold text-[#050505] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Curriculum Vitae
          </button>
        </div>
      </header>

      {/* Main Content with padding on lg/xl to accommodate the left/right Samurai & Aikido white side rails */}
      <main className="flex-1 lg:px-16 xl:px-24">
        {/* Split-Screen Hero Section */}
        <section className="relative py-14 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
              {/* Left Side: Bold Typographic Hierarchy, Stance Philosophy & Quantitative Proof */}
              <div className="lg:col-span-7 space-y-8">
                {/* Quiet Unboxed Metadata Line */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[var(--text-muted)]">
                  <span className="text-[var(--accent-text)] font-semibold">{PROFILE_DATA.title}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[var(--text-primary)] font-medium">{PROFILE_DATA.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>React · Node.js · Python · Flutter</span>
                </div>

                {/* Display Headline */}
                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] max-w-2xl">
                    Forged Like a Katana. Flowing Like Aikido.
                  </h1>
                  <p className="text-base md:text-lg text-[var(--text-body)] leading-relaxed max-w-[66ch]">
                    {PROFILE_DATA.summary}
                  </p>
                </div>

                {/* Interactive Martial Philosophy Stance Selector */}
                <div className="p-5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl space-y-3 max-w-2xl transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs font-mono-tabular text-[var(--text-muted)]">
                      ARCHITECTURAL STANCE
                    </span>
                    <div
                      className="flex items-center gap-1 p-1 bg-[var(--bg-card-alt)] border border-[var(--border-subtle)] rounded-lg"
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
                            ? 'bg-[#38BDF8] text-[#050505] font-semibold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
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
                            ? 'bg-[#38BDF8] text-[#050505] font-semibold'
                            : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                        }`}
                      >
                        合気道 Aikido Flow
                      </button>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[var(--text-body)] leading-relaxed">
                    {stance === 'samurai'
                      ? PROFILE_DATA.martialCreed.samurai
                      : PROFILE_DATA.martialCreed.aikido}
                  </p>
                </div>

                {/* Key Quantitative Metrics (Unboxed, Tabular Numerals) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2 border-t border-[var(--border-subtle)]">
                  {PROFILE_DATA.heroMetrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-xl md:text-2xl font-bold font-mono-tabular text-[var(--accent-text)]">
                        {metric.value}
                      </div>
                      <div className="text-xs text-[var(--text-muted)] leading-snug">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Hero CTAs & Unboxed Profile Coordinates */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#works"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-semibold text-[#050505] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-xl transition-colors whitespace-nowrap"
                  >
                    <span>Explore Selected Works</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs md:text-sm font-medium text-[var(--text-primary)] bg-[var(--bg-control)] hover:bg-[var(--bg-control-hover)] border border-[var(--border-card)] rounded-xl transition-colors whitespace-nowrap"
                  >
                    <span>Initiate Dialogue</span>
                  </a>
                  <div className="flex items-center gap-3 text-xs font-mono-tabular text-[var(--text-muted)] pl-1">
                    <a
                      href={PROFILE_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent-text)] transition-colors"
                    >
                      GitHub
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={PROFILE_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent-text)] transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span aria-hidden="true">·</span>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="hover:text-[var(--accent-text)] transition-colors"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Side: Large Visual Container — Unified Simplified Samurai & Aikido Dojo Art in Both Dark & Light Mode */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[var(--border-card)] bg-[var(--bg-card-alt)] aspect-[4/4.3] flex flex-col justify-between shadow-sm transition-colors">
                  {/* Radial Sky-Blue & Dojo Glow Canvas */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(circle at 50% 38%, rgba(56, 189, 248, 0.26), rgba(14, 165, 233, 0.10) 55%, var(--bg-card) 90%)',
                    }}
                  />

                  {/* Theme-Aware Scrim Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, var(--overlay-scrim-strong) 8%, var(--overlay-scrim-mid) 46%, transparent 100%)',
                    }}
                  />

                  {/* Luminous SVG Enso Circle, Samurai Silhouette & Katana Axis Overlay (Identical in Dark & Light Mode) */}
                  <svg
                    viewBox="0 0 400 400"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Subtle Tatami Grid */}
                    <path
                      d="M0 100H400M0 200H400M0 300H400M100 0V400M200 0V400M300 0V400"
                      stroke="var(--motif-grid)"
                      strokeWidth="1"
                    />

                    {/* Enso Calligraphy Ring */}
                    <circle
                      cx="200"
                      cy="185"
                      r="116"
                      stroke="var(--motif-stroke-primary)"
                      strokeWidth={stance === 'aikido' ? '5' : '2.5'}
                      strokeLinecap="round"
                      strokeDasharray="610 130"
                      opacity={stance === 'aikido' ? '0.95' : '0.6'}
                    />
                    <circle
                      cx="200"
                      cy="185"
                      r="90"
                      stroke="var(--motif-stroke-secondary)"
                      strokeWidth="1.8"
                      strokeDasharray="240 60"
                      opacity="0.75"
                    />

                    {/* Simplified Unboxed Samurai & Aikido Master Centerpiece (White & Blue in Dark Mode, Black & Blue in Light Mode) */}
                    <g>
                      <circle cx="200" cy="154" r="11" fill="var(--side-art-main)" />
                      <path
                        d="M164 184 Q 200 166, 236 174"
                        stroke="var(--side-art-accent)"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M182 172 L218 172 L228 222 L172 222 Z"
                        fill="var(--side-art-main)"
                      />
                      <line
                        x1="178"
                        y1="198"
                        x2="222"
                        y2="198"
                        stroke="var(--side-art-accent)"
                        strokeWidth="3"
                      />
                    </g>

                    {/* Katana Diagonal Blade Axis */}
                    <line
                      x1="75"
                      y1="310"
                      x2="325"
                      y2="60"
                      stroke="var(--motif-stroke-secondary)"
                      strokeWidth={stance === 'samurai' ? '3.5' : '1.6'}
                      strokeLinecap="round"
                      opacity={stance === 'samurai' ? '0.95' : '0.55'}
                    />
                  </svg>

                  {/* Top Corner Unboxed Frame Readout */}
                  <div className="relative z-10 m-4 px-4 py-2 rounded-xl bg-[var(--bg-card)]/90 backdrop-blur-md border border-[var(--border-card)] flex items-center justify-between text-xs font-mono-tabular text-[var(--text-primary)]">
                    <span className="font-medium">武士道 · BUSHIDO CODE</span>
                    <span className="text-[var(--accent-text)] font-semibold">
                      {stance === 'samurai' ? 'KENJUTSU FOCUS' : 'AIKIDO HARMONY'}
                    </span>
                  </div>

                  {/* Bottom Signature Overlay & Quick Dossier Trigger */}
                  <div
                    className="relative z-10 p-6 md:p-8 space-y-3"
                    style={{
                      background:
                        'linear-gradient(to top, var(--bg-card) 20%, var(--overlay-scrim-strong) 85%, transparent 100%)',
                    }}
                  >
                    <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-semibold">
                      ORACLE CLOUD 2025 CERTIFIED AI & FOUNDATIONS
                    </div>
                    <div className="text-lg md:text-xl font-display font-semibold text-[var(--text-primary)]">
                      “Full-Stack Autonomy from REST & AI/ML Architecture to Sub-2s Reactive Interfaces.”
                    </div>
                    <div className="flex items-center justify-between pt-2 text-xs text-[var(--text-secondary)] font-mono-tabular">
                      <span>{PROFILE_DATA.phone}</span>
                      <button
                        type="button"
                        onClick={() => setIsDossierOpen(true)}
                        className="text-[var(--accent-text)] font-semibold hover:underline underline-offset-4"
                      >
                        Inspect Full CV →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Simplified White Samurai & Aikido Side-by-Side Banner Strip */}
          <SimplifiedWhiteMartialStrip />
        </section>

        {/* Subtle Animated Marquee Text Ribbon Divider */}
        <div
          aria-hidden="true"
          className="py-3.5 border-y border-[var(--border-subtle)] bg-[var(--bg-section-alt)] overflow-hidden select-none transition-colors"
        >
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono-tabular text-[var(--text-muted)]">
            {[...Array(2)].map((_, groupIdx) => (
              <div key={groupIdx} className="flex items-center gap-8 shrink-0">
                <span className="text-[var(--text-primary)] font-medium">selected works & case studies</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span>react.js & angular 10+</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span>python ai/ml media pipelines</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span>node.js, express & spring boot</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span>flutter ios & android</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span>postgresql, mongodb & mysql</span>
                <span className="text-[var(--accent-text)]">·</span>
                <span className="text-[var(--text-primary)] font-medium">samurai precision & aikido flow</span>
                <span className="text-[var(--accent-text)]">·</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 01: Media-First Dynamic Bento Grid for Selected Works */}
        <section id="works" className="py-20 md:py-28 bg-[var(--bg-canvas)] transition-colors">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-12">
            {/* Section Header + Functional Filter Controls */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-3">
                <div className="text-xs font-mono-tabular text-[var(--text-muted)]">
                  <span className="text-[var(--text-primary)] font-medium">作品集 · PRODUCTION CASE STUDIES</span>
                  <span className="mx-2" aria-hidden="true">·</span>
                  <span className="text-[var(--accent-text)] font-medium">CLICK ANY TILE FOR FULL CASE STUDY</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold text-[var(--text-primary)] tracking-tight">
                  01. Selected Works & Engineering Katas
                </h2>
                <p className="text-sm md:text-base text-[var(--text-body)] leading-relaxed">
                  Six production systems and engineering milestones spanning confidential AI audio/video platforms,
                  Saudi e-commerce ecosystems, German HR guided processes, and real-time Flutter marketplaces.
                </p>
              </div>

              {/* Interactive Segmented Filter Controls */}
              <div
                className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl self-start"
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
                    className={`group cursor-pointer rounded-2xl bg-[var(--bg-card)] border border-[var(--border-card)] hover:border-[#38BDF8] transition-colors overflow-hidden flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-[#38BDF8] ${
                      isWide ? 'md:col-span-2' : 'md:col-span-1'
                    }`}
                  >
                    {/* Visual Media Container */}
                    <div className="relative h-56 md:h-64 w-full border-b border-[var(--border-subtle)] overflow-hidden">
                      <ProjectMediaContainer
                        src={project.image}
                        alt={project.title}
                        motif={project.svgMotif}
                        index={project.index}
                        categoryLabel={project.categoryLabel}
                        theme={theme}
                        className="w-full h-full"
                      />

                      {/* Hover Lightbox Affordance (Theme-Aware, Zero Black Box in Light Mode) */}
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-[var(--bg-card)]/90 backdrop-blur-sm border border-[var(--border-card)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[#38BDF8] group-hover:text-[#050505] transition-colors">
                        <Eye className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Card Body — Leads Directly with Unboxed Kicker & Title */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-2.5">
                        {/* Quiet 1-line unboxed metadata with typographic separators */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono-tabular text-[var(--text-muted)]">
                          <span className="text-[var(--accent-text)] font-semibold">{project.index}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[var(--text-primary)] font-medium">{project.organization}</span>
                          <span aria-hidden="true">·</span>
                          <span>{project.period}</span>
                        </div>

                        <h3 className="text-lg md:text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs md:text-sm text-[var(--text-body)] leading-relaxed line-clamp-3">
                          {project.summary}
                        </p>
                      </div>

                      {/* Bottom Proof Metric & Unboxed Tech Stack */}
                      <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tabular">
                        <span className="text-[var(--text-secondary)]">
                          {project.techStack.slice(0, 4).join(' · ')}
                        </span>
                        <span className="text-[var(--accent-text)] font-semibold">
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

      {/* Quiet Editorial Footer */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-canvas)] py-10 px-6 md:px-10 lg:px-24 transition-colors">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[var(--text-primary)] font-display font-semibold">
              {PROFILE_DATA.name}
            </span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.title}</span>
            <span aria-hidden="true">·</span>
            <span>{PROFILE_DATA.location}</span>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={toggleTheme}
              className="hover:text-[var(--accent-text)] transition-colors"
            >
              {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-text)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-text)] transition-colors"
            >
              GitHub
            </a>
            <button
              type="button"
              onClick={() => setIsDossierOpen(true)}
              className="hover:text-[var(--accent-text)] transition-colors"
            >
              Printable CV
            </button>
            <a href="#top" className="text-[var(--accent-text)] font-medium hover:underline">
              Return to Top ↑
            </a>
          </div>
        </div>
      </footer>

      {/* Fullscreen Case Study Lightbox Modal */}
      <CaseStudyModal
        project={selectedProject}
        theme={theme}
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
