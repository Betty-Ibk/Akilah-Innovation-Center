import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { careerPaths } from '../data/careerPaths';

export default function CareerPathPage() {
  const { pathId } = useParams();
  const navigate = useNavigate();
  
  const career = careerPaths.find(c => c.id === pathId);

  if (!career) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Career Path Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Career Hub
        </button>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="flex items-center mb-6">
            <career.icon className="w-12 h-12 text-blue-600 mr-4" />
            <h1 className="text-3xl font-bold text-gray-900">{career.title}</h1>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">About this Career Path</h2>
            <p className="text-gray-600 mb-6">{career.description}</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Skills You'll Learn</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {career.skills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Opportunities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              {career.opportunities.map((opportunity, index) => (
                <li key={index} className="mb-2">{opportunity}</li>
              ))}
            </ul>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate(`/register/${pathId}`)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                Register for this Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}