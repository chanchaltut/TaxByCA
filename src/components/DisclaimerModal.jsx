import React, { useState, useEffect, useCallback } from 'react';
import { BRAND } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.png';

const serviceItems = [
  { icon: 'ri-bar-chart-2-line',   label: 'Tax & GST' },
  { icon: 'ri-file-text-line',      label: 'Audit & Assurance' },
  { icon: 'ri-building-2-line',     label: 'Business Registration' },
  { icon: 'ri-award-line',          label: 'Certificates' },
  { icon: 'ri-file-chart-line',     label: 'Project Reports' },
  { icon: 'ri-whatsapp-line',       label: 'WhatsApp Support' },
];

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const dismiss = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem('taxbyca_disclaimer_v2', '1');
      } catch (e) {
        // ignore storage errors
      }
    }, 250);
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem('taxbyca_disclaimer_v2') === '1';
    } catch (e) {
      dismissed = false;
    }

    if (!dismissed) {
      const timer = setTimeout(() => {
        setShow(true);
        setTimeout(() => setAnimate(true), 50);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  // ESC key listener to dismiss
  useEffect(() => {
    if (!show) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') dismiss();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, dismiss]);

  const handleExplore = () => {
    dismiss();
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#services';
    }
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to TaxByCA"
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          animate ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal Container — Compact & scrollable, max-h 80vh to never hide close button */}
      <div
        className={`relative w-full max-w-md max-h-[82dvh] sm:max-h-[85vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-blue-100 overflow-hidden transition-all duration-300 ${
          animate ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
      >
        {/* Top Accent Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] flex-shrink-0" />

        {/* Modal Header — Always visible at top */}
        <div className="px-4 sm:px-5 py-3 flex items-center justify-between border-b border-blue-100 bg-white/95 flex-shrink-0">
          <img src={TaxByCALogo} alt="TaxByCA" className="h-7 sm:h-8 w-auto object-contain" />
          <button
            onClick={dismiss}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#2563eb] flex items-center justify-center transition-all duration-150 cursor-pointer shadow-sm active:scale-95"
            aria-label="Close modal"
            title="Close"
          >
            <i className="ri-close-line text-xl font-bold" />
          </button>
        </div>

        {/* Modal Body — Scrollable if device screen is very short */}
        <div className="px-4 sm:px-6 py-4 overflow-y-auto flex-1 overscroll-contain">
          <div className="text-center sm:text-left mb-3">
            <h2 className="text-[#0f172a] font-extrabold text-xl sm:text-2xl tracking-tight">
              Welcome to <span className="text-[#2563eb]">TaxByCA</span>
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
              Professional Tax, Compliance &amp; Business Support
            </p>
          </div>

          {/* Value Banner */}
          <div className="flex items-start gap-3 bg-blue-50/80 rounded-xl p-3 mb-4 border border-blue-200/80">
            <div className="w-8 h-8 rounded-full bg-[#2563eb]/15 border border-blue-200 flex items-center justify-center flex-shrink-0 mt-0.5">
              <i className="ri-shield-check-line text-[#2563eb] text-sm" />
            </div>
            <div>
              <p className="text-[#1e40af] font-bold text-xs sm:text-sm leading-snug">
                Your Business. Your Compliance. One Solution.
              </p>
              <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed mt-0.5">
                GST, ITR, Company Registration, Tax Audit, Project Reports &amp; Certificates — 100% online across India.
              </p>
            </div>
          </div>

          {/* Compact Service Grid — 2 columns */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {serviceItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-[#f8fafc] rounded-lg px-2.5 py-2 border border-blue-100/80 hover:border-[#2563eb]/40 hover:bg-blue-50/50 transition-colors"
              >
                <i className={`${item.icon} text-[#2563eb] text-sm flex-shrink-0`} />
                <span className="text-[#0f172a] font-semibold text-[11px] sm:text-xs truncate">{item.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={handleExplore}
              className="flex-1 flex items-center justify-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 min-h-[42px]"
            >
              <i className="ri-compass-3-line text-sm" />
              Explore Services
            </button>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I would like a free consultation with TaxByCA.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white py-2.5 px-4 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow active:scale-98 min-h-[42px]"
            >
              <i className="ri-whatsapp-line text-base" />
              WhatsApp Us
            </a>
          </div>

          <div className="text-center mt-3">
            <button
              onClick={dismiss}
              className="text-slate-600 hover:text-[#2563eb] text-[11px] font-medium transition-colors cursor-pointer"
            >
              Continue to website &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
