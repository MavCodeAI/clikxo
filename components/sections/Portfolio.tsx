'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}





export default function Portfolio() {
  const { language } = useLanguage()
  const t = useLanguage()
  
  const [activeCategory, setActiveCategory] = useState('الكل')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projectRefs = useRef<(HTMLDivElement | null)[]>([])
  
  const categories = [t.filterAll, t.filterWeb, t.filterGraphics, t.filterInteractive]
  
  const projects = [
    {
      id: 1,
      title: t.project1Title,
      titleEn: 'E-Commerce Platform',
      category: t.filterWeb,
      description: t.project1Description,
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-primary-500 to-secondary-500',
    },
    {
      id: 2,
      title: t.project2Title,
      titleEn: 'Brand Identity',
      category: t.filterGraphics,
      description: t.project2Description,
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      tags: ['Branding', 'Logo', 'UI/UX'],
      color: 'from-secondary-500 to-primary-500',
    },
    {
      id: 3,
      title: t.project3Title,
      titleEn: '3D Interactive Experience',
      category: t.filterInteractive,
      description: t.project3Description,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      tags: ['Three.js', 'R3F', 'WebGL'],
      color: 'from-primary-500 to-purple-500',
    },
    {
      id: 4,
      title: t.project4Title,
      titleEn: 'Analytics Dashboard',
      category: t.filterWeb,
      description: t.project4Description,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'Real-time'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      id: 5,
      title: t.project5Title,
      titleEn: 'Social Media Campaign',
      category: t.filterGraphics,
      description: t.project5Description,
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
      tags: ['Social Media', 'Motion Design'],
      color: 'from-pink-500 to-purple-500',
    },
    {
      id: 6,
      title: t.project6Title,
      titleEn: 'Interactive Portfolio',
      category: t.filterInteractive,
      description: t.project6Description,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tags: ['GSAP', 'Framer Motion', 'Parallax'],
      color: 'from-green-500 to-teal-500',
    },
  ]

  useEffect(() => {
    if (inView && projectRefs.current.length > 0) {
      projectRefs.current.forEach((ref) => {
        if (ref) {
          gsap.fromTo(
            ref.querySelector('.project-image'),
            {
              y: 30,
            },
            {
              y: -30,
              ease: 'none',
              scrollTrigger: {
                trigger: ref,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          )
        }
      })
    }
  }, [inView])

  const filteredProjects =
    activeCategory === t.filterAll
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-neutral-1000">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-lg">
            <h2 className="text-h2 font-bold text-neutral-200 mb-4">
              <span className="text-primary-500">{t.portfolioTitle}</span> {t.portfolioTitleHighlight}
            </h2>
            <p className="text-body font-mono text-neutral-500 max-w-3xl mx-auto">
              {t.portfolioDescription}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-ui font-mono transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-500 text-neutral-1000 shadow-glow-cyan'
                    : 'bg-neutral-800 text-neutral-500 hover:bg-neutral-700 hover:text-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el
                }}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-primary-500 transition-all duration-400"
              >
                {/* Image with Parallax */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="project-image absolute inset-0 w-full h-[120%] bg-cover bg-center transition-all duration-400 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  {/* Tags */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-caption font-mono bg-neutral-1000/80 backdrop-blur-sm text-primary-500 border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-md">
                  <h3 className="text-h3 font-bold text-neutral-200 mb-2 group-hover:text-primary-500 transition-colors">
                    {language === 'ar' ? project.title : project.titleEn}
                  </h3>
                  <p className="text-caption font-mono text-neutral-500 mb-3 uppercase">
                    {language === 'ar' ? project.titleEn : project.title}
                  </p>
                  <p className="text-body font-mono text-neutral-500 mb-4">
                    {project.description}
                  </p>

                  {/* View Button */}
                  <button className="inline-flex items-center gap-2 text-ui font-mono text-primary-500 hover:gap-3 transition-all">
                    {t.viewProject}
                    <ExternalLink size={16} />
                  </button>
                </div>

                {/* Gradient Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400`}></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
