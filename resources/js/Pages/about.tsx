import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';

const About = () => {
  return (
   <>
    <Head title='About'/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section Title */}
        <div className="text-center py-12">
          <h2 className="text-4xl font-extrabold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">Learn more about who we are and what we do.</p>
        </div>

        {/* About Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              We are a passionate team focused on delivering high-quality services to our customers. Our mission is to provide solutions that improve efficiency and enhance user experience.
            </p>
            <p className="text-lg text-gray-700">
              With years of experience in the industry, we bring innovation and professionalism to every project. Our team is committed to meeting the diverse needs of our clients while ensuring the best outcomes.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
            >
              Contact Us for More Info
            </a>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?t=st=1733394110~exp=1733397710~hmac=f775e7a59ff4a8c67099d35d2495e246ac3026a49c8fadfd22944140f89d08c5&w=1060" // Replace with your actual image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default About;
