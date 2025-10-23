import { useState, useEffect } from 'react';
import { ArrowUp,
   Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutConference from './components/AboutConference';
import CommitteesPage from './components/committees/CommitteesPage';
import Registration from './components/Registration';
import Guidelines from './components/Guidelines';
import Speakers from './components/Speakers';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

import CallForPapers from './components/CallForPapers';
import CmtAcknowledgement from './components/CmtAcknowledgement';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add overflow hidden to body when dashboard is open
  useEffect(() => {
    if (showDashboard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showDashboard]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(false); // Always default to light mode
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Contact form submit handler
  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const email = data.get('email');
    const subject = data.get('subject');
    // eslint-disable-next-line no-alert
    alert(`Thanks! We'll reach out to ${email} about "${subject}" soon.`);
    target.reset();
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-surface">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        setShowDashboard={setShowDashboard}
      />

      {/* 1. Home */}
      <section id="home">
        <Hero scrollToSection={scrollToSection} />
      </section>

      {/* 2. About ITS */}
      <section id="about" className="py-20 bg-surface">
        <About />
      </section>

      {/* 3. About IC3AI */}
      <section id="about-conference">
        <AboutConference />
      </section>

      {/* 4. Committee */}
      <section id="committee">
        <CommitteesPage />
      </section>

      {/* 5. Registration */}
      <section id="register">
        <Registration />
      </section>

      {/* Submission Guideline */}
      <section id="guidelines">
        <Guidelines />
      </section>

      {/* 8. Call for Papers */}
      <section id="call-for-papers">
        <CallForPapers />
      </section>

      {/* 9. Speakers */}
      <section id="speakers">
        <Speakers />
      </section>

      {/* 10. Contact */}
      <section id="contact">
        <div className="container px-6 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-4xl font-bold text-surface-primary">Contact Us</h2>
            <p className="max-w-2xl mx-auto text-lg text-surface-secondary">
              Please fill the provided form, and we will get back to you as soon as possible.
            </p>
          </div>
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div className="p-8 border bg-card rounded-2xl shadow-custom-lg border-surface">
              <form className="space-y-5" onSubmit={handleContactSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-surface-primary">
                    Your email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="name@acme.com"
                    className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-surface focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-surface-primary"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-surface-primary">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Let us know how we can help you"
                    className="w-full px-4 py-3 transition-all duration-200 border rounded-lg border-surface focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-surface-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-surface-primary">
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Leave a comment..."
                    className="w-full px-4 py-3 transition-all duration-200 border rounded-lg resize-none border-surface focus:ring-2 focus:ring-primary focus:border-transparent bg-surface text-surface-primary"
                  />
                </div>
                <button type="submit" className="w-full py-3 font-semibold text-white rounded-lg btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <aside className="space-y-6">
              <div className="p-6 border bg-card rounded-2xl shadow-custom border-surface">
                <h3 className="mb-3 text-2xl font-semibold text-surface-primary">Get in Touch</h3>
                <p className="mb-4 text-surface-secondary">You can contact us on any of the following platforms, and we will get back to you.</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-surface-primary">Email</div>
                      <div className="text-surface-secondary">dean.cse@its.edu.in</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-surface-primary">Contact No.</div>
                      <div className="text-surface-secondary">+91-7835878146</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-surface-primary">Location</div>
                      <div className="text-surface-secondary">ITS Engineering College, 46, Knowledge Park III, Greater Noida, Uttar Pradesh 201310</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-surface-secondary">
                <strong>Note:</strong> For faster replies, please include a preferred time to call and a brief summary of your inquiry in the message.
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 11. CMT */}
      <section id="cmt-acknowledgement">
        <CmtAcknowledgement />
      </section>

      <Footer scrollToSection={scrollToSection} />

      {showDashboard && (
        <Dashboard onClose={() => setShowDashboard(false)} onNavigate={scrollToSection} />
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 flex items-center justify-center w-12 h-12 text-white transition-all duration-300 rounded-full bottom-8 right-8 bg-primary shadow-custom-lg hover:bg-primary-dark no-print"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;