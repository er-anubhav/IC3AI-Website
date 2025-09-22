import { Twitter, Linkedin, Globe } from 'lucide-react';

const speakers = [
  {
    name: "Sarah Chen",
    title: "CTO at TechCorp",
    bio: "Leading AI innovation and cloud architecture with 15+ years of experience",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    social: { twitter: "#", linkedin: "#", website: "#" },
    expertise: ["AI/ML", "Cloud Architecture"]
  },
  {
    name: "Marcus Rodriguez",
    title: "Founder of StartupX",
    bio: "Serial entrepreneur and venture capitalist shaping the future of tech",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    social: { twitter: "#", linkedin: "#", website: "#" },
    expertise: ["Entrepreneurship", "VC"]
  },
  {
    name: "Dr. Emily Watson",
    title: "AI Research Director",
    bio: "Machine learning pioneer focused on ethical AI and responsible innovation",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    social: { twitter: "#", linkedin: "#", website: "#" },
    expertise: ["Ethical AI", "Research"]
  },
  {
    name: "David Kim",
    title: "VP of Engineering",
    bio: "Expert in scaling engineering teams and building resilient systems",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    social: { twitter: "#", linkedin: "#", website: "#" },
    expertise: ["Engineering", "Leadership"]
  }
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Speakers
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Learn from visionary leaders who are defining the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="group">
              <div className="bg-bg-primary rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border-light hover:border-primary-300 hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{speaker.name}</h3>
                  <p className="text-primary-500 font-semibold mb-3">{speaker.title}</p>
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">{speaker.bio}</p>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {speaker.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-bg-secondary rounded-full text-xs font-medium text-text-secondary border border-border-light">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex space-x-3">
                    {[
                      { icon: Twitter, href: speaker.social.twitter, color: 'hover:text-blue-400' },
                      { icon: Linkedin, href: speaker.social.linkedin, color: 'hover:text-blue-600' },
                      { icon: Globe, href: speaker.social.website, color: 'hover:text-green-500' }
                    ].map((social, socialIndex) => (
                      <a key={socialIndex} href={social.href} className={`p-2 bg-bg-secondary rounded-full hover:bg-bg-tertiary transition-all duration-200 text-text-muted ${social.color} group/social`}>
                        <social.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}