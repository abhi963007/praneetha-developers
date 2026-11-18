import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage';
import { BecomePartnerPage } from './pages/BecomePartnerPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { InsightsPage } from './pages/InsightsPage';
import { DisclaimerPage, PrivacyPolicyPage } from './pages/LegalPage';
import { PropertiesPage } from './pages/PropertiesPage';
import { ServicesPage } from './pages/ServicesPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/advisers/:slug" element={<AboutPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/category/:slug" element={<PropertiesPage />} />
        <Route path="/property/:slug" element={<PropertiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:slug" element={<ServicesPage />} />
        <Route path="/become-a-partner" element={<BecomePartnerPage />} />
        <Route path="/partner" element={<BecomePartnerPage />} />
        <Route path="/channel-partner" element={<BecomePartnerPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/licenses" element={<HomePage />} />
        <Route path="/changelog" element={<HomePage />} />
        <Route path="/style-guide" element={<HomePage />} />
        <Route path="/instructions" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
