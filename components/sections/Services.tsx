'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, ArrowRight } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'
import { Tooltip } from '@/components/ui/Tooltip'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Next.js, React, API & AI integrations. Building scalable, performant web applications with modern technologies.',
    features: ['Next.js Applications', 'API Integrations', 'AI Solutions', 'Performance Optimization'],
    tooltip: 'Modern web development with cutting-edge technologies',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Branding, Logo, UI/UX design. Creating visually stunning designs that communicate your brand story.',
    features: ['Brand Identity', 'Logo Design', 'UI/UX Design', 'Print Materials'],
    tooltip: 'Creative design solutions for your brand identity',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    icon: Zap,
    title: 'Motion & Interactive',
    description: 'Cinematic visuals, micro-interactions. Bringing designs to life with smooth animations and interactive experiences.',
    features: ['Motion Graphics', 'Micro-interactions', 'Cinematic Videos', 'Interactive Prototypes'],
    tooltip: 'Dynamic motion design and interactive experiences',
    color: 'from-orange-500/20 to-red-500/20',
  },
]

export default function Services() {
  return (
    <section className="py-24 bg-black">
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
            Our Services
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-neutral-300 max-w-3xl mx-auto"
          >
            Three specialized departments working in harmony to deliver exceptional digital experiences
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className={`bg-charcoal p-8 rounded-sm shadow-luxury hover:shadow-gold transition-all duration-500 h-full border border-neutral-800 hover:border-gold/50 overflow-hidden`}>
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="mb-6">
                    <Tooltip content={service.tooltip}>
                      <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300 cursor-pointer">
                        <service.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </Tooltip>
                    <h3 className="font-heading text-h3 text-white mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-body text-neutral-300 mb-6 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center text-ui text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-gold rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn flex items-center gap-2 text-gold hover:text-gold/80 transition-colors duration-300"
                  >
                    <span className="text-ui font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-sm border-2 border-transparent"
                  whileHover={{
                    borderColor: '#C6A667',
                    transition: { duration: 0.3 }
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-neutral-400 mb-6">
            Ready to start your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-black font-semibold rounded-sm hover:bg-gold/90 transition-all duration-300 shadow-luxury hover:shadow-gold"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
