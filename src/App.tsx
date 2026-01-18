import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import { LanguageProvider } from './LanguageContext';
import { useRouter } from './useRouter';

function App() {
  const { currentPage } = useRouter();

  return (
    <LanguageProvider>
      <div className="selection:bg-blue-600/30">
        <Header />
        <main className="pt-32 px-6">
          {currentPage === 'home' ? (
            <>
              <Hero />
              <Services />
              <Portfolio />
              <Contact />
            </>
          ) : currentPage === 'project-detail' ? (
            <ProjectDetail />
          ) : null}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
