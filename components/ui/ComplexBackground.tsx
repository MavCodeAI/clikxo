'use client'

import { motion } from 'framer-motion'

export default function ComplexBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Large geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-gold/20"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        />

        <motion.div
          className="absolute top-40 right-20 w-24 h-24 border border-gold/30"
          animate={{
            rotate: -360,
            scale: [1, 0.9, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
          }}
        />

        {/* Floating dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Complex grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="complexGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(198, 166, 103, 0.1)" strokeWidth="0.5"/>
                <circle cx="50" cy="50" r="1" fill="rgba(198, 166, 103, 0.1)"/>
                <circle cx="0" cy="0" r="0.5" fill="rgba(198, 166, 103, 0.1)"/>
                <circle cx="100" cy="100" r="0.5" fill="rgba(198, 166, 103, 0.1)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#complexGrid)" />
          </svg>
        </div>

        {/* Animated wave patterns */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,40 L1200,120 L0,120 Z"
              fill="rgba(198, 166, 103, 0.1)"
            />
          </svg>
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />
    </div>
  )
}
