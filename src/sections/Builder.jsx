import { useState } from 'react';
import { CHO, JUNG, JONG, CHO_ROM, JUNG_ROM, JONG_ROM } from '../data/numbers.js';
import { Eyebrow, Btn } from '../components/UI.jsx';
import { InkDivider, SpeakerIcon } from '../components/Icons.jsx';
import { speak } from '../utils/speak.js';

function ChipRow({ id, items, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2  overflow-y-auto p-2.5 bg-paper-card rounded-sm shadow-inner">
      {items.map((ch, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`min-w-[48px] h-[48px] px-2 rounded-sm border-2 font-hero font-extrabold
            text-[1.4rem] cursor-pointer transition flex items-center justify-center
            ${selected === i
              ? 'bg-red text-white border-red shadow-md scale-[1.08]'
              : 'bg-paper text-ink border-line hover:border-red hover:text-red hover:-translate-y-0.5'}`}
        >
          {id === 'final' && ch === ''
            ? <span className="text-[.62rem] font-bn font-bold leading-tight">নেই</span>
            : ch}
        </button>
      ))}
    </div>
  );
}

export default function Builder() {
  const [cho, setCho] = useState(0);
  const [jung, setJung] = useState(0);
  const [jong, setJong] = useState(0);
  const [pulse, setPulse] = useState(false);

  const code = 0xac00 + (cho * 21 + jung) * 28 + jong;
  const syllable = String.fromCharCode(code);
  const rom = CHO_ROM[cho] + JUNG_ROM[jung] + (jong > 0 ? JONG_ROM[jong] : '');

  function select(setter) {
    return (i) => { setter(i); setPulse(false); requestAnimationFrame(() => setPulse(true)); };
  }

  return (
    <div>
      <Eyebrow>02 · 음절 조립하기</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">সিলেবল ব্লক তৈরি করুন</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        কোরিয়ান লেখা হয় বর্ণকে একটি বর্গাকার ব্লকে জোড়া দিয়ে — ইংরেজির মতো লাইন ধরে ধরে নয়।
      </div>
      <InkDivider />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="mb-3.5">
            <div className="inline-flex items-center gap-2 font-swiss font-extrabold text-[.78rem]
              uppercase tracking-[.08em] text-red mb-2 bg-red-tint px-2.5 py-1 rounded-sm">
              ১. প্রথম ব্যঞ্জনবর্ণ (Initial) — বাধ্যতামূলক
            </div>
            <ChipRow id="cho" items={CHO} selected={cho} onSelect={select(setCho)} />
          </div>
          <div className="mb-3.5">
            <div className="font-mono text-[.72rem] uppercase tracking-[.1em] text-ink-soft mb-1.5">
              ২. স্বরবর্ণ (Medial) — বাধ্যতামূলক
            </div>
            <ChipRow id="jung" items={JUNG} selected={jung} onSelect={select(setJung)} />
          </div>
          <div className="mb-3.5">
            <div className="font-mono text-[.72rem] uppercase tracking-[.1em] text-ink-soft mb-1.5">
              ৩. শেষ ব্যঞ্জনবর্ণ / ব্যাচিম (Final) — ঐচ্ছিক
            </div>
            <ChipRow id="final" items={JONG} selected={jong} onSelect={select(setJong)} />
          </div>
          <div className="relative bg-red-tint px-4.5 py-4.5 text-[.9rem] mt-6 mb-2">
            <b className="text-ink">ব্যাচিম (받침)</b> কী: সিলেবলের নিচে বসা বাড়তি ব্যঞ্জনবর্ণ, যেমন 한(han)-এ ㄴ।
            না থাকলে সিলেবল শুধু ব্যঞ্জন+স্বর দিয়ে শেষ হয়, যেমন 가(ga)।
          </div>
        </div>

        <div className="relative overflow-hidden torn-paper p-8 text-center shadow-xl lg:sticky lg:top-[76px]">
          <div className="absolute top-3 right-3 w-10 h-10 rounded-sm bg-red flex items-center justify-center rotate-[-6deg] shadow-lg">
            <span className="font-hero text-white font-black text-sm">音</span>
          </div>
          <div className={`font-kr text-[6rem] text-ink font-black min-h-[1.3em] ${pulse ? 'animate-pulse-once' : ''}`}>
            {syllable}
          </div>
          <div className="font-mono text-red-deep mt-2.5 font-semibold">{rom}</div>
          <div className="font-bn mt-1 text-ink-soft">উচ্চারণ আন্দাজ: {rom}</div>
          <div className="mt-4.5">
            <Btn onClick={() => speak(syllable)}>
              <SpeakerIcon className="w-[13px] h-[13px]" /> উচ্চারণ শুনুন
            </Btn>
          </div>
        </div>
      </div>

      <div className="relative bg-red-tint px-4.5 py-4.5 text-[.9rem] mt-8">
        <b>নিয়ম মনে রাখুন:</b> প্রতিটি কোরিয়ান সিলেবল = <b>ব্যঞ্জন + স্বর (+ ব্যাচিম ঐচ্ছিক)</b>।
        স্বরবর্ণ একা কখনো লেখা হয় না — নীরব বাহক হিসেবে <b>ㅇ</b> বসে (যেমন 아 = a)।
      </div>
    </div>
  );
}
