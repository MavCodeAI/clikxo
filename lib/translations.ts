export type Language = 'en';

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Hero Section
    studioName: 'CLIKXO',
    mainHeadline: 'We don\'t build websites, we create digital dimensions',
    subtitle: 'Where design meets code as art and science',
    tagline: 'Clikxo — Designed by designers. Coded by engineers. Remembered by all.',
    ctaButton: 'Start Your Project',
    scrollDown: 'Scroll Down',
    
    // About Section
    aboutTitle: 'About the',
    aboutTitleHighlight: 'Studio',
    aboutDescription: 'Developer and designer — shared passion for beauty and precision',
    aboutDescription2: 'We transform ideas into unforgettable digital experiences',
    philosophy: 'At',
    philosophyHighlight: 'Clikxo',
    philosophyText: ', design meets code, emotion meets logic, and pixels become cinematic experiences',
    
    // Team Members
    abDarwesh: 'AB Darwesh',
    abRole: 'Lead Developer',
    abRoleEn: 'Lead Developer',
    abDescription: 'Specialized in Next.js and React.js, interactive motion, and performance optimization',
    
    aliKhan: 'Ali Khan',
    aliRole: 'Graphic Designer',
    aliRoleEn: 'Graphic Designer',
    aliDescription: 'Expert in branding, visual identity, and motion UI/UX design',
    
    // Services Section
    servicesTitle: 'Our',
    servicesTitleHighlight: 'Creative Services',
    servicesDescription: 'We provide integrated solutions that combine design and development to achieve your digital vision',
    
    webDev: 'Web Development',
    webDevEn: 'Web Development',
    webDevDescription: 'Lightning-fast Next.js & React applications with exceptional user experiences',
    
    graphicDesign: 'Graphic Design',
    graphicDesignEn: 'Graphic Design',
    graphicDesignDescription: 'Branding, visual identity, and visual storytelling that leaves a lasting impression',
    
    interactive: 'Interactive Experiences',
    interactiveEn: 'Interactive Experiences',
    interactiveDescription: 'Interactive interfaces with Framer Motion and GSAP that captivate and amaze',
    
    // Portfolio Section
    portfolioTitle: 'Our',
    portfolioTitleHighlight: 'Featured Work',
    portfolioDescription: 'Projects we are proud of, combining creativity and technology',
    
    filterAll: 'All',
    filterWeb: 'Web Development',
    filterGraphics: 'Graphic Design',
    filterInteractive: 'Interactive',
    viewProject: 'View Project',
    
    // Portfolio Projects
    project1Title: 'E-Commerce Platform',
    project1Description: 'Complete online store with Next.js and Stripe integration',
    
    project2Title: 'Brand Identity',
    project2Description: 'Visual identity design for a tech startup',
    
    project3Title: '3D Interactive Experience',
    project3Description: 'Interactive website with Three.js and R3F',
    
    project4Title: 'Analytics Dashboard',
    project4Description: 'Advanced dashboard with real-time data visualizations',
    
    project5Title: 'Social Media Campaign',
    project5Description: 'Creative designs for marketing campaign',
    
    project6Title: 'Interactive Portfolio',
    project6Description: 'Portfolio with advanced GSAP animations',
    
    // Contact Section
    contactTitle: 'Get in',
    contactTitleHighlight: 'Touch',
    contactQuote: 'Let\'s create something the world has never seen before',
    contactDescription: 'Do you have a project in mind? Let\'s turn it into a stunning digital reality',
    
    // Form Labels
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    
    // Placeholders
    namePlaceholder: 'Your full name',
    emailPlaceholder: 'email@example.com',
    phonePlaceholder: '+971 XX XXX XXXX',
    messagePlaceholder: 'Tell us about your project...',
    
    // Buttons
    sendMessage: 'Send Message',
    sentSuccess: 'Message Sent Successfully!',
    successMessage: 'Thank you! We\'ll contact you soon',
    
    // Contact Methods
    emailMethod: 'Email',
    phoneMethod: 'Phone',
    whatsappMethod: 'WhatsApp',
    whatsappContact: 'Direct Contact',
    readyToStart: 'Ready to',
    readyToStartHighlight: 'Start?',
    readyToStartText: 'Let\'s discuss your project and turn it into an exceptional digital experience that amazes your clients',
    
    // Footer
    footerRights: 'All rights reserved',
    madeWithLove: 'Made with',
    madeInUAE: 'in UAE',
    teamCredits: 'AB Darwesh & Ali Khan',
    
    // WhatsApp & Email labels
    whatsapp: 'WhatsApp',
    emailBtn: 'Email',
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
