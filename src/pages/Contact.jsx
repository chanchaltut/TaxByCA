import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { BRAND, SERVICE_CATEGORIES } from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `Hi TaxByCA! I submitted an inquiry on your website:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${formData.service || 'General Inquiry'}\n*Message:* ${formData.message}`
    );
    const waUrl = `https://wa.me/${BRAND.whatsapp}?text=${waText}`;

    setTimeout(() => {
      setIsSubmitting(false);

      Swal.fire({
        title: 'Inquiry Received! 🎉',
        html: `
          <p style="color: #475569; font-size: 15px; margin-bottom: 12px;">
            Thank you, <strong>${formData.name}</strong>! Your message regarding <strong>${formData.service || 'Professional Services'}</strong> has been sent to the TaxByCA team.
          </p>
          <p style="color: #64748b; font-size: 13px;">
            For an instant response, you can also continue directly on WhatsApp.
          </p>
        `,
        icon: 'success',
        iconColor: '#2563eb',
        showCancelButton: true,
        confirmButtonText: '💬 Continue on WhatsApp',
        cancelButtonText: 'Done',
        confirmButtonColor: '#25d366',
        cancelButtonColor: '#2563eb',
        reverseButtons: true,
        customClass: {
          popup: 'rounded-2xl shadow-2xl font-sans',
          confirmButton: 'rounded-full font-bold px-6 py-3',
          cancelButton: 'rounded-full font-bold px-6 py-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(waUrl, '_blank');
        }
      });

      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 600);
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Coverage', details: ['100% Online — Pan-India Delivery'] },
    { icon: <FaPhone />, title: 'Phone Call', details: ['+91 ' + BRAND.phone], link: `tel:${BRAND.phone}` },
    { icon: <FaEnvelope />, title: 'Email Address', details: [BRAND.email], link: `mailto:${BRAND.email}` },
    { icon: <FaWhatsapp />, title: 'WhatsApp Support', details: ['+91 ' + BRAND.whatsapp], link: `https://wa.me/${BRAND.whatsapp}?text=Hi! I need a consultation with TaxByCA.` },
    { icon: <FaClock />, title: 'Working Hours', details: [BRAND.timings] }
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
        <meta property="og:image" content="https://taxbyca.in/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact TaxByCA | Free Online Consultation" />
        <meta name="twitter:description" content="Contact TaxByCA for GST, ITR, company registration, and audit services. 100% online across India." />
        <meta name="twitter:image" content="https://taxbyca.in/og-image.jpg" />
        <link rel="canonical" href="https://taxbyca.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-white dot-bg pt-32 pb-16 sm:pt-40 sm:pb-24 border-b border-blue-100">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-blue-700 text-xs font-semibold uppercase tracking-wider">Fast Response Within 30 Mins</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0f172a] mb-5 tracking-tight">
            Contact <span className="text-[#2563eb]">TaxByCA</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get in touch with our qualified professionals for taxation, GST, company registration, or audit queries. 100% online across India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-md">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <i className="ri-flashlight-line text-yellow-300 text-xl" />
                Quick Assistance
              </h3>
              <p className="text-blue-100 text-xs leading-relaxed mb-4">
                Need urgent assistance with a GST return, ITR filing deadline, or tax notice? Connect directly with our qualified team on WhatsApp.
              </p>
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I have an urgent tax inquiry for TaxByCA.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3 px-4 rounded-full font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <FaWhatsapp className="text-lg" />
                Chat on WhatsApp Now
              </a>
            </div>

            {contactInfo.map((info, i) => (
              <div key={i} className="bg-[#f8fafc] border border-blue-100 rounded-xl p-4 sm:p-5 hover:border-blue-300 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="text-[#2563eb] text-lg sm:text-xl mt-0.5 flex-shrink-0">{info.icon}</div>
                  <div className="min-w-0">
                    <h3 className="text-[#0f172a] font-bold text-sm sm:text-base mb-0.5">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <div key={idx}>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.includes('wa.me') ? '_blank' : undefined}
                            rel={info.link.includes('wa.me') ? 'noopener noreferrer' : undefined}
                            className="text-slate-600 hover:text-[#2563eb] text-xs sm:text-sm transition-colors break-words"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p className="text-slate-600 text-xs sm:text-sm">{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-[#f8fafc] border border-blue-100 rounded-2xl p-6 sm:p-10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] mb-2 tracking-tight">Send Us a Message</h2>
            <p className="text-slate-600 text-xs sm:text-sm mb-6">
              Fill in your details below and our qualified professionals will reach out to you promptly.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-slate-700 text-xs sm:text-sm font-semibold mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-blue-100 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-xs sm:text-sm font-semibold mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full bg-white border border-blue-100 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="10-digit mobile number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label className="block text-slate-700 text-xs sm:text-sm font-semibold mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-blue-100 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 text-xs sm:text-sm font-semibold mb-1.5">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-white border border-blue-100 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="">Select Service Area</option>
                    {SERVICE_CATEGORIES.map((cat, i) => (
                      <option key={i} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 text-xs sm:text-sm font-semibold mb-1.5">Message / Requirements *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-white border border-blue-100 rounded-xl px-4 py-3 text-[#0f172a] text-sm focus:outline-none focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  placeholder="Tell us what you need assistance with..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow disabled:opacity-70 active:scale-98 min-h-[46px]"
                >
                  {isSubmitting ? 'Submitting...' : <><FaPaperPlane className="text-xs" /> Submit Inquiry</>}
                </button>
                <span className="text-slate-600 text-xs text-center sm:text-left">
                  🔒 Your documents &amp; information are 100% confidential.
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
