'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="fixed top-6 left-6 z-50 glass-panel p-3 hover:shadow-glow-cyan transition-all duration-300 group"
      aria-label="Switch Language"
    >
      <div className="flex items-center gap-2">
        <Globe 
          className={`text-primary-500 ${language === 'ar' ? 'rotate-0' : 'rotate-180'} transition-transform duration-500`} 
          size={20} 
        />
        <span className="text-ui font-mono text-neutral-200 group-hover:text-primary-500 transition-colors">
          {language === 'ar' ? 'EN' : 'ع'}
        </span>
      </div>
      
      {/* Language indicator */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: language === 'en' ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 origin-right"
      />
    </motion.button>
  )
}
