export default function TopBar({ progress, onMenuOpen }) {
  return (
    <div className="sticky top-0 z-[60] bg-paper border-b-2 border-ink">
      <div className="flex items-center justify-between px-4 sm:px-10 py-3.5">
        <div className="font-hero font-extrabold text-[1.3rem] flex items-baseline gap-2">
          한글<span className="text-red">·</span>첫걸음
          <span className="font-mono text-[.62rem] text-ink-faint tracking-[.1em]">KOREAN·BN</span>
        </div>
        <button
          onClick={onMenuOpen}
          className="flex items-center gap-2.5 bg-red text-white border-none px-[18px] py-2.5 rounded-full
            cursor-pointer font-swiss font-extrabold text-[.82rem] tracking-[.06em] shadow-lg
            transition hover:bg-red-deep hover:-translate-y-px"
        >
          MENU
          <span className="flex flex-col gap-[3px]">
            <span className="w-4 h-0.5 bg-white block" />
            <span className="w-4 h-0.5 bg-white block" />
          </span>
        </button>
      </div>
      <div className="h-[3px] bg-paper-2">
        <div className="h-full bg-red transition-[width] duration-500" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
