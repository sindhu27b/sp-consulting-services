import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <>
    <div
      className="relative text-white text-center py-32 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero image.png')"
      }}
    >
      <div className="absolute inset-0 bg-slate-800 opacity-60"></div>
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Reliable Tech Talent, Delivered.</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Stop searching. Start building. Get access to our vetted network of IT professionals and accelerate your projects today.
        </p>
        <Link to="/contact" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
          Get a Free Consultation
        </Link>
      </div>
    </div>
    
    <div className="py-16">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-sm font-bold uppercase text-gray-500 tracking-widest mb-8">
      Proudly connecting talent with leading companies
    </h2>
    
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6">
      {[
        "Innovate Inc.",
        "QuantumLeap",
        "Apex Solutions",
        "NextGen Systems",
        "DataWeave"
      ].map((name, index) => (
        <div
          key={index}
          className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 transition-all duration-300 hover:scale-105"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>


    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">Your On-Demand Partner for Mission-Critical Tech Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">IT Consulting & Strategy</h3>
            <p className="text-gray-600 mb-6">Get a clear roadmap for digital transformation that cuts costs and drives growth.</p>
            <Link to="/services/consulting" className="font-bold text-teal-500 hover:text-teal-700">Optimize Your Strategy →</Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Technology Staffing</h3>
            <p className="text-gray-600 mb-6">Fill critical roles fast with our network of pre-vetted, high-quality tech professionals.</p>
            <Link to="/services/staffing" className="font-bold text-teal-500 hover:text-teal-700">Find Top Talent →</Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Custom Software Development</h3>
            <p className="text-gray-600 mb-6">Build the exact software you need, on time and on budget, with our expert development teams.</p>
            <Link to="/services/development" className="font-bold text-teal-500 hover:text-teal-700">Build Your Solution →</Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomePage;
