import { useState } from 'react';
import { Clock, MapPin, User, Calendar } from 'lucide-react';

const scheduleData = [
  {
    day: "Day 1",
    date: "March 15",
    sessions: [
      { time: "9:00", title: "Registration & Welcome Coffee", speaker: "", location: "Main Lobby", type: "break" },
      { time: "10:00", title: "Opening Keynote: The Future of AI", speaker: "Sarah Chen", location: "Main Stage", type: "keynote" },
      { time: "11:30", title: "Building Scalable Systems", speaker: "David Kim", location: "Room A", type: "talk" },
      { time: "13:00", title: "Networking Lunch", speaker: "", location: "Exhibition Hall", type: "break" },
      { time: "14:30", title: "Startup Pitch Competition", speaker: "Marcus Rodriguez", location: "Main Stage", type: "workshop" }
    ]
  },
  {
    day: "Day 2",
    date: "March 16",
    sessions: [
      { time: "9:30", title: "Ethical AI in Practice", speaker: "Dr. Emily Watson", location: "Main Stage", type: "keynote" },
      { time: "11:00", title: "Cloud Architecture Workshop", speaker: "Sarah Chen", location: "Room B", type: "workshop" },
      { time: "12:30", title: "Sponsor Showcase Lunch", speaker: "", location: "Exhibition Hall", type: "break" },
      { time: "14:00", title: "Panel: Future of Work", speaker: "All Speakers", location: "Main Stage", type: "panel" },
      { time: "16:00", title: "Networking Reception", speaker: "", location: "Rooftop Terrace", type: "break" }
    ]
  }
];

const typeStyles = {
  keynote: 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-800',
  workshop: 'bg-secondary-50 dark:bg-secondary-900/20 text-secondary-700 dark:text-secondary-300 border-secondary-200 dark:border-secondary-800',
  panel: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800',
  talk: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
  break: 'bg-bg-secondary text-text-muted border-border'
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Three days of carefully curated content and networking opportunities
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-bg-secondary rounded-2xl p-2 border border-border-light">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{day.day}</span>
                </div>
                <div className="text-xs opacity-75">{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Content */}
        <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-3xl border border-border-light p-8">
          <div className="space-y-4">
            {scheduleData[activeDay].sessions.map((session, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-center p-6 bg-bg-primary rounded-2xl hover:shadow-lg transition-all duration-300 border border-border-light hover:border-primary-300">
                  {/* Time */}
                  <div className="md:w-24 mb-4 md:mb-0 flex-shrink-0">
                    <div className="flex items-center text-primary-500 font-bold text-lg">
                      <Clock className="w-4 h-4 mr-2" />
                      {session.time}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 md:mx-8">
                    <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary-500 transition-colors">
                      {session.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-text-secondary">
                      {session.speaker && (
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span className="font-medium">{session.speaker}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="mt-4 md:mt-0 flex-shrink-0">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${typeStyles[session.type as keyof typeof typeStyles]}`}>
                      {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}