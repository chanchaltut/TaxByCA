import React from 'react';
import { PiPhoneCall, PiArrowRight, PiWhatsappLogo, PiShieldCheckDuotone, PiGlobeHemisphereEastDuotone, PiTagDuotone, PiLightningDuotone } from 'react-icons/pi';
import { BRAND, waLink } from '../utils/constants';
import { DarkBackdrop } from './ui';

const trustPoints = [
  { icon: PiShieldCheckDuotone, text: 'Qualified Professionals' },
  { icon: PiGlobeHemisphereEastDuotone, text: '100% Online' },
  { icon: PiTagDuotone, text: 'Fixed Pricing' },
  { icon: PiLightningDuotone, text: 'Fast Turnaround' },
];

const CTABanner = () => (
  <section className="bg-white px-3 py-16 sm:px-5 sm:py-24" aria-label="Call to action">
    <div className="surface-dark mx-auto max-w-7xl rounded-[2.5rem] px-6 py-16 sm:px-12 sm:py-24">
      <DarkBackdrop />
      <div className="mx-auto max-w-3xl text-center">
        <div className="eyebrow-dark">Free Consultation — No Obligation</div>

        <h2 className="h-section mt-6 text-white">
          Ready to Simplify Your <span className="accent-serif-light">Tax Compliance?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-100/75 sm:text-lg">
          Talk to a qualified professional today. We'll assess your requirements, explain the process, and give you a fixed quote — no surprises, no hidden charges.
        </p>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {trustPoints.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-sm font-semibold text-white/80">
              <Icon className="text-lg text-sky-glow" />
              {text}
            </li>
          ))}
        </ul>

        <div className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={waLink('Hi! I want a free consultation with TaxByCA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-whatsapp btn-shine"
          >
            <PiWhatsappLogo className="text-xl" />
            WhatsApp for Free Consultation
          </a>
          <a href={`tel:${BRAND.phone}`} className="btn btn-lg btn-glass group">
            <PiPhoneCall className="text-lg" />
            Call Now: {BRAND.phone}
            <PiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTABanner;
