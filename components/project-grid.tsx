'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
}

interface ProjectGridProps {
  projects: Project[];
  mode: 'index' | 'overview';
}

export default function ProjectGrid({ projects, mode }: ProjectGridProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  if (mode === 'overview') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <Link href={project.href}>
              <div className="relative overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-lg aspect-[4/3] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-700 text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  // Index mode - more detailed grid like 1/1 Studio
  return (
    <div className="space-y-16">
      {projects.map((project, index) => (
        <div
          key={project.id}
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <Link href={project.href}>
            <div className="grid grid-cols-12 gap-8 items-center">
              {/* Project number and info */}
              <div className="col-span-2">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {project.category}
                </p>
              </div>

              {/* Project details */}
              <div className="col-span-3">
                <div className="space-y-1 text-sm">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="text-gray-600 dark:text-gray-400">
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {project.year}
                </div>
              </div>

              {/* Project image */}
              <div className="col-span-7">
                <div className="relative overflow-hidden bg-gray-100 dark:bg-neutral-800 rounded-lg aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
