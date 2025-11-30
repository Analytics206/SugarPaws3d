import Link from 'next/link';

type Model = {
  slug: string;
  name: string;
  image: string;
  description: string;
};

export function ModelCard({ model }: { model: Model }) {
  return (
    <div className="rounded-2xl bg-white shadow-soft overflow-hidden border border-berryBlue/20">
      <img src={model.image} alt={model.name} className="h-48 w-full object-cover" />
      <div className="p-4 grid gap-2">
        <h3 className="text-lg font-bold">{model.name}</h3>
        <p className="text-sm text-slate-600 overflow-hidden text-ellipsis">{model.description}</p>
        <div className="pt-2">
          <Link href={`/models/${model.slug}`} className="btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  );
}