import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    image: 'https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493191.jpg?t=st=1733152629~exp=1733156229~hmac=8b0f4c7615a54b8496fe29477cef9534889d90bd5435d2ded279e4b3179025a0&w=900',
    heading: 'Welcome to Our Website',
    description: 'Discover amazing features and services.',
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/people-celebrating-world-population-day_23-2151493248.jpg?t=st=1733152662~exp=1733156262~hmac=bc2f4e242c5b4ec346d4a94d648c5a6c58130e5a4c6f03478a3b11a8c8ce3afc&w=1060',
    heading: 'Grow Your Business',
    description: 'We help you achieve your business goals.',
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/W30Gw8bajvc0toeHHU1NVJtRHTbhCy4sa1NXqTvNnD4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmdjYi5yZXMuaW4v/aW1hZ2VzL2hvbWUv/YmlvaW5mbzMuZ2lm.gif',
    heading: 'Join Us Today',
    description: 'Become a part of our growing community.',
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Slides */}
      <div className="w-full h-full flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-white"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg">
              <h1 className="text-4xl font-bold mb-2 title text-center">{new Date().toLocaleTimeString()}</h1>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition duration-300 ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
