'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import ParticleBackground from '../ParticleBackground'
import CursorEffect from '../CursorEffect'
import { useLanguage } from '@/contexts/LanguageContext'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    // Enhanced GSAP grid animation
    const ctx = gsap.context(() => {
      gsap.from('.grid-line', {
        opacity: 0,
        scaleX: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.out',
      })

      gsap.from('.floating-element', {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 1,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    }),
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.15,
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    }),
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-1000"
    >
      {/* Enhanced Cursor Effect */}
      <CursorEffect />

      {/* Enhanced Particle Background */}
      <ParticleBackground />

      {/* Enhanced Animated Grid Lines */}
      <div className="absolute inset-0 grid-lines pointer-events-none">
        <div className="grid-line absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>
        <div className="grid-line absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent"></div>
        <div className="grid-line absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent"></div>
        
        {/* Enhanced Vertical Lines */}
        <div className="grid-line absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary-500/30 to-transparent"></div>
        <div className="grid-line absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-secondary-500/30 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element absolute w-2 h-2 bg-primary-500 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Enhanced Content */}
      <div className="container-custom relative z-10 text-center py-xxl">
        {/* Studio Name - Enhanced 3D Effect */}
        <div className="mb-8 overflow-hidden perspective-1000">
          <div className="flex justify-center gap-2 transform-style-preserve-3d">
            {t('studioName').split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={letterVariants}
                className="text-hero font-bold text-primary-500 glow-text inline-block transform hover:scale-110 transition-transform cursor-hover"
                style={{
                  textShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Enhanced Main Headline */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="floating-element text-h2 md:text-hero font-bold text-neutral-200 mb-6 max-w-5xl mx-auto leading-tight relative"
        >
          <span className="relative z-10">
            {t('mainHeadline')}
            <br />
            <motion.span 
              className="text-primary-500 relative inline-block cursor-hover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {t('subtitle')}
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </motion.span>
          </span>
          
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-secondary-500/10 blur-3xl -z-10"></div>
        </motion.h1>

        {/* Enhanced Subtitle */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="floating-element text-body md:text-h3 font-mono text-neutral-500 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('tagline')}
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="relative"
        >
          <motion.a
            href="#contact"
            className="relative inline-block bg-primary-500 text-neutral-1000 px-8 py-4 text-ui font-mono font-medium overflow-hidden cursor-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button Background Animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-primary-500"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Button Text */}
            <span className="relative z-10 flex items-center gap-2">
              {t('ctaButton')}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-primary-500 blur-xl opacity-30"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.a>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div className="flex flex-col items-center gap-2 text-primary-500">
            <ChevronDown 
              size={32} 
              className="animate-bounce"
            />
            <span className="text-caption font-mono opacity-60">
              {t('scrollDown')}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}
