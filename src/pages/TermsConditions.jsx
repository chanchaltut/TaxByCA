import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24">
      <Helmet>
        <title>Terms & Conditions | TaxByCA</title>
        <meta name="description" content="Terms and Conditions for using TaxByCA online taxation, GST, and business compliance services." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content="Terms & Conditions | TaxByCA" />
        <meta property="og:description" content="Terms and Conditions for using TaxByCA online taxation, GST, and business compliance services." />
        <meta property="og:url" content="https://taxbyca.in/terms-conditions" />
        <meta property="og:image" content="https://taxbyca.in/og-image-v2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v2.jpg" />
        <link rel="canonical" href="https://taxbyca.in/terms-conditions" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[#0f172a] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Terms &amp; <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Last Updated: October 2026 • TaxByCA (https://taxbyca.in)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 md:p-12 space-y-8 border border-blue-100 shadow-sm">
            
            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                By accessing and using the TaxByCA website (https://taxbyca.in) or availing any of our online taxation, GST, business registration, or compliance services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our platform or services.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                2. Scope of Online Professional Services
              </h2>
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-[#0f172a]">2.1 Service Nature:</strong> TaxByCA provides digital assistance, documentation, preparation, and electronic filing for Income Tax, GST, Company Incorporation, Audits, Project Reports, and associated corporate compliances.
                </p>
                <p>
                  <strong className="text-[#0f172a]">2.2 Client Responsibility:</strong> Clients are responsible for providing authentic, complete, and accurate records (such as Form 16, bank statements, sales/purchase registers, and identification documents). TaxByCA prepares filings based on client-provided data and cannot be held liable for misstatements or omissions made by the client.
                </p>
                <p>
                  <strong className="text-[#0f172a]">2.3 Government Fees:</strong> Quoted service pricing covers professional preparation and filing fees. Any statutory government fees, ROC stamp duty, MCA charges, or late filing penalties levied by government portals are payable at actuals.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                3. Confidentiality & Security
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We maintain strict confidentiality concerning all financial, personal, and business records shared with us. Information shared via WhatsApp, email, or our web portals is used solely for the preparation and execution of authorized filings.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                4. Payments & Invoicing
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                TaxByCA issues proper GST-compliant tax invoices for all services. Service fees must be settled prior to final electronic submission on government portals. Once government submission is finalized and ARN/acknowledgment is generated, fees are non-refundable as the service has been performed.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                5. Governing Law
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                6. Contact Details
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                For questions regarding our terms of service, reach us directly:
              </p>
              <div className="bg-[#f8fafc] border border-blue-100 rounded-xl p-5 space-y-1.5 text-sm">
                <p className="text-[#0f172a] font-bold">TaxByCA</p>
                <p className="text-slate-600">Website: <a href="https://taxbyca.in" className="text-blue-600 hover:underline">https://taxbyca.in</a></p>
                <p className="text-slate-600">Email: <a href={`mailto:${BRAND.email}`} className="text-blue-600 hover:underline">{BRAND.email}</a></p>
                <p className="text-slate-600">Phone / WhatsApp: <a href={`tel:${BRAND.phone}`} className="text-blue-600 hover:underline">+91 {BRAND.phone}</a></p>
                <p className="text-slate-600">Timings: {BRAND.timings}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
