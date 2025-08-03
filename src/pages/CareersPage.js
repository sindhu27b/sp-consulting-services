import React from 'react';
import PageHero from '../components/common/PageHero';
import { useForm, ValidationError } from '@formspree/react';

const CareersPage = () => {
  // use actual Formspree form ID
  const [state, handleSubmit] = useForm("mnnzbqew");

  if (state.succeeded) {
    return (
      <div className="py-16 bg-gray-50 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Thank you for your application!</h2>
          <p className="text-lg text-gray-600">
            We have received your submission and will be in touch if your profile is a good fit.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHero title="Build Your Career With Us" />
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            At SP Consulting, we seek passionate individuals eager to solve challenges and grow with us. 
            We match your skills and ambitions with the right projects, fostering an environment of learning and professional development.
          </p>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Apply Now</h2>
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input id="fullName" type="text" name="fullName" required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Full Name" field="fullName" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="email" type="email" name="email" required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position Applying For</label>
                <select id="position" name="position" required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500">
                  <option>Senior Cloud Engineer</option>
                  <option>Data Analyst</option>
                  <option>IT Project Manager</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell Us More</label>
                <textarea id="message" name="message" rows="4" required 
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <button type="submit" disabled={state.submitting} 
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:bg-gray-400">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
