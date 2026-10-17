import React, { useState } from 'react';
import { PiPlus, PiWhatsappLogo } from 'react-icons/pi';
import { FAQS, waLink } from '../utils/constants';

const FAQSection = () => {
  const [openId, setOpenId] = useState(1); // First FAQ open by default
  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="section-y bg-surface" aria-label="Frequently asked questions about professional services">
      {/* FAQPage JSON-LD (inline for AEO — also in index.html globally) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": FAQS.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })
      }} />

      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left — sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-36">
            <div className="eyebrow">FAQ</div>
            <h2 className="h-section mt-5">
              Frequently Asked <span className="accent-serif">Questions</span>
            </h2>
            <p className="lead mt-5">
              Everything you need to know about our professional services, pricing, and process.
            </p>

            <div className="surface-dark mt-10 hidden rounded-4xl p-7 lg:block">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-500/40 blur-3xl" aria-hidden="true" />
              <p className="relative text-lg font-bold text-white">Have more questions?</p>
              <p className="relative mt-1.5 text-[14px] text-brand-100/70">Our professional team is ready to help.</p>
              <a
                href={waLink('Hi! I have a question about TaxByCA services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp relative mt-6"
              >
                <PiWhatsappLogo className="text-lg" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Right — accordion */}
        <div className="space-y-3 lg:col-span-7">
          {FAQS.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-3xl border bg-white transition-all duration-500 ${
                  isOpen ? 'border-brand-200 shadow-lift' : 'border-line hover:border-brand-100'
                }`}
              >
                <button
                  className="flex min-h-[64px] w-full items-center gap-4 p-5 text-left sm:p-6"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-serif text-lg italic text-ink-mute tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`flex-1 text-[15px] font-bold leading-snug transition-colors sm:text-base ${isOpen ? 'text-brand-600' : 'text-ink'}`}>
                    {faq.q}
                  </span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500 ${
                    isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-surface text-ink'
                  }`}>
                    <PiPlus />
                  </span>
                </button>
                <div id={`faq-answer-${faq.id}`} className={`accordion-panel ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
                  <div>
                    <p className="px-5 pb-6 text-[15px] leading-relaxed text-ink-soft sm:pl-[4.25rem] sm:pr-16">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-6 text-center lg:hidden">
            <p className="mb-4 text-sm text-ink-soft">Have more questions? Our professional team is ready to help.</p>
            <a
              href={waLink('Hi! I have a question about TaxByCA services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <PiWhatsappLogo className="text-lg" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
