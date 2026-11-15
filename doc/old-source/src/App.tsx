import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingCTAs } from './components/FloatingCTAs';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ProjectsListing } from './pages/ProjectsListing';
import { ProjectDetail } from './pages/ProjectDetail';
import { PlotsComingSoon } from './pages/PlotsComingSoon';
import { Gallery } from './pages/Gallery';
import { PartnerWithUs } from './pages/PartnerWithUs';
import { Blogs } from './pages/Blogs';
import { BlogPostDetail } from './pages/BlogPostDetail';
import { Contact } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [defaultProject, setDefaultProject] = useState<string>('Pranitha Sovereign Villas');

  const handleOpenEnquiry = (project?: string) => {
    if (project) setDefaultProject(project);
    setEnquiryOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="mobile-bottom-spacer flex min-h-screen flex-col bg-white text-brand-ink">
        <Navbar onOpenEnquiry={handleOpenEnquiry} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
            <Route path="/projects" element={<ProjectsListing />} />
            <Route path="/projects/plots/coming-soon" element={<PlotsComingSoon />} />
            <Route path="/projects/:category" element={<ProjectsListing />} />
            <Route path="/projects/:category/:status" element={<ProjectsListing />} />
            <Route
              path="/project/:slug"
              element={<ProjectDetail onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partner-with-us" element={<PartnerWithUs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          </Routes>
        </main>

        <Footer />
        <FloatingCTAs onOpenEnquiry={() => handleOpenEnquiry()} />
        <EnquiryModal
          isOpen={enquiryOpen}
          defaultProject={defaultProject}
          onClose={() => setEnquiryOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
