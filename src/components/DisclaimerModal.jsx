import React, { useState, useEffect, useCallback } from 'react';
import {
  PiX, PiCompass, PiWhatsappLogo, PiShieldCheckDuotone, PiReceiptDuotone, PiClipboardTextDuotone,
  PiBuildingsDuotone, PiCertificateDuotone, PiChartLineUpDuotone, PiChatsCircleDuotone,
} from 'react-icons/pi';
import { waLink } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.webp';

const serviceItems = [
  { icon: PiReceiptDuotone,       label: 'Tax & GST' },
  { icon: PiClipboardTextDuotone, label: 'Audit' },
  { icon: PiBuildingsDuotone,     label: 'Business Registration' },
  { icon: PiCertificateDuotone,   label: 'Certificates' },
  { icon: PiChartLineUpDuotone,   label: 'Project Reports' },
  { icon: PiChatsCircleDuotone,   label: 'WhatsApp Support' },
];

const STORAGE_KEY = 'taxbyca_disclaimer_v3';

const DisclaimerModal = () => {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);

  const dismiss = useCallback(() => {
    setAnimate(false);
    setTimeout(() => {
      setShow(false);
      try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch { /* storage unavailable */ }
    }, 300);
  }, []);

  useEffect(() => {
    let dismissed = false;
    try { dismissed = sessionStorage.getItem(STORAGE_KEY) === '1'; } catch { dismissed = false; }
    if (dismissed) return undefined;
    const timer = setTimeout(() => {
      setShow(true);
      setTimeout(() => setAnimate(true), 50);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show) return undefined;
    const handleKeyDown = (e) => { if (e.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [show, dismiss]);

  const handleExplore = () => {
    dismiss();
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/#services';
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center p-4 transition-opacity duration-300 ${animate ? 'opacity-100' : 'opacity-0'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Welcome to TaxByCA"
    >
      <div className="absolute inset-0 bg-ink-950/70 backdrop-blur-md" onClick={dismiss} aria-hidden="true" />

      <div
        className={`relative flex max-h-[86dvh] w-full max-w-md flex-col overflow-hidden rounded-[2rem] bg-white shadow-float transition-all duration-500 ease-out-expo ${
          animate ? 'translate-y-0 scale-100' : 'translate-y-6 scale-95'
        }`}
      >
        {/* Header band */}
        <div className="surface-dark shrink-0 px-6 pb-7 pt-5">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-brand-500/50 blur-3xl" aria-hidden="true" />
          <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative flex items-center justify-between">
            <span className="rounded-xl bg-white px-3 py-1.5">
              <img src={TaxByCALogo} alt="TaxByCA" className="h-7 w-auto" />
            </span>
            <button
              onClick={dismiss}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition-colors hover:bg-white/20"
              aria-label="Close"
            >
              <PiX />
            </button>
          </div>
          <h2 className="relative mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-[1.7rem]">
            Welcome to <span className="accent-serif-light text-[1.1em]">TaxByCA</span>
          </h2>
          <p className="relative mt-1 text-sm text-brand-100/70">Professional Tax, Compliance &amp; Business Support</p>
        </div>

        <div className="overflow-y-auto overscroll-contain px-6 py-6">
          <div className="flex items-start gap-3 rounded-2xl border border-brand-100 bg-brand-50/70 p-4">
            <span className="icon-tile h-9 w-9 rounded-xl text-lg"><PiShieldCheckDuotone /></span>
            <div>
              <p className="text-sm font-bold text-ink">Your Business. Your Compliance. One Solution.</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-ink-soft">100% online across India.</p>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {serviceItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 rounded-xl border border-line bg-surface/60 px-3 py-2.5">
                <Icon className="shrink-0 text-lg text-brand-600" />
                <span className="truncate text-[12.5px] font-semibold text-ink">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
            <button onClick={handleExplore} className="btn btn-primary flex-1">
              <PiCompass className="text-lg" />
              Explore Services
            </button>
            <a
              href={waLink('Hi! I would like a free consultation with TaxByCA.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="btn btn-whatsapp flex-1"
            >
              <PiWhatsappLogo className="text-lg" />
              WhatsApp Us
            </a>
          </div>

          <button onClick={dismiss} className="mx-auto mt-3 block min-h-[36px] text-[13px] font-semibold text-ink-mute transition-colors hover:text-brand-600">
            Continue to website →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
