import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-4xl mx-auto mb-40">
      <div className="text-emerald-500 text-sm mb-6">
        {t.hero.status}
      </div>
      <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tighter leading-none">
        {t.hero.title1} <br /> <span className="text-emerald-500">{t.hero.title2}</span> <br /> {t.hero.title3}
      </h1>
      <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        {t.hero.description}
      </p>
      <a 
        href="#contact" 
        className="inline-block bg-emerald-600 text-black px-8 py-4 font-bold hover:bg-emerald-500 transition-all duration-300 rounded-md"
      >
        {t.hero.button}
      </a>
    </section>
  );
}
