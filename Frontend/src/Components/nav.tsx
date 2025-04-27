import React, { useState, useEffect } from 'react';
import { Menu, X, Percent as Soccer, ChevronDown } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Soccer className={`w-8 h-8 ${scrolled ? 'text-green-600' : 'text-white'}`} />
            <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-green-600' : 'text-white'}`}>
              TurfBook
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
              Home
            </a>
       
            <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
              Pricing
            </a>
            <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
              About
            </a>
            <a href="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-green-500 transition-colors duration-200`}>
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-white'}`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Login/Signup Button (Desktop) */}
          <div className="hidden md:block">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-200">
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600">
              Home
            </a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600">
              Fields
            </a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600">
              Pricing
            </a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600">
              About
            </a>
            <a href="#" className="block py-2 px-4 text-gray-800 hover:bg-green-50 hover:text-green-600">
              Contact
            </a>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-200">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;