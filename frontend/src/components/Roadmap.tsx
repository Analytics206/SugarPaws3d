export type Phase = {
  title: string;
  items: string[];
};

export function Roadmap({ phases }: { phases: Phase[] }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="mb-4 text-2xl font-extrabold">Roadmap</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-xl border border-berryBlue/20 p-4 bg-cream/40">
            <h3 className="mb-2 text-lg font-bold text-sugarPink">{phase.title}</h3>
            <ul className="list-disc pl-5 text-slate-700">
              {phase.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
