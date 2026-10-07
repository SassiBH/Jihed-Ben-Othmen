import React, { useState } from 'react';

interface ProjectMediaProps {
  src?: string;
  alt: string;
  motif: 'enso-wave' | 'katana-mesh' | 'aikido-orbit' | 'steel-grid' | 'ledger-flow' | 'rfq-blueprint';
  index: string;
  categoryLabel: string;
  theme?: 'dark' | 'light';
  className?: string;
}

export const SamuraiMotifGraphic: React.FC<{
  motif: ProjectMediaProps['motif'];
  index: string;
  categoryLabel: string;
}> = ({ motif, index, categoryLabel }) => {
  return (
    <div className="relative w-full h-full bg-[var(--bg-card-alt)] overflow-hidden flex flex-col justify-between p-6 select-none transition-colors">
      {/* Subtle geometric radial glow in Light Blue */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(56, 189, 248, 0.25), transparent 60%), radial-gradient(circle at 20% 80%, rgba(14, 165, 233, 0.16), transparent 55%)',
        }}
      />

      {/* Custom SVG Martial Architecture Motif adapting cleanly to Light and Dark Mode */}
      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Tatami / Dojo Grid */}
        <path
          d="M0 65H400M0 130H400M0 195H400M100 0V260M200 0V260M300 0V260"
          stroke="var(--motif-grid)"
          strokeWidth="1"
        />

        {motif === 'enso-wave' && (
          <g>
            <circle
              cx="200"
              cy="130"
              r="76"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="410 80"
              opacity="0.9"
            />
            <circle
              cx="200"
              cy="130"
              r="54"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.8"
              strokeDasharray="180 40"
              opacity="0.85"
            />
            <path
              d="M40 130 Q 120 70, 200 130 T 360 130"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="2.4"
              fill="none"
            />
            <path
              d="M40 145 Q 120 195, 200 145 T 360 145"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="1.5"
              opacity="0.65"
              fill="none"
            />
          </g>
        )}

        {motif === 'aikido-orbit' && (
          <g>
            <ellipse
              cx="200"
              cy="130"
              rx="120"
              ry="52"
              transform="rotate(-18 200 130)"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2.5"
              strokeDasharray="320 60"
            />
            <ellipse
              cx="200"
              cy="130"
              rx="120"
              ry="52"
              transform="rotate(24 200 130)"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.8"
              opacity="0.85"
            />
            <circle
              cx="200"
              cy="130"
              r="14"
              fill="#38BDF8"
              fillOpacity="0.22"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2.2"
            />
            <circle cx="115" cy="102" r="5" fill="var(--motif-stroke-primary)" />
            <circle cx="285" cy="158" r="5" fill="var(--motif-stroke-secondary)" />
          </g>
        )}

        {motif === 'katana-mesh' && (
          <g>
            <path
              d="M50 210 L350 50"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path
              d="M70 220 L365 65"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.6"
              opacity="0.8"
            />
            <polygon
              points="200,45 275,130 200,215 125,130"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.75"
              fill="#38BDF8"
              fillOpacity="0.1"
            />
            <circle
              cx="200"
              cy="130"
              r="36"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
            />
          </g>
        )}

        {motif === 'steel-grid' && (
          <g>
            <rect
              x="90"
              y="55"
              width="220"
              height="150"
              rx="8"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2"
              fill="var(--motif-fill-center)"
            />
            <path d="M90 100H310M160 55V205M240 55V205" stroke="var(--motif-grid)" strokeWidth="1.5" />
            <circle cx="160" cy="100" r="6" fill="var(--motif-stroke-primary)" />
            <circle cx="240" cy="155" r="6" fill="var(--motif-stroke-secondary)" />
            <path d="M160 100 L240 155" stroke="var(--motif-stroke-secondary)" strokeWidth="2.2" />
          </g>
        )}

        {motif === 'ledger-flow' && (
          <g>
            {/* Aikido Spiral + Precision Ledger Bars */}
            <circle
              cx="200"
              cy="130"
              r="74"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2.8"
              strokeDasharray="340 90"
            />
            <circle
              cx="200"
              cy="130"
              r="58"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.4"
              strokeDasharray="190 50"
            />
            <path
              d="M145 160V115M175 160V95M205 160V125M235 160V80M265 160V105"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125 162H280"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            <circle cx="235" cy="80" r="5.5" fill="var(--motif-stroke-primary)" />
          </g>
        )}

        {motif === 'rfq-blueprint' && (
          <g>
            {/* Samurai Crest (Mon) Geometric Architecture */}
            <polygon
              points="200,42 285,90 285,170 200,218 115,170 115,90"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="2.2"
              fill="#38BDF8"
              fillOpacity="0.1"
            />
            <polygon
              points="200,68 258,102 258,158 200,192 142,158 142,102"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="1.6"
              strokeDasharray="6 4"
            />
            <path
              d="M142 130H258M200 68V192"
              stroke="var(--motif-stroke-primary)"
              strokeWidth="1.6"
              opacity="0.85"
            />
            <circle
              cx="200"
              cy="130"
              r="11"
              fill="var(--motif-fill-center)"
              stroke="var(--motif-stroke-secondary)"
              strokeWidth="2.8"
            />
          </g>
        )}
      </svg>

      {/* Top & bottom subtle framing metadata */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono-tabular text-[var(--text-muted)]">
        <span className="text-[var(--text-primary)] font-semibold">KATA {index}</span>
        <span>·</span>
        <span className="text-[var(--accent-text)] font-medium">{categoryLabel}</span>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tabular text-[var(--text-muted)] pt-8">
        <span className="text-[var(--text-secondary)]">KENJUTSU PRECISION</span>
        <span className="text-[var(--accent-text)] font-medium">合気道 FLOW</span>
      </div>
    </div>
  );
};

export const ProjectMediaContainer: React.FC<ProjectMediaProps> = ({
  motif,
  index,
  categoryLabel,
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden bg-[var(--bg-card-alt)] transition-colors ${className}`}>
      <SamuraiMotifGraphic motif={motif} index={index} categoryLabel={categoryLabel} />
    </div>
  );
};
