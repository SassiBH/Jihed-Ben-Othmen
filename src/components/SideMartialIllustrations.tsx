import React from 'react';

/**
 * Unboxed Simplified Samurai & Aikido Illustrations for the Left and Right Sides of the Portfolio.
 * - Dark Mode: Pure White (#FFFFFF) + Light Blue (#38BDF8) with no surrounding box.
 * - Light Mode: Stark Black (#09131E) + Sky Blue (#0284C7) with no surrounding box.
 */
export const SideMartialIllustrations: React.FC = () => {
  return (
    <>
      {/* LEFT SIDE RAIL: Unboxed Simplified Samurai Pictures (Kabuto, Swordsman Stance, Katana) */}
      <aside
        aria-hidden="true"
        className="fixed left-0 top-16 bottom-0 w-16 xl:w-24 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-8 select-none"
      >
        {/* Top Picture 1: Simplified Samurai Kabuto Helmet (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 80 80"
            className="w-12 h-12 xl:w-14 xl:h-14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crescent Kuwagata Horns */}
            <path
              d="M40 30 C24 26, 12 12, 16 6 C20 14, 30 22, 40 24 C50 22, 60 14, 64 6 C68 12, 56 26, 40 30 Z"
              fill="var(--side-art-main)"
            />
            {/* Central Forecrest Jewel in Blue */}
            <polygon points="40,15 44,23 40,31 36,23" fill="var(--side-art-accent)" />
            {/* Helmet Dome (Hachi) */}
            <path
              d="M22 38 C22 26, 58 26, 58 38 L62 44 H18 L22 38 Z"
              stroke="var(--side-art-main)"
              strokeWidth="2.4"
              fill="none"
            />
            {/* Shikoro Neck Guard Plates */}
            <path
              d="M15 49 H65 M12 55 H68 M16 61 H64"
              stroke="var(--side-art-main)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Menpo Mask Silhouette in Blue */}
            <path
              d="M29 45 L33 56 L40 59 L47 56 L51 45"
              stroke="var(--side-art-accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--text-secondary)] uppercase">
            KABUTO
          </span>
        </div>

        {/* Center Picture 2: Simplified Samurai Swordsman in Kenjutsu Strike Stance (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 90 150"
            className="w-14 h-28 xl:w-16 xl:h-32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Crescent Slash Arc in Blue */}
            <path
              d="M12 22 Q 78 45, 72 115"
              stroke="var(--side-art-accent)"
              strokeWidth="2.2"
              strokeDasharray="6 4"
            />
            {/* Raised Katana Blade */}
            <path
              d="M16 14 L76 58"
              stroke="var(--side-art-main)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Tsuba Guard in Blue */}
            <line
              x1="56"
              y1="49"
              x2="63"
              y2="40"
              stroke="var(--side-art-accent)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Simplified Samurai Head & Topknot (Chonmage) */}
            <circle cx="42" cy="48" r="7" fill="var(--side-art-main)" />
            <path
              d="M36 41 C33 35, 42 33, 45 38"
              stroke="var(--side-art-main)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Samurai Haori Shoulders & Torso Stencil */}
            <path
              d="M26 60 L58 56 L53 88 L31 88 Z"
              fill="var(--side-art-main)"
            />
            {/* Extended Arms Gripping Katana */}
            <path
              d="M54 58 L66 49 M30 62 L58 46"
              stroke="var(--side-art-main)"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Wide Hakama Divided Skirt */}
            <path
              d="M30 91 L20 132 L37 132 L42 104 L47 132 L64 132 L54 91 Z"
              fill="var(--side-art-main)"
            />
            {/* Sash (Obi) Cut Line in Blue */}
            <line x1="29" y1="89" x2="55" y2="89" stroke="var(--side-art-accent)" strokeWidth="2.8" />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--text-secondary)] uppercase">
            SAMURAI
          </span>
        </div>

        {/* Bottom Picture 3: Simplified Vertical Katana & Tsuba Crest (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 80 110"
            className="w-12 h-16 xl:w-14 xl:h-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circular Tsuba Guard */}
            <circle
              cx="40"
              cy="42"
              r="14"
              stroke="var(--side-art-main)"
              strokeWidth="2.2"
              fill="none"
            />
            <circle
              cx="40"
              cy="42"
              r="9"
              stroke="var(--side-art-accent)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {/* Tsuka Hilt */}
            <rect x="37" y="10" width="6" height="28" rx="1.5" fill="var(--side-art-main)" />
            {/* Drawn Katana Blade */}
            <path
              d="M38 45 V94 L42 102 L42 45 Z"
              fill="var(--side-art-main)"
            />
            <line x1="40" y1="46" x2="40" y2="95" stroke="var(--side-art-accent)" strokeWidth="1.2" />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--accent-text)] uppercase">
            KENJUTSU
          </span>
        </div>
      </aside>

      {/* RIGHT SIDE RAIL: Unboxed Simplified Aikido Pictures (Enso Circle, Aikidoka Throw Flow, Harmony Sangen) */}
      <aside
        aria-hidden="true"
        className="fixed right-0 top-16 bottom-0 w-16 xl:w-24 z-30 pointer-events-none hidden lg:flex flex-col items-center justify-between py-8 select-none"
      >
        {/* Top Picture 1: Simplified Aikido Enso Calligraphy Circle & Spiral (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 80 80"
            className="w-12 h-12 xl:w-14 xl:h-14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Enso Brush Ring */}
            <circle
              cx="40"
              cy="40"
              r="26"
              stroke="var(--side-art-main)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="130 35"
            />
            {/* Inner Blue Redirection Spiral */}
            <path
              d="M40 23 A17 17 0 1 1 23 40"
              stroke="var(--side-art-accent)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            {/* Center Point (Chushin) */}
            <circle cx="40" cy="40" r="4.5" fill="var(--side-art-main)" />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--text-secondary)] uppercase">
            ENSO KI
          </span>
        </div>

        {/* Center Picture 2: Simplified Aikido Practitioner in Tenkan Circular Flow Stance (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 90 150"
            className="w-14 h-28 xl:w-16 xl:h-32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Circular Aikido Redirection Orbits */}
            <ellipse
              cx="45"
              cy="76"
              rx="36"
              ry="18"
              transform="rotate(-24 45 76)"
              stroke="var(--side-art-main)"
              strokeWidth="2.2"
              strokeDasharray="90 25"
            />
            <ellipse
              cx="45"
              cy="76"
              rx="36"
              ry="18"
              transform="rotate(22 45 76)"
              stroke="var(--side-art-accent)"
              strokeWidth="2"
              strokeDasharray="70 30"
            />
            {/* Simplified Aikidoka Head */}
            <circle cx="46" cy="42" r="7" fill="var(--side-art-main)" />
            {/* Flowing Open Arms Directing Energy (Tegatana Hand Blade) */}
            <path
              d="M16 64 Q 45 48, 76 52"
              stroke="var(--side-art-main)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Gi Jacket Torso */}
            <path
              d="M34 54 L56 54 L52 84 L38 84 Z"
              fill="var(--side-art-main)"
            />
            {/* Dynamic Pivoting Hakama Silhouette */}
            <path
              d="M36 87 L22 130 L41 130 L45 104 L51 130 L68 130 L54 87 Z"
              fill="var(--side-art-main)"
            />
            <line x1="35" y1="85" x2="55" y2="85" stroke="var(--side-art-accent)" strokeWidth="2.8" />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--text-secondary)] uppercase">
            AIKIDO
          </span>
        </div>

        {/* Bottom Picture 3: Simplified Aikido Triangle-Circle-Square (Sangen) Emblem (No Box) */}
        <div className="flex flex-col items-center gap-1.5">
          <svg
            viewBox="0 0 80 110"
            className="w-12 h-16 xl:w-14 xl:h-20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Aikido Sangen: Triangle (Irimi), Circle (Ju/Blending), Square (Control) */}
            <polygon
              points="40,12 58,40 22,40"
              stroke="var(--side-art-main)"
              strokeWidth="2.4"
              fill="none"
            />
            <circle
              cx="40"
              cy="56"
              r="14"
              stroke="var(--side-art-accent)"
              strokeWidth="2.4"
              fill="none"
            />
            <rect
              x="27"
              y="72"
              width="26"
              height="24"
              stroke="var(--side-art-main)"
              strokeWidth="2.4"
              fill="none"
            />
          </svg>
          <span className="text-[9px] font-mono-tabular tracking-widest text-[var(--accent-text)] uppercase">
            HARMONY
          </span>
        </div>
      </aside>
    </>
  );
};

