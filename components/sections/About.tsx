'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Palette } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const teamMembers = [
  {
    name: 'abDarwesh',
    role: 'abRole',
    roleEn: 'abRoleEn',
    description: 'abDescription',
    icon: Code2,
    gradient: 'from-primary-500 to-secondary-500',
    skills: ['Next.js', 'React.js', 'GSAP', 'TypeScript'],
  },
  {
    name: 'aliKhan',
    role: 'aliRole',
    roleEn: 'aliRoleEn',
    description: 'aliDescription',
    icon: Palette,
    gradient: 'from-secondary-500 to-primary-500',
    skills: ['Branding', 'UI/UX', 'Motion Design', 'Visual Identity'],
  },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })
  
  const { t, isRTL } = useLanguage()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-neutral-1000 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Enhanced Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-xl">
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <h2 className="text-h2 font-bold text-neutral-200">
                {t('aboutTitle')} <span className="text-primary-500 glow-text cursor-hover">{t('aboutTitleHighlight')}</span>
              </h2>
            </motion.div>
            <motion.p
              className="text-body font-mono text-neutral-500 max-w-3xl mx-auto mb-2"
              variants={itemVariants}
            >
              {t('aboutDescription')}
            </motion.p>
            <motion.p
              className="text-ui font-mono text-neutral-500 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              {t('aboutDescription2')}
            </motion.p>
          </motion.div>

          {/* Enhanced Team Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-xl">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ 
                  y: -12, 
                  scale: 1.02,
                  rotateY: isRTL ? -5 : 5,
                }}
                className="group relative glass-panel p-lg hover:shadow-glow-violet transition-all duration-500 perspective-1000 cursor-hover"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Enhanced Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${member.gradient} rounded-lg`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon with Animation */}
                  <motion.div
                    className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-neutral-800 group-hover:bg-primary-500/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <member.icon className="text-primary-500" size={32} />
                  </motion.div>

                  {/* Name & Role */}
                  <h3 className="text-h3 font-bold text-neutral-200 mb-2 group-hover:text-primary-500 transition-colors cursor-hover">
                    {t(member.name)}
                  </h3>
                  <p className="text-ui font-mono text-primary-500 mb-4">
                    {t(member.role)} • {t(member.roleEn)}
                  </p>

                  {/* Description */}
                  <p className="text-body font-mono text-neutral-500 leading-relaxed mb-6">
                    {t(member.description)}
                  </p>

                  {/* Enhanced Skills with Animated Bars */}
                  <div className="space-y-3">
                    {member.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="group/skill cursor-hover"
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-ui font-mono text-neutral-400 group-hover/skill:text-neutral-200 transition-colors">
                            {skill}
                          </span>
                          <span className="text-caption font-mono text-primary-500 opacity-60">
                            {Math.floor(Math.random() * 20 + 80)}%
                          </span>
                        </div>
                        <div className="h-1 bg-neutral-800 rounded-full overflow-hidden">
                          <motion.div
                            className="skill-bar h-full bg-gradient-to-r from-primary-500 to-secondary-500 origin-left"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Enhanced Decorative Corners */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary-500"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary-500"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Enhanced Philosophy */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div
              className="glass-panel p-lg max-w-4xl mx-auto relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-secondary-500/10 to-primary-500/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <p className="text-h3 font-bold text-neutral-200 leading-relaxed relative z-10">
                "{t('philosophy')} <span className="text-primary-500 glow-text cursor-hover">{t('philosophyHighlight')}</span>
                <br className="hidden md:block" />
                {t('philosophyText')}"
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
