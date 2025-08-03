import React from 'react';
import PageHero from '../../components/common/PageHero';
import CheckIcon from '../../components/common/CheckIcon';

const ServiceConsultingPage = () => (
  <>
    <PageHero
      title="IT Consulting & Strategy"
      subtitle="Get a clear, actionable technology roadmap that aligns with your business objectives."
    />
    <div className="py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="content-text">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Unlock Growth with Strategic IT</h2>
          <p className="text-gray-600 mb-4">
            In a competitive landscape, the right technology strategy is not just an advantage—it's a necessity. We help you cut through the noise to focus on solutions that deliver real ROI.
          </p>
          <ul className="space-y-3 mt-6">
            <li className="flex items-start"><CheckIcon /> <div><strong>Digital Transformation Planning:</strong> We assess your current state and build a future-proof plan for scalable growth.</div></li>
            <li className="flex items-start"><CheckIcon /> <div><strong>Cloud Infrastructure & Migration:</strong> Optimize costs and improve security by moving to the right cloud environment for your needs.</div></li>
            <li className="flex items-start"><CheckIcon /> <div><strong>Cybersecurity Risk Assessment:</strong> Protect your assets by identifying vulnerabilities before they become threats.</div></li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
          alt="Strategy"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  </>
);

export default ServiceConsultingPage;
