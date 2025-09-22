import { Calendar, Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-bg-secondary border-t border-border-light py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Conference Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">TechSummit 2024</h3>
                <p className="text-text-muted text-sm">San Francisco, CA</p>
              </div>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Join us for three days of innovation, networking, and insights that will shape the future of technology.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Twitter, color: 'hover:bg-blue-500' },
                { icon: Linkedin, color: 'hover:bg-blue-600' },
                { icon: Instagram, color: 'hover:bg-pink-500' },
                { icon: Youtube, color: 'hover:bg-red-500' }
              ].map((social, index) => (
                <a key={index} href="#" className={`p-3 bg-bg-tertiary rounded-xl hover:text-white transition-all duration-300 text-text-muted ${social.color} hover:scale-110`}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Speakers', 'Schedule', 'Sponsors', 'Tickets', 'Venue'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-primary-500 transition-colors duration-200 flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-text-secondary">
                  <p>info@techsummit2024.com</p>
                  <p>sponsors@techsummit2024.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-text-secondary">
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 123-4568</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                <div className="text-text-secondary">
                  <p>Moscone Center</p>
                  <p>747 Howard St</p>
                  <p>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-text-primary">Stay Updated</h4>
            <p className="text-text-secondary mb-4">
              Get the latest updates about speakers, schedule, and exclusive offers.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-bg-tertiary border border-border rounded-xl focus:border-primary-500 focus:outline-none text-text-primary placeholder-text-muted transition-colors"
              />
              <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              © 2024 TechSummit. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Code of Conduct'].map((link) => (
                <a key={link} href="#" className="text-text-muted hover:text-text-primary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}