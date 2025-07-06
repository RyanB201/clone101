import Button from './components/Button';
import Dashboard from './components/Dashboard';

const GitHubIcon = (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className="w-5 h-5">
    <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" clipRule="evenodd" />
  </svg>
);

export default function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-gradient-to-b from-white via-orange-50 to-orange-100 overflow-hidden px-4 pb-32">
        {/* Notification Banner */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-700 shadow">
            Introducing our new components
            <a href="#" className="ml-2 font-semibold text-gray-900 hover:underline flex items-center">Learn more <span className="ml-1">→</span></a>
          </span>
        </div>
        {/* Headline */}
        <div className="flex flex-col items-center justify-center flex-1 pt-32 pb-12">
          <h1 className="text-5xl sm:text-7xl font-extrabold text-gray-800 text-center leading-tight drop-shadow-xl">
            Build faster with beautiful<br />components
          </h1>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl text-center">
            Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Button>
              Get Started
            </Button>
            <Button icon={GitHubIcon} className="bg-white text-gray-900 border border-gray-200 hover:bg-gray-50">
              GitHub
            </Button>
          </div>
        </div>
      </section>
      <div className="-mt-24 md:-mt-32 lg:-mt-40 z-10 relative">
        <Dashboard />
      </div>
    </>
  );
} 