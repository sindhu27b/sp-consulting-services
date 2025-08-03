// FILE: src/App.js
// This file sets up the routing for the entire application.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServiceConsultingPage from './pages/services/ServiceConsultingPage';
import ServiceStaffingPage from './pages/services/ServiceStaffingPage';
import ServiceDevelopmentPage from './pages/services/ServiceDevelopmentPage';
import TrainingPage from './pages/TrainingPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './pages/ScrollToTop';


function App() {
  return (
    <Router>
      <div className="font-sans bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services/consulting" element={<ServiceConsultingPage />} />
            <Route path="/services/staffing" element={<ServiceStaffingPage />} />
            <Route path="/services/development" element={<ServiceDevelopmentPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
