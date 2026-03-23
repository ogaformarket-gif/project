import React, { useState } from 'react';

export default function RunnerSignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    experience: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    if (!formData.area.trim()) {
      newErrors.area = 'Area is required';
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
    setFormData({ name: '', phone: '', area: '', experience: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="runner" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-4 text-balance"
          style={{ color: '#1F2937' }}
        >
          Become a Runner
        </h2>
        <p
          className="text-xl text-center mb-12 text-balance"
          style={{ color: '#6B7280' }}
        >
          Join our network of trusted runners and start earning
        </p>

        {submitted && (
          <div
            className="mb-8 p-4 rounded-lg text-white text-center font-semibold"
            style={{ backgroundColor: '#15BC04' }}
          >
            Thank you for applying! We will contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Full Name
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
              Phone Number
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
              htmlFor="area"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Service Area
            </label>
            <input
              type="text"
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: errors.area ? '#EF4444' : '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Which area do you want to serve?"
            />
            {errors.area && <p className="mt-2 text-red-600 text-sm">{errors.area}</p>}
          </div>

          <div>
            <label
              htmlFor="experience"
              className="block text-sm font-semibold mb-2"
              style={{ color: '#1F2937' }}
            >
              Experience (Optional)
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors"
              style={{
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF',
              }}
              placeholder="Tell us about your experience in delivery or customer service..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white text-lg transition-all hover:shadow-lg"
            style={{ backgroundColor: '#FBB040', color: '#1F2937' }}
          >
            Apply as a Runner
          </button>
        </form>
      </div>
    </section>
  );
}
