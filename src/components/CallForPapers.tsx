import { Calendar, FileCheck, Award, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CallForPapers() {
  const importantDates = [
    {
      date: '__ Months, 2026',
      event: 'Paper Submission Deadline'
    },
    {
      date: '__ Months, 2026',
      event: 'Notification of Acceptance'
    },
    {
      date: '__ Months, 2026',
      event: 'Camera-ready Paper Submission'
    },
    {
      date: '__ Months, 2026',
      event: 'Conference Dates'
    }
  ];

  const tracks = [
    {
      title: 'Artificial Intelligence',
      topics: [
        'Machine Learning and Deep Learning',
        'Natural Language Processing',
        'Computer Vision and Pattern Recognition',
        'Expert Systems',
        'Neural Networks',
        'Fuzzy Logic and Systems',
        'Evolutionary Computation',
        'Knowledge Representation and Reasoning',
        'AI in Healthcare',
        'AI in Education',
        'Robotics and Autonomous Systems',
        'Multi-agent Systems'
      ]
    },
    {
      title: 'Cyber Security',
      topics: [
        'Network Security',
        'Cloud Security',
        'Cyber Physical Systems Security',
        'IoT Security',
        'Mobile Security',
        'Privacy and Data Protection',
        'Cryptography',
        'Blockchain Technology',
        'Digital Forensics',
        'Malware Analysis',
        'Security Metrics and Testing',
        'Web Security'
      ]
    },
    {
      title: 'Internet of Things',
      topics: [
        'IoT Architectures and Protocols',
        'IoT Applications and Services',
        'Smart Cities and Smart Homes',
        'Industrial IoT',
        'IoT Data Analytics',
        'Edge Computing for IoT',
        'IoT Device Management',
        'IoT Standards and Interoperability',
        'Wireless Sensor Networks',
        'IoT Energy Management',
        'IoT in Healthcare',
        'IoT in Agriculture'
      ]
    },
    {
      title: 'Cloud Computing',
      topics: [
        'Cloud Architecture and Platforms',
        'Cloud Services and Applications',
        'Cloud Storage Systems',
        'Cloud Resource Management',
        'Edge and Fog Computing',
        'Cloud Security and Privacy',
        'Cloud Performance Optimization',
        'Cloud-based Big Data Analytics',
        'Green Cloud Computing',
        'Mobile Cloud Computing',
        'Cloud Gaming',
        'Cloud Testing and Monitoring'
      ]
    },
    {
      title: 'Data Science and Analytics',
      topics: [
        'Big Data Analytics',
        'Data Mining and Knowledge Discovery',
        'Business Intelligence',
        'Predictive Analytics',
        'Statistical Analysis',
        'Data Visualization',
        'Text Mining',
        'Social Media Analytics',
        'Healthcare Analytics',
        'Financial Analytics',
        'Marketing Analytics',
        'Supply Chain Analytics'
      ]
    },
    {
      title: 'Blockchain Technology',
      topics: [
        'Blockchain Architecture',
        'Smart Contracts',
        'Consensus Mechanisms',
        'Cryptocurrency',
        'Blockchain Security',
        'Blockchain Applications',
        'Blockchain Scalability',
        'Blockchain Interoperability',
        'Private and Public Blockchains',
        'Blockchain in Supply Chain',
        'Blockchain in Healthcare',
        'Blockchain in Finance'
      ]
    }
  ];

  // Accordion open/close state per track
  const [openTracks, setOpenTracks] = useState(() => tracks.map(() => false));

  const toggleTrack = (i: number) => {
    setOpenTracks((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="call-for-papers" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Call for Papers</h2>
          <div className="text-lg text-surface-secondary max-w-4xl mx-auto space-y-4">
            <p>
              The International Conference on Artificial Intelligence and Cyber Security (IC3AI-2026) welcomes high-quality papers describing original and unpublished research work related to Artificial Intelligence and Cyber Security.
            </p>
            <p>
              The conference will provide an excellent international forum for sharing knowledge and results in theory, methodology and applications of Artificial Intelligence and Cyber Security. The conference solicits contributions of full-length papers, short papers and abstracts that address themes and topics of the conference.
            </p>
            <p className="font-medium text-surface-primary">
              All submitted papers will be reviewed by experts in the field and evaluated based on originality, technical and/or research depth, accuracy, and relevance to the conference.
            </p>
          </div>
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
          <h3 className="text-2xl font-semibold mb-8 text-surface-primary text-center">Research Tracks and Topics</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10">
                <button
                  onClick={() => toggleTrack(index)}
                  aria-expanded={openTracks[index]}
                  className="w-full text-left flex items-center justify-between mb-4"
                >
                  <h4 className="text-xl font-semibold text-surface-primary flex items-center">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    {track.title}
                  </h4>
                  <ChevronDown className={`w-5 h-5 text-surface-secondary transition-transform ${openTracks[index] ? 'rotate-180' : ''}`} />
                </button>

                {openTracks[index] && (
                  <div className="grid gap-3">
                    {track.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start space-x-2">
                        <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-surface-secondary">{topic}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
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