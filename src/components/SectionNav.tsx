export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <div className="border-y border-border bg-surface sticky top-16 md:top-20 z-30 overflow-hidden">
      {/* Mobile: auto-scrolling marquee, pauses on touch */}
      <div className="sm:hidden py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex whitespace-nowrap animate-[marquee-usp_18s_linear_infinite] hover:[animation-play-state:paused] text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground w-max">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center shrink-0">
              {items.map((it, i) => (
                <span key={`${dup}-${it.id}`} className="flex items-center">
                  <a href={`#${it.id}`} className="px-6 hover:text-[#00657E] transition-colors">
                    {it.label}
                  </a>
                  {i < items.length - 1 && <span aria-hidden>·</span>}
                  {i === items.length - 1 && <span aria-hidden className="pr-6">·</span>}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: static row */}
      <div className="hidden sm:flex max-w-[1240px] mx-auto px-[19px] sm:px-6 py-6 flex-wrap items-center gap-x-6 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((it, i) => (
          <span key={it.id} className="flex items-center gap-x-6">
            <a href={`#${it.id}`} className="hover:text-[#00657E] transition-colors">
              {it.label}
            </a>
            {i < items.length - 1 && <span aria-hidden>·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
