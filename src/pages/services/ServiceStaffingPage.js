import React from 'react';
import PageHero from '../../components/common/PageHero';

const ServiceStaffingPage = () => (
  <>
    <PageHero
      title="Technology Staffing"
      subtitle="Fill your critical roles faster with our network of pre-vetted, high-quality IT professionals."
    />
    <div className="py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
          alt="Staffing"
          className="rounded-lg shadow-lg"
        />
        <div className="content-text">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">The Right Talent, Right Now</h2>
          <p className="text-gray-600 mb-4">
            Finding qualified technical talent is the biggest bottleneck for many companies. We solve that problem. Our rigorous 5-step vetting process ensures you only interview candidates who are technically skilled, culturally aligned, and ready to contribute from day one.
          </p>
          <p className="text-gray-600">
            Whether you need a single developer for a short-term project or an entire team for a long-term engagement, we provide the flexibility and quality you need to succeed.
          </p>
        </div>
      </div>
    </div>
  </>
);

export default ServiceStaffingPage;
