import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  const values = [
    {
      title: 'Trust',
      description: 'We build lasting relationships through transparency and reliability.',
    },
    {
      title: 'Convenience',
      description: 'Making shopping effortless is at the heart of what we do.',
    },
    {
      title: 'Reliability',
      description: 'Our runners deliver every time, on time, without exception.',
    },
    {
      title: 'Community',
      description: 'We are building a network of people who care about each other.',
    },
  ];

  const handleScrollToRequest = () => {
    window.location.href = '/#request';
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6 text-balance"
            style={{ color: '#1F2937' }}
          >
            About OgaForMarket
          </h1>
          <p
            className="text-xl sm:text-2xl text-balance"
            style={{ color: '#6B7280' }}
          >
            We're on a mission to remove the stress of market shopping
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-8 text-balance"
            style={{ color: '#1F2937' }}
          >
            The Problem
          </h2>
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Market shopping in busy cities is overwhelming. Long queues, unpredictable vendors, time-consuming trips, and the stress of navigating crowded spaces consume precious hours. For working professionals, busy parents, and anyone with a demanding schedule, this is a significant burden.
          </p>
          <p
            className="text-xl leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            People need a solution that they can trust—someone reliable to handle their shopping while they focus on what matters most.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-8 text-balance"
            style={{ color: '#1F2937' }}
          >
            Our Solution
          </h2>
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            OgaForMarket connects busy people with verified, trusted runners who shop and deliver for them. Our platform is built on three pillars: trust, convenience, and reliability.
          </p>
          <p
            className="text-xl mb-6 leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            Instead of spending hours at the market, customers simply share their shopping list, location, and preferences with us. We match them with a trusted runner in their area who efficiently handles the shopping and delivers to their doorstep.
          </p>
          <p
            className="text-xl leading-relaxed"
            style={{ color: '#6B7280' }}
          >
            For runners, we provide a flexible, earning opportunity. They can work on their own schedule, serve their communities, and build a sustainable income.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-3xl font-bold mb-4 text-balance"
                style={{ color: '#1F2937' }}
              >
                Our Mission
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                To remove the stress of market shopping by connecting busy people with reliable market runners who deliver convenience, trust, and peace of mind.
              </p>
            </div>
            <div>
              <h2
                className="text-3xl font-bold mb-4 text-balance"
                style={{ color: '#1F2937' }}
              >
                Our Vision
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#6B7280' }}
              >
                To build a reliable network of trusted runners across cities, creating opportunities for work, earning, and community while transforming how people shop for their everyday needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-16 text-balance"
            style={{ color: '#1F2937' }}
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#15BC04' }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-lg"
                  style={{ color: '#6B7280' }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-6 text-balance"
            style={{ color: '#1F2937' }}
          >
            Ready to Experience OgaForMarket?
          </h2>
          <p
            className="text-xl mb-8 text-balance"
            style={{ color: '#6B7280' }}
          >
            Join thousands of happy customers and trusted runners who are part of the OgaForMarket family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <button
                className="px-8 py-3 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: '#15BC04' }}
              >
                Get a Runner
              </button>
            </Link>
            <Link to="/">
              <button
                className="px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:shadow-lg w-full sm:w-auto"
                style={{ backgroundColor: '#FBB040', color: '#1F2937' }}
              >
                Become a Runner
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
