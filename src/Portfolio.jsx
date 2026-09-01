import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Services", "Testimonials", "Contact"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set up intersection observer to detect which section is in view
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '-70px 0px 0px 0px'  // Offset for fixed navbar
        }
    );

    // Observe all sections
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
      <div style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        minHeight: '100vh',
        fontFamily: "'Inter', sans-serif",
      }}>
        {/* Fixed Navigation Bar */}
        <Navbar activeSection={activeSection} />

        {/* Main Book Container */}
        <div className="book-container" style={{ paddingTop: '6rem' }}>
          <div className="book">
            {/* Left Sidebar with Navigation */}
            <aside className="book-sidebar">
              <Sidebar activeSection={activeSection} />
            </aside>

            {/* Main Content Area - All Pages */}
            <main className="book-content">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Testimonials />
              <Contact />
              <Footer />
            </main>
          </div>
        </div>
      </div>
  );
}