export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
  images?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'goat-group',
    title: 'GOAT Group',
    category: 'Brand Identity & Design Direction',
    year: '2022 - Present',
    description: 'Senior Director at GOAT Group, overseeing Alias, Sneakers.com, and the corporate brand. GOAT Group operates five brands and serves 60M+ members across 170+ countries.',
    image: '/images/AGS-1.png',
    href: '/projects/goat-group',
    tags: ['Brand Identity', 'Design Direction', 'Digital Strategy', 'Team Leadership'],
    images: [
      '/images/AGS-1.png',
      '/images/AGS-2.png',
      '/images/AGS-3.png',
      '/images/AGS-4.png',
      '/images/AGS-5.png',
      '/images/AGS-6.png'
    ]
  },
  {
    id: 'goat-app',
    title: 'GOAT App & Platform',
    category: 'Product Design & Art Direction',
    year: '2018 - 2022',
    description: 'Led global design across GOAT\'s app, web, and social platforms. Managed an international team across design, art direction, and motion — delivering brand systems, campaigns, and product experiences.',
    image: '/images/goat-1.png',
    href: '/projects/goat-app',
    tags: ['Product Design', 'Art Direction', 'Mobile App', 'Web Design', 'Brand Systems'],
    images: [
      '/images/goat-1.png',
      '/images/goat-2.png',
      '/images/goat-3.png',
      '/images/goat-4.png',
      '/images/goat-5.png',
      '/images/goat-6.png',
      '/images/goat-7.png',
      '/images/goat-8.png',
      '/images/goat-9.png',
      '/images/goat-10.png',
      '/images/goat-11.png'
    ]
  },
  {
    id: 'sgw-studio',
    title: 'SGW Studio',
    category: 'Design & Art Direction',
    year: '2010 - 2018',
    description: 'Design & Art Direction for creative sectors with expertise in Branding, Product and Print Design.',
    image: '/images/SGWS-1.png',
    href: '/projects/sgw-studio',
    tags: ['Branding', 'Product Design', 'Print Design', 'Art Direction'],
    images: [
      '/images/SGWS-1.png',
      '/images/SGWS-2.png',
      '/images/SGWS-3.png',
      '/images/SGWS-4.png',
      '/images/SGWS-5.png',
      '/images/SGWS-6.png',
      '/images/SGWS-7.png',
      '/images/SGWS-8.png'
    ]
  }
];

export const getProjectById = (id: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.id === id);
};
