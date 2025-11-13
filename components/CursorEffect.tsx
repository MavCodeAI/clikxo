'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorPosition {
  x: number
  y: number
}

export default function CursorEffect() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    document.addEventListener('mousemove', updateCursorPosition)
    
    // Add hover states to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .cursor-hover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`
    }
  }, [cursorPosition])

  // Don't show custom cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <motion.div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 mix-blend-difference"
      initial={{ scale: 1, opacity: 0.7 }}
      animate={{ 
        scale: isHovering ? 1.5 : 1,
        opacity: isHovering ? 1 : 0.7,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Outer ring */}
      <div className="w-full h-full rounded-full border-2 border-primary-500 animate-spin-slow"></div>
      
      {/* Inner dot */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 rounded-full"></div>
      
      {/* Trail effect */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary-500/20"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}
