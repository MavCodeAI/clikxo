'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import { portfolioData, categories, PortfolioItem } from '@/data/portfolio'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return portfolioData
    return portfolioData.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const openLightbox = (project: PortfolioItem) => {
    setSelectedProject(project)
  }

  const closeLightbox = () => {
    setSelectedProject(null)
  }

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="font-heading text-h2 text-white mb-6"
          >
            Our Portfolio
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-neutral-300 max-w-3xl mx-auto"
          >
            A showcase of our finest work across web development, design, and motion graphics
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-sm font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold text-black shadow-gold'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(project)}
              >
                <div className="relative overflow-hidden rounded-sm bg-black shadow-luxury hover:shadow-gold transition-all duration-500">
                  {/* Placeholder image */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                    <div className="text-center text-neutral-400">
                      <div className="w-16 h-16 bg-gold/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-heading text-gold">
                          {project.category[0].toUpperCase()}
                        </span>
                      </div>
                      <p className="text-caption">Portfolio Image</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="font-heading text-h3 text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-ui text-gold capitalize">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Hover zoom effect */}
                  <div className="absolute inset-0 transform scale-105 opacity-0 group-hover:opacity-20 group-hover:scale-100 transition-all duration-500 bg-gold" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-charcoal max-w-4xl w-full rounded-sm shadow-luxury overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Project image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                  <div className="text-center text-neutral-400">
                    <div className="w-20 h-20 bg-gold/20 rounded-sm flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl font-heading text-gold">
                        {selectedProject.category[0].toUpperCase()}
                      </span>
                    </div>
                    <p className="text-body">Project Preview</p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-heading text-h3 text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-gold font-semibold capitalize">
                        {selectedProject.category}
                      </p>
                    </div>
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        className="flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
                      >
                        <span className="text-ui">View Live</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-body text-neutral-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {selectedProject.technologies && (
                    <div>
                      <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gold/10 text-gold text-ui rounded-sm border border-gold/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
