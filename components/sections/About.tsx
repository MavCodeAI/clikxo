'use client'

import { motion } from 'framer-motion'
import { fadeInUp, containerVariants, itemVariants } from '@/lib/animations'

const teamMembers = [
  {
    name: 'Lead Developer',
    role: 'Technical Director',
    bio: 'Full-stack developer specializing in modern web technologies, API integrations, and scalable architectures. Passionate about creating seamless digital experiences.',
    image: '/images/team/lead-developer.jpg',
  },
  {
    name: 'Creative Designer',
    role: 'Design Director',
    bio: 'Creative designer with expertise in branding, UI/UX design, and motion graphics. Dedicated to crafting visually stunning and meaningful designs.',
    image: '/images/team/creative-designer.jpg',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-charcoal">
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
            Meet the Team
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-body text-neutral-300 max-w-3xl mx-auto"
          >
            Crafting Digital Experiences with Precision and Aesthetic Excellence
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm bg-black p-8 shadow-luxury hover:shadow-gold transition-shadow duration-500">
                {/* Placeholder for image */}
                <div className="w-32 h-32 bg-gold/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-heading text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="font-heading text-h3 text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-body text-neutral-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
