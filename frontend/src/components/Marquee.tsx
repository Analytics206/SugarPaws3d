import type { CSSProperties } from 'react';
export type MarqueeProps = {
  items: string[];
  duration?: number;
  reverse?: boolean;
};

export function Marquee({ items, duration = 20, reverse = false }: MarqueeProps) {
  const trackStyle: CSSProperties = {
    animationDuration: `${duration}s`,
    animationDirection: reverse ? 'reverse' : 'normal',
  };

  const repeated = [...items, ...items];
  const interleaved = repeated.flatMap((item, idx) =>
    idx === 0 ? [item] : ['•', item]
  );

  return (
    <div className="marquee">
      <div className="marquee-track" style={trackStyle}>
        {interleaved.map((token, idx) => (
          token === '•' ? (
            <span key={`sep-${idx}`} className="mx-6 text-chocolate/30">•</span>
          ) : (
            <span key={`${token}-${idx}`} className="marquee-item">{token as string}</span>
          )
        ))}
      </div>
    </div>
  );
}
