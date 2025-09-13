'use client';

import { useParams } from 'next/navigation';
import { getProjectById, portfolioProjects } from '@/data/portfolio';
import { generalData } from '@/data/general';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Diaporama from '@/components/diaporama';

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [project, setProject] = useState(getProjectById(slug));
  const [diaporamaOpen, setDiaporamaOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setProject(getProjectById(slug));
  }, [slug]);

  // Get previous and next project navigation
  const currentIndex = project ? portfolioProjects.findIndex(p => p.id === project.id) : -1;
  const previousProject = currentIndex > 0 ? portfolioProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : null;

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
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <main className="pt-24">
        <div className="w-full px-2.5">
          <div className="grid-8 min-h-screen">
            {/* Column 1: Website title (now a link, sticky) */}
            <div className="col-span-1 sticky top-24 self-start">
              <Link href="/" className="text-sm font-normal text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {generalData.name}
              </Link>
            </div>

            {/* Columns 2-3: Project title and description (sticky) */}
            <div className="col-span-2 sticky top-24 self-start">
              <div className="space-y-6">
                <h2 className="text-sm font-normal text-gray-900 dark:text-gray-100">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
                  {project.description}
                </p>
                
                {/* Project navigation */}
                <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400">
                  {previousProject && (
                    <Link 
                      href={previousProject.href}
                      className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      ← {previousProject.title}
                    </Link>
                  )}
                  {nextProject && (
                    <Link 
                      href={nextProject.href}
                      className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {nextProject.title} →
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Columns 4-8: Project images in single column */}
            <div className="col-span-5">
              <div className="space-y-8">
                {project.images?.map((image, index) => (
                  <div key={index} className="relative">
                    <div 
                      className="relative w-full cursor-pointer"
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setDiaporamaOpen(true);
                      }}
                    >
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
          </div>
        </div>
      </main>
      
      {/* Diaporama */}
      {project && (
        <Diaporama
          images={project.images || []}
          currentIndex={currentImageIndex}
          isOpen={diaporamaOpen}
          onClose={() => setDiaporamaOpen(false)}
          projectTitle={project.title}
        />
      )}
    </div>
  );
}