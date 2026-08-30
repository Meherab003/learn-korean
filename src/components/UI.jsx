import { SpeakerIcon } from './Icons.jsx';
import { speak } from '../utils/speak.js';

// Small round button that speaks the given Korean text aloud.
export function SpeakerButton({ text, large = false, className = '', onClick }) {
  const size = large ? 'w-[34px] h-[34px]' : 'w-[26px] h-[26px]';
  const iconSize = large ? 'w-6 h-6' : 'w-[20px] h-[20px]';
  return (
    <button
      type="button"
      title="শুনুন"
      onClick={(e) => { e.stopPropagation(); if (onClick) onClick(); else speak(text); }}
      className={`${size} rounded-full text-ink flex items-center justify-center flex-none
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
    <div className={`torn-paper p-5 relative ${className}`}>
      {accent && <span className="absolute top-3 left-3 w-2 h-2 rounded-full bg-red" />}
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
