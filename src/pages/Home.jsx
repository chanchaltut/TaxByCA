import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ExpertCA from '../components/ExpertCA';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import CTABanner from '../components/CTABanner';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TaxByCA | Expert Tax, GST, ITR Filing & Business Registration Online India</title>
        <meta
          name="description"
          content="TaxByCA (https://taxbyca.in) is India's leading online tax & business compliance platform. Get 100% online GST registration & returns, ITR filing, Company Registration, Tax Audit, Project Reports, and TDS compliance by qualified professionals. Fast turnaround & dedicated WhatsApp support."
        />
        <meta
          name="keywords"
          content="TaxByCA, TaxByCA in, taxbyca.in, taxbyca, Tax By CA, GST registration online, ITR filing online, Income Tax Return filing India, company registration India, private limited company registration, tax audit online, TDS return filing, project report for bank loan, CMA data preparation, F&O tax filing, online tax consultant India, business compliance services"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TaxByCA" />
        <meta property="og:title" content="TaxByCA | Expert Tax, GST & Business Compliance Services Online" />
        <meta
          property="og:description"
          content="Get expert tax & business compliance services 100% online across India. GST registration, ITR filing, company registration, audits & project reports with dedicated WhatsApp support. 6,211+ satisfied clients."
        />
        <meta property="og:url" content="https://taxbyca.in/" />
        <meta property="og:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TaxByCA | Expert Tax, GST & Business Compliance Online" />
        <meta
          name="twitter:description"
          content="Expert tax & compliance services 100% online across India. GST, ITR, company registration, and audit by qualified professionals."
        />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v3.jpg" />

        <link rel="canonical" href="https://taxbyca.in/" />
      </Helmet>

      <Hero />
      <StatsBar overlap />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ExpertCA />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </>
  );
};

export default Home;
