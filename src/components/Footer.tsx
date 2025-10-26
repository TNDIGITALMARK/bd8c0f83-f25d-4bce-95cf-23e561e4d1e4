import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[hsl(82,25%,15%)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-white font-heading">Finn's Landscaping</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Professional landscaping services trusted by over 200 local families since 2018.
              Serving Newmarket and surrounding York Region communities.
            </p>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold text-white">Licensed and Insured</p>
              <p>Phone: (905) 555-LAWN (5296)</p>
              <p>Email: info@finnslandscaping.ca</p>
              <p>Newmarket, Ontario</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[hsl(82,37%,60%)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-[hsl(82,37%,60%)] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-gray-300 hover:text-[hsl(82,37%,60%)] transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-[hsl(82,37%,60%)] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Garden Design & Installation</li>
              <li>Hardscaping & Stonework</li>
              <li>Lawn Care & Maintenance</li>
              <li>Tree & Shrub Care</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Finn's Landscaping. Proudly serving Ontario.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-[hsl(82,37%,60%)] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[hsl(82,37%,60%)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[hsl(82,37%,60%)] transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[hsl(82,37%,60%)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
