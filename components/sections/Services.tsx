'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const services = [
  {
    id: 'webDev',
    icon: Code,
    gradient: 'from-primary-500 to-secondary-500',
    features: [
      'Next.js 15 & React 19',
      'Performance Optimization',
      'Advanced SEO',
      'Responsive Design',
      'TypeScript',
      'PWA Ready'
    ],
  },
  {
    id: 'graphicDesign',
    icon: Palette,
    gradient: 'from-secondary-500 to-primary-500',
    features: [
      'Brand Identity',
      'UI/UX Design',
      'Motion Design',
      'Illustrations',
      'Print Design',
      'Visual Strategy'
    ],
  },
  {
    id: 'interactive',
    icon: Sparkles,
    gradient: 'from-primary-500 to-purple-500',
    features: [
      'Framer Motion',
      'GSAP Animations',
      'Three.js / R3F',
      'Micro Interactions',
      'Scroll Effects',
      'Custom Particles'
    ],
  },
]

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  
  const { t } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },
  }

  return (
    <section id="services" className="section-padding bg-neutral-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Enhanced Section Title */}
          <motion.div variants={cardVariants} className="text-center mb-xl">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <h2 className="text-h2 font-bold text-neutral-200">
                {t('servicesTitle')} <span className="text-primary-500 glow-text cursor-hover">{t('servicesTitleHighlight')}</span>
              </h2>
            </motion.div>
            <motion.p
              className="text-body font-mono text-neutral-500 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              {t('servicesDescription')}
            </motion.p>
          </motion.div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: index % 2 === 0 ? 5 : -5,
                }}
                className="group relative bg-neutral-1000 p-lg border border-neutral-800 hover:border-primary-500 transition-all duration-500 hover:shadow-glow-violet perspective-1000 cursor-hover"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-lg opacity-0 group-hover:opacity-15 transition-all duration-500`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon with 3D Animation */}
                  <motion.div
                    className="w-16 h-16 mb-6 flex items-center justify-center relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  >
                    <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-xl"></div>
                    <service.icon
                      className="text-neutral-500 group-hover:text-primary-500 transition-colors duration-400 relative z-10"
                      size={48}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-h3 font-bold text-neutral-200 mb-2 group-hover:text-primary-500 transition-colors">
                    {t(service.id as any)}
                  </h3>
                  <p className="text-caption font-mono text-neutral-500 mb-4 uppercase tracking-wider">
                    {t((service.id + 'En') as any)}
                  </p>

                  <p className="text-body font-mono text-neutral-500 mb-6 leading-relaxed">
                    {t((service.id + 'Description') as any)}
                  </p>

                  {/* Enhanced Features with Animation */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group/feature cursor-hover"
                      >
                        <div className="flex items-center gap-2">
                          <motion.span
                            className="w-2 h-2 bg-primary-500 rounded-full"
                            whileHover={{ scale: 1.5, backgroundColor: '#00FFFF' }}
                          />
                          <span className="text-ui font-mono text-neutral-500 group-hover/feature:text-neutral-200 transition-colors">
                            {feature}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-secondary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:via-secondary-500/5 group-hover:to-primary-500/5 transition-all duration-500 pointer-events-none rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
