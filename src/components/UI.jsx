import { SpeakerIcon } from './Icons.jsx';
import { speak } from '../utils/speak.js';

// Small round button that speaks the given Korean text aloud.
export function SpeakerButton({ text, large = false, className = '', onClick }) {
  const size = large ? 'w-[34px] h-[34px]' : 'w-[26px] h-[26px]';
  const iconSize = large ? 'w-4 h-4' : 'w-[13px] h-[13px]';
  return (
    <button
      type="button"
      title="শুনুন"
      onClick={(e) => { e.stopPropagation(); if (onClick) onClick(); else speak(text); }}
      className={`${size} rounded-full bg-ink text-paper flex items-center justify-center flex-none
        transition hover:bg-red hover:scale-110 ${className}`}
    >
      <SpeakerIcon className={iconSize} />
    </button>
  );
}

// Small uppercase eyebrow label with a red dot, used above section headings.
export function Eyebrow({ children }) {
  return (
    <div className="font-mono uppercase tracking-[.16em] text-[.7rem] text-red font-bold inline-flex items-center gap-2">
      <span className="w-[7px] h-[7px] rounded-full bg-red inline-block" />
      {children}
    </div>
  );
}

// Generic card block, matches the .card style from the original design.
export function Card({ accent = false, className = '', children }) {
  return (
    <div className={`bg-paper-card border border-line rounded p-[18px] shadow-[0_10px_26px_-14px_rgba(28,23,18,.4)]
      ${accent ? 'border-l-4 border-l-red' : ''} ${className}`}>
      {children}
    </div>
  );
}

// Small pill/badge label.
export function Pill({ red = false, children }) {
  return (
    <span className={`inline-block text-[.72rem] font-mono px-[10px] py-[3px] rounded-full mr-1.5
      ${red ? 'bg-red text-white' : 'bg-ink text-paper'}`}>
      {children}
    </span>
  );
}

// Primary button, matches .btn.
export function Btn({ outline = false, small = false, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center gap-2 font-swiss font-bold rounded-sm transition
        ${small ? 'px-3 py-1.5 text-[.76rem]' : 'px-4 py-2.5 text-[.85rem]'}
        ${outline
          ? 'bg-transparent border border-ink text-ink hover:bg-ink hover:text-paper'
          : 'bg-ink text-paper border-none hover:bg-red hover:-translate-y-px'}
        ${className}`}
    />
  );
}
