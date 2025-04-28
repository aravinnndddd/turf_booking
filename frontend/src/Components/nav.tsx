import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
          <Link to="/" className="flex items-center">
           
            <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-blue-600' : 'text-white'}`}>
              SportSpot
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>
              Home
            </Link>
            <div className="relative group">
              <button className={`flex items-center ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>
                Facilities 
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 origin-top-left z-50">
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Cricket Stadiums</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Football Fields</Link>
                <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">Badminton Courts</Link>
              </div>
            </div>
            <Link to="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>
              Pricing
            </Link>
            <Link to="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>
              About
            </Link>
            <Link to="#" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-500 transition-colors duration-200`}>
              Contact
            </Link>
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
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="text-white bg-transparent hover:bg-white/20 px-4 py-2 rounded-md transition-colors duration-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <Link to="/" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
              Home
            </Link>
            <Link to="#" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
              Facilities
            </Link>
            <Link to="#" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
              Pricing
            </Link>
            <Link to="#" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
              About
            </Link>
            <Link to="#" className="block py-2 px-4 text-gray-800 hover:bg-blue-50 hover:text-blue-600">
              Contact
            </Link>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/login"
                className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md mb-2 transition-colors duration-200"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;