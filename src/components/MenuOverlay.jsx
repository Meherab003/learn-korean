const LINKS = [
  { sec: 'home', num: '00', bn: 'হোম', en: 'Home' },
  { sec: 'hangul', num: '01', bn: 'হাংগুল বর্ণমালা', en: 'Alphabet' },
  { sec: 'builder', num: '02', bn: 'সিলেবল তৈরি', en: 'Syllables' },
  { sec: 'numbers', num: '03', bn: 'সংখ্যা', en: 'Numbers' },
  { sec: 'grammar', num: '04', bn: 'ব্যাকরণ', en: 'Grammar' },
  { sec: 'vocab', num: '05', bn: 'শব্দভাণ্ডার', en: 'Vocabulary' },
  { sec: 'dialogue', num: '06', bn: 'সংলাপ', en: 'Dialogues' },
  { sec: 'quiz', num: '07', bn: 'অনুশীলন', en: 'Quiz' },
];

export default function MenuOverlay({ open, onNavigate, onClose, onSoundTest }) {
  return (
    <div
      className={`fixed inset-0 z-[100] bg-paper flex flex-col overflow-y-auto
        transition-transform duration-500 ${open ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ transitionTimingFunction: 'cubic-bezier(.7,0,.2,1)' }}
    >
      <div className="max-w-[900px] mx-auto w-full px-5 sm:px-14 pb-14 pt-6 flex-1">
        <div className="flex justify-between items-center py-1.5 pb-8">
          <div className="font-hero font-extrabold text-[1.3rem]">한글<span className="text-red">·</span>첫걸음</div>
          <button
            onClick={onClose}
            className="bg-transparent border-2 border-ink text-ink rounded-full px-4.5 py-2 cursor-pointer
              font-swiss font-extrabold text-[.8rem] transition hover:bg-ink hover:text-paper"
          >
            CLOSE ✕
          </button>
        </div>

        <nav className="flex flex-col border-t-2 border-ink">
          {LINKS.map((l) => (
            <button
              key={l.sec}
              onClick={() => onNavigate(l.sec)}
              className="flex items-baseline gap-5 py-4.5 px-1 bg-transparent border-none border-b border-line
                cursor-pointer text-left w-full transition-[padding-left,background] duration-200
                hover:bg-red-tint hover:pl-4"
            >
              <span className="font-swiss font-black text-red text-[1.1rem] w-11 flex-none">{l.num}</span>
              <span className="font-hero font-bold text-[clamp(1.3rem,4vw,2.1rem)]">
                {l.bn} <i className="font-swiss not-italic text-[.55em] text-ink-faint ml-2.5 font-semibold">{l.en}</i>
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-8 pt-5 border-t border-dashed border-line flex flex-wrap gap-3 items-center">
          <button
            onClick={onSoundTest}
            className="bg-transparent border border-ink text-ink rounded-sm px-4 py-2 cursor-pointer
              font-swiss font-bold text-[.85rem] transition hover:bg-ink hover:text-paper"
          >
            সাউন্ড টেস্ট করুন
          </button>
          <span className="font-mono text-[.72rem] text-ink-faint">
            헤드폰을 사용하세요 · হেডফোন ব্যবহার করুন
          </span>
        </div>
      </div>
    </div>
  );
}
