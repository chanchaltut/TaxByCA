import React from 'react';
import { PiLightningDuotone } from 'react-icons/pi';
import { PROCESS_STEPS } from '../utils/constants';
import useReveal from '../hooks/useReveal';
import { DarkBackdrop, SectionHeading } from './ui';

const ProcessSection = () => {
  const sectionRef = useReveal();

  return (
    <section ref={sectionRef} className="surface-dark section-y" aria-label="How it works">
      <DarkBackdrop />
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="How It Works"
          title={<>Get Your Professional Service in <span className="accent-serif-light">4 Simple Steps</span></>}
          description="We've made it simple to get professional services from anywhere in India."
        />

        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop) */}
          <div className="absolute left-[12%] right-[12%] top-[60px] hidden h-px bg-gradient-to-r from-transparent via-sky-glow/50 to-transparent lg:block" aria-hidden="true" />

          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="reveal ring-gradient group relative rounded-3xl bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07]"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-[28px] text-white shadow-glow">
                    <Icon />
                  </span>
                  <span className="font-serif text-6xl italic leading-none text-white/10 transition-colors duration-500 group-hover:text-sky-glow/30">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-brand-100/65">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.05] py-2 pl-2 pr-5 backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-glow/15 text-lg text-sky-glow">
              <PiLightningDuotone />
            </span>
            <p className="text-sm text-brand-100/70">
              <strong className="font-semibold text-white">Most services completed in 24–72 hours.</strong> No office visit needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
