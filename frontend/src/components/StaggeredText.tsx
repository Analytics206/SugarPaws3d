'use client'

import { motion } from 'framer-motion';

export function StaggeredText({
  text,
  className,
  delay = 0
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: delay }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.h2
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          className="inline-block"
          variants={item}
          transition={{ type: 'spring', stiffness: 100, damping: 18 }}
        >
          {w}
          {i < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </motion.h2>
  );
}
