import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="max-w-6xl mx-auto mb-40">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold uppercase tracking-tighter">{t.services.title}</h2>
        <div className="h-[1px] bg-gray-800 flex-grow"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="tech-card p-10">
          <div className="mono text-emerald-500 text-sm mb-4">module.web_dev</div>
          <h3 className="text-2xl font-bold mb-4 uppercase">{t.services.webDev}</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {t.services.webDevDesc}
          </p>
          <ul className="mono text-xs text-gray-500 space-y-2">
            <li>{t.services.webDevTech1}</li>
            <li>{t.services.webDevTech2}</li>
            <li>{t.services.webDevTech3}</li>
          </ul>
        </div>

        <div className="tech-card p-10">
          <div className="mono text-emerald-500 text-sm mb-4">module.automation</div>
          <h3 className="text-2xl font-bold mb-4 uppercase">{t.services.automation}</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            {t.services.automationDesc}
          </p>
          <ul className="mono text-xs text-gray-500 space-y-2">
            <li>{t.services.automationTech1}</li>
            <li>{t.services.automationTech2}</li>
            <li>{t.services.automationTech3}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
