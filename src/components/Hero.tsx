import React from 'react';

export default function Hero() {
  const handleScrollToRequest = () => {
    const element = document.getElementById('request');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToRunner = () => {
    const element = document.getElementById('runner');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-balance leading-tight"
            style={{ color: '#1F2937' }}
          >
            Your Personal Market Runner
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 md:mb-16 text-balance leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            We connect you with trusted runners to shop and deliver for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button
              onClick={handleScrollToRequest}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white text-base sm:text-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: '#15BC04' }}
            >
              Get a Runner
            </button>
            <button
              onClick={handleScrollToRunner}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all hover:shadow-lg"
              style={{ backgroundColor: '#FBB040', color: '#1F2937' }}
            >
              Become a Runner
            </button>
            <button
              onClick={handleScrollToAbout}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg border-2 transition-all"
              style={{ borderColor: '#15BC04', color: '#15BC04' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
