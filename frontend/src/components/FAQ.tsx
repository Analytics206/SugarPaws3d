'use client'

import { useState } from 'react';

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQ({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="rounded-2xl bg-white p-6 shadow-soft">
      <h2 className="mb-4 text-2xl font-extrabold">Frequently Asked Questions</h2>
      <div className="divide-y divide-berryBlue/20">
        {items.map((it, idx) => {
          const open = openIndex === idx;
          return (
            <div key={it.question} className="py-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-left"
                onClick={() => setOpenIndex(open ? null : idx)}
                aria-expanded={open}
              >
                <span className="font-semibold text-slate-800">{it.question}</span>
                <span className="ml-4 text-sugarPink">{open ? '−' : '+'}</span>
              </button>
              {open && (
                <p className="mt-2 text-slate-700">{it.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
