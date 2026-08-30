import { useState } from 'react';
import { VOCAB, CATS } from '../data/vocab.js';
import { Eyebrow, SpeakerButton } from '../components/UI.jsx';
import { InkDivider } from '../components/Icons.jsx';

export default function Vocab() {
  const [filter, setFilter] = useState('all');
  const items = VOCAB.filter((v) => filter === 'all' || v.cat === filter);

  return (
    <div>
      <Eyebrow>05 · 어휘</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">শব্দভাণ্ডার</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        প্রতিটি কার্ডে কোরিয়ান শব্দ (বড়), তার উচ্চারণ, এবং বাংলা ও ইংরেজি অর্থ একসাথে দেখানো হয়েছে।
      </div>
      <InkDivider />

      <div className="flex flex-wrap gap-2 my-4">
        <button
          onClick={() => setFilter('all')}
          className={`border border-ink rounded-full px-3.5 py-1.5 text-[.8rem] cursor-pointer font-bold font-swiss
            ${filter === 'all' ? 'bg-red text-white border-red' : 'bg-transparent text-ink hover:border-red hover:text-red'}`}
        >
          সব
        </button>
        {Object.keys(CATS).map((k) => (
          <button
            key={k}
            onClick={() => setFilter(k)}
            className={`border border-ink rounded-full px-3.5 py-1.5 text-[.8rem] cursor-pointer font-bold font-swiss
              ${filter === k ? 'bg-red text-white border-red' : 'bg-transparent text-ink hover:border-red hover:text-red'}`}
          >
            {CATS[k]}
          </button>
        ))}
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
        {items.map((v, i) => (
          <div key={i} className="torn-paper relative p-5 pb-4.5 flex flex-col min-h-[160px]">
            <span className="font-mono text-[.6rem] text-red uppercase tracking-[.09em] font-bold">{CATS[v.cat]}</span>
            <SpeakerButton text={v.kr} className="absolute top-3 right-3" />
            <div className="font-hero text-[1.85rem] font-extrabold mt-2 leading-tight pr-7">{v.kr}</div>
            <div className="font-mono text-[.82rem] text-red-deep mt-1 font-semibold">{v.rom}</div>
            <div className="mt-auto pt-2.5 border-t border-dashed border-line">
              <div className="font-bn font-bold text-[.98rem]">{v.bn}</div>
              <div className="font-bn text-[.8rem] text-ink-faint mt-0.5 italic">{v.en}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
