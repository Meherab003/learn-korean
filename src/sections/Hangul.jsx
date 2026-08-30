import { useState } from 'react';
import { VOWELS, DIP, CONS, TENSE } from '../data/hangul.js';
import { Eyebrow, SpeakerButton } from '../components/UI.jsx';
import { InkDivider } from '../components/Icons.jsx';

// The four consonants whose shapes are said to trace body/mouth parts.
const ORIGIN_TAGS = { 'ㄱ': 'জিহ্বা + তালু', 'ㄴ': 'জিহ্বার ডগা', 'ㅁ': 'মুখের আকৃতি', 'ㅇ': 'গলার আকৃতি' };

function LetterTile({ item, type, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item, type)}
      className="relative bg-paper-card border border-line rounded p-3.5 px-2.5 text-center cursor-pointer
        transition hover:-translate-y-1 hover:border-red hover:shadow-lg"
    >
      <SpeakerButton text={item.g} className="absolute top-1.5 right-1.5" />
      <div className="font-hero text-[2.4rem] font-bold">{item.g}</div>
      <div className="font-mono text-[.78rem] text-red-deep mt-1 font-bold">{item.rom}</div>
      <div className="font-bn text-[.78rem] text-ink-soft mt-0.5">{item.bn}</div>
    </div>
  );
}

function Grid({ items, type, onSelect }) {
  return (
    <div className="grid gap-3 mt-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}>
      {items.map((it) => <LetterTile key={it.g} item={it} type={type} onSelect={onSelect} />)}
    </div>
  );
}

