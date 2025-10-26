import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Star, MapPin, Shield } from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Weekly, bi-weekly, or monthly service plans',
      image: '/generated/lawn-care.jpg',
      price: 'Starting at $80/visit',
      link: '/quote',
    },
    {
      title: 'Garden Design',
      description: 'Custom garden layouts featuring native Ontario plants',
      image: '/generated/garden-design.jpg',
      price: 'Starting at $2,500',
      link: '/quote',
    },
    {
      title: 'Tree Services',
      description: 'Pruning, planting, and health assessments',
      image: '/generated/tree-services.jpg',
      price: 'Starting at $150',
      link: '/quote',
    },
    {
      title: 'Hardscaping',
      description: 'Patios, walkways, and retaining walls built to last',
      image: '/generated/hardscaping.jpg',
      price: 'Starting at $4,000',
      link: '/quote',
    },
  ];

  const aboutCards = [
    {
      title: 'Rooted in Quality',
      description: 'Professional landscaping services trusted by over 200 local families since 2018.',
      image: '/generated/portfolio-after-2.jpg',
    },
    {
      title: 'Country Estate',
      description: 'Beautiful transformations that enhance your property value and curb appeal.',
      image: '/generated/portfolio-after-1.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Full width with overlay text */}
      <section className="relative h-[600px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-landscape.jpg"
            alt="Beautiful landscaped property with curved stone walkway"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              TRANSFORMING ONTARIO'S OUTDOOR SPACES
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95">
              SERVING NEWMARKET
            </p>
            <Link
              href="/quote"
              className="inline-block bg-[hsl(82,37%,37%)] text-white px-8 py-4 rounded font-bold text-lg hover:bg-[hsl(82,37%,30%)] transition-colors shadow-lg"
            >
              GET FREE QUOTE TODAY
            </Link>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed and Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>5-Star Google Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(82,25%,15%)]">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-[hsl(82,25%,15%)] group-hover:text-[hsl(82,37%,37%)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(82,37%,37%)] font-semibold text-sm">
                      {service.price}
                    </span>
                    <span className="inline-block bg-[hsl(82,37%,37%)] text-white px-4 py-1.5 rounded text-sm font-semibold">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(82,25%,15%)]">
            About
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* About Cards */}
            {aboutCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[hsl(82,25%,15%)]">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  <button className="mt-4 bg-[hsl(82,37%,37%)] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}

            {/* Service Area Map */}
            <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow p-6 flex flex-col justify-center">
              <div className="mb-4">
                <MapPin className="w-12 h-12 text-[hsl(82,37%,37%)] mb-3" />
                <h3 className="text-xl font-bold mb-2 text-[hsl(82,25%,15%)]">
                  Service Area
                </h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(82,37%,37%)]" />
                  Newmarket
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(82,37%,37%)]" />
                  Aurora
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(82,37%,37%)]" />
                  Richmond Hill
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(82,37%,37%)]" />
                  Bradford
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[hsl(82,37%,37%)]" />
                  East Gwillimbury
                </p>
              </div>
              <button className="mt-6 bg-[hsl(82,37%,37%)] text-white px-5 py-2 rounded text-sm font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors w-full">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-[hsl(82,37%,37%)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl mb-8 text-white/95">
            Get a free, no-obligation quote today and see how we can bring your landscape vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-[hsl(82,37%,37%)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:9055555296"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[hsl(82,37%,37%)] transition-colors"
            >
              Call (905) 555-5296
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
