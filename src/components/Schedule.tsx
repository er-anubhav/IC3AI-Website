import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  location: string;
  type: 'keynote' | 'session' | 'break' | 'workshop';
  description: string;
}

const Schedule: React.FC = () => {
  const scheduleData: ScheduleEvent[] = [
    {
      id: 1,
      time: "9:00 AM",
      title: "Registration & Welcome Coffee",
      location: "Main Lobby",
      type: "break",
      description: "Check-in and networking with fellow attendees"
    },
    {
      id: 2,
      time: "10:00 AM",
      title: "Opening Keynote: The Future of AI Research",
      speaker: "Dr. Sarah Chen",
      location: "Main Auditorium",
      type: "keynote",
      description: "Exploring the latest breakthroughs in artificial intelligence and their implications for the future"
    },
    {
      id: 3,
      time: "11:00 AM",
      title: "Quantum Computing Applications",
      speaker: "Prof. Michael Rodriguez",
      location: "Hall A",
      type: "session",
      description: "Deep dive into practical applications of quantum computing in modern research"
    },
    {
      id: 4,
      time: "11:30 AM",
      title: "Natural Language Processing Workshop",
      speaker: "Dr. Emily Watson",
      location: "Lab 1",
      type: "workshop",
      description: "Hands-on workshop on implementing NLP solutions"
    },
    {
      id: 5,
      time: "12:30 PM",
      title: "Lunch Break & Networking",
      location: "Conference Center",
      type: "break",
      description: "Enjoy lunch while networking with peers and speakers"
    },
    {
      id: 6,
      time: "2:00 PM",
      title: "Robotics and Automation",
      speaker: "Dr. James Park",
      location: "Hall B",
      type: "session",
      description: "Latest developments in autonomous systems and robotics"
    },
    {
      id: 7,
      time: "3:00 PM",
      title: "Panel Discussion: Ethics in AI",
      location: "Main Auditorium",
      type: "session",
      description: "Roundtable discussion on ethical considerations in AI development"
    },
    {
      id: 8,
      time: "4:00 PM",
      title: "Closing Remarks & Awards",
      location: "Main Auditorium",
      type: "keynote",
      description: "Conference wrap-up and recognition of outstanding contributions"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-primary text-white';
      case 'session':
        return 'bg-primary/10 text-primary';
      case 'workshop':
        return 'bg-accent/10 text-accent';
      case 'break':
        return 'bg-surface-tertiary text-surface-secondary';
      default:
        return 'bg-surface-tertiary text-surface-secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'keynote':
        return <Users className="w-4 h-4" />;
      case 'session':
        return <Calendar className="w-4 h-4" />;
      case 'workshop':
        return <Clock className="w-4 h-4" />;
      case 'break':
        return <MapPin className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  return (
    <section id="schedule" className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Conference Schedule</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            Join us for a full day of inspiring talks, interactive workshops, and networking opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {scheduleData.map((event, index) => (
              <div 
                key={event.id}
                className={`schedule-item bg-card rounded-2xl p-6 border border-surface shadow-custom hover:shadow-custom-lg transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-2 mb-2 md:mb-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="text-xl font-bold text-surface-primary">
                        {event.time}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl font-semibold text-surface-primary">
                        {event.title}
                      </h3>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                        {getTypeIcon(event.type)}
                        <span className="ml-1 capitalize">{event.type}</span>
                      </span>
                    </div>
                    
                    {event.speaker && (
                      <p className="text-primary font-medium mb-2">
                        Speaker: {event.speaker}
                      </p>
                    )}
                    
                    <p className="text-surface-secondary mb-3">
                      {event.description}
                    </p>
                    
                    <div className="flex items-center text-surface-tertiary text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="btn-primary px-8 py-3 rounded-lg">
              Download Full Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;