export default function Hangul() {
  const [detail, setDetail] = useState(null); // { item, type }

  return (
    <div>
      <Eyebrow>01 · 한글 배우기</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">হাংগুল বর্ণমালা</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        প্রতিটি বর্ণে ক্লিক করুন — উচ্চারণ, বাংলা প্রতিবর্ণীকরণ ও উদাহরণ দেখুন
      </div>
      <InkDivider />

      {/* All letters written out on an aged practice sheet, brush-ink style */}
      <div className="relative border-x border-line bg-paper-card px-5 sm:px-8 py-7 shadow-xl torn-edge-top torn-edge-bottom overflow-hidden">
        <div className="absolute inset-0 grid-sheet opacity-70" />
        <div className="absolute top-3 right-4 sm:right-6 w-14 h-14 rounded-sm bg-red flex items-center
          justify-center rotate-[-6deg] shadow-lg">
          <span className="font-hero text-white font-black text-xl">韓</span>
        </div>
        <div className="relative">
          <Eyebrow>모든 글자 · সব বর্ণ এক নজরে</Eyebrow>
          <div className="flex flex-wrap gap-x-3 gap-y-2 justify-center mt-4 max-w-[820px] mx-auto">
            {[...CONS, ...TENSE, ...VOWELS, ...DIP].map((it, i) => (
              <span
                key={i}
                title={`${it.rom} — ${it.bn}`}
                className="font-kr font-black text-ink text-[2.1rem] sm:text-[2.5rem] leading-none cursor-default
                  transition hover:text-red hover:-translate-y-0.5"
                style={{ textShadow: '0 1px 0 rgba(28,23,18,.08)' }}
              >
                {it.g}
              </span>
            ))}
          </div>
          <p className="font-bn text-ink-faint text-[.78rem] text-center mt-4">
            নিচের বিভাগগুলো থেকে একটি বর্ণে ক্লিক করলে তার উচ্চারণ ও উদাহরণ দেখতে পাবেন
          </p>
        </div>
      </div>

      <div className="mt-9"><Eyebrow>বর্ণের আকৃতি কোথা থেকে এলো</Eyebrow></div>
      <p className="font-bn text-ink-soft mt-1.5">
        প্রতিটি মৌলিক ব্যঞ্জনবর্ণ শরীরের অঙ্গের আকৃতি থেকে ডিজাইন করা — সিলমোহরের মতো নিচের চারটি ক্লিক করে দেখুন
      </p>
      <div className="grid gap-3.5 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {Object.keys(ORIGIN_TAGS).map((g) => {
          const item = CONS.find((c) => c.g === g);
          return (
            <div key={g} onClick={() => setDetail({ item, type: 'ব্যঞ্জনবর্ণ' })}
              className="relative border-[2.5px] border-red rounded-lg px-3.5 pt-5.5 pb-4.5 text-center
                cursor-pointer transition hover:-translate-y-1 hover:-rotate-1 hover:shadow-xl bg-paper-card">
              <span className="absolute top-2 left-0 right-0 font-mono text-[.6rem] text-red uppercase tracking-[.06em]">
                {ORIGIN_TAGS[g]}
              </span>
              <div className="font-hero text-5xl font-extrabold mt-3.5">{g}</div>
              <div className="font-bn text-[.78rem] text-ink-soft mt-2.5 leading-relaxed">{item.desc}</div>
              <SpeakerButton text={g} large className="absolute bottom-2.5 right-2.5" />
            </div>
          );
        })}
      </div>

      <h2 className="font-hero font-extrabold text-2xl mt-9">স্বরবর্ণ (মৌলিক) · Basic Vowels</h2>
      <p className="font-bn text-ink-soft">
        ১০টি মৌলিক স্বরবর্ণ — উলম্ব রেখা (ㅣ) মানুষ, অনুভূমিক রেখা (ㅡ) পৃথিবী, বিন্দু (ㆍ) আকাশকে বোঝায়।
      </p>
      <Grid items={VOWELS} type="স্বরবর্ণ" onSelect={(item, type) => setDetail({ item, type })} />

      <h2 className="font-hero font-extrabold text-2xl mt-8">যৌগিক স্বরবর্ণ · Compound Vowels</h2>
      <Grid items={DIP} type="যৌগিক স্বরবর্ণ" onSelect={(item, type) => setDetail({ item, type })} />

      <h2 className="font-hero font-extrabold text-2xl mt-8">ব্যঞ্জনবর্ণ (মৌলিক) · Basic Consonants</h2>
      <Grid items={CONS} type="ব্যঞ্জনবর্ণ" onSelect={(item, type) => setDetail({ item, type })} />

      <h2 className="font-hero font-extrabold text-2xl mt-8">দ্বিত্ব ব্যঞ্জনবর্ণ (কঠিন উচ্চারণ) · Tense Consonants</h2>
      <p className="font-bn text-ink-soft">এগুলো উচ্চারণে গলা ও মুখে বেশি টান/চাপ দিয়ে বলতে হয়।</p>
      <Grid items={TENSE} type="দ্বিত্ব ব্যঞ্জনবর্ণ" onSelect={(item, type) => setDetail({ item, type })} />

      {detail && (
        <div className="mt-4 rounded border border-ink bg-paper-card p-5 shadow-xl border-t-[5px] border-t-red">
          <div className="flex items-center gap-4.5 flex-wrap">
            <div className="font-hero text-[4rem] font-black leading-none">{detail.item.g}</div>
            <div>
              <span className="inline-block text-[.72rem] font-mono px-2.5 py-0.5 rounded-full mr-1.5 bg-ink text-paper">{detail.type}</span>
              <span className="inline-block text-[.72rem] font-mono px-2.5 py-0.5 rounded-full bg-red text-white">{detail.item.rom} {detail.item.ipa}</span>
              <h3 className="font-hero font-extrabold text-xl mt-2">{detail.item.bn} ধ্বনি</h3>
            </div>
            <SpeakerButton text={detail.item.g} large className="ml-auto" />
          </div>
          <p className="mt-3">{detail.item.desc}</p>
          <div className="border-l-[3px] border-red pl-3.5 py-2 mt-2.5 bg-paper rounded-r">
            <div className="font-kr font-semibold text-[1.05rem] flex items-center gap-2">
              {detail.item.ex} <SpeakerButton text={detail.item.ex} />
            </div>
            <div className="font-mono text-red-deep text-[.82rem] mt-0.5">{detail.item.exrom}</div>
            <div className="font-bn text-ink-soft text-[.88rem] mt-0.5">অর্থ: {detail.item.exbn}</div>
          </div>
        </div>
      )}
    </div>
  );
}
