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
