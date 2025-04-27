import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full px-4 py-2 bg-white/10 sticky top-0 shadow-deep lg:px-8 lg:py-3 backdrop-blur-sm backdrop-saturate-150 z-[9999]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-300">TurfTime</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-black font-medium">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Book Appoinments</a></li>
          <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          <li><a href="#" className="hover:text-blue-500">Login/Register</a></li>
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-blue-600"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-2 text-white font-medium">
          <li><a href="#" className="block hover:text-blue-500">Home</a></li>
          <li><a href="#" className="block hover:text-blue-500">Book</a></li>
          <li><a href="#" className="block hover:text-blue-500">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
