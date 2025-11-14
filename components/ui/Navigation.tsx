'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Code, Palette, Zap, Mail } from 'lucide-react'

const navItems = [
  { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
  { id: 'about', label: 'About', icon: Code, href: '#about' },
  { id: 'services', label: 'Services', icon: Zap, href: '#services' },
  { id: 'portfolio', label: 'Portfolio', icon: Palette, href: '#portfolio' },
  { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-gold/30 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('hero')}
              className="group text-2xl font-heading text-gold hover:text-gold/80 transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                {/* Custom Logo Design */}
                <div className="w-8 h-8 relative">
                  {/* C Shape */}
                  <div className="absolute inset-0 border-2 border-gold rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                  {/* Inner Design */}
                  <div className="absolute inset-1 bg-gold/20 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  {/* Accent Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-2 bg-gold transform -translate-x-1/2 group-hover:h-3 transition-all duration-300" />
                  <div className="absolute bottom-0 left-1/2 w-px h-2 bg-gold transform -translate-x-1/2 group-hover:h-3 transition-all duration-300" />
                </div>
              </div>
              <span className="font-bold">ClikXo</span>
            </motion.button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-6 py-3 text-ui font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.id
                      ? 'text-black bg-gold shadow-gold'
                      : 'text-neutral-300 hover:text-gold hover:bg-gold/10'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    <item.icon className={`w-4 h-4 transition-transform duration-300 ${
                      activeSection === item.id ? 'rotate-12' : 'group-hover:rotate-12'
                    }`} />
                    {item.label}
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold rounded-full"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gold/10 border border-gold/30 text-gold font-medium rounded-full hover:bg-gold hover:text-black transition-all duration-300 shadow-luxury"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get Started</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 text-white hover:bg-gold/10 rounded-full transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-xl z-30 md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-b from-charcoal to-black border-l border-gold/30 z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 px-6">
                {/* Logo */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 mb-8"
                >
                  <div className="relative">
                    {/* Custom Logo Design */}
                    <div className="w-8 h-8 relative">
                      {/* C Shape */}
                      <div className="absolute inset-0 border-2 border-gold rounded-full transform rotate-45" />
                      {/* Inner Design */}
                      <div className="absolute inset-1 bg-gold/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                      </div>
                      {/* Accent Lines */}
                      <div className="absolute top-0 left-1/2 w-px h-2 bg-gold transform -translate-x-1/2" />
                      <div className="absolute bottom-0 left-1/2 w-px h-2 bg-gold transform -translate-x-1/2" />
                    </div>
                  </div>
                  <span className="text-xl font-heading text-gold font-bold">ClikXo</span>
                </motion.div>

                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gold/20 text-gold border-l-4 border-gold shadow-gold'
                          : 'text-neutral-300 hover:text-gold hover:bg-gold/10 hover:translate-x-2'
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-auto mb-8"
                >
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-6 py-4 bg-gold text-black font-semibold rounded-xl hover:bg-gold/90 transition-all duration-300 shadow-luxury flex items-center justify-center gap-2"
                  >
                    <span>Get In Touch</span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
