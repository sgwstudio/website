'use client';

import { useState } from 'react';
import Navigation from '@/components/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioProjects } from '@/data/portfolio';

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Create a flattened array of all project images with project info
  const allProjectImages = portfolioProjects.flatMap((project, projectIndex) => 
    project.images?.map((image, imageIndex) => ({
      ...project,
      image,
      imageIndex,
      projectIndex,
      globalIndex: portfolioProjects.slice(0, projectIndex).reduce((acc, p) => acc + (p.images?.length || 0), 0) + imageIndex,
      isEmpty: false
    })) || []
  );
  
  // BLANK CELLS - COMMENTED OUT (can be re-enabled later)
  // const allProjectImages = portfolioProjects.flatMap((project, projectIndex) => {
  //   const projectImages = project.images?.map((image, imageIndex) => ({
  //     ...project,
  //     image,
  //     imageIndex,
  //     projectIndex,
  //     globalIndex: portfolioProjects.slice(0, projectIndex).reduce((acc, p) => acc + (p.images?.length || 0), 0) + imageIndex,
  //     isEmpty: false
  //   })) || [];
  //   
  //   // Add blank cell before each project (except the first one)
  //   const blankCell = projectIndex > 0 ? [{
  //     id: `blank-${projectIndex}`,
  //     title: '',
  //     category: '',
  //     year: '',
  //     description: '',
  //     image: '',
  //     href: '',
  //     tags: [],
  //     images: [],
  //     imageIndex: -1,
  //     projectIndex: -1,
  //     globalIndex: -1,
  //     isEmpty: true
  //   }] : [];
  //   
  //   return [...blankCell, ...projectImages];
  // });

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 pointer-events-none">
        <div className="w-full px-2.5 py-5">
          <div className="grid-8 items-start">
            {/* Column 1: SGW Studio */}
            <div className="col-span-1">
              <h1 className="text-sm font-normal text-black mix-blend-exclusion opacity-70 pointer-events-auto">
                SGW STUDIO
              </h1>
            </div>
            
            {/* Column 2: Menu */}
            <div className="col-span-1">
              <nav className="flex flex-col space-y-1">
                <Link href="/" className="text-sm font-normal text-black hover:text-gray-600 transition-colors mix-blend-exclusion opacity-70 pointer-events-auto">
                  INDEX
                </Link>
                <Link href="/overview" className="text-sm font-normal text-black hover:text-gray-600 transition-colors mix-blend-exclusion opacity-70 pointer-events-auto">
                  OVERVIEW
                </Link>
                <Link href="/about" className="text-sm font-normal text-black hover:text-gray-600 transition-colors mix-blend-exclusion opacity-70 pointer-events-auto">
                  ARCHIVE
                </Link>
              </nav>
            </div>
            
            {/* Columns 3-6: Empty */}
            <div className="col-span-4"></div>
            
            {/* Last two columns: Bio Text */}
            <div className="col-span-2">
              <p className="text-sm font-medium text-black leading-tight mix-blend-exclusion opacity-70 pointer-events-auto">
                SGW Studio is the creative practice of Samuel Guillopé-Weissler, specializing in design and content for the creative and technology sectors. The studio works across branding, product, and digital design, with a focus on research and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main className="pt-0">
        <div className="w-full px-2.5">
          {/* Images Grid - Split into rows */}
          <div className="space-y-5">
            {/* Row 1: Items 1-8 */}
            <div className="grid-8">
              {allProjectImages.slice(0, 8).map((item, index) => {
                // Get project name based on project index (1, 2, 3, 4)
                const projectName = `Project Name ${item.projectIndex + 1}`;
                const isFirstImageOfProject = item.imageIndex === 0;
                const showProjectName = isFirstImageOfProject && hoveredProject === item.id;

                return (
                  <div
                    key={`${item.id}-${item.imageIndex}`}
                    className="col-span-1 relative group"
                    onMouseEnter={() => !item.isEmpty && setHoveredProject(item.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {item.isEmpty ? (
                      <div className="relative w-full h-80"></div>
                    ) : (
                      <Link href={item.href} className="block">
                        <div className={`relative w-full h-80 transition-opacity duration-300 ${
                          hoveredProject !== null && hoveredProject !== item.id 
                            ? 'opacity-30' 
                            : 'opacity-100'
                        }`}>
                          <Image
                            src={item.image}
                            alt={`${item.title} - Image ${item.imageIndex + 1}`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        
                        {/* PROJECT NAME in bottom left - only on first image of project, hover only */}
                        {showProjectName && (
                          <div className="absolute bottom-0 left-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900 z-10">
                            {projectName}
                          </div>
                        )}
                        
                        {/* Number in bottom right */}
                        <div className="absolute bottom-0 right-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900">
                          {String(item.imageIndex + 1).padStart(2, '0')}
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 1 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-2.5"></div>
            
            {/* Row 2: Items 9-16 */}
            <div className="grid-8">
              {allProjectImages.slice(8, 16).map((item, index) => {
                // Get project name based on project index (1, 2, 3, 4)
                const projectName = `Project Name ${item.projectIndex + 1}`;
                const isFirstImageOfProject = item.imageIndex === 0;
                const showProjectName = isFirstImageOfProject && hoveredProject === item.id;

                return (
                  <div
                    key={`${item.id}-${item.imageIndex}`}
                    className="col-span-1 relative group"
                    onMouseEnter={() => !item.isEmpty && setHoveredProject(item.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {item.isEmpty ? (
                      <div className="relative w-full h-80"></div>
                    ) : (
                      <Link href={item.href} className="block">
                        <div className={`relative w-full h-80 transition-opacity duration-300 ${
                          hoveredProject !== null && hoveredProject !== item.id 
                            ? 'opacity-30' 
                            : 'opacity-100'
                        }`}>
                          <Image
                            src={item.image}
                            alt={`${item.title} - Image ${item.imageIndex + 1}`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        
                        {/* PROJECT NAME in bottom left - only on first image of project, hover only */}
                        {showProjectName && (
                          <div className="absolute bottom-0 left-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900 z-10">
                            {projectName}
                          </div>
                        )}
                        
                        {/* Number in bottom right */}
                        <div className="absolute bottom-0 right-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900">
                          {String(item.imageIndex + 1).padStart(2, '0')}
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 2 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-2.5"></div>
            
            {/* Row 3: Items 17-24 */}
            <div className="grid-8">
              {allProjectImages.slice(16, 24).map((item, index) => {
                // Get project name based on project index (1, 2, 3, 4)
                const projectName = `Project Name ${item.projectIndex + 1}`;
                const isFirstImageOfProject = item.imageIndex === 0;
                const showProjectName = isFirstImageOfProject && hoveredProject === item.id;

                return (
                  <div
                    key={`${item.id}-${item.imageIndex}`}
                    className="col-span-1 relative group"
                    onMouseEnter={() => !item.isEmpty && setHoveredProject(item.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {item.isEmpty ? (
                      <div className="relative w-full h-80"></div>
                    ) : (
                      <Link href={item.href} className="block">
                        <div className={`relative w-full h-80 transition-opacity duration-300 ${
                          hoveredProject !== null && hoveredProject !== item.id 
                            ? 'opacity-30' 
                            : 'opacity-100'
                        }`}>
                          <Image
                            src={item.image}
                            alt={`${item.title} - Image ${item.imageIndex + 1}`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                        </div>
                        
                        {/* PROJECT NAME in bottom left - only on first image of project, hover only */}
                        {showProjectName && (
                          <div className="absolute bottom-0 left-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900 z-10">
                            {projectName}
                          </div>
                        )}
                        
                        {/* Number in bottom right */}
                        <div className="absolute bottom-0 right-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900">
                          {String(item.imageIndex + 1).padStart(2, '0')}
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Divider 3 */}
            <div className="w-full border-b border-gray-200 dark:border-neutral-700 my-2.5"></div>
            
            {/* Row 4: Items 25+ (last row) */}
            <div className="grid-8">
              {allProjectImages.slice(24).map((item, index) => {
                // Get project name based on project index (1, 2, 3, 4)
                const projectName = `Project Name ${item.projectIndex + 1}`;
                const isFirstImageOfProject = item.imageIndex === 0;
                const showProjectName = isFirstImageOfProject && hoveredProject === item.id;
                
                return (
                  <div 
                    key={`${item.id}-${item.imageIndex}`} 
                    className="col-span-1 relative group"
                    onMouseEnter={() => setHoveredProject(item.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <Link href={item.href} className="block">
                      
                      <div className={`relative w-full h-80 transition-opacity duration-300 ${
                        hoveredProject !== null && hoveredProject !== item.id 
                          ? 'opacity-50' 
                          : 'opacity-100'
                      }`}>
                        <Image
                          src={item.image}
                          alt={`${item.title} - Image ${item.imageIndex + 1}`}
                          fill
                          className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      
                      {/* PROJECT NAME in bottom left - only on first image of project, hover only */}
                      {showProjectName && (
                        <div className="absolute bottom-0 left-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900 z-10">
                          {projectName}
                        </div>
                      )}
                      
                      {/* Number in bottom right */}
                      <div className="absolute bottom-0 right-0 text-xs font-normal text-gray-900 dark:text-gray-100 bg-white dark:bg-neutral-900">
                        {String(item.imageIndex + 1).padStart(2, '0')}
                      </div>
                    </Link>
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