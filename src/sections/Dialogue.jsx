import { useState } from 'react';
import { DIALOGUES } from '../data/dialogues.js';
import { Eyebrow, SpeakerButton } from '../components/UI.jsx';
import { InkDivider, SceneIcon, FolkIllustration } from '../components/Icons.jsx';

export default function Dialogue() {
  const [current, setCurrent] = useState('intro');
  const d = DIALOGUES[current];

  return (
    <div>
      <Eyebrow>06 · 대화</Eyebrow>
      <h1 className="font-hero font-extrabold text-3xl mt-1">বাস্তব সংলাপ</h1>
      <div className="font-bn font-semibold text-ink-soft mt-0.5">
        একটি দৃশ্য বেছে নিন — কথোপকথনটি পুরোনো পুঁথির ভঙ্গিতে সাজানো হয়েছে
      </div>
      <InkDivider />

      <div className="grid gap-2.5 mt-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))' }}>
        {Object.keys(DIALOGUES).map((k) => {
          const dd = DIALOGUES[k];
          const on = k === current;
          return (
            <div
              key={k}
              onClick={() => setCurrent(k)}
              className={`flex flex-col items-center gap-2.5 py-4 px-2 rounded-sm cursor-pointer border text-center
                transition ${on ? 'bg-ink border-ink' : 'bg-paper-card border-line hover:border-red'}`}
            >
              <div className={`w-[52px] h-[52px] rounded-full border-2 flex items-center justify-center flex-none
                ${on ? 'border-paper' : 'border-ink bg-paper-card'}`} style={on ? { background: 'rgba(239,230,204,.08)' } : {}}>
                <SceneIcon name={dd.icon} />
              </div>
              <div className={`font-bn font-bold text-[.8rem] leading-tight ${on ? 'text-paper' : 'text-ink'}`}>
                {dd.label}
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative border-x border-line bg-paper-card px-5 py-6.5 shadow-xl mt-7 mb-7 torn-edge-top torn-edge-bottom">
        <div className="flex justify-center pb-4 pt-1.5">
          <FolkIllustration />
        </div>
        <div className="border-t-2 border-ink mt-1">
          {d.lines.map((l, i) => (
            <div key={i} className="grid gap-4 py-4 px-1 border-b border-dashed border-line"
              style={{ gridTemplateColumns: '96px 1fr' }}>
              <div className="font-mono text-[.68rem] uppercase tracking-[.07em] text-red font-bold pt-1">
                {l.who === 'A' ? 'আপনি' : 'অপর পক্ষ'}
              </div>
              <div>
                <div className="font-kr font-semibold text-[1.08rem] flex items-center gap-2.5 flex-wrap">
                  {l.kr} <SpeakerButton text={l.kr} />
                </div>
                <div className="font-mono text-[.78rem] text-ink-faint mt-1">{l.rom}</div>
                <div className="font-bn text-[.92rem] text-ink-soft mt-1">{l.bn}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
