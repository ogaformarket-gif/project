import React from 'react';
import { DollarSign, Clock, TrendingUp } from 'lucide-react';

export default function RunnerSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn Money',
      description: 'Make competitive earnings on every successful delivery.',
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work whenever you want, set your own schedule.',
    },
    {
      icon: TrendingUp,
      title: 'Grow Your Business',
      description: 'Build a steady income stream and grow your customer base.',
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-balance"
          style={{ color: '#1F2937' }}
        >
          For Runners
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl text-center mb-12 md:mb-20 text-balance leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          Become a trusted runner and earn on your own terms
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl"
                style={{ backgroundColor: '#F9FAFB', border: '1px solid #E5E7EB' }}
              >
                <div className="mb-6 md:mb-8">
                  <Icon
                    className="w-12 h-12 md:w-14 md:h-14"
                    style={{ color: '#FBB040' }}
                  />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 md:mb-4"
                  style={{ color: '#1F2937' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#6B7280' }}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
