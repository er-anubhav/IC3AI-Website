import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-secondary-400/20 to-primary-400/20 rounded-full blur-3xl float-animation" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-bg-secondary/80 backdrop-blur-sm border border-border-light mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-text-secondary">Early Bird Registration Open</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text">TechSummit</span>
            <br />
            <span className="text-text-primary">2024</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
            Where innovation meets inspiration. Join 500+ tech leaders for three days of 
            cutting-edge insights and meaningful connections.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              { icon: Calendar, label: 'March 15-17', sublabel: '2024' },
              { icon: MapPin, label: 'Moscone Center', sublabel: 'San Francisco' },
              { icon: Users, label: '500+ Attendees', sublabel: 'Tech Leaders' },
              { icon: Clock, label: '3 Days', sublabel: 'Full Program' }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-border-light hover:border-primary-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <stat.icon className="w-6 h-6 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-text-primary mb-1 text-sm">{stat.label}</h3>
                  <p className="text-text-muted text-xs">{stat.sublabel}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center">
              Register Now - $299
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-border text-text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:border-primary-500 hover:text-primary-500 hover:bg-bg-secondary transition-all duration-300">
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}