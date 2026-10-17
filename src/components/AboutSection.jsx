import React from 'react';
import { PiCheckBold, PiWhatsappLogo, PiPhoneCall, PiGlobeHemisphereEastDuotone } from 'react-icons/pi';
import { ABOUT, BRAND, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

// `showHeading` is turned off on the About page, whose hero already carries the title.
const AboutSection = ({ showHeading = true }) => {
  const sectionRef = useReveal();

  return (
    <section id="about" ref={sectionRef} className="section-y overflow-hidden bg-white" aria-label="About TaxByCA">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

        {/* LEFT — Image composition */}
        <div className="reveal relative order-2 lg:order-1">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-4xl bg-brand-50 sm:-left-10 sm:-top-10 sm:h-56 sm:w-56" aria-hidden="true" />
          <div className="grid-lines-light absolute -bottom-10 -right-10 h-64 w-64" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-[2rem] shadow-float">
            <img
              src={ABOUT.image}
              alt="TaxByCA professional team at work"
              className="h-[340px] w-full object-cover transition-transform duration-[1200ms] ease-out-expo hover:scale-[1.04] sm:h-[460px] lg:h-[540px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
          </div>

          {/* Experience card */}
          <div className="absolute -bottom-8 left-4 rounded-3xl border border-line bg-white/95 p-5 shadow-lift backdrop-blur sm:-bottom-10 sm:left-8 sm:p-6">
            <div className="flex items-center gap-4">
              <span className="font-serif text-6xl italic leading-none text-gradient-brand sm:text-7xl">10+</span>
              <p className="text-sm font-bold leading-snug text-ink">Years of<br />Experience</p>
            </div>
          </div>

          {/* Online chip */}
          <div className="absolute -right-2 top-8 hidden animate-float items-center gap-3 rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:flex lg:-right-6">
            <span className="icon-tile h-10 w-10 text-xl"><PiGlobeHemisphereEastDuotone /></span>
            <div>
              <p className="text-sm font-bold text-ink">100% Online</p>
              <p className="text-xs text-ink-mute">Pan-India delivery</p>
            </div>
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="order-1 lg:order-2">
          {showHeading && (
            <div className="reveal">
              <div className="eyebrow">About Us</div>
              <h2 className="h-section mt-5">
                About TaxByCA <span className="accent-serif">Taxation Services</span>
              </h2>
            </div>
          )}

          <div className="reveal mt-7 space-y-4">
            <p className="lead">
              TaxByCA is a <strong className="font-semibold text-ink">team of qualified tax experts &amp; corporate professionals</strong> committed to providing accurate, reliable, and client-focused compliance services across India.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              We provide all professional services <strong className="font-semibold text-ink">100% online</strong> — GST registration &amp; returns, income tax filing, company incorporation, TDS compliance, ROC filings, bookkeeping, MSME registration, trademark, FSSAI, and more. Transparent pricing. Fast turnaround. Dedicated WhatsApp support.
            </p>
          </div>

          <ul className="reveal mt-9 grid gap-3 sm:grid-cols-2">
            {ABOUT.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl border border-line bg-surface/60 p-4 text-[14px] font-semibold leading-snug text-ink">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] text-white">
                  <PiCheckBold />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink('Hi! I want to book a free consultation with TaxByCA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-shine"
            >
              <PiWhatsappLogo className="text-lg" />
              Book Free Consultation
            </a>
            <a href={`tel:${BRAND.phone}`} className="btn btn-outline">
              <PiPhoneCall className="text-lg text-brand-600" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
