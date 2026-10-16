import React from 'react';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import { BRAND } from '../utils/constants';

const FloatingActionButtons = () => {
  return (
    <>
      {/* ─── LEFT FLOATING BUTTON: WHATSAPP (Expands to the right on desktop hover) ─── */}
      <aside
        className="fixed bottom-5 left-4 sm:left-6 z-40 flex items-center select-none"
        aria-label="WhatsApp Contact"
      >
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I need professional services from TaxByCA.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center bg-[#25d366] hover:bg-[#20b858] text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:shadow-green-600/40 transition-all duration-300 ease-out cursor-pointer active:scale-95"
          aria-label="Chat with TaxByCA on WhatsApp"
        >
          {/* Subtle pulse ring on idle */}
          <span className="relative flex items-center justify-center">
            <FaWhatsapp className="text-2xl sm:text-2xl flex-shrink-0" />
          </span>

          {/* Text sliding out from left to right on desktop */}
          <span className="max-w-0 opacity-0 sm:group-hover:max-w-[150px] sm:group-hover:opacity-100 sm:group-hover:ml-2.5 sm:group-hover:mr-1 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out font-bold text-sm text-white">
            WhatsApp Us
          </span>
        </a>
      </aside>

      {/* ─── RIGHT FLOATING BUTTON: CALL (Expands to the left on desktop hover) ─── */}
      <aside
        className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center justify-end select-none"
        aria-label="Phone Contact"
      >
        <a
          href={`tel:${BRAND.phone}`}
          className="group flex items-center flex-row-reverse bg-[#2563eb] hover:bg-[#1d4ed8] text-white p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-2xl hover:shadow-blue-600/40 transition-all duration-300 ease-out cursor-pointer active:scale-95"
          aria-label={`Call TaxByCA at ${BRAND.phone}`}
        >
          {/* Phone Icon */}
          <span className="relative flex items-center justify-center">
            <FaPhone className="text-lg sm:text-xl flex-shrink-0" />
          </span>

          {/* Text sliding out from right to left on desktop */}
          <span className="max-w-0 opacity-0 sm:group-hover:max-w-[150px] sm:group-hover:opacity-100 sm:group-hover:mr-2.5 sm:group-hover:ml-1 overflow-hidden whitespace-nowrap transition-all duration-300 ease-out font-bold text-sm text-white">
            Call Now
          </span>
        </a>
      </aside>
    </>
  );
};

export default FloatingActionButtons;
