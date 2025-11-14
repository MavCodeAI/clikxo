'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseFollower() {
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16) // Center the cursor
      mouseY.set(e.clientY - 16)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    document.addEventListener('mousemove', updateMousePosition)

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
        }}
      >
        <div className="w-full h-full bg-gold rounded-full opacity-80" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-40"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderWidth: isHovering ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="w-full h-full border border-gold/50 rounded-full" />
      </motion.div>

      {/* Particle trail effect */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-1 h-1 bg-gold/30 rounded-full pointer-events-none"
          style={{
            x: springX,
            y: springY,
          }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1, 0],
            x: springX.get() + Math.random() * 40 - 20,
            y: springY.get() + Math.random() * 40 - 20,
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </>
  )
}
