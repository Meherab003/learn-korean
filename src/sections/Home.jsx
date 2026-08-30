import { Eyebrow } from '../components/UI.jsx';

const STATS = [
  { num: '40+', label: 'হাংগুল বর্ণ' },
  { num: '১–১০ কোটি', label: 'সংখ্যা পদ্ধতি' },
  { num: '১৮', label: 'শব্দভাণ্ডার বিভাগ' },
  { num: '৯', label: 'বাস্তব সংলাপ' },
  { num: '১০', label: 'প্রশ্নের কুইজ' },
];

const WHYS = [
  {
    num: '01', eyebrow: 'বাক্য গঠন',
    title: 'বাংলা ও কোরিয়ান একই পরিবারের গঠন ভাগ করে',
    body: <>দুটি ভাষাই <b>কর্তা–কর্ম–ক্রিয়া</b> ধারা অনুসরণ করে — ইংরেজির Subject–Verb–Object নয়। তাই বাক্যের গঠন বোঝা আপনার জন্য সহজ হবে।</>,
  },
  {
    num: '02', eyebrow: 'হাংগুল সম্পর্কে',
    title: 'এটি একটি ডিজাইন করা বর্ণমালা',
    body: <>১৪৪৩ সালে রাজা সেজং এই বর্ণমালা তৈরি করান — প্রতিটি ব্যঞ্জনবর্ণের আকৃতি মুখ ও জিহ্বার অবস্থান অনুকরণ করে আঁকা।</>,
  },
];

const PATH = [
  { sec: 'hangul', num: '01', label: 'বর্ণ ও উচ্চারণ' },
  { sec: 'builder', num: '02', label: 'সিলেবল ব্লক' },
  { sec: 'numbers', num: '03', label: 'সংখ্যা' },
  { sec: 'grammar', num: '04', label: 'ব্যাকরণ' },
  { sec: 'vocab', num: '05', label: 'শব্দভাণ্ডার' },
  { sec: 'dialogue', num: '06', label: 'সংলাপ' },
  { sec: 'quiz', num: '07', label: 'অনুশীলন পরীক্ষা' },
];

export default function Home({ goTo }) {
  return (
    <div>
      {/* Hero */}
      <div className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden border-b-2 border-ink
        -mx-4 sm:-mx-14 px-4 sm:px-14 py-16 pb-14">
        <div className="absolute font-hero font-extrabold text-[min(60vw,620px)] leading-none select-none
          pointer-events-none z-0" style={{ color: 'rgba(28,23,18,.06)', top: '-8%', right: '-8%' }}>
          한
        </div>
        <div className="absolute z-[1]" style={{ top: '8%', right: '8%' }}>
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] border-[5px] border-red rounded-[10px]
            flex items-center justify-center shadow-xl -rotate-3" style={{ background: 'rgba(240,220,207,.5)' }}>
            <span className="font-brush text-[2.6rem] text-red rotate-[4deg]">韓</span>
          </div>
        </div>

        <div className="relative z-[2] max-w-[760px]">
          <span className="font-mono tracking-[.2em] uppercase text-[.78rem] text-red font-bold border-b-2
            border-red inline-block pb-1">
            시작하기 · শুরু করা যাক
          </span>
          <h1 className="font-hero font-extrabold text-[clamp(2.2rem,7vw,4.6rem)] mt-5 leading-[1.05] -tracking-[.01em]">
            শূন্য থেকে কোরিয়ান ভাষা শেখা
          </h1>
          <div className="font-bn-serif font-bold text-red-deep text-[1.15rem] sm:text-[1.25rem] mt-2.5">
            একজন সম্পূর্ণ নতুন শিক্ষার্থীর জন্য — বাংলা মাতৃভাষা, ইংরেজি সাবলীল
          </div>
          <p className="max-w-[58ch] text-ink-soft mt-4.5 text-[1.02rem]">
            ধাপে ধাপে সাজানো একটি সম্পূর্ণ কোর্স: বর্ণ চেনা ও উচ্চারণ থেকে শুরু করে সিলেবল তৈরি, ব্যাকরণ,
            ১৮ ধরনের শব্দভাণ্ডার, বাস্তব জীবনের সংলাপ এবং শেষে অনুশীলন পরীক্ষা।
          </p>
          <div className="flex gap-3.5 mt-7 flex-wrap">
            <button onClick={() => goTo('hangul')}
              className="bg-ink text-paper border-2 border-ink px-6 py-3.5 rounded-sm font-extrabold
                font-swiss cursor-pointer text-[.92rem] tracking-[.03em] transition
                hover:bg-red hover:border-red hover:-translate-y-0.5">
              শুরু করি → হাংগুল শিখি
            </button>
            <button onClick={() => goTo('quiz')}
              className="bg-transparent text-ink border-2 border-ink px-6 py-3.5 rounded-sm font-extrabold
                font-swiss cursor-pointer text-[.92rem] tracking-[.03em] transition
                hover:bg-ink hover:text-paper">
              সরাসরি কুইজ দেখুন
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 sm:left-14 z-[2] font-mono text-[.7rem] text-ink-faint
          flex items-center gap-2">
          নিচে স্ক্রল করুন <span className="animate-bob">↓</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-5 border-t-2 border-b-2 border-ink">
        {STATS.map((s, i) => (
          <div key={i} className="p-5 px-3.5 text-center border-r border-line last:border-r-0
            border-b sm:border-b-0 [&:nth-last-child(-n+1)]:border-b-0">
            <div className="font-swiss text-[clamp(1.6rem,4vw,2.4rem)] font-black text-red">{s.num}</div>
            <div className="font-bn text-[.76rem] text-ink-soft mt-1 font-semibold">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Why blocks */}
      {WHYS.map((w) => (
        <div key={w.num} className="grid grid-cols-1 sm:grid-cols-[0.8fr_1.6fr] border-b border-line">
          <div className="font-swiss text-[3.4rem] font-black text-red-tint px-5 py-6 border-r-0
            sm:border-r border-b sm:border-b-0 border-dashed border-line"
            style={{ WebkitTextStroke: '2px var(--red)' }}>
            {w.num}
          </div>
          <div className="px-6 py-6">
            <Eyebrow>{w.eyebrow}</Eyebrow>
            <h3 className="font-hero font-extrabold text-[1.4rem] mt-1">{w.title}</h3>
            <p className="font-bn font-medium text-ink-soft max-w-[60ch] mt-2">{w.body}</p>
          </div>
        </div>
      ))}

      {/* Learning path */}
      <h2 className="font-hero font-extrabold mt-11 text-2xl">শেখার পথ / Learning path</h2>
      <div className="border-t-2 border-ink mt-2">
        {PATH.map((p) => (
          <div key={p.sec} onClick={() => goTo(p.sec)}
            className="flex items-center gap-5 py-5 px-2 border-b border-line cursor-pointer group
              transition-[background,padding-left] hover:bg-red-tint hover:pl-4">
            <span className="font-swiss font-black text-[1.6rem] text-ink-faint w-[52px] group-hover:text-red">
              {p.num}
            </span>
            <span className="font-hero font-bold text-[1.2rem] flex-1">{p.label}</span>
            <span className="font-swiss font-bold text-red opacity-0 -translate-x-1.5 transition
              group-hover:opacity-100 group-hover:translate-x-0">
              যান →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
