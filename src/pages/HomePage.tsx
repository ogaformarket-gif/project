import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import TrustSection from '../components/TrustSection';
import CustomerSection from '../components/CustomerSection';
import RunnerSection from '../components/RunnerSection';
import RequestForm from '../components/RequestForm';
import RunnerSignupForm from '../components/RunnerSignupForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />
      <Hero />
      <HowItWorks />
      <TrustSection />
      <CustomerSection />
      <RunnerSection />
      <RequestForm />
      <RunnerSignupForm />
      <Footer />
    </div>
  );
}
