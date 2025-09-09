export interface ImageItem {
  id: number;
  src: string;
  alt: string;
  projectId: number;
  projectName: string;
  isEmpty?: boolean;
}

export const allImages: ImageItem[] = [
  // Project 1: 1-5
  { id: 1, src: '/images/AGS-1.png', alt: 'Image 1', projectId: 1, projectName: 'Project 1' },
  { id: 2, src: '/images/AGS-2.png', alt: 'Image 2', projectId: 1, projectName: 'Project 1' },
  { id: 3, src: '/images/AGS-3.png', alt: 'Image 3', projectId: 1, projectName: 'Project 1' },
  { id: 4, src: '/images/AGS-4.png', alt: 'Image 4', projectId: 1, projectName: 'Project 1' },
  { id: 5, src: '/images/AGS-5.png', alt: 'Image 5', projectId: 1, projectName: 'Project 1' },
  { id: 6, src: '', alt: '', projectId: 0, projectName: '', isEmpty: true },
  
  // Project 2: 7-11
  { id: 7, src: '/images/AGS-6.png', alt: 'Image 7', projectId: 2, projectName: 'Project 2' },
  { id: 8, src: '/images/goat-1.png', alt: 'Image 8', projectId: 2, projectName: 'Project 2' },
  { id: 9, src: '/images/goat-2.png', alt: 'Image 9', projectId: 2, projectName: 'Project 2' },
  { id: 10, src: '/images/goat-3.png', alt: 'Image 10', projectId: 2, projectName: 'Project 2' },
  { id: 11, src: '/images/goat-4.png', alt: 'Image 11', projectId: 2, projectName: 'Project 2' },
  { id: 12, src: '', alt: '', projectId: 0, projectName: '', isEmpty: true },
  
  // Project 3: 13-17
  { id: 13, src: '/images/goat-5.png', alt: 'Image 13', projectId: 3, projectName: 'Project 3' },
  { id: 14, src: '/images/goat-6.png', alt: 'Image 14', projectId: 3, projectName: 'Project 3' },
  { id: 15, src: '/images/goat-7.png', alt: 'Image 15', projectId: 3, projectName: 'Project 3' },
  { id: 16, src: '/images/goat-8.png', alt: 'Image 16', projectId: 3, projectName: 'Project 3' },
  { id: 17, src: '/images/goat-9.png', alt: 'Image 17', projectId: 3, projectName: 'Project 3' },
  { id: 18, src: '', alt: '', projectId: 0, projectName: '', isEmpty: true },
  
  // Project 4: 19-23
  { id: 19, src: '/images/goat-10.png', alt: 'Image 19', projectId: 4, projectName: 'Project 4' },
  { id: 20, src: '/images/goat-11.png', alt: 'Image 20', projectId: 4, projectName: 'Project 4' },
  { id: 21, src: '/images/SGWS-1.png', alt: 'Image 21', projectId: 4, projectName: 'Project 4' },
  { id: 22, src: '/images/SGWS-2.png', alt: 'Image 22', projectId: 4, projectName: 'Project 4' },
  { id: 23, src: '/images/SGWS-3.png', alt: 'Image 23', projectId: 4, projectName: 'Project 4' },
  { id: 24, src: '', alt: '', projectId: 0, projectName: '', isEmpty: true },
  
  // Project 5: 25-29
  { id: 25, src: '/images/SGWS-4.png', alt: 'Image 25', projectId: 5, projectName: 'Project 5' },
  { id: 26, src: '/images/SGWS-5.png', alt: 'Image 26', projectId: 5, projectName: 'Project 5' },
  { id: 27, src: '/images/SGWS-6.png', alt: 'Image 27', projectId: 5, projectName: 'Project 5' },
  { id: 28, src: '/images/SGWS-7.png', alt: 'Image 28', projectId: 5, projectName: 'Project 5' },
  { id: 29, src: '/images/SGWS-8.png', alt: 'Image 29', projectId: 5, projectName: 'Project 5' }
];
