import React, { useState } from 'react';

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
      
        <a href="/" className="text-lg font-bold text-sky-400">
          Smart Mobile
        </a>

       
        <div className="block md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

      
        <div className="hidden space-x-4 md:flex">
          <a href="/" className="px-3 py-2 text-white rounded hover:bg-white hover:text-black hover:font-bold">
            Home
          </a>
          <a href="#" className="px-3 py-2 text-white rounded hover:bg-white hover:text-black hover:font-bold">
            About
          </a>
          <a href="#" className="px-3 py-2 text-white rounded hover:bg-white hover:text-black hover:font-bold">
            Services
          </a>
          <a href="#" className="px-3 py-2 text-white rounded hover:bg-white hover:text-black hover:font-bold">
            Contact
          </a>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-black hover:font-bold">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:text-black hover:font-bold">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:text-black hover:font-bold">
            Services
          </a>
          <a href="#" className="block px-4 py-2 text-white hover:bg-white hover:text-black hover:font-bold">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
