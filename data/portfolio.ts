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
  metrics?: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'alias-brand',
    title: 'Alias Brand',
    category: 'Brand Identity & Design Direction',
    year: '2022 - Present',
    description: 'Alias is the operational, financial, and selling platform behind GOAT Group\'s buy-side businesses, powering both GOAT and Flight Club. I was tasked with crafting a visual and editorial voice that resonates across a wide audience; from Gen Z sellers to fashion industry executives, while maintaining brand authority and cultural relevance.',
    image: '/projects/alias Brand/1-alias-phone.gif',
    href: '/projects/alias-brand',
    tags: ['Content Strategy', 'Brand Design', 'Campaign Design'],
    images: [
      '/projects/alias Brand/1-alias-phone.gif',
      '/projects/alias Brand/2-alias-brand.gif',
      '/projects/alias Brand/3-alias-appicon.gif',
      '/projects/alias Brand/4-alias-socials-1.gif'
    ],
    metrics: [
      'Team of 8 creatives managed across content, design, and production, 5 global markets activated with localizations (US, China, Japan, Germany and France)',
      '+XX% YoY seller engagement following new onboarding and content strategy'
    ]
  },
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
