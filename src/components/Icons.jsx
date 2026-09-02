// Small inline SVG icons used across the app. Edit paths here to restyle icons.

export function SpeakerIcon({ className = 'w-[13px] h-[13px]' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" stroke="none" />
      <path d="M16.2 8.8a5 5 0 010 6.4" />
      <path d="M18.8 6.2a9 9 0 010 11.6" />
    </svg>
  );
}

// Ink-brush style divider used between page header and content.
export function InkDivider() {
  return (
    <svg className="block w-full h-[22px] my-6" viewBox="0 0 600 24" preserveAspectRatio="none">
      <path d="M4 12 Q120 3 300 12 T596 12" fill="none" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" opacity="0.7" />
      <circle cx="300" cy="12" r="4" fill="var(--red)" />
    </svg>
  );
}

// Small scene icon used on the dialogue scenario cards. Add a new key here
// (and reference it from src/data/dialogues.js as `icon: 'yourKey'`) to add
// a new scenario icon.
const SCENES = {
  office: (ink, red) => (<>
    <rect x="14" y="22" width="20" height="18" fill="none" stroke={ink} strokeWidth="2.4" />
    <rect x="18" y="26" width="6" height="6" fill={red} />
    <rect x="27" y="26" width="6" height="6" fill="none" stroke={ink} strokeWidth="1.6" />
  </>),
  street: (ink, red) => (<>
    <line x1="24" y1="10" x2="24" y2="38" stroke={ink} strokeWidth="3" />
    <rect x="24" y="14" width="15" height="6" fill={red} />
    <rect x="10" y="21" width="13" height="6" fill={ink} />
    <circle cx="24" cy="35" r="2.4" fill={ink} />
  </>),
  factory: (ink, red) => (<>
    <path d="M11 36V22l6 5v-5l6 5v-5l6 5v-11h6v20z" fill="none" stroke={ink} strokeWidth="2.2" strokeLinejoin="round" />
    <circle cx="33" cy="12" r="2.6" fill={red} />
  </>),
  market: (ink, red) => (<>
    <path d="M13 18h22l-2.5 15h-17z" fill="none" stroke={ink} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M18 18a6 6 0 0112 0" fill="none" stroke={red} strokeWidth="2.2" />
  </>),
  hospital: (_ink, red) => (<>
    <rect x="21" y="10" width="6" height="24" fill={red} />
    <rect x="12" y="19" width="24" height="6" fill={red} />
  </>),
  bank: (ink, red) => (<>
    <polygon points="24,9 39,17 9,17" fill={ink} />
    <rect x="13" y="20" width="3.5" height="13" fill={ink} />
    <rect x="21" y="20" width="3.5" height="13" fill={red} />
    <rect x="29" y="20" width="3.5" height="13" fill={ink} />
    <rect x="10" y="35" width="28" height="3.5" fill={ink} />
  </>),
  classroom: (ink, red) => (<>
    <rect x="10" y="12" width="28" height="19" fill="none" stroke={ink} strokeWidth="2.2" />
    <line x1="15" y1="19" x2="29" y2="19" stroke={ink} strokeWidth="1.8" />
    <line x1="15" y1="24" x2="25" y2="24" stroke={red} strokeWidth="1.8" />
  </>),
  phone: (ink, red) => (<>
    <rect x="18" y="8" width="14" height="32" rx="3" fill="none" stroke={ink} strokeWidth="2.2" />
    <circle cx="25" cy="35" r="1.8" fill={red} />
  </>),
  weather: (ink, red) => (<>
    <circle cx="18" cy="17" r="5.5" fill={red} opacity="0.85" />
    <path d="M14 28a7 7 0 0113-4 5.2 5.2 0 013.2 9.6H16.5a5.8 5.8 0 01-2.5-5.6z" fill="none" stroke={ink} strokeWidth="2.2" />
  </>),
};

