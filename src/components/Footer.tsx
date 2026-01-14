import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-900 flex justify-between items-center gap-6">
      <div className="mono text-[10px] text-gray-600">
        {t.footer.copyright}
      </div>
      <div className="mono text-[10px] text-gray-600">
        {t.footer.location}
      </div>
    </footer>
  );
}
