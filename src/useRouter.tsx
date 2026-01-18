import { useState, useEffect } from 'react';

export type Page = 'home' | 'project-detail';

export function useRouter() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'project-saas') {
        setCurrentPage('project-detail');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return { currentPage, setCurrentPage };
}
