import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CareerPathPage from './pages/CareerPathPage';
import RegistrationPage from './pages/RegistrationPage';
import StudentLoginPage from './pages/StudentLoginPage';
import PartnershipsPage from './pages/PartnershipsPage';
import MentorApplicationPage from './pages/MentorApplicationPage';
import MenteeApplicationPage from './pages/MenteeApplicationPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career/:pathId" element={<CareerPathPage />} />
        <Route path="/register/:pathId" element={<RegistrationPage />} />
        <Route path="/student-login" element={<StudentLoginPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/mentor-application" element={<MentorApplicationPage />} />
        <Route path="/mentee-application" element={<MenteeApplicationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;