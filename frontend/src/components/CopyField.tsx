'use client'

import { useState } from 'react';

export function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  }

  return (
    <div className="flex w-full items-center gap-2 rounded-xl border border-berryBlue/30 bg-white p-3 shadow-soft">
      <span className="truncate text-sm text-slate-700" title={value}>{value}</span>
      <button type="button" onClick={onCopy} className="ml-auto btn-secondary px-3 py-1">
        {copied ? 'Copied' : label}
      </button>
    </div>
  );
}
