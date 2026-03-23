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
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-16 text-balance"
          style={{ color: '#1F2937' }}
        >
          Why Trust OgaForMarket?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#F9FAFB' }}
              >
                <div className="mb-4">
                  <Icon
                    className="w-12 h-12"
                    style={{ color: '#15BC04' }}
                  />
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#1F2937' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-lg"
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
