'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-neutral-300 max-w-3xl mx-auto"
          >
            Ready to bring your vision to life? Get in touch and let's create something extraordinary.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="font-heading text-h3 text-white mb-8"
            >
              Start a Project
            </motion.h3>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-ui text-neutral-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-sm text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-ui text-neutral-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-sm text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-ui text-neutral-300 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-sm text-white placeholder-neutral-500 focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-colors duration-300 shadow-luxury flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="font-heading text-h3 text-white mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-ui text-neutral-400">Email</p>
                    <p className="text-body text-white">contact@clikxo.agency</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-ui text-neutral-400">Phone</p>
                    <p className="text-body text-white">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-ui text-neutral-400">Location</p>
                    <p className="text-body text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-neutral-800 hover:bg-gold rounded-sm flex items-center justify-center text-neutral-400 hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Footer logo */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-neutral-800"
            >
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <h3 className="font-heading text-h2 text-gold mb-2">
                    ClikXo
                  </h3>
                  <div className="w-24 h-px bg-gold mx-auto" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
