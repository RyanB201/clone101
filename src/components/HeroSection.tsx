import React from 'react';

interface HeroSectionProps {
  onGetStarted?: () => void;
}

const GitHubIcon = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-5 h-5">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" clipRule="evenodd" />
  </svg>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onGetStarted }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-orange-50 px-4">
      {/* Top Banner */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-flex items-center rounded-full bg-gray-100/80 px-4 py-1 text-sm font-medium text-gray-500 shadow-sm border border-gray-200">
          Introducing our new components
          <a
            href="#"
            className="ml-2 font-semibold text-gray-900 hover:underline flex items-center"
          >
            Learn more <span className="ml-1">→</span>
          </a>
        </span>
      </div>
      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center w-full flex-1 pt-32 pb-16">
        {/* Title */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-b from-black to-gray-700 bg-clip-text text-transparent leading-tight mb-8">
          Build faster with beautiful components
        </h1>
        {/* Subtitle */}
        <p className="text-gray-500 text-center max-w-xl mx-auto text-lg sm:text-xl mb-8 px-2">
          Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <button
            onClick={onGetStarted}
            className="px-6 py-3 rounded-md font-semibold text-base bg-black text-white shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Get Started
          </button>
          <a
            href="https://github.com/RyanB201/clone101"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-base text-black bg-transparent border border-transparent hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <span className="mr-2 flex items-center">{GitHubIcon}</span>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 