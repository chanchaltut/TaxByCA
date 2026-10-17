import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import DisclaimerModal from './components/DisclaimerModal';
import StickyMobileCTA from './components/StickyMobileCTA';
import TopMarquee from './components/Marquee';
import Home from './pages/Home';

// Lazy load non-critical pages
const AboutUs     = lazy(() => import('./pages/AboutUs'));
const Contact     = lazy(() => import('./pages/Contact'));
const Insights    = lazy(() => import('./pages/Insights'));
const PrivacyPolicy  = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));

// Service pages (lazy)
const IncomeTax            = lazy(() => import('./pages/services/IncomeTax'));
const GSTServices          = lazy(() => import('./pages/services/GSTServices'));
const TaxAudit             = lazy(() => import('./pages/services/TaxAudit'));
const TDSCompliance        = lazy(() => import('./pages/services/TDSCompliance'));
const BusinessRegistration = lazy(() => import('./pages/services/BusinessRegistration'));
const ROCCompliance        = lazy(() => import('./pages/services/ROCCompliance'));
const ProjectReports       = lazy(() => import('./pages/services/ProjectReports'));
const CACertificates       = lazy(() => import('./pages/services/CACertificates'));
const LoanDocumentation    = lazy(() => import('./pages/services/LoanDocumentation'));
const FNOCapitalGain       = lazy(() => import('./pages/services/FNOCapitalGain'));
// Fallback for lazy-loaded routes
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand-100 border-t-brand-600" role="status" aria-label="Loading" />
  </div>
);

function App() {
  return (
    <div className="App">
      <TopMarquee />
      <DisclaimerModal />
      <ScrollToTop />
      <Navbar />
      <StickyMobileCTA />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* ─── MAIN ─── */}
          <Route path="/"                element={<Home />} />
          <Route path="/about"           element={<AboutUs />} />
          <Route path="/contact"         element={<Contact />} />
          <Route path="/blog"            element={<Insights />} />
          {/* Keep /insights as alias */}
          <Route path="/insights"        element={<Insights />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* ─── SERVICE PAGES ─── */}
          <Route path="/services/income-tax"           element={<IncomeTax />} />
          <Route path="/services/gst-services"         element={<GSTServices />} />
          <Route path="/services/tax-audit"            element={<TaxAudit />} />
          <Route path="/services/tds-compliance"       element={<TDSCompliance />} />
          <Route path="/services/business-registration" element={<BusinessRegistration />} />
          <Route path="/services/roc-compliance"       element={<ROCCompliance />} />
          <Route path="/services/project-reports"      element={<ProjectReports />} />
          <Route path="/services/ca-certificates"      element={<CACertificates />} />
          <Route path="/services/loan-documentation"   element={<LoanDocumentation />} />
          <Route path="/services/fno-capital-gain"     element={<FNOCapitalGain />} />

          {/* ─── FALLBACK (404) ─── */}
          <Route path="*" element={
            <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 pt-24 text-center">
              <p className="font-serif text-[9rem] italic leading-none text-gradient-brand">404</p>
              <h1 className="mt-2 text-2xl font-extrabold">Page Not Found</h1>
              <p className="mt-2 text-ink-soft">The page you're looking for doesn't exist.</p>
              <a href="/" className="btn btn-primary mt-8">Go Home</a>
            </div>
          } />
        </Routes>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
