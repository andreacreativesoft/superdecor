export function TrustBar() {
  const items = [
    "Măsurători gratuite",
    "Croitorie internă",
    "Montaj profesional",
    "Materiale europene",
  ];
  return (
    <div className="border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6 text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-6">
            <span>{item}</span>
            {i < items.length - 1 && <span className="hidden sm:inline">·</span>}
          </span>
        ))}
      </div>
    </div>
  );
}
