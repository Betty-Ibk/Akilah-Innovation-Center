import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Globe2, GraduationCap, Users } from 'lucide-react';

const partners = [
  {
    category: 'Universities',
    items: [
      {
        name: 'University of Technology',
        location: 'Cambridge, UK',
        description: 'Leading research institution in computer science and engineering',
        image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        name: 'African Institute of Science',
        location: 'Nairobi, Kenya',
        description: 'Premier institution for technology education in East Africa',
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1986&q=80'
      },
      {
        name: 'Digital Innovation University',
        location: 'Singapore',
        description: 'Specialized in AI and digital transformation',
        image: 'https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ]
  },
  {
    category: 'Industry Partners',
    items: [
      {
        name: 'TechCorp Solutions',
        location: 'Global',
        description: 'Leading provider of enterprise software solutions',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        name: 'Innovation Labs',
        location: 'San Francisco, USA',
        description: 'Research and development in emerging technologies',
        image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      },
      {
        name: 'African Tech Ventures',
        location: 'Lagos, Nigeria',
        description: 'Supporting technology startups across Africa',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
      }
    ]
  }
];

const stats = [
  { icon: Building2, label: 'Partner Institutions', value: '50+' },
  { icon: Globe2, label: 'Countries', value: '25' },
  { icon: Users, label: 'Student Exchanges', value: '1000+' },
  { icon: GraduationCap, label: 'Joint Programs', value: '30' }
];

export default function PartnershipsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Home
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Global Partnerships</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading institutions and organizations worldwide to provide
            exceptional educational opportunities and innovative solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Partners List */}
        {partners.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{category.category}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {category.items.map((partner, pIndex) => (
                <div key={pIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">{partner.location}</p>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Join our global network of educational institutions and industry leaders in shaping
            the future of technology education.
          </p>
          <button className="inline-flex items-center px-6 py-3 border border-white rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
            Contact Us About Partnership
          </button>
        </div>
      </div>
    </div>
  );
}