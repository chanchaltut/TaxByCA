import React, { useEffect, useRef } from 'react';
import { STATS } from '../utils/constants';

const formatValue = (value, isDecimal) =>
  isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString('en-IN');

// `overlap` lifts the card over the bottom edge of a dark hero above it.
const StatsBar = ({ overlap = false }) => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const animateCounter = (el, target, isDecimal) => {
      const duration = 2200;
      const startTime = performance.now();
      const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        el.textContent = formatValue(eased * target, isDecimal);
        if (progress < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          countersRef.current.forEach((el, i) => {
            if (el) animateCounter(el, STATS[i].number, STATS[i].number % 1 !== 0);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative z-10 px-4 sm:px-6 lg:px-8 ${overlap ? '-mt-20 sm:-mt-24' : 'bg-surface py-16 sm:py-20'}`}
      aria-label="Company statistics"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 overflow-hidden rounded-4xl border border-line bg-white shadow-float lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group relative flex flex-col gap-4 p-6 sm:p-8 ${i % 2 === 0 ? 'border-r border-line' : ''} ${i < 2 ? 'border-b border-line lg:border-b-0' : ''} ${i === 1 ? 'lg:border-r' : ''}`}
              >
                <span className="icon-tile-soft h-11 w-11 text-[22px] transition-transform duration-500 group-hover:-translate-y-0.5">
                  <Icon />
                </span>
                <div>
                  <div className="flex items-baseline gap-0.5 text-[2.1rem] font-extrabold leading-none tracking-[-0.04em] text-ink sm:text-5xl">
                    <span ref={(el) => (countersRef.current[i] = el)} className="tabular-nums">0</span>
                    <span className="text-gradient-brand">{stat.suffix}</span>
                  </div>
                  <p className="mt-2 text-[13px] font-semibold text-ink-soft sm:text-sm">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
