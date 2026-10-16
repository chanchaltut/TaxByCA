import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BRAND } from '../utils/constants';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] pt-24">
      <Helmet>
        <title>Privacy Policy | TaxByCA</title>
        <meta name="description" content="Privacy Policy of TaxByCA. Learn how we safeguard your personal data, tax documents, and financial information." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content="Privacy Policy | TaxByCA" />
        <meta property="og:description" content="Privacy Policy of TaxByCA. Learn how we safeguard your personal data, tax documents, and financial information." />
        <meta property="og:url" content="https://taxbyca.in/privacy-policy" />
        <meta property="og:image" content="https://taxbyca.in/og-image.jpg" />
        <link rel="canonical" href="https://taxbyca.in/privacy-policy" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 border-b border-blue-100">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[#0f172a] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Privacy <span className="text-blue-600">Policy</span>
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
                1. Introduction
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                TaxByCA ("we," "our," or "us"), accessible via https://taxbyca.in, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal information and financial documents when you use our online taxation, GST, company registration, and business compliance services.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                2. Information We Collect
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <div>
                  <h3 className="text-[#0f172a] font-semibold mb-1">2.1 Personal & Business Information</h3>
                  <p>When you request our services or communicate with us, we may collect:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Contact details: Name, mobile number, email address, and billing address.</li>
                    <li>Identity documents: PAN card, Aadhaar card, Passport, or Voter ID required for tax and statutory filings.</li>
                    <li>Financial & tax records: Form 16, Form 26AS, AIS, bank statements, profit & loss statements, balance sheets, and GST invoices.</li>
                    <li>Corporate data: Incorporation details, director DINs, DSCs, and shareholding records.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#0f172a] font-semibold mb-1">2.2 Technical Information</h3>
                  <p>When you visit our website, we may collect non-identifiable technical data such as IP address, browser type, device information, and pages visited to ensure site security and optimize user experience.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-2 text-slate-700 text-sm sm:text-base">
                <li>To prepare, review, and file your Income Tax Returns (ITR) and GST returns on authorized government portals.</li>
                <li>To execute business incorporations, ROC filings, tax audits, project reports, and documentation.</li>
                <li>To communicate status updates, acknowledgments (ITR-V, ARN, GSTIN), and tax computation summaries.</li>
                <li>To respond to your inquiries via WhatsApp, phone, or email.</li>
                <li>To comply with statutory and legal obligations under Indian law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                4. Data Confidentiality & Sharing
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-3">
                We treat your financial and personal data with utmost confidentiality. <strong>We do not sell, rent, or trade your personal or financial data to any third party for marketing or advertising purposes.</strong>
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Information is submitted exclusively to official regulatory authorities (such as the Income Tax Department, GST Portal, Ministry of Corporate Affairs) solely to fulfill your requested filings.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                5. Data Security
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                We employ strict technical and organizational safeguards, including SSL encryption, secure document storage, and role-based access control, to prevent unauthorized access, alteration, or disclosure of your documents.
              </p>
            </div>

            <div>
              <h2 className="text-[#0f172a] text-xl sm:text-2xl font-bold mb-3 text-blue-600">
                6. Contact Information
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                If you have questions regarding this Privacy Policy or wish to request document deletion following completed service, please reach out to us:
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

export default PrivacyPolicy;
