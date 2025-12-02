"use client";
import { CountUp } from '@/components/CountUp';
export type StatItem = {
  value: string;
  label: string;
  note?: string;
};

export function Modelomics({ stats, title = 'Modelomics' }: { stats: StatItem[]; title?: string }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-soft">
      <div className="mb-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-sugarPink sm:text-5xl">{title}</h2>
        <p className="text-slate-700">Understanding the SugarPaws3D experience</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-berryBlue/20 bg-cream/50 p-6">
            <div className="stat-value"><CountUp to={s.value} /></div>
            <div className="stat-label">{s.label}</div>
            {s.note ? <div className="text-sm text-slate-600">{s.note}</div> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
