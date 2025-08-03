import React from 'react';
import PageHero from '../../components/common/PageHero';

const ServiceDevelopmentPage = () => (
  <>
    <PageHero
      title="Custom Software Development"
      subtitle="Build the exact tools your business needs to thrive, delivered on time and on budget."
    />
    <div className="py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="content-text">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">From Concept to Code</h2>
          <p className="text-gray-600 mb-4">
            Off-the-shelf solutions can't solve unique business challenges. We specialize in building bespoke software, web applications, and mobile apps that are tailored to your exact specifications. Our agile development process ensures transparency, quality, and a final product that meets your users' needs and your business goals.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
          alt="Development"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </>
);

export default ServiceDevelopmentPage;
