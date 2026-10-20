import React from 'react';
import { Link } from 'react-router-dom';
import {
  PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiWhatsappLogo,
  PiPhoneCall, PiEnvelopeSimple, PiMapPin, PiClock, PiArrowUpRight,
} from 'react-icons/pi';
import { BRAND } from '../utils/constants';
import TaxByCALogoLight from '../assets/TaxByCALogo-light.webp';

// ── All hrefs verified against App.jsx routes ──
const quickLinks = [
  { name: 'Home',               href: '/' },
  { name: 'Services',           href: '/#services' },
  { name: 'About Us',           href: '/about' },
  { name: 'Blog',               href: '/blog' },
  { name: 'Contact Us',         href: '/contact' },
  { name: 'Privacy Policy',     href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const serviceLinks = [
  { name: 'Income Tax Return Filing',   href: '/services/income-tax' },
  { name: 'GST Registration & Returns', href: '/services/gst-services' },
  { name: 'Audit',                      href: '/services/tax-audit' },
  { name: 'TDS Return & Compliance',    href: '/services/tds-compliance' },
  { name: 'Business Registration',      href: '/services/business-registration' },
  { name: 'ROC / Corporate Compliance', href: '/services/roc-compliance' },
  { name: 'Project Reports & CMA Data', href: '/services/project-reports' },
  { name: 'Certificates',               href: '/services/ca-certificates' },
  { name: 'Loan Documentation',         href: '/services/loan-documentation' },
  { name: 'F&O / Capital Gain Tax',     href: '/services/fno-capital-gain' },
];

const socialLinks = [
  { icon: PiFacebookLogo,  href: BRAND.social.facebook,  label: 'Facebook'  },
  { icon: PiWhatsappLogo,  href: BRAND.social.whatsapp,  label: 'WhatsApp'  },
  { icon: PiInstagramLogo, href: BRAND.social.instagram, label: 'Instagram' },
  { icon: PiLinkedinLogo,  href: BRAND.social.linkedin,  label: 'LinkedIn'  },
];

const contactItems = [
  { icon: PiMapPin,         text: BRAND.address },
  { icon: PiClock,          text: BRAND.timings },
  { icon: PiPhoneCall,      text: `+91 ${BRAND.phone}`, href: `tel:${BRAND.phone}` },
  { icon: PiEnvelopeSimple, text: BRAND.email,          href: `mailto:${BRAND.email}` },
];

const FooterHeading = ({ children }) => (
  <h3 className="mb-6 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-200/60">{children}</h3>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="group inline-flex items-center gap-1.5 py-1 text-[14px] text-white/70 transition-colors hover:text-white">
      {children}
      <PiArrowUpRight className="-translate-x-1 text-xs opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]" aria-hidden="true" />
      <div className="noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="container-x pb-10 pt-20 sm:pt-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-block" aria-label="TaxByCA Home">
              <img src={TaxByCALogoLight} alt="TaxByCA" className="h-14 w-auto" loading="lazy" />
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/60">
              <span className="font-semibold text-white">Team of qualified professionals</span> providing
              GST, ITR, company registration &amp; all compliance services 100% online across India.
            </p>

            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-600 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-1.5">
              {quickLinks.map((l) => <FooterLink key={l.name} to={l.href}>{l.name}</FooterLink>)}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-1.5">
              {serviceLinks.map((l) => <FooterLink key={l.name} to={l.href}>{l.name}</FooterLink>)}
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <FooterHeading>Contact Us</FooterHeading>
            <ul className="space-y-4">
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text} className="flex items-start gap-3 text-[14px] text-white/70">
                  <Icon className="mt-0.5 shrink-0 text-lg text-sky-glow" />
                  {href
                    ? <a href={href} className="break-all transition-colors hover:text-white">{text}</a>
                    : <span>{text}</span>}
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* Oversized wordmark */}
        <p
          className="pointer-events-none mt-20 select-none bg-gradient-to-b from-white/[0.12] to-transparent bg-clip-text text-center text-[22vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-transparent lg:text-[15rem]"
          aria-hidden="true"
        >
          TaxByCA
        </p>

        {/* Bottom bar */}
        <div className="mt-4 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} TaxByCA. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link to="/terms-conditions" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
            <span>
              Developed by{' '}
              <a href="https://codehyphen.in" target="_blank" rel="noopener noreferrer" className="font-semibold text-white/70 transition-colors hover:text-white">
                Code Hyphen
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
