import { Star, Award, Medal } from 'lucide-react';

const sponsors = {
  platinum: [
    { name: "TechCorp", logo: "https://images.pexels.com/photos/6954240/pexels-photo-6954240.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" },
    { name: "InnovateLab", logo: "https://images.pexels.com/photos/6954241/pexels-photo-6954241.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop" }
  ],
  gold: [
    { name: "StartupX", logo: "https://images.pexels.com/photos/6954242/pexels-photo-6954242.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "CloudTech", logo: "https://images.pexels.com/photos/6954243/pexels-photo-6954243.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" },
    { name: "DataFlow", logo: "https://images.pexels.com/photos/6954244/pexels-photo-6954244.jpeg?auto=compress&cs=tinysrgb&w=150&h=80&fit=crop" }
  ],
  silver: [
    { name: "DevTools", logo: "https://images.pexels.com/photos/6954245/pexels-photo-6954245.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "CodeBase", logo: "https://images.pexels.com/photos/6954246/pexels-photo-6954246.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "TechFlow", logo: "https://images.pexels.com/photos/6954247/pexels-photo-6954247.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" },
    { name: "Innovation Hub", logo: "https://images.pexels.com/photos/6954248/pexels-photo-6954248.jpeg?auto=compress&cs=tinysrgb&w=120&h=60&fit=crop" }
  ]
};

const sponsorTiers = [
  {
    title: "Platinum Sponsors",
    icon: Award,
    sponsors: sponsors.platinum,
    cardClass: "w-72 h-36",
    iconColor: "text-gray-400"
  },
  {
    title: "Gold Sponsors",
    icon: Medal,
    sponsors: sponsors.gold,
    cardClass: "w-56 h-28",
    iconColor: "text-yellow-500"
  },
  {
    title: "Silver Sponsors",
    icon: Star,
    sponsors: sponsors.silver,
    cardClass: "w-44 h-24",
    iconColor: "text-gray-500"
  }
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Our Partners
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Proudly supported by industry leaders who share our vision for innovation
          </p>
        </div>

        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="text-center">
              <div className="flex items-center justify-center mb-8">
                <tier.icon className={`w-6 h-6 mr-3 ${tier.iconColor}`} />
                <h3 className="text-2xl font-bold text-text-primary">{tier.title}</h3>
              </div>
              
              <div className="flex flex-wrap justify-center items-center gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <div key={index} className="group">
                    <div className={`${tier.cardClass} bg-bg-primary rounded-2xl border border-border-light hover:border-primary-300 flex items-center justify-center hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-hidden`}>
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name}
                        className="max-h-12 max-w-[80%] object-contain opacity-70 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}