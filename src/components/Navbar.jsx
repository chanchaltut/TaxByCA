import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiList, PiX, PiPhoneCall, PiWhatsappLogo, PiArrowUpRight } from 'react-icons/pi';
import { BRAND, NAV_ITEMS, waLink } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.webp';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && location.hash !== '#services';
    if (path === '/#services') return location.pathname === '/' && location.hash === '#services';
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isSidebarOpen]);

  useEffect(() => { setIsSidebarOpen(false); }, [location.pathname]);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      {/* ─── FLOATING NAVBAR ─── */}
      <header className="fixed inset-x-0 top-8 z-50 px-3 pt-3 sm:px-5">
        <nav
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border pl-4 pr-2.5 transition-all duration-500 ease-out-expo sm:h-[72px] sm:pl-6 sm:pr-3 ${
            isScrolled
              ? 'border-line/80 bg-white/90 shadow-float backdrop-blur-xl'
              : 'border-white/60 bg-white/95 shadow-soft backdrop-blur-xl'
          }`}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center" aria-label="TaxByCA - Home">
            <img src={TaxByCALogo} alt="TaxByCA" width="160" height="48" className="h-10 w-auto sm:h-12" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden items-center gap-1 rounded-full border border-line bg-surface/80 p-1 lg:flex">
            {NAV_ITEMS.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`relative flex min-h-[40px] items-center rounded-full px-4 text-[14px] font-semibold transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-white text-brand-600 shadow-soft'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex min-h-[44px] items-center gap-2 rounded-full px-3 text-[14px] font-semibold text-ink-soft transition-colors hover:text-brand-600"
            >
              <PiPhoneCall className="text-lg text-brand-600" />
              +91 {BRAND.phone}
            </a>
            <Link to="/contact" className="btn btn-primary btn-shine btn-sm !min-h-[46px] !px-5">
              Free Consultation
              <PiArrowUpRight className="text-base" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-2xl text-ink transition-colors hover:text-brand-600 lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <PiX /> : <PiList />}
          </button>
        </nav>
      </header>

      {/* ─── MOBILE BACKDROP ─── */}
      <div
        className={`fixed inset-0 z-[110] bg-ink-950/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ─── MOBILE DRAWER ─── */}
      <div
        className={`fixed inset-y-0 left-0 z-[120] flex w-[86%] max-w-[360px] flex-col bg-white shadow-float transition-transform duration-500 ease-out-expo lg:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <Link to="/" onClick={closeSidebar} className="flex shrink-0 items-center py-1" aria-label="TaxByCA - Home">
            <img src={TaxByCALogo} alt="TaxByCA" className="h-11 w-auto" />
          </Link>
          <button
            onClick={closeSidebar}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-xl text-ink"
            aria-label="Close menu"
          >
            <PiX />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-mute">Menu</p>
          <ul className="space-y-1">
            {NAV_ITEMS.map((link, i) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={closeSidebar}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[17px] font-bold tracking-tight transition-all ${
                    isActive(link.href) ? 'bg-brand-50 text-brand-600' : 'text-ink hover:bg-surface'
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <span className="font-serif text-sm italic text-ink-mute">0{i + 1}</span>
                    {link.name}
                  </span>
                  <PiArrowUpRight className="text-base text-ink-mute" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-line p-5 pb-[calc(env(safe-area-inset-bottom,0px)+1.75rem)]">
          <a
            href={waLink('Hi! I need professional services from TaxByCA.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp w-full"
          >
            <PiWhatsappLogo className="text-xl" />
            WhatsApp Us
          </a>
          <a href={`tel:${BRAND.phone}`} className="btn btn-dark w-full">
            <PiPhoneCall className="text-lg" />
            Call +91 {BRAND.phone}
          </a>
          <p className="pt-1 text-center text-[11px] text-ink-mute">© {new Date().getFullYear()} TaxByCA</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
