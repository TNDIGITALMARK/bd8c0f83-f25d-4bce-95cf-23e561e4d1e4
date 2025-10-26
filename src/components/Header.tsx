'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top accent bar - olive green from design reference */}
      <div className="bg-[hsl(82,37%,37%)] h-2"></div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <svg
                className="w-10 h-10 text-[hsl(82,37%,37%)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-3.86-1.04-7-5.44-7-10V8.3l7-3.5 7 3.5V10.5c0 4.56-3.14 8.96-7 10z"/>
                <path d="M8 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div>
                <span className="text-xl font-bold text-[hsl(82,25%,15%)] font-heading">
                  Finn's Landscaping
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#about"
                className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/quote"
                className="bg-[hsl(82,37%,37%)] text-white px-6 py-2.5 rounded font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors shadow-sm"
              >
                Get Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[hsl(82,25%,15%)] hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  href="#about"
                  className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#contact"
                  className="text-[hsl(82,25%,15%)] hover:text-[hsl(82,37%,37%)] font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/quote"
                  className="bg-[hsl(82,37%,37%)] text-white px-6 py-3 rounded font-semibold hover:bg-[hsl(82,37%,30%)] transition-colors text-center shadow-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
