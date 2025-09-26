import { useState, useEffect } from 'react';
import { ArrowUp, Users, BookOpen, Award, Calendar, Mail, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import TechnicalCommittee from './components/TechnicalCommittee';
import Guidelines from './components/Guidelines';
import CallForPapers from './components/CallForPapers';
import Registration from './components/Registration';
import CmtAcknowledgement from './components/CmtAcknowledgement';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(systemPrefersDark);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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


  return (
    <div className="min-h-screen bg-surface transition-colors duration-300">
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
        scrollToSection={scrollToSection}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <section id="about" className="py-20 bg-surface">
        <About />
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-surface-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-primary mb-4">Academic Programs</h2>
            <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
              Choose from our comprehensive range of programs designed to prepare you 
              for success in your chosen field.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Computer Science & Engineering",
                description: "Advanced algorithms, AI, machine learning, and software development",
                duration: "4 Years",
                level: "Bachelor's",
                color: "bg-primary",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                title: "Research & Development",
                description: "Independent research opportunities with industry collaboration",
                duration: "2-6 Years",
                level: "Master's/PhD",
                color: "bg-primary",
                icon: <Users className="w-6 h-6" />
              },
              {
                title: "Innovation & Entrepreneurship",
                description: "Business development, startup incubation, and technology transfer",
                duration: "1-2 Years",
                level: "Certificate",
                color: "bg-primary",
                icon: <Award className="w-6 h-6" />
              }
            ].map((program, index) => (
              <div key={index} className="bg-card rounded-2xl shadow-custom overflow-hidden hover:shadow-custom-lg transition-all duration-300 transform hover:scale-105 border border-surface">
                <div className={`${program.color} h-2`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {program.icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${program.color} text-white`}>
                      {program.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-surface-primary">{program.title}</h3>
                  <p className="text-surface-secondary mb-4">{program.description}</p>
                  <div className="text-sm text-surface-tertiary mb-6">Duration: {program.duration}</div>
                  <button className="w-full bg-surface-tertiary text-surface-primary py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Speakers />
      
      <Schedule />

      <Sponsors />
      
      {/* Events Section - Keeping this one in main App for now */}
      <section id="events" className="py-20 bg-surface-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-primary mb-4">Upcoming Events</h2>
            <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
              Join us for conferences, workshops, and seminars featuring leading experts 
              from academia and industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: "Mar 15, 2024",
                time: "9:00 AM - 5:00 PM",
                title: "International AI Research Conference",
                location: "Main Auditorium",
                description: "Leading researchers will present their latest findings in artificial intelligence and machine learning.",
                type: "Conference"
              },
              {
                date: "Mar 22, 2024",
                time: "2:00 PM - 4:00 PM",
                title: "Innovation Workshop",
                location: "Innovation Lab",
                description: "Hands-on workshop on emerging technologies and their applications in research.",
                type: "Workshop"
              }
            ].map((event, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border border-surface hover:shadow-custom-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-primary font-medium">{event.date}</span>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-surface-primary">{event.title}</h3>
                <p className="text-surface-secondary mb-4">{event.description}</p>
                <div className="flex items-center justify-between text-sm text-surface-tertiary">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div>{event.time}</div>
                  </div>
                  <button className="text-primary hover:text-primary-dark font-medium transition-colors">
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-surface-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
              Have questions or want to learn more? We're here to help you on your academic journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-surface-primary">Address</h3>
                    <p className="text-surface-secondary">
                      123 Academic Avenue<br />
                      Research City, RC 12345<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-surface-primary">Phone</h3>
                    <p className="text-surface-secondary">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-surface-primary">Email</h3>
                    <p className="text-surface-secondary">
                      info@icac.edu.in<br />
                      admissions@icac.edu.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-custom-lg border border-surface">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-surface-primary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-surface-primary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-surface-primary mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <TechnicalCommittee />
      
      <Guidelines />
      
      <CallForPapers />
      
      <Registration />
      
      <CmtAcknowledgement />

      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-custom-lg hover:bg-primary-dark transition-all duration-300 flex items-center justify-center z-50 no-print"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
}

export default App;