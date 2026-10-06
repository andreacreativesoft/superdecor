export function SiteMarquee() {
  return (
    <div className="border-y border-border bg-surface overflow-hidden">
      {/* Mobile: sliding marquee from right */}
      <div className="sm:hidden py-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex whitespace-nowrap animate-[marquee-usp_10s_linear_infinite] text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground w-max">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="px-6">Măsurători gratuite</span><span>·</span>
              <span className="px-6">Croitorie internă</span><span>·</span>
              <span className="px-6">Montaj profesional</span><span>·</span>
              <span className="px-6">Materiale europene</span><span>·</span>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop: static row */}
      <div className="hidden sm:flex max-w-[1240px] mx-auto px-[19px] sm:px-6 py-6 flex-wrap items-center justify-between gap-6 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span>Măsurători gratuite</span>
        <span>·</span>
        <span>Croitorie internă</span>
        <span>·</span>
        <span>Montaj profesional</span>
        <span>·</span>
        <span>Materiale europene</span>
      </div>
    </div>
  );
}
