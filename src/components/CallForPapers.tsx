import { Calendar, FileCheck, Award } from 'lucide-react';

export default function CallForPapers() {
  const importantDates = [
    {
      date: 'July 25, 2025',
      event: 'Paper Submission Deadline'
    },
    {
      date: 'August 20, 2025',
      event: 'Notification of Acceptance'
    },
    {
      date: 'September 5, 2025',
      event: 'Camera-ready Paper Submission'
    },
    {
      date: 'September 23-25, 2025',
      event: 'Conference Dates'
    }
  ];

  const tracks = [
    {
      title: 'Artificial Intelligence and Machine Learning',
      topics: [
        'Deep Learning',
        'Neural Networks',
        'Computer Vision',
        'Natural Language Processing',
        'Reinforcement Learning',
        'AI Ethics and Security'
      ]
    },
    {
      title: 'Computing and Communication',
      topics: [
        'Cloud Computing',
        'Edge Computing',
        'IoT and Sensor Networks',
        'Wireless Networks',
        '5G/6G Communications',
        'Network Security'
      ]
    },
    {
      title: 'Control and Automation',
      topics: [
        'Robotics and Automation',
        'Industrial Control Systems',
        'Smart Manufacturing',
        'Process Control',
        'Autonomous Systems',
        'Cyber-Physical Systems'
      ]
    }
  ];

  return (
    <section id="call-for-papers" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Call for Papers</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            Submit your research papers for IC3AI 2026 conference
          </p>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-surface-primary text-center">Important Dates</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((item, index) => (
              <div key={index} className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10">
                <Calendar className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-semibold text-lg text-surface-primary mb-2">{item.event}</h4>
                <p className="text-surface-secondary">{item.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Tracks */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-8 text-surface-primary text-center">Research Tracks</h3>
          {tracks.map((track, index) => (
            <div key={index} className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10">
              <h4 className="text-xl font-semibold mb-4 text-surface-primary">{track.title}</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {track.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-center space-x-2">
                    <FileCheck className="w-5 h-5 text-primary" />
                    <span className="text-surface-secondary">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="mt-12 text-center">
          <a
            href="https://cmt3.research.microsoft.com/IC3AI2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Award className="w-6 h-6 mr-2" />
            Submit Your Paper
          </a>
        </div>
      </div>
    </section>
  );
}