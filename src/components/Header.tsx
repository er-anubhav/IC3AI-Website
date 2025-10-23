import { Menu, X } from 'lucide-react';
import conferenceImage from "../assets/mainlogo.webp";
import conferenceImage1 from "../assets/conference-logo.png";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setShowDashboard?: (v: boolean) => void;
}

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
  setShowDashboard
}: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About ITS' },
  { id: 'about-conference', label: 'About conference' },
    { id: 'committee', label: 'Committee' },
    { id: 'register', label: 'Registration' },
    // { id: 'schedule', label: 'Schedule' },
    { id: 'guidelines', label: 'Submission Guideline' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'cmt-acknowledgement', label: 'CMT' },
  ];

  return (
    <header className="w-full z-50">
      {/* Top thin utility bar */}
      <div className="w-full bg-red-800 text-white text-sm">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="hidden sm:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('call-for-papers')} 
              className="flex items-center gap-2 hover:underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <line x1="10" y1="9" x2="8" y2="9"/>
              </svg>
              Call for Papers
            </button>
            <span className="opacity-60">|</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 hover:underline"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg> */}
                Contact
              </button>
              <a href="mailto:contact@example.com" className="w-4 h-4 hover:text-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
              <a href="tel:+1234567890" className="w-4 h-4 hover:text-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              {/* <a className="hover:underline">Fee Payment</a> */}
              <span className="opacity-60">|</span>
              <button 
                onClick={() => setShowDashboard?.(true)} 
                className="flex items-center gap-2 hover:text-red-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
            {/* <span className="opacity-60">|</span> */}
            <div className="flex items-center gap-3">
              {/* <button className="text-white text-xs hover:underline">IN</button>
              <button className="text-white text-xs hover:underline">IG</button>
              <button className="text-white text-xs hover:underline">FB</button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Middle title area */}
      <div className="w-full bg-white">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-9">
            <img src={conferenceImage} alt="ITS Logo" className="w-28 h-28 object-contain" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-red-800">I.T.S ENGINEERING COLLEGE </h1>
              <p className="text-sm text-surface-secondary mt-2">Approved by the AICTE , Accreditted by the NBA and the NAAC , Affiliated with Dr. A. P. J. Abdul Kalam Technical University , Lucknow</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-28 h-28 bg-white flex items-center justify-center">
              <img src={conferenceImage1} alt="" className="w-24 h-24 object-contain" />
            </div>
          </div>
        </div>
      </div>

      {/* Red navigation bar */}
      <nav className="w-full bg-red-700">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center gap-8 py-4">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-white font-semibold hover:underline">
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile nav toggle and right-side utilities */}
            <div className="flex items-center gap-4 py-4">
              <div className="md:hidden">
                <button
                  className="p-2 rounded-lg text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle navigation"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu items */}
          {isMenuOpen && (
            <div className="md:hidden py-2 flex flex-col gap-2">
              {menuItems.map((item) => (
                <button key={item.id} onClick={() => { scrollToSection(item.id); setIsMenuOpen(false); }} className="text-white text-left py-2">
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}