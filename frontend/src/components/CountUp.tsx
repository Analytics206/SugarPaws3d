'use client'

import { useEffect, useState } from 'react';
import { animate, useMotionValue, useMotionValueEvent } from 'framer-motion';

export function CountUp({ to, duration = 1.2, className = '' }: { to: string; duration?: number; className?: string }) {
  const suffixMatch = to.match(/[^0-9.]+$/);
  const suffix = suffixMatch ? suffixMatch[0] : '';
  const target = parseFloat(to);
  const mv = useMotionValue(0);
  const [text, setText] = useState('0');

  useMotionValueEvent(mv, 'change', (v: number) => {
    setText(`${Math.round(v)}${suffix}`);
  });

  useEffect(() => {
    const controls = animate(mv, target, { duration, ease: 'easeOut' });
    return () => controls.stop();
  }, [mv, target, duration]);

  return <span className={className}>{text}</span>;
}
