import React from 'react';
import { ShoppingCart, Users, Package } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell us what you need',
      description: 'Share your shopping list and location through our simple form.',
      icon: ShoppingCart,
    },
    {
      number: '2',
      title: 'Get matched with a runner',
      description: 'We connect you with a trusted, verified runner in your area.',
      icon: Users,
    },
    {
      number: '3',
      title: 'Receive your items',
      description: 'Your runner shops efficiently and delivers to your doorstep.',
      icon: Package,
    },
  ];

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-20 text-balance"
          style={{ color: '#1F2937' }}
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center px-4">
                <div className="mb-6 md:mb-8 flex justify-center">
                  <div
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#15BC04' }}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>
                </div>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-3 md:mb-4"
                  style={{ color: '#1F2937' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-base sm:text-lg leading-relaxed"
                  style={{ color: '#6B7280' }}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
