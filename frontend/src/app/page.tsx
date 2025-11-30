import Link from 'next/link';
import { PatreonCTA } from '@/components/PatreonCTA';

export default function Page() {
  return (
    <section className="grid gap-10">
      <div className="rounded-2xl bg-white p-8 shadow-soft">
        <h1 className="mb-3 text-4xl font-extrabold text-sugarPink">SugarPaws3D</h1>
        <p className="mb-6 text-lg text-slate-700">Playful 3D model showcases tailored for 3D printing. Explore our models and support us on Patreon.</p>
        <div className="flex gap-3">
          <Link href="/models" className="btn-primary">Browse Models</Link>
          <PatreonCTA />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl bg-berryBlue/10 p-6">
          <h2 className="mb-2 text-2xl font-bold">Cute, Printable Models</h2>
          <p className="text-slate-700">Optimized for hobby printers with easy supports and kawaii-inspired designs.</p>
        </div>
        <div className="rounded-2xl bg-sugarPink/10 p-6">
          <h2 className="mb-2 text-2xl font-bold">Patreon Exclusives</h2>
          <p className="text-slate-700">Members get early access, exclusive drops, and behind-the-scenes updates.</p>
        </div>
      </div>
    </section>
  );
}