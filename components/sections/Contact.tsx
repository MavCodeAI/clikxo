'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, Mail, Phone, MessageCircle } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setStatus('success')
    setTimeout(() => {
      setStatus('idle')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactMethods = [
    {
      icon: Mail,
      label: t.emailMethod,
      value: 'hello@clikxo.com',
      href: 'mailto:hello@clikxo.com',
    },
    {
      icon: Phone,
      label: t.phoneMethod,
      value: '+971 XX XXX XXXX',
      href: 'tel:+971xxxxxxxxx',
    },
    {
      icon: MessageCircle,
      label: t.whatsappMethod,
      value: t.whatsappContact,
      href: 'https://wa.me/971xxxxxxxxx',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-neutral-900 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 pointer-events-none"></div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-xl">
            <h2 className="text-h2 font-bold text-neutral-200 mb-4">
              <span className="text-primary-500">{t.contactTitle}</span> {t.contactTitleHighlight}
            </h2>
            <p className="text-h3 font-bold text-neutral-200 max-w-3xl mx-auto mb-2">
              {t.contactQuote}
            </p>
            <p className="text-body font-mono text-neutral-500 max-w-2xl mx-auto">
              {t.contactDescription}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-panel p-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-ui font-mono text-neutral-200 mb-2">
                    {t.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-neutral-500 py-4 text-body font-mono text-neutral-200 focus:border-primary-500 focus:shadow-glow-input focus:outline-none transition-all"
                    placeholder={t.namePlaceholder}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-ui font-mono text-neutral-200 mb-2">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-neutral-500 py-4 text-body font-mono text-neutral-200 focus:border-primary-500 focus:shadow-glow-input focus:outline-none transition-all"
                    placeholder={t.emailPlaceholder}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-ui font-mono text-neutral-200 mb-2">
                    {t.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-500 py-4 text-body font-mono text-neutral-200 focus:border-primary-500 focus:shadow-glow-input focus:outline-none transition-all"
                    placeholder={t.phonePlaceholder}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-ui font-mono text-neutral-200 mb-2">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-neutral-500 py-4 text-body font-mono text-neutral-200 focus:border-primary-500 focus:shadow-glow-input focus:outline-none transition-all resize-none"
                    placeholder={t.messagePlaceholder}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'success'}
                  className="w-full bg-primary-500 text-neutral-1000 px-8 py-4 text-ui font-mono font-medium hover:scale-105 active:scale-95 transition-all shadow-glow-cyan hover:shadow-glow-violet flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'success' ? (
                    t.sentSuccess
                  ) : (
                    <>
                      {t.sendMessage}
                      <Send size={18} />
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-success-500 text-ui font-mono text-center"
                  >
                    {t.successMessage}
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="group flex items-center gap-4 glass-panel p-6 hover:shadow-glow-violet transition-all"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-800 group-hover:bg-primary-500/20 transition-colors">
                      <method.icon className="text-primary-500" size={24} />
                    </div>
                    <div>
                      <p className="text-ui font-mono text-neutral-500 mb-1">
                        {method.label}
                      </p>
                      <p className="text-body font-mono text-neutral-200 group-hover:text-primary-500 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* CTA Box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="glass-panel p-lg bg-gradient-to-br from-primary-500/10 to-secondary-500/10"
              >
                <h3 className="text-h3 font-bold text-neutral-200 mb-4">
                  {t.readyToStart} <span className="text-primary-500">{t.readyToStartHighlight}</span>
                </h3>
                <p className="text-body font-mono text-neutral-500 mb-6 leading-relaxed">
                  {t.readyToStartText}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/971xxxxxxxxx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary-500 text-neutral-1000 px-6 py-3 text-ui font-mono font-medium hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={18} />
                    {t.whatsapp}
                  </a>
                  <a
                    href="mailto:hello@clikxo.com"
                    className="inline-flex items-center gap-2 border border-primary-500 text-primary-500 px-6 py-3 text-ui font-mono font-medium hover:bg-primary-500 hover:text-neutral-1000 transition-all"
                  >
                    <Mail size={18} />
                    {t.emailBtn}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
