'use client'

import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ]

  return (
    <footer className="bg-neutral-1000 border-t border-neutral-800 py-lg">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold text-primary-500 mb-2">CLIKXO</h3>
            <p className="text-caption font-mono text-neutral-500">
              © {currentYear} Clikxo Studio. {t('footerRights')}
            </p>
          </div>

          {/* Credits */}
          <div className="text-center">
            <p className="text-body font-mono text-neutral-500 mb-2">
              {t('madeWithLove')} <span className="text-primary-500">♥</span> {t('madeInUAE')}
            </p>
            <p className="text-caption font-mono text-neutral-500">
              {t('teamCredits')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 flex items-center justify-center border border-neutral-800 hover:border-primary-500 text-neutral-500 hover:text-primary-500 transition-all hover:shadow-glow-cyan"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
