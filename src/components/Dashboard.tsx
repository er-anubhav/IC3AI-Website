import { X } from 'lucide-react';

interface DashboardProps {
  onClose: () => void;
  onNavigate?: (sectionId: string) => void;
}

const menuItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About ITS' },
  { id: 'about-conference', label: 'About IC3AI' },
  { id: 'committee', label: 'Committee' },
  { id: 'register', label: 'Registration' },
  { id: 'guidelines', label: 'Submission Guideline' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'cmt-acknowledgement', label: 'CMT' },
];

export default function Dashboard({ onClose, onNavigate }: DashboardProps) {
  const handleNavigate = (id: string) => {
    // close dashboard first
    onClose();
    if (onNavigate) {
      onNavigate(id === 'home' ? 'home' : id);
    } else {
      // fallback: scroll to element if exists
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm flex items-center justify-center">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-auto max-h-[90vh]">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-semibold">Menu</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-surface-secondary/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {menuItems.map((m) => (
                <button
                  key={m.id}
                onClick={() => handleNavigate(m.id)}
                className="w-full text-left p-3 bg-surface rounded-md hover:shadow-sm border"
              >
                {m.label}
              </button>
            ))}
          </nav>

          {/* Dashboard content placeholders */}
          <section>
            <h4 className="font-semibold mb-2">Welcome to the Dashboard</h4>
            <p className="text-sm text-surface-secondary">Use the menu above to quickly jump to sections of the site.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
