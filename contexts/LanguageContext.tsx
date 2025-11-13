'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
  translations: typeof translations.en
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem('clikxo-language') as Language
    if (savedLanguage && savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Save language to localStorage and update document direction
    localStorage.setItem('clikxo-language', language)
    
    // Update document direction and lang attribute
    document.documentElement.setAttribute('lang', language)
    document.documentElement.setAttribute('dir', 'ltr')
    
    // Update body classes for styling
    document.body.classList.remove('arabic', 'english')
    document.body.classList.add('english')
  }, [language])

  const t = (key: keyof typeof translations.en): string => {
    return translations.en[key] || translations.en[key]
  }

  const translationsObj = translations.en

  const isRTL = false

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    translations: translationsObj,
    isRTL,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
