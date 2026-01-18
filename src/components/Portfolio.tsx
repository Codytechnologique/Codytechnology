import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';

export default function Portfolio() {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      title: t.portfolio.project1Title,
      description: t.portfolio.project1Description,
      imageUrl: 'https://via.placeholder.com/400x250/1E3A8A/FFFFFF?text=Project+1',
      link: '#project-saas',
    },
    {
      id: 2,
      title: t.portfolio.project2Title,
      description: t.portfolio.project2Description,
      imageUrl: 'https://via.placeholder.com/400x250/1E3A8A/FFFFFF?text=Project+2',
      link: '#',
    },
    {
      id: 3,
      title: t.portfolio.project3Title,
      description: t.portfolio.project3Description,
      imageUrl: 'https://via.placeholder.com/400x250/1E3A8A/FFFFFF?text=Project+3',
      link: '#',
    },
  ];

  return (
    <section id="portfolio" className="max-w-6xl mx-auto mb-40">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl font-bold uppercase tracking-tighter">{t.portfolio.title}</h2>
        <div className="h-[1px] bg-gray-800 flex-grow"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="tech-card overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <a 
                href={project.link} 
                className="inline-block mono text-blue-600 hover:text-blue-400 transition-colors text-sm"
              >
                {t.portfolio.viewProject} &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
