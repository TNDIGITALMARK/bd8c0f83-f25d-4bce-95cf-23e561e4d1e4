'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Calendar } from 'lucide-react';

type ProjectCategory = 'all' | 'garden' | 'hardscaping' | 'maintenance';

interface Project {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  description: string;
  beforeImage: string;
  afterImage: string;
  date: string;
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'Modern Patio Installation',
      location: 'Newmarket',
      category: 'hardscaping',
      description: 'Complete backyard transformation with interlocking stone patio and perennial gardens',
      beforeImage: '/generated/portfolio-before-1.jpg',
      afterImage: '/generated/portfolio-after-1.jpg',
      date: 'Spring 2024',
    },
    {
      id: '2',
      title: 'Front Yard Curb Appeal',
      location: 'Aurora',
      category: 'garden',
      description: 'Increased home value with professional landscaping design',
      beforeImage: '/generated/portfolio-before-2.jpg',
      afterImage: '/generated/portfolio-after-2.jpg',
      date: 'Summer 2024',
    },
    {
      id: '3',
      title: 'Commercial Grounds Maintenance',
      location: 'Richmond Hill',
      category: 'maintenance',
      description: 'Year-round grounds care for local business plaza',
      beforeImage: '/generated/portfolio-commercial.jpg',
      afterImage: '/generated/portfolio-commercial.jpg',
      date: 'Ongoing',
    },
  ];

  const categories = [
    { id: 'all' as ProjectCategory, label: 'All Projects' },
    { id: 'garden' as ProjectCategory, label: 'Garden Design' },
    { id: 'hardscaping' as ProjectCategory, label: 'Hardscaping' },
    { id: 'maintenance' as ProjectCategory, label: 'Maintenance' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[hsl(82,37%,37%)] to-[hsl(82,37%,30%)] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Explore our stunning landscape transformations across Newmarket and surrounding areas
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-[hsl(82,37%,37%)] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {/* Before/After Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Before Image */}
                    <div className="w-1/2 relative group-hover:w-0 transition-all duration-500">
                      <Image
                        src={project.beforeImage}
                        alt={`${project.title} - Before`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded text-sm font-semibold">
                        Before
                      </div>
                    </div>
                    {/* After Image */}
                    <div className="w-1/2 relative group-hover:w-full transition-all duration-500">
                      <Image
                        src={project.afterImage}
                        alt={`${project.title} - After`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-[hsl(82,37%,37%)]/90 text-white px-3 py-1 rounded text-sm font-semibold">
                        After
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[hsl(82,25%,15%)] group-hover:text-[hsl(82,37%,37%)] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.date}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <button className="mt-4 text-[hsl(82,37%,37%)] font-semibold text-sm hover:text-[hsl(82,37%,30%)] transition-colors">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(82,25%,15%)]">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let us transform your outdoor space into something extraordinary
          </p>
          <Link
            href="/quote"
            className="inline-block bg-[hsl(82,37%,37%)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[hsl(82,37%,30%)] transition-colors shadow-lg"
          >
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="max-w-6xl w-full bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[hsl(82,25%,15%)] mb-2">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {selectedProject.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.date}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Before</h4>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.beforeImage}
                      alt={`${selectedProject.title} - Before`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">After</h4>
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={selectedProject.afterImage}
                      alt={`${selectedProject.title} - After`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
