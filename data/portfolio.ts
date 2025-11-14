export interface PortfolioItem {
  id: string
  title: string
  category: 'web' | 'graphics' | 'branding' | 'motion'
  description: string
  image: string
  technologies?: string[]
  link?: string
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: 'Luxury E-Commerce Platform',
    category: 'web',
    description: 'A premium online shopping experience with seamless checkout and personalized recommendations.',
    image: '/images/portfolio/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    link: '#',
  },
  {
    id: '2',
    title: 'Corporate Identity System',
    category: 'branding',
    description: 'Complete brand identity design including logo, stationery, and digital assets for a tech startup.',
    image: '/images/portfolio/branding.jpg',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    link: '#',
  },
  {
    id: '3',
    title: 'Interactive Product Showcase',
    category: 'motion',
    description: 'Cinematic product presentation with smooth animations and micro-interactions.',
    image: '/images/portfolio/motion.jpg',
    technologies: ['Framer Motion', 'After Effects', 'Lottie'],
    link: '#',
  },
  {
    id: '4',
    title: 'Minimalist Logo Collection',
    category: 'graphics',
    description: 'A series of clean, modern logos designed for various industries with attention to typography.',
    image: '/images/portfolio/logos.jpg',
    technologies: ['Adobe Illustrator', 'Typography'],
    link: '#',
  },
  {
    id: '5',
    title: 'SaaS Dashboard Redesign',
    category: 'web',
    description: 'Modern dashboard interface with data visualization and intuitive user experience.',
    image: '/images/portfolio/dashboard.jpg',
    technologies: ['React', 'D3.js', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: '6',
    title: 'Brand Photography Series',
    category: 'graphics',
    description: 'Professional product photography with luxury styling and composition.',
    image: '/images/portfolio/photography.jpg',
    technologies: ['Photography', 'Lightroom', 'Photoshop'],
    link: '#',
  },
]

export const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'graphics', label: 'Graphics' },
  { id: 'branding', label: 'Branding' },
  { id: 'motion', label: 'Motion' },
]
