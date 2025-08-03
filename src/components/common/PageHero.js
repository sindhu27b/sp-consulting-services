import React from 'react';

const PageHero = ({ title, subtitle }) => (
  <div
    className="relative bg-slate-800 text-white text-center py-20 px-4 bg-cover bg-center"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')"
    }}
  >
    <div className="absolute inset-0 bg-slate-800 opacity-70"></div>
    <div className="relative">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && <p className="text-xl mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  </div>
);

export default PageHero;