export function SceneIcon({ name, className = 'w-[30px] h-[30px]' }) {
  const draw = SCENES[name] || SCENES.office;
  return (
    <svg viewBox="0 0 48 48" className={className}>
      {draw('var(--ink)', 'var(--red)')}
    </svg>
  );
}

// Small decorative illustration shown above each dialogue script.
export function FolkIllustration() {
  return (
    <svg viewBox="0 0 300 140" width="240" height="112">
      <line x1="16" y1="122" x2="284" y2="122" stroke="var(--ink)" strokeWidth="1.5" opacity="0.45" />
      <circle cx="150" cy="18" r="7" fill="none" stroke="var(--red)" strokeWidth="2" />
      <path d="M120 52 Q150 38 180 52" fill="none" stroke="var(--red)" strokeWidth="1.5" strokeDasharray="2 5" opacity="0.8" />
      <g stroke="var(--ink)" strokeWidth="2.4" fill="var(--paper-card)" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="92" cy="58" r="10" />
        <path d="M92 68 C72 78 66 100 71 122 L113 122 C118 100 112 78 92 68 Z" />
        <path d="M83 88 Q68 92 63 80" fill="none" />
      </g>
      <g stroke="var(--ink)" strokeWidth="2.4" fill="var(--paper-card)" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="208" cy="58" r="10" />
        <path d="M208 68 C228 78 234 100 229 122 L187 122 C182 100 188 78 208 68 Z" />
        <path d="M217 88 Q232 92 237 80" fill="none" />
      </g>
    </svg>
  );
}

// ============================================================
// HERO ART — full ink-wash landscape used behind the home page
// banner: layered mountains, pines, a red sun, a crane and cloud
// bands, in the style of a Joseon-era minhwa/folk painting.
// ============================================================
export function HeroArt({ className = 'absolute inset-0 w-full h-full' }) {
  return (
    <svg viewBox="0 0 1600 800" preserveAspectRatio="xMidYMid slice" className={className}>
      <defs>
        <linearGradient id="heroSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3e9ce" />
          <stop offset="55%" stopColor="#ecdfbb" />
          <stop offset="100%" stopColor="#dfcd9c" />
        </linearGradient>
      </defs>
      <rect width="1600" height="800" fill="url(#heroSky)" />

      {/* sun */}
      <circle cx="1180" cy="230" r="88" fill="var(--red)" opacity="0.88" />

      {/* far mountains */}
      <path d="M0 430 Q140 300 320 400 T650 380 Q820 300 980 400 T1310 370 Q1460 320 1600 400 V800 H0 Z"
        fill="var(--ink)" opacity="0.16" />
      {/* mid mountains */}
      <path d="M0 500 Q220 340 460 470 Q620 360 800 470 Q980 370 1180 480 Q1360 400 1600 480 V800 H0 Z"
        fill="var(--ink)" opacity="0.26" />

      {/* cloud bands */}
      <g stroke="var(--paper)" strokeWidth="4" fill="none" opacity="0.75" strokeLinecap="round">
        <path d="M-20 470 Q140 455 300 470 T620 470 T940 470 T1260 470 T1620 470" />
        <path d="M-20 560 Q160 545 340 560 T680 560 T1020 560 T1360 560 T1620 560" />
      </g>

      {/* pine tree — left */}
      <g stroke="var(--ink)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M120 800 C110 640 150 560 130 460" />
        <path d="M130 460 Q60 440 40 490" />
        <path d="M130 460 Q60 400 20 430" />
        <path d="M150 560 Q220 545 250 580" />
        <path d="M150 560 Q230 520 260 540" />
      </g>
      <g fill="var(--ink)" opacity="0.75">
        <ellipse cx="60" cy="420" rx="70" ry="26" />
        <ellipse cx="40" cy="470" rx="80" ry="28" />
        <ellipse cx="220" cy="545" rx="70" ry="24" />
      </g>

      {/* pine tree — right */}
      <g stroke="var(--ink)" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.9">
        <path d="M1420 800 C1435 660 1390 580 1415 480" />
        <path d="M1415 480 Q1500 455 1530 500" />
        <path d="M1415 480 Q1495 415 1550 440" />
      </g>
      <g fill="var(--ink)" opacity="0.75">
        <ellipse cx="1500" cy="440" rx="75" ry="26" />
        <ellipse cx="1520" cy="495" rx="85" ry="28" />
      </g>

      {/* flying crane */}
      <g fill="none" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round">
        <path d="M540 210 Q590 170 650 195 Q690 210 720 190" />
        <path d="M650 195 Q660 230 690 250" />
        <line x1="690" y1="250" x2="700" y2="285" />
        <line x1="690" y1="250" x2="675" y2="285" />
      </g>

      {/* near hills / waves for grounding */}
      <path d="M0 660 Q260 600 540 655 Q800 600 1060 655 Q1340 600 1600 655 V800 H0 Z"
        fill="var(--ink)" opacity="0.34" />
    </svg>
  );
}

