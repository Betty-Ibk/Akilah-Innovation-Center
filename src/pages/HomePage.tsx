import React from 'react';
import { ArrowRight, BookOpen, Users, Lightbulb, Library } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import DonationOptions from '../components/DonationOptions';
import MentorSection from '../components/MentorSection';
import MenteeSection from '../components/MenteeSection';
import CareerHub from '../components/CareerHub/CareerHub';
import ResourceLibrary from '../components/ResourceLibrary';

export default function HomePage() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Technology Education',
      description: 'Comprehensive training in software development, data science, and digital skills.',
    },
    {
      icon: Users,
      title: 'Entrepreneurship',
      description: 'Mentorship and resources for students to launch their own tech ventures.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Collaborative space for students to work on real-world projects with industry partners.',
    },
    {
      icon: Library,
      title: 'Resource Library',
      description: 'Digital resources and learning materials for enrolled students.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Through Innovation & Education
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Building a brighter future through technology education, innovation, and entrepreneurship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#donate" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                  Support Our Mission
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a href="#programs" className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transform hover:scale-105 transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80" 
                alt="Students collaborating" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <program.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          <ResourceLibrary />
        </div>
      </section>

      <CareerHub />
      <MentorSection />
      <MenteeSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our programs or want to get involved? We'd love to hear from you.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your contribution helps us provide quality education and create opportunities for the next generation of innovators.
          </p>
          <DonationOptions />
        </div>
      </section>
    </>
  );
}