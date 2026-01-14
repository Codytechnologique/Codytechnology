import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import type { Language } from '../translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const languages: { code: Language; label: string; name: string }[] = [
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'es', label: 'ES', name: 'Español' }
  ];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="mono text-xl font-bold tracking-tighter">
          <span className="text-emerald-500">Cody</span>Tech<span className="text-emerald-500">_</span>
        </a>
        <nav className="flex items-center gap-4 md:gap-8">
          <div className="mono text-xs space-x-8 hidden md:flex">
            <a href="#services" className="text-gray-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              {t.nav.services}
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              {t.nav.portfolio}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors uppercase tracking-widest">
              {t.nav.contact}
            </a>
          </div>
          
          {/* Language Selector - Always visible */}
          <div className="flex gap-2 pl-4 border-l border-gray-700">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`mono text-xs font-bold px-3 py-1 border transition-all cursor-pointer ${
                  language === lang.code
                    ? 'border-emerald-500 text-emerald-400 bg-emerald-500/10'
                    : 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-400'
                }`}
                title={lang.name}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
