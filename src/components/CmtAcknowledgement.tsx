import { Server, Shield, Users } from 'lucide-react';

export default function CmtAcknowledgement() {
  const features = [
    {
      icon: Server,
      title: 'Azure Cloud Services',
      description: 'Microsoft provided all Azure cloud services required for hosting and running the CMT platform'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Enterprise-grade security and reliability for managing the peer review process'
    },
    {
      icon: Users,
      title: 'Support Services',
      description: 'Comprehensive software development and support services from Microsoft'
    }
  ];

  return (
    <section id="cmt-acknowledgement" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">CMT Acknowledgement</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            We express our gratitude to Microsoft for providing the Conference Management Toolkit (CMT) service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-surface hover:shadow-xl transition-shadow duration-300 border border-surface-secondary/10">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-surface-primary">{feature.title}</h3>
              <p className="text-surface-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-surface-secondary/5 rounded-lg p-8 text-center">
          <p className="text-surface-secondary text-lg leading-relaxed">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided free of charge by Microsoft, who covered all expenses including 
            costs for Azure cloud services as well as software development and support.
          </p>
          <a
            href="https://cmt3.research.microsoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 mt-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Visit Microsoft CMT
          </a>
        </div>
      </div>
    </section>
  );
}