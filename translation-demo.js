// Simple Translation System Demo
// This file demonstrates how the bilingual system works without needing Next.js

// Translation System (from lib/translations.ts)
const translations = {
  ar: {
    studioName: 'CLIKXO',
    mainHeadline: 'نحن لا نبني مواقع، بل نصنع أبعادًا رقمية',
    portfolioTitle: 'أعمالنا',
    portfolioTitleHighlight: 'المميزة',
    contactTitle: 'تواصل',
    contactTitleHighlight: 'معنا',
    filterAll: 'الكل',
    filterWeb: 'تطوير ويب',
    filterGraphics: 'تصميم جرافيك',
    filterInteractive: 'تفاعلي',
    viewProject: 'عرض المشروع',
    nameLabel: 'الاسم',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    messageLabel: 'رسالتك',
    sendMessage: 'إرسال الرسالة',
  },
  en: {
    studioName: 'CLIKXO',
    mainHeadline: 'We don\'t build websites, we create digital dimensions',
    portfolioTitle: 'Our',
    portfolioTitleHighlight: 'Featured Work',
    contactTitle: 'Get in',
    contactTitleHighlight: 'Touch',
    filterAll: 'All',
    filterWeb: 'Web Development',
    filterGraphics: 'Graphic Design',
    filterInteractive: 'Interactive',
    viewProject: 'View Project',
    nameLabel: 'Name',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    sendMessage: 'Send Message',
  }
};

// Language Context (simplified version)
class LanguageContext {
  constructor() {
    this.language = localStorage.getItem('language') || 'ar';
    this.listeners = [];
  }

  setLanguage(lang) {
    this.language = lang;
    localStorage.setItem('language', lang);
    this.notifyListeners();
  }

  getTranslation(key) {
    return translations[this.language]?.[key] || key;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(listener => listener(this.language));
  }
}

// Create global context
const languageContext = new LanguageContext();

// React-style hook (simplified)
const useLanguage = () => ({
  language: languageContext.language,
  t: (key) => languageContext.getTranslation(key),
  setLanguage: (lang) => languageContext.setLanguage(lang)
});

// Demo Usage
function demonstrateTranslation() {
  console.log('🌍 CLIkXO Bilingual System Demo\n');
  
  // Show Arabic version
  console.log('🇦🇪 Arabic Version (RTL):');
  const arabic = useLanguage();
  arabic.setLanguage('ar');
  console.log(`Studio: ${arabic.t('studioName')}`);
  console.log(`Hero: ${arabic.t('mainHeadline')}`);
  console.log(`Portfolio: ${arabic.t('portfolioTitle')} ${arabic.t('portfolioTitleHighlight')}`);
  console.log(`Contact: ${arabic.t('contactTitle')} ${arabic.t('contactTitleHighlight')}`);
  console.log(`Filters: ${arabic.t('filterAll')}, ${arabic.t('filterWeb')}, ${arabic.t('filterGraphics')}`);
  console.log(`CTA: ${arabic.t('sendMessage')}\n`);
  
  // Show English version
  console.log('🇺🇸 English Version (LTR):');
  const english = useLanguage();
  english.setLanguage('en');
  console.log(`Studio: ${english.t('studioName')}`);
  console.log(`Hero: ${english.t('mainHeadline')}`);
  console.log(`Portfolio: ${english.t('portfolioTitle')} ${english.t('portfolioTitleHighlight')}`);
  console.log(`Contact: ${english.t('contactTitle')} ${english.t('contactTitleHighlight')}`);
  console.log(`Filters: ${english.t('filterAll')}, ${english.t('filterWeb')}, ${english.t('filterGraphics')}`);
  console.log(`CTA: ${english.t('sendMessage')}\n`);
  
  // Show dynamic switching
  console.log('🔄 Dynamic Language Switching:');
  const current = useLanguage();
  console.log(`Current language: ${current.language}`);
  console.log(`Direction: ${current.language === 'ar' ? 'RTL' : 'LTR'}`);
  
  // Switch and show change
  current.setLanguage('ar');
  console.log(`After switch to Arabic - Direction: RTL`);
  current.setLanguage('en');
  console.log(`After switch to English - Direction: LTR`);
}

// Export for use in browser console or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { useLanguage, translations, demonstrateTranslation };
}

// Run demo if this file is executed directly
if (typeof window === 'undefined' && require.main === module) {
  demonstrateTranslation();
}

// For browser console use:
if (typeof window !== 'undefined') {
  window.ClikxoDemo = { useLanguage, demonstrateTranslation };
  console.log('🌍 Clikxo Translation System Loaded!');
  console.log('Run: ClikxoDemo.demonstrateTranslation()');
}