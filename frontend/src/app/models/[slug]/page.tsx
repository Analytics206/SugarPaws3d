import models from '@/data/models.json';
import { notFound } from 'next/navigation';
import { PatreonCTA } from '@/components/PatreonCTA';

type Model = {
  slug: string;
  name: string;
  image: string;
  description: string;
  tags?: string[];
};

export function generateStaticParams() {
  return (models as Model[]).map((m) => ({ slug: m.slug }));
}

export default async function ModelDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const model = (models as Model[]).find((m) => m.slug === slug);
  if (!model) notFound();

  return (
    <article className="grid gap-6">
      <header>
        <h1 className="text-3xl font-extrabold text-sugarPink">{model.name}</h1>
        <p className="text-slate-700">{model.description}</p>
      </header>
      <div className="overflow-hidden rounded-2xl border border-berryBlue/20 bg-white shadow-soft">
        <img src={model.image} alt={model.name} className="w-full object-cover" />
      </div>
      {model.tags && model.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {model.tags.map((t) => (
            <li key={t} className="rounded-full bg-berryBlue/20 px-3 py-1 text-sm text-slate-700">{t}</li>
          ))}
        </ul>
      )}
      <div>
        <PatreonCTA />
      </div>
    </article>
  );
}