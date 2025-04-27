import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-end pb-20 md:pb-32">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg')] bg-cover bg-center bg-fixed"
      >
        {/* Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
            Book Premier Turf Fields With Ease
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-white/90 max-w-2xl">
            Discover, reserve, and play on the best turf fields in your area. 
            Perfect for teams, leagues, and casual games.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-green-400/90 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center">
              Book now <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-white/20 hover:bg-white/30 border-2 border-white/80 text-white font-semibold py-3 px-6 rounded-md backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Explore facilities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;