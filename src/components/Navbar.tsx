import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const handleGetRunner = () => {
    const element = document.getElementById('request');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full" style={{ backgroundColor: '#15BC04' }}></div>
              <span className="font-bold text-xl" style={{ color: '#1F2937' }}>
                OgaForMarket
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              About
            </Link>
            <button
              onClick={handleGetRunner}
              className="px-6 py-2 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: '#15BC04' }}
            >
              Get a Runner
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
