"use client";
export default function Monogram({
  className = "",
  dark = "#221d17",
  accent = "#b08d57",
}: {
  className?: string;
  dark?: string;
  accent?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M4 28 L13 3 L22 28" stroke={dark} strokeWidth="2.2" strokeLinecap="square" />
      <path d="M14 28 L21 10 L28 28" stroke={accent} strokeWidth="1.8" strokeLinecap="square" />
    </svg>
  );
}

export function BrandLockup({ light = false, className = "" }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-3 scale-150 origin-left ${className}`}>
      <Monogram className="h-7 w-7" dark={light ? "#f4eee4" : "#221d17"} accent={light ? "#b08d57" : "#9aa3a8"} />
      <span className="leading-none">
        <span className={`block text-xl font-light tracking-[0.01em] ${light ? "text-bone" : "text-ink"}`}>
          Modern<span className={light ? "text-bone/60" : "text-art"}>Art</span>
        </span>
        <span className={`mt-1 block text-[7.5px] font-medium uppercase tracking-[0.52em] ${light ? "text-bone/50" : "text-mink"}`}>
          Interior
        </span>
      </span>
    </span>
  );
}
