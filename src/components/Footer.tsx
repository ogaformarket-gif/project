import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      className="py-12 px-4 sm:px-6 lg:px-8 border-t"
      style={{ backgroundColor: '#1F2937', borderColor: '#374151' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">OgaForMarket</h3>
            <p className="text-gray-400">
              Connecting busy people with reliable market runners for hassle-free shopping.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <p className="text-gray-400">
              Have questions? We're here to help. Contact us anytime.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400">
            © 2024 OgaForMarket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
