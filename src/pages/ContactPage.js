import React from 'react';
import PageHero from '../components/common/PageHero';
import { useForm, ValidationError } from '@formspree/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa"

const ContactPage = () => {
  // Replace "YOUR_FORM_ID" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("mnnzbqew");

  if (state.succeeded) {
    return (
      <>
        <PageHero title="Thank You!" />
        <div className="py-16 text-center">
          <div className="container mx-auto px-6">
            <p className="text-lg text-gray-600">
              Your message has been sent. We will get back to you shortly.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHero title="Contact Us" />
      <div className="py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Let's Build Something Great Together
            </h2>
            <p className="text-gray-600 mb-6">
              We are available from Monday to Friday, 9:00 AM - 5:00 PM CST.
            </p>

            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-teal-500 text-2xl" />
                <a href="mailto:contact@spconsulting.com" className="hover:text-teal-600 transition">
                  contact@spconsulting.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-teal-500 text-2xl" />
                <a href="tel:+19405550123" className="hover:text-teal-600 transition">
                  +1 (940) 555-0123
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-teal-500 text-2xl" />
                <span>123 Innovation Drive, Denton, TX 76201</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input id="name" type="text" name="name" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input id="contactEmail" type="email" name="email" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input id="subject" type="text" name="subject" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500" />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="contactMessage" name="message" rows="4" required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
              </div>
              <div>
                <button type="submit" disabled={state.submitting}
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 disabled:bg-gray-400">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
