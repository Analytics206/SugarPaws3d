import models from '@/data/models.json';
import { ModelCard } from '@/components/ModelCard';

export default function ModelsPage() {
  return (
    <section className="grid gap-6">
      <h1 className="text-3xl font-extrabold text-sugarPink">Model Gallery</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {models.map((m) => (
          <ModelCard key={m.slug} model={m as any} />
        ))}
      </div>
    </section>
  );
}