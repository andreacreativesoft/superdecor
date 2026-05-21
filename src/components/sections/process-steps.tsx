const steps = [
  ["01", "Consultanță", "Discutăm proiectul, stilul și bugetul în showroom sau la tine."],
  ["02", "Măsurători", "Echipa vine la fața locului pentru măsurători exacte și gratuite."],
  ["03", "Croitorie", "Croim și coasem fiecare piesă în atelierul propriu."],
  [
    "04",
    "Montaj",
    "Instalăm sistemele de prindere — șine, galerii, mecanisme motorizate — și agățăm textilele cu finisaj impecabil. Curățăm după instalare. Tu te bucuri imediat de rezultat.",
  ],
] as const;

export function ProcessSteps() {
  return (
    <section id="proces" className="py-32 px-6 bg-surface border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16 gap-6">
          <h2 className="font-display italic leading-tight max-w-xl">
            <span className="block text-4xl md:text-5xl">Procesul Super Decor</span>
            <span className="block text-3xl md:text-4xl mt-1">de la idee la montaj</span>
          </h2>
          <span className="font-mono text-xs text-muted-foreground shrink-0">
            [ Procesul nostru ]
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {steps.map(([n, t, d]) => (
            <div key={n} className="border-t border-foreground pt-6">
              <span className="font-mono text-[11px] tracking-[0.2em] text-accent">{n}</span>
              <h3 className="text-xl font-display mt-3 mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
