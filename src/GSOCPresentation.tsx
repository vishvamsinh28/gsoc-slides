import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sun, Moon } from 'lucide-react';
import slides from './slideData.json';

const GSOCPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
      } transition-colors duration-300`}
    >
      <div className="max-w-5xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
              darkMode ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            <span className="block sm:hidden">GSoC</span>
            <span className="hidden sm:block">Google Summer of Code</span>
          </h1>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border transition-colors hover:bg-opacity-50"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun size={24} className="text-yellow-400" />
            ) : (
              <Moon size={24} className="text-gray-600" />
            )}
          </button>
        </div>

        <p className="text-lg sm:text-base mb-4 text-left">
          Comprehensive Guide ({currentSlide + 1}/{slides.length})
        </p>

        {/* Slide Content */}
        <div
          className={`rounded-lg shadow-md p-4 sm:p-6 mb-8 transition-all duration-300 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h2
            className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}
          >
            {slides[currentSlide].title}
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:space-x-8">
            <div className="flex-1">
              <ul className="space-y-3 text-sm sm:text-base md:text-lg">
                {slides[currentSlide].content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3"
                  >
                    <span
                      className={`w-2 h-2 rounded-full mt-1 ${
                        darkMode ? 'bg-blue-500' : 'bg-blue-600'
                      }`}
                    ></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {currentSlide === 0 && (
              <div className="flex-shrink-0 mt-6 sm:mt-0">
                <img
                  src={slides[currentSlide].image}
                  alt="Vishvamsinh Vaghela"
                  className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full shadow-lg mx-auto"
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
            className={`p-3 md:p-4 rounded-full border transition ${
              currentSlide === 0
                ? 'border-gray-400 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'border-blue-400 text-blue-400 hover:bg-blue-800'
                : 'border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex space-x-2 overflow-x-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition ${
                  currentSlide === index
                    ? darkMode
                      ? 'bg-blue-400'
                      : 'bg-blue-600'
                    : darkMode
                    ? 'bg-gray-700 hover:bg-gray-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-3 md:p-4 rounded-full border transition ${
              currentSlide === slides.length - 1
                ? 'border-gray-400 text-gray-400 cursor-not-allowed'
                : darkMode
                ? 'border-blue-400 text-blue-400 hover:bg-blue-800'
                : 'border-blue-500 text-blue-500 hover:bg-blue-50'
            }`}
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-sm sm:text-base">
            Created by{' '}
            <strong>
              <a
                href="https://www.github.com/vishvamsinh28"
                className={`hover:underline ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                Vishvamsinh Vaghela
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSOCPresentation;
