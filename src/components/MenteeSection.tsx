import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { UserPlus } from 'lucide-react';
import { mentees } from '../data/mentorMenteeData';

export default function MenteeSection() {
  const navigate = useNavigate();

  return (
    <section id="mentees" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Success Stories</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Meet some of our talented students who are shaping the future of technology in East Africa.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {mentees.map((mentee, index) => (
            <ProfileCard key={index} {...mentee} />
          ))}
        </div>

        {/* Mentee Enrollment Card */}
        <div className="mt-16 bg-gray-50 rounded-lg shadow-lg p-8 text-center">
          <UserPlus className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to transform your career in technology? Join our program and get access to world-class
            mentorship, resources, and opportunities.
          </p>
          <button 
            onClick={() => navigate('/mentee-application')}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}