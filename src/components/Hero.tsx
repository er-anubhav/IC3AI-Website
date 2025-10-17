interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ }: HeroProps) {
  return (
    <section
      id="home"
      className="pt-24 h-[300.6px] flex items-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("/ITS Engg.png")',
        backgroundSize: '1600.6px 299.6px',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Gradient overlay for better text readability and visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full -translate-x-16 -translate-y-16 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary/20 rounded-full translate-x-16 translate-y-16 blur-3xl" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center items-center px-6 z-10" style={{ paddingTop: '2rem' }}>
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Main title with enhanced styling */}
          <h1 
            className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
            style={{ 
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              background: 'linear-gradient(to right, #ffffff, #e2e8f0)',
              WebkitBackgroundClip: 'text'
            }}
          >
            International Conference On Advances In Computing , Communication And Artificial Intelligence (IC3AI-2026)
          </h1>

          {/* Enhanced button */}
          <div className="flex justify-center gap-4">
            {/* <button
              onClick={() => scrollToSection('registration')}
              className="group relative px-8 py-3 overflow-hidden rounded-lg bg-primary hover:bg-primary/90 transition-colors"
            >
              <span className="relative font-semibold text-white tracking-wider">
                Register Now
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}