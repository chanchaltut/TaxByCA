/**
 * Reusable Service Page Template
 * Used by all 14 service pages to display consistent layout
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { PiWhatsappLogo, PiPhoneCall, PiCheckBold, PiCaretRight, PiChatCircleDots } from 'react-icons/pi';
import { BRAND, waLink } from '../../utils/constants';
import { PageHero } from '../../components/ui';
import CTABanner from '../../components/CTABanner';
import FAQSection from '../../components/FAQSection';

const ServicePage = ({ service }) => {
  if (!service) return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <p className="text-ink-soft">Service not found.</p>
    </div>
  );

  const pageUrl = `https://taxbyca.in/services/${service.slug}`;
  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.title} | TaxByCA — 100% Online India</title>
        <meta
          name="description"
          content={`${service.shortDesc} Handled by qualified professionals. 100% online across India starting at ${service.startingPrice}.`}
        />
        <meta
          name="keywords"
          content={`${service.title}, ${service.shortTitle}, TaxByCA, online tax filing, tax consultant India, business compliance`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content={`${service.title} | TaxByCA`} />
        <meta property="og:description" content={service.shortDesc} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} | TaxByCA`} />
        <meta name="twitter:description" content={service.shortDesc} />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v3.jpg" />

        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.overview,
          "provider": {
            "@type": "AccountingService",
            "name": "TaxByCA",
            "url": "https://taxbyca.in"
          },
          "areaServed": "India",
          "serviceType": "Financial Advisory",
          "offers": {
            "@type": "Offer",
            "price": service.startingPrice.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://taxbyca.in" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://taxbyca.in/#services" },
            { "@type": "ListItem", "position": 3, "name": service.title, "item": pageUrl }
          ]
        })}</script>
      </Helmet>

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.overview}
        top={
          <nav className="mb-10 flex justify-center" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[12.5px] text-white/60 backdrop-blur">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <li aria-hidden="true"><PiCaretRight className="text-[10px]" /></li>
              <li><Link to="/#services" className="transition-colors hover:text-white">Services</Link></li>
              <li aria-hidden="true"><PiCaretRight className="text-[10px]" /></li>
              <li className="font-semibold text-white" aria-current="page">{service.shortTitle}</li>
            </ol>
          </nav>
        }
      >
        {/* Quick stats */}
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {[
            { label: 'Starting From', value: service.startingPrice },
            { label: 'Timeline', value: service.timeline },
            { label: 'Mode', value: '100% Online' },
            { label: 'By', value: 'Qualified Professional' },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink-950/60 px-4 py-4 backdrop-blur">
              <dt className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/45">{stat.label}</dt>
              <dd className="mt-1 text-[14px] font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={waLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-lg btn-whatsapp btn-shine">
            <PiWhatsappLogo className="text-xl" />
            Get Service via WhatsApp
          </a>
          <a href={`tel:${BRAND.phone}`} className="btn btn-lg btn-glass">
            <PiPhoneCall className="text-lg" />
            Call Now
          </a>
        </div>
      </PageHero>

      {/* Service Details */}
      {service.services.length > 0 && (
        <section className="section-y bg-surface">
          <div className="container-x max-w-5xl">
            <div className="text-center">
              <div className="eyebrow">What's Included</div>
              <h2 className="mt-5 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                What's Included in <span className="accent-serif">{service.title}</span>
              </h2>
            </div>
            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {service.services.map((item) => (
                <div key={item} className="card card-hover flex items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm text-white">
                    <PiCheckBold />
                  </span>
                  <span className="text-[15px] font-semibold leading-snug text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="border-y border-line bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-4">
            {Icon && <span className="icon-tile hidden h-14 w-14 text-3xl sm:inline-flex"><Icon /></span>}
            <div>
              <p className="text-sm font-semibold text-ink-mute">Ready to get started?</p>
              <p className="mt-0.5 text-lg font-bold text-ink">Message us on WhatsApp for a free quote on {service.title}</p>
            </div>
          </div>
          <a href={waLink(service.whatsappMsg)} target="_blank" rel="noopener noreferrer" className="btn btn-primary shrink-0">
            <PiChatCircleDots className="text-lg" />
            Get Free Quote
          </a>
        </div>
      </section>

      <FAQSection />
      <CTABanner />
    </>
  );
};

export default ServicePage;
