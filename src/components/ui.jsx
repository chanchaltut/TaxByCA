import React from 'react';

// Layered aurora + grid + noise background for dark surfaces.
export const DarkBackdrop = ({ className = '' }) => (
  <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden="true">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(27,111,207,0.45),transparent_60%)]" />
    <div className="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand-600/30 blur-[120px]" />
    <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-glow/15 blur-[120px]" />
    <div className="grid-lines absolute inset-0" />
    <div className="noise absolute inset-0" />
  </div>
);

// Eyebrow + title + optional description. `title` may contain an accent node.
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'} ${className}`}>
      {eyebrow && <div className={dark ? 'eyebrow-dark' : 'eyebrow'}>{eyebrow}</div>}
      <h2 className={`h-section mt-5 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`mt-5 text-base leading-relaxed sm:text-lg ${centered ? 'mx-auto max-w-2xl' : ''} ${dark ? 'text-brand-100/70' : 'text-ink-soft'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

// Dark hero used at the top of inner pages.
export const PageHero = ({ eyebrow, title, description, children, top }) => (
  <section className="surface-dark pb-20 pt-36 sm:pb-24 sm:pt-44">
    <DarkBackdrop />
    <div className="container-x relative">
      {top}
      <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
        {eyebrow && <div className="eyebrow-dark">{eyebrow}</div>}
        <h1 className="h-display mt-6 text-white">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-100/75 sm:text-lg">{description}</p>
        )}
        {children}
      </div>
    </div>
    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
  </section>
);
