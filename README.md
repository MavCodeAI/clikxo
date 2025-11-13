# Clikxo - Cinematic Arabic-First Portfolio Website

![Clikxo](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🎬 About Clikxo

**Clikxo** is a cutting-edge, cinematic, Arabic-first portfolio website built for a creative studio in UAE. Created by AB Darwesh (Lead Developer) and Ali Khan (Graphic Designer), this website showcases the perfect blend of design and code.

### ✨ Key Features

- 🌟 **Cinematic Hero Section** with particle animations
- 🎨 **Arabic-First Design** with full RTL support
- ⚡ **Premium Animations** using Framer Motion & GSAP
- 📱 **Fully Responsive** mobile-first design
- 🎯 **Interactive Services** cards with hover effects
- 🖼️ **Portfolio Showcase** with parallax scrolling
- 💎 **Glassmorphic Contact Form** with smooth interactions
- 🚀 **SEO Optimized** for Arabic content
- 🎭 **Smooth Scrolling** using Lenis

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Fonts**: IBM Plex Sans Arabic, IBM Plex Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.0.0 or higher

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/clikxo-website.git
   cd clikxo-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
clikxo-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About/Studio section
│   │   ├── Services.tsx    # Services section
│   │   ├── Portfolio.tsx   # Portfolio showcase
│   │   └── Contact.tsx     # Contact form
│   ├── Navigation.tsx      # Main navigation
│   ├── Footer.tsx          # Footer component
│   ├── SmoothScroll.tsx    # Lenis smooth scroll
│   └── ParticleBackground.tsx  # Canvas particle effect
├── public/                 # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Design System

### Colors

- **Neutral-1000**: `#000000` - Pure black background
- **Neutral-900**: `#101010` - Surface color
- **Neutral-800**: `#1A1A1A` - Secondary surface
- **Primary-500**: `#00FFFF` - Electric Cyan (accents, CTAs)
- **Secondary-500**: `#4F00BC` - Deep Violet (glows, effects)

### Typography

- **Headings**: IBM Plex Sans Arabic
- **Body/UI**: IBM Plex Mono

### Spacing

Based on 8px grid system:
- `xs`: 8px
- `sm`: 16px
- `md`: 24px
- `lg`: 48px
- `xl`: 96px
- `xxl`: 160px

## 🌐 Customization

### Update Contact Information

Edit `components/sections/Contact.tsx`:

```typescript
const contactMethods = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'hello@clikxo.com', // Update email
    href: 'mailto:hello@clikxo.com',
  },
  // ... update other contact methods
]
```

### Update Team Information

Edit `components/sections/About.tsx`:

```typescript
const teamMembers = [
  {
    name: 'AB Darwesh',
    role: 'مطور رئيسي',
    // ... update team details
  },
]
```

### Update Portfolio Projects

Edit `components/sections/Portfolio.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'منصة تجارة إلكترونية',
    // ... add your projects
  },
]
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animation Guidelines

- Desktop: Full motion experience enabled
- Mobile: Simplified animations for performance
- Respects `prefers-reduced-motion` for accessibility

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🌟 Performance Optimization

- ✅ Optimized images with Next.js Image
- ✅ Font optimization with next/font
- ✅ Code splitting with App Router
- ✅ Lazy loading for animations
- ✅ Canvas optimization for particles

## 📝 License

© 2025 Clikxo Studio. All rights reserved.

## 👥 Team

- **AB Darwesh** - Lead Developer
- **Ali Khan** - Graphic Designer

## 🤝 Contributing

This is a private portfolio project. For inquiries, please contact:
- Email: hello@clikxo.com
- Website: https://clikxo.com

---

**Built with ❤️ in UAE** | صُنع بـ ♥ في الإمارات
