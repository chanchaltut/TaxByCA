import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaChevronLeft, FaChevronRight, FaArrowUp, FaPhone } from 'react-icons/fa';
import { HERO_SLIDES, BRAND } from '../utils/constants';

const trustBadges = [
  { icon: 'ri-trophy-line', text: 'Qualified Professionals' },
  { icon: 'ri-star-smile-line', text: '10000+ Clients' },
  { icon: 'ri-flashlight-line', text: '10+ Years' },
  { icon: 'ri-global-line', text: '100% Online' },
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying]);

  // Scroll to top button
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };
  const nextSlide = () => goToSlide((currentSlide + 1) % HERO_SLIDES.length);
  const prevSlide = () => goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    touchStartX.current = null;
  };

  const handleCTA = (link) => {
    if (!link) return;
    if (link.startsWith('http') || link.startsWith('tel:') || link.startsWith('mailto:')) {
      window.open(link, link.startsWith('http') ? '_blank' : '_self');
    } else if (link.startsWith('/#')) {
      const sectionId = link.replace('/', '');
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      } else {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link);
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dot-bg"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-label="Hero section"
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />

        {/* Background image (blurred, grayscale overlay) */}
        <div className="absolute inset-0 opacity-10">
          <img
            src={slide.backgroundImage}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 text-center">

          {/* Trust badge pill */}
          <div className="inline-flex items-center gap-2 bg-[#2563eb]/10 border border-blue-200 text-[#2563eb] text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 sm:mb-8 animate-fadeInUp">
            <><i className="ri-trophy-line mr-2"></i> {slide.badge}</>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-[1.1] mb-4 sm:mb-6 animate-fadeInUp animation-delay-100">
            {slide.heading}{' '}
            <span className="text-[#2563eb]">{slide.subHeading}</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fadeInUp animation-delay-200">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 animate-fadeInUp animation-delay-300">
            <button
              onClick={() => handleCTA(slide.ctaLink)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#20b858] text-white px-7 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:shadow-green-900/30 hover:-translate-y-0.5 min-h-[52px]"
            >
              <FaWhatsapp className="text-lg" />
              {slide.ctaText}
            </button>
            <button
              onClick={() => handleCTA(slide.ctaSecondaryLink)}
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-[#0f172a] px-7 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 min-h-[52px]"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Trust Badges Row */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap animate-fadeInUp animation-delay-400">
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 bg-[#f8fafc]/80 border border-blue-100 rounded-full px-3 sm:px-4 py-1.5 sm:py-2"
              >
                <i className={`text-sm sm:text-base text-[#2563eb] ${badge.icon}`}></i>
                <span className="text-[#0f172a] text-[11px] sm:text-xs font-semibold whitespace-nowrap">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Navigation Arrows (desktop only) */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f8fafc]/70 border border-blue-100 text-[#0f172a] hover:bg-[#2563eb] hover:text-[#0f172a] hover:border-[#2563eb] transition-all duration-200"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f8fafc]/70 border border-blue-100 text-[#0f172a] hover:bg-[#2563eb] hover:text-[#0f172a] hover:border-[#2563eb] transition-all duration-200"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'bg-[#2563eb] w-8' : 'bg-white/30 w-2 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ═══ FLOATING WHATSAPP BUTTON (LEFT) ═══ */}
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I need professional services from TaxByCA.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-4 sm:left-6 z-40 group hidden sm:flex"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-40 scale-100 group-hover:opacity-0 transition-opacity" />
        <span className="relative flex items-center gap-2.5 bg-[#25d366] hover:bg-[#20b858] text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-green-900/30 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5">
          <FaWhatsapp className="text-xl" />
          <span>WhatsApp Us</span>
        </span>
      </a>

      {/* ═══ FLOATING CALL BUTTON (RIGHT) ═══ */}
      <a
        href={`tel:${BRAND.phone}`}
        className="fixed bottom-6 right-4 sm:right-6 z-40 group hidden sm:flex"
        aria-label={`Call ${BRAND.phone}`}
      >
        <span className="absolute inset-0 rounded-full bg-[#2563eb] animate-ping opacity-30 group-hover:opacity-0 transition-opacity" />
        <span className="relative flex items-center gap-2.5 bg-[#2563eb] hover:bg-[#1e40af] text-white pl-4 pr-5 py-3 rounded-full shadow-xl shadow-blue-900/20 font-bold text-sm transition-all duration-200 hover:-translate-y-0.5">
          <FaPhone className="text-base" />
          <span>Call Now</span>
        </span>
      </a>

      {/* ═══ SCROLL TO TOP BUTTON ═══ */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-20 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#f8fafc] border border-blue-100 hover:border-[#2563eb] text-[#0f172a] hover:text-[#2563eb] flex items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
          showScrollTop ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </>
  );
};

export default Hero;
