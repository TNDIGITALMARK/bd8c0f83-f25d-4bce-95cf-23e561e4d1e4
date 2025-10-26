'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Upload, Calendar, Home, Mail, Phone, User } from 'lucide-react';

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1: Services
  services: string[];
  // Step 2: Property Details
  propertySize: string;
  propertyType: string;
  // Step 3: Timeline & Details
  timeline: string;
  additionalDetails: string;
  // Step 4: Contact Info
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    services: [],
    propertySize: '',
    propertyType: '',
    timeline: '',
    additionalDetails: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const services = [
    { id: 'lawn-care', label: 'Lawn Care & Maintenance', basePrice: 80 },
    { id: 'garden-design', label: 'Garden Design & Installation', basePrice: 2500 },
    { id: 'hardscaping', label: 'Hardscaping & Stonework', basePrice: 4000 },
    { id: 'tree-services', label: 'Tree & Shrub Care', basePrice: 150 },
  ];

  const propertySizes = [
    { id: 'small', label: 'Small (< 5,000 sq ft)', multiplier: 1.0 },
    { id: 'medium', label: 'Medium (5,000-10,000 sq ft)', multiplier: 1.5 },
    { id: 'large', label: 'Large (10,000-20,000 sq ft)', multiplier: 2.0 },
    { id: 'xl', label: 'Extra Large (> 20,000 sq ft)', multiplier: 2.5 },
  ];

  const timelines = [
    { id: 'asap', label: 'As soon as possible' },
    { id: '1-2-weeks', label: '1-2 weeks' },
    { id: '1-month', label: 'Within a month' },
    { id: 'flexible', label: 'Flexible / Planning ahead' },
  ];

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId],
    }));
  };

  const calculateEstimate = () => {
    if (formData.services.length === 0 || !formData.propertySize) return 0;

    const sizeMultiplier = propertySizes.find(s => s.id === formData.propertySize)?.multiplier || 1;
    const total = formData.services.reduce((sum, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return sum + (service?.basePrice || 0) * sizeMultiplier;
    }, 0);

    return total;
  };

  const canProceed = (step: FormStep): boolean => {
    switch (step) {
      case 1:
        return formData.services.length > 0;
      case 2:
        return formData.propertySize !== '' && formData.propertyType !== '';
      case 3:
        return formData.timeline !== '';
      case 4:
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      default:
        return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center bg-gray-50 py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-[hsl(82,25%,15%)] mb-4">
                Thank You for Your Request!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We've received your quote request and will get back to you within 24 hours.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">What happens next?</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(82,37%,37%)] flex-shrink-0 mt-0.5" />
                    <span>A member of our team will review your request</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(82,37%,37%)] flex-shrink-0 mt-0.5" />
                    <span>We'll reach out to schedule a free consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[hsl(82,37%,37%)] flex-shrink-0 mt-0.5" />
                    <span>You'll receive a detailed quote and project timeline</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600">
                  Estimated project value:{' '}
                  <span className="font-bold text-[hsl(82,37%,37%)] text-xl">
                    ${calculateEstimate().toLocaleString()}+
                  </span>
                </p>
                <a
                  href="/"
                  className="inline-block bg-[hsl(82,37%,37%)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors"
                >
                  Return to Homepage
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(82,37%,37%)] to-[hsl(82,37%,30%)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote</h1>
          <p className="text-xl text-white/95">
            Tell us about your project and we'll provide a detailed estimate
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                      currentStep >= step
                        ? 'bg-[hsl(82,37%,37%)] text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {currentStep > step ? <CheckCircle2 className="w-6 h-6" /> : step}
                  </div>
                  {step < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 transition-colors ${
                        currentStep > step ? 'bg-[hsl(82,37%,37%)]' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3">
            <span className="text-xs sm:text-sm font-medium text-gray-600">Services</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">Property</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">Timeline</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600">Contact</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-gray-50 flex-1">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Services */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[hsl(82,25%,15%)] mb-2">
                      Select Services
                    </h2>
                    <p className="text-gray-600">Choose all services you're interested in</p>
                  </div>

                  <div className="space-y-3">
                    {services.map((service) => (
                      <label
                        key={service.id}
                        className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.services.includes(service.id)
                            ? 'border-[hsl(82,37%,37%)] bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceToggle(service.id)}
                            className="w-5 h-5 text-[hsl(82,37%,37%)] rounded focus:ring-[hsl(82,37%,37%)]"
                          />
                          <span className="font-medium text-gray-800">{service.label}</span>
                        </div>
                        <span className="text-[hsl(82,37%,37%)] font-semibold">
                          Starting at ${service.basePrice}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Property Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[hsl(82,25%,15%)] mb-2">
                      Property Details
                    </h2>
                    <p className="text-gray-600">Help us understand your property</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Property Size
                    </label>
                    <div className="space-y-2">
                      {propertySizes.map((size) => (
                        <label
                          key={size.id}
                          className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            formData.propertySize === size.id
                              ? 'border-[hsl(82,37%,37%)] bg-green-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="propertySize"
                            value={size.id}
                            checked={formData.propertySize === size.id}
                            onChange={(e) =>
                              setFormData({ ...formData, propertySize: e.target.value })
                            }
                            className="w-4 h-4 text-[hsl(82,37%,37%)] focus:ring-[hsl(82,37%,37%)]"
                          />
                          <span className="ml-3 font-medium text-gray-800">{size.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="new-construction">New Construction</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[hsl(82,25%,15%)] mb-2">
                      Project Timeline
                    </h2>
                    <p className="text-gray-600">When would you like to start?</p>
                  </div>

                  <div className="space-y-2">
                    {timelines.map((timeline) => (
                      <label
                        key={timeline.id}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.timeline === timeline.id
                            ? 'border-[hsl(82,37%,37%)] bg-green-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="timeline"
                          value={timeline.id}
                          checked={formData.timeline === timeline.id}
                          onChange={(e) =>
                            setFormData({ ...formData, timeline: e.target.value })
                          }
                          className="w-4 h-4 text-[hsl(82,37%,37%)] focus:ring-[hsl(82,37%,37%)]"
                        />
                        <Calendar className="w-5 h-5 ml-3 mr-2 text-gray-400" />
                        <span className="font-medium text-gray-800">{timeline.label}</span>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      value={formData.additionalDetails}
                      onChange={(e) =>
                        setFormData({ ...formData, additionalDetails: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors resize-none"
                      placeholder="Tell us more about your project..."
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[hsl(82,25%,15%)] mb-2">
                      Contact Information
                    </h2>
                    <p className="text-gray-600">How can we reach you?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <User className="inline w-4 h-4 mr-1" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-1" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors"
                        placeholder="(905) 555-0123"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="inline w-4 h-4 mr-1" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Home className="inline w-4 h-4 mr-1" />
                      Property Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[hsl(82,37%,37%)] focus:ring-2 focus:ring-[hsl(82,37%,37%)]/20 transition-colors"
                      placeholder="123 Main St, Newmarket, ON"
                      required
                    />
                  </div>

                  {calculateEstimate() > 0 && (
                    <div className="bg-green-50 border-2 border-[hsl(82,37%,37%)] rounded-lg p-6 text-center">
                      <p className="text-gray-700 mb-2">Estimated Project Value</p>
                      <p className="text-4xl font-bold text-[hsl(82,37%,37%)]">
                        ${calculateEstimate().toLocaleString()}+
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        *Final quote will be provided after consultation
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((currentStep - 1) as FormStep)}
                    className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                )}
                <div className="ml-auto">
                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((currentStep + 1) as FormStep)}
                      disabled={!canProceed(currentStep)}
                      className="px-8 py-3 bg-[hsl(82,37%,37%)] text-white rounded-lg font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md"
                    >
                      Next Step
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={!canProceed(currentStep)}
                      className="px-8 py-3 bg-[hsl(82,37%,37%)] text-white rounded-lg font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md"
                    >
                      Submit Request
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
