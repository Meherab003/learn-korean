import { useState } from 'react';
import { GRAMMAR } from '../data/grammar.js';
import { Eyebrow, SpeakerButton } from '../components/UI.jsx';
import { InkDivider } from '../components/Icons.jsx';

const TABS = [
  { k: 'all', l: 'সব দেখুন' },
  { k: '1', l: 'মৌলিক (Basic)' },
  { k: '2', l: 'মাঝারি (Intermediate)' },
];

export default function Grammar() {
  const [filter, setFilter] = useState('all');
  const items = GRAMMAR.filter((g) => filter === 'all' || String(g.level) === filter);

  return (
    <div>
      <Eyebrow>04 · 문법</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">মৌলিক ব্যাকরণ</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        EPS-TOPIK ও দৈনন্দিন কথোপকথনে সবচেয়ে বেশি দরকারি প্যাটার্নগুলো
      </div>
      <InkDivider />

      <div className="bg-paper-card border border-line rounded p-[18px] border-l-4 border-l-red">
        <Eyebrow>সবচেয়ে গুরুত্বপূর্ণ পার্থক্য</Eyebrow>
        <h3 className="font-hero font-extrabold text-lg mt-1">বাক্য গঠন: বাংলা vs কোরিয়ান vs ইংরেজি</h3>
        <table className="w-full border-collapse mt-3 text-[.9rem]">
          <thead>
            <tr>
              {['ভাষা', 'গঠন', 'উদাহরণ'].map((h) => (
                <th key={h} className="border border-line px-2.5 py-2 text-left bg-ink text-paper font-mono text-[.72rem] uppercase">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr><td className="border border-line px-2.5 py-2">বাংলা</td><td className="border border-line px-2.5 py-2">কর্তা–কর্ম–ক্রিয়া</td><td className="border border-line px-2.5 py-2 font-bn">আমি ভাত খাই</td></tr>
            <tr><td className="border border-line px-2.5 py-2">কোরিয়ান</td><td className="border border-line px-2.5 py-2">কর্তা–কর্ম–ক্রিয়া</td><td className="border border-line px-2.5 py-2 font-kr font-semibold">저는 밥을 먹어요</td></tr>
            <tr><td className="border border-line px-2.5 py-2">ইংরেজি</td><td className="border border-line px-2.5 py-2">কর্তা–ক্রিয়া–কর্ম</td><td className="border border-line px-2.5 py-2">I eat rice</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-hero font-extrabold text-2xl mt-7">প্যাটার্ন-চেনা সহায়িকা</h2>
      <p className="font-bn text-ink-soft">তিনটি সবচেয়ে গুরুত্বপূর্ণ ব্যাকরণ-চিহ্ন</p>
      <div className="grid border-2 border-ink mt-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {[
          { kr: '은 / 는', label: 'বিষয় (Topic)' },
          { kr: '이 / 가', label: 'কর্তা (Subject)' },
          { kr: '을 / 를', label: 'কর্ম (Object)' },
        ].map((p, i, arr) => (
          <div key={p.kr} className={`p-4 text-center ${i < arr.length - 1 ? 'border-r border-ink' : ''}`}>
            <div className="font-hero text-2xl font-extrabold text-red">{p.kr}</div>
            <div className="font-bn text-[.78rem] mt-1 font-semibold text-ink-soft">{p.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4.5 flex-wrap">
        {TABS.map((t) => (
          <button
            key={t.k}
            onClick={() => setFilter(t.k)}
            className={`border border-ink rounded-full px-3.5 py-1.5 text-[.8rem] cursor-pointer font-bold font-swiss
              ${filter === t.k ? 'bg-red text-white border-red' : 'bg-transparent text-ink hover:border-red hover:text-red'}`}
          >
            {t.l}
          </button>
        ))}
      </div>

      <div className="mt-2.5 space-y-4">
        {items.map((g) => (
          <div key={g.pat} className={`bg-paper-card border border-line rounded p-[18px] border-l-[5px]
            ${g.level === 2 ? 'border-l-red' : 'border-l-ink'}`}>
            <div className="flex items-baseline gap-2.5 flex-wrap">
              <span className="font-hero text-xl text-red font-extrabold">{g.icon}</span>
              <span className="font-mono bg-ink text-paper px-2.5 py-0.5 rounded-sm text-[.88rem]">{g.pat}</span>
              <span className={`font-bn text-[.68rem] px-2.5 py-0.5 rounded-full font-bold text-paper ${g.level === 2 ? 'bg-red' : 'bg-ink'}`}>
                {g.level === 2 ? 'মাঝারি' : 'মৌলিক'}
              </span>
              <h3 className="font-hero font-extrabold text-lg basis-full m-0">{g.title}</h3>
            </div>
            <p className="mt-2.5">{g.desc}</p>
            {g.examples.map((e, i) => (
              <div key={i} className="border-l-[3px] border-red pl-3.5 py-2 mt-2.5 bg-paper rounded-r">
                <div className="font-kr font-semibold text-[1.05rem] flex items-center gap-2 flex-wrap">
                  {e.kr} <SpeakerButton text={e.kr} />
                </div>
                <div className="font-mono text-red-deep text-[.82rem] mt-0.5">{e.rom}</div>
                <div className="font-bn text-ink-soft text-[.88rem] mt-0.5">{e.bn}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
