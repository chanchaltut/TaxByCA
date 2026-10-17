import React from 'react';
import { PiPhoneCall, PiEnvelopeSimple, PiWhatsappLogo, PiSealCheckFill } from 'react-icons/pi';
import { TEAM, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';
import founderImg from '../assets/founder-nirali-bafna.webp';

const founder = TEAM[0];

const TeamSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="section-y bg-surface" aria-label="Meet our founder">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Team"
          title={<>Meet Our <span className="accent-serif">Founder</span></>}
          description="Deep expertise across all areas of taxation, compliance, and corporate law."
        />

        <article className="reveal mx-auto mt-14 grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-line bg-white shadow-float md:grid-cols-[0.95fr_1.05fr]">
          {/* Portrait */}
          <div className="relative isolate min-h-[400px] overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-900 sm:min-h-[460px]">
            <div className="absolute inset-0 -z-10" aria-hidden="true">
              <div className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-sky-glow/40 blur-3xl" />
              <div className="absolute left-1/2 top-[10%] h-[340px] w-[340px] -translate-x-1/2 rounded-full border border-white/15" />
              <div className="absolute left-1/2 top-[4%] h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-white/10" />
              <div className="noise absolute inset-0" />
            </div>
            <img
              src={founderImg}
              alt={`${founder.name}, Founder of TaxByCA`}
              width="800"
              height="1042"
              loading="lazy"
              className="absolute bottom-0 left-1/2 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_20px_40px_rgba(4,26,51,0.45)]"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-900/60 to-transparent" />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">Founder, TaxByCA</p>
            <h3 className="mt-3 flex items-center gap-2.5 text-4xl font-extrabold tracking-[-0.035em] sm:text-5xl">
              {founder.name}
              <PiSealCheckFill className="shrink-0 text-2xl text-brand-500" aria-label="Verified" />
            </h3>
            <p className="mt-2 font-serif text-2xl italic text-ink-soft">{founder.role}</p>

            <div className="my-7 h-px bg-gradient-to-r from-line via-line to-transparent" />

            <p className="text-[15px] leading-relaxed text-ink-soft">{founder.expertise}</p>
            <div className="mt-5">
              <span className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3.5 py-1.5 text-[13px] font-bold text-brand-600">
                {founder.experience} Experience
              </span>
            </div>

            <div className="mt-7 space-y-1">
              <a href={`tel:${founder.phone}`} className="group flex min-h-[44px] items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-brand-600">
                <span className="icon-tile-soft h-9 w-9 rounded-xl text-base"><PiPhoneCall /></span>
                +91 {founder.phone}
              </a>
              <a href={`mailto:${founder.email}`} className="group flex min-h-[44px] items-center gap-3 break-all text-[15px] font-medium text-ink transition-colors hover:text-brand-600">
                <span className="icon-tile-soft h-9 w-9 rounded-xl text-base"><PiEnvelopeSimple /></span>
                {founder.email}
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink('Hi! I want a free consultation with TaxByCA.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp flex-1"
              >
                <PiWhatsappLogo className="text-lg" />
                WhatsApp
              </a>
              <a href={`tel:${founder.phone}`} className="btn btn-dark flex-1">
                <PiPhoneCall className="text-lg" />
                Call Now
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TeamSection;
