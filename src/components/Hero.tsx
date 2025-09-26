import { ChevronRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-bg-secondary to-bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-2xl md:text-4xl font-bold text-surface-primary leading-tight mb-6">
              INTERNATIONAL CONFERENCE ON ADVANCE
              <span className="text-primary block">COMPUTING COMMUNICATION AND ARTIFICIAL INTELLIGENCE</span>
            </h1>
            <p className="text-xl text-surface-secondary mb-8 leading-relaxed">
              The International Conference on Advance Computing, Communication and Artificial Intelligence (IC3AI) is a premier global event that brings together researchers, academicians, scientists, and industry professionals to showcase innovations and share cutting-edge research. Covering diverse areas such as high-performance computing, next-generation communication systems, artificial intelligence, IoT, cloud technologies, and cybersecurity, the conference provides a vibrant platform for knowledge exchange. With inspiring keynote talks, engaging technical sessions, and hands-on workshops, IC3AI fosters collaboration and drives forward the future of digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('programs')}
                className="btn-primary px-8 py-4 rounded-lg flex items-center justify-center"
              >
                Explore Programs
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="btn-secondary px-8 py-4 rounded-lg"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-bg rounded-3xl transform rotate-6"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-custom-lg border border-surface">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-surface-secondary">Research Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-surface-secondary">Faculty Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">2000+</div>
                    <div className="text-surface-secondary">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-surface-secondary">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}