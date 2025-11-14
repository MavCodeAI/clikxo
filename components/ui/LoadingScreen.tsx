'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
      setTimeout(() => {
        setIsVisible(false)
        onComplete()
      }, 500)
    }, 2000)

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev
        return prev + Math.random() * 15
      })
    }, 200)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center space-y-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-heading text-gold"
        >
          ClikXo
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-neutral-400 font-light"
        >
          Crafting Digital Excellence
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-neutral-800 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-gold to-gold/60 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-center mt-4 text-sm text-neutral-500"
          >
            {Math.round(progress)}%
          </motion.div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gold rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
