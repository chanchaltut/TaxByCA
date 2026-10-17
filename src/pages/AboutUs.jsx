import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import StatsBar from '../components/StatsBar';
import TestimonialsSection from '../components/TestimonialsSection';
import CTABanner from '../components/CTABanner';
import { PageHero } from '../components/ui';

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
        <meta property="og:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About TaxByCA | Trusted Tax Professionals" />
        <meta
          name="twitter:description"
          content="Discover TaxByCA. A dedicated team of qualified professionals offering 100% online taxation and compliance services across India."
        />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v3.jpg" />

        <link rel="canonical" href="https://taxbyca.in/about" />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        eyebrow="Established in 2019 • 10,000+ Returns Filed"
        title={<>About <span className="accent-serif-light">TaxByCA</span></>}
        description="We are an experienced team of qualified professionals and tax specialists dedicated to making taxation, compliance, and corporate registrations seamless, 100% online, and accessible across India."
      />

      {/* Page Content */}
      <AboutSection showHeading={false} />
      <StatsBar />
      <TeamSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
};

export default AboutUs;
