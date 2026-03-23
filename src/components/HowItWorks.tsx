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
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-16 text-balance"
          style={{ color: '#1F2937' }}
        >
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#15BC04' }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ color: '#1F2937' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-lg"
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
