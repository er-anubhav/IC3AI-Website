import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-surface-tertiary text-surface-primary py-16 border-t border-surface">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">IC3AI</span>
            </div>
            <p className="text-surface-secondary mb-4">
              Excellence in academic research and education, shaping the future through innovation and collaborative learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-surface-secondary">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Programs</button></li>
              <li><button onClick={() => scrollToSection('speakers')} className="hover:text-primary transition-colors">Speakers</button></li>
              <li><button onClick={() => scrollToSection('schedule')} className="hover:text-primary transition-colors">Schedule</button></li>
              <li><button onClick={() => scrollToSection('sponsors')} className="hover:text-primary transition-colors">Sponsors</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Academic Resources */}
          <div>
            <h4 className="font-semibold mb-4">Academic</h4>
            <ul className="space-y-2 text-surface-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Library</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Conferences</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-surface-secondary">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p>I.T.S Engineering College</p>
                  <p>46, Knowledge Park III, Greater Noida, Uttar Pradesh 201310</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 43211</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p>info@ic3ai.edu.in</p>
                  <p>admissions@ic3ai.edu.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-surface">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-surface-primary mb-2">Stay Updated</h4>
              <p className="text-surface-secondary">Subscribe to our newsletter for the latest research updates and conference announcements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:ml-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-surface rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 bg-surface text-surface-primary flex-grow"
              />
              <button className="btn-primary px-6 py-2 rounded-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-surface pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-surface-secondary text-sm mb-4 md:mb-0">
            © 2026 IC3AI. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <a href="#" className="text-surface-secondary hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-surface-secondary hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="text-surface-secondary hover:text-primary transition-colors">Cookie Policy</a>
            <a href="#" className="text-surface-secondary hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;