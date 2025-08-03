import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="bg-slate-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-2">Ready to elevate your business?</h2>
        <p className="text-xl text-gray-300 mb-6">Let's talk. Call us at +1 (940) 555-0123</p>
        <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          Schedule a Consultation
        </Link>
      </div>
      <div className="py-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} - SP Consulting Services. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
