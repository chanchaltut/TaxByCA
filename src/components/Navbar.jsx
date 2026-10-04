import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import { BRAND } from '../utils/constants';
import TaxByCALogo from '../assets/TaxByCALogo.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSidebarOpen]);

  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks = [
    { name: 'Home',     href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/about' },
    { name: 'Blog',     href: '/blog' },
    { name: 'Contact',  href: '/contact' },
  ];

  return (
    <>
      {/* ─── MAIN NAVBAR ─── */}
      <nav
        className={`fixed top-[22px] left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
        } border-b border-blue-100`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 z-50 flex-shrink-0"
              aria-label="TaxByCA - Home"
            >
              <img
                src={TaxByCALogo}
                alt="TaxByCA"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6 xl:gap-7 text-[13px] xl:text-[14px] font-semibold tracking-wide">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className={`transition-colors duration-200 ${
                        isActive(link.href)
                          ? 'text-[#2563eb]'
                          : 'text-[#0f172a] hover:text-[#2563eb]'
                      }`}
                    >
                      {link.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Desktop CTA */}
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-full font-bold text-[13px] transition-all duration-200 hover:shadow-lg whitespace-nowrap"
              >
                <FaPhone className="text-xs" />
                FREE CONSULTATION
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-[#0f172a] text-2xl p-2 z-50 hover:text-[#2563eb] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isSidebarOpen}
            >
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── MOBILE BACKDROP ─── */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* ─── MOBILE SIDEBAR ─── */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto border-r border-blue-100 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-4 border-b border-blue-100 flex items-center gap-3">
          <img
            src={TaxByCALogo}
            alt="TaxByCA"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Sidebar Nav Links */}
        <nav className="p-5">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={closeSidebar}
                  className={`block py-3 px-4 rounded-xl text-[15px] font-semibold transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-[#2563eb]/15 text-[#2563eb] border border-blue-200'
                      : 'text-[#0f172a] hover:bg-[#f8fafc] hover:text-[#2563eb]'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Sidebar CTA */}
          <div className="mt-6 space-y-3">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi! I need professional services from TaxByCA.`}
              onClick={closeSidebar}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-[#0f172a] py-3.5 px-6 rounded-full font-bold text-[14px] transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`tel:${BRAND.phone}`}
              onClick={closeSidebar}
              className="w-full flex items-center justify-center gap-2 bg-[#2563eb] text-white py-3.5 px-6 rounded-full font-bold text-[14px] transition-all hover:bg-[#1d4ed8]"
            >
              <FaPhone className="text-sm" />
              Call Now
            </a>
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-blue-100">
          <p className="text-slate-600 text-[11px] text-center">
            © {new Date().getFullYear()} TaxByCA
          </p>
          <p className="text-[#2563eb] text-[10px] text-center mt-1">TaxByCA — Expert Professional Services</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
