import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';
import { ProjectMediaContainer } from './SamuraiAikidoArtwork';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectNext,
  onSelectPrev,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onSelectNext, onSelectPrev]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 md:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B0F0D] border border-[#1C2822] rounded-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#18221D] bg-[#080B09]">
          <div className="flex items-center gap-2 text-xs text-[#8A9990] font-mono-tabular">
            <span className="text-[#10B981]">CASE STUDY {project.index}</span>
            <span aria-hidden="true">·</span>
            <span>{project.organization}</span>
            <span aria-hidden="true">·</span>
            <span>{project.period}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onSelectPrev}
              className="px-3 py-1.5 text-xs font-medium text-[#A3B3A9] hover:text-[#E4EBE6] bg-[#111714] hover:bg-[#18221D] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#10B981]"
            >
              Prev Kata
            </button>
            <button
              type="button"
              onClick={onSelectNext}
              className="px-3 py-1.5 text-xs font-medium text-[#A3B3A9] hover:text-[#E4EBE6] bg-[#111714] hover:bg-[#18221D] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#10B981]"
            >
              Next Kata
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study viewer"
              className="w-10 h-10 flex items-center justify-center text-[#E4EBE6] bg-[#111714] hover:bg-[#10B981] hover:text-[#050505] rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-[#10B981]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Media Banner */}
        <div className="relative h-64 md:h-80 w-full border-b border-[#18221D]">
          <ProjectMediaContainer
            src={project.image}
            alt={project.title}
            motif={project.svgMotif}
            index={project.index}
            categoryLabel={project.categoryLabel}
            className="h-full w-full"
          />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-[#0B0F0D] via-[#0B0F0D]/80 to-transparent">
            <div className="text-xs text-[#10B981] font-mono-tabular mb-2">
              <span>{project.role}</span>
              <span className="mx-2 text-[#5E6E64]">·</span>
              <span className="text-[#A3B3A9]">{project.location}</span>
            </div>
            <h2
              id="modal-project-title"
              className="text-2xl md:text-3xl font-semibold text-[#E4EBE6] tracking-tight"
            >
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          {/* Quantitative Impact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#0F1512] border border-[#1A2620] rounded-xl"
              >
                <div className="flex items-baseline gap-2 font-mono-tabular">
                  <span className="text-xl font-semibold text-[#10B981]">{metric.value}</span>
                  <span className="text-xs text-[#A3B3A9]">{metric.unit}</span>
                </div>
                <p className="text-xs text-[#8A9990] mt-1.5 leading-relaxed">{metric.context}</p>
              </div>
            ))}
          </div>

          {/* Executive Summary */}
          <div>
            <h3 className="text-sm font-semibold text-[#E4EBE6] mb-2">
              01. Architectural Overview
            </h3>
            <p className="text-sm md:text-base text-[#B8C7BE] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Dual Martial Breakdown: Samurai Execution & Aikido Harmony */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-[#18221D]">
            <div>
              <h3 className="text-sm font-semibold text-[#E4EBE6] mb-3">
                02. Kenjutsu Precision (Engineering Execution)
              </h3>
              <ul className="space-y-3">
                {project.samuraiExecution.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#B8C7BE] leading-relaxed">
                    <Check className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-[#E4EBE6] mb-3">
                  03. Aikido Harmony (System Flow & UX)
                </h3>
                <p className="text-sm text-[#B8C7BE] leading-relaxed">
                  {project.aikidoHarmony}
                </p>
              </div>

              <div className="pt-4 border-t border-[#18221D]">
                <div className="text-xs text-[#8A9990] mb-2">Technical Environment</div>
                <div className="text-xs md:text-sm font-mono-tabular text-[#10B981] leading-relaxed">
                  {project.techStack.join(' · ')}
                </div>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#18221D]">
            <div className="text-xs text-[#8A9990]">
              Deliverables: <span className="text-[#D0DDD5]">{project.deliverables.join(' / ')}</span>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#050505] bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Inquire About Similar Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
