"use client";
import Link from 'next/link';
import { PatreonCTA } from '@/components/PatreonCTA';
import { Marquee } from '@/components/Marquee';
import { FAQ, type FaqItem } from '@/components/FAQ';
import { Roadmap, type Phase } from '@/components/Roadmap';
import { CopyField } from '@/components/CopyField';
import { Modelomics, type StatItem } from '@/components/Modelomics';
import { motion } from 'framer-motion';
import { StaggeredText } from '@/components/StaggeredText';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
};
const spring = { type: 'spring', stiffness: 80, damping: 20 };

export default function Page() {
  const ticker = [
    'Kawaii models',
    'Printer-friendly supports',
    'Patreon exclusives',
    'Interactive previews soon',
  ];

  const stats: StatItem[] = [
    { value: '40%', label: 'Cute Factor', note: 'smiles per minute' },
    { value: '30%', label: 'Support Ease', note: 'less cleanup' },
    { value: '20%', label: 'Print Success', note: 'fewer retries' },
    { value: '5%', label: 'Warp Risk', note: 'lower is better' },
    { value: '3%', label: 'Post-Processing', note: 'quick finishing' },
    { value: '2%', label: 'Setup Time', note: 'fast to slice' },
  ];

  const phases: Phase[] = [
    { title: 'Phase 01', items: ['Core gallery', 'Patreon CTAs', 'Responsive layout'] },
    { title: 'Phase 02', items: ['3D previews (Three.js)', 'Search & filters', 'Model tags'] },
    { title: 'Phase 03', items: ['Auth & membership', 'Member-only drops', 'Download gating'] },
    { title: 'Phase 04', items: ['Analytics & SEO', 'Community features', 'CMS integration'] },
  ];

  const faqs: FaqItem[] = [
    {
      question: 'What printers are the models optimized for?',
      answer: 'Hobby FDM printers with 0.2mm layers by default; resin-ready variants are planned.',
    },
    {
      question: 'How do I get exclusive models?',
      answer: 'Join our Patreon for early access, behind-the-scenes, and exclusive drops.',
    },
    {
      question: 'Can I use these models commercially?',
      answer: 'Personal use is encouraged. Commercial licensing will be announced later.',
    },
    {
      question: 'Do you take requests?',
      answer: 'Yes! Patrons can vote on upcoming designs and submit ideas via Contact.',
    },
  ];

  return (
    <section className="grid gap-24">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white p-10 shadow-soft mx-auto w-full max-w-7xl"
        initial={fadeUp.hidden}
        whileInView={fadeUp.show}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...spring, delay: 0.05 }}
      >
        <motion.div
          className="hero-watermark"
          initial={{ y: -10 }}
          whileInView={{ y: 10 }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
        >
          <h1>SUGARPAWS3D</h1>
        </motion.div>
        <div className="relative grid gap-6">
          <motion.h1 className="text-[clamp(3rem,10vw,7rem)] font-extrabold tracking-tight text-sugarPink"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...spring }}
          >
            SugarPaws3D
          </motion.h1>
          <motion.p className="max-w-3xl text-xl text-slate-700"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            Playful, printable 3D models with kawaii vibes. Explore the gallery and support new releases.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3"
            initial={fade.hidden}
            whileInView={fade.show}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.12 }}
          >
            <Link href="/models" className="btn-primary">Browse Models</Link>
            <PatreonCTA />
          </motion.div>
        </div>
      </motion.div>

      <div className="mx-auto w-full max-w-7xl">
        <Marquee items={ticker} duration={15} />
      </div>

      <motion.div className="mx-auto w-full max-w-7xl"
        initial={fadeUp.hidden}
        whileInView={fadeUp.show}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ ...spring }}
      >
        <div className="grid gap-2">
          <StaggeredText text="You will print the way you love Paws." className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight text-sugarPink" />
        </div>
      </motion.div>

      <motion.div className="rounded-2xl border border-berryBlue/20 bg-cream/60 p-8 mx-auto w-full max-w-7xl"
        initial={fadeUp.hidden}
        whileInView={fadeUp.show}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...spring }}
      >
        <div className="grid gap-6">
          <div>
            <StaggeredText text="What’s SugarPaws3D?" className="text-[clamp(2.5rem,6.5vw,4.5rem)] font-extrabold tracking-tight text-sugarPink" />
          </div>
          <p className="max-w-4xl text-lg text-slate-700">SugarPaws3D is a growing collection of kawaii-styled, printer-friendly 3D models. We focus on clean silhouettes, approachable supports, and playful characters made for hobby printers.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/models" className="btn-primary">Explore Models</Link>
            <PatreonCTA />
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-auto w-full max-w-7xl">
        <motion.div className="rounded-2xl border border-berryBlue/20 bg-white p-6 shadow-soft text-center"
          initial={fadeUp.hidden}
          whileInView={fadeUp.show}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <div className="text-4xl font-extrabold text-sugarPink">★</div>
          <div className="mt-2 font-semibold">Cute, Printable</div>
          <p className="text-sm text-slate-700">Optimized for easy slicing and supports.</p>
        </motion.div>
        <motion.div className="rounded-2xl border border-berryBlue/20 bg-cream/60 p-6 text-center"
          initial={fadeUp.hidden}
          whileInView={fadeUp.show}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.05 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <div className="text-4xl font-extrabold text-sugarPink">★</div>
          <div className="mt-2 font-semibold">Growing Library</div>
          <p className="text-sm text-slate-700">New poses and characters planned.</p>
        </motion.div>
        <motion.div className="rounded-2xl border border-berryBlue/20 bg-white p-6 shadow-soft text-center"
          initial={fadeUp.hidden}
          whileInView={fadeUp.show}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <div className="text-4xl font-extrabold text-sugarPink">★</div>
          <div className="mt-2 font-semibold">Patreon Exclusives</div>
          <p className="text-sm text-slate-700">Early access and member-only drops.</p>
        </motion.div>
        <motion.div className="rounded-2xl border border-berryBlue/20 bg-cream/60 p-6 text-center"
          initial={fadeUp.hidden}
          whileInView={fadeUp.show}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ ...spring, delay: 0.15 }}
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <div className="text-4xl font-extrabold text-sugarPink">★</div>
          <div className="mt-2 font-semibold">Community</div>
          <p className="text-sm text-slate-700">Suggest ideas and vote on designs.</p>
        </motion.div>
      </div>

      <div className="grid gap-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={fadeUp.hidden}
          whileInView={fadeUp.show}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...spring }}
        >
          <Modelomics stats={stats} title="Modelomics" />
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          <motion.div className="rounded-2xl border border-berryBlue/20 bg-white p-6 shadow-soft"
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true }}
            transition={{ ...spring }}
          >
            <div className="text-2xl font-extrabold text-sugarPink">01</div>
            <div className="mt-2 font-semibold">Choose a Model</div>
            <p className="text-sm text-slate-700">Browse the gallery and find your favorite character.</p>
          </motion.div>
          <motion.div className="rounded-2xl border border-berryBlue/20 bg-cream/60 p-6"
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.05 }}
          >
            <div className="text-2xl font-extrabold text-sugarPink">02</div>
            <div className="mt-2 font-semibold">Support on Patreon</div>
            <p className="text-sm text-slate-700">Get early access, exclusives, and behind-the-scenes.</p>
          </motion.div>
          <motion.div className="rounded-2xl border border-berryBlue/20 bg-white p-6 shadow-soft"
            initial={fadeUp.hidden}
            whileInView={fadeUp.show}
            viewport={{ once: true }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <div className="text-2xl font-extrabold text-sugarPink">03</div>
            <div className="mt-2 font-semibold">Download & Print</div>
            <p className="text-sm text-slate-700">Slice, print, and share your adorable results.</p>
          </motion.div>
        </div>
        <CopyField label="Copy" value="https://www.patreon.com/SugarPaws3D" />
      </div>

      <motion.div className="mx-auto w-full max-w-7xl"
        initial={fadeUp.hidden}
        whileInView={fadeUp.show}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...spring }}
      >
        <Roadmap phases={phases} />
      </motion.div>
      <motion.div className="mx-auto w-full max-w-7xl"
        initial={fadeUp.hidden}
        whileInView={fadeUp.show}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ ...spring, delay: 0.05 }}
      >
        <FAQ items={faqs} />
      </motion.div>

      <motion.div className="rounded-2xl bg-sugarPink p-10 text-white shadow-soft mx-auto w-full max-w-7xl"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid gap-3">
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight">Join the Paws</h2>
          <p className="text-white/90">Let’s print something adorable together.</p>
          <div className="flex flex-wrap gap-3">
            <PatreonCTA />
            <Link href="/models" className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-2 font-semibold text-white shadow-soft transition hover:bg-white/20">Browse Models</Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}