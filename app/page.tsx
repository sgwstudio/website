'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Image from 'next/image';
import { allImages } from '@/data/images';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      <Navigation />
      
      <main className="pt-16">
        <div className="w-full px-5 py-20">
          {/* Images Grid - Split into rows */}
          <div className="space-y-0">
            {/* Row 1: Items 1-8 */}
            <div className="grid-8">
              {allImages.slice(0, 8).map((image, index) => {
                // Check if this is the very first image of the project globally
                const isFirstImageOfProject = !image.isEmpty && 
                  allImages.findIndex(img => !img.isEmpty && img.projectId === image.projectId) === allImages.indexOf(image);
                
                return (
                  <div 
                    key={image.id} 
                    className="col-span-1 relative group p-4"
                    onMouseEnter={() => !image.isEmpty && setHoveredProject(image.projectId)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {image.isEmpty ? (
                      <div className="relative w-full h-64"></div>
                    ) : (
                      <div className={`relative w-full h-64 transition-opacity duration-300 ${
                        hoveredProject !== null && hoveredProject !== image.projectId 
                          ? 'opacity-30' 
                          : 'opacity-100'
                      }`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Project name on hover - only on very first image of project globally */}
                        {hoveredProject === image.projectId && isFirstImageOfProject && (
                          <div className="absolute -top-12 left-0 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded z-10">
                            {image.projectName}
                          </div>
                        )}
                        {/* Number at bottom right */}
                        <div className="absolute bottom-2 right-2 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded">
                          {image.id}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 1 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-4"></div>
            
            {/* Row 2: Items 9-16 */}
            <div className="grid-8">
              {allImages.slice(8, 16).map((image, index) => {
                // Check if this is the very first image of the project globally
                const isFirstImageOfProject = !image.isEmpty && 
                  allImages.findIndex(img => !img.isEmpty && img.projectId === image.projectId) === allImages.indexOf(image);
                
                return (
                  <div 
                    key={image.id} 
                    className="col-span-1 relative group p-4"
                    onMouseEnter={() => !image.isEmpty && setHoveredProject(image.projectId)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {image.isEmpty ? (
                      <div className="relative w-full h-64"></div>
                    ) : (
                      <div className={`relative w-full h-64 transition-opacity duration-300 ${
                        hoveredProject !== null && hoveredProject !== image.projectId 
                          ? 'opacity-30' 
                          : 'opacity-100'
                      }`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Project name on hover - only on very first image of project globally */}
                        {hoveredProject === image.projectId && isFirstImageOfProject && (
                          <div className="absolute -top-12 left-0 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded z-10">
                            {image.projectName}
                          </div>
                        )}
                        {/* Number at bottom right */}
                        <div className="absolute bottom-2 right-2 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded">
                          {image.id}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 2 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-4"></div>
            
            {/* Row 3: Items 17-24 */}
            <div className="grid-8">
              {allImages.slice(16, 24).map((image, index) => {
                // Check if this is the very first image of the project globally
                const isFirstImageOfProject = !image.isEmpty && 
                  allImages.findIndex(img => !img.isEmpty && img.projectId === image.projectId) === allImages.indexOf(image);
                
                return (
                  <div 
                    key={image.id} 
                    className="col-span-1 relative group p-4"
                    onMouseEnter={() => !image.isEmpty && setHoveredProject(image.projectId)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {image.isEmpty ? (
                      <div className="relative w-full h-64"></div>
                    ) : (
                      <div className={`relative w-full h-64 transition-opacity duration-300 ${
                        hoveredProject !== null && hoveredProject !== image.projectId 
                          ? 'opacity-30' 
                          : 'opacity-100'
                      }`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Project name on hover - only on very first image of project globally */}
                        {hoveredProject === image.projectId && isFirstImageOfProject && (
                          <div className="absolute -top-12 left-0 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded z-10">
                            {image.projectName}
                          </div>
                        )}
                        {/* Number at bottom right */}
                        <div className="absolute bottom-2 right-2 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded">
                          {image.id}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 3 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-4"></div>
            
            {/* Row 4: Items 25-29 (last row) */}
            <div className="grid-8">
              {allImages.slice(24, 29).map((image, index) => {
                // Check if this is the very first image of the project globally
                const isFirstImageOfProject = !image.isEmpty && 
                  allImages.findIndex(img => !img.isEmpty && img.projectId === image.projectId) === allImages.indexOf(image);
                
                return (
                  <div 
                    key={image.id} 
                    className="col-span-1 relative group p-4"
                    onMouseEnter={() => !image.isEmpty && setHoveredProject(image.projectId)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {image.isEmpty ? (
                      <div className="relative w-full h-64"></div>
                    ) : (
                      <div className={`relative w-full h-64 transition-opacity duration-300 ${
                        hoveredProject !== null && hoveredProject !== image.projectId 
                          ? 'opacity-30' 
                          : 'opacity-100'
                      }`}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Project name on hover - only on very first image of project globally */}
                        {hoveredProject === image.projectId && isFirstImageOfProject && (
                          <div className="absolute -top-12 left-0 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded z-10">
                            {image.projectName}
                          </div>
                        )}
                        {/* Number at bottom right */}
                        <div className="absolute bottom-2 right-2 bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 text-xs font-normal px-2 py-1 rounded">
                          {image.id}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}