import React from 'react';
import PageHero from '../components/common/PageHero';

const AboutPage = () => (
  <>
    <PageHero
      title="About Us"
      subtitle="We're a team of passionate strategists, developers, and talent specialists dedicated to delivering measurable value."
    />
    <div className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Success is Our Business</h2>
            <p className="text-gray-600 mb-4">
              SP Consulting Services was founded on the principle of making technology a true asset for our clients. Our client-centric approach means we invest time in understanding your business to become a seamless extension of your team.
            </p>
            <p className="text-gray-600">
              We don't just provide services; we build partnerships that drive results.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
              alt="Team collaborating on a project"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="text-center bg-gray-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Don't Just Take Our Word For It</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop"
              alt="Mark Chen, Head of Engineering"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-xl italic text-gray-600 max-w-3xl mx-auto">
                “SP Consulting's senior developer was a lifesaver. They onboarded in two days and helped us ship our critical project two weeks ahead of schedule.”
              </p>
              <p className="mt-4 font-bold text-slate-700">- Mark Chen, Head of Engineering at QuantumLeap</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutPage;
