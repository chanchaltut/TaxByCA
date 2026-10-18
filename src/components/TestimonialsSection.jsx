import React, { useState } from 'react';
import { PiCaretLeft, PiCaretRight, PiStarFill, PiQuotesFill } from 'react-icons/pi';
import { TESTIMONIALS } from '../utils/constants';
import { SectionHeading } from './ui';

const Stars = ({ count }) => (
  <div className="flex gap-0.5 text-amber-400" aria-label={`${count} out of 5 stars`}>
    {[...Array(count)].map((_, i) => <PiStarFill key={i} />)}
  </div>
);

const TestimonialCard = ({ t, highlighted }) => (
  <figure
    className={`card flex h-full flex-col p-7 sm:p-8 ${highlighted ? 'border-brand-200 shadow-lift' : ''}`}
  >
    <div className="flex items-center justify-between">
      <Stars count={t.rating} />
      <PiQuotesFill className="text-4xl text-brand-100" aria-hidden="true" />
    </div>
    <blockquote className="mt-5 flex-1 text-[15.5px] leading-relaxed text-ink">“{t.text}”</blockquote>
    <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 text-base font-bold text-white shadow-glow">
        {t.name[0]}
      </span>
      <div>
        <p className="text-sm font-bold text-ink">{t.name}</p>
        <p className="text-[13px] text-ink-mute">{t.role} · {t.city}</p>
      </div>
    </figcaption>
  </figure>
);

const NavButton = ({ onClick, label, children }) => (
  <button
    onClick={onClick}
    className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
    aria-label={label}
  >
    {children}
  </button>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const visible = [0, 1, 2].map((i) => TESTIMONIALS[(current + i) % total]);

  return (
    <section className="section-y bg-white" aria-label="Client testimonials">
      <div className="container-x">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>What Our <span className="accent-serif">Clients Say</span></>}
          description="Clients across India trust TaxByCA for their tax and compliance needs."
        />

        {/* Mobile: single card */}
        <div className="mt-12 md:hidden">
          <div key={current} className="animate-fade-in-up">
            <TestimonialCard t={TESTIMONIALS[current]} highlighted />
          </div>
        </div>

        {/* Desktop: three cards */}
        <div key={current} className="mt-14 hidden gap-6 md:grid md:grid-cols-3">
          {visible.map((t, i) => (
            <div key={`${t.id}-${i}`} className="animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              <TestimonialCard t={t} highlighted={i === 0} />
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <NavButton onClick={prev} label="Previous testimonial"><PiCaretLeft /></NavButton>
          <div className="flex gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrent(i)}
                className="flex h-6 items-center"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span className={`block h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-brand-600' : 'w-1.5 bg-brand-200 hover:bg-brand-300'}`} />
              </button>
            ))}
          </div>
          <NavButton onClick={next} label="Next testimonial"><PiCaretRight /></NavButton>
        </div>

        {/* Rating summary */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-line bg-surface px-6 py-3">
            <Stars count={5} />
            <span className="font-extrabold text-ink">4.8/5</span>
            <span className="text-sm text-ink-soft">from 6,211+ clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
