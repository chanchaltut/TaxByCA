import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiArrowUpRight, PiCheckBold, PiFireFill, PiWhatsappLogo, PiChatCircleDots } from 'react-icons/pi';
import { SERVICES, SERVICE_CATEGORIES, waLink } from '../utils/constants';
import useReveal from '../hooks/useReveal';
import { SectionHeading } from './ui';

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRef = useReveal([activeCategory]);

  const filtered = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  // The help card fills whatever is left of the last row in the 3-column grid
  const helpSpan = { 0: 'lg:col-span-3', 1: 'lg:col-span-2', 2: 'lg:col-span-1' }[filtered.length % 3];

  return (
    <section id="services" ref={sectionRef} className="section-y relative bg-surface" aria-label="Professional Services">
      <div className="grid-lines-light pointer-events-none absolute inset-x-0 top-0 h-[480px]" aria-hidden="true" />

      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Complete <span className="accent-serif">Professional Services</span></>}
          description="All tax compliance services delivered 100% online across India. Qualified professionals. Transparent pricing. Fast turnaround."
        />

        {/* Category segmented control */}
        <div className="mt-12 flex justify-center">
          <div
            className="scrollbar-none flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-soft"
            role="tablist"
            aria-label="Service categories"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`min-h-[42px] shrink-0 whitespace-nowrap rounded-full px-3.5 text-[12.5px] font-bold transition-all duration-300 xs:px-5 sm:px-6 sm:text-sm ${
                  activeCategory === cat
                    ? 'bg-ink text-white shadow-soft'
                    : 'text-ink-soft hover:bg-surface hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filtered.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="reveal card card-hover group flex flex-col overflow-hidden"
                style={{ transitionDelay: `${(index % 3) * 80}ms` }}
                aria-label={service.title}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-700 group-hover:bg-brand-100/80" aria-hidden="true" />

                <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="icon-tile h-14 w-14 text-[28px] transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-105">
                      <Icon />
                    </span>
                    {service.isPopular && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-600">
                        <PiFireFill className="text-amber-500" />
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold leading-snug tracking-tight">
                    <Link to={`/services/${service.slug}`} className="transition-colors hover:text-brand-600">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{service.shortDesc}</p>

                  {service.services.length > 0 && (
                    <ul className="mt-5 space-y-2.5">
                      {service.services.slice(0, 4).map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-[13.5px] font-medium text-ink/80">
                          <PiCheckBold className="mt-1 shrink-0 text-[11px] text-brand-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative mt-auto flex items-center justify-between gap-3 border-t border-line bg-surface/50 px-6 py-5 sm:px-7">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-mute">Starting from</p>
                    <p className="mt-0.5 text-lg font-extrabold tracking-tight text-ink">{service.startingPrice}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={waLink(service.whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      aria-label={`Get ${service.title} via WhatsApp`}
                    >
                      <PiWhatsappLogo className="text-base" />
                      Get Service
                    </a>
                    <Link
                      to={`/services/${service.slug}`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:border-brand-600 hover:bg-brand-600 hover:text-white"
                      aria-label={`View ${service.title} details`}
                    >
                      <PiArrowUpRight />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Help card */}
          <div className={`reveal surface-dark flex flex-col justify-between gap-8 rounded-3xl p-7 sm:col-span-2 sm:p-9 ${helpSpan}`}>
            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-brand-500/45 blur-3xl" aria-hidden="true" />
            <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl text-sky-glow">
                <PiChatCircleDots />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Not sure which service <span className="accent-serif-light">you need?</span>
              </h3>
            </div>
            <a
              href={waLink('Hi! I need help choosing the right professional service from TaxByCA.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp relative self-start"
            >
              <PiWhatsappLogo className="text-lg" />
              Ask Our Tax Expert
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
