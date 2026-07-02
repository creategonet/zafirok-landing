export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="2.5"
        y="2.5"
        width="43"
        height="43"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        d="M15 17h18L15 31h18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

export function Logo({ sublabel }: { sublabel?: string }) {
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-9 w-9 text-sapphire-400" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-[0.3em] text-white">
          ZAFIROK
        </span>
        {sublabel && (
          <span className="mt-1 text-[0.6rem] font-medium tracking-[0.32em] text-sapphire-300/80 uppercase">
            {sublabel}
          </span>
        )}
      </span>
    </span>
  );
}