// Faint ink-wash misty mountains, used as a subtle backdrop behind cards
// (e.g. the dialogue scroll) so pages feel like part of the same painting.
export function MistyMountains({ className = 'absolute inset-0 w-full h-full pointer-events-none' }) {
  return (
    <svg viewBox="0 0 800 300" preserveAspectRatio="xMidYMid slice" className={className}>
      <path d="M0 190 Q120 110 260 170 Q380 90 520 170 Q650 110 800 175 V300 H0 Z" fill="var(--ink)" opacity="0.05" />
      <path d="M0 230 Q160 170 340 220 Q500 160 660 220 Q740 195 800 220 V300 H0 Z" fill="var(--ink)" opacity="0.07" />
      <g stroke="var(--ink)" strokeWidth="2" opacity="0.06" fill="none">
        <path d="M-20 205 Q160 190 340 205 T700 205 T820 205" />
      </g>
    </svg>
  );
}

// Two figures in hanbok, seated and conversing, folk-painting style —
// larger and more detailed than FolkIllustration, used on the Dialogue
// page. `flip` mirrors the pose so repeated scenes don't look identical.
export function TalkingPair({ flip = false, className = '' }) {
  return (
    <svg viewBox="0 0 360 190" className={className} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <ellipse cx="180" cy="172" rx="150" ry="8" fill="var(--ink)" opacity="0.08" />
      {/* speech swirl between them */}
      <path d="M150 55 Q180 35 210 55" fill="none" stroke="var(--red)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" opacity="0.85" />
      <circle cx="180" cy="24" r="8" fill="none" stroke="var(--red)" strokeWidth="2" opacity="0.85" />

      {/* figure A — seated, facing right */}
      <g stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="var(--paper-card)">
        <circle cx="118" cy="66" r="13" />
        <path d="M107 60 Q118 44 129 60" fill="var(--ink)" stroke="none" />
        <path d="M118 79 C90 92 78 120 84 158 L162 158 C158 122 150 96 130 82 Z" />
        <path d="M118 100 Q140 108 150 132" fill="none" />
        <path d="M96 158 L88 172" />
        <path d="M150 158 L160 172" />
      </g>

      {/* figure B — seated, facing left */}
      <g stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="var(--paper-card)">
        <circle cx="244" cy="66" r="13" />
        <path d="M233 58 Q244 42 255 58 Q257 52 244 50 Q231 52 233 58 Z" fill="var(--ink)" stroke="none" />
        <path d="M244 79 C272 92 284 120 278 158 L200 158 C204 122 212 96 232 82 Z" />
        <path d="M244 100 Q222 108 212 132" fill="none" />
        <path d="M266 158 L274 172" />
        <path d="M212 158 L202 172" />
      </g>

      {/* small floor mat lines */}
      <path d="M70 160 H290" stroke="var(--ink)" strokeWidth="1.4" opacity="0.35" />
    </svg>
  );
}

