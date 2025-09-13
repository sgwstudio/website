'use client';

import { useParams } from 'next/navigation';
import { getProjectById } from '@/data/portfolio';
import { generalData } from '@/data/general';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState(getProjectById(slug));

  useEffect(() => {
    setProject(getProjectById(slug));
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-pink-50 dark:bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-gray-900 dark:text-gray-100 mb-2">
            Project not found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pink-50 dark:bg-neutral-900">
      <div className="w-full px-5">
        <div className="grid-8">
          {/* Column 1: Website title - Sticky */}
          <div className="col-span-1 sticky top-20">
            <h1 className="text-sm font-medium text-gray-900 dark:text-gray-100 tracking-wider">
              {generalData.name}
            </h1>
          </div>

          {/* Columns 2-5: Project images distributed across 4 columns */}
          <div className="col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {project.images?.map((image, index) => (
                <div key={index} className="relative">
                  <div className="relative w-full">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 6: Project title - Sticky */}
          <div className="col-span-1 sticky top-20">
            <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {project.title}
            </h2>
          </div>

          {/* Columns 7-8: Project description - Sticky */}
          <div className="col-span-2 sticky top-20">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-tight">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                  Role
                </h4>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Brand Director
                </div>
              </div>

              {project.metrics && (
                <div className="space-y-3">
                  <h4 className="text-xs font-medium text-gray-900 dark:text-gray-100 uppercase tracking-wide">
                    Metrics
                  </h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                        • {metric}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}