/**
 * Unboxed Simplified Samurai & Aikido Strip for Mobile/Tablet & Section Framing
 */
export const SimplifiedWhiteMartialStrip: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[var(--border-subtle)]">
        {/* Left Item: Unboxed Samurai Illustration */}
        <div className="flex items-center gap-5">
          <svg
            viewBox="0 0 80 80"
            className="w-14 h-14 shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Samurai Helmet & Crossed Katanas (No Box) */}
            <path
              d="M14 66 L66 14 M66 66 L14 14"
              stroke="var(--side-art-accent)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
            <path
              d="M40 28 C25 24, 14 12, 18 7 C22 14, 31 21, 40 23 C49 21, 58 14, 62 7 C66 12, 55 24, 40 28 Z"
              fill="var(--side-art-main)"
            />
            <path
              d="M24 38 C24 27, 56 27, 56 38 L60 45 H20 L24 38 Z"
              fill="var(--side-art-main)"
            />
            <path
              d="M18 51 H62 M15 57 H65"
              stroke="var(--side-art-main)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="space-y-1">
            <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
              侍 · SAMURAI DISCIPLINE (KENJUTSU)
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              Decisive Full-Stack Execution & Forged Architecture
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Clean REST contracts, strict TypeScript/Java/Python typing, and autonomous solo product delivery.
            </p>
          </div>
        </div>

        {/* Right Item: Unboxed Aikido Illustration */}
        <div className="flex items-center gap-5">
          <svg
            viewBox="0 0 80 80"
            className="w-14 h-14 shrink-0"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Simplified Aikido Enso & Practitioner Silhouette (No Box) */}
            <circle
              cx="40"
              cy="40"
              r="29"
              stroke="var(--side-art-main)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="145 38"
            />
            <circle cx="40" cy="26" r="5.5" fill="var(--side-art-main)" />
            <path
              d="M21 39 Q 40 30, 59 35"
              stroke="var(--side-art-accent)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M33 34 L47 34 L53 60 L27 60 Z"
              fill="var(--side-art-main)"
            />
          </svg>
          <div className="space-y-1">
            <div className="text-xs font-mono-tabular text-[var(--accent-text)] font-medium">
              合気道 · AIKIDO HARMONY (TENKAN FLOW)
            </div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              Fluid Redirection of Complex Real-Time & AI Streams
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Transforming heavy multimedia AI workloads and multi-platform WebSockets into sub-2s interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
