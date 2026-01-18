import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { translations } from '../translations';
import SaasDashboard from './SaasDashboard';

export default function ProjectDetail() {
  const { language } = useLanguage();
  const t = translations[language].projectDetail;

  const teamMembers = [
    { name: "Alice Dupont", role: "Product Manager", image: "👩‍💼" },
    { name: "Bob Martin", role: "Lead Developer", image: "👨‍💻" },
    { name: "Claire Leblanc", role: "UI/UX Designer", image: "👩‍🎨" },
    { name: "David Chen", role: "Full Stack Dev", image: "👨‍💻" },
  ];

  const timeline = [
    { month: "Mois 1", event: "Conception & Research" },
    { month: "Mois 2-3", event: "Développement Frontend" },
    { month: "Mois 4-5", event: "Backend & Intégrations" },
    { month: "Mois 6", event: "Tests & Optimisations" },
    { month: "Mois 7", event: "Déploiement & Monitoring" },
  ];

  return (
    <article className="max-w-5xl mx-auto mb-40">
      {/* Header */}
      <div className="mb-16">
        <div className="mb-6 text-center">
          <span className="inline-block text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-2 border border-blue-600/30 rounded">
            ● PLATEFORME SAAS
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          {t.title}
        </h1>
        <p className="text-gray-400 text-lg text-center max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      {/* Featured Image */}
      <div className="mb-16 tech-card overflow-hidden">
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 rounded-lg">
          <SaasDashboard />
        </div>
      </div>

      {/* Project Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Vue d'ensemble du Projet</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="tech-card p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">🎯 {t.objective}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.objectiveDesc}
            </p>
          </div>
          <div className="tech-card p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-600">⚡ {t.challenge}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t.challengeDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.mainFeatures}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Dashboard Intuitif", desc: "Vue complète de tous vos projets, tâches et équipes" },
            { title: "Gestion des Tâches", desc: "Créer, assigner et suivre les tâches en temps réel" },
            { title: "Collaboration Temps Réel", desc: "Commentaires, mentions et notifications instantanées" },
            { title: "IA Intégrée", desc: "Suggestions intelligentes et automatisation des workflows" },
            { title: "Intégrations", desc: "Slack, Gmail, Google Drive, Zapier et plus" },
            { title: "Rapports & Analytics", desc: "Statistiques détaillées et métriques de performance" },
          ].map((feature, i) => (
            <div key={i} className="tech-card p-6">
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.technologies}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { cat: "Frontend", techs: ["React 18", "TypeScript", "Tailwind CSS"] },
            { cat: "Backend", techs: ["Node.js", "Express", "PostgreSQL"] },
            { cat: "Services", techs: ["OpenAI API", "Stripe", "Firebase"] },
          ].map((group, i) => (
            <div key={i} className="tech-card p-6">
              <h3 className="font-bold mb-3 text-blue-600">{group.cat}</h3>
              <ul className="space-y-2">
                {group.techs.map((tech, j) => (
                  <li key={j} className="text-gray-300 text-sm">✓ {tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.developmentProcess}</h2>
        <div className="space-y-6">
          {[
            { step: "1", title: "Conception UX/UI", desc: "Wireframes et prototypes interactifs pour valider le concept" },
            { step: "2", title: "Développement Frontend", desc: "Construction de l'interface avec React et composants réutilisables" },
            { step: "3", title: "API & Backend", desc: "Création des endpoints REST et gestion de la base de données" },
            { step: "4", title: "Intégrations IA", desc: "Intégration d'OpenAI pour les suggestions intelligentes" },
            { step: "5", title: "Tests & QA", desc: "Tests unitaires, d'intégration et test utilisateur" },
            { step: "6", title: "Déploiement", desc: "Mise en production et monitoring continu" },
          ].map((phase, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-600 text-white font-bold">
                  {phase.step}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="font-bold mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.timeline}</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-blue-600/30"></div>
          <div className="space-y-8 pl-20">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-16 top-1 h-4 w-4 bg-blue-600 rounded-full border-4 border-slate-900"></div>
                <div className="tech-card p-6">
                  <div className="font-bold text-blue-600 mb-2">{item.month}</div>
                  <div className="text-gray-300">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.team}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i} className="tech-card p-8 text-center">
              <div className="text-5xl mb-4">{member.image}</div>
              <h3 className="font-bold mb-2">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">{t.results}</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { metric: "500+", label: "Utilisateurs Actifs" },
            { metric: "99.9%", label: "Uptime" },
            { metric: "50ms", label: "Temps de Réponse" },
            { metric: "4.8/5", label: "Note Utilisateurs" },
          ].map((item, i) => (
            <div key={i} className="tech-card p-8 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
              <div className="text-gray-400 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">{t.cta}</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          {t.ctaDesc}
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 text-white px-8 py-4 font-bold hover:bg-blue-500 transition-all duration-300 rounded-md"
        >
          {t.ctaButton}
        </a>
      </section>
    </article>
  );
}
