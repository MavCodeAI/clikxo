'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Award, Users, ChevronDown } from 'lucide-react'
import { staggerContainer, staggerItem } from '@/lib/animations'

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio')
    portfolioSection?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black">
        {/* Primary gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
          animate={{
            background: [
              'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
              'linear-gradient(135deg, #000000 0%, #111111 50%, #000000 100%)',
              'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center space-y-12"
        >
          {/* Main Brand */}
          <motion.div variants={staggerItem} className="space-y-6">
            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/20 rounded-full backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Sparkles className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium text-sm uppercase tracking-wider">
                Premium Digital Agency
              </span>
            </motion.div>

            <motion.h1
              variants={staggerItem}
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-white leading-none"
            >
              <motion.span
                className="block bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                ClikXo
              </motion.span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl lg:text-3xl font-heading text-gold font-light tracking-wide"
            >
              Where Code Meets Art
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={staggerItem} className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white/90 font-medium mb-6">
              Crafting Extraordinary Digital Experiences
            </h2>

            <motion.p
              variants={staggerItem}
              className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto"
            >
              We transform ideas into stunning realities through cutting-edge technology,
              innovative design, and unparalleled craftsmanship.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          >
            {[
              { number: '100+', label: 'Projects Completed', icon: Award, color: 'from-blue-500/20 to-cyan-500/20' },
              { number: '5.0★', label: 'Client Rating', icon: Star, color: 'from-yellow-500/20 to-orange-500/20' },
              { number: '3+', label: 'Years Experience', icon: Users, color: 'from-green-500/20 to-emerald-500/20' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className={`relative p-8 bg-gradient-to-br ${stat.color} border border-white/10 rounded-2xl backdrop-blur-sm group`}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <motion.div
                    className="p-3 bg-white/10 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm md:text-base text-neutral-300 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <motion.button
              onClick={scrollToPortfolio}
              className="group relative px-8 py-4 bg-gold text-black font-semibold rounded-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View Our Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="group px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300 shadow-lg hover:shadow-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Start Your Project
                <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              className="group flex flex-col items-center space-y-4 text-neutral-400 hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="text-sm uppercase tracking-widest font-medium">
                Discover More
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 border border-current rounded-full group-hover:bg-gold/10 transition-colors duration-300"
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-gold/20 rounded-tl-3xl" />
        <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-gold/20 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-gold/20 rounded-bl-3xl" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-gold/20 rounded-br-3xl" />
      </div>
    </section>
  )
}
