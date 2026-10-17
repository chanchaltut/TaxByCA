import React from 'react';
import { Link } from 'react-router-dom';
import { PiArrowRight, PiTrophyDuotone, PiWhatsappLogo } from 'react-icons/pi';
import { WHY_CHOOSE_US, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';

// First four go in the bento grid; the fifth becomes the dark banner.
const gridFeatures = WHY_CHOOSE_US.slice(0, 4);
const bannerFeature = WHY_CHOOSE_US[4];

const ExpertCA = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-y bg-white" aria-label="Why choose TaxByCA">
      <div className="container-x">
        {/* Header */}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <div className="eyebrow">Why Choose Us</div>
            <h2 className="h-section mt-5">
              Why <span className="accent-serif">TaxByCA</span> is India's Trusted Compliance Partner
            </h2>
          </div>
          <div className="reveal lg:pb-2">
            <p className="lead">
              We combine professional expertise with a completely online, hassle-free delivery model.
              No office visits. No hidden fees. Just accurate, fast professional services — delivered where you are.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink('Hi! I want to get started with TaxByCA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-shine group"
              >
                Get Started
                <PiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
          </div>
        </div>

        {/* Bento */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:grid-rows-[auto_auto_auto]">
          <div className="reveal relative min-h-[360px] overflow-hidden rounded-4xl lg:row-span-3">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&auto=format&fit=crop"
              alt="Professional working on tax documents"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="icon-tile h-12 w-12 text-2xl"><PiTrophyDuotone /></span>
                <div>
                  <p className="font-bold text-white">TaxByCA — Expert Professional Services</p>
                  <p className="mt-0.5 text-[13px] text-white/70">Serving 10,000+ clients across India</p>
                </div>
              </div>
            </div>
          </div>

          {gridFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="reveal card card-hover group p-7"
                style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              >
                <span className="icon-tile-soft h-12 w-12 text-2xl transition-all duration-500 group-hover:border-brand-600 group-hover:bg-brand-600 group-hover:bg-none group-hover:text-white">
                  <Icon />
                </span>
                <h3 className="mt-6 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{feature.desc}</p>
              </div>
            );
          })}

          {bannerFeature && (
            <div className="reveal surface-dark relative flex flex-col gap-6 rounded-4xl p-7 sm:flex-row sm:items-center sm:justify-between lg:col-span-2">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/40 blur-3xl" aria-hidden="true" />
              <div className="relative flex items-start gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-2xl text-sky-glow">
                  <bannerFeature.icon />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white">{bannerFeature.title}</h3>
                  <p className="mt-1.5 max-w-md text-[14px] leading-relaxed text-brand-100/70">{bannerFeature.desc}</p>
                </div>
              </div>
              <a
                href={waLink('Hi! I need help from TaxByCA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp relative shrink-0"
              >
                <PiWhatsappLogo className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExpertCA;
