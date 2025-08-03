import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMenu = () => setIsServicesOpen(false);
  const activeLinkStyle = { backgroundColor: '#14b8a6', color: 'white' };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="SP Consulting" className="h-14" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
          <NavLink to="/about" className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About Us</NavLink>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesMenuRef}>
            <button onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 flex items-center">
              Services
              <svg className={`w-4 h-4 ml-1 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none"
                stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {isServicesOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu">
                  <Link to="/services/consulting" onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Consulting & Strategy</Link>
                  <Link to="/services/staffing" onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Technology Staffing</Link>
                  <Link to="/services/development" onClick={closeMenu}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Custom Software Development</Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/training" className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Training</NavLink>
          <NavLink to="/careers" className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Careers</NavLink>
          <NavLink to="/contact" className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Home</NavLink>
            <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">About Us</NavLink>
            <NavLink to="/services/consulting" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">IT Consulting & Strategy</NavLink>
            <NavLink to="/services/staffing" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Technology Staffing</NavLink>
            <NavLink to="/services/development" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Custom Software Development</NavLink>
            <NavLink to="/training" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Training</NavLink>
            <NavLink to="/careers" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Careers</NavLink>
            <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
