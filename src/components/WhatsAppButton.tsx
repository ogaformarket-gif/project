import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      'https://wa.me/?text=Hello%20I%20want%20to%20get%20a%20runner%20from%20OgaForMarket';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
      style={{ backgroundColor: '#15BC04' }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </button>
  );
}
