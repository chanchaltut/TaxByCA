import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PiWhatsappLogo, PiArrowRight, PiCaretLeft, PiCaretRight, PiArrowUp,
  PiSealCheckDuotone, PiUsersThreeDuotone, PiTrophyDuotone, PiGlobeHemisphereEastDuotone, PiStarFill,
} from 'react-icons/pi';
import { HERO_SLIDES } from '../utils/constants';
import { DarkBackdrop } from './ui';

const SLIDE_MS = 6500;

const trustBadges = [
  { icon: PiSealCheckDuotone, text: 'Qualified Professionals' },
  { icon: PiUsersThreeDuotone, text: '10,000+ Clients' },
  { icon: PiTrophyDuotone, text: '10+ Years' },
  { icon: PiGlobeHemisphereEastDuotone, text: '100% Online' },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const touchStartX = useRef(null);

  // Auto-advance (restarts whenever the slide changes)
  useEffect(() => {
    if (isPaused) return undefined;
    const t = setTimeout(() => setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length), SLIDE_MS);
    return () => clearTimeout(t);
  }, [currentSlide, isPaused]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index) => setCurrentSlide((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) (diff > 0 ? nextSlide() : prevSlide());
    touchStartX.current = null;
  };

  const handleCTA = (link) => {
    if (!link) return;
    if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:')) {
      window.open(link, link.startsWith('http') ? '_blank' : '_self');
    } else if (link.startsWith('/#')) {
      document.querySelector(link.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(link);
    }
  };

  const slide = HERO_SLIDES[currentSlide];
  const primaryIsWhatsApp = slide.ctaLink.includes('wa.me');

  return (
    <>
      <section
        id="home"
        className="surface-dark flex min-h-[100svh] items-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Hero section"
        aria-roledescription="carousel"
      >
        {/* Crossfading slide photography, tinted to brand */}
        <div className="absolute inset-0 -z-20" aria-hidden="true">
          {HERO_SLIDES.map((s, i) => (
            <img
              key={s.id}
              src={s.backgroundImage}
              alt=""
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : 'auto'}
              className={`absolute inset-0 h-full w-full object-cover grayscale transition-all duration-[1600ms] ease-out-expo ${
                i === currentSlide ? 'scale-100 opacity-[0.16]' : 'scale-105 opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60" />
        </div>
        <DarkBackdrop />

        <div className="container-x relative grid items-center gap-16 pb-52 pt-40 sm:pt-48 lg:grid-cols-12 lg:pb-60">
          {/* ── Copy ── */}
          <div className="lg:col-span-7" aria-live="polite">
            <div key={slide.id}>
              {slide.badge && (
                <div className="eyebrow-dark animate-fade-in-up">{slide.badge}</div>
              )}

              <h1 className="h-display mt-7 text-white animate-fade-in-up [animation-delay:80ms]">
                {slide.heading}
                <span className="accent-serif-light block pt-1 text-[1.08em] leading-[1.05]">{slide.subHeading}</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-100/75 animate-fade-in-up [animation-delay:160ms] sm:text-xl">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-col gap-3 animate-fade-in-up [animation-delay:240ms] sm:flex-row sm:items-center">
                <button
                  onClick={() => handleCTA(slide.ctaLink)}
                  className={`btn btn-lg btn-shine ${primaryIsWhatsApp ? 'btn-whatsapp' : 'btn-primary'}`}
                >
                  {primaryIsWhatsApp && <PiWhatsappLogo className="text-xl" />}
                  {slide.ctaText}
                  {!primaryIsWhatsApp && <PiArrowRight className="text-lg" />}
                </button>
                <button onClick={() => handleCTA(slide.ctaSecondaryLink)} className="btn btn-lg btn-glass">
                  {slide.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Trust row */}
            <ul className="mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-8 sm:grid-cols-4">
              {trustBadges.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-[13px] font-semibold text-white/85">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-lg text-sky-glow">
                    <Icon />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Brand emblem visual ── */}
          <div className="relative hidden lg:col-span-5 lg:block" aria-hidden="true">
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-white/10" />
              <div className="absolute inset-[12%] animate-spin-slow rounded-full border border-white/10">
                <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-glow shadow-[0_0_20px_4px_rgba(91,180,255,0.7)]" />
              </div>
              <div className="absolute inset-[24%] rounded-full bg-brand-500/20 blur-3xl" />
              <div className="ring-gradient absolute inset-[26%] flex items-center justify-center rounded-full bg-white/[0.06] backdrop-blur-md">
                <div className="flex h-[78%] w-[78%] items-center justify-center rounded-full bg-white shadow-float">
                  <img src="/favicon-192.png" alt="" className="h-[70%] w-[70%] object-contain" />
                </div>
              </div>

              {/* Floating chips */}
              <div className="ring-gradient absolute left-[-4%] top-[16%] animate-float rounded-2xl bg-ink-900/70 px-4 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => <PiStarFill key={i} className="text-xs" />)}
                </div>
                <p className="mt-1 text-sm font-bold text-white">4.9 / 5 <span className="font-medium text-white/60">client rating</span></p>
              </div>
              <div className="ring-gradient absolute bottom-[12%] right-[-6%] animate-float-slow rounded-2xl bg-ink-900/70 px-4 py-3 backdrop-blur-xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-glow">Since</p>
                <p className="font-serif text-3xl italic leading-none text-white">2019</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div className="absolute inset-x-0 bottom-28 sm:bottom-32">
          <div className="container-x flex items-center gap-5">
            <span className="font-serif text-lg italic text-white/80 tabular-nums">
              0{currentSlide + 1}<span className="text-white/35"> / 0{HERO_SLIDES.length}</span>
            </span>
            <div className="flex flex-1 gap-2 sm:max-w-xs">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goToSlide(i)}
                  className="group relative h-6 flex-1"
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === currentSlide}
                >
                  <span className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 overflow-hidden rounded-full bg-white/15 group-hover:bg-white/25">
                    {i < currentSlide && <span className="absolute inset-0 bg-white/60" />}
                    {i === currentSlide && (
                      <span
                        key={`${currentSlide}-${isPaused}`}
                        className="slide-progress absolute inset-0 bg-gradient-to-r from-sky-glow to-white"
                        style={{ '--slide-duration': `${SLIDE_MS}ms`, animationPlayState: isPaused ? 'paused' : 'running' }}
                      />
                    )}
                  </span>
                </button>
              ))}
            </div>
            <div className="ml-auto hidden gap-2 sm:flex">
              <button onClick={prevSlide} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15" aria-label="Previous slide">
                <PiCaretLeft />
              </button>
              <button onClick={nextSlide} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/15" aria-label="Next slide">
                <PiCaretRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-24 right-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/90 text-brand-600 shadow-lift backdrop-blur transition-all duration-500 ease-out-expo hover:-translate-y-0.5 sm:right-6 ${
          showScrollTop ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-4 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <PiArrowUp />
      </button>
    </>
  );
};

export default Hero;
