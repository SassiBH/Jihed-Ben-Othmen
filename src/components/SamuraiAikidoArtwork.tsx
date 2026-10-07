import React, { useState } from 'react';

interface ProjectMediaProps {
  src?: string;
  alt: string;
  motif: 'enso-wave' | 'katana-mesh' | 'aikido-orbit' | 'steel-grid' | 'ledger-flow' | 'rfq-blueprint';
  index: string;
  categoryLabel: string;
  className?: string;
}

export const SamuraiMotifGraphic: React.FC<{
  motif: ProjectMediaProps['motif'];
  index: string;
  categoryLabel: string;
}> = ({ motif, index, categoryLabel }) => {
  return (
    <div className="relative w-full h-full bg-[#090D0B] overflow-hidden flex flex-col justify-between p-6 select-none">
      {/* Subtle geometric radial glow */}
      <div
        className="absolute inset-0 opacity-35 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 25%, rgba(16, 185, 129, 0.22), transparent 60%), radial-gradient(circle at 20% 80%, rgba(5, 150, 105, 0.14), transparent 55%)',
        }}
      />

      {/* Custom SVG Martial Architecture Motif */}
      <svg
        viewBox="0 0 400 260"
        className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Subtle Tatami / Dojo Grid */}
        <path
          d="M0 65H400M0 130H400M0 195H400M100 0V260M200 0V260M300 0V260"
          stroke="#16211B"
          strokeWidth="1"
        />

        {motif === 'enso-wave' && (
          <g>
            <circle
              cx="200"
              cy="130"
              r="76"
              stroke="#10B981"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="410 80"
              opacity="0.85"
            />
            <circle
              cx="200"
              cy="130"
              r="54"
              stroke="#059669"
              strokeWidth="1.5"
              strokeDasharray="180 40"
              opacity="0.6"
            />
            <path
              d="M40 130 Q 120 70, 200 130 T 360 130"
              stroke="#34D399"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M40 145 Q 120 195, 200 145 T 360 145"
              stroke="#10B981"
              strokeWidth="1.2"
              opacity="0.5"
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
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="320 60"
            />
            <ellipse
              cx="200"
              cy="130"
              rx="120"
              ry="52"
              transform="rotate(24 200 130)"
              stroke="#34D399"
              strokeWidth="1.5"
              opacity="0.65"
            />
            <circle cx="200" cy="130" r="14" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="2" />
            <circle cx="115" cy="102" r="5" fill="#34D399" />
            <circle cx="285" cy="158" r="5" fill="#10B981" />
          </g>
        )}

        {motif === 'katana-mesh' && (
          <g>
            <path
              d="M50 210 L350 50"
              stroke="#34D399"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M70 220 L365 65"
              stroke="#10B981"
              strokeWidth="1"
              opacity="0.6"
            />
            <polygon
              points="200,45 275,130 200,215 125,130"
              stroke="#10B981"
              strokeWidth="1.75"
              fill="#10B981"
              fillOpacity="0.06"
            />
            <circle cx="200" cy="130" r="36" stroke="#34D399" strokeWidth="1.2" strokeDasharray="8 6" />
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
              stroke="#10B981"
              strokeWidth="2"
              fill="#0D1511"
            />
            <path d="M90 100H310M160 55V205M240 55V205" stroke="#1F3329" strokeWidth="1.5" />
            <circle cx="160" cy="100" r="6" fill="#10B981" />
            <circle cx="240" cy="155" r="6" fill="#34D399" />
            <path d="M160 100 L240 155" stroke="#10B981" strokeWidth="2" />
          </g>
        )}

        {motif === 'ledger-flow' && (
          <g>
            {/* Aikido Spiral + Precision Ledger Bars */}
            <circle
              cx="200"
              cy="130"
              r="72"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeDasharray="340 90"
            />
            <path
              d="M145 160V115M175 160V95M205 160V125M235 160V80M265 160V105"
              stroke="#34D399"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M125 162H280"
              stroke="#1F3329"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="235" cy="80" r="5" fill="#10B981" />
          </g>
        )}

        {motif === 'rfq-blueprint' && (
          <g>
            {/* Samurai Crest (Mon) Geometric Architecture */}
            <polygon
              points="200,42 285,90 285,170 200,218 115,170 115,90"
              stroke="#10B981"
              strokeWidth="2"
              fill="#10B981"
              fillOpacity="0.05"
            />
            <polygon
              points="200,68 258,102 258,158 200,192 142,158 142,102"
              stroke="#34D399"
              strokeWidth="1.2"
              strokeDasharray="6 4"
            />
            <path
              d="M142 130H258M200 68V192"
              stroke="#10B981"
              strokeWidth="1.5"
              opacity="0.75"
            />
            <circle cx="200" cy="130" r="10" fill="#050505" stroke="#34D399" strokeWidth="2.5" />
          </g>
        )}
      </svg>

      {/* Top & bottom subtle framing metadata */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono-tabular text-[#8A9990]">
        <span>KATA {index}</span>
        <span>·</span>
        <span className="text-[#10B981]">{categoryLabel}</span>
      </div>

      <div className="relative z-10 flex items-center justify-between text-[11px] font-mono-tabular text-[#6B7B71] pt-8">
        <span>KENJUTSU PRECISION</span>
        <span>合気道 FLOW</span>
      </div>
    </div>
  );
};

export const ProjectMediaContainer: React.FC<ProjectMediaProps> = ({
  src,
  alt,
  motif,
  index,
  categoryLabel,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-[#090D0B] ${className}`}>
      {src && !imageError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-200 ease-out group-hover:scale-[1.03]"
          />
          {/* Measured Scrim for Media Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent pointer-events-none" />
        </>
      ) : (
        <SamuraiMotifGraphic motif={motif} index={index} categoryLabel={categoryLabel} />
      )}
    </div>
  );
};
