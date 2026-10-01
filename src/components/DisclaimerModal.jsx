import React, { useState, useEffect } from 'react';
import { BRAND } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.png';

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('taxbyca_disclaimer_v2');
    if (!dismissed) {
      const timer = setTimeout(() => {
        setShow(true);
        setTimeout(() => setAnimate(true), 50);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('taxbyca_disclaimer_v2', '1');
    }, 300);
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6 transition-all duration-300 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to TaxByCA"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        className={`relative w-full sm:max-w-lg bg-[#0d1b2a] sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
          animate ? 'translate-y-0 sm:scale-100' : 'translate-y-full sm:translate-y-4 sm:scale-95'
        }`}
      >
        {/* Gold top accent bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#f4b942] via-[#ffd700] to-[#f4b942]" />

        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-[#1e3a54]">
          <div className="flex items-center justify-between mb-4">
            <img
              src={TaxByCALogo}
              alt="TaxByCA"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={dismiss}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#162032] hover:bg-[#1e3a54] text-[#94a3b8] hover:text-white transition-all duration-200"
              aria-label="Close"
            >
              <i className="ri-close-line text-lg" />
            </button>
          </div>

          <h2 className="text-white font-bold text-xl leading-snug">
            Welcome to <span className="text-[#f4b942]">TaxByCA</span>
          </h2>
          <p className="text-[#94a3b8] text-sm mt-1">
            ICAI-registered CA firm · Trusted since {BRAND.since}
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-4">
          {/* Disclaimer */}
          <div className="flex gap-3 bg-[#162032] border border-[#1e3a54] rounded-2xl p-4">
            <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#f4b942]/15 border border-[#f4b942]/30 flex items-center justify-center mt-0.5">
              <i className="ri-information-line text-[#f4b942] text-lg" />
            </div>
            <div>
              <p className="text-[#94a3b8] text-sm leading-relaxed">
                Information on this website is for <strong className="text-white">general guidance only</strong> and does not constitute professional tax or legal advice. Tax laws change frequently — always consult a qualified CA for your specific situation.
              </p>
            </div>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { icon: 'ri-shield-check-line', text: 'ICAI Registered CAs' },
              { icon: 'ri-lock-line', text: '100% Confidential' },
              { icon: 'ri-global-line', text: 'Pan-India Services' },
              { icon: 'ri-customer-service-2-line', text: 'WhatsApp Support' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#162032] border border-[#1e3a54] rounded-xl px-3 py-2.5"
              >
                <i className={`${item.icon} text-[#f4b942] text-base flex-shrink-0`} />
                <span className="text-white text-xs font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="px-6 pb-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-[#f4b942] hover:bg-[#d9a230] text-[#0d1b2a] py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
          >
            <i className="ri-checkbox-circle-line text-base" />
            I Understand, Proceed
          </button>
          <a
            href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I would like a free consultation with TaxByCA.`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-3.5 px-6 rounded-full font-bold text-sm transition-all duration-200 hover:-translate-y-0.5 min-h-[48px]"
          >
            <i className="ri-whatsapp-line text-base" />
            Free Consultation
          </a>
        </div>

        {/* ICAI badge footer */}
        <div className="bg-[#162032] border-t border-[#1e3a54] px-6 py-3 flex items-center justify-center gap-2">
          <i className="ri-award-line text-[#f4b942] text-sm" />
          <span className="text-[#94a3b8] text-xs">
            ICAI Registered · Since {BRAND.since} · 10,000+ Clients Served
          </span>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
