import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import slides from './slideData.json'

const GSOCPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-200 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-800 mb-4">
            Google Summer of Code
          </h1>
          <p className="text-lg md:text-xl text-indigo-600">
            Comprehensive Guide ({currentSlide + 1}/{slides.length})
          </p>
        </div>

        {/* Slide Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8 min-h-[400px] relative transition-all duration-300">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-8 text-indigo-700">
            {slides[currentSlide].title}
          </h2>
          <div className="flex flex-col md:flex-row items-start md:space-x-8 mb-8">
            <div className="flex-1">
              <ul className="space-y-4 text-lg text-gray-700">
                {slides[currentSlide].content.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-indigo-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {currentSlide === 0 && (
              <div className="flex-shrink-0 mt-6 md:mt-0">
                <img
                  src={slides[currentSlide].image}
                  alt="Vishvamsinh Vaghela"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-lg mx-auto"
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 md:p-4 rounded-full transition-colors ${currentSlide === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-indigo-600 hover:bg-indigo-100'
              }`}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Slide indicators */}
          <div className="flex space-x-2 overflow-x-auto py-2 px-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${currentSlide === index
                  ? 'bg-indigo-600'
                  : 'bg-indigo-300 hover:bg-indigo-400'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 md:p-4 rounded-full transition-colors ${currentSlide === slides.length - 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-indigo-600 hover:bg-indigo-100'
              }`}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-lg text-indigo-600">
            Created by <strong><a href='https://www.github.com/vishvamsinh28'>Vishvamsinh Vaghela</a></strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSOCPresentation;
