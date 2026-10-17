import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';
import { PageHero } from '../components/ui';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Terms & Conditions | TaxByCA</title>
        <meta name="description" content="Terms and Conditions for using TaxByCA online taxation, GST, and business compliance services." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content="Terms & Conditions | TaxByCA" />
        <meta property="og:description" content="Terms and Conditions for using TaxByCA online taxation, GST, and business compliance services." />
        <meta property="og:url" content="https://taxbyca.in/terms-conditions" />
        <meta property="og:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <link rel="canonical" href="https://taxbyca.in/terms-conditions" />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        eyebrow="Legal"
        title={<>Terms &amp; <span className="accent-serif-light">Conditions</span></>}
        description="Last Updated: October 2026 • TaxByCA (https://taxbyca.in)"
      />

      {/* Main Content */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="-mt-10 relative space-y-10 rounded-4xl border border-line bg-white p-6 shadow-float sm:p-10 md:p-14">
            
            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                1. Acceptance of Terms
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                By accessing and using the TaxByCA website (https://taxbyca.in) or availing any of our online taxation, GST, business registration, or compliance services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform or services.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                2. Scope of Online Professional Services
              </h2>
              <div className="space-y-3 text-ink-soft text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-ink">2.1 Service Nature:</strong> TaxByCA provides digital assistance, documentation, preparation, and electronic filing for Income Tax, GST, Company Incorporation, Audits, Project Reports, and associated corporate compliances.
                </p>
                <p>
                  <strong className="text-ink">2.2 Client Responsibility:</strong> Clients are responsible for providing authentic, complete, and accurate records (such as Form 16, bank statements, sales/purchase registers, and identification documents). TaxByCA prepares filings based on client-provided data and cannot be held liable for misstatements or omissions made by the client.
                </p>
                <p>
                  <strong className="text-ink">2.3 Government Fees:</strong> Quoted service pricing covers professional preparation and filing fees. Any statutory government fees, ROC stamp duty, MCA charges, or late filing penalties levied by government portals are payable at actuals.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                3. Confidentiality & Security
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                We maintain strict confidentiality concerning all financial, personal, and business records shared with us. Information shared via WhatsApp, email, or our web portals is used solely for the preparation and execution of authorized filings.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                4. Payments & Invoicing
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                Service fees must be settled prior to final electronic submission on government portals. Once government submission is finalized and ARN/acknowledgment is generated, fees are non-refundable as the service has been performed.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                5. Governing Law
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-extrabold tracking-tight text-ink sm:text-2xl">
                6. Contact Details
              </h2>
              <p className="text-ink-soft text-sm sm:text-base leading-relaxed mb-4">
                For questions regarding our terms of service, reach us directly:
              </p>
              <div className="rounded-2xl border border-line bg-surface p-5 space-y-1.5 text-sm">
                <p className="text-ink font-bold">TaxByCA</p>
                <p className="text-ink-soft">Website: <a href="https://taxbyca.in" className="font-semibold text-brand-600 hover:underline">https://taxbyca.in</a></p>
                <p className="text-ink-soft">Email: <a href={`mailto:${BRAND.email}`} className="font-semibold text-brand-600 hover:underline">{BRAND.email}</a></p>
                <p className="text-ink-soft">Phone / WhatsApp: <a href={`tel:${BRAND.phone}`} className="font-semibold text-brand-600 hover:underline">+91 {BRAND.phone}</a></p>
                <p className="text-ink-soft">Timings: {BRAND.timings}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