// Simplified Gyeongbokgung-style multi-tier palace roofline, ink-line only.
export function PalaceMotif({ className = 'w-full h-auto' }) {
  return (
    <svg viewBox="0 0 400 140" className={className} fill="none" stroke="var(--ink)"
      strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
      <path d="M20 120 H380" />
      <path d="M40 120 V90 H360 V120" />
      <path d="M20 90 L60 62 H340 L380 90 Z" fill="var(--paper-card)" />
      <path d="M90 62 L120 40 H280 L310 62 Z" fill="var(--paper-card)" />
      <path d="M150 40 L170 22 H230 L250 40 Z" fill="var(--paper-card)" />
      <circle cx="200" cy="14" r="4" fill="var(--red)" stroke="none" />
      <line x1="60" y1="90" x2="60" y2="120" />
      <line x1="150" y1="90" x2="150" y2="120" />
      <line x1="250" y1="90" x2="250" y2="120" />
      <line x1="340" y1="90" x2="340" y2="120" />
      <line x1="110" y1="62" x2="110" y2="90" opacity="0.6" />
      <line x1="290" y1="62" x2="290" y2="90" opacity="0.6" />
    </svg>
  );
}

// Mugunghwa (hibiscus) — Korea's national flower, five-petal ink motif.
export function MugunghwaMotif({ className = 'w-10 h-10' }) {
  return (
    <svg viewBox="0 0 60 60" className={className}>
      <g fill="none" stroke="var(--red)" strokeWidth="1.8" opacity="0.9">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse key={deg} cx="30" cy="18" rx="9" ry="14" transform={`rotate(${deg} 30 30)`} />
        ))}
      </g>
      <circle cx="30" cy="30" r="4" fill="var(--ink)" />
    </svg>
  );
}

// Flying crane — folk-painting fauna motif, standalone accent version.
export function CraneMotif({ className = 'w-16 h-16' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="var(--ink)"
      strokeWidth="2.4" strokeLinecap="round" opacity="0.85">
      <path d="M14 50 Q30 30 46 42 Q56 50 66 40" />
      <path d="M46 42 Q50 60 66 66" />
      <line x1="66" y1="66" x2="72" y2="76" />
      <line x1="66" y1="66" x2="58" y2="76" />
      <circle cx="14" cy="50" r="3" fill="var(--red)" stroke="none" />
    </svg>
  );
}

// A pair of figures standing (for outdoor/street/market dialogue scenes),
// distinct pose from TalkingPair so the Dialogue page doesn't repeat itself.
export function StandingPair({ flip = false, className = '' }) {
  return (
    <svg viewBox="0 0 360 190" className={className} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <ellipse cx="180" cy="178" rx="150" ry="7" fill="var(--ink)" opacity="0.08" />
      <g stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="var(--paper-card)">
        <circle cx="126" cy="48" r="12" />
        <path d="M115 42 Q126 27 137 42" fill="var(--ink)" stroke="none" />
        <path d="M126 60 C104 70 96 100 100 172 L152 172 C150 104 146 76 132 62 Z" />
        <line x1="100" y1="110" x2="78" y2="140" />
        <line x1="152" y1="110" x2="172" y2="96" />
      </g>
      <g stroke="var(--ink)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="var(--paper-card)">
        <circle cx="236" cy="48" r="12" />
        <path d="M225 41 Q236 26 247 41 Q249 35 236 33 Q223 35 225 41 Z" fill="var(--ink)" stroke="none" />
        <path d="M236 60 C258 70 266 100 262 172 L212 172 C213 104 218 76 230 62 Z" />
        <line x1="262" y1="112" x2="284" y2="130" />
        <line x1="212" y1="112" x2="196" y2="98" />
      </g>
      <path d="M85 172 H275" stroke="var(--ink)" strokeWidth="1.4" opacity="0.3" />
    </svg>
  );
}
