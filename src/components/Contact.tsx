import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="max-w-4xl mx-auto mb-40 border border-blue-600/20 bg-blue-600/10 p-8 md:p-16 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold uppercase mb-4">{t.contact.title}</h2>
        <p className="text-sm text-gray-200">{t.contact.subtitle}</p>
      </div>

      <form action="https://formspree.io/f/mdaaoena" method="POST" className="space-y-8">
        <div className="grid md:grid-cols-1 gap-8">
          <div className="group">
            <label className="block text-[10px] text-gray-500 mb-2 uppercase group-focus-within:text-blue-600 transition-colors italic">
              {t.contact.inputEmail}
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder={t.contact.placeholderEmail} 
              className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white font-light"
            />
          </div>
        </div>
        <div className="group">
          <label className="block text-[10px] text-gray-500 mb-2 uppercase group-focus-within:text-blue-600 transition-colors italic">
            {t.contact.inputMessage}
          </label>
          <textarea 
            name="message" 
            rows={4} 
            required 
            placeholder={t.contact.placeholderMessage} 
            className="w-full bg-gray-900 border border-gray-700 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-white font-light resize-none"
          />
        </div>
        
        <div className="pt-4">
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-5 text-sm uppercase tracking-widest transition-all active:scale-95 rounded-md"
          >
            {t.contact.button}
          </button>
        </div>
      </form>
    </section>
  );
}
