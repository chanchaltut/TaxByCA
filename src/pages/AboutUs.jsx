import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import StatsBar from '../components/StatsBar';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | TaxByCA — Trusted Online Tax & Compliance Firm</title>
        <meta
          name="description"
          content="Learn about TaxByCA (https://taxbyca.in). We are a dedicated team of tax consultants and qualified professionals serving over 10,000+ clients across India with 100% online tax and compliance services."
        />
        <meta
          name="keywords"
          content="About TaxByCA, TaxByCA team, tax consultants India, online tax experts India, business compliance team, qualified tax professionals"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content="About Us | TaxByCA — Trusted Tax Professionals India" />
        <meta
          property="og:description"
          content="Discover TaxByCA. A dedicated team of qualified professionals offering 100% online taxation, GST, company registration, and compliance services across India."
        />
        <meta property="og:url" content="https://taxbyca.in/about" />
        <meta property="og:image" content="https://taxbyca.in/og-image-v2.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TaxByCA | Trusted Tax Professionals" />
        <meta
          name="twitter:description"
          content="Discover TaxByCA. A dedicated team of qualified professionals offering 100% online taxation and compliance services across India."
        />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v2.jpg" />

        <link rel="canonical" href="https://taxbyca.in/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Established in 2019 • 10,000+ Returns Filed</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-5 tracking-tight">
            About <span className="text-[#2563eb]">TaxByCA</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are an experienced team of qualified professionals and tax specialists dedicated to making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India.
          </p>
        </div>
      </section>

      {/* Page Content */}
      <AboutSection />
      <StatsBar />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default AboutUs;
