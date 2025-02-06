import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Globe } from 'lucide-react';

export default function ResourceLibrary() {
  const navigate = useNavigate();

  return (
    <div className="mt-16 grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
        <GraduationCap className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Educational Access</h3>
        <p className="text-gray-600 mb-6">
          Get access to our comprehensive digital library featuring courses, tutorials, and resources.
          Available exclusively to enrolled students.
        </p>
        <button 
          onClick={() => navigate('/student-login')}
          className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition transform hover:scale-105"
        >
          Student Login
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
        <Globe className="w-12 h-12 text-blue-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Partner University Resources</h3>
        <p className="text-gray-600 mb-6">
          Access resources from our partner universities worldwide. Benefit from international
          collaborations and academic partnerships.
        </p>
        <button 
          onClick={() => navigate('/partnerships')}
          className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition transform hover:scale-105"
        >
          View Partnerships
        </button>
      </div>
    </div>
  );
}