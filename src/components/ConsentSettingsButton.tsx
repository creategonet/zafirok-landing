"use client";

/**
 * Redeschide panoul de consimțământ. Există ca retragerea alegerii să fie la
 * fel de simplă ca acordarea ei, cerință expresă a art. 7 alin. (3).
 */
export function ConsentSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("zafirok:open-consent"))}
      className={
        className ??
        "rounded-xl border border-line bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sapphire-300"
      }
    >
      Setări cookie-uri
    </button>
  );
}
