'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, ReactNode } from 'react'

interface TooltipProps {
  content: string
  children: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
}

export function Tooltip({ content, children, position = 'top', delay = 300 }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay) as NodeJS.Timeout
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsVisible(false)
  }

  const positionClasses = {
    top: 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 transform -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
  }

  const arrowClasses = {
    top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-gold border-t-transparent',
    bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-gold border-b-transparent',
    left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-gold border-l-transparent',
    right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-gold border-r-transparent',
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            className={`absolute z-50 ${positionClasses[position]}`}
          >
            <div className="bg-gold text-black px-3 py-2 rounded-sm text-sm font-medium shadow-luxury whitespace-nowrap">
              {content}
            </div>
            <div
              className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
