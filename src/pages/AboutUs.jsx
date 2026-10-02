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
        <title>About Us | TaxByCA</title>
        <meta name="description" content="TaxByCA is an team of qualified Chartered Accountants & professionals providing 100% online CA services across India." />
        <meta property="og:title" content="About Us | TaxByCA" />
        <link rel="canonical" href="https://taxbyca.in/about" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-6">
            About <span className="text-[#2563eb]">TaxByCA</span>
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We are an team of qualified CAs & professionals dedicated to making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India.
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
