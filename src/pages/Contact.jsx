import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PiPhoneCallDuotone, PiEnvelopeSimpleDuotone, PiMapPinDuotone, PiWhatsappLogoDuotone, PiClockDuotone, PiPaperPlaneTilt, PiWhatsappLogo, PiLightningDuotone, PiLockKey, PiCaretDown } from 'react-icons/pi';
import { PageHero } from '../components/ui';
import Swal from 'sweetalert2';
import { BRAND, SERVICE_CATEGORIES, waLink } from '../utils/constants';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const escapeHtml = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `Hi TaxByCA! I submitted an inquiry on your website:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service || 'General Inquiry'}\n*Message:* ${formData.message}`
    );
    const waUrl = `https://wa.me/${BRAND.whatsapp}?text=${waText}`;

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error('EmailJS environment variables are not configured');
      }
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: BRAND.email,
          from_name: formData.name,
          reply_to: formData.email,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || 'General Inquiry',
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
    } catch (err) {
      console.error('Contact form email failed:', err);
      setIsSubmitting(false);
      Swal.fire({
        title: 'Could not send your message',
        text: `Something went wrong while sending your inquiry. Please reach us on WhatsApp or email us at ${BRAND.email}.`,
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Send on WhatsApp',
        cancelButtonText: 'Close',
        confirmButtonColor: '#25d366',
        cancelButtonColor: '#0B1B33',
        reverseButtons: true,
        customClass: {
          popup: 'rounded-3xl font-sans',
          confirmButton: 'rounded-full font-bold px-6 py-3',
          cancelButton: 'rounded-full font-bold px-6 py-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(waUrl, '_blank');
        }
      });
      return;
    }

    setIsSubmitting(false);

    Swal.fire({
      title: 'Inquiry Received!',
      html: `
        <p style="color: #475569; font-size: 15px; margin-bottom: 12px;">
          Thank you, <strong>${escapeHtml(formData.name)}</strong>! Your message regarding <strong>${escapeHtml(formData.service || 'Professional Services')}</strong> has been sent to the TaxByCA team.
        </p>
        <p style="color: #64748b; font-size: 13px;">
          For an instant response, you can also continue directly on WhatsApp.
        </p>
      `,
      icon: 'success',
      iconColor: '#06529A',
      showCancelButton: true,
      confirmButtonText: 'Continue on WhatsApp',
      cancelButtonText: 'Done',
      confirmButtonColor: '#25d366',
      cancelButtonColor: '#0B1B33',
      reverseButtons: true,
      customClass: {
        popup: 'rounded-3xl font-sans',
        confirmButton: 'rounded-full font-bold px-6 py-3',
        cancelButton: 'rounded-full font-bold px-6 py-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(waUrl, '_blank');
      }
    });

    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    { icon: PiPhoneCallDuotone, title: 'Phone Call', detail: '+91 ' + BRAND.phone, link: `tel:${BRAND.phone}` },
    { icon: PiWhatsappLogoDuotone, title: 'WhatsApp Support', detail: '+91 ' + BRAND.phone, link: waLink('Hi! I need a consultation with TaxByCA.') },
    { icon: PiEnvelopeSimpleDuotone, title: 'Email Address', detail: BRAND.email, link: `mailto:${BRAND.email}` },
    { icon: PiClockDuotone, title: 'Working Hours', detail: BRAND.timings },
    { icon: PiMapPinDuotone, title: 'Coverage', detail: '100% Online — Pan-India Delivery' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | TaxByCA — Free Consultation Online</title>
        <meta name="description" content="Contact TaxByCA for online GST, ITR filing, company registration, and audit assistance. Call +91 9424856409 or WhatsApp for a free consultation with our qualified professionals." />
        <meta name="keywords" content="Contact TaxByCA, TaxByCA contact number, WhatsApp tax consultation, tax expert email, online tax advice India" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact TaxByCA | Free Online Tax Consultation" />
        <meta property="og:description" content="Need expert tax advice? Contact TaxByCA today. 100% online professional services across India with dedicated WhatsApp support." />
        <meta property="og:url" content="https://taxbyca.in/contact" />
        <meta property="og:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact TaxByCA | Free Online Consultation" />
        <meta name="twitter:description" content="Contact TaxByCA for GST, ITR, company registration, and audit services. 100% online across India." />
        <meta name="twitter:image" content="https://taxbyca.in/og-image-v3.jpg" />
        <link rel="canonical" href="https://taxbyca.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <PageHero
        eyebrow="Fast Response Within 30 Mins"
        title={<>Contact <span className="accent-serif-light">TaxByCA</span></>}
        description="Get in touch with our qualified professionals for taxation, GST, company registration, or audit queries. 100% online across India."
      />

      {/* Main Content */}
      <section className="bg-surface px-4 pb-24 sm:px-6">
        <div className="relative mx-auto -mt-10 grid max-w-6xl gap-6 lg:grid-cols-12">

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-5">
            <div className="surface-dark rounded-4xl p-7">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-500/50 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl text-sky-glow"><PiLightningDuotone /></span>
                <h3 className="mt-5 text-xl font-bold text-white">Quick Assistance</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-brand-100/70">
                  Need urgent assistance with a GST return, ITR filing deadline, or tax notice? Connect directly with our qualified team on WhatsApp.
                </p>
                <a
                  href={waLink('Hi! I have an urgent tax inquiry for TaxByCA.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp mt-6 w-full"
                >
                  <PiWhatsappLogo className="text-lg" />
                  Chat on WhatsApp Now
                </a>
              </div>
            </div>

            <div className="card divide-y divide-line">
              {contactInfo.map(({ icon: Icon, title, detail, link }) => {
                const content = (
                  <>
                    <span className="icon-tile-soft h-11 w-11 text-xl"><Icon /></span>
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink-mute">{title}</p>
                      <p className="mt-0.5 break-words text-[15px] font-semibold text-ink">{detail}</p>
                    </div>
                  </>
                );
                return link ? (
                  <a
                    key={title}
                    href={link}
                    target={link.includes('wa.me') ? '_blank' : undefined}
                    rel={link.includes('wa.me') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-5 transition-colors first:rounded-t-3xl last:rounded-b-3xl hover:bg-surface"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={title} className="flex items-center gap-4 p-5">{content}</div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-7 sm:p-10 lg:col-span-7">
            <div className="eyebrow">Send a Message</div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Send Us a <span className="accent-serif">Message</span>
            </h2>
            <p className="mt-2 text-[15px] text-ink-soft">
              Fill in your details below and our qualified professionals will reach out to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="field-label">Full Name *</label>
                  <input id="c-name" type="text" name="name" value={formData.name} onChange={handleChange} required className="field" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label htmlFor="c-phone" className="field-label">Phone Number *</label>
                  <input
                    id="c-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="field"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-email" className="field-label">Email Address *</label>
                  <input id="c-email" type="email" name="email" value={formData.email} onChange={handleChange} required className="field" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="c-service" className="field-label">Service Required</label>
                  <div className="relative">
                  <select id="c-service" name="service" value={formData.service} onChange={handleChange} className="field appearance-none pr-10">
                    <option value="">Select Service Area</option>
                    {SERVICE_CATEGORIES.filter((cat) => cat !== 'All').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <PiCaretDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-mute" />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="c-message" className="field-label">Message / Requirements *</label>
                <textarea
                  id="c-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="field resize-none"
                  placeholder="Tell us what you need assistance with..."
                />
              </div>

              <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary btn-shine btn-lg w-full disabled:opacity-70 sm:w-auto">
                  {isSubmitting ? 'Submitting...' : <><PiPaperPlaneTilt className="text-lg" /> Submit Inquiry</>}
                </button>
                <span className="flex items-center gap-1.5 text-[13px] text-ink-mute">
                  <PiLockKey className="text-base" />
                  Your documents &amp; information are 100% confidential.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
