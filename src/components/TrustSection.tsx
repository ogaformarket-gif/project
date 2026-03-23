import React from 'react';
import { CheckCircle, Lock, Truck } from 'lucide-react';

export default function TrustSection() {
  const features = [
    {
      icon: CheckCircle,
      title: 'Verified Runners',
      description: 'All our runners are thoroughly vetted and background-checked.',
    },
    {
      icon: Lock,
      title: 'Secure Communication',
      description: 'Your data and communications are encrypted and secure.',
    },
    {
      icon: Truck,
      title: 'Reliable Delivery',
      description: 'We guarantee on-time delivery or your money back.',
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-balance"
          style={{ color: '#1F2937' }}
        >
          Why Trust OgaForMarket?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <div className="mb-6 md:mb-8">
                  <Icon
                    className="w-12 h-12 md:w-14 md:h-14"
                    style={{ color: '#15BC04' }}
                  />
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 md:mb-4"
                  style={{ color: '#1F2937' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#6B7280' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
