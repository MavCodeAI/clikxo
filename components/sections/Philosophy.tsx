'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

const philosophyPoints = [
  'Precision over noise',
  'Craft, not just build',
  'Timeless digital experiences',
  'Innovation through simplicity',
  'Quality that speaks volumes',
  'Attention to every detail',
]

export default function Philosophy() {
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
            Our Philosophy
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-neutral-300 max-w-3xl mx-auto"
          >
            The principles that guide every project we undertake
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-charcoal p-8 rounded-sm shadow-luxury hover:shadow-gold transition-all duration-500 h-full border border-neutral-800 hover:border-gold/50">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-ui">
                      {index + 1}
                    </span>
                  </div>
                  <div className="w-full h-px bg-gold/30" />
                </div>

                <blockquote className="font-heading text-h3 text-white leading-tight">
                  "{point}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
