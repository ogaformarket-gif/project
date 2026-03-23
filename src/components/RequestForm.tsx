import React, { useState } from 'react';

export default function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    items: '',
    location: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!formData.items.trim()) {
      newErrors.items = 'Please tell us what you need';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setFormData({ name: '', phone: '', items: '', location: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="request" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-4 text-balance"
          style={{ color: '#1F2937' }}
        >
          Request a Runner
        </h2>
        <p
          className="text-xl text-center mb-12 text-balance"
          style={{ color: '#6B7280' }}
        >
          Fill in your details and we will match you with a trusted runner
        </p>

        {submitted && (
          <div
            className="mb-8 p-4 rounded-lg text-white text-center font-semibold"
            style={{ backgroundColor: '#15BC04' }}
          >
            Thank you! We will contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: errors.name ? '#EF4444' : '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Your full name"
            />
            {errors.name && <p className="mt-2 text-red-600 text-sm">{errors.name}</p>}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: errors.phone ? '#EF4444' : '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Your phone number"
            />
            {errors.phone && <p className="mt-2 text-red-600 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label
              htmlFor="items"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              What do you need?
            </label>
            <textarea
              id="items"
              name="items"
              value={formData.items}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: errors.items ? '#EF4444' : '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Describe the items you want us to shop for..."
              rows={4}
            />
            {errors.items && <p className="mt-2 text-red-600 text-sm">{errors.items}</p>}
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: errors.location ? '#EF4444' : '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Your delivery location"
            />
            {errors.location && <p className="mt-2 text-red-600 text-sm">{errors.location}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-lg"
            style={{ backgroundColor: '#15BC04' }}
          >
            Request a Runner
          </button>
        </form>
      </div>
    </section>
  );
}
