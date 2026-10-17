import React from 'react';
import { PiSparkleFill } from 'react-icons/pi';
import { MARQUEE_ITEMS } from '../utils/constants';

// Thin fixed strip above the navbar — services ticker
const Marquee = () => {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="marquee-mask fixed inset-x-0 top-0 z-[100] h-8 overflow-hidden border-b border-white/10 bg-ink-950"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="marquee-track h-full items-center">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap px-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100/70"
          >
            <PiSparkleFill className="text-[9px] text-sky-glow" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
