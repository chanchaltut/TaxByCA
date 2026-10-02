import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.png';

// ── All hrefs verified against App.jsx routes ──
const quickLinks = [
  { name: 'Home',              href: '/' },
  { name: 'Services',          href: '/#services' },
  { name: 'About Us',          href: '/about' },
  { name: 'Blog',              href: '/blog' },
  { name: 'Contact Us',        href: '/contact' },
  { name: 'Privacy Policy',    href: '/privacy-policy' },
  { name: 'Terms & Conditions', href: '/terms-conditions' },
];

const serviceLinks = [
  { name: 'Income Tax Return Filing',    href: '/services/income-tax' },
  { name: 'GST Registration & Returns',  href: '/services/gst-services' },
  { name: 'Tax Audit & Statutory Audit', href: '/services/tax-audit' },
  { name: 'TDS Return & Compliance',     href: '/services/tds-compliance' },
  { name: 'Business Registration',       href: '/services/business-registration' },
  { name: 'ROC / Corporate Compliance',  href: '/services/roc-compliance' },
  { name: 'Project Reports & CMA Data',  href: '/services/project-reports' },
  { name: 'Certificates',               href: '/services/ca-certificates' },
  { name: 'Loan Documentation',          href: '/services/loan-documentation' },
  { name: 'F&O / Capital Gain Tax',      href: '/services/fno-capital-gain' },
];

const socialLinks = [
  { icon: FaFacebookF,  href: BRAND.social.facebook,  label: 'Facebook'  },
  { icon: FaWhatsapp,   href: BRAND.social.whatsapp,  label: 'WhatsApp'  },
  { icon: FaInstagram,  href: BRAND.social.instagram, label: 'Instagram' },
  { icon: FaLinkedinIn, href: BRAND.social.linkedin,  label: 'LinkedIn'  },
];

const contactItems = [
  {
    icon: <FaMapMarkerAlt className="text-[#2563eb] text-base flex-shrink-0 mt-0.5" />,
    content: <span className="text-slate-600 text-sm leading-relaxed">{BRAND.address}</span>,
  },
  {
    icon: <i className="ri-time-line text-[#2563eb] text-base flex-shrink-0 mt-0.5" />,
    content: <span className="text-slate-600 text-sm leading-relaxed">{BRAND.timings}</span>,
  },
  {
    icon: <FaPhone className="text-[#2563eb] text-sm flex-shrink-0 mt-0.5" />,
    content: (
      <a href={`tel:${BRAND.phone}`} className="footer-link text-slate-600 text-sm hover:text-[#2563eb] transition-colors">
        +91 {BRAND.phone}
      </a>
    ),
  },
  {
    icon: <FaEnvelope className="text-[#2563eb] text-sm flex-shrink-0 mt-0.5" />,
    content: (
      <a href={`mailto:${BRAND.email}`} className="footer-link text-slate-600 text-sm hover:text-[#2563eb] transition-colors break-all">
        {BRAND.email}
      </a>
    ),
  },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to TaxByCA tax updates!');
    setEmail('');
  };

  return (
    <footer id="contact" className="bg-[#f8fafc] border-t border-blue-100">

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-12 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Col 1: Brand ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-5" aria-label="TaxByCA Home">
              <img
                src={TaxByCALogo}
                alt="TaxByCA"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              <span className="text-[#2563eb] font-semibold">team of qualified CAs & professionals</span> providing
              GST, ITR, company registration &amp; all compliance services 100% online across India.
            </p>

            {/* ICAI Badge */}
            <div className="inline-flex items-center gap-2 bg-[#2563eb]/10 border border-blue-200 rounded-full px-3 py-1.5 mb-5">
              <i className="ri-award-line text-[#2563eb] text-sm" />
              <span className="text-[#2563eb] text-[10px] font-bold tracking-wider">Qualified CA Team</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-[#f8fafc] border border-blue-100 flex items-center justify-center text-slate-600 hover:bg-[#2563eb] hover:text-[#0f172a] hover:border-[#2563eb] transition-all duration-200"
                >
                  <s.icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-[#0f172a] font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <i className="ri-links-line text-[#2563eb]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-slate-600 text-sm hover:text-[#2563eb] transition-colors group"
                  >
                    <i className="ri-arrow-right-s-line text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity -ml-1 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h3 className="text-[#0f172a] font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <i className="ri-briefcase-4-line text-[#2563eb]" />
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-slate-600 text-sm hover:text-[#2563eb] transition-colors group"
                  >
                    <i className="ri-arrow-right-s-line text-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity -ml-1 flex-shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact + Newsletter ── */}
          <div>
            <h3 className="text-[#0f172a] font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-2">
              <i className="ri-contacts-line text-[#2563eb]" />
              Contact Us
            </h3>

            <ul className="space-y-3.5 mb-7">
              {contactItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  {item.icon}
                  {item.content}
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div className="bg-[#f8fafc] border border-blue-100 rounded-2xl p-4">
              <h4 className="text-[#0f172a] font-semibold text-sm mb-3 flex items-center gap-2">
                <i className="ri-mail-send-line text-[#2563eb]" />
                Tax Updates Newsletter
              </h4>
              <form onSubmit={handleNewsletter} className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="bg-white border border-blue-100 focus:border-[#2563eb] rounded-lg px-3 py-2.5 text-[#0f172a] text-sm focus:outline-none transition-colors placeholder-[#475569]"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-colors"
                >
                  <FaPaperPlane className="text-xs" />
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} TaxByCA. All Rights Reserved. | We Issue Proper GST Invoice for Every Service
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="text-slate-500 hover:text-[#2563eb] text-xs sm:text-sm transition-colors">
              Privacy Policy
            </Link>
            <span className="text-[#1d3557]">|</span>
            <Link to="/terms-conditions" className="text-slate-500 hover:text-[#2563eb] text-xs sm:text-sm transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
