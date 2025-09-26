import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  description: string;
}

const Sponsors: React.FC = () => {
  const sponsors: Sponsor[] = [
    {
      id: 1,
      name: "TechCorp Industries",
      logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "platinum",
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Innovation Labs",
      logo: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "platinum",
      description: "Research and development excellence"
    },
    {
      id: 3,
      name: "Future Systems",
      logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "gold",
      description: "Next-generation computing solutions"
    },
    {
      id: 4,
      name: "DataFlow Inc",
      logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "gold",
      description: "Big data and analytics platform"
    },
    {
      id: 5,
      name: "CloudTech Solutions",
      logo: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "silver",
      description: "Cloud infrastructure services"
    },
    {
      id: 6,
      name: "AI Dynamics",
      logo: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
      website: "#",
      tier: "silver",
      description: "Artificial intelligence solutions"
    }
  ];

  const getTierConfig = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return {
          title: 'Platinum Sponsors',
          bgColor: 'bg-gradient-to-r from-gray-300 to-gray-400',
          textColor: 'text-gray-800',
          size: 'w-48 h-24'
        };
      case 'gold':
        return {
          title: 'Gold Sponsors',
          bgColor: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
          textColor: 'text-yellow-800',
          size: 'w-40 h-20'
        };
      case 'silver':
        return {
          title: 'Silver Sponsors',
          bgColor: 'bg-gradient-to-r from-gray-200 to-gray-300',
          textColor: 'text-gray-700',
          size: 'w-32 h-16'
        };
      case 'bronze':
        return {
          title: 'Bronze Sponsors',
          bgColor: 'bg-gradient-to-r from-orange-300 to-orange-400',
          textColor: 'text-orange-800',
          size: 'w-28 h-14'
        };
      default:
        return {
          title: 'Sponsors',
          bgColor: 'bg-surface-tertiary',
          textColor: 'text-surface-primary',
          size: 'w-32 h-16'
        };
    }
  };

  const sponsorsByTier = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  const tierOrder = ['platinum', 'gold', 'silver', 'bronze'];

  return (
    <section id="sponsors" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-surface-primary mb-4">Our Sponsors</h2>
          <p className="text-xl text-surface-secondary max-w-3xl mx-auto">
            We're grateful to our sponsors who make this conference possible and support 
            the advancement of research and innovation.
          </p>
        </div>

        <div className="space-y-16">
          {tierOrder.map((tier) => {
            const tieredSponsors = sponsorsByTier[tier];
            if (!tieredSponsors || tieredSponsors.length === 0) return null;

            const tierConfig = getTierConfig(tier);

            return (
              <div key={tier} className="text-center">
                <div className="mb-8">
                  <span className={`inline-block px-6 py-2 rounded-full text-lg font-semibold ${tierConfig.bgColor} ${tierConfig.textColor}`}>
                    {tierConfig.title}
                  </span>
                </div>

                <div className={`grid gap-8 justify-items-center ${
                  tier === 'platinum' ? 'grid-cols-1 md:grid-cols-2' :
                  tier === 'gold' ? 'grid-cols-2 md:grid-cols-2' :
                  'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                }`}>
                  {tieredSponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.id}
                      className={`sponsor-card bg-card rounded-2xl p-6 border border-surface shadow-custom hover:shadow-custom-lg transition-all duration-300 animate-scale-in group`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`${tierConfig.size} mx-auto mb-4 bg-white rounded-lg overflow-hidden border border-surface flex items-center justify-center`}>
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-surface-primary mb-2">
                        {sponsor.name}
                      </h3>
                      
                      <p className="text-surface-secondary text-sm mb-4">
                        {sponsor.description}
                      </p>
                      
                      <a
                        href={sponsor.website}
                        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Website
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 border border-surface shadow-custom-lg">
            <h3 className="text-2xl font-bold text-surface-primary mb-4">
              Become a Sponsor
            </h3>
            <p className="text-surface-secondary mb-6 max-w-2xl mx-auto">
              Join our community of forward-thinking organizations supporting research and innovation. 
              Various sponsorship packages available to meet your needs.
            </p>
            <button className="btn-primary px-8 py-3 rounded-lg">
              Sponsorship Information
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;