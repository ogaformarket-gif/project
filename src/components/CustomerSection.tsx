import React from 'react';
import { Clock, Zap, Heart } from 'lucide-react';

export default function CustomerSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more hours wasted in crowded markets. We handle your shopping.',
    },
    {
      icon: Zap,
      title: 'Stress-Free',
      description: 'Focus on what matters while our runners handle your errands.',
    },
    {
      icon: Heart,
      title: 'Peace of Mind',
      description: 'Reliable service from people you can trust with your shopping.',
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4 text-balance"
          style={{ color: '#1F2937' }}
        >
          For Customers
        </h2>
        <p
          className="text-base sm:text-lg md:text-xl text-center mb-12 md:mb-20 text-balance leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          Experience convenience like never before
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}
              >
                <div className="mb-6 md:mb-8">
                  <Icon
                    className="w-12 h-12 md:w-14 md:h-14"
                    style={{ color: '#018F29' }}
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
