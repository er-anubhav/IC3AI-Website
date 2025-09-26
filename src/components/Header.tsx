import { Menu, X, Sun, Moon } from 'lucide-react';
import conferenceImage from "../assets/International_Conference_on_Advances_in_(1)[1].png";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  isScrolled,
  scrollToSection,
  isDarkMode,
  toggleTheme
}: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'guidelines', label: 'Guidelines' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'call-for-papers', label: 'Call for Papers' },
    { id: 'schedule', label: 'Schedule' },
    { id: 'committee', label: 'Committee' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'register', label: 'Register' },
    { id: 'contact', label: 'Contact' },
    { id: 'cmt-acknowledgement', label: 'CMT' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-surface/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={conferenceImage} alt="Conference Logo" style={{ width: 56, height: 56, borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }} className="mr-3" />
            <span className="text-2xl font-bold text-surface-primary">IC3AI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-wrap gap-x-6 gap-y-2 justify-end flex-grow ml-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-surface-secondary hover:text-primary transition-colors text-sm whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-surface-secondary/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface-secondary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="container mx-auto px-6 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-3 text-surface-secondary hover:text-primary transition-colors border-b border-surface-secondary/10 last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center w-full py-2 text-surface-secondary hover:text-primary transition-colors"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5 mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 mr-2" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}