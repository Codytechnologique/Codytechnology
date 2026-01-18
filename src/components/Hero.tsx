import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-4xl mx-auto mb-40 pt-20">
      <div className="mb-8 text-center">
        <span className="inline-block text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-2 border border-blue-600/30 rounded">
          ● {t.hero.status}
        </span>
      </div>
      <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-center">
        {t.hero.title1} <br /> <span className="text-blue-600">{t.hero.title2}</span> <br /> {t.hero.title3}
      </h1>
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-center">
        {t.hero.description}
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="#contact" 
          className="bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-500 transition-all duration-300 rounded-md"
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  );
